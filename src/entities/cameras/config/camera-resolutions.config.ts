export const cameraResolutionsConfig = [
    {
        key: '1920x1080',
        label: 'Full HD (1920×1080)'
    },
    {
        key: '2560x1440',
        label: '2K QHD (2560×1440)'
    },
    {
        key: '3840x2160',
        label: '4K UHD (3840×2160)'
    },
    {
        key: '1280x720',
        label: 'HD (1280×720)'
    },
    {
        key: '640x480',
        label: 'SD (640×480)'
    },
    {
        key: '320x240',
        label: 'QVGA (320×240)'
    },
    {
        key: '4096x2160',
        label: '4K DCI (4096×2160)'
    },
    {
        key: '7680x4320',
        label: '8K UHD (7680×4320)'
    }
] as const;

export type CameraResolutionType = typeof cameraResolutionsConfig[number]['key'];