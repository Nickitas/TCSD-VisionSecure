import { Camera } from "./camera.interface";

export type DeleteCameraParams = Pick<Camera, "id">;

export type DeleteCameraResponse = {
  success?: boolean;
};
