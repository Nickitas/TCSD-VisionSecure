import { Camera } from "./camera.interface";

type CameraId = Pick<Camera, "id">;

export type GetFavoriteCameraByIdParams = {
  id: CameraId;
};

export type GetFavoriteCameraByIdResponse = {
  camera: Camera;
};
