/**
 * Конфигурация настроек приложения по умолчанию
 */
export const DEFAULT_SETTINGS = {
  // Настройки внешнего вида
  appearance: {
    theme: 'system' as 'light' | 'dark' | 'system',
    fontSize: 'medium' as 'small' | 'medium' | 'large',
    density: 'normal' as 'compact' | 'normal' | 'spacious',
    accentColor: '#3b82f6',
    reduceAnimations: false,
  },

  // Настройки уведомлений
  notifications: {
    email: true,
    push: true,
    sound: true,
    vibration: false,
    desktopAlerts: true,
  },

  // Язык и региональные настройки
  locale: {
    language: 'ru' as 'ru' | 'en',
    dateFormat: 'dmy' as 'dmy' | 'mdy' | 'ymd',
    timeFormat: '24' as '12' | '24',
    timezone: 'auto' as 'auto' | string,
    weekStart: 1 as 0 | 1,
  },

  // Настройки конфиденциальности
  privacy: {
    showEmail: 'none' as 'none' | 'contacts' | 'all',
    showPhone: 'none' as 'none' | 'contacts' | 'all',
    activityTracking: true,
    personalizedAds: false,
  },

  // Настройки доступности
  accessibility: {
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    dyslexiaFont: false,
  },

  // Экспериментальные функции
  experimental: {
    betaFeatures: false,
    newNavigation: false,
    aiAssistance: false,
  },
} as const;

/**
 * Типы настроек для TypeScript
 */
export type AppSettings = typeof DEFAULT_SETTINGS;
export type ThemeMode = AppSettings['appearance']['theme'];
export type Language = AppSettings['locale']['language'];
export type PrivacyLevel = AppSettings['privacy']['showEmail'];

/**
 * Валидные значения для настроек
 */
export const SETTINGS_OPTIONS = {
  themes: [
    { value: 'light', label: 'Светлая' },
    { value: 'dark', label: 'Тёмная' },
    { value: 'system', label: 'Как в системе' },
  ],
  fontSizes: [
    { value: 'small', label: 'Мелкий' },
    { value: 'medium', label: 'Средний' },
    { value: 'large', label: 'Крупный' },
  ],
  languages: [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
  ],
  dateFormats: [
    { value: 'dmy', label: 'ДД.ММ.ГГГГ' },
    { value: 'mdy', label: 'ММ/ДД/ГГГГ' },
    { value: 'ymd', label: 'ГГГГ-ММ-ДД' },
  ],
  privacyLevels: [
    { value: 'none', label: 'Никто' },
    { value: 'contacts', label: 'Только контакты' },
    { value: 'all', label: 'Все пользователи' },
  ],
} as const;


export const PERSISTED_SETTINGS = [
  'appearance.theme',
  'appearance.fontSize',
  'appearance.accentColor',
  'appearance.reduceAnimations',
  'locale.language',
  'locale.dateFormat',
  'locale.timeFormat',
] as const;