import React, { FC } from "react";
import { UserCard } from "@/shared/ui/cards/UserCard";
import { HeroSection } from "@/widgets/HeroSection";

export const Account: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroSection title="Мои данные" />
      <UserCard />
    </section>
  );
};
