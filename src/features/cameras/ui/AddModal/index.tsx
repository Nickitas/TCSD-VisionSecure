"use client";

import React, { FC, useRef } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDraggable } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useAddCamera } from "@/entities/cameras/hooks";
import { Input } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { useAddModalStore } from "../../model";

export const AddModal: FC = () => {
  const targetRef = useRef(null);

  const isOpen = useAddModalStore((store) => store.isOpen);
  const onClose = useAddModalStore((store) => store.onClose);

  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  const { handleAddCamera, isPending } = useAddCamera();

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
              <form className="space-y-4" onSubmit={handleAddCamera}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="name"
                      size="sm"
                      name="name"
                      label="Название *"
                      placeholder="Камера 1"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="ipAddress"
                      size="sm"
                      name="ipAddress"
                      label="IP-адрес *"
                      placeholder="192.168.1.15"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    id="model"
                    size="sm"
                    name="model"
                    label="Модель"
                    placeholder="Hikvision DS-2CD2347G2-LU"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="streamUrl"
                    size="sm"
                    name="streamUrl"
                    label="Ссылка на поток *"
                    placeholder="rtsp://example.com:554/1"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="location"
                      size="sm"
                      name="location"
                      label="Местоположение *"
                      placeholder="Центральный вход"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="coordinates"
                      size="sm"
                      name="coordinates"
                      label="Координаты"
                      placeholder="55.7522, 37.6156"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    id="description"
                    size="sm"
                    name="description"
                    label="Описание"
                    placeholder="Обзор главного входа в здание"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="resolution"
                      size="sm"
                      name="resolution"
                      label="Разрешение"
                      placeholder="1920x1080"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="fps"
                      size="sm"
                      name="fps"
                      label="FPS"
                      placeholder="30"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Закрыть
                  </Button>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? (
                      <div className="flex items-center justify-center">
                        <Spinner className="mr-2" />
                        Создание...
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
