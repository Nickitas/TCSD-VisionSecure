import React, { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";

export const Edit: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroSection title="Редактирование" />
    </section>
  );
};
