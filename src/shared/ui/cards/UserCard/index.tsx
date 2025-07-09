import React, { FC } from 'react';
import Link from 'next/link';

import { Card } from '@heroui/card';
import { Button } from '@heroui/button';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { numberConvert } from '@/shared/helpers';

export const UserCard: FC = () => {
    const user = {
        email: 'dfsf@mail.com',
        first_name: 'Иван',
        last_name: 'Иванович',
        paternal_name: 'Иванов',
        phone_number: '',
        role: 'ROOT',
        ban: false,
        created_at: '',
        updated_at: '',
    }

    return (
        <Card className="dark:bg-[#f1f1f10c] p-2">
            <div className="">
                <h6 className="
                    text-lg font-semibold
                    text-light-text-primary dark:text-dark-text-primary
                    mb-3
                ">
                    {user?.last_name} {user?.first_name} {user?.paternal_name}
                </h6>

                <p className="
                    text-sm
                    text-light-text-secondary dark:text-dark-text-secondary
                    mb-2
                ">
                    {`Роль: ${user?.role}`}
                </p>

                <p className="
                    text-sm
                    text-light-text-secondary dark:text-dark-text-secondary
                    mb-4
                ">
                    {`Почта: ${user?.email}`}
                </p>

                <div className="
                    bg-light-secondary dark:bg-dark-primary
                    rounded-lg p-3 mt-4
                ">
                    <small className="
                        text-xs
                        text-light-text-tertiary dark:text-dark-text-tertiary
                        block mb-2
                    ">
                        {`Доступно: `}
                    </small>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-1">
                            <span className="
                                text-base font-semibold
                                text-light-text-primary dark:text-dark-text-primary
                            ">
                                {numberConvert(1000)}
                            </span>
                            <small className="
                                text-xs uppercase tracking-wider
                                text-light-text-tertiary dark:text-dark-text-tertiary
                            ">
                                камер
                            </small>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="
                                text-base font-semibold
                                text-light-text-primary dark:text-dark-text-primary
                            ">
                                {numberConvert(1000)}
                            </span>
                            <small className="
                                text-xs uppercase tracking-wider
                                text-light-text-tertiary dark:text-dark-text-tertiary
                            ">
                                пользователей
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="
                px-4 py-3
                border-t border-light-secondary dark:border-dark-secondary
                flex justify-end
            ">
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