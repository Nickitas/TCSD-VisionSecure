"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import { Tabs, Tab } from "@heroui/tabs";
import { Button } from '@heroui/button';
import { siteConfig } from '@/_kernel/config/site.config';
import { UserCard } from '@/shared/ui/cards/UserCard';
import { useLogout } from '@/entities/user/hooks';

export const Aside: FC = () => {

    const { handleLogout } = useLogout();

    return (
        <aside className="flex flex-col">
            <UserCard />
            <Tabs
                aria-label="main navigation"
                isVertical={true}
            >
                {siteConfig.navItems.map((item) => (
                    <Tab
                        key={item.key}
                        as={Link}
                        href={item.href}
                        title={item.label}
                    />
                ))}
               
                <hr />

                <Button
                    color='secondary'
                    onPress={handleLogout}
                >
                    Выйти
                </Button>
            </Tabs>
        </aside>
    );
};