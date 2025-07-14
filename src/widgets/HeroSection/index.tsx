import React, { FC } from "react";
import { Divider } from "@heroui/divider";
import { title as titleStyle, subtitle as subtitleStyle } from "@/_kernel/assets/styles/primitives";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  description?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
};

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  startContent,
  endContent,
}) => {
  return (
    <div className="sticky top-0 z-30 flex flex-col gap-2 backdrop-blur-md backdrop-saturate-200 bg-muted/50 pt-4 px-2">
      <div className="flex items-center justify-between gap-3">
        {startContent && <div className="flex items-center">{startContent}</div>}
        <div className="flex-1">
          <h1 className={titleStyle()}>{title}</h1>
        </div>
        {endContent && <div className="flex items-center">{endContent}</div>}
      </div>
      {subtitle && <p className={subtitleStyle()}>{subtitle}</p>}
      {description && <p className="text-muted-foreground max-w-2xl">{description}</p>}
      <Divider className="mt-2" />
    </div>
  );
};
