import { useEffect, useState } from "react";
import { Countdown } from "./Countdown";

const links = [
  { href: "#moduli", label: "Moduli" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#bonus", label: "Bonus" },
  { href: "#percorso-live", label: "Percorso Live" },
  { href: "#iscriviti", label: "Iscriviti" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-black tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper">
              ▶
            </span>
            <span>gionsnow</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-ink transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Countdown />
          </div>

          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 rounded-full border border-border flex items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <nav className="lg:hidden pb-6 flex flex-col gap-1 border-t border-border pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium hover:bg-cream rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 px-4">
              <Countdown />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
