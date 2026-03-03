'use client';

import React from 'react';

import '@material/web/checkbox/checkbox.js';

interface CheckboxProps {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    touchTarget?: 'wrapper' | 'none';
    className?: string;
    style?: React.CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    id?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}

const Checkbox = ({
    checked,
    indeterminate,
    disabled,
    required,
    name,
    value,
    touchTarget = 'wrapper',
    className = '',
    style,
    onChange,
    onClick,
    id,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
}: CheckboxProps) => {
    const Tag = 'md-checkbox' as React.ElementType;

    return (
        <Tag
            id={id}
            class={className || undefined}
            style={style}
            checked={checked || undefined}
            indeterminate={indeterminate || undefined}
            disabled={disabled || undefined}
            required={required || undefined}
            name={name}
            value={value}
            touch-target={touchTarget}
            onChange={onChange}
            onClick={onClick}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            suppressHydrationWarning
        />
    );
};

export default Checkbox;
