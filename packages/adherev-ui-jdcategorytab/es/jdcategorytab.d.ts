import { PropType, VNode } from 'vue';
import { IMenuDataItem } from './types';
declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        menuClassName: {
            type: StringConstructor;
            default: string;
        };
        menuStyle: {
            type: StringConstructor;
            default: string;
        };
        menuInnerClassName: {
            type: StringConstructor;
            default: string;
        };
        menuInnerStyle: {
            type: StringConstructor;
            default: string;
        };
        tabClassName: {
            type: StringConstructor;
            default: string;
        };
        tabStyle: {
            type: StringConstructor;
            default: string;
        };
        menuItemClassName: {
            type: StringConstructor;
            default: string;
        };
        menuItemStyle: {
            type: StringConstructor;
            default: string;
        };
        menuData: {
            type: PropType<IMenuDataItem[]>;
            default: () => never[];
        };
        defaultActiveKey: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        onBeforeChange: {
            type: FunctionConstructor;
        };
    };
    data(): {
        activeKey: any;
        $scroll: null;
        $ease: any;
    };
    computed: {
        getMenuClassName(): string;
        getMenuInnerClassName(): string;
        getTabClassName(): string;
        getMenuItemClassName(): (curKey: string) => string;
    };
    watch: {
        defaultActiveKey(defaultActiveKey: any): void;
    };
    mounted(): void;
    provide: () => {
        getActiveKey: any;
    };
    methods: {
        initMenuScroll(): void;
        findElByKey(key: any): HTMLElement | null;
        getActiveKey(): string;
        scrollTo(key: any, time: number | undefined, easing: any): void;
        renderMenu(h: any): VNode;
    };
    render(h: any): VNode;
};
export default _default;
