import pako from 'pako';
import { getCookie, OptionsType, setCookie } from 'cookies-next/client';

export interface IResponseError {
    // error: string;
    // message: string;
    detail: [
        {
            loc: string[] | number[];
            msg: string;
            type: string;
        }
    ];
}

export const ApiTypeValues = {
    MAIN: 'main',
} as const;

type ApiType = (typeof ApiTypeValues)[keyof typeof ApiTypeValues];

export const ApiMethodValues = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};

type MethodApi = (typeof ApiMethodValues)[keyof typeof ApiMethodValues];

export type Api = {
    path: string;
    type: ApiType;
    body?: BodyInit | Record<string, any>;
    cookie?: OptionsType;
    method?: MethodApi;
    headers?: Record<string, string>;
    signal?: AbortSignal;
    lastModified?: string;
};

const getApiRoute = (type: ApiType): string => {
    const routesMap: Record<ApiType, string | undefined> = {
        [ApiTypeValues.MAIN]: process.env.NEXT_PUBLIC_MAIN_API,
    };

    return routesMap[type] || '';
};

export const apiInstance = <T>({
    path,
    body,
    cookie,
    type,
    method = ApiMethodValues.GET,
    signal,
    zip = false,
    lastModified = new Date().toUTCString(),
    headers = {},
}: Api & { zip?: boolean }): Promise<T & IResponseError> => {
    const apiRoute = getApiRoute(type);

    const createDefaultHeaders = (cookie?: OptionsType): Record<string, string> => ({
        // 'Authorization': `Bearer ${getCookie('token', cookie)?.toString().trim() || ''}`,
        'Authorization': `${getCookie('token', cookie)}`,
        'Content-Type': zip ? 'application/gzip' : 'application/json',
        'User-Agent': navigator.userAgent,
        'X-User-Agent': navigator.userAgent,
        'If-Modified-Since': lastModified,
        ...headers,
    });

    const requestHeaders = createDefaultHeaders(cookie);

    const processedBody = () => {
        if (method === 'GET' || method === 'HEAD') return undefined;
        if (zip) return pako.deflate(JSON.stringify(body));
        if (typeof body === 'string' || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams) {
            return body;
        }
        return JSON.stringify(body);
    };

    return fetch(`${apiRoute}/${path}`, {
        body: processedBody(),
        method,
        headers: requestHeaders,
        signal,
    })
        .then(async (response) => {
            if (response.status === 304) {
                return 'DATA_NOT_MODIFIED';
            }

            if (response.status >= 400 && response.status < 500) {
                if ([403, 401].includes(response.status)) {
                    setCookie('token', '');
                }

                const errorResponse = await response.json().catch(() => null);
                throw new Error(errorResponse?.error || `Error: ${response.status}`);
            }

            const contentType = response.headers.get('content-type');

            const handleResponseContent = async () => {
                if (contentType?.includes('application/gzip') && zip) {
                    const compressedData = await response.arrayBuffer();
                    const decompressed = pako.inflate(compressedData, { to: 'string' });
                    return JSON.parse(decompressed);
                }

                if (contentType?.includes('application/json')) {
                    return response.json();
                }

                if (contentType?.includes('text/html')) {
                    return { document: await response.text() } as T;
                }

                return response.blob();
            };

            return handleResponseContent();
        })
        .then((e) => {
            if (e.error || e.statusCode || e.blockedAmount) {
                throw {
                    error: e.error || e.statusCode || 'Fetch error',
                    time: e.time || null,
                    blockedAmount: e.blockedAmount || null,
                };
            }

            return e;
        });
};