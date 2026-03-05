'use client';

import React from 'react';
import Icon from '@/components/atoms/Icon';
import IconButton from '@/components/atoms/IconButton';

const IconDemo = () => {
    return (
        <div className="flex flex-col gap-6 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Icon & IconButton</h2>
            <div className="flex flex-wrap gap-10 items-center mt-2">
                <div className="flex flex-col items-center gap-2">
                    <Icon className="text-primary text-4xl">Home</Icon>
                    <span className="text-xs uppercase text-muted font-bold tracking-wider">Home</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Icon className="text-4xl">Settings</Icon>
                    <span className="text-xs uppercase text-muted font-bold tracking-wider">Settings</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <IconButton ariaLabel="Favorite">
                        <Icon>Heart</Icon>
                    </IconButton>
                    <span className="text-xs uppercase text-muted font-bold tracking-wider">Favorite</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <IconButton disabled ariaLabel="Delete disabled">
                        <Icon>Trash2</Icon>
                    </IconButton>
                    <span className="text-xs uppercase text-muted font-bold tracking-wider">Disabled</span>
                </div>
            </div>
        </div>
    );
};

export default IconDemo;
