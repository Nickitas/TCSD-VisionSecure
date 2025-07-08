import { Camera } from './camera.interface';

type CameraId = Pick<Camera, 'id'>;

export type DeleteFavoriteCameraParams = {
    id: CameraId;
}

export type DeleteFavoriteCameraResponse = {
    success?: boolean;
}