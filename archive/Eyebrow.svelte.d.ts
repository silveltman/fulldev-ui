import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        text: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EyebrowProps = typeof __propDef.props;
export type EyebrowEvents = typeof __propDef.events;
export type EyebrowSlots = typeof __propDef.slots;
export default class Eyebrow extends SvelteComponentTyped<EyebrowProps, EyebrowEvents, EyebrowSlots> {
}
export {};
