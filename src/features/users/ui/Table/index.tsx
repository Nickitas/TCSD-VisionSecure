"use client";

import React, { FC, useCallback } from "react";
import Link from "next/link";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { User as UserComponent } from "@heroui/user";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { LockClosedIcon, LockOpenIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { appRouting } from "@/_kernel/config/app.routing.config";
import { UserRoleChip } from "@/shared/ui/chips/UserRoleChip";
import { User, UserId } from "@/entities/user/types";
import { columns } from "../../config";
import { useDelateModalStore, useEditModalStore } from "../../model";

type UsersTableProps = {
  users: User[];
};

export const UsersTable: FC<UsersTableProps> = ({ users }) => {
  const setOpenModalEdit = useEditModalStore((store) => store.onOpen);
  const setUserIdForEdit = useEditModalStore((store) => store.setUserId);

  const setOpenModalDelate = useDelateModalStore((store) => store.onOpen);
  const setUserIdForDelate = useDelateModalStore((store) => store.setUserId);

  const handleModalEdit = (userId: UserId) => {
    setOpenModalEdit();
    setUserIdForEdit(userId);
  };

  const handleModalDelate = (userId: UserId) => {
    setOpenModalDelate();
    setUserIdForDelate(userId);
  };

  const renderCell = useCallback((user: User, columnKey: string) => {
    switch (columnKey) {
      case "id":
        return <p className="text-sm">{user.id}</p>;
      case "user":
        return (
          <Tooltip showArrow placement="left" color="default" content="Просмотреть">
            <UserComponent
              as={Link}
              href={appRouting.dashboard.user(user.id).path}
              avatarProps={{ radius: "lg", src: "" }}
              description={
                <p className="flex flex-col">
                  <span>{user.phone_number}</span>
                  <span>{user.email}</span>
                </p>
              }
              name={`${user.last_name} ${user.first_name} ${user.paternal_name}`}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          </Tooltip>
        );
      case "role":
        return <UserRoleChip sm role={user.role} />;
      case "ban":
        return (
          <p className="text-sm">
            {user.ban ? (
              <LockClosedIcon className="w-5 h-5 text-red-500 mx-auto" />
            ) : (
              <LockOpenIcon className="w-5 h-5 text-green-500 mx-auto" />
            )}
          </p>
        );
      case "created_at":
        return <p className="text-sm">{user.created_at.toLocaleDateString("ru-RU")}</p>;
      case "updated_at":
        return <p className="text-sm">{user.updated_at.toLocaleDateString("ru-RU")}</p>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip showArrow color="success" content="Редактировать">
              <Button
                onPress={() => handleModalEdit(user.id as unknown as UserId)}
                color="success"
                isIconOnly
                className="w-6 h-6 rounded-lg"
                startContent={
                  <PencilIcon className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
                }
              />
            </Tooltip>
            <Tooltip showArrow color="danger" content="Удалить">
              <Button
                onPress={() => handleModalDelate(user.id as unknown as UserId)}
                color="danger"
                isIconOnly
                className="w-6 h-6 rounded-lg"
                startContent={
                  <TrashIcon className="w-4 h-4 hover:scale-110 transition-transform cursor-pointer" />
                }
              />
            </Tooltip>
          </div>
        );
      default:
        return null;
    }
  }, []);

  return (
    <Table aria-label="Таблица пользователей системы">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={["ban", "actions"].includes(column.uid) ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users} emptyContent={"Нет пользователей."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
