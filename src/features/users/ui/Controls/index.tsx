"use client";

import React, { FC } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { PlusIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "@/shared/ui/icons/base";
import { useAddModalStore } from "../../model";

type UsersControlsProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const UsersControls: FC<UsersControlsProps> = ({ searchValue, setSearchValue }) => {
  const setOpenModalAdd = useAddModalStore((store) => store.onOpen);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Поиск по пользователям..."
          startContent={<SearchIcon />}
          value={searchValue}
          onClear={() => setSearchValue("")}
          onValueChange={setSearchValue}
        />
        <Button
          color="primary"
          endContent={<PlusIcon className="w-4 h-4" />}
          onPress={() => setOpenModalAdd()}
        >
          Создать
        </Button>
      </div>
    </div>
  );
};
