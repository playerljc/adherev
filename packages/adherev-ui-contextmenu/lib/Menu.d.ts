import { VNode, PropType } from 'vue';
import { IData } from './types';
declare const _default: {
    props: {
        data: {
            type: PropType<IData[]>;
            default: () => never[];
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        styleName: {
            type: StringConstructor;
            default: string;
        };
    };
    inject: string[];
    methods: {
        mount(): void;
        renderItems(h: any): VNode[];
    };
    computed: {
        getStyle(): string;
        getClass(): string;
    };
    render(h: any): VNode;
};
export default _default;
