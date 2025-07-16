export const cameraFrameratesConfig = [
    { key: '30', label: '30 fps' },
    { key: '25', label: '25 fps' },
    { key: '20', label: '20 fps' },
    { key: '15', label: '15 fps' },
    { key: '10', label: '10 fps' },
    { key: '5', label: '5 fps' }
] as const;

export type CameraFrameratesType = typeof cameraFrameratesConfig[number]['key'];