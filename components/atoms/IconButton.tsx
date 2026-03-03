'use client';

import React from 'react';
import '@material/web/iconbutton/icon-button.js';

interface IconButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    href?: string;
    target?: string;
    ariaLabel?: string;
    value?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    form?: string;
    slot?: string;
}

const IconButton = ({
    children,
    disabled,
    href,
    target,
    ariaLabel,
    value,
    type,
    className = '',
    style,
    onClick,
    form,
    slot,
}: IconButtonProps) => {
    const Tag = 'md-icon-button' as any;
    return (
        <Tag
            class={className || undefined}
            style={style}
            disabled={disabled || undefined}
            href={href}
            target={target}
            aria-label={ariaLabel}
            value={value}
            type={type}
            onClick={onClick}
            form={form}
            slot={slot}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
};

export default IconButton;
