'use client';

import React, { useEffect, useRef } from 'react';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';

interface TabsProps extends React.HTMLAttributes<HTMLElement> {
    activeTabIndex?: number;
    autoActivate?: boolean;
    onTabChange?: (index: number) => void;
    children: React.ReactNode;
}

export const Tabs = ({
    activeTabIndex = 0,
    autoActivate,
    onTabChange,
    children,
    className = '',
    ...props
}: TabsProps) => {
    const tabsRef = useRef<any>(null);

    useEffect(() => {
        const tabsElement = tabsRef.current;
        if (!tabsElement) return;

        const handleUpdate = (e: any) => {
            if (onTabChange) {
                onTabChange(tabsElement.activeTabIndex);
            }
        };

        tabsElement.addEventListener('change', handleUpdate);
        return () => {
            tabsElement.removeEventListener('change', handleUpdate);
        };
    }, [onTabChange]);

    useEffect(() => {
        if (tabsRef.current && tabsRef.current.activeTabIndex !== activeTabIndex) {
            tabsRef.current.activeTabIndex = activeTabIndex;
        }
    }, [activeTabIndex]);

    return (
        <>
            <style jsx global>{`
                md-primary-tab {
                    --md-primary-tab-container-color: var(--md-sys-color-surface-container-highest);
                    --md-primary-tab-hover-state-layer-color: var(--md-sys-color-secondary);
                    --md-primary-tab-hover-state-layer-opacity: 0.1;
                    --md-primary-tab-active-hover-state-layer-color: var(--md-sys-color-primary);
                    --md-primary-tab-active-hover-state-layer-opacity: 0.12;
                }

                md-secondary-tab {
                    --md-secondary-tab-container-color: var(--md-sys-color-surface-container-high);
                    --md-secondary-tab-hover-state-layer-color: var(--md-sys-color-secondary);
                    --md-secondary-tab-hover-state-layer-opacity: 0.05;
                    --md-secondary-tab-active-hover-state-layer-color: var(--md-sys-color-primary);
                    --md-secondary-tab-active-hover-state-layer-opacity: 0.08;
                }
            `}</style>
            <md-tabs
                ref={tabsRef}
                className={className}
                activeTabIndex={activeTabIndex}
                autoActivate={autoActivate}
                suppressHydrationWarning
                {...props}
            >
                {children}
            </md-tabs>
        </>
    );
};

interface TabProps extends React.HTMLAttributes<HTMLElement> {
    active?: boolean;
    inlineIcon?: boolean;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export const Tab = ({
    active,
    inlineIcon,
    variant = 'primary',
    children,
    ...props
}: TabProps) => {
    const Tag = (variant === 'primary' ? 'md-primary-tab' : 'md-secondary-tab') as any;

    return (
        <Tag
            active={active}
            inlineIcon={inlineIcon}
            suppressHydrationWarning
            {...props}
        >
            {children}
        </Tag>
    );
};
