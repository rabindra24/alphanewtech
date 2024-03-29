"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navElements } from "@/constants/contants";
import { Button } from "../ui/button";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="md:flex hidden   z-10 ">
      <NavigationMenuList>
        {navElements.map((item, idx) => {
          if (item.title === "services") {
            return (
              <NavigationMenuItem className="" key={idx}>
                <NavigationMenuTrigger className="bg-tranparent">{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/services"
                        >
                          {/* <Icons.logo className="h-6 w-6" /> */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Our Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {item.sublinks.map((item, idx) => (
                      <ListItem href={item.link} title={item.title} className="" key={idx}>
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem className=" p-0" key={idx}>
                <Link
                  href={`${item.link}`}
                  legacyBehavior
                  passHref
                  className=""
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent rounded-none w-full h-full`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
        <Button className="bg-transparent border-2 border-primary px-10 py-7 rounded-none">Get an estimate</Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
