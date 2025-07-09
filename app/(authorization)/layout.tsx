import { ReactNode } from 'react';
import { Footer } from '@/widgets/Footer';

export default function AuthorizationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-between gap-7 min-h-screen">
      {children}
      <Footer />
    </section>
  );
}
