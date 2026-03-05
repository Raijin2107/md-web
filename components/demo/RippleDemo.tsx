'use client';

import React from 'react';
import Ripple from '@/components/atoms/Ripple';

const RippleDemo = () => {
    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Ripple</h2>
            <div className="p-8 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Ripple on Custom Surfaces</h2>
                    <div className="flex flex-wrap gap-8">
                        {/* Standard Box with Ripple */}
                        <div className="relative w-32 h-32 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden border border-outline-variant dark:border-outline-variant group">
                            <Ripple />
                            <span className="text-sm font-medium">Click me</span>
                        </div>

                        {/* Colored Surface with Ripple */}
                        <div className="relative w-48 h-32 bg-indigo-600 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden shadow-md active:shadow-sm transition-shadow">
                            <Ripple />
                            <span className="text-sm font-bold uppercase tracking-wider">Indigo Surface</span>
                        </div>

                        {/* Outlined Surface with Ripple */}
                        <div className="relative w-48 h-32 border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center cursor-pointer overflow-hidden hover:bg-primary/8 transition-colors">
                            <Ripple />
                            <span className="text-sm italic">Dashed Border</span>
                        </div>

                        {/* Disabled Surface with Ripple */}
                        <div className="relative w-32 h-32  bg-surface-container rounded-xl flex items-center justify-center cursor-not-allowed overflow-hidden border   opacity-50">
                            <Ripple disabled />
                            <span className="text-xs">Disabled Ripple</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Card with Ripple</h2>
                    <div className="max-w-xs relative bg-surface-container border border-outline-variant  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <Ripple />
                        <div className="h-32 bg-linear-to-br from-indigo-500 to-purple-600" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">Material Card</h3>
                            <p className="text-sm text-muted  mt-1">
                                This entire card is a touch target with a ripple effect.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="p-6 rounded-2xl border border-outline-variant dark:border-outline-variant">
                    <h3 className="text-lg font-bold mb-2">Usage Note</h3>
                    <p className="text-sm text-muted">
                        The Ripple component should be placed inside a container with <code>position: relative</code> and <code>overflow: hidden</code>. It will automatically expand to fill its nearest relative parent.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RippleDemo;
