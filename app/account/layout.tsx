import { Aside } from '@/widgets/Aside';
import { Footer } from '@/widgets/Footer';
import { ReactNode } from 'react';

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr] items-stretch gap-x-8 h-full sm:grid-cols-[160px_1fr]">
      <Aside />
      <div className='flex flex-col max-w-full justify-between gap-4 px-3 max-h-[calc(100vh-65px)] overflow-y-auto'>
        {children}
        <Footer />
      </div>
    </div>
  );
}
