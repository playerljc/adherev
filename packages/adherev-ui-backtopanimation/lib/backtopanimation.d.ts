import { VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: any;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
    };
    data(): {
        $maskEl: null;
        $scrollEl: null;
        $key: boolean;
    };
    mounted(): void;
    beforeDestroy(): void;
    methods: {
        trigger(): void;
        initScrollEvent(): void;
        renderMask(): void;
    };
    render(h: any): VNode;
};
export default _default;
