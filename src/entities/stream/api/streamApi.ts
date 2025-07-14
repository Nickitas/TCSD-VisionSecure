import { apiInstance, ApiTypeValues } from "@/shared/api/instance";
import { queryOptions } from "@tanstack/react-query";

import {
  StartCameraParams,
  StartCameraResponse,
  StopCameraParams,
  StopCameraResponse,
  PreviewCameraParams,
  PreviewCameraResponse,
} from "../types";

class StreamApi {
  private baseKey: string;

  constructor(private readonly prefixKey: string) {
    this.baseKey = `${this.prefixKey}`;
  }

  startCamera = ({ id }: StartCameraParams) => {
    return queryOptions({
      queryKey: [this.baseKey, "startCamera", id],
      queryFn: ({ signal }) =>
        apiInstance<StartCameraResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/start/${id}`,
          contentType: "m3u8",
          signal,
        }),
    });
  };

  stopCamera = ({ id }: StopCameraParams) => {
    return queryOptions({
      queryKey: [this.baseKey, "stopCamera", id],
      queryFn: ({ signal }) =>
        apiInstance<StopCameraResponse>({
          type: ApiTypeValues.MAIN,
          path: `${this.baseKey}/stop/${id}`,
          contentType: "m3u8",
          signal,
        }),
    });
  };

  getPreviewCameraQuery = ({ id }: PreviewCameraParams) => {
    return {
      queryKey: ["stream", "getPreviewCamera", id],
      queryFn: ({ signal }: { signal?: AbortSignal }) =>
        apiInstance<PreviewCameraResponse>({
          type: ApiTypeValues.MAIN,
          path: `stream/get_preview/${id}`,
          responseType: "blob",
          signal,
        }).then((blob) => URL.createObjectURL(blob)),
    };
  };
}

export const streamApi = new StreamApi("stream");
