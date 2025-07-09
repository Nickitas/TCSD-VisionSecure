import { Aside } from '@/widgets/Aside';
import { ReactNode } from 'react';

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[220px_1fr] items-stretch gap-x-6 h-full">
      <Aside />
      {children}
    </div>
  );
}
