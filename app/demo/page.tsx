'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { Tabs, Tab } from "@/components/atoms/Tabs";
import ButtonDemo from "@/components/demo/ButtonDemo";
import CheckboxDemo from "@/components/demo/CheckboxDemo";
import ChipDemo from "@/components/demo/ChipDemo";
import FabDemo from "@/components/demo/FabDemo";
import IconDemo from "@/components/demo/IconDemo";
import ListDemo from "@/components/demo/ListDemo";
import ProgressDemo from "@/components/demo/ProgressDemo";
import RippleDemo from "@/components/demo/RippleDemo";
import RadioDemo from "@/components/demo/RadioDemo";
import SelectDemo from "@/components/demo/SelectDemo";
import SliderDemo from "@/components/demo/SliderDemo";
import SwitchDemo from "@/components/demo/SwitchDemo";
import TextFieldDemo from "@/components/demo/TextFieldDemo";
import TabDemo from "@/components/demo/TabDemo";
import DialogDemo from "@/components/demo/DialogDemo";

export default function DemoPage() {
    const [activeTab, setActiveTab] = useState(0);

    const renderTabContent = (index: number) => {
        switch (index) {
            case 0:
                return (
                    <div className="flex flex-col gap-8 w-full">
                        <ButtonDemo />
                        <CheckboxDemo />
                        <TextFieldDemo />
                        <SelectDemo />
                    </div>
                );
            case 1:
                return (
                    <div className="flex flex-col gap-8 w-full">
                        <RadioDemo />
                        <SwitchDemo />
                        <SliderDemo />
                        <IconDemo />
                    </div>
                );
            case 2:
                return (
                    <div className="flex flex-col gap-8 w-full">
                        <TabDemo />
                        <ChipDemo />
                        <FabDemo />
                        <ListDemo />
                    </div>
                );
            case 3:
                return (
                    <div className="flex flex-col gap-8 w-full">
                        <ProgressDemo />
                        <RippleDemo />
                        <DialogDemo />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center font-sans p-4 md:p-8 gap-12">
            <header className="flex flex-col items-center gap-4 w-full max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight">
                    Material Web Demo
                </h1>
            </header>

            <section className="flex w-full max-w-6xl flex-col bg-surface-container shadow-sm rounded-2xl border border-outline-variant overflow-hidden">
                <Tabs
                    activeTabIndex={activeTab}
                    onTabChange={setActiveTab}
                >
                    <Tab variant="primary" active={activeTab === 0}>Buttons & Inputs</Tab>
                    <Tab variant="primary" active={activeTab === 1}>Selection Controls</Tab>
                    <Tab variant="primary" active={activeTab === 2}>Navigation & Selection</Tab>
                    <Tab variant="primary" active={activeTab === 3}>Feedback & Others</Tab>
                </Tabs>

                <div className="p-6 gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Material Web Components</h2>
                        <p className="text-muted">Tabs are positioned at the bottom using primary styling.</p>
                    </div>
                    <div className="my-4 min-h-[400px]">
                        {renderTabContent(activeTab)}
                    </div>
                </div>
            </section>

            <footer className="text-sm text-outline dark:text-muted mb-8">
                Next.js + Material Web Components Demo
            </footer>
        </div>
    );
}
