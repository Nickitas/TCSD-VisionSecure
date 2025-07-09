import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Camera } from '@/entities/cameras/types';
import { streamApi } from '../api';

type CameraId = Pick<Camera, 'id'>;

export const useCameraStream = ({ id }: CameraId)  => {
    const queryClient = useQueryClient();

    const startStream = useCallback(async () => {
        try {
            const queryOptions = streamApi.startCamera({ id: { id } });
            await queryClient.fetchQuery(queryOptions);
            return true;
        } catch (error) {
            console.error('Failed to start camera stream:', error);
            return false;
        }
    }, [id, queryClient]);

    const stopStream = useCallback(async () => {
        try {
            const queryOptions = streamApi.stopCamera({ id: { id } });
            await queryClient.fetchQuery(queryOptions);
            return true;
        } catch (error) {
            console.error('Failed to stop camera stream:', error);
            return false;
        }
    }, [id, queryClient]);

    const getPreview = useCallback(async () => {
        try {
            const queryOptions = streamApi.getPreviewCameraQuery({ id: { id } });
            const previewUrl = await queryClient.fetchQuery(queryOptions);
            return previewUrl;
        } catch (error) {
            console.error('Failed to get camera preview:', error);
            return null;
        }
    }, [id, queryClient]);

    return {
        startStream,
        stopStream,
        getPreview,
    };
};