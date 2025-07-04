import React, { FC } from 'react';
import Link from 'next/link';

import { Card } from '@heroui/card';
import { Button } from '@heroui/button';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { numberConvert } from '@/shared/helpers';
import cls from './index.module.scss';


export const UserCard: FC = () => {

    const user = {
        email: '',
        first_name: '',
        last_name: '',
        paternal_name: '',
        phone_number: '',
        role: 'ROOT',
        ban: false,
        created_at: '',
        updated_at: '',
    }

    return (
        <Card>
            <div className={cls.head}>
                <h6>
                    {user?.last_name} {user?.first_name} {user?.paternal_name}
                </h6>

                <small>{`Роль: ${user?.role}`}</small>

                <div className={cls.walletContainer}>
                    <small>{`Доступно: `}</small>

                    <div className={cls.wallet}>
                        <p className={cls.block}>
                            <span>{numberConvert(1000)}</span>
                            <small>{`камер`}</small>
                        </p>
                    </div>
                    <div className={cls.wallet}>
                        <p className={cls.block}>
                            <span>{numberConvert(1000)}</span>
                            <small>{`пользователей`}</small>
                        </p>
                    </div>
                </div>
            </div>

            <div className={cls.actions}>
                <Button
                    as={Link}
                    color='primary'
                    href={appRouting.account.edit.path}
                >
                    Редактировать
                </Button>

                <Button
                    color='secondary'
                   
                >
                    f
                </Button>
            </div>
        </Card>
    );
}