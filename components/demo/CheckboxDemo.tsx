'use client';

import React, { useState } from 'react';
import Checkbox from '@/components/atoms/Checkbox';

export default function CheckboxDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Checkbox</h2>
            <div className="flex flex-wrap gap-4 md:p-6 items-center">
                <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted uppercase font-medium">Unchecked</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted ">Default</span>
                    </label>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted uppercase font-medium">Checked</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox checked />
                        <span className="text-sm text-muted ">Pre-checked</span>
                    </label>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted uppercase font-medium">Indeterminate</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox indeterminate />
                        <span className="text-sm text-muted ">Indeterminate</span>
                    </label>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted uppercase font-medium">Disabled</span>
                    <label className="flex items-center gap-2 cursor-not-allowed">
                        <Checkbox disabled />
                        <span className="text-sm text-muted">Disabled</span>
                    </label>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted uppercase font-medium">Controlled</span>
                    <label className="flex items-center gap-2 cursor-pointer" onClick={() => setChecked(v => !v)}>
                        <Checkbox checked={checked} />
                        <span className="text-sm text-muted ">
                            {checked ? 'Checked' : 'Click me'}
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}
