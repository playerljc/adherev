import { PropType, VNode } from 'vue';
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
    computed: {
        getClass(): string;
        getStyle(): string;
    };
    methods: {
        renderItems(h: any): VNode[];
    };
    render(h: any): VNode;
};
export default _default;
