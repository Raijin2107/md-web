'use client';

import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import '@material/web/dialog/dialog.js';

/**
 * Interface for the Material Web Dialog element.
 */
export interface DialogElement extends HTMLElement {
    /**
     * Whether the dialog is open.
     */
    open: boolean;
    /**
     * The return value of the dialog, usually set by the button that closed it.
     */
    returnValue: string;
    /**
     * Opens the dialog.
     */
    show: () => void;
    /**
     * Closes the dialog.
     * @param returnValue Optional return value.
     */
    close: (returnValue?: string) => void;
}

interface DialogProps {
    /**
     * Whether the dialog is open.
     */
    open?: boolean;
    /**
     * Whether to show the dialog immediately without animation.
     */
    quick?: boolean;
    /**
     * Whether to disable the focus trap.
     */
    noFocusTrap?: boolean;
    /**
     * The type of dialog. 'alert' is the only supported specialized type.
     */
    type?: 'alert';
    /**
     * Optional class name.
     */
    className?: string;
    /**
     * Optional style object.
     */
    style?: React.CSSProperties;
    /**
     * Dialog content, typically including slots like 'icon', 'headline', 'content', and 'actions'.
     */
    children?: React.ReactNode;
    /**
     * Event fired when the dialog is closed.
     */
    onClose?: (event: Event) => void;
    /**
     * Event fired when the dialog is opened.
     */
    onOpen?: (event: Event) => void;
    /**
     * Optional position of the dialog.
     */
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    /**
     * Accessibility label.
     */
    'aria-label'?: string;
}

/**
 * React wrapper for the Material Web `md-dialog` custom element.
 */
const Dialog = forwardRef<DialogElement, DialogProps>(({
    open,
    quick,
    noFocusTrap,
    type,
    className,
    style,
    children,
    onClose,
    onOpen,
    position = 'center',
    'aria-label': ariaLabel,
}, ref) => {
    const innerRef = useRef<DialogElement>(null);
    useImperativeHandle(ref, () => innerRef.current as DialogElement);

    useEffect(() => {
        const dialog = innerRef.current;
        if (!dialog) return;

        const handleClose = (e: Event) => onClose?.(e);
        const handleOpen = (e: Event) => onOpen?.(e);

        dialog.addEventListener('close', handleClose);
        dialog.addEventListener('opened', handleOpen);

        return () => {
            dialog.removeEventListener('close', handleClose);
            dialog.removeEventListener('opened', handleOpen);
        };
    }, [onClose, onOpen]);

    const getPositionStyles = (): React.CSSProperties => {
        switch (position) {
            case 'top': return { marginTop: '2rem', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' };
            case 'bottom': return { marginTop: 'auto', marginBottom: '2rem', marginLeft: 'auto', marginRight: 'auto' };
            case 'left': return { marginLeft: '2rem', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' };
            case 'right': return { marginLeft: 'auto', marginRight: '2rem', marginTop: 'auto', marginBottom: 'auto' };
            case 'top-left': return { marginTop: '2rem', marginBottom: 'auto', marginLeft: '2rem', marginRight: 'auto' };
            case 'top-right': return { marginTop: '2rem', marginBottom: 'auto', marginLeft: 'auto', marginRight: '2rem' };
            case 'bottom-left': return { marginTop: 'auto', marginBottom: '2rem', marginLeft: '2rem', marginRight: 'auto' };
            case 'bottom-right': return { marginTop: 'auto', marginBottom: '2rem', marginLeft: 'auto', marginRight: '2rem' };
            case 'center':
            default: return { marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' };
        }
    };

    return (
        <>
            <style>{`
                md-dialog [slot="headline"],
                md-dialog [slot="content"],
                md-dialog [slot="actions"] { box-sizing: border-box; }
                md-dialog [slot="headline"] { padding: 1.5rem 1.5rem 0 1.5rem; }
                md-dialog [slot="content"] { padding: 1.5rem 1.5rem 0.5rem 1.5rem; }
                md-dialog [slot="actions"] { padding: 1rem 1.5rem 1.5rem 1.5rem; }
            `}</style>
            <md-dialog
                ref={innerRef as any}
                class={className}
                style={{ ...style, ...getPositionStyles() }}
                open={open || undefined}
                quick={quick || undefined}
                no-focus-trap={noFocusTrap || undefined}
                type={type}
                aria-label={ariaLabel}
                suppressHydrationWarning
            >
                {children}
            </md-dialog>
        </>
    );
});

Dialog.displayName = 'Dialog';

export default Dialog;
