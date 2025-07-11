"use client";

import React, { FC } from 'react';
import Link from 'next/link';

import { Card } from '@heroui/card';
import { Button } from '@heroui/button';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { numberConvert } from '@/shared/helpers';
import { UserRoleChip } from '@/shared/ui/chips/UserRoleChip';
import { useUserStore } from '@/entities/user/store';
import { usersMock } from '@/entities/user/mock';

export const UserCard: FC = () => {

    // const user = useUserStore(store => store.user);

    const user = usersMock[0];

    if (!user) {
        return null;
    }

    return (
        <Card className="dark:bg-[#f1f1f10c] p-4">
            <div className="">
                <h6 className="text-lg font-semibold mb-3">
                    {user.last_name} {user.first_name} {user?.paternal_name}
                </h6>

                <div className="text-sm mb-2">
                    <UserRoleChip role={user.role} />
                </div>

                <p className="text-sm mb-4">
                    {`Почта: ${user?.email || 'не указана'}`}
                </p>

                <div className="bg-light-secondary dark:bg-dark-primary rounded-lg p-3 mt-4">
                    <small className="text-xs block mb-2">
                        Доступно:
                    </small>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-base font-semibold">
                                {numberConvert(1000)}
                            </span>
                            <small className="text-xs uppercase tracking-wider">
                                камер
                            </small>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-base font-semibold text-light-text-primary dark:text-dark-text-primary">
                                {numberConvert(10)}
                            </span>
                            <small className="text-xs uppercase tracking-wider">
                                избранных
                            </small>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-base font-semibold">
                                {numberConvert(1000)}
                            </span>
                            <small className="text-xs uppercase tracking-wider">
                                пользователей
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-3 dark:border-dark-secondary flex justify-end">
                <Button
                    as={Link}
                    color='primary'
                    variant='bordered'
                    size="sm"
                    href={appRouting.account.edit.path}
                    className="
                        hover:shadow-sm
                    "
                >
                    Редактировать
                </Button>
            </div>
        </Card>
    );
}