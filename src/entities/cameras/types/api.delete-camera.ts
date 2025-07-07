import { Camera } from './camera.interface'

export type DeleteCameraParams = {
    id: Pick<Camera, 'id'>;
}

export type DeleteCameraResponse = {
    success?: boolean;
}