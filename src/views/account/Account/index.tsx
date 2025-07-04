import React, { FC } from 'react';
import { title } from '@/_kernel/assets/styles/primitives';

export const Account: FC = () => {

    return (
        <section className="flex flex-col gap-4 h-full">
            <h1 className={title()}>Мои данные</h1>
            
        </section>
    );
}