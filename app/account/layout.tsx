import { ReactNode } from 'react';

export default function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid flex-grow items-stretch gap-x-4 grid-cols-[auto_minmax(280px,400px)]">
      <div>Aside</div>
      {children}
    </div>
  );
}
