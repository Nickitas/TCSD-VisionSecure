import { Camera } from './camera.interface'

export type EditCameraParams = {
    id: string,
    body: Pick<Camera, 'name' | 'stream_url' | 'location'>;
}

export type EditCameraResponse = {
    success?: boolean;
}