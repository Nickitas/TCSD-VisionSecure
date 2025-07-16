"use client";

import React, { FC, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDraggable } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { Select, SelectItem } from '@heroui/select';
import { useRegister } from "@/entities/user/hooks";
import { userRoleOptions } from '../../config';
import { useAddModalStore } from "../../model";

export const AddModal: FC = () => {
  const targetRef = useRef(null);

  const isOpen = useAddModalStore((store) => store.isOpen);
  const onClose = useAddModalStore((store) => store.onClose);

  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  const { handleRegister, isPending } = useRegister();

  return (
    <Modal
      ref={targetRef}
      isOpen={isOpen}
      onOpenChange={onClose}
      size="xl"
      backdrop={"blur"}
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader {...moveProps} className="flex flex-col gap-1">
              Создание
            </ModalHeader>
            <ModalBody>
              <form className="space-y-4" onSubmit={handleRegister}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="first_name"
                      size="sm"
                      name="first_name"
                      type="text"
                      label="Имя *"
                      placeholder="Сергей"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="paternal_name"
                      size="sm"
                      name="paternal_name"
                      type="text"
                      label="Отчество"
                      placeholder="Владимирович"
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    id="last_name"
                    size="sm"
                    name="last_name"
                    type="text"
                    label="Фамилия *"
                    placeholder="Панов"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="phone_number"
                      size="sm"
                      name="phone_number"
                      type="tel"
                      label="Номер телефона"
                      placeholder="+7 (900) 000-00-00"
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      size="sm"
                      name="email"
                      type="email"
                      label="Email *"
                      placeholder="spanov@donstu.ru"
                      required
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="position"
                      size="sm"
                      name="position"
                      type="text"
                      label="Должность"
                      placeholder="Начальник отдела"
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="department"
                      size="sm"
                      name="department"
                      type="text"
                      label="Подразделение"
                      placeholder="ОСТК"
                      disabled={isPending}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="room"
                      size="sm"
                      name="room"
                      type="text"
                      label="Аудитория"
                      placeholder="1-391а"
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="internal_phone"
                      size="sm"
                      name="internal_phone"
                      type="text"
                      label="Внутренний номер"
                      placeholder="238-17-13"
                      disabled={isPending}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Select
                    className="w-full"
                    items={userRoleOptions}
                    label="Роль пользователя *"
                    placeholder="Выберите роль..."
                    disabled={isPending}
                    required
                  >
                    {(role) => <SelectItem key={role.value}>{role.text}</SelectItem>}
                  </Select>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <Button color="danger" variant="light" onPress={onClose} disabled={isPending}>
                    Отмена
                  </Button>
                  <Button type="submit" color="primary" disabled={isPending}>
                    {isPending ? (
                      <div className="flex items-center justify-center">
                        <Spinner size="sm" className="mr-2" />
                        Регистрация...
                      </div>
                    ) : (
                      "Зарегистрировать"
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
};