import { Camera } from './camera.interface';

type CameraId = Pick<Camera, 'id'>;

export type AddFavoriteCameraParams = {
    id: CameraId;
}

export type AddFavoriteCameraResponse = {
    success?: boolean;
}