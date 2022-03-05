import { VNode } from 'vue';
export declare const selectorPrefix = "adherev-ui-flexlayout";
declare const _default: {
    name: string;
    props: {
        direction: {
            type: StringConstructor;
            default: string;
            validator(val: any): boolean;
        };
    };
    methods: {
        getDirection(): string;
    };
    provide(): {
        getDirection: any;
    };
    render(h: any): VNode;
};
export default _default;
