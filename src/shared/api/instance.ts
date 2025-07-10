import pako from 'pako';
import { OptionsType } from 'cookies-next/client';

export interface IResponseError {
    error: string;
}

export const ApiTypeValues = {
    MAIN: 'main',
} as const;

type ApiType = (typeof ApiTypeValues)[keyof typeof ApiTypeValues];

export const ApiMethodValues = {
    GET: 'GET',
    HEAD: 'HEAD',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
} as const;

type MethodApiType = (typeof ApiMethodValues)[keyof typeof ApiMethodValues];

export type ApiContentType = 'json' | 'zip' | 'm3u8' | 'form-data' | 'blob';

export type Api = {
    path: string;
    type: ApiType;
    body?: BodyInit | Record<string, any> | FormData;
    contentType?: ApiContentType;
    cookie?: OptionsType;
    method?: MethodApiType;
    headers?: Record<string, string>;
    signal?: AbortSignal;
    lastModified?: string;
    responseType?: 'json' | 'blob' | 'text' | 'arrayBuffer';
};

const getApiRoute = (type: ApiType): string => {
    const routesMap: Record<ApiType, string | undefined> = {
        [ApiTypeValues.MAIN]: process.env.NEXT_PUBLIC_MAIN_API,
    };

    return routesMap[type] || '';
};

export const apiInstance = async <T>({
    path,
    body,
    cookie,
    type,
    method = ApiMethodValues.GET,
    signal,
    contentType = 'json',
    lastModified = new Date().toUTCString(),
    headers = {},
    responseType = 'json',
}: Api): Promise<T & IResponseError> => {
    const apiRoute = getApiRoute(type);

    const contentTypeMap: Record<ApiContentType, string> = {
        json: 'application/json',
        zip: 'application/gzip',
        m3u8: 'application/vnd.apple.mpegurl',
        'form-data': 'multipart/form-data',
        blob: 'application/octet-stream',
    };

    const createDefaultHeaders = (cookie?: OptionsType): Record<string, string> => {
        const defaultHeaders: Record<string, string> = {
            'User-Agent': navigator.userAgent,
            'If-Modified-Since': lastModified,
            ...headers,
        };

        // Не добавляем Content-Type для FormData, так как браузер сам установит его с boundary
        if (contentType !== 'form-data') {
            defaultHeaders['Content-Type'] = contentTypeMap[contentType];
        }

        return defaultHeaders;
    };

    const requestHeaders = createDefaultHeaders(cookie);

    const processRequestBody = (): BodyInit | undefined => {
        if (method === 'GET' || method === 'HEAD') return undefined;

        if (body instanceof FormData) {
            return body;
        }

        if (body instanceof Blob || body instanceof URLSearchParams) {
            return body;
        }

        if (contentType === 'zip') {
            return pako.deflate(JSON.stringify(body));
        }

        if (contentType === 'blob' && body instanceof ArrayBuffer) {
            return new Blob([body]);
        }

        if (typeof body === 'string') {
            return body;
        }

        return JSON.stringify(body);
    };

    try {
        const response = await fetch(`${apiRoute}/${path}`, {
            body: processRequestBody(),
            method,
            headers: requestHeaders,
            signal,
            credentials: 'include',
        });

        console.log(`Request to ${apiRoute}/${path} with headers:`, requestHeaders);

        if (response.status === 304) {
            return 'DATA_NOT_MODIFIED' as any;
        }

        if (response.status >= 400 && response.status < 500) {
            if ([401, 403].includes(response.status)) {
                
            }

            let errorResponse;
            try {
                errorResponse = await response.json();
            } catch {
                errorResponse = { error: `Error: ${response.status}` };
            }

            throw {
                error: errorResponse?.error || `HTTP Error: ${response.status}`,
                statusCode: response.status,
                response: errorResponse,
            };
        }

        const responseContentType = response.headers.get('content-type');

        const handleResponse = async () => {
            if (responseType === 'blob') {
                return response.blob();
            }

            if (responseType === 'text') {
                return response.text();
            }

            if (responseType === 'arrayBuffer') {
                return response.arrayBuffer();
            }

            // Автоматическое определение по content-type, если responseType не указан
            if (responseContentType?.includes('application/gzip')) {
                const compressedData = await response.arrayBuffer();
                const decompressed = pako.inflate(compressedData, { to: 'string' });
                return JSON.parse(decompressed);
            }

            if (responseContentType?.includes('application/json')) {
                return response.json();
            }

            if (responseContentType?.includes('text/')) {
                return response.text();
            }

            // По умолчанию возвращаем blob для бинарных данных
            return response.blob();
        };

        const responseData = await handleResponse();

        if (responseData && typeof responseData === 'object' &&
            ('error' in responseData || 'statusCode' in responseData || 'blockedAmount' in responseData)) {
            throw {
                error: responseData.error || responseData.statusCode || 'API Error',
                time: responseData.time || null,
                blockedAmount: responseData.blockedAmount || null,
                response: responseData,
            };
        }

        return responseData;

    } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
            throw { error: 'Request aborted', isAborted: true };
        }
        throw error;
    }
};