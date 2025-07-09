"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@heroui/button';
import { ArrowRightIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { HeroSection } from '@/widgets/HeroSection';

interface CameraCard {
    id: string;
    imageUrl: string;
    title: string;
    location: string;
    description: string;
}

export const Galere: FC = () => {

    const cameras: CameraCard[] = [
        {
            id: '1',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #1',
            location: 'Центральный вход',
            description: 'Обзор главного входа в здание'
        },
        {
            id: '2',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #2',
            location: 'Парковка',
            description: 'Обзор парковочной зоны'
        },
        {
            id: '3',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #1',
            location: 'Центральный вход',
            description: 'Обзор главного входа в здание'
        },
        {
            id: '4',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #2',
            location: 'Парковка',
            description: 'Обзор парковочной зоны'
        },
        {
            id: '5',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #1',
            location: 'Центральный вход',
            description: 'Обзор главного входа в здание'
        },
        {
            id: '6',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #2',
            location: 'Парковка',
            description: 'Обзор парковочной зоны'
        },
        {
            id: '7',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #1',
            location: 'Центральный вход',
            description: 'Обзор главного входа в здание'
        },
        {
            id: '8',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #2',
            location: 'Парковка',
            description: 'Обзор парковочной зоны'
        },
        {
            id: '9',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #1',
            location: 'Центральный вход',
            description: 'Обзор главного входа в здание'
        },
        {
            id: '10',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #2',
            location: 'Парковка',
            description: 'Обзор парковочной зоны'
        },
        {
            id: '11',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #1',
            location: 'Центральный вход',
            description: 'Обзор главного входа в здание'
        },
        {
            id: '12',
            imageUrl: '/placeholder-camera.jpg',
            title: 'Камера #2',
            location: 'Парковка',
            description: 'Обзор парковочной зоны'
        },
    ];

    return (
        <section className="flex flex-col gap-8">
            <HeroSection title="Галерея" />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 sm:px-6">
                {cameras.map((camera) => (
                    <div
                        key={camera.id}
                        className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                        <div className="relative h-64 w-full">
                            <Image
                                src={camera.imageUrl}
                                alt={camera.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {camera.title}
                                    </h3>

                                    <div className="flex items-center text-sm text-gray-300 mb-2">
                                        <svg
                                            className="w-4 h-4 mr-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        {camera.location}
                                    </div>

                                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                                        {camera.description}
                                    </p>

                                    <div className='flex gap-2'>
                                        <Button
                                            color="primary"
                                            variant='solid'
                                            className="flex-grow w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                                            endContent={<ArrowRightIcon className="w-4 h-4" />}
                                            as={Link}
                                            href={appRouting.dashboard.camera(camera.id).path}
                                        >
                                            Перейти
                                        </Button>
                                        <Button
                                            color="warning"
                                            variant="ghost"
                                            className="flex-grow-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                                            isIconOnly
                                            endContent={<StarIcon className="w-4 h-4" />}
                                            onPress={() => { }}
                                        />
                                        <Button
                                            color="danger"
                                            variant="ghost"
                                            className="flex-grow-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                                            isIconOnly
                                            endContent={<TrashIcon className="w-4 h-4" />}
                                            onPress={() => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};