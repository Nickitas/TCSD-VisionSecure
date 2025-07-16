import { Camera, CameraId } from "./camera.interface";

type CameraBody = Omit<
  Camera,
  | "id"
  | "status"
  | "lastActive"
  | "created_at"
  | "updated_at"
>;

export type EditCameraParams = {
  id: CameraId;
  body: CameraBody;
};

export type EditCameraResponse = {
  success?: boolean;
};