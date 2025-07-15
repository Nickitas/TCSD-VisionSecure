import { useState, useEffect, useMemo } from "react";
import { User } from "@/entities/user/types";
import { debounce } from "lodash";

export const useUserSearch = (users: User[]) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const searchFields = (user: User, searchLower: string) => {
    return (
      user.email.toLowerCase().includes(searchLower) ||
      user.first_name.toLowerCase().includes(searchLower) ||
      user.last_name.toLowerCase().includes(searchLower) ||
      user.paternal_name && user.paternal_name.toLowerCase().includes(searchLower) ||
      user.phone_number && user.phone_number.toLowerCase().includes(searchLower) ||
      `${user.last_name} ${user.first_name} ${user.paternal_name}`
        .toLowerCase()
        .includes(searchLower)
    );
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((search: string, userList: User[]) => {
        if (!search.trim()) {
          setFilteredUsers(userList);
          return;
        }

        const searchLower = search.toLowerCase();
        const result = userList.filter((user) => searchFields(user, searchLower));
        setFilteredUsers(result);
      }, 300),
    [],
  );

  useEffect(() => {
    debouncedSearch(searchValue, users);
    return () => debouncedSearch.cancel();
  }, [searchValue, users, debouncedSearch]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return {
    searchValue,
    setSearchValue,
    filteredUsers,
  };
};
