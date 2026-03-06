import { notFound } from 'next/navigation';

import ButtonDemo from "@/components/demo/ButtonDemo";
import CheckboxDemo from "@/components/demo/CheckboxDemo";
import ChipDemo from "@/components/demo/ChipDemo";
import DialogDemo from "@/components/demo/DialogDemo";
import FabDemo from "@/components/demo/FabDemo";
import IconDemo from "@/components/demo/IconDemo";
import ListDemo from "@/components/demo/ListDemo";
import ProgressDemo from "@/components/demo/ProgressDemo";
import RadioDemo from "@/components/demo/RadioDemo";
import RippleDemo from "@/components/demo/RippleDemo";
import SelectDemo from "@/components/demo/SelectDemo";
import SliderDemo from "@/components/demo/SliderDemo";
import SwitchDemo from "@/components/demo/SwitchDemo";
import TabDemo from "@/components/demo/TabDemo";
import TextFieldDemo from "@/components/demo/TextFieldDemo";

export function generateStaticParams() {
    return [
        { component: 'button' },
        { component: 'checkbox' },
        { component: 'chip' },
        { component: 'dialog' },
        { component: 'fab' },
        { component: 'icon' },
        { component: 'list' },
        { component: 'progress' },
        { component: 'radio' },
        { component: 'ripple' },
        { component: 'select' },
        { component: 'slider' },
        { component: 'switch' },
        { component: 'tab' },
        { component: 'text-field' },
    ];
}

export default async function ComponentDemoPage({ params }: { params: Promise<{ component: string }> }) {
    const { component } = await params;

    let content;
    let title;

    switch (component) {
        case 'button':
            title = 'Button';
            content = <ButtonDemo />;
            break;
        case 'checkbox':
            title = 'Checkbox';
            content = <CheckboxDemo />;
            break;
        case 'chip':
            title = 'Chip';
            content = <ChipDemo />;
            break;
        case 'dialog':
            title = 'Dialog';
            content = <DialogDemo />;
            break;
        case 'fab':
            title = 'FAB';
            content = <FabDemo />;
            break;
        case 'icon':
            title = 'Icon';
            content = <IconDemo />;
            break;
        case 'list':
            title = 'List';
            content = <ListDemo />;
            break;
        case 'progress':
            title = 'Progress';
            content = <ProgressDemo />;
            break;
        case 'radio':
            title = 'Radio';
            content = <RadioDemo />;
            break;
        case 'ripple':
            title = 'Ripple';
            content = <RippleDemo />;
            break;
        case 'select':
            title = 'Select';
            content = <SelectDemo />;
            break;
        case 'slider':
            title = 'Slider';
            content = <SliderDemo />;
            break;
        case 'switch':
            title = 'Switch';
            content = <SwitchDemo />;
            break;
        case 'tab':
            title = 'Tab';
            content = <TabDemo />;
            break;
        case 'text-field':
            title = 'Text Field';
            content = <TextFieldDemo />;
            break;
        default:
            notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center font-sans p-4 md:p-8 gap-12">
            <header className="flex flex-col items-center gap-4 w-full max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight">
                    {title} Demo
                </h1>
            </header>

            <section className="flex w-full max-w-6xl flex-col bg-surface-container shadow-sm rounded-2xl border border-outline-variant overflow-hidden">
                <div className="p-4 md:p-6 gap-4 md:p-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">Material Web Components</h2>
                        <p className="text-muted">Interactive demonstration of the md-web {title} component.</p>
                    </div>
                    <div className="my-8">
                        {content}
                    </div>
                </div>
            </section>
        </div>
    );
}
