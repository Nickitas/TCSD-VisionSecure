import React, { FC } from 'react';
import { title } from '@/_kernel/assets/styles/primitives';

export const Home: FC = () => {

    return (
        <section className="flex flex-col gap-4 h-full">
            <h1 className={title()}>Home</h1>
        </section>
    );
}