import { Camera } from "@/entities/cameras/types";

export type PreviewCameraParams = {
  id: Pick<Camera, "id">;
};

export type PreviewCameraResponse = Blob; // Promise<string>;
