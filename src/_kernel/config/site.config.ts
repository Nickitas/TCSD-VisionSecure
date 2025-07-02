import { appRouting } from './app.routing.config';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "VisionSecure",
  description: "VisionSecure предоставляет интуитивно понятный интерфейс для наблюдения за видео в реальном времени.",
  navItems: [
    {
      label: "Галерея",
      href: appRouting.dashboard.main.path,
    },
    {
      label: "Избранное",
      href: appRouting.dashboard.favorites.path,
    },
    {
      label: "Камеры",
      href: appRouting.dashboard.cameras.path,
    },
    {
      label: "Пользователи",
      href: appRouting.dashboard.users.path,
    },
  ],
  navMenuItems: [
    {
      label: "Галерея",
      href: appRouting.dashboard.main.path,
    },
    {
      label: "Избранное",
      href: appRouting.dashboard.favorites.path,
    },
    {
      label: "Камеры",
      href: appRouting.dashboard.cameras.path,
    },
    {
      label: "Пользователи",
      href: appRouting.dashboard.users.path,
    },
    {
      label: "О проекте",
      href: appRouting.about.path,
    },
    {
      label: "Контакты",
      href: appRouting.contacts.path,
    },
  ],

  navUseful: [
    {
      label: "О проекте",
      href: appRouting.about.path,
    },
    {
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