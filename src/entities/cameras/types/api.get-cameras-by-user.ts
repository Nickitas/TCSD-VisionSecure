import { User } from "@/entities/user/types";
import { Camera } from "./camera.interface";

type UserId = Pick<User, "id">;
type CameraId = Pick<Camera, "id">;

export type GetCamerasByUserParams = {
  id: UserId;
};

export type GetCamerasByUserResponse = {
  user_id?: UserId;
  camera_id?: CameraId;
};
