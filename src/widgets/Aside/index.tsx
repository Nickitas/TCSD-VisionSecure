"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tabs, Tab } from "@heroui/tabs";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { siteConfig } from "@/_kernel/config/site.config";
import { useLogout } from "@/entities/user/hooks";
import {
  UserCircleIcon,
  PhotoIcon,
  VideoCameraIcon,
  UsersIcon,
  StarIcon,
  Cog6ToothIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const iconComponents: Record<string, IconType> = {
  "/account": UserCircleIcon,
  "/dashboard": PhotoIcon,
  "/dashboard/cameras": VideoCameraIcon,
  "/dashboard/users": UsersIcon,
  "/dashboard/favorites": StarIcon,
  "/account/settings": Cog6ToothIcon,
};

const DEFAULT_ICON = PhotoIcon;

export const Aside: FC = () => {
  const pathname = usePathname();
  const { handleLogout } = useLogout();

  const getActiveKey = () => {
    const sortedKeys = siteConfig.navItems
      .map(item => item.key)
      .sort((a, b) => b.length - a.length);

    const activeKey = sortedKeys.find(key =>
      pathname.startsWith(key)
    );

    return activeKey || pathname;
  };

  return (
    <aside className="hidden sm:flex flex-col gap-5 w-[180px] p-2">
      <Tabs
        aria-label="Главная навигация"
        isVertical={true}
        selectedKey={getActiveKey()}
        classNames={{
          base: "flex flex-col gap-1 w-full",
          tabContent: "w-full flex items-center gap-2 text-sm",
        }}
      >
        {siteConfig.navItems.map((item) => {
          const Icon = iconComponents[item.key] || DEFAULT_ICON;
          return (
            <Tab
              key={item.key}
              as={Link}
              href={item.href}
              title={
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </div>
              }
            />
          );
        })}
      </Tabs>
      <div className="flex flex-col mt-auto">
        <Divider className="my-2" />
        <Button
          variant="flat"
          onPress={handleLogout}
          className="flex items-center gap-2 justify-start px-3 py-2"
        >
          <ArrowLeftCircleIcon className="w-5 h-5" />
          <span>Выйти</span>
        </Button>
      </div>
    </aside>
  );
};
