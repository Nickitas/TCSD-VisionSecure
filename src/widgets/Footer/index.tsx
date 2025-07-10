import React, { FC } from 'react';
import Link from "next/link";
import { siteConfig } from '@/_kernel/config/site.config';
import { Button } from '@heroui/button';
import { GithubIcon } from '@/shared/ui/icons/base';

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-default-200 bg-default-50/50">
            <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-default-900">
                                {siteConfig.name}
                            </span>
                        </div>
                        <p className="text-sm text-default-600">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4">
                            {siteConfig.links.github && (
                                <Button
                                    isIconOnly
                                    as={Link}
                                    href={siteConfig.links.github}
                                    variant="light"
                                    aria-label="GitHub"
                                >
                                    <GithubIcon className="h-5 w-5" />
                                </Button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
                        <article>
                            <h3 className="text-sm font-semibold text-default-900">Навигация</h3>
                            <ul className="mt-4 space-y-2">
                                {siteConfig.navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-default-600 hover:text-primary-500 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article>
                            <h3 className="text-sm font-semibold text-default-900">Полезное</h3>
                            <ul className="mt-4 space-y-2">
                                {siteConfig.navUseful.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-default-600 hover:text-primary-500 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <article>
                        <h3 className="text-sm font-semibold text-default-900">Контакты</h3>
                        <address className="mt-4 not-italic text-default-600">
                            <p className="text-sm">Email: {siteConfig.contacts.email}</p>
                            <p className="mt-2 text-sm">Телефон: {siteConfig.contacts.phone}</p>
                            <p className="mt-2 text-sm">
                                {siteConfig.contacts.address}
                            </p>
                            <p className="mt-2 text-sm">{siteConfig.contacts.workTime}</p>
                        </address>
                    </article>
                </div>

                <article className="mt-12 border-t border-default-200 pt-8">
                    <p className="text-xs text-default-500">
                        &copy; {currentYear} {siteConfig.name}. Все права защищены.
                    </p>
                </article>
            </div>
        </footer>
    );
};