"use client";

import { FC } from 'react';
import { UserRole } from '@/entities/user/types';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Divider } from "@heroui/divider";
import { Select, SelectItem } from '@heroui/select';
import { User as UserComponent } from '@heroui/user';
import { Switch } from '@heroui/switch';
import { Card } from '@heroui/card';
import { LockClosedIcon, LockOpenIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { usersMock } from '@/entities/user/mock';
import { useUserStore } from "@/entities/user/store";
import { userRoleOptions } from '../../config';
import { UserRoleChip } from '@/shared/ui/chips/UserRoleChip';


export const ProfileEdit: FC = () => {

    // const user = useUserStore(store => store.user);
    const user = usersMock[0];

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="flex flex-col gap-6">
            <div className='flex items-top gap-6'>
                <UserComponent
                    classNames={{
                        description: 'mt-1'
                    }}
                    avatarProps={{ src: '', radius: "lg" }}
                    name={`${user.last_name} ${user.first_name} ${user.paternal_name || ''}`}
                    description={
                        <p className='flex items-center gap-2'>
                            {user.ban ? (
                                <span className='flex items-center gap-2'>
                                    <LockClosedIcon className="w-5 h-5 text-red-500" />
                                    <small className='text-red-500'>Заблокирован</small>
                                </span>
                            ) : (
                                <span className='flex items-center gap-2'>
                                    <LockOpenIcon className="w-5 h-5 text-green-500" />
                                    <small className='text-green-500'>Активен</small>
                                </span>
                            )}
                        </p>
                    }
                />
                <UserRoleChip role={user.role} />
            </div>
            <Card className="p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12">
                    {/* Основная информация */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold pb-2">Личные данные</h3>
                        <Divider />
                        <Input
                            label="Фамилия"
                            name="last_name"
                            defaultValue={user.last_name}
                            placeholder="Иванов"
                            required
                        />

                        <Input
                            label="Имя"
                            name="first_name"
                            defaultValue={user.first_name}
                            placeholder="Иван"
                            required
                        />

                        <Input
                            label="Отчество"
                            name="paternal_name"
                            defaultValue={user.paternal_name || ''}
                            placeholder="Иванович"
                        />
                    </div>

                    {/* Контактная информация */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold pb-2">Контактные данные</h3>
                        <Divider />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            defaultValue={user.email}
                            placeholder="email@example.com"
                            required
                        />

                        <Input
                            label="Телефон"
                            name="phone_number"
                            type="tel"
                            defaultValue={user.phone_number || ''}
                            placeholder="+7 (900) 123-45-67"
                        />
                    </div>

                    {/* Рабочая информация */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold pb-2">Рабочая информация</h3>
                        <Divider />
                        <Input
                            label="Должность"
                            name="position"
                            defaultValue={user.position || ''}
                            placeholder="Менеджер"
                        />

                        <Input
                            label="Подразделение"
                            name="department"
                            defaultValue={user.department || ''}
                            placeholder="Отдел продаж"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                label="Аудитория"
                                name="room"
                                defaultValue={user.room || ''}
                                placeholder="101"
                            />

                            <Input
                                label="Внутренний номер"
                                name="internal_phone"
                                defaultValue={user.internal_phone || ''}
                                placeholder="1001"
                            />
                        </div>
                    </div>

                    {/* Системная информация */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold pb-2">Системные данные</h3>
                        <Divider />
                        {(user.role as UserRole) === UserRole.ROOT ? (
                            <>
                                <Select
                                    label="Роль пользователя"
                                    name="role"
                                    defaultSelectedKeys={[user.role]}
                                >
                                    {userRoleOptions.map((option) => (
                                        <SelectItem key={option.value}>
                                            {option.text}
                                        </SelectItem>
                                    ))}
                                </Select>

                                <div className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    {user.ban ? (
                                        <LockClosedIcon className="w-5 h-5 text-red-500" />
                                    ) : (
                                        <LockOpenIcon className="w-5 h-5 text-green-500" />
                                    )}
                                    <Switch
                                        name="ban"
                                        defaultSelected={user.ban}
                                    >
                                        {user.ban ? 'Заблокирован' : 'Активен'}
                                    </Switch>
                                </div>
                            </>
                        ) : null}
                        <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                            <p className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                Создан: {formatDate(user.created_at)}
                            </p>
                            <p className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                Обновлен: {formatDate(user.updated_at)}
                            </p>
                        </div>
                    </div>
                </div>
                <Divider className='mt-8' />
                <div className="flex justify-end gap-4 mt-6">
                    <Button variant="bordered" color="danger">
                        Отменить
                    </Button>
                    <Button color="primary" isLoading={false}>
                        Сохранить изменения
                    </Button>
                </div>
            </Card>
        </div>
    );
};