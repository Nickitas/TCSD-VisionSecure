"use client";

import React, { FC } from "react";
import Link from "next/link";
import { User as UserComponent } from "@heroui/user";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import {
  ArrowLeftIcon,
  CalendarIcon,
  EnvelopeIcon,
  LockClosedIcon,
  LockOpenIcon,
  PencilSquareIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { appRouting } from "@/_kernel/config/app.routing.config";
import { UserRoleChip } from "@/shared/ui/chips/UserRoleChip";
import { HeroSection } from "@/widgets/HeroSection";
import { User } from "@/entities/user/types";
import { usersMock } from "@/entities/user/mock";
import { useEditModalStore } from "../../model";
import { EditModal } from "../EditModal";

type UserId = Pick<User, "id">;

type UserDetailsProps = UserId;

export const UserDetails: FC<UserDetailsProps> = ({ id }) => {
  const user = usersMock[Number(id)];

  const userId = useEditModalStore((store) => store.userId);
  const setUserId = useEditModalStore((store) => store.setUserId);
  const onOpen = useEditModalStore((store) => store.onOpen);

  const handleModalEdit = () => {
    onOpen();
    setUserId(user.id);
  };

  const statusColor = user.ban ? "bg-red-500" : "bg-green-500";
  const statusIcon = user.ban ? (
    <LockClosedIcon className="w-5 h-5 text-red-500" />
  ) : (
    <LockOpenIcon className="w-5 h-5 text-green-500" />
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <section className="flex flex-col gap-6">
        <HeroSection
          title={`${user.last_name} ${user.first_name[0]}. ${user.paternal_name[0]}.`}
          subtitle="Детальная информация о пользователе"
          startContent={
            <Button
              as={Link}
              href={appRouting.dashboard.users.path}
              variant="bordered"
              isIconOnly
              startContent={<ArrowLeftIcon className="w-6 h-6" />}
            />
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6">
          {/* Профиль пользователя */}
          <Card className="dark:bg-[#f1f1f10c]  rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                <UserComponent
                  avatarProps={{
                    src: "",
                  }}
                  name=""
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${statusColor}`}
                ></div>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {user.last_name} {user.first_name} {user.paternal_name}
              </h2>

              <div className="flex items-center mt-1 text-gray-500 dark:text-gray-400">
                <UserRoleChip role={user.role} />
              </div>

              <div className="flex items-center mt-4 text-sm">
                {statusIcon}
                <span className={`ml-1 ${user.ban ? "text-red-500" : "text-green-500"}`}>
                  {user.ban ? "Заблокирован" : "Активен"}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex gap-2">
                <Button
                  color="success"
                  variant="bordered"
                  onPress={handleModalEdit}
                  className="flex items-center gap-1"
                >
                  Редактировать
                </Button>
                <Button color={user.ban ? "success" : "danger"} variant="flat">
                  {user.ban ? "Разблокировать" : "Заблокировать"}
                </Button>
              </div>
            </div>
          </Card>

          {/* Основная информация */}
          <div className="lg:col-span-2 space-y-6">
            {/* Контактная информация */}
            <Card className="dark:bg-[#f1f1f10c] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Контактная информация
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <EnvelopeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Телефон</p>
                    <p className="text-gray-900 dark:text-white">{user.phone_number}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Системная информация */}
            <Card className="dark:bg-[#f1f1f10c] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                Системная информация
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <UserCircleIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 dark:text-white capitalize">{user.role}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Дата создания
                    </p>
                    <p className="text-gray-900 dark:text-white">{formatDate(user.created_at)}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <PencilSquareIcon className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Последнее обновление
                    </p>
                    <p className="text-gray-900 dark:text-white">{formatDate(user.updated_at)}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <EditModal />
    </>
  );
};
