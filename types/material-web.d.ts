import * as React from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'md-elevated-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            'md-filled-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            'md-filled-tonal-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            'md-outlined-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            'md-text-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            // Checkbox
            'md-checkbox': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                checked?: boolean;
                indeterminate?: boolean;
                disabled?: boolean;
                required?: boolean;
                name?: string;
                value?: string;
                'touch-target'?: 'wrapper' | 'none';
                onChange?: React.ChangeEventHandler<HTMLInputElement>;
                class?: string;
                slot?: string;
            };

            // Chips
            'md-chip-set': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                class?: string;
                slot?: string;
            };
            'md-assist-chip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                disabled?: boolean;
                elevated?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            'md-filter-chip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                disabled?: boolean;
                elevated?: boolean;
                selected?: boolean;
                removable?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };
            'md-input-chip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                disabled?: boolean;
                elevated?: boolean;
                avatar?: boolean;
                href?: string;
                target?: string;
                onRemove?: React.MouseEventHandler<HTMLElement>;
                class?: string;
                slot?: string;
            };
            'md-suggestion-chip': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                disabled?: boolean;
                elevated?: boolean;
                href?: string;
                target?: string;
                class?: string;
                slot?: string;
            };

            // Icon
            'md-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                class?: string;
                slot?: string;
            };

            // Icon Button
            'md-icon-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
                ariaLabel?: string;
                value?: string;
                type?: 'button' | 'submit' | 'reset';
                class?: string;
                slot?: string;
            };

            // Radio
            'md-radio': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                checked?: boolean;
                disabled?: boolean;
                name?: string;
                value?: string;
                'touch-target'?: 'wrapper' | 'none';
                class?: string;
                slot?: string;
            };

            // Text Fields
            'md-filled-text-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                value?: string;
                type?: string;
                disabled?: boolean;
                required?: boolean;
                error?: boolean;
                errorText?: string;
                supportingText?: string;
                prefixText?: string;
                suffixText?: string;
                hasStartIcon?: boolean;
                hasEndIcon?: boolean;
                autofocus?: boolean;
                placeholder?: string;
                min?: string | number;
                max?: string | number;
                minlength?: number;
                maxlength?: number;
                pattern?: string;
                'no-asterisk'?: boolean;
                autocomplete?: string;
                class?: string;
                slot?: string;
            };
            'md-outlined-text-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                value?: string;
                type?: string;
                disabled?: boolean;
                required?: boolean;
                error?: boolean;
                errorText?: string;
                supportingText?: string;
                prefixText?: string;
                suffixText?: string;
                hasStartIcon?: boolean;
                hasEndIcon?: boolean;
                autofocus?: boolean;
                placeholder?: string;
                min?: string | number;
                max?: string | number;
                minlength?: number;
                maxlength?: number;
                pattern?: string;
                'no-asterisk'?: boolean;
                autocomplete?: string;
                class?: string;
                slot?: string;
            };

            // FAB
            'md-fab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                variant?: 'surface' | 'primary' | 'secondary' | 'tertiary';
                size?: 'small' | 'medium' | 'large';
                label?: string;
                lowered?: boolean;
                class?: string;
                slot?: string;
            };
            'md-branded-fab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                variant?: 'surface' | 'primary' | 'secondary' | 'tertiary';
                size?: 'small' | 'medium' | 'large';
                label?: string;
                lowered?: boolean;
                class?: string;
                slot?: string;
            };

            // List
            'md-list': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                class?: string;
                slot?: string;
            };
            'md-list-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                type?: 'text' | 'button' | 'link';
                href?: string;
                target?: string;
                'multi-line'?: boolean;
                class?: string;
                slot?: string;
            };

            // Progress Indicators
            'md-circular-progress': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                value?: number;
                max?: number;
                indeterminate?: boolean;
                'four-color'?: boolean;
                class?: string;
                slot?: string;
            };
            'md-linear-progress': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                value?: number;
                max?: number;
                indeterminate?: boolean;
                'four-color'?: boolean;
                buffer?: number;
                class?: string;
                slot?: string;
            };

            // Ripples
            'md-ripple': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                class?: string;
                slot?: string;
            };

            // Select
            'md-filled-select': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                value?: string;
                disabled?: boolean;
                required?: boolean;
                error?: boolean;
                'error-text'?: string;
                'supporting-text'?: string;
                'menu-positioning'?: 'absolute' | 'fixed' | 'popover';
                'clamp-menu-width'?: boolean;
                'menu-align'?: 'start' | 'end';
                quick?: boolean;
                'no-asterisk'?: boolean;
                'selected-index'?: number;
                name?: string;
                'typeahead-delay'?: number;
                class?: string;
                slot?: string;
            };
            'md-outlined-select': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                value?: string;
                disabled?: boolean;
                required?: boolean;
                error?: boolean;
                'error-text'?: string;
                'supporting-text'?: string;
                'menu-positioning'?: 'absolute' | 'fixed' | 'popover';
                'clamp-menu-width'?: boolean;
                'menu-align'?: 'start' | 'end';
                quick?: boolean;
                'no-asterisk'?: boolean;
                'selected-index'?: number;
                name?: string;
                'typeahead-delay'?: number;
                class?: string;
                slot?: string;
            };
            'md-select-option': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                value?: string;
                selected?: boolean;
                disabled?: boolean;
                class?: string;
                slot?: string;
            };

            // Tabs
            'md-tabs': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                activeTabIndex?: number;
                autoActivate?: boolean;
                class?: string;
                slot?: string;
            };
            'md-primary-tab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                active?: boolean;
                inlineIcon?: boolean;
                class?: string;
                slot?: string;
            };
            'md-secondary-tab': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                active?: boolean;
                class?: string;
                slot?: string;
            };

            // Dialog
            'md-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'open'?: boolean;
                'quick'?: boolean;
                'no-focus-trap'?: boolean;
                'type'?: 'alert';
                'class'?: string;
                'slot'?: string;
                'aria-label'?: string;
            };
        }
    }
}
