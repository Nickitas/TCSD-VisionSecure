"use client";

import React, { FC } from 'react';
import { title, subtitle, text } from '@/_kernel/assets/styles/primitives';
import { Button } from '@heroui/button';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Input, Textarea } from '@heroui/input';
import { MapFrame } from './components/MapFrame';

export const Contacts: FC = () => {
  const contactsData = {
    workTime: "Пн.-Пт.: 8:30 - 17:00",
    email: "spanov@donstu.ru",
    phone: "238-17-13",
    address: "344003, г. Ростов-на-Дону, пл. Гагарина, 1. ауд. 1-391а"
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Здесь логика отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <div className="text-center">
        <h1 className={title()}>Контакты</h1>
        <p className={subtitle()}>Свяжитесь с нами удобным для вас способом</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="dark:bg-[#000] border dark:border-gray-800">
          <CardHeader>
            <h2 className="text-xl font-semibold">Контактная информация</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex flex-col">
              <h3 className={`${text({ weight: 'medium' })}`}>Режим работы:</h3>
              <p className={text()}>{contactsData.workTime}</p>
            </div>
            <div className="flex flex-col">
              <h3 className={`${text({ weight: 'medium' })}`}>Электронная почта:</h3>
              <a href={`mailto:${contactsData.email}`} className={`${text()} hover:text-primary-500 transition-colors`}>
                {contactsData.email}
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className={`${text({ weight: 'medium' })}`}>Телефон:</h3>
              <a href={`tel:${contactsData.phone}`} className={`${text()} hover:text-primary-500 transition-colors`}>
                {contactsData.phone}
              </a>
            </div>
          </CardBody>
        </Card>

        <Card className="dark:bg-[#000] border dark:border-gray-800">
          <CardHeader>
            <h2 className="text-xl font-semibold">Форма обратной связи</h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Ваше имя"
                placeholder="Иван Иванов"
                fullWidth
                required
              />
              <Input
                label="Электронная почта"
                placeholder="example@mail.com"
                type="email"
                fullWidth
                required
              />
              <Textarea
                label="Сообщение"
                placeholder="Ваш вопрос или предложение..."
                rows={4}
                fullWidth
                required
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  color="primary"
                  isLoading={isSubmitting}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSuccess ? 'Отправлено!' : 'Отправить'}
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>

      <Card className="dark:bg-[#000] border dark:border-gray-800">
        <CardHeader>
          <h2 className="text-xl font-semibold">Адрес</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col">
            <p className={text()}>{contactsData.address}</p>
            <div className="mt-4 aspect-video bg-gray-200 dark:bg-gray-900 rounded-md flex items-center justify-center">
              <MapFrame />
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="dark:bg-[#000] border dark:border-gray-800">
        <CardHeader>
          <h2 className="text-xl font-semibold">Как добраться</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-2">
            <p className={text()}>Главный корпус ДГТУ, 3 этаж</p>
            <p className={text()}>Кабинет 1-391а</p>
            <div className="mt-4 aspect-video bg-gray-200 dark:bg-gray-900 rounded-md flex items-center justify-center">
              <MapFrame />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};