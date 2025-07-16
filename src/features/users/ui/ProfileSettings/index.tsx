"use client";

import { FC } from 'react';
import { Card } from '@heroui/card';
import { Switch } from '@heroui/switch';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';
import { Divider } from "@heroui/divider";
import {
    SunIcon,
    MoonIcon,
    BellIcon,
    EyeIcon,
    LanguageIcon,
    CogIcon,
    DevicePhoneMobileIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';
import {
    DEFAULT_SETTINGS,
    SETTINGS_OPTIONS
} from '../../config/profile-settings.config';

export const ProfileSettings: FC = () => {
    return (
        <div className="flex flex-col gap-6 mb-20 max-w-4xl mx-auto w-full px-4">
            {/* Внешний вид */}
            <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <EyeIcon className="w-5 h-5 text-primary" />
                    Внешний вид
                </h2>
                <Divider className='mb-4' />

                <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Тема оформления</p>
                                <p className="text-sm text-gray-500">Выберите светлую, темную или системную тему</p>
                            </div>
                            <div className="flex gap-2">
                                {SETTINGS_OPTIONS.themes.map((theme) => (
                                    <Button
                                        key={theme.value}
                                        variant="flat"
                                        startContent={
                                            theme.value === 'light' ? <SunIcon className="w-5 h-5" /> :
                                                theme.value === 'dark' ? <MoonIcon className="w-5 h-5" /> :
                                                    <CogIcon className="w-5 h-5" />
                                        }
                                        className="px-4"
                                        color={DEFAULT_SETTINGS.appearance.theme === theme.value ? 'primary' : 'default'}
                                    >
                                        {theme.label}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Размер шрифта</p>
                                <p className="text-sm text-gray-500">Настройте удобный для вас размер текста</p>
                            </div>
                            <Select
                                className="w-60"
                                defaultSelectedKeys={[DEFAULT_SETTINGS.appearance.fontSize]}
                                startContent={<span className="text-sm">A</span>}
                            >
                                {SETTINGS_OPTIONS.fontSizes.map((size) => (
                                    <SelectItem key={size.value}>{size.label}</SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Уведомления */}
            <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BellIcon className="w-5 h-5 text-primary" />
                    Уведомления
                </h2>
                <Divider className='mb-4' />

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium">Email-уведомления</p>
                                <p className="text-sm text-gray-500">Получать важные уведомления на почту</p>
                            </div>
                        </div>
                        <Switch defaultSelected={DEFAULT_SETTINGS.notifications.email} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <BellIcon className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium">Push-уведомления</p>
                                <p className="text-sm text-gray-500">Разрешить уведомления в браузере</p>
                            </div>
                        </div>
                        <Switch defaultSelected={DEFAULT_SETTINGS.notifications.push} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <DevicePhoneMobileIcon className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium">Звуковые оповещения</p>
                                <p className="text-sm text-gray-500">Звук при новых уведомлениях</p>
                            </div>
                        </div>
                        <Switch defaultSelected={DEFAULT_SETTINGS.notifications.sound} />
                    </div>
                </div>
            </Card>

            {/* Язык и регион */}
            <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <LanguageIcon className="w-5 h-5 text-primary" />
                    Язык и регион
                </h2>
                <Divider className='mb-4' />

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Язык интерфейса</p>
                            <p className="text-sm text-gray-500">Выберите предпочитаемый язык</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={[DEFAULT_SETTINGS.locale.language]}
                        >
                            {SETTINGS_OPTIONS.languages.map((lang) => (
                                <SelectItem key={lang.value}>{lang.label}</SelectItem>
                            ))}
                        </Select>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Формат даты</p>
                            <p className="text-sm text-gray-500">Как отображать даты на сайте</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={[DEFAULT_SETTINGS.locale.dateFormat]}
                        >
                            {SETTINGS_OPTIONS.dateFormats.map((format) => (
                                <SelectItem key={format.value}>{format.label}</SelectItem>
                            ))}
                        </Select>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Часовой пояс</p>
                            <p className="text-sm text-gray-500">{DEFAULT_SETTINGS.locale.timezone === 'auto' ?
                                'Определяется автоматически' : 'Установлен вручную'}</p>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={[DEFAULT_SETTINGS.locale.timezone === 'auto' ? 'auto' : 'manual']}
                        >
                            <SelectItem key="auto">Определять автоматически</SelectItem>
                            <SelectItem key="manual">Указать вручную</SelectItem>
                        </Select>
                    </div>
                </div>
            </Card>

            {/* Конфиденциальность */}
            <Card className="p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                    Конфиденциальность
                </h2>
                <Divider className='mb-4' />

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium">Показывать email другим пользователям</p>
                                <p className="text-sm text-gray-500">Будет виден в вашем профиле</p>
                            </div>
                        </div>
                        <Switch defaultSelected={DEFAULT_SETTINGS.privacy.showEmail !== 'none'} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <DevicePhoneMobileIcon className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="font-medium">Показывать телефон</p>
                                <p className="text-sm text-gray-500">Кто может видеть ваш номер телефона</p>
                            </div>
                        </div>
                        <Select
                            className="w-60"
                            defaultSelectedKeys={[DEFAULT_SETTINGS.privacy.showPhone]}
                        >
                            {SETTINGS_OPTIONS.privacyLevels.map((level) => (
                                <SelectItem key={level.value}>{level.label}</SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>
            </Card>

            <div className="flex justify-end gap-4 sticky bottom-4 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
                <Button variant="bordered" color="danger" className="min-w-32">
                    Сбросить настройки
                </Button>
                <Button color="primary" className="min-w-32">
                    Сохранить изменения
                </Button>
            </div>
        </div>
    );
};