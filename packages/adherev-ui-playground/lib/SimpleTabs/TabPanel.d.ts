declare const _default: {
    name: string;
    props: {
        title: {
            type: StringConstructor;
            default: string;
        };
        index: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
    };
    inject: string[];
    render(h: any): any;
};
export default _default;
