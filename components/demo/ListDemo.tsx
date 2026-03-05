'use client';

import { List, ListItem } from '@/components/atoms/List';
import Icon from '@/components/atoms/Icon';

const ListDemo = () => {
    return (
        <div className="flex flex-col gap-8 p-8 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
            <h2 className="text-xl font-semibold  border-b pb-4">List</h2>
            <div className="bg-surface-container rounded-lg overflow-hidden border">
                <List className='bg-background/90'>
                    <ListItem headline="Photos" supportingText="Jan 9, 2024" overline="Media">
                        <Icon slot="start">Image</Icon>
                    </ListItem>
                    <ListItem headline="Recipes" supportingText="Jan 17, 2024" overline="Food">
                        <Icon slot="start">Utensils</Icon>
                    </ListItem>
                    <hr className="border-outline-variant" />
                    <ListItem
                        headline="Settings"
                        overline="System"
                        supportingText="Manage your preferences"
                        trailingSupportingText="v1.0"
                    >
                        <Icon slot="start">Settings</Icon>
                        <Icon slot="end">ChevronRight</Icon>
                    </ListItem>
                    <ListItem
                        headline="Disabled Item"
                        supportingText="This item cannot be clicked"
                        disabled
                        overline="Status"
                    >
                        <Icon slot="start">Off</Icon>
                    </ListItem>
                    <ListItem
                        headline="New Message"
                        supportingText="You have a new mail"
                        trailingSupportingText="Just now"
                    >
                        <Icon slot="start">Mail</Icon>
                        <Icon slot="end">Bell</Icon>
                    </ListItem>
                    <ListItem
                        headline="Server Status"
                        supportingText="All systems operational"
                        trailingSupportingText="Online"
                    >
                        <Icon slot="start">Server</Icon>
                        <Icon slot="end">CheckCircle</Icon>
                    </ListItem>
                </List>
            </div>
        </div>
    );
};

export default ListDemo;
