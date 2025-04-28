"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

// Replace the entire navItems array with this simplified version
const navItems = [
  { title: "Rentals", href: "/rentals" },
  { title: "Food Menu", href: "/menu" },
];

// Replace the entire LandingNav component with this updated version
export function LandingNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4",
        scrolled ? "pt-4" : "pt-6"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-4xl rounded-full transition-all duration-300 flex items-center justify-center py-3 px-6",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-white/70 backdrop-blur-sm shadow-lg"
        )}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center w-full gap-12">
          <Link
            href="/rentals"
            className={cn(
              "text-base font-medium transition-colors",
              pathname === "/rentals"
                ? "text-green-600"
                : "text-slate-700 hover:text-green-600"
            )}
          >
            Rentals
          </Link>

          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Elima
            </span>
            <Image
              src="/elimacorner-logo.svg"
              alt="Elima Corner Logo"
              width={30}
              height={30}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Corner
            </span>
          </Link>

          <Link
            href="/menu"
            className={cn(
              "text-base font-medium transition-colors",
              pathname === "/menu"
                ? "text-green-600"
                : "text-slate-700 hover:text-green-600"
            )}
          >
            Food Menu
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Elima
            </span>
            <Image
              src="/elimacorner-logo.svg"
              alt="Elima Corner Logo"
              width={24}
              height={24}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Corner
            </span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-700">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center gap-1">
                  <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                    Elima
                  </span>
                  <Image
                    src="/elimacorner-logo.svg"
                    alt="Elima Corner Logo"
                    width={24}
                    height={24}
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                    Corner
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "justify-start",
                      pathname === item.href && "bg-green-50 text-green-600"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-green-600">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
