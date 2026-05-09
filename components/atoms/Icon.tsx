'use client';

import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md';

export type IconName = string;

interface IconProps {
    name?: string;
    pack?: string; // e.g. "fa", "io5", "hi", "fi", "lu"
    children?: string; // To maintain compatibility with previous usage if possible, or for simple text
    className?: string;
    style?: React.CSSProperties;
    slot?: string;
    size?: number | string;
    strokeWidth?: number | string; // Kept for compatibility, though react-icons doesn't always use it
    color?: string;
}

// Map of dynamically importable react-icons packs.
// Add any new packs you want to use here!
const PACK_LOADERS: Record<string, () => Promise<unknown>> = {
    'fa': () => import('react-icons/fa'),
    'io5': () => import('react-icons/io5'),
    'hi': () => import('react-icons/hi'),
    'fi': () => import('react-icons/fi'),
    'lu': () => import('react-icons/lu'),
    'bs': () => import('react-icons/bs'),
    'ri': () => import('react-icons/ri'),
    'tb': () => import('react-icons/tb'),
};

const Icon = ({ name, pack, children, className = '', style, slot, size = 24, color }: IconProps) => {
    // Determine the icon name: prioritizes 'name' prop, then string 'children'
    const iconName = (name || children || '').trim();

    // Convert kebab-case or snake_case to PascalCase, but preserve existing PascalCase/camelCase
    const hasSeparators = /[-_ ]/.test(iconName);
    const formattedName = hasSeparators
        ? iconName
            .split(/[-_ ]/)
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('')
        : iconName.charAt(0).toUpperCase() + iconName.slice(1);

    const [DynamicIcon, setDynamicIcon] = useState<React.ElementType | null>(null);

    useEffect(() => {
        if (!pack || pack.toLowerCase() === 'md') return;

        let isMounted = true;
        const loadPack = async () => {
            try {
                const loader = PACK_LOADERS[pack.toLowerCase()];
                if (!loader) {
                    console.warn(`Icon pack '${pack}' is not currently configured for dynamic import. Add it to PACK_LOADERS in Icon.tsx.`);
                    return;
                }

                const mod = (await loader()) as Record<string, React.ElementType>;

                if (isMounted && mod) {
                    // Try to find the exact name, or try appending the prefix if missing
                    const icon = mod[formattedName] || mod[`${pack.charAt(0).toUpperCase()}${pack.slice(1).toLowerCase()}${formattedName}`];
                    if (icon) {
                        setDynamicIcon(() => icon);
                    } else {
                        console.warn(`Icon '${formattedName}' not found in pack '${pack}'.`);
                    }
                }
            } catch (err) {
                console.error(`Failed to load icon pack: ${pack}`, err);
            }
        };

        loadPack();
        return () => { isMounted = false; };
    }, [pack, formattedName]);

    let TargetIcon: React.ElementType | null = null;

    if (pack && pack.toLowerCase() !== 'md') {
        if (DynamicIcon) {
            TargetIcon = DynamicIcon;
        } else {
            // Fallback while loading
            TargetIcon = MdIcons.MdHourglassEmpty;
        }
    } else {
        // Try to find the icon dynamically with 'Md' prefix
        const mdName = `Md${formattedName}`;
        TargetIcon = (MdIcons as Record<string, React.ElementType>)[mdName] || (MdIcons as Record<string, React.ElementType>)[formattedName] || MdIcons.MdHelpOutline;
    }

    if (!TargetIcon) return null;

    return (
        <span slot={slot} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }} className={className}>
            <TargetIcon
                size={size}
                color={color || 'currentColor'}
            />
        </span>
    );
};

export default Icon;
