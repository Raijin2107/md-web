'use client';

import React, { useRef, useEffect } from 'react';
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
    const innerRef = useRef<HTMLElement>(null);

    // Fix for React 19: 'form' is a read-only property in custom elements (getter only)
    useEffect(() => {
        if (innerRef.current) {
            if (form) {
                innerRef.current.setAttribute('form', form);
            } else {
                innerRef.current.removeAttribute('form');
            }
        }
    }, [form]);

    const Tag = 'md-icon-button' as any;
    return (
        <Tag
            ref={innerRef}
            class={className || undefined}
            style={style}
            disabled={disabled || undefined}
            href={href}
            target={target}
            aria-label={ariaLabel}
            value={value}
            type={type}
            onClick={onClick}
            slot={slot}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
};

export default IconButton;
