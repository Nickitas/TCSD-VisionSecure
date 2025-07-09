import { Camera } from '@/entities/cameras/types';

export type StartCameraParams = {
    id: Pick<Camera, 'id'>;
}

export type StartCameraResponse = {
    streamUrl: string | null;
}