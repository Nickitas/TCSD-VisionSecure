import React, { FC } from "react";
import { ProfileEdit } from '@/features/users/ui';
import { HeroSection } from "@/widgets/HeroSection";

export const Edit: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroSection 
        title="Редактирование" 
      />
      <ProfileEdit />
    </section>
  );
};
