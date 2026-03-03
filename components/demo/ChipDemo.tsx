'use client';

import React from 'react';
import Chip, { ChipSet } from "@/components/atoms/Chip";

const ChipDemo = () => {
    return (
        <div className="flex flex-col gap-8 p-8 border border-primary/10 rounded-2xl  bg-primary/3 shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Select</h2>
            <ChipSet>
                <Chip variant="assist" label="Assist" />
                <Chip variant="filter" label="Filter" />
                <Chip variant="input" label="Input" />
                <Chip variant="suggestion" label="Suggestion" />
            </ChipSet>
        </div>
    );
};

export default ChipDemo;
