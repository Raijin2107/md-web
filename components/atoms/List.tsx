'use client';

import React from 'react';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';

interface ListProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
}

/**
 * Lists are continuous, vertical indexes of text or images.
 */
export const List = ({ children, className = '', style, id }: ListProps) => {
    const Tag = 'md-list' as React.ElementType;
    return (
        <Tag id={id} class={className || undefined} style={style} suppressHydrationWarning>
            {children}
        </Tag>
    );
};

interface ListItemProps {
    headline: string;
    supportingText?: string;
    overline?: string;
    trailingSupportingText?: string;
    disabled?: boolean;
    type?: 'text' | 'button' | 'link';
    href?: string;
    target?: string;
    multiLine?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLElement>;
    id?: string;
}

/**
 * List items are individual rows within a list.
 */
export const ListItem = ({
    headline,
    supportingText,
    overline,
    trailingSupportingText,
    disabled,
    type = 'text',
    href,
    target,
    multiLine,
    children,
    className = '',
    style,
    onClick,
    id,
}: ListItemProps) => {
    const Tag = 'md-list-item' as React.ElementType;
    return (
        <Tag
            id={id}
            class={className || undefined}
            style={style}
            disabled={disabled || undefined}
            type={type}
            href={href}
            target={target}
            multi-line={multiLine || undefined}
            onClick={onClick}
            suppressHydrationWarning
        >
            {overline && <div slot="overline">{overline}</div>}
            {headline}
            {supportingText && <div slot="supporting-text">{supportingText}</div>}
            {trailingSupportingText && <div slot="trailing-supporting-text">{trailingSupportingText}</div>}
            {children}
        </Tag>
    );
};
