'use client';

import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';

export type TextFieldVariant = 'filled' | 'outlined';

export interface TextFieldElement extends HTMLElement {
    value: string;
    reportValidity: () => boolean;
    checkValidity: () => boolean;
    stepUp: (n?: number) => void;
    stepDown: (n?: number) => void;
    focus: () => void;
    blur: () => void;
}

interface TextFieldProps {
    variant?: TextFieldVariant;
    label?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    errorText?: string;
    supportingText?: string;
    prefixText?: string;
    suffixText?: string;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
    autofocus?: boolean;
    placeholder?: string;
    min?: string | number;
    max?: string | number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    noAsterisk?: boolean;
    autocomplete?: string;
    className?: string;
    style?: React.CSSProperties;
    onChange?: React.ChangeEventHandler<HTMLElement>;
    onInput?: React.FormEventHandler<HTMLElement>;
    onClick?: React.MouseEventHandler<HTMLElement>;
    id?: string;
    name?: string;
    children?: React.ReactNode;
}

const TextField = forwardRef<TextFieldElement, TextFieldProps>(({
    variant = 'filled',
    label,
    value,
    type,
    disabled,
    required,
    error,
    errorText,
    supportingText,
    prefixText,
    suffixText,
    hasStartIcon,
    hasEndIcon,
    autofocus,
    placeholder,
    min,
    max,
    minLength,
    maxLength,
    pattern,
    noAsterisk,
    autocomplete,
    className = '',
    style,
    onChange,
    onInput,
    onClick,
    id,
    name,
    children,
}, ref) => {
    const innerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => innerRef.current as unknown as TextFieldElement);

    const Tag = (variant === 'outlined' ? 'md-outlined-text-field' : 'md-filled-text-field') as any;

    return (
        <Tag
            ref={innerRef}
            id={id}
            name={name}
            class={className || undefined}
            style={style}
            label={label}
            value={value}
            type={type || 'text'}
            disabled={disabled || undefined}
            required={required || undefined}
            error={error || undefined}
            error-text={errorText}
            supporting-text={supportingText}
            prefix-text={prefixText}
            suffix-text={suffixText}
            has-start-icon={hasStartIcon || (children ? true : undefined)}
            has-end-icon={hasEndIcon || undefined}
            autofocus={autofocus || undefined}
            placeholder={placeholder}
            min={min}
            max={max}
            minlength={minLength}
            maxlength={maxLength}
            pattern={pattern}
            no-asterisk={noAsterisk || undefined}
            autocomplete={autocomplete || ''}
            onChange={onChange}
            onInput={onInput}
            onClick={onClick}
            suppressHydrationWarning
        >
            {children}
        </Tag>
    );
});

TextField.displayName = 'TextField';

export default TextField;
