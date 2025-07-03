import { ReactNode } from 'react';

export default function AuthorizationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="flex items-center justify-center min-h-screen">
      {children}
    </section>
  );
}
