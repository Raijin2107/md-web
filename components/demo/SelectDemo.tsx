'use client';

import React, { useState } from 'react';
import Select, { SelectOption } from '@/components/atoms/Select';
import Icon from '@/components/atoms/Icon';

const SelectDemo = () => {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [selectedVegetable, setSelectedVegetable] = useState('');

    return (
        <div className="flex flex-col gap-8 p-8 border border-primary/10 rounded-2xl  bg-primary/3 shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Select</h2>

            <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Filled Select */}
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-zinc-400 font-bold tracking-widest block mb-1">Filled Select</span>
                        <Select
                            label="Favorite Fruit"
                            value={selectedFruit}
                            onChange={(e: any) => setSelectedFruit(e.target.value)}
                            className="w-full"
                        >
                            <SelectOption value="apple">
                                <div slot="headline">Apple</div>
                            </SelectOption>
                            <SelectOption value="banana">
                                <div slot="headline">Banana</div>
                            </SelectOption>
                            <SelectOption value="cucumber">
                                <div slot="headline">Cucumber</div>
                            </SelectOption>
                            <SelectOption value="dragonfruit">
                                <div slot="headline">Dragonfruit</div>
                            </SelectOption>
                        </Select>
                        <div className="text-sm text-muted">Selected: <span className="font-bold text-primary">{selectedFruit}</span></div>
                    </div>

                    {/* Outlined Select */}
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-zinc-400 font-bold tracking-widest block mb-1">Outlined Select</span>
                        <Select
                            variant="outlined"
                            label="Pick a Vegetable"
                            value={selectedVegetable}
                            onChange={(e: any) => setSelectedVegetable(e.target.value)}
                            className="w-full"
                            required
                            supportingText="* Required field"
                        >
                            <SelectOption value="">
                                <div slot="headline">None</div>
                            </SelectOption>
                            <SelectOption value="carrot">
                                <div slot="headline">Carrot</div>
                            </SelectOption>
                            <SelectOption value="potato">
                                <div slot="headline">Potato</div>
                            </SelectOption>
                            <SelectOption value="onion">
                                <div slot="headline">Onion</div>
                            </SelectOption>
                        </Select>
                    </div>
                </div>

                {/* Advanced Select */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-zinc-400 font-bold tracking-widest block mb-1">Rich Options & Icons</span>
                        <Select
                            label="Select with Icons"
                            className="w-full"
                            quick
                        >
                            <SelectOption value="home">
                                <Icon slot="start">Home</Icon>
                                <div slot="headline">Home Address</div>
                                <div slot="supporting-text">Primary residence</div>
                            </SelectOption>
                            <SelectOption value="work">
                                <Icon slot="start">Briefcase</Icon>
                                <div slot="headline">Work Address</div>
                                <div slot="supporting-text">Office location</div>
                            </SelectOption>
                            <SelectOption value="other" disabled>
                                <Icon slot="start">MapPin</Icon>
                                <div slot="headline">Other</div>
                            </SelectOption>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectDemo;
