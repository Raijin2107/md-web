'use client';

import React from 'react';
import '@material/web/radio/radio.js';

interface RadioProps {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value?: string;
    touchTarget?: 'wrapper' | 'none';
    className?: string;
    style?: React.CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    id?: string;
}

const Radio = ({
    checked,
    disabled,
    name,
    value,
    touchTarget = 'wrapper',
    className = '',
    style,
    onChange,
    onClick,
    id,
}: RadioProps) => {
    const Tag = 'md-radio' as React.ElementType;
    return (
        <Tag
            id={id}
            class={className || undefined}
            style={style}
            checked={checked || undefined}
            disabled={disabled || undefined}
            name={name}
            value={value}
            touch-target={touchTarget}
            onChange={onChange}
            onClick={onClick}
            suppressHydrationWarning
        />
    );
};

export default Radio;
