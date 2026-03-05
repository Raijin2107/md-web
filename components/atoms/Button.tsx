'use client';

import React, { useRef, useEffect } from 'react';

// Import Material Web button components to register them as custom elements
// This needs to happen on the client side
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';

export type ButtonVariant = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    href?: string;
    target?: string;
}

const Button = ({
    variant = 'filled',
    children,
    className = '',
    disabled,
    onClick,
    href,
    target,
    autoFocus,
    form: formProp,
    ...props
}: ButtonProps) => {
    const innerRef = useRef<HTMLElement>(null);

    // Map variant to the corresponding custom element tag
    const Tag = (() => {
        switch (variant) {
            case 'elevated':
                return 'md-elevated-button';
            case 'tonal':
                return 'md-filled-tonal-button';
            case 'outlined':
                return 'md-outlined-button';
            case 'text':
                return 'md-text-button';
            case 'filled':
            default:
                return 'md-filled-button';
        }
    })() as React.ElementType;

    // Fix for React 19: 'form' is a read-only property in custom elements (getter only)
    // React 19 tries to set it as a property, which fails.
    // We must set it as an attribute manually.
    useEffect(() => {
        if (innerRef.current) {
            if (formProp) {
                innerRef.current.setAttribute('form', formProp);
            } else {
                innerRef.current.removeAttribute('form');
            }
        }
    }, [formProp]);

    // Added base classes like transition and cursor
    const baseClasses = 'p-2.5 transition-all duration-200 cursor-pointer';

    return (
        <Tag
            ref={innerRef}
            className={`${baseClasses} ${className}`.trim()}
            style={{ ...props.style } as React.CSSProperties}
            disabled={disabled || undefined}
            onClick={onClick}
            href={href}
            target={target}
            autofocus={autoFocus || undefined}
            {...props}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
};

export default Button;
