import { ReactNode } from 'react';
import { Footer } from '@/widgets/Footer';

export default function UnauthorizedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-8 h-full p-6 max-w-[1280px] mx-auto">
      {children}
      <Footer />
    </section>
  );
}
