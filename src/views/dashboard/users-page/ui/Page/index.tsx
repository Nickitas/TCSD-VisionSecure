"use client";

import React, { FC, useCallback } from 'react';
import Link from 'next/link';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@heroui/table";
import { User as UserComponent } from '@heroui/user';
import { Tooltip } from '@heroui/tooltip';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import {
    LockClosedIcon,
    LockOpenIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon
} from '@heroicons/react/24/outline';
import { appRouting } from '@/_kernel/config/app.routing.config';
import { UserRoleChip } from '@/shared/ui/chips/UserRoleChip';
import { SearchIcon } from '@/shared/ui/icons/base';
import { HeroSection } from '@/widgets/HeroSection';
import { User } from '@/entities/user/types';
import { usersMock } from '@/entities/user/mock';
import { columns } from '../../config';
import { useUserSearch } from '../../hooks';
import { useAddModalStore, useEditModalStore, useDelateModalStore } from '../../model';
import { AddModal } from '../AddModal';
import { DelateModal } from '../DelateModal';
import { EditModal } from '../EditModal';


type UserId = User['id'];

export const Users: FC = () => {

    const setOpenModalAdd = useAddModalStore(store => store.onOpen);

    const setOpenModalEdit = useEditModalStore(store => store.onOpen);
    const setUserIdForEdit = useEditModalStore(store => store.setUserId);

    const setOpenModalDelate = useDelateModalStore(store => store.onOpen);
    const setUserIdForDelate = useDelateModalStore(store => store.setUserId);


    const handleModalEdit = (userId: UserId) => {
        setOpenModalEdit();
        setUserIdForEdit(userId);
    }

    const handleModalDelate = (userId: UserId) => {
        setOpenModalDelate();
        setUserIdForDelate(userId);
    }

    const { searchValue, setSearchValue, filteredUsers } = useUserSearch(usersMock);

    const renderCell = useCallback((user: User, columnKey: string) => {
        switch (columnKey) {
            case "id":
                return <p className="text-sm">{user.id}</p>;
            case "user":
                return (
                    <Tooltip showArrow placement='left' color='default' content="Просмотреть">
                        <UserComponent
                            as={Link}
                            href={appRouting.dashboard.user(user.id).path}
                            avatarProps={{ radius: "lg", src: '' }}
                            description={
                                <p className='flex flex-col'>
                                    <span>{user.phone_number}</span>
                                    <span>{user.email}</span>
                                </p>
                            }
                            name={`${user.last_name} ${user.first_name} ${user.paternal_name}`}
                            className='hover:scale-110 transition-transform cursor-pointer'
                        />
                    </Tooltip>
                );
            case "role":
                return <UserRoleChip sm role={user.role} />;
            case "ban":
                return (
                    <p className="text-sm">
                        {user.ban ?
                            <LockClosedIcon className="w-5 h-5 text-red-500 mx-auto" /> :
                            <LockOpenIcon className="w-5 h-5 text-green-500 mx-auto" />}
                    </p>
                );
            case "created_at":
                return <p className="text-sm">{user.created_at.toLocaleDateString('ru-RU')}</p>;
            case "updated_at":
                return <p className="text-sm">{user.updated_at.toLocaleDateString('ru-RU')}</p>;
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip showArrow color='success' content="Редактировать">
                            <Button
                                onPress={() => handleModalEdit(user.id as unknown as UserId)}
                                color='success'
                                isIconOnly
                                className='w-6 h-6 rounded-lg'
                                startContent={<PencilIcon className='w-4 h-4 hover:scale-110 transition-transform cursor-pointer' />}
                            />
                        </Tooltip>
                        <Tooltip showArrow color="danger" content="Удалить">
                            <Button
                                onPress={() => handleModalDelate(user.id as unknown as UserId)}
                                color='danger'
                                isIconOnly
                                className='w-6 h-6 rounded-lg'
                                startContent={<TrashIcon className='w-4 h-4 hover:scale-110 transition-transform cursor-pointer' />}
                            />
                        </Tooltip>
                    </div>
                );
            default:
                return null;
        }
    }, []);

    return (
        <>
            <section className="flex flex-col gap-4">
                <HeroSection title="Пользователи" />
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between gap-3 items-end">
                        <Input
                            isClearable
                            className="w-full sm:max-w-[44%]"
                            placeholder="Поиск по имени..."
                            startContent={<SearchIcon />}
                            value={searchValue}
                            onClear={() => setSearchValue('')}
                            onValueChange={setSearchValue}
                        />
                        <Button
                            color="primary"
                            endContent={<PlusIcon className='w-4 h-4' />}
                            onPress={() => setOpenModalAdd()}
                        >
                            Создать
                        </Button>
                    </div>
                </div>
                <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={['ban', 'actions'].includes(column.uid) ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={filteredUsers} emptyContent={"Нет пользователей."}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </section>
            <AddModal />
            <EditModal />
            <DelateModal />
        </>
    );
};