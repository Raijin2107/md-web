'use client';

import React from 'react';
import '@material/web/progress/linear-progress.js';

interface LinearProgressProps extends React.HTMLAttributes<HTMLElement> {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    fourColor?: boolean;
    buffer?: number;
}

const LinearProgress = ({
    value,
    max,
    indeterminate,
    fourColor,
    buffer,
    className = '',
    ...props
}: LinearProgressProps) => {
    const Tag = 'md-linear-progress' as any;

    return (
        <Tag
            value={value}
            max={max}
            indeterminate={indeterminate ? true : undefined}
            four-color={fourColor ? true : undefined}
            buffer={buffer}
            className={className}
            {...props}
        />
    );
};

export default LinearProgress;
