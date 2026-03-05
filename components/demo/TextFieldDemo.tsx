'use client';

import React, { useRef, useState } from 'react';
import TextField, { TextFieldElement } from '@/components/atoms/TextField';
import Icon from '@/components/atoms/Icon';
import IconButton from '@/components/atoms/IconButton';

const TextFieldDemo = () => {
    const [searchValue, setSearchValue] = useState('');

    // Validation refs
    const requiredRef = useRef<TextFieldElement>(null);
    const numericRef = useRef<TextFieldElement>(null);
    const lengthRef = useRef<TextFieldElement>(null);
    const patternRef = useRef<TextFieldElement>(null);
    const searchRef = useRef<TextFieldElement>(null);

    const checkValidity = (ref: React.RefObject<TextFieldElement | null>) => {
        ref.current?.reportValidity();
    };

    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Text Field Variants</h2>

            <div className="space-y-10">
                {/* Basic Variants */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Filled</span>
                        <TextField
                            variant="filled"
                            label="First Name"
                            placeholder="e.g. John"
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Outlined</span>
                        <TextField
                            variant="outlined"
                            label="Last Name"
                            placeholder="e.g. Doe"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Text Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Filled Textarea</span>
                        <TextField
                            variant="filled"
                            type="textarea"
                            label="Description"
                            supportingText="Tell us about yourself"
                            className="w-full"
                            style={{ minHeight: '100px' } as any}
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Outlined Textarea</span>
                        <TextField
                            variant="outlined"
                            type="textarea"
                            label="Comments"
                            placeholder="Your thoughts..."
                            className="w-full"
                            style={{ minHeight: '100px' } as any}
                        />
                    </div>
                </div>

                {/* Icons & Slots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Icons (Search)</span>
                        <TextField
                            ref={searchRef}
                            variant="filled"
                            label="Search"
                            placeholder="Keywords..."
                            className="w-full"
                            value={searchValue}
                            onChange={(e: any) => setSearchValue(e.target.value)}
                        >
                            <Icon slot="leading-icon">Search</Icon>
                            <IconButton
                                slot="trailing-icon"
                                ariaLabel="Clear"
                                onClick={() => {
                                    setSearchValue('');
                                    searchRef.current?.focus();
                                }}
                            >
                                <Icon>X</Icon>
                            </IconButton>
                        </TextField>
                    </div>
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Prefix/Suffix</span>
                        <TextField
                            variant="outlined"
                            label="Price"
                            prefixText="$"
                            suffixText="USD"
                            type="number"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Validation */}
                <div className="space-y-6">
                    <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Live Validation</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <TextField
                                ref={requiredRef}
                                variant="outlined"
                                label="Required"
                                required
                                supportingText="* Need this"
                                onChange={() => checkValidity(requiredRef)}
                            />
                        </div>
                        <div className="space-y-2">
                            <TextField
                                ref={numericRef}
                                variant="outlined"
                                type="number"
                                label="Numeric (1-10)"
                                min={1}
                                max={10}
                                onChange={() => checkValidity(numericRef)}
                            />
                        </div>
                        <div className="space-y-2">
                            <TextField
                                ref={lengthRef}
                                variant="outlined"
                                label="Length (3-10)"
                                minLength={3}
                                maxLength={10}
                                onChange={() => checkValidity(lengthRef)}
                            />
                        </div>
                        <div className="space-y-2">
                            <TextField
                                ref={patternRef}
                                variant="outlined"
                                label="Pattern (Letters)"
                                pattern="[a-zA-Z]+"
                                supportingText="Upper/lower only"
                                onChange={() => checkValidity(patternRef)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextFieldDemo;
