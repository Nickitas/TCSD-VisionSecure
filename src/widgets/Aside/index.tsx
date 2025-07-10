"use client";

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Tabs, Tab } from "@heroui/tabs";
import { Button } from '@heroui/button';
import { Divider } from "@heroui/divider";
import { siteConfig } from '@/_kernel/config/site.config';
import { useLogout } from '@/entities/user/hooks';

export const Aside: FC = () => {
    const pathname = usePathname();

    const { handleLogout } = useLogout();

    return (
        <aside className="hidden sm:flex flex-col gap-5 max-w-[140px]">
            <Tabs
                aria-label="main navigation"
                isVertical={true}
                selectedKey={pathname}
                classNames={{
                    base: "flex flex-col gap-2 w-full",
                    tabContent: "w-full",
                }}
            >
                {siteConfig.navItems.map((item) => (
                    <Tab
                        key={item.key}
                        as={Link}
                        href={item.href}
                        title={item.label}
                    />
                ))}
            </Tabs>
            <div className='flex flex-col'>
                <Divider className="my-2" />
                <Button
                    variant='flat'
                    onPress={handleLogout}
                >
                    Выйти
                </Button>
            </div>
        </aside>
    );
};