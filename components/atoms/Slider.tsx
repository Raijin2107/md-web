'use client';

import React from 'react';
import '@material/web/slider/slider.js';

interface SliderProps {
    value?: number;
    valueStart?: number;
    valueEnd?: number;
    min?: number;
    max?: number;
    step?: number;
    ticks?: boolean;
    labeled?: boolean;
    range?: boolean;
    disabled?: boolean;
    valueLabelStart?: string;
    valueLabelEnd?: string;
    className?: string;
    style?: React.CSSProperties;
    onInput?: (event: Event) => void;
    onChange?: (event: Event) => void;
    id?: string;
    'aria-label'?: string;
}

const Slider = ({
    value,
    valueStart,
    valueEnd,
    min,
    max,
    step,
    ticks,
    labeled,
    range,
    disabled,
    valueLabelStart,
    valueLabelEnd,
    className = '',
    style,
    onInput,
    onChange,
    id,
    'aria-label': ariaLabel,
}: SliderProps) => {
    const Tag = 'md-slider' as React.ElementType;

    return (
        <Tag
            id={id}
            class={className || undefined}
            style={style}
            value={value}
            value-start={valueStart}
            value-end={valueEnd}
            min={min}
            max={max}
            step={step}
            ticks={ticks || undefined}
            labeled={labeled || undefined}
            range={range || undefined}
            disabled={disabled || undefined}
            value-label-start={valueLabelStart}
            value-label-end={valueLabelEnd}
            onInput={onInput}
            onChange={onChange}
            aria-label={ariaLabel}
            suppressHydrationWarning
        />
    );
};

export default Slider;
