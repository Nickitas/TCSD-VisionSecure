export type { Camera } from "./camera.interface";
export type { CameraId } from "./camera.interface";

export type { GetAllCamerasResponse } from "./api.get-all-cameras";
export type { GetCameraByIdParams, GetCameraByIdResponse } from "./api.get-camera-by-id";
export type { AddCameraParams, AddCameraResponse } from "./api.add-camera";
export type { EditCameraParams, EditCameraResponse } from "./api.edit-camera";
export type { DeleteCameraParams, DeleteCameraResponse } from "./api.delete-camera";
export type { GetAllUsersCamerasResponse } from "./api.get-all-users-cameras";
export type { GetCamerasByUserParams, GetCamerasByUserResponse } from "./api.get-cameras-by-user";
export type {
  GetUserCamerasByIdParams,
  GetUserCamerasByIdResponse,
} from "./api.get-user-cameras-by-id";

export type { GetFavoriteCamerasAllResponse } from "./api.favorite-cameras-all";
export type {
  GetFavoriteCameraByIdParams,
  GetFavoriteCameraByIdResponse,
} from "./api.favorite-camera-by-id";
export type { AddFavoriteCameraParams, AddFavoriteCameraResponse } from "./api.add-favorite-camera";
export type {
  DeleteFavoriteCameraParams,
  DeleteFavoriteCameraResponse,
} from "./api.delete-favorite-camera";
