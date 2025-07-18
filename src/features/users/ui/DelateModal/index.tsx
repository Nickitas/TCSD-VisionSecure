"use client";

import React, { FC, useRef, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDraggable } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { useDeleteUser } from "@/entities/user/hooks";
import { useDelateModalStore } from "../../model";
import { usersMock } from '@/entities/user/mock';

export const DelateModal: FC = () => {
  const targetRef = useRef(null);
  const [confirmationPhrase, setConfirmationPhrase] = useState("");

  const userId = useDelateModalStore((store) => store.userId);
  const isOpen = useDelateModalStore((store) => store.isOpen);
  const onClose = useDelateModalStore((store) => store.onClose);

  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  const { handleDelete, isPending } = useDeleteUser();

  if (!userId) {
    return null;
  }

  const userFio = `${usersMock[+userId].last_name} ${usersMock[+userId].first_name} ${usersMock[+userId].paternal_name}`;

  const handleConfirm = () => {
    if (userId === null) {
      return;
    }

    if (confirmationPhrase !== userFio) {
      return;
    }

    handleDelete(userId);
  };

  return (
    <Modal
      ref={targetRef}
      isOpen={isOpen}
      onOpenChange={onClose}
      backdrop="opaque"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader {...moveProps} className="flex flex-col gap-1">
              Удалить
            </ModalHeader>
            <ModalBody>
              <form className="space-y-6" onSubmit={handleConfirm}>
                <div className="space-y-2">
                  <Input
                    id="confirmation"
                    size="sm"
                    name="confirmation_phrase"
                    type="confirmation"
                    label="Введите ФИО чтобы подтвердить удаление * "
                    placeholder={userFio}
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="light" onPress={onClose}>
                    Закрыть
                  </Button>
                  <Button type="submit" disabled={isPending} color="danger">
                    {isPending ? (
                      <div className="flex items-center justify-center">
                        <Spinner className="mr-2" />
                        Удаление...
                      </div>
                    ) : (
                      "Продолжить"
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
