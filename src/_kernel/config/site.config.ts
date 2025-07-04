import { appRouting } from './app.routing.config';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VisionSecure",
  description: "VisionSecure предоставляет интуитивно понятный интерфейс для наблюдения за видео в реальном времени.",
  navItems: [
    {
      key: 'account',
      label: "Профиль",
      href: appRouting.account.main.path,
    },
    {
      key: 'gallery',
      label: "Галерея",
      href: appRouting.dashboard.main.path,
    },
    {
      key: 'cameras',
      label: "Камеры",
      href: appRouting.dashboard.cameras.path,
    },
    {
      key: 'users',
      label: "Пользователи",
      href: appRouting.dashboard.users.path,
    },
    {
      key: 'favorites',
      label: "Избранное",
      href: appRouting.dashboard.favorites.path,
    },
    {
      key: 'settings',
      label: "Настройки",
      href: appRouting.account.settings.path,
    },
  ],
  navMenuItems: [
    {
      key: 'gallery',
      label: "Галерея",
      href: appRouting.dashboard.main.path,
    },
    {
      key: 'cameras',
      label: "Камеры",
      href: appRouting.dashboard.cameras.path,
    },
    {
      key: 'users',
      label: "Пользователи",
      href: appRouting.dashboard.users.path,
    },
    {
      key: 'account',
      label: "Профиль",
      href: appRouting.account.main.path,
    },
    {
      key: 'favorites',
      label: "Избранное",
      href: appRouting.dashboard.favorites.path,
    },
    {
      key: 'settings',
      label: "Настройки",
      href: appRouting.account.settings.path,
    },
    {
      key: 'about',
      label: "О проекте",
      href: appRouting.about.path,
    },
    {
      key: 'contacts',
      label: "Контакты",
      href: appRouting.contacts.path,
    },
  ],

  navUseful: [
    {
      key: 'about',
      label: "О проекте",
      href: appRouting.about.path,
    },
    {
      key: 'contacts',
      label: "Контакты",
      href: appRouting.contacts.path,
    },
  ],

  contacts: {
    workTime: "Пн.-Пт.: 8:30 - 17:00",
    email: "spanov@donstu.ru",
    phone: "238-17-13",
    address: "344003, г. Ростов-на-Дону, пл. Гагарина, 1. ауд. 1-391а"
  },



  links: {
    github: "",
    docs: "",
    sponsor: "",
  },
};