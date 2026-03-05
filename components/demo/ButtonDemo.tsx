'use client';

import React from 'react';
import Button from "@/components/atoms/Button";

const ButtonDemo = () => {
    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Tab</h2>
            <div className="flex flex-wrap gap-3 items-center">
                <Button variant="elevated">Elevated</Button>
                <Button variant="filled">Filled</Button>
                <Button variant="tonal">Tonal</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
            </div>
        </div>
    );
};

export default ButtonDemo;
