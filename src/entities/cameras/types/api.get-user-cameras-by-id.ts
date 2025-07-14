import { Camera } from "./camera.interface";

type CameraId = Pick<Camera, "id">;

export type GetUserCamerasByIdParams = {
  id: CameraId;
};

export type GetUserCamerasByIdResponse = {
  camera: Camera;
};
