import { ReactNode } from 'react';
import { Aside } from '@/widgets/Aside';
import { Footer } from '@/widgets/Footer';

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr] items-stretch gap-x-8 h-full sm:grid-cols-[140px_1fr]">
      <Aside />
      <div className='flex flex-col max-w-full justify-between gap-4 max-h-[calc(100vh-80px)] overflow-y-auto'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
