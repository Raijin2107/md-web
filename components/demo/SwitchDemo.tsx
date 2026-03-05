'use client';

import React, { useState } from 'react';
import Switch from '@/components/atoms/Switch';
import Icon from '@/components/atoms/Icon';

const SwitchDemo = () => {
    const [switchSelected, setSwitchSelected] = useState(true);

    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Switch Variants</h2>

            <div className="space-y-10">
                <div className="space-y-6">
                    <label className="flex items-center justify-between p-3 rounded-xl border   hover:bg-primary/8  transition-colors cursor-pointer">
                        <span className="font-medium text-muted ">Default Switch</span>
                        <Switch
                            selected={switchSelected}
                            onChange={(e: any) => setSwitchSelected(e.target.selected)}
                        />
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl border   hover:bg-primary/8  transition-colors cursor-pointer">
                        <span className="font-medium text-muted ">With Icons</span>
                        <Switch icons selected />
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl border   hover:bg-primary/8  transition-colors cursor-pointer">
                        <span className="font-medium text-muted ">Custom Lucide Icons</span>
                        <Switch icons selected>
                            <Icon slot="on-icon" size="14">moon</Icon>
                            <Icon slot="off-icon" size="14">sun</Icon>
                        </Switch>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl border   opacity-50 cursor-not-allowed">
                        <span className="font-medium text-muted ">Disabled</span>
                        <Switch disabled />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SwitchDemo;
