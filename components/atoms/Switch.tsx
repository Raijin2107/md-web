'use client';

import React from 'react';
import '@material/web/switch/switch.js';

interface SwitchProps {
    selected?: boolean;
    disabled?: boolean;
    icons?: boolean;
    showOnlySelectedIcon?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (event: Event) => void;
    id?: string;
    'aria-label'?: string;
    children?: React.ReactNode;
}

const Switch = ({
    selected,
    disabled,
    icons,
    showOnlySelectedIcon,
    className = '',
    style,
    onChange,
    id,
    'aria-label': ariaLabel,
    children,
}: SwitchProps) => {
    const Tag = 'md-switch' as React.ElementType;

    return (
        <Tag
            id={id}
            class={className || undefined}
            style={style}
            selected={selected || undefined}
            disabled={disabled || undefined}
            icons={icons || undefined}
            show-only-selected-icon={showOnlySelectedIcon || undefined}
            onChange={onChange}
            aria-label={ariaLabel}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
};

export default Switch;
