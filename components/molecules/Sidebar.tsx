import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '../atoms/Icon';
import IconButton from '../atoms/IconButton';

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
  className?: string;
  variant?: 'persistent' | 'overlay';
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Sidebar({
  collapsed: controlledCollapsed,
  onToggleCollapse,
  className = '',
  variant = 'persistent',
  children,
  footer
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);

  const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;
  const isOverlay = variant === 'overlay';

  const handleToggle = () => {
    const newState = !isCollapsed;
    if (controlledCollapsed === undefined) {
      setInternalCollapsed(newState);
    }
    onToggleCollapse?.(newState);
  };

  const asideClasses = [
    'flex flex-col h-screen shrink-0 transition-all duration-300',
    isOverlay && 'rounded-e-3xl',
    isOverlay ? 'fixed left-0 top-0 bottom-0 z-50' : 'relative',
    isOverlay && isCollapsed ? 'bg-transparent border-transparent w-20 pointer-events-none' : 'bg-surface-container border-r border-outline-variant',
    isOverlay && !isCollapsed ? 'shadow-xl w-64 pointer-events-auto' : '',
    !isOverlay && isCollapsed ? 'w-20' : '',
    !isOverlay && !isCollapsed ? 'w-64' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <>
      {isOverlay && !isCollapsed && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity duration-300"
          onClick={() => {
            if (controlledCollapsed === undefined) {
              setInternalCollapsed(true);
            }
            onToggleCollapse?.(true);
          }}
        />
      )}
      <aside
        className={asideClasses}
        aria-label="Sidebar Navigation"
      >
        <div className="flex items-center h-16 min-h-[4rem] px-[20px] overflow-hidden whitespace-nowrap pointer-events-auto">
          <IconButton
            onClick={handleToggle}
            ariaLabel={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="shrink-0 bg-surface-container sm:bg-transparent shadow-sm sm:shadow-none rounded-md"
          >
            <Icon>{isCollapsed ? 'Menu' : 'ListIndentDecrease'}</Icon>
          </IconButton>
          <div
            className={`transition-all duration-300 flex items-center ${isCollapsed ? 'w-0 opacity-0 overflow-hidden' : 'opacity-100 ml-4'
              }`}
          >
            <Link href="/" className="text-base font-bold tracking-tight text-primary hover:opacity-70 transition-opacity">
              md·web
            </Link>
          </div>
        </div>

        <div className={`flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-2 transition-opacity duration-300 pointer-events-auto ${isOverlay && isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {children}
        </div>

        {footer && (
          <div
            className={`h-16 shrink-0 border-t flex items-center overflow-hidden transition-all duration-300 p-3 pointer-events-auto ${isOverlay && isCollapsed ? 'border-transparent opacity-0 pointer-events-none' : 'border-outline-variant opacity-100'}`}
          >
            {footer}
          </div>
        )}
      </aside>
    </>
  );
}

