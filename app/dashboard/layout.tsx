import { AsideCameras } from '@/widgets/AsideCameras';
import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[260px_1fr] items-stretch gap-x-4 h-full">
      <AsideCameras />
      {children}
    </div>
  );
}
