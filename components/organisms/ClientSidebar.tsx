'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '../molecules/Sidebar';
import Icon, { IconName } from '../atoms/Icon';
import Ripple from '../atoms/Ripple';
import ThemeSwitch from '../molecules/ThemeSwitch';

const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://material-web.dev';
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/material-components/material-web';

interface NavItem {
    label: string;
    href?: string;
    icon?: IconName | string;
    external?: boolean;
    isSeparator?: boolean;
    isTitle?: boolean;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Docs', href: DOCS_URL, external: true, icon: 'BookOpen' },
    { label: 'GitHub', href: GITHUB_URL, external: true, icon: 'Github' },
    { label: 'Separator', isSeparator: true },
    { label: 'Button', href: '/demo/button', icon: 'MousePointerClick' },
    { label: 'Checkbox', href: '/demo/checkbox', icon: 'CheckSquare' },
    { label: 'Chip', href: '/demo/chip', icon: 'Tag' },
    { label: 'Dialog', href: '/demo/dialog', icon: 'MessageSquare' },
    { label: 'FAB', href: '/demo/fab', icon: 'PlusCircle' },
    { label: 'Icon', href: '/demo/icon', icon: 'Star' },
    { label: 'List', href: '/demo/list', icon: 'List' },
    { label: 'Progress', href: '/demo/progress', icon: 'Loader' },
    { label: 'Radio', href: '/demo/radio', icon: 'CircleDot' },
    { label: 'Ripple', href: '/demo/ripple', icon: 'Waves' },
    { label: 'Select', href: '/demo/select', icon: 'ChevronDownSquare' },
    { label: 'Slider', href: '/demo/slider', icon: 'SlidersHorizontal' },
    { label: 'Switch', href: '/demo/switch', icon: 'ToggleRight' },
    { label: 'Tab', href: '/demo/tab', icon: 'FolderKanban' },
    { label: 'Text Field', href: '/demo/text-field', icon: 'Type' },
];

export default function ClientSidebar() {
    const [isMobile, setIsMobile] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const variant = isMobile ? 'overlay' : 'persistent';

    return (
        <Sidebar
            collapsed={collapsed}
            onToggleCollapse={setCollapsed}
            variant={variant}
            footer={<ThemeSwitch />}
        >
            <nav className="flex flex-col gap-2 flex-1" aria-label="Primary navigation">
                {NAV_ITEMS.map((item, idx) => {
                    if (item.isSeparator) {
                        return <div key={`sep-${idx}`} className="h-px bg-outline-variant my-2" />;
                    }

                    if (item.isTitle) {
                        if (collapsed) return null;
                        return (
                            <div key={`title-${idx}`} className="px-4 mt-4 mb-2">
                                <span className="text-xs font-bold tracking-wider text-on-surface-variant uppercase">
                                    {item.label}
                                </span>
                            </div>
                        );
                    }

                    if (collapsed && !item.icon) return null;

                    const isActive = item.href === pathname;

                    const linkStyles = [
                        'flex items-center rounded-full transition-all duration-300 relative overflow-hidden w-full px-4 h-14',
                        isActive
                            ? 'bg-secondary-container text-on-secondary-container font-medium'
                            : 'text-on-surface-variant hover:bg-surface-variant/50 hover:text-on-surface hover:active:bg-surface-variant/80 font-medium',
                    ].join(' ');

                    const content = (
                        <>
                            <Ripple />
                            {item.icon && (
                                <div className="shrink-0 flex items-center justify-center pointer-events-none">
                                    <Icon size={24}>{item.icon as IconName}</Icon>
                                </div>
                            )}
                            <div
                                className={`flex flex-1 items-center overflow-hidden whitespace-nowrap transition-all duration-300 pointer-events-none ${collapsed ? 'opacity-0 w-0' : 'opacity-100 ml-4'
                                    }`}
                            >
                                <span className="truncate flex-1 text-sm">{item.label}</span>
                                {item.external && (
                                    <Icon className="w-4 h-4 opacity-70 shrink-0 ml-2">MoveUpRight</Icon>
                                )}
                            </div>
                        </>
                    );

                    if (item.external && item.href) {
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkStyles}
                                title={collapsed ? item.label : undefined}
                            >
                                {content}
                            </a>
                        );
                    }

                    if (item.href) {
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={linkStyles}
                                aria-current={isActive ? 'page' : undefined}
                                title={collapsed ? item.label : undefined}
                            >
                                {content}
                            </Link>
                        );
                    }

                    return null;
                })}
            </nav>
        </Sidebar>
    );
}
