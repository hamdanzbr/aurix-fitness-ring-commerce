import { Button } from "@/components/ui/button";

const links = [
  { href: "#shop", label: "Shop" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-aurix-black/[0.82] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-sm font-bold tracking-[0.18em]">
          <span className="h-4 w-4 rounded-full border border-white/70 shadow-[0_0_16px_rgba(120,243,255,0.32)]" />
          AURIX
        </a>

        <div className="hidden items-center gap-8 text-xs font-medium text-white/60 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            aria-label="Open cart"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white sm:flex"
            href="#shop"
          >
            <span className="h-3.5 w-3.5 rounded-sm border border-current" />
          </a>
          <a href="/login"><Button className="h-9 px-5 text-xs">Sign In</Button></a>
        </div>
      </nav>
    </header>
  );
}
