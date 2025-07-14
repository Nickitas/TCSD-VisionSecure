import { Camera } from "./camera.interface";

export type EditCameraParams = {
  id: string;
  body: Pick<Camera, "name" | "streamUrl" | "location">;
};

export type EditCameraResponse = {
  success?: boolean;
};
