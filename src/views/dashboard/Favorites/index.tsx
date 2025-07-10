import React, { FC } from 'react';
import { HeroSection } from '@/widgets/HeroSection';

export const Favorites: FC = () => {

    return (
        <section className="flex flex-col gap-4">
            <HeroSection title="Избранное" />

        </section>
    );
}