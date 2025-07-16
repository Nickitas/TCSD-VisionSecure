export const cameraFormatsConfig = [
    { key: 'h264', label: 'H.264' },
    { key: 'h265', label: 'H.265' },
    { key: 'mpeg4', label: 'MPEG-4' },
    { key: 'mjpeg', label: 'MJPEG' }
] as const;

export type CameraFormatsType = typeof cameraFormatsConfig[number]['key'];