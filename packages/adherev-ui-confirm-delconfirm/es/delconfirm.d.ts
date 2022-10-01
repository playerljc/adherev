import { VNode } from 'vue';
/**
 * open
 * @param success
 * @param params
 */
export declare function open({ success, ...params }: {
    [x: string]: any;
    success: any;
}): void;
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
        title: {
            type: StringConstructor;
            required: boolean;
            default: string | import("vue-i18n").default.LocaleMessages | undefined;
        };
        text: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
    };
    methods: {
        onClick(e: any): void;
    };
    render(h: any): VNode;
};
export default _default;
