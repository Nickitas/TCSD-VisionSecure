import { Camera } from '@/entities/cameras/types';

export type StopCameraParams = {
    id: Pick<Camera, 'id'>;
}

export type StopCameraResponse = {
    stream: string | null;
}