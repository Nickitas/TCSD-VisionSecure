import React, { FC } from 'react';

export const MapFrame: FC = () => {
    return (
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&lang=ru_RU"
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-md"
            allowFullScreen
        />
    );
}