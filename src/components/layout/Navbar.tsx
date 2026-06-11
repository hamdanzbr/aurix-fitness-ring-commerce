"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";

import { LogOut, Menu, User } from "lucide-react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavbarProps = {
  href: string;
  label: string;
};

export function Navbar({ links }: { links: NavbarProps[] }) {
  const router = useRouter();
  const pathname = usePathname();

  const user = useAuthStore((state) => state.user);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/[0.08]
        bg-aurix-black/[0.82]
        backdrop-blur-xl
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
        "
      >
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
          <img
            src="https://png.pngtree.com/png-vector/20260520/ourmid/pngtree-ring-irasutoya-style-japanese-illustration-brushed-metal-wedding-band-png-image_19330125.webp"
            alt="Aurix"
            className="h-10 w-auto object-contain"
          />

          <span
            className="
              font-bold
              tracking-[0.2em]
              text-white
            "
          >
            AURIX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            items-center
            gap-8
            text-xs
            font-medium
            md:flex
          "
        >
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition",
                  isActive
                    ? "text-[#1C78FA] font-semibold"
                    : "text-white/60 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <div
                  className="
      flex
      h-10
      w-10
      cursor-pointer
      items-center
      justify-center
      rounded-md
      text-white
      hover:bg-[#151B30]
    "
                >
                  <Menu size={22} />
                </div>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
                  w-[280px]
                  border-l
                  border-[#1A1D2E]
                  bg-[#0C1020]
                  text-white
                "
              >
                <div className="mt-10 space-y-2">
                  {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          `
                          block
                          rounded-xl
                          px-4
                          py-3
                          transition
                        `,
                          isActive
                            ? "bg-[#1C78FA]/20 text-[#1C78FA]"
                            : "text-zinc-400 hover:bg-[#151B30] hover:text-white",
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                <div
                  className="
                    mt-8
                    border-t
                    border-[#1A1D2E]
                    pt-6
                  "
                >
                  {isAuthenticated ? (
                    <div className="space-y-3">
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          bg-[#151B30]
                          p-3
                        "
                      >
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-[#1C78FA]/20
                          "
                        >
                          <User size={18} />
                        </div>

                        <div>
                          <p className="font-medium">{user?.name}</p>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        onClick={handleLogout}
                        className="
                          w-full
                          border-red-500/30
                          text-red-400
                        "
                      >
                        <LogOut size={16} className="mr-2" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full"
                      onClick={() => router.push("/login")}
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#1C78FA]/30
                      bg-[#0F1528]
                      px-3
                      py-2
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      hover:border-[#1C78FA]
                      hover:shadow-[0_0_20px_rgba(28,120,250,0.15)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-[#1C78FA]/20
                      "
                    >
                      <User size={14} />
                    </div>

                    <span>{user?.name || "User"}</span>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="
                    w-48
                    border
                    border-[#1A1D2E]
                    bg-[#0C1020]
                    text-white
                  "
                >
                  <DropdownMenuItem>
                    <User size={16} />
                    Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="
                      text-red-400
                      focus:text-red-400
                    "
                  >
                    <LogOut size={16} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button className="h-9 px-5 text-xs">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
