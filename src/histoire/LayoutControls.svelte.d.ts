import { SvelteComponentTyped } from "svelte";
import type { Layout } from '$lib/types';
declare const __propDef: {
    props: {
        layout?: Layout | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LayoutControlsProps = typeof __propDef.props;
export type LayoutControlsEvents = typeof __propDef.events;
export type LayoutControlsSlots = typeof __propDef.slots;
export default class LayoutControls extends SvelteComponentTyped<LayoutControlsProps, LayoutControlsEvents, LayoutControlsSlots> {
}
export {};
