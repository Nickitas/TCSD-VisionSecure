"use client";

import React, { FC } from "react";
import { HeroSection } from "@/widgets/HeroSection";
import { usersMock } from "@/entities/user/mock";
import { useUserSearch } from "@/features/users/hooks";
import {
  UserAddModal,
  UserDelateModal,
  UserEditModal,
  UsersControls,
  UsersTable,
} from "@/features/users/ui";

export const Users: FC = () => {
  const { searchValue, setSearchValue, filteredUsers } = useUserSearch(usersMock);

  return (
    <>
      <section className="flex flex-col gap-4">
        <HeroSection title="Пользователи" />
        <UsersControls searchValue={searchValue} setSearchValue={setSearchValue} />
        <UsersTable users={filteredUsers} />
      </section>
      <UserAddModal />
      <UserEditModal />
      <UserDelateModal />
    </>
  );
};
