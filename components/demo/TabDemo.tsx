'use client';

import React, { useState } from 'react';
import { Tabs, Tab } from '@/components/atoms/Tabs';
import Icon from '@/components/atoms/Icon';
import IconButton from '@/components/atoms/IconButton';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className='my-4'>
        <h3 className="text-sm uppercase font-medium block mb-3">{title}</h3>
        {children}
    </div>
);

export default function TabDemo() {
    const [activeTab1, setActiveTab1] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);
    const [activeTab4, setActiveTab4] = useState(0);
    const [nestedPrimary, setNestedPrimary] = useState(0);
    const [nestedMovies, setNestedMovies] = useState(0);
    const [nestedPhotos, setNestedPhotos] = useState(0);
    const [nestedMusic, setNestedMusic] = useState(0);
    const [dynamicTabs, setDynamicTabs] = useState(['Tab 1', 'Tab 2', 'Tab 3']);
    const [activeDynamic, setActiveDynamic] = useState(0);

    const handleAddTab = () => {
        setDynamicTabs([...dynamicTabs, `Tab ${dynamicTabs.length + 1}`]);
    };

    const handleRemoveTab = () => {
        if (dynamicTabs.length > 0) {
            const newList = [...dynamicTabs];
            newList.pop();
            setDynamicTabs(newList);
            if (activeDynamic >= newList.length) {
                setActiveDynamic(Math.max(0, newList.length - 1));
            }
        }
    };

    const handleMoveStart = () => {
        if (activeDynamic > 0) {
            const newList = [...dynamicTabs];
            const item = newList.splice(activeDynamic, 1)[0];
            newList.splice(activeDynamic - 1, 0, item);
            setDynamicTabs(newList);
            setActiveDynamic(activeDynamic - 1);
        }
    };

    const handleMoveEnd = () => {
        if (activeDynamic < dynamicTabs.length - 1) {
            const newList = [...dynamicTabs];
            const item = newList.splice(activeDynamic, 1)[0];
            newList.splice(activeDynamic + 1, 0, item);
            setDynamicTabs(newList);
            setActiveDynamic(activeDynamic + 1);
        }
    };

    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl  bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold   border-b pb-4">Tab</h2>
            <div className="flex flex-col gap-6">

                {/* Primary */}
                <Section title="Primary Tabs">
                    <Tabs activeTabIndex={activeTab1} onTabChange={setActiveTab1}>
                        <Tab variant="primary" active={activeTab1 === 0}>
                            <Icon slot="icon">piano</Icon>
                            Keyboard
                        </Tab>
                        <Tab variant="primary" active={activeTab1 === 1}>
                            <Icon slot="icon">Guitar</Icon>
                            Guitar
                        </Tab>
                        <Tab variant="primary" active={activeTab1 === 2}>
                            <Icon slot="icon">Guitar</Icon>
                            Drums
                        </Tab>
                    </Tabs>
                    <div className="p-4   rounded-lg text-on-surface-variant ">
                        {activeTab1 === 0 && <p>Keyboard Content: 88 weighted keys, MIDI supported.</p>}
                        {activeTab1 === 1 && <p>Guitar Content: 6 strings, electric and acoustic models.</p>}
                        {activeTab1 === 2 && <p>Drums Content: Standard 5-piece kit with crash and ride cymbals.</p>}
                    </div>
                </Section>

                {/* Secondary */}
                <Section title="Secondary Tabs">
                    <Tabs activeTabIndex={activeTab2} onTabChange={setActiveTab2}>
                        <Tab variant="secondary" active={activeTab2 === 0}>Travel</Tab>
                        <Tab variant="secondary" active={activeTab2 === 1}>Hotel</Tab>
                        <Tab variant="secondary" active={activeTab2 === 2}>Activities</Tab>
                        <Tab variant="secondary" active={activeTab2 === 3}>Food</Tab>
                    </Tabs>
                    <div className="p-4   rounded-lg text-on-surface-variant ">
                        {activeTab2 === 0 && <p>Explore the world with our curated travel guides.</p>}
                        {activeTab2 === 1 && <p>Find the best accommodation for your stay.</p>}
                        {activeTab2 === 2 && <p>Discover local activities and hidden gems.</p>}
                        {activeTab2 === 3 && <p>Savor the local flavors and high-end dining.</p>}
                    </div>
                </Section>

                {/* Inline Icons */}
                <Section title="Inline Icons">
                    <Tabs activeTabIndex={activeTab3} onTabChange={setActiveTab3}>
                        <Tab variant="primary" inlineIcon active={activeTab3 === 0}>
                            <Icon slot="icon">Plane</Icon>
                            Flights
                        </Tab>
                        <Tab variant="primary" inlineIcon active={activeTab3 === 1}>
                            <Icon slot="icon">hotel</Icon>
                            Hotels
                        </Tab>
                        <Tab variant="primary" inlineIcon active={activeTab3 === 2}>
                            <Icon slot="icon">Utensils</Icon>
                            Dining
                        </Tab>
                    </Tabs>
                </Section>

                {/* Scrolling Tabs */}
                <Section title="Scrolling Tabs">
                    <div className="rounded-xl overflow-hidden bg-surface-containerest">
                        <Tabs activeTabIndex={activeTab2} onTabChange={setActiveTab2}>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 0}>Tab 1</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 1}>Tab 2</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 2}>Tab 3</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 3}>Tab 4</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 4}>Tab 5</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 5}>Tab 6</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 6}>Tab 7</Tab>
                            <Tab variant="primary" className='min-w-40' active={activeTab2 === 7}>Tab 8</Tab>
                        </Tabs>
                    </div>
                    <p className="text-xs text-muted italic">Tabs will scroll horizontally when they exceed the container width.</p>
                </Section>

                {/* Custom Styled Tabs */}
                <Section title="Custom Styled Tabs">
                    <div className="custom-tabs-container">
                        <style jsx global>{`
                        .custom-tabs md-tabs {
                             --md-sys-color-primary: var(--md-sys-color-tertiary, #7d5260);
                        }
                        .custom-tabs md-primary-tab {
                            --md-primary-tab-label-text-font: cursive, system-ui;
                            --md-primary-tab-label-text-size: 0.9em;
                            --md-primary-tab-active-indicator-height: 8px;
                            --md-primary-tab-active-indicator-shape: 9999px 9999px 0 0;
                        }
                    `}</style>
                        <div className="custom-tabs">
                            <Tabs activeTabIndex={activeTab4} onTabChange={setActiveTab4}>
                                <Tab variant="primary" active={activeTab4 === 0}>
                                    <Icon slot="icon">Map</Icon>
                                    Travel
                                </Tab>
                                <Tab variant="primary" active={activeTab4 === 1}>
                                    <Icon slot="icon">hotel</Icon>
                                    Hotel
                                </Tab>
                                <Tab variant="primary" active={activeTab4 === 2}>
                                    <Icon slot="icon">Activity</Icon>
                                    Activities
                                </Tab>
                                <Tab variant="primary" active={activeTab4 === 3}>
                                    <Icon slot="icon">Hamburger</Icon>
                                    Food
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </Section>

                {/* Nested Primary and Secondary Tabs */}
                <Section title="Primary and Secondary Tabs (Nested)">
                    <Tabs activeTabIndex={nestedPrimary} onTabChange={setNestedPrimary}>
                        <Tab variant="primary" active={nestedPrimary === 0}>
                            <Icon slot="icon">Film</Icon>
                            Movies
                        </Tab>
                        <Tab variant="primary" active={nestedPrimary === 1}>
                            <Icon slot="icon">Image</Icon>
                            Photos
                        </Tab>
                        <Tab variant="primary" active={nestedPrimary === 2}>
                            <Icon slot="icon">Music</Icon>
                            Music
                        </Tab>
                    </Tabs>

                    <div className="mt-4">
                        {nestedPrimary === 0 && (
                            <div className="flex flex-col gap-4">
                                <Tabs activeTabIndex={nestedMovies} onTabChange={setNestedMovies}>
                                    <Tab variant="secondary" active={nestedMovies === 0}>Star Wars</Tab>
                                    <Tab variant="secondary" active={nestedMovies === 1}>Avengers</Tab>
                                    <Tab variant="secondary" active={nestedMovies === 2}>Jaws</Tab>
                                    <Tab variant="secondary" active={nestedMovies === 3}>Frozen</Tab>
                                </Tabs>
                                <div className="p-4   rounded-lg italic">
                                    {nestedMovies === 0 && <p>"May the Force be with you."</p>}
                                    {nestedMovies === 1 && <p>"Avengers, assemble!"</p>}
                                    {nestedMovies === 2 && <p>"You're gonna need a bigger boat."</p>}
                                    {nestedMovies === 3 && <p>"Let it go!"</p>}
                                </div>
                            </div>
                        )}
                        {nestedPrimary === 1 && (
                            <div className="flex flex-col gap-4">
                                <Tabs activeTabIndex={nestedPhotos} onTabChange={setNestedPhotos}>
                                    <Tab variant="secondary" active={nestedPhotos === 0}>Yosemite</Tab>
                                    <Tab variant="secondary" active={nestedPhotos === 1}>Mona Lisa</Tab>
                                    <Tab variant="secondary" active={nestedPhotos === 2}>Swiss Alps</Tab>
                                    <Tab variant="secondary" active={nestedPhotos === 3}>Niagara Falls</Tab>
                                </Tabs>
                            </div>
                        )}
                        {nestedPrimary === 2 && (
                            <div className="flex flex-col gap-4">
                                <Tabs activeTabIndex={nestedMusic} onTabChange={setNestedMusic}>
                                    <Tab variant="secondary" active={nestedMusic === 0}>Rock</Tab>
                                    <Tab variant="secondary" active={nestedMusic === 1}>Ambient</Tab>
                                    <Tab variant="secondary" active={nestedMusic === 2}>Soundscapes</Tab>
                                    <Tab variant="secondary" active={nestedMusic === 3}>White Noise</Tab>
                                </Tabs>
                            </div>
                        )}
                    </div>
                </Section>

                {/* Dynamic Tabs */}
                <Section title="Dynamic Tabs">
                    <div className="flex gap-2 mb-4">
                        <IconButton onClick={handleAddTab}><Icon>plus</Icon></IconButton>
                        <IconButton onClick={handleRemoveTab}><Icon>minus</Icon></IconButton>
                        <IconButton onClick={handleMoveStart}><Icon>chevron_left</Icon></IconButton>
                        <IconButton onClick={handleMoveEnd}><Icon>chevron_right</Icon></IconButton>
                    </div>
                    <div>
                        <Tabs activeTabIndex={activeDynamic} onTabChange={setActiveDynamic}>
                            {dynamicTabs.map((label, i) => (
                                <Tab key={label + i} variant="primary" active={activeDynamic === i}>
                                    {label}
                                </Tab>
                            ))}
                        </Tabs>
                    </div>
                    <div className="mt-4 p-4 text-center text-muted text-sm">
                        Currently selected: {dynamicTabs[activeDynamic] || 'None'}
                    </div>
                </Section>
            </div>
        </div>
    );
}
