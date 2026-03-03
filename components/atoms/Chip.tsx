'use client';

import React from 'react';

import '@material/web/chips/chip-set.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/input-chip.js';
import '@material/web/chips/suggestion-chip.js';

export type ChipVariant = 'assist' | 'filter' | 'input' | 'suggestion';

interface ChipProps {
    variant?: ChipVariant;
    label: string;
    disabled?: boolean;
    elevated?: boolean;
    href?: string;
    target?: string;
    /** filter chip only */
    selected?: boolean;
    /** filter chip only */
    removable?: boolean;
    /** input chip only */
    avatar?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onRemove?: React.MouseEventHandler<HTMLElement>;
    id?: string;
    'aria-label'?: string;
}

interface ChipSetProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

/** Container that groups chips together */
export const ChipSet = ({ children, className = '', style }: ChipSetProps) => {
    const Tag = 'md-chip-set' as React.ElementType;
    return (
        <Tag class={className || undefined} style={style}>
            {children}
        </Tag>
    );
};

const Chip = ({
    variant = 'assist',
    label,
    disabled,
    elevated,
    href,
    target,
    selected,
    removable,
    avatar,
    className = '',
    style,
    onClick,
    onRemove,
    id,
    'aria-label': ariaLabel,
}: ChipProps) => {
    const Tag = (() => {
        switch (variant) {
            case 'filter': return 'md-filter-chip';
            case 'input': return 'md-input-chip';
            case 'suggestion': return 'md-suggestion-chip';
            case 'assist':
            default: return 'md-assist-chip';
        }
    })() as React.ElementType;

    return (
        <Tag
            id={id}
            label={label}
            class={className || undefined}
            style={style}
            disabled={disabled || undefined}
            elevated={elevated || undefined}
            href={href}
            target={target}
            selected={selected || undefined}
            removable={removable || undefined}
            avatar={avatar || undefined}
            onClick={onClick}
            onRemove={onRemove}
            aria-label={ariaLabel || undefined}
            suppressHydrationWarning
        />
    );
};

export default Chip;
