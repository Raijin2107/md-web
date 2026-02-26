'use client';

import React from 'react';

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
    ...props
}: ButtonProps) => {
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

    // Added base classes like transition and cursor
    const baseClasses = 'p-4 transition-all duration-200 cursor-pointer';

    // Default Material Design variables for better spacing
    // We can override these in the style prop if needed
    // const defaultStyle = {
    //     '--md-filled-button-container-height': '48px',
    //     '--md-filled-tonal-button-container-height': '48px',
    //     '--md-outlined-button-container-height': '48px',
    //     '--md-elevated-button-container-height': '48px',
    //     '--md-text-button-container-height': '48px',
    // };

    return (
        <Tag
            className={`${baseClasses} ${className}`.trim()}
            style={{ ...props.style } as React.CSSProperties}
            disabled={disabled}
            onClick={onClick}
            href={href}
            target={target}
            {...props}
        >
            {children}
        </Tag>
    );
};

export default Button;
