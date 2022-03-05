import { VNode } from 'vue';
export declare function open(success: any, zIndex: any): void;
declare const _default: {
    name: string;
    props: {
        zIndex: {
            type: NumberConstructor;
            required: boolean;
            default: any;
        };
        success: {
            type: FunctionConstructor;
            required: boolean;
            default: () => void;
        };
    };
    methods: {
        onClick(e: any): void;
    };
    render(h: any): VNode;
};
export default _default;
