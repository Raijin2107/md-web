'use client';

import React from 'react';
import '@material/web/progress/circular-progress.js';

interface CircularProgressProps extends React.HTMLAttributes<HTMLElement> {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    fourColor?: boolean;
}

const CircularProgress = ({
    value,
    max,
    indeterminate,
    fourColor,
    className = '',
    ...props
}: CircularProgressProps) => {
    const Tag = 'md-circular-progress' as any;

    return (
        <Tag
            value={value}
            max={max}
            indeterminate={indeterminate ? true : undefined}
            four-color={fourColor ? true : undefined}
            className={className}
            {...props}
        />
    );
};

export default CircularProgress;
