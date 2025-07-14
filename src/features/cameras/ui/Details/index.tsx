"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  CogIcon,
  MapPinIcon,
  ShieldCheckIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { HeroSection } from "@/widgets/HeroSection";
import { Camera } from "@/entities/cameras/types";
import { camerasMock } from "@/entities/cameras/mock";
import { appRouting } from "@/_kernel/config/app.routing.config";

type CameraId = Pick<Camera, "id">;

type CameraDetailsProps = CameraId;

export const CameraDetails: FC<CameraDetailsProps> = ({ id }) => {
  const camera = camerasMock[+id];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="flex flex-col gap-4">
      <HeroSection
        title="Камера #1"
        description={camera.location}
        startContent={
          <Button
            as={Link}
            href={appRouting.dashboard.cameras.path}
            variant="bordered"
            isIconOnly
            startContent={<ArrowLeftIcon className="w-6 h-6" />}
          />
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {/* Основная секция с видео/изображением */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
          <div className="relative h-96 w-full">
            <Image
              src={camera.streamUrl}
              alt={camera.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <div
                className={`w-2 h-2 rounded-full mr-2 ${camera.status === "online" ? "bg-green-500" : "bg-red-500"}`}
              ></div>
              {camera.status === "online" ? "В сети" : "Не в сети"}
            </div>
          </div>

          {/* Панель управления */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
            <Button color="primary">Управление</Button>
            <Button variant="flat">Настройки</Button>
            <Button variant="flat">История</Button>
            <Button variant="flat" className="ml-auto">
              Полный экран
            </Button>
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
                  <span className="font-medium">Разрешение:</span> {camera.resolution} ({camera.fps}{" "}
                  FPS)
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
                <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Последняя активность:</span>{" "}
                  {formatTime(camera.lastActive.toISOString())}
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
};
