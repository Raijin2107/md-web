'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Switch from '../atoms/Switch';
import Icon from '../atoms/Icon';

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — don't render until client knows the theme
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <Switch
      icons
      selected={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onChange={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <Icon slot="on-icon"  name="Moon" size={14} />
      <Icon slot="off-icon" name="Sun"  size={14} />
    </Switch>
  );
}
