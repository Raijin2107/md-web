'use client';

import React, { useRef } from 'react';
import Dialog, { DialogElement } from '../atoms/Dialog';
import Button from '../atoms/Button';
import IconButton from '../atoms/IconButton';
import Icon from '../atoms/Icon';
import Radio from '../atoms/Radio';
import TextField from '../atoms/TextField';

/**
 * Demo component showcasing various Material Design 3 Dialog implementations.
 */
const DialogDemo = () => {
    const standardRef = useRef<DialogElement>(null);
    const alertRef = useRef<DialogElement>(null);
    const confirmRef = useRef<DialogElement>(null);
    const chooseRef = useRef<DialogElement>(null);
    const formRef = useRef<DialogElement>(null);
    const floatingRef = useRef<DialogElement>(null);
    const posTopRef = useRef<DialogElement>(null);
    const posBottomRef = useRef<DialogElement>(null);
    const posLeftRef = useRef<DialogElement>(null);
    const posRightRef = useRef<DialogElement>(null);
    const posTopLeftRef = useRef<DialogElement>(null);
    const posTopRightRef = useRef<DialogElement>(null);
    const posBottomLeftRef = useRef<DialogElement>(null);
    const posBottomRightRef = useRef<DialogElement>(null);

    return (
        <div className="flex flex-col gap-8 p-4 md:p-8 bg-surface text-on-surface">
            <div>
                <h2 className="text-3xl font-bold mb-2">Dialog</h2>
                <p className="text-on-surface-variant">Dialogs provide important information or prompt users for decisions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Standard Dialog */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Standard</h3>
                    <p className="text-sm text-on-surface-variant mb-2">A basic dialog with a headline, supporting text, and action buttons.</p>
                    <Button onClick={() => standardRef.current?.show()}>Open Standard Dialog</Button>
                    <Dialog ref={standardRef} aria-label="A simple dialog">
                        <div slot="headline">Dialog Headline</div>
                        <form id="form-standard" slot="content" method="dialog">
                            <span>This is a standard dialog with a headline, content, and action buttons. It provides clear choices for the user.</span>
                        </form>
                        <div slot="actions">
                            <Button variant="text" form="form-standard" value="close">Close</Button>
                            <Button variant="text" form="form-standard" value="ok" autoFocus>OK</Button>
                        </div>
                    </Dialog>
                </section>

                {/* Alert Dialog */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Alert</h3>
                    <p className="text-sm text-on-surface-variant mb-2">Alerts interrupt users with urgent information or details.</p>
                    <Button variant="tonal" onClick={() => alertRef.current?.show()}>Show Alert</Button>
                    <Dialog ref={alertRef} type="alert">
                        <div slot="headline">Alert Dialog</div>
                        <form id="form-alert" slot="content" method="dialog">
                            This is a standard alert dialog. Alert dialogs interrupt users with
                            urgent information, details, or actions that require immediate attention.
                        </form>
                        <div slot="actions">
                            <Button variant="text" form="form-alert" value="ok">OK</Button>
                        </div>
                    </Dialog>
                </section>

                {/* Confirm Dialog */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Confirm</h3>
                    <p className="text-sm text-on-surface-variant mb-2">Confirmation dialogs for critical actions like deletion.</p>
                    <Button variant="outlined" onClick={() => confirmRef.current?.show()}>Delete Photo</Button>
                    <Dialog ref={confirmRef} style={{ maxWidth: '320px' }}>
                        <Icon slot="icon">Trash2</Icon>
                        <div slot="headline">Permanently delete?</div>
                        <form id="form-confirm" slot="content" method="dialog">
                            Deleting the selected photos will also remove them from all synced
                            devices. This action cannot be undone.
                        </form>
                        <div slot="actions">
                            <Button variant="text" form="form-confirm" value="delete">Delete</Button>
                            <Button variant="tonal" form="form-confirm" value="cancel" autoFocus>Cancel</Button>
                        </div>
                    </Dialog>
                </section>

                {/* Choose Dialog */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Choose</h3>
                    <p className="text-sm text-on-surface-variant mb-2">Selection dialogs allow users to pick from a list of options.</p>
                    <Button variant="outlined" onClick={() => chooseRef.current?.show()}>Choose Pet</Button>
                    <Dialog ref={chooseRef}>
                        <div slot="headline">Choose your favorite pet</div>
                        <form id="form-choose" slot="content" method="dialog" className="flex flex-col gap-2 py-2">
                            <label className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-surface-container rounded-full transition-colors">
                                <Radio name="pet" value="cats" checked />
                                <span className="text-on-surface">Cats</span>
                            </label>
                            <label className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-surface-container rounded-full transition-colors">
                                <Radio name="pet" value="dogs" />
                                <span className="text-on-surface">Dogs</span>
                            </label>
                            <label className="flex items-center gap-3 px-2 py-1 cursor-pointer hover:bg-surface-container rounded-full transition-colors">
                                <Radio name="pet" value="birds" />
                                <span className="text-on-surface">Birds</span>
                            </label>
                        </form>
                        <div slot="actions">
                            <Button variant="text" form="form-choose" value="cancel">Cancel</Button>
                            <Button variant="text" form="form-choose" value="ok" autoFocus>OK</Button>
                        </div>
                    </Dialog>
                </section>

                {/* Form Dialog */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Form</h3>
                    <p className="text-sm text-on-surface-variant mb-2">Dialogs can contain complex forms for data entry.</p>
                    <Button variant="tonal" onClick={() => formRef.current?.show()}>Create Contact</Button>
                    <Dialog ref={formRef} className="max-w-[560px] w-[calc(100vw-48px)]">
                        <span slot="headline" className="flex items-center justify-between w-full">
                            <span className="text-xl font-medium">Create new contact</span>
                            <IconButton onClick={() => formRef.current?.close('close')} ariaLabel="Close dialog">
                                <Icon>X</Icon>
                            </IconButton>
                        </span>
                        <form id="form-contact" slot="content" method="dialog" className="flex flex-col gap-4 py-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <TextField label="First Name" autofocus className="flex-1" />
                                <TextField label="Last Name" className="flex-1" />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <TextField label="Company" className="flex-1" />
                                <TextField label="Job Title" className="flex-1" />
                            </div>
                            <TextField label="Email" type="email" />
                            <TextField label="Phone" type="tel" />
                        </form>
                        <div slot="actions">
                            <Button variant="text" onClick={(e) => {
                                const form = document.getElementById('form-contact') as HTMLFormElement;
                                form?.reset();
                            }}>Reset</Button>
                            <div className="flex-1"></div>
                            <Button variant="text" form="form-contact" value="cancel">Cancel</Button>
                            <Button variant="text" form="form-contact" value="save">Save</Button>
                        </div>
                    </Dialog>
                </section>

                {/* Floating Sheet */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Floating Sheet</h3>
                    <p className="text-sm text-on-surface-variant mb-2">A sheet-like dialog that dismisses via a header close button.</p>
                    <Button variant="outlined" onClick={() => floatingRef.current?.show()}>Show Sheet</Button>
                    <Dialog ref={floatingRef}>
                        <span slot="headline" className="flex items-center justify-between w-full">
                            <span className="text-xl font-medium">Floating Sheet</span>
                            <IconButton onClick={() => floatingRef.current?.close('close')} ariaLabel="Close dialog">
                                <Icon>X</Icon>
                            </IconButton>
                        </span>
                        <form id="form-floating" slot="content" method="dialog" className="py-2 w-full">
                            This is a floating sheet implementation. Floating sheets often omit action
                            buttons at the bottom in favor of a close icon button at the top
                            right. They can contain any HTML content or structured data.
                        </form>
                    </Dialog>
                </section>

                {/* Positioning Demos */}
                <section className="flex flex-col gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container shadow-sm md:col-span-2 lg:col-span-3">
                    <h3 className="text-xl font-semibold border-b border-outline-variant pb-2">Positions</h3>
                    <p className="text-sm text-on-surface-variant mb-4">Test different dialog anchor positions.</p>
                    <div className="flex flex-wrap gap-3">
                        <Button variant="outlined" onClick={() => posTopLeftRef.current?.show()}>Top Left</Button>
                        <Button variant="outlined" onClick={() => posTopRef.current?.show()}>Top</Button>
                        <Button variant="outlined" onClick={() => posTopRightRef.current?.show()}>Top Right</Button>
                        <Button variant="outlined" onClick={() => posLeftRef.current?.show()}>Left</Button>
                        <Button variant="outlined" onClick={() => posRightRef.current?.show()}>Right</Button>
                        <Button variant="outlined" onClick={() => posBottomLeftRef.current?.show()}>Bottom Left</Button>
                        <Button variant="outlined" onClick={() => posBottomRef.current?.show()}>Bottom</Button>
                        <Button variant="outlined" onClick={() => posBottomRightRef.current?.show()}>Bottom Right</Button>
                    </div>

                    <Dialog ref={posTopLeftRef} position="top-left">
                        <div slot="headline">Top Left</div>
                        <div slot="content">Positioned at top-left.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posTopLeftRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posTopRef} position="top">
                        <div slot="headline">Top</div>
                        <div slot="content">Positioned at top.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posTopRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posTopRightRef} position="top-right">
                        <div slot="headline">Top Right</div>
                        <div slot="content">Positioned at top-right.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posTopRightRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posLeftRef} position="left">
                        <div slot="headline">Left</div>
                        <div slot="content">Positioned at left.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posLeftRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posRightRef} position="right">
                        <div slot="headline">Right</div>
                        <div slot="content">Positioned at right.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posRightRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posBottomLeftRef} position="bottom-left">
                        <div slot="headline">Bottom Left</div>
                        <div slot="content">Positioned at bottom-left.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posBottomLeftRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posBottomRef} position="bottom">
                        <div slot="headline">Bottom</div>
                        <div slot="content">Positioned at bottom.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posBottomRef.current?.close()}>Close</Button></div>
                    </Dialog>
                    <Dialog ref={posBottomRightRef} position="bottom-right">
                        <div slot="headline">Bottom Right</div>
                        <div slot="content">Positioned at bottom-right.</div>
                        <div slot="actions"><Button variant="text" onClick={() => posBottomRightRef.current?.close()}>Close</Button></div>
                    </Dialog>
                </section>
            </div>
        </div>
    );
};

export default DialogDemo;
