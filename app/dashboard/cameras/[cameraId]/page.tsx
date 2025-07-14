"use client";

import { useParams } from "next/navigation";
import { CameraDetails } from "@/features/cameras/ui/Details";

export default function CameraIdPage() {
  const params = useParams();
  const cameraId = params.cameraId as string;

  return <CameraDetails id={cameraId} />;
}
