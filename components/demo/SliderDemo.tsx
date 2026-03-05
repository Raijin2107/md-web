'use client';

import React, { useState } from 'react';
import Slider from '@/components/atoms/Slider';

const SliderDemo = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [rangeStart, setRangeStart] = useState(30);
    const [rangeEnd, setRangeEnd] = useState(70);

    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Slider & Switch</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Sliders */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Continuous Slider</span>
                        <Slider
                            value={sliderValue}
                            onInput={(e: any) => setSliderValue(e.target.value)}
                            aria-label="Continuous slider"
                        />
                        <div className="text-sm text-muted">Value: <span className="font-bold text-primary">{sliderValue}</span></div>
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Labeled with Ticks</span>
                        <Slider
                            labeled
                            ticks
                            step={10}
                            min={0}
                            max={100}
                            value={20}
                            aria-label="Labeled slider with ticks"
                        />
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs uppercase text-outline font-bold tracking-widest block mb-1">Range Slider</span>
                        <Slider
                            range
                            labeled
                            valueStart={rangeStart}
                            valueEnd={rangeEnd}
                            onInput={(e: any) => {
                                setRangeStart(e.target.valueStart);
                                setRangeEnd(e.target.valueEnd);
                            }}
                            aria-label="Range slider"
                        />
                        <div className="text-sm text-muted">
                            Range: <span className="font-bold text-primary">{rangeStart} - {rangeEnd}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderDemo;
