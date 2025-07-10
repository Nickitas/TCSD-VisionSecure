"use client";

import React, { FC } from 'react';
import { useLogin } from '@/entities/user/hooks';
import { Card } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Spinner } from "@heroui/spinner";
import { title, text } from '@/_kernel/assets/styles/primitives';


export const Signin: FC = () => {

    const {
        handleLogin,
        isPending,
    } = useLogin();

    return (
        <>
            <Card className="w-full max-w-md p-8 space-y-6">
                <div className="text-center">
                    <h1 className={title({ size: 'sm' })}>Авторизация</h1>
                    <p className={text()}>Введите свои учетные данные для входа</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-2">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            label='Email'
                            placeholder="your@email.com"
                            value={'user@example.com'}
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
                            value={'string'}
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
                                Вход...
                            </div>
                        ) : (
                            'Войти'
                        )}
                    </Button>
                </form>
            </Card>
        </>
    );
};