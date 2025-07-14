export interface Camera {
  id: string;

  name: string;
  model: string;
  ipAddress: string;
  streamUrl: string;

  location: string;
  description: string;
  coordinates?: string | null;

  status: "online" | "offline" | "unknown";

  fps?: number | null;
  resolution?: string | null;

  lastActive: Date;
  created_at: Date;
  updated_at: Date;
}

export type CameraId = Camera["id"];
