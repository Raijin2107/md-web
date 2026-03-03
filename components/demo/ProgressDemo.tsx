'use client';

import React, { useState, useEffect } from 'react';
import CircularProgress from '@/components/atoms/CircularProgress';
import LinearProgress from '@/components/atoms/LinearProgress';
import Button from '@/components/atoms/Button';

const ProgressDemo = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = Math.round((prevProgress + 0.1) * 10) / 10;
                return nextProgress > 1 ? 0 : nextProgress;
            });
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="flex flex-col gap-8 p-8 border border-primary/10 rounded-2xl  bg-primary/3 shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Progress</h2>
            <div className="p-8 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Circular Progress</h2>
                    <div className="flex flex-wrap gap-8 items-center">
                        <div className="flex flex-col items-center gap-2">
                            <CircularProgress value={0.3} max={1} />
                            <span className="text-sm">Determinate (0.3)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <CircularProgress value={progress} max={1} />
                            <span className="text-sm">Dynamic ({progress.toFixed(1)})</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <CircularProgress indeterminate />
                            <span className="text-sm">Indeterminate</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <CircularProgress indeterminate fourColor />
                            <span className="text-sm">Four Color</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Linear Progress</h2>
                    <div className="space-y-8 max-w-2xl">
                        <div className="flex flex-col gap-2">
                            <LinearProgress value={0.5} max={1} />
                            <span className="text-sm">Determinate (0.5)</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <LinearProgress value={progress} max={1} />
                            <span className="text-sm">Dynamic ({progress.toFixed(1)})</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <LinearProgress value={progress} max={1} buffer={progress + 0.2} />
                            <span className="text-sm">With Buffer</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <LinearProgress indeterminate />
                            <span className="text-sm">Indeterminate</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <LinearProgress indeterminate fourColor />
                            <span className="text-sm">Four Color</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">In Components</h2>
                    <div className="flex gap-4">
                        <Button variant="tonal" className="flex items-center gap-2">
                            <CircularProgress
                                indeterminate
                                style={{
                                    '--md-circular-progress-size': '18px',
                                    '--md-circular-progress-active-indicator-width': '15',
                                    margin: '0 8px 0 0'
                                } as React.CSSProperties}
                            />
                            <span>Processing...</span>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProgressDemo;
