'use client';

import React from 'react';
import '@material/web/ripple/ripple.js';

interface RippleProps extends React.HTMLAttributes<HTMLElement> {
    disabled?: boolean;
}

const Ripple = ({
    disabled,
    className = '',
    ...props
}: RippleProps) => {
    // Using dynamic tag to bypass intrinsic element linting
    const Tag = 'md-ripple' as any;

    return (
        <Tag
            disabled={disabled || undefined}
            className={className}
            {...props}
            suppressHydrationWarning
        />
    );
};

export default Ripple;
