import { Camera } from './camera.interface';

export type GetCameraByIdParams = Pick<Camera, 'id'>;

export type GetCameraByIdResponse = {
    camera: Camera;
}