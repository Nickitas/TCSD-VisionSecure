import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/_kernel/config/site.config";
import { ThemeSwitch } from "@/shared/ui/switches/ThemeSwitch";
import {
  Logo,
} from "@/shared/ui/icons/base";
import { appRouting } from '@/_kernel/config/app.routing.config';

export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href={appRouting.dashboard.main.path}>
            <Logo />
            <span className="font-bold text-inherit">{siteConfig.name}</span>
          </NextLink>
        </NavbarBrand>
        {siteConfig.navMenuItems.filter((_, idx) => idx < 4).map((item, idx) => (
          <NavbarItem key={`${item}-${idx}`}>
            <Link
              color={"foreground"}
              href={item.href}
              size="sm"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, idx) => (
            <NavbarMenuItem key={`${item}-${idx}`}>
              <Link
                color={idx === 4 ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem key='authorization'>
            <Button
              color='danger'
            >
              Выход
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
