"use client";

import React, { FC } from 'react';
import { Card } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Spinner } from "@heroui/spinner";
import { subtitle, text } from '@/_kernel/assets/styles/primitives';
import { useRegister } from '@/entities/user/hooks';


export const Signup: FC = () => {

    const {
        handleRegister,
        isPending,
    } = useRegister();

    return (
        <>
            <Card className="w-full max-w-md p-8 space-y-6">
                <div className="text-center">
                    <h1 className={subtitle()}>Регистрация</h1>
                    <p className={text()}>Укажите учетные данные для регистрации</p>
                </div>

                <form className="space-y-6" onSubmit={handleRegister}>
                    <div className="space-y-2">
                        <Input
                            id="first_name"
                            name="first_name"
                            type="first_name"
                            label='Имя'
                            placeholder="Иван"
                            required
                            disabled={isPending}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            id="paternal_name"
                            name="paternal_name"
                            type="paternal_name"
                            label='Отчество'
                            placeholder="Владимирович"
                            required
                            disabled={isPending}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            id="last_name"
                            name="last_name"
                            type="last_name"
                            label='Фамилия'
                            placeholder="Иванов"
                            required
                            disabled={isPending}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            id="phone_number"
                            name="phone_number"
                            type="phone_number"
                            label='Номер телефона'
                            placeholder="(900) 000-00-00"
                            required
                            disabled={isPending}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label='Email'
                            placeholder="your@email.com"
                            required
                            disabled={isPending}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            label='Пароль'
                            placeholder="••••••••"
                            required
                            disabled={isPending}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        {isPending ? (
                            <div className="flex items-center justify-center">
                                <Spinner className="mr-2" />
                                Регистрация...
                            </div>
                        ) : (
                            'Продолжить'
                        )}
                    </Button>
                </form>
            </Card>
        </>
    );
};