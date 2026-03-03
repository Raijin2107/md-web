'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

interface IconProps {
    name?: string;
    children?: string; // To maintain compatibility with previous usage if possible, or for simple text
    className?: string;
    style?: React.CSSProperties;
    slot?: string;
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
}

const Icon = ({ name, children, className = '', style, slot, size = 24, strokeWidth = 2, color }: IconProps) => {
    // Determine the icon name: prioritizes 'name' prop, then string 'children'
    const iconName = (name || children || '').trim();

    // Convert kebab-case or snake_case to PascalCase for Lucide icons
    // Example: 'home-icon' or 'home_icon' -> 'HomeIcon'
    // Material names like 'delete_outline' -> 'Trash2' or similar? 
    // Lucide names are different, e.g., 'home' -> 'Home'
    const formattedName = iconName
        .split(/[-_ ]/)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');

    const LucideIcon = (LucideIcons as any)[formattedName] || (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;

    return (
        <span slot={slot} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }} className={className}>
            <LucideIcon
                size={size}
                strokeWidth={strokeWidth}
                color={color || 'currentColor'}
            />
        </span>
    );
};

export default Icon;
