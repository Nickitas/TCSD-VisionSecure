"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { appRouting } from "@/_kernel/config/app.routing.config";
import { Camera, CameraId } from "@/entities/cameras/types";
import { columns } from "../../config";
import { useDelateModalStore, useEditModalStore } from "../../model";

type CamerasTableProps = {
  cameras: Camera[];
};

export const CamerasTable: FC<CamerasTableProps> = ({ cameras }) => {
  const setOpenModalEdit = useEditModalStore((store) => store.onOpen);
  const setCameraIdForEdit = useEditModalStore((store) => store.setCameraId);

  const setOpenModalDelate = useDelateModalStore((store) => store.onOpen);
  const setCameraIdForDelate = useDelateModalStore((store) => store.setCameraId);

  const handleModalEdit = (cameraId: CameraId) => {
    setOpenModalEdit();
    setCameraIdForEdit(cameraId);
  };

  const handleModalDelate = (cameraId: CameraId) => {
    setOpenModalDelate();
    setCameraIdForDelate(cameraId);
  };

  const renderCell = (camera: Camera, columnKey: string) => {
    switch (columnKey) {
      case "id":
        return <p className="text-sm">{camera.id}</p>;
      case "name":
        return (
          <Tooltip showArrow placement="left" color="default" content="Просмотреть">
            <Link
              href={appRouting.dashboard.camera(camera.id).path}
              className="flex flex-col hover:scale-110 transition-transform cursor-pointer"
            >
              <p className="font-medium">{camera.name}</p>
              <p className="text-sm text-default-500">{camera.ipAddress}</p>
              <p className="text-xs text-default-500">{camera.model}</p>
            </Link>
          </Tooltip>
        );
      case "location":
        return (
          <div className="flex flex-col">
            <p className="text-sm">{camera.location}</p>
            <p className="text-xs text-default-500">{camera.coordinates}</p>
            <p className="text-xs text-default-500">{camera.description}</p>
          </div>
        );
      case "status":
        return (
          <div className="flex items-center justify-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                camera.status === "online"
                  ? "bg-green-500"
                  : camera.status === "offline"
                    ? "bg-red-500"
                    : "bg-yellow-500"
              }`}
            />
          </div>
        );
      case "streamUrl":
        return (
          <a
            href={camera.streamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            {camera.streamUrl}
          </a>
        );
      case "resolution":
        return <p className="text-sm">{camera.resolution}</p>;
      case "fps":
        return <p className="text-sm">{camera.fps}</p>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip showArrow color="success" content="Редактировать">
              <Button
                onPress={() => handleModalEdit(camera.id)}
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
                onPress={() => handleModalDelate(camera.id)}
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
  };

  return (
    <Table aria-label="Таблица камер системы">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={["actions", "status"].includes(column.uid) ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={cameras} emptyContent={"Нет камер."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
