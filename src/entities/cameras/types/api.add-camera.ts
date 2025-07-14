import { Camera } from "./camera.interface";

export type AddCameraParams = {
  body: Pick<
    Camera,
    | "name"
    | "model"
    | "ipAddress"
    | "streamUrl"
    | "location"
    | "description"
    | "coordinates"
    | "fps"
    | "resolution"
  >;
};

export type AddCameraResponse = {
  cameras: Array<Camera>;
};
