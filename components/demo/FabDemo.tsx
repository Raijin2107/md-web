'use client';

import React from 'react';
import Fab from '@/components/atoms/Fab';
import Icon from '@/components/atoms/Icon';

const FabDemo = () => {
    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">FAB</h2>
            <div className="flex flex-col gap-6">
                <div>
                    <span className="text-xs text-muted uppercase font-medium block mb-3">Variants</span>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Fab variant="surface"><Icon className='h-full w-full' slot='icon'>plus</Icon></Fab>
                        <Fab variant="primary"><Icon className='h-full w-full' slot='icon'>edit</Icon></Fab>
                        <Fab variant="secondary"><Icon className='h-full w-full' slot='icon'>share</Icon></Fab>
                        <Fab variant="tertiary"><Icon className='h-full w-full' slot='icon'>delete</Icon></Fab>
                    </div>
                </div>

                <div>
                    <span className="text-xs text-muted uppercase font-medium block mb-3">Sizes</span>
                    <div className="flex flex-wrap gap-4 items-end">
                        <Fab size="small"><Icon className='h-full w-full' slot='icon'>plus</Icon></Fab>
                        <Fab size="medium"><Icon className='h-full w-full' slot='icon'>plus</Icon></Fab>
                        <Fab size="large"><Icon className='h-full w-full' slot='icon'>plus</Icon></Fab>
                    </div>
                </div>

                <div>
                    <span className="text-xs text-muted uppercase font-medium block mb-3">Extended</span>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Fab label="Create"><Icon className='me-2' slot="icon">plus</Icon></Fab>
                        <Fab variant="primary" label="Compose"><Icon className='me-2' slot="icon">edit</Icon></Fab>
                    </div>
                </div>

                <div>
                    <span className="text-xs text-muted uppercase font-medium block mb-3">Lowered & Branded</span>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Fab lowered><Icon slot='icon'>download</Icon></Fab>
                        <Fab branded><Icon slot='icon' className='h-full w-full'>download</Icon></Fab>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FabDemo;
