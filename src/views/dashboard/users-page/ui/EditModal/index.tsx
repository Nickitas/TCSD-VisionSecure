import React, { FC, useRef } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDraggable,
} from "@heroui/modal";
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Select, SelectItem } from "@heroui/select";
import { Spinner } from '@heroui/spinner';
import { useEditUser } from '@/entities/user/hooks';
import { userRoleOptions } from '../../config';
import { useEditModalStore } from '../../model';

export const EditModal: FC = () => {
    const targetRef = useRef(null);

    const isOpen = useEditModalStore(store => store.isOpen);
    const userId = useEditModalStore(store => store.userId);
    const onClose = useEditModalStore(store => store.onClose);

    const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

    const { handleEdit, isPending } = useEditUser();

    return (
        <Modal
            ref={targetRef}
            isOpen={isOpen}
            onOpenChange={onClose}
            backdrop='opaque'
            scrollBehavior='inside'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader {...moveProps} className="flex flex-col gap-1">
                            Редактирование
                        </ModalHeader>
                        <ModalBody>
                            {/* <form className="space-y-6" onSubmit={() => handleEdit(userId, body)}> */}
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Input
                                        id="first_name"
                                        size='sm'
                                        name="first_name"
                                        type="first_name"
                                        label='Имя'
                                        placeholder="Иван"
                                        required
                                        disabled={isPending}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        id="paternal_name"
                                        size='sm'
                                        name="paternal_name"
                                        type="paternal_name"
                                        label='Отчество'
                                        placeholder="Владимирович"
                                        required
                                        disabled={isPending}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        id="last_name"
                                        size='sm'
                                        name="last_name"
                                        type="last_name"
                                        label='Фамилия'
                                        placeholder="Иванов"
                                        required
                                        disabled={isPending}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        id="phone_number"
                                        size='sm'
                                        name="phone_number"
                                        type="phone_number"
                                        label='Номер телефона'
                                        placeholder="(900) 000-00-00"
                                        required
                                        disabled={isPending}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        id="email"
                                        size='sm'
                                        name="email"
                                        type="email"
                                        label='Email'
                                        placeholder="your@email.com"
                                        required
                                        disabled={isPending}
                                    />
                                </div>
                                <Select
                                    className="max-w-full"
                                    items={userRoleOptions}
                                    label="Роль"
                                    placeholder="Укажите роль пользователя"
                                >
                                    {(role) => <SelectItem key={role.value}>{role.text}</SelectItem>}
                                </Select>

                                <div className='flex justify-end gap-4'>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Закрыть
                                    </Button>
                                    <Button
                                        type="submit"
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <div className="flex items-center justify-center">
                                                <Spinner className="mr-2" />
                                                Изменяем...
                                            </div>
                                        ) : (
                                            'Подтвердить'
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}