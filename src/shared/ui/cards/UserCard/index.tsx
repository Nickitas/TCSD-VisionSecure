"use client";

import React, { FC } from "react";
import Link from "next/link";

import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { User as UserComponent } from "@heroui/user";
import { appRouting } from "@/_kernel/config/app.routing.config";
import { title } from '@/_kernel/assets/styles/primitives';
import { numberConvert } from "@/shared/helpers";
import { UserRoleChip } from "@/shared/ui/chips/UserRoleChip";
import { useUserStore } from "@/entities/user/store";
import { usersMock } from "@/entities/user/mock";

export const UserCard: FC = () => {
  // const user = useUserStore(store => store.user);
  const user = usersMock[0];

  if (!user) {
    return null;
  }

  return (
    <Card className="dark:bg-[#f1f1f10c] p-4">
      <div className="flex flex-col gap-4">
        {/* Заголовок с аватаром и ФИО */}
        <div className="flex items-center gap-4">
          <UserComponent
            avatarProps={{ src: "" }}
            name={''}
          />
          <h6 className={title({ size: 'sm' })}>
            {user.last_name} {user.first_name} {user?.paternal_name}
          </h6>
        </div>

        {/* Роль пользователя */}
        <div className="text-sm">
          <UserRoleChip role={user.role} />
        </div>

        {/* Контактная информация */}
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            Номер телефона: {user?.phone_number ? (
              <span className='text-blue-500'>{user.phone_number}</span>
            ) : 'не указан'}
          </p>
          <p className="text-sm">
            Почта: {user?.email ? (
              <span className='text-blue-500'>{user.email}</span>
            ) : 'не указана'}
          </p>
        </div>

        {/* Рабочая информация */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Должность:</p>
            <p className="text-sm font-medium">
              {user?.position || 'не указана'}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Подразделение:</p>
            <p className="text-sm font-medium">
              {user?.department || 'не указано'}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Аудитория:</p>
            <p className="text-sm font-medium">
              {user?.room ? `№${user.room}` : 'не указана'}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Внутренний номер:</p>
            <p className="text-sm font-medium">
              {user?.internal_phone || 'не указан'}
            </p>
          </div>
        </div>

        {/* Кнопка редактирования */}
        <div className="px-4 dark:border-dark-secondary flex justify-end">
          <Button
            as={Link}
            color="primary"
            variant="bordered"
            size="sm"
            href={appRouting.account.edit.path}
          >
            Редактировать
          </Button>
        </div>

        <Divider />

        {/* Статистика */}
        <div className="bg-light-secondary dark:bg-dark-primary rounded-lg p-3 mt-4">
          <small className="text-xs block mb-2">Доступно:</small>

          <div className="flex gap-8 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold">{numberConvert(1000)}</span>
              <small className="text-xs uppercase tracking-wider">камер</small>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold text-light-text-primary dark:text-dark-text-primary">
                {numberConvert(10)}
              </span>
              <small className="text-xs uppercase tracking-wider">избранных</small>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold">{numberConvert(1000)}</span>
              <small className="text-xs uppercase tracking-wider">пользователей</small>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};