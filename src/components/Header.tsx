import { useEffect, useState } from 'react';
import { nav } from '../data/content';
import { logo } from '../data/images';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="GAP Ministries logo"
            className="h-10 w-10 rounded-md object-contain"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-gap-black">
            GAP <span className="text-gap-red">Ministries</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gap-black/80 transition-colors hover:text-gap-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:02892106116"
            className="rounded-full bg-gap-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gap-red-dark"
          >
            028 9210 6116
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-gap-black md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gap-black/10 bg-white px-5 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-gap-black/80 hover:bg-gap-stone hover:text-gap-red"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:02892106116"
            className="mt-2 rounded-full bg-gap-red px-4 py-2 text-center text-sm font-semibold text-white"
          >
            028 9210 6116
          </a>
        </nav>
      )}
    </header>
  );
}
