import { useState, useEffect } from 'react';
import type { Lang } from '../../../types/index';

type CurrentPage = 'home' | 'bits' | 'contact';

interface NavLink {
  key: CurrentPage;
  label: string;
  href: string;
}

interface LangLink {
  lang: Lang;
  href: string;
}

interface NavProps {
  current: CurrentPage;
  lang: Lang;
  links: NavLink[];
  langLinks: LangLink[];
}

export function Nav({ current, lang, links, langLinks }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest('[data-banner-nav]')) setMenuOpen(false);
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <header data-banner-nav className="site-header">
      <div className="relative mx-auto flex w-full max-w-295 items-center gap-8 px-8 py-3 max-[1180px]:gap-4 max-[1180px]:px-6 max-[880px]:gap-3">
        <a
          className="flex items-center gap-3 whitespace-nowrap border-none font-blackletter text-[1.6rem] leading-none text-gold"
          href={`/${lang}/`}
          aria-label="Emanuele Toma — home"
        >
          <span className="max-[1060px]:hidden max-[880px]:block">Emanuele Toma</span>
        </a>

        <ul className="nav-menu" data-open={menuOpen ? 'true' : 'false'}>
          {links.map(({ key, label, href }) => (
            <li key={key}>
              <a
                className="nav-link"
                href={href}
                aria-current={current === key ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="ml-auto hidden h-9 w-10 cursor-pointer items-center justify-center border border-gold-dim bg-[rgba(0,0,0,.25)] p-0 text-gold max-[880px]:inline-flex"
          aria-label="Menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={() => setMenuOpen(o => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4.5 w-4.5">
            <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
          </svg>
        </button>

        <div
          className="inline-flex items-center border border-gold-dim bg-[rgba(0,0,0,.25)] font-carved text-[.75rem] uppercase tracking-[.2em]"
          role="group"
          aria-label="Language"
        >
          {langLinks.map(({ lang: l, href }) => (
            <a key={l} className="lang-btn" href={href} aria-pressed={lang === l ? 'true' : 'false'}>
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
