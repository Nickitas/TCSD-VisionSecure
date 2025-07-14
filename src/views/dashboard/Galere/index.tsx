"use client";

import React, { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";
import { CameraCard } from "@/shared/ui/cards/CameraCard";
import { camerasMock } from "@/entities/cameras/mock";

export const Galere: FC = () => {
  return (
    <section className="flex flex-col gap-8">
      <HeroSection title="Галерея" />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 sm:px-6">
        {camerasMock.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
    </section>
  );
};
