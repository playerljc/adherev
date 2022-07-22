declare const _default: {
    name: string;
    props: {
        config: {
            type: ArrayConstructor;
            default: () => never[];
        };
        title: {
            type: (StringConstructor | ObjectConstructor)[];
            default: string;
        };
        extra: {
            type: ObjectConstructor;
            default: () => null;
        };
    };
    render(h: any): any;
};
export default _default;
