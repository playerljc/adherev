declare const _default: {
    name: string;
    props: {
        defaultActiveKey: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): {
        activeKey: any;
    };
    watch: {
        defaultActiveKey(activeKey: any): void;
    };
    provide(): {
        getActiveKey: any;
    };
    methods: {
        getActiveKey(): any;
        renderHead(h: any): any;
        renderHeadItem(h: any, vNode: any): any;
    };
    render(h: any): any;
};
export default _default;
