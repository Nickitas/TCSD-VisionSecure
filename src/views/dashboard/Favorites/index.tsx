"use client";

import React, { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";
import { camerasMock } from "@/entities/cameras/mock";
import { CameraCard } from "@/shared/ui/cards/CameraCard";

export const Favorites: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroSection title="Избранное" />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 sm:px-6">
        {camerasMock.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
    </section>
  );
};
