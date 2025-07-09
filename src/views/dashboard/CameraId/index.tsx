"use client";

import React, { FC } from 'react';
import Image from 'next/image';
import { HeroSection } from '@/widgets/HeroSection';
import { Button } from '@heroui/button';
import { CalendarIcon, ClockIcon, CogIcon, MapPinIcon, ShieldCheckIcon, WifiIcon } from '@heroicons/react/24/outline';

export const CameraId: FC = () => {

    const camera = {
        id: '1',
        title: 'Камера #1',
        location: 'Центральный вход, этаж 1',
        description: 'Камера наблюдения за главным входом в здание. Охватывает зону проходной, турникеты и часть холла.',
        imageUrl: '/placeholder-camera.jpg',
        status: 'online',
        lastActive: '2023-05-15T14:30:00Z',
        resolution: '1920x1080',
        fps: 30,
        model: 'Hikvision DS-2CD2347G2-LU',
        ipAddress: '192.168.1.15',
        coordinates: '55.7522, 37.6156',
        installationDate: '2022-10-10'
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <section className="flex flex-col gap-4">
            <HeroSection 
                title="Камера #1" 
                description={camera.location}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6">
                {/* Основная секция с видео/изображением */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="relative h-96 w-full">
                        <Image
                            src={camera.imageUrl}
                            alt={camera.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${camera.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            {camera.status === 'online' ? 'В сети' : 'Не в сети'}
                        </div>
                    </div>

                    {/* Панель управления */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
                        <Button color="primary">Управление</Button>
                        <Button variant="flat">Настройки</Button>
                        <Button variant="flat">История</Button>
                        <Button variant="flat" className="ml-auto">Полный экран</Button>
                    </div>
                </div>

                {/* Секция с информацией */}
                <div className="space-y-6">
                    {/* Блок с описанием */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-2">Описание</h3>
                        <p className="text-gray-600 dark:text-gray-300">{camera.description}</p>
                    </div>

                    {/* Блок с технической информацией */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-3">Технические данные</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <CogIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">Модель:</span> {camera.model}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <WifiIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">IP-адрес:</span> {camera.ipAddress}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <ShieldCheckIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">Разрешение:</span> {camera.resolution} ({camera.fps} FPS)
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Блок с метаданными */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-3">Метаданные</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">Координаты:</span> {camera.coordinates}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">Установлена:</span> {formatDate(camera.installationDate)}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <span className="text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">Последняя активность:</span> {formatTime(camera.lastActive)}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Последние события */}
            <div className="px-4 sm:px-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-lg mb-4">Последние события</h3>
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        <p>Нет событий за последние 24 часа</p>
                    </div>
                </div>
            </div>
        </section>
    );
}