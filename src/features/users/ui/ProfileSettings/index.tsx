"use client";

import { FC } from 'react';
import { Card } from '@heroui/card';
import { Switch } from '@heroui/switch';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';
import { SunIcon, MoonIcon, BellIcon, EyeIcon, LanguageIcon } from '@heroicons/react/24/outline';
import { Divider } from "@heroui/divider";

export const ProfileSettings: FC = () => {
    return (
        <div className="flex flex-col gap-6 mb-20">
            {/* Внешний вид */}
            <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <EyeIcon className="w-5 h-5" />
                    Внешний вид
                </h2>
                <Divider className='mb-2'/>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Тема оформления</p>
                            <p className="text-sm text-gray-500">Выберите светлую или темную тему</p>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="flat"
                                startContent={<SunIcon className="w-5 h-5" />}
                                className="px-4"
                            >
                                Светлая
                            </Button>
                            <Button
                                variant="flat"
                                startContent={<MoonIcon className="w-5 h-5" />}
                                className="px-4"
                            >
                                Тёмная
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Размер шрифта</p>
                            <p className="text-sm text-gray-500">Настройте удобный для вас размер текста</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={['medium']}
                        >
                            <SelectItem key="small">Мелкий</SelectItem>
                            <SelectItem key="medium">Средний</SelectItem>
                            <SelectItem key="large">Крупный</SelectItem>
                        </Select>
                    </div>
                </div>
            </Card>

            {/* Уведомления */}
            <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BellIcon className="w-5 h-5" />
                    Уведомления
                </h2>
<Divider className='mb-2'/>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Email-уведомления</p>
                            <p className="text-sm text-gray-500">Получать важные уведомления на почту</p>
                        </div>
                        <Switch defaultSelected />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Push-уведомления</p>
                            <p className="text-sm text-gray-500">Разрешить уведомления в браузере</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Звуковые оповещения</p>
                            <p className="text-sm text-gray-500">Звук при новых уведомлениях</p>
                        </div>
                        <Switch defaultSelected />
                    </div>
                </div>
            </Card>

            {/* Язык и регион */}
            <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <LanguageIcon className="w-5 h-5" />
                    Язык и регион
                </h2>
<Divider className='mb-2'/>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Язык интерфейса</p>
                            <p className="text-sm text-gray-500">Выберите предпочитаемый язык</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={['ru']}
                        >
                            <SelectItem key="ru">Русский</SelectItem>
                            <SelectItem key="en">English</SelectItem>
                        </Select>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Формат даты</p>
                            <p className="text-sm text-gray-500">Как отображать даты на сайте</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={['dmy']}
                        >
                            <SelectItem key="dmy">ДД.ММ.ГГГГ</SelectItem>
                            <SelectItem key="mdy">ММ/ДД/ГГГГ</SelectItem>
                            <SelectItem key="ymd">ГГГГ-ММ-ДД</SelectItem>
                        </Select>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Часовой пояс</p>
                            <p className="text-sm text-gray-500">Автоматически или вручную</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={['auto']}
                        >
                            <SelectItem key="auto">Определять автоматически</SelectItem>
                            <SelectItem key="manual">Указать вручную</SelectItem>
                        </Select>
                    </div>
                </div>
            </Card>

            {/* Конфиденциальность */}
            <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                    Конфиденциальность
                </h2>
<Divider className='mb-2'/>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Показывать email другим пользователям</p>
                            <p className="text-sm text-gray-500">Будет виден в вашем профиле</p>
                        </div>
                        <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Показывать телефон</p>
                            <p className="text-sm text-gray-500">Кто может видеть ваш номер телефона</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={['nobody']}
                        >
                            <SelectItem key="nobody">Никто</SelectItem>
                            <SelectItem key="contacts">Только контакты</SelectItem>
                            <SelectItem key="all">Все пользователи</SelectItem>
                        </Select>
                    </div>
                </div>
            </Card>

            <div className="flex justify-end gap-4">
                <Button variant="bordered" color="danger">
                    Сбросить настройки
                </Button>
                <Button color="primary">
                    Сохранить изменения
                </Button>
            </div>
        </div>
    );
};