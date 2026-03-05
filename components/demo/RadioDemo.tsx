'use client';

import React, { useState } from 'react';
import Radio from '@/components/atoms/Radio';

const RadioDemo = () => {
    const [radioValue, setRadioValue] = useState('one');

    return (
        <div className="flex flex-col gap-6 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Radio Group</h2>
            <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-center gap-4 cursor-pointer group p-2 rounded-lg hover:bg-primary/8  transition-all">
                    <Radio
                        name="radio-group"
                        value="one"
                        checked={radioValue === 'one'}
                        onChange={() => setRadioValue('one')}
                    />
                    <span className="text-muted  group-hover:text-primary font-medium">Standard Delivery</span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer group p-2 rounded-lg hover:bg-primary/8  transition-all">
                    <Radio
                        name="radio-group"
                        value="two"
                        checked={radioValue === 'two'}
                        onChange={() => setRadioValue('two')}
                    />
                    <span className="text-muted  group-hover:text-primary font-medium">Express Shipping</span>
                </label>
                <label className="flex items-center gap-4 opacity-50 cursor-not-allowed p-2">
                    <Radio disabled name="radio-group" value="disabled" />
                    <span className="text-muted  font-medium">Overnight (Unavailable)</span>
                </label>
            </div>
            <div className="text-sm text-muted  mt-2   p-3 rounded-lg border border-dotted border-outline inline-block">
                Selected Logic: <span className="font-bold text-primary capitalize">{radioValue}</span>
            </div>
        </div>
    );
};

export default RadioDemo;
