import { VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        min: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        max: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        step: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        value: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        interval: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
    };
    data(): {
        $preValue: null;
    };
    methods: {
        touchEvent(e: any): void;
        renderScale(h: any): (VNode | null)[];
        onMousemove(e: any): void;
        onTouchmove(e: any): void;
    };
    mounted(): void;
    watch: {
        value(newVal: any): void;
    };
    render(h: any): VNode;
};
export default _default;
