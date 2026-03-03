'use client';

import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import '@material/web/select/filled-select.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

export type SelectVariant = 'filled' | 'outlined';

export interface SelectElement extends HTMLElement {
    value: string;
    selectedIndex: number;
    options: any[]; // Adjust if needed
    reportValidity: () => boolean;
    checkValidity: () => boolean;
}

interface SelectProps {
    variant?: SelectVariant;
    label?: string;
    value?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    errorText?: string;
    supportingText?: string;
    menuPositioning?: 'absolute' | 'fixed' | 'popover';
    clampMenuWidth?: boolean;
    menuAlign?: 'start' | 'end';
    quick?: boolean;
    noAsterisk?: boolean;
    selectedIndex?: number;
    name?: string;
    typeaheadDelay?: number;
    className?: string;
    style?: React.CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLElement>;
    onInput?: React.FormEventHandler<HTMLElement>;
    children?: React.ReactNode;
}

export const Select = forwardRef<SelectElement, SelectProps>(({
    variant = 'filled',
    label,
    value,
    disabled,
    required,
    error,
    errorText,
    supportingText,
    menuPositioning,
    clampMenuWidth,
    menuAlign,
    quick,
    noAsterisk,
    selectedIndex,
    name,
    typeaheadDelay,
    className = '',
    style,
    onChange,
    onInput,
    children,
}, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => innerRef.current as unknown as SelectElement);

    const Tag = (variant === 'outlined' ? 'md-outlined-select' : 'md-filled-select') as any;

    return (
        <Tag
            ref={innerRef}
            class={className || undefined}
            style={style}
            label={label}
            value={value}
            disabled={disabled || undefined}
            required={required || undefined}
            error={error || undefined}
            error-text={errorText}
            supporting-text={supportingText}
            menu-positioning={menuPositioning}
            clamp-menu-width={clampMenuWidth || undefined}
            menu-align={menuAlign}
            quick={quick || undefined}
            no-asterisk={noAsterisk || undefined}
            selected-index={selectedIndex}
            name={name}
            typeahead-delay={typeaheadDelay}
            onChange={onChange}
            onInput={onInput}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
});

Select.displayName = 'Select';

export interface SelectOptionElement extends HTMLElement {
    value: string;
    selected: boolean;
    disabled: boolean;
}

interface SelectOptionProps {
    value?: string;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const SelectOption = forwardRef<SelectOptionElement, SelectOptionProps>(({
    value,
    selected,
    disabled,
    className = '',
    style,
    children,
}, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => innerRef.current as unknown as SelectOptionElement);

    const Tag = 'md-select-option' as any;

    return (
        <Tag
            ref={innerRef}
            class={className || undefined}
            style={style}
            value={value}
            selected={selected || undefined}
            disabled={disabled || undefined}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
});

SelectOption.displayName = 'SelectOption';

export default Select;
