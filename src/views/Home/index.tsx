"use client";

import React, { FC } from "react";
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { Button } from '@heroui/button';
import { HeroSection } from "@/widgets/HeroSection";
import { camerasMock } from '@/entities/cameras/mock';
import { CameraCard } from '@/shared/ui/cards/CameraCard';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { siteConfig } from '@/_kernel/config/site.config';

export const Home: FC = () => {
  return (
    <section className="pb-10 flex flex-col gap-4">
      <HeroSection
        title={siteConfig.name}
        description={siteConfig.description}
        endContent={
          <Button
            as={Link}
            color="primary"
            variant='ghost'
            endContent={<ArrowRightIcon className="w-4 h-4" />}
            href={appRouting.dashboard.main.path}
          >
            Начать
          </Button>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-6">
        {camerasMock.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
    </section>
  );
};
