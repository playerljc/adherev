import { VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        min: {
            type: NumberConstructor;
        };
        max: {
            type: NumberConstructor;
        };
        step: {
            type: NumberConstructor;
        };
        defaultValue: {
            type: NumberConstructor;
            default: number;
        };
    };
    data(): {
        value: any;
    };
    watch: {
        defaultValue(value: any): void;
    };
    methods: {
        onChange(v: any): void;
    };
    render(h: any): VNode;
};
export default _default;
