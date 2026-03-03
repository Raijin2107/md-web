'use client';

import React, { useState, useEffect } from 'react';
import IconButton from '../atoms/IconButton';
import Icon from '../atoms/Icon';
import ThemeSwitch from './ThemeSwitch';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://material-web.dev';
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/material-components/material-web';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Components', href: '/demo' },
  // { label: 'Theming', href: '/theming' },
  { label: 'Docs', href: DOCS_URL, external: true },
  { label: 'GitHub', href: GITHUB_URL, external: true },
];

interface NavBarProps {
  activeHref?: string;
  onNavClick?: (item: NavItem) => void;
}

export default function NavBar({ activeHref, onNavClick }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('#navbar')) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <>
      <header
        id="navbar"
        className={[
          'fixed inset-x-0 top-0 z-50 transition-shadow duration-300 bg-foreground/15 backdrop-blur-2xl',
        ].join(' ')}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">

          {/* Brand */}
          <a
            href="/"
            className="shrink-0 text-base font-bold tracking-tight text-primary hover:opacity-70 transition-opacity"
          >
            md·web
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 items-center gap-1" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === activeHref;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    if (!item.external && onNavClick) {
                      e.preventDefault();
                      onNavClick(item);
                    }
                  }}
                  className={[
                    'flex items-center hover:bg-primary/30 gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                  ].join(' ')}
                >
                  {item.label}
                  {item.external && (
                    <Icon className="w-4 h-4">MoveUpRight</Icon>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex-1 md:hidden" />

          {/* Theme Switch */}
          <ThemeSwitch />

          {/* GitHub icon — desktop */}
          <IconButton
            target="_blank"
            href={GITHUB_URL}
            ariaLabel="Github">
            <Icon>Github</Icon>
          </IconButton>

          {/* Hamburger — mobile */}
          <button
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100 transition-colors  dark:hover:bg-zinc-800"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-primary/10 bg-primary/3 px-4 pb-4 pt-2  bg-primary/3 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = item.href === activeHref;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(e) => {
                      setMenuOpen(false);
                      if (!item.external && onNavClick) {
                        e.preventDefault();
                        onNavClick(item);
                      }
                    }}
                    className={[
                      'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-zinc-100 text-primary dark:bg-zinc-800 dark:text-zinc-50'
                        : 'text-muted hover:bg-zinc-100 hover:text-primary  dark:hover:bg-zinc-800 dark:hover:text-zinc-50',
                    ].join(' ')}
                  >
                    {item.label}
                    {item.external && (
                      <svg className="opacity-40" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>
      <div className="h-16 bg-background" aria-hidden />
    </>
  );
}