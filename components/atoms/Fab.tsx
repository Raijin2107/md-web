'use client';

import React from 'react';
import '@material/web/fab/fab.js';
import '@material/web/fab/branded-fab.js';

export type FabVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';
export type FabSize = 'small' | 'medium' | 'large';

interface FabProps {
    variant?: FabVariant;
    size?: FabSize;
    label?: string;
    lowered?: boolean;
    branded?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    id?: string;
}

/**
 * FABs (floating action buttons) help people take primary actions.
 * They're used for a screen's main action.
 */
const Fab = ({
    variant = 'surface',
    size = 'medium',
    label,
    lowered,
    branded,
    children,
    className = '',
    style,
    onClick,
    id,
}: FabProps) => {
    const Tag = (branded ? 'md-branded-fab' : 'md-fab') as React.ElementType;

    return (
        <Tag
            id={id}
            class={className || undefined}
            style={style}
            variant={variant}
            size={size === 'medium' ? undefined : size}
            label={label}
            lowered={lowered || undefined}
            onClick={onClick}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
};

export default Fab;
