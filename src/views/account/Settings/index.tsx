import React, { FC } from "react";
import { ProfileSettings } from '@/features/users/ui';
import { HeroSection } from "@/widgets/HeroSection";

export const Settings: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroSection title="Настройки" />
      <ProfileSettings />
    </section>
  );
};
