import React, { FC, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDraggable } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useRegister } from "@/entities/user/hooks";
import { Input } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
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
              <form className="space-y-6" onSubmit={handleRegister}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    id="first_name"
                    size="sm"
                    name="first_name"
                    type="first_name"
                    label="Имя"
                    placeholder="Иван"
                    required
                    disabled={isPending}
                  />
                  <Input
                    id="paternal_name"
                    size="sm"
                    name="paternal_name"
                    type="paternal_name"
                    label="Отчество"
                    placeholder="Владимирович"
                    required
                    disabled={isPending}
                  />
                  <Input
                    id="last_name"
                    size="sm"
                    name="last_name"
                    type="last_name"
                    label="Фамилия"
                    placeholder="Иванов"
                    required
                    disabled={isPending}
                  />
                  <Input
                    id="phone_number"
                    size="sm"
                    name="phone_number"
                    type="phone_number"
                    label="Номер телефона"
                    placeholder="(900) 000-00-00"
                    required
                    disabled={isPending}
                  />
                  <Input
                    id="email"
                    size="sm"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="your@email.com"
                    required
                    disabled={isPending}
                  />
                  <Input
                    id="password"
                    size="sm"
                    name="password"
                    type="password"
                    label="Пароль"
                    placeholder="••••••••"
                    required
                    disabled={isPending}
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Закрыть
                  </Button>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? (
                      <div className="flex items-center justify-center">
                        <Spinner className="mr-2" />
                        Регистрация...
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
