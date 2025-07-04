import { Camera } from './camera.interface'

export type AddCameraParams = {
    body: Pick<Camera, 'name' | 'stream_url' | 'location'>
}

export type AddCameraResponse = {
    cameras: Array<Camera>;
}