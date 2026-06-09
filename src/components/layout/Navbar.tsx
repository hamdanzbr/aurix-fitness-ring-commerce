"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";
import { LogOut, User } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-aurix-black/[0.82] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://png.pngtree.com/png-vector/20260520/ourmid/pngtree-ring-irasutoya-style-japanese-illustration-brushed-metal-wedding-band-png-image_19330125.webp"
            alt="Aurix"
            className="h-10 w-auto object-contain"
          />
          AURIX
        </a>

        <div className="hidden items-center gap-8 text-xs font-medium text-white/60 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn('transition')}
              >
                <h1 className={cn(isActive? "text-[#1C78FA] font-semibold":"text-white/60 hover:text-white")}>{link.label}</h1>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* {<a
            aria-label="Open cart"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white sm:flex"
            href="#shop"
          >
            <span className="h-3.5 w-3.5 rounded-sm border border-current" />
          </a>} */}

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div
                  className="
      flex
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
      cursor-pointer
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
                <DropdownMenuItem
                  className="
                    cursor-pointer
                    focus:bg-[#151B30]
                  "
                >
                  <User size={16} />
                  Profile
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={handleLogout}
                  className="
                    cursor-pointer
                    text-red-400
                    focus:bg-[#151B30]
                    focus:text-red-400
                  "
                >
                  <LogOut size={16} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <a href="/login">
              <Button className="h-9 px-5 text-xs">Sign In</Button>
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
