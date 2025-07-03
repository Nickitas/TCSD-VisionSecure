import { ReactNode } from 'react';

export default function UnauthorizedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-8 h-full p-6 max-w-[1280px] mx-auto">
      {children}
    </section>
  );
}
