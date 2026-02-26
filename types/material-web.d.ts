import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'md-elevated-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
            };
            'md-filled-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
            };
            'md-filled-tonal-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
            };
            'md-outlined-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
            };
            'md-text-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                disabled?: boolean;
                href?: string;
                target?: string;
            };
        }
    }
}
