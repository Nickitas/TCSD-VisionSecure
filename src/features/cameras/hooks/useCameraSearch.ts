"use client";

import { useState, useEffect } from "react";
import { Camera } from "@/entities/cameras/types";
import { debounce } from "lodash";

export const useCameraSearch = (cameras: Camera[]) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredCameras, setFilteredCameras] = useState<Camera[]>(cameras);

  useEffect(() => {
    const debouncedFilter = debounce(() => {
      const result = cameras.filter((camera) => {
        if (!searchValue) return true;
        const searchLower = searchValue.toLowerCase();
        return (
          camera.name.toLowerCase().includes(searchLower) ||
          camera.model && camera.model.toLowerCase().includes(searchLower) ||
          camera.ipAddress.toLowerCase().includes(searchLower) ||
          camera.location.toLowerCase().includes(searchLower)
        );
      });
      setFilteredCameras(result);
    }, 300);

    debouncedFilter();
    return () => debouncedFilter.cancel();
  }, [searchValue, cameras]);

  return {
    searchValue,
    setSearchValue,
    filteredCameras,
  };
};
