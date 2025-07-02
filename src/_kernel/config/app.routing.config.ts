type DynamicPath<T extends string = string> = {
  path: T;
};

class PagePath {
  constructor(readonly prefix: string) { }

  method = (path: string): string => `${this.prefix}/${path}`;

  get path(): string {
    return this.prefix;
  }

  get normalizedPath(): string {
    return this.method('').replace(/\/$/, '');
  }
}

/**
 * Конфигурация для /dashboard
 */
class PageDashboardConfig extends PagePath {
  constructor(prefix: string) {
    super(prefix);
  }

  main = new PagePath(this.method(''));
  cameras = new PagePath(this.method('cameras'));
  users = new PagePath(this.method('users'));
  favorites = new PagePath(this.method('favorites'));
}

/**
 * Конфигурация для /account
 */
class PageAccountConfig extends PagePath {
  constructor(prefix: string) {
    super(prefix);
  }

  main = new PagePath(this.method(''));
}

/**
 * Конфигурация
 */
class AppRouting extends PagePath {
  constructor(prefix: string) {
    super(prefix);
  }

  signIn = new PagePath(this.method('signin'));
  signUp = new PagePath(this.method('signup'));
  recovery = new PagePath(this.method('recovery'));
  
  about = new PagePath(this.method('about'));
  contacts = new PagePath(this.method('contacts'));

  dashboard = new PageDashboardConfig(this.method('dashboard'));
  account = new PageAccountConfig(this.method('account'));
}

export const appRouting = new AppRouting('');
