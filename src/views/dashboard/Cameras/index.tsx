"use client";

import React, { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";
import {
  CamerasControls,
  CamerasTable,
  CameraAddModal,
  CameraEditModal,
  CameraDelateModal,
} from "@/features/cameras/ui";
import { useCameraSearch } from "@/features/cameras/hooks";
import { camerasMock } from "@/entities/cameras/mock";

export const Cameras: FC = () => {
  const { searchValue, setSearchValue, filteredCameras } = useCameraSearch(camerasMock);

  return (
    <>
      <section className="flex flex-col gap-4">
        <HeroSection title="Камеры" />
        <CamerasControls searchValue={searchValue} setSearchValue={setSearchValue} />
        <CamerasTable cameras={filteredCameras} />
      </section>
      <CameraAddModal />
      <CameraEditModal />
      <CameraDelateModal />
    </>
  );
};
