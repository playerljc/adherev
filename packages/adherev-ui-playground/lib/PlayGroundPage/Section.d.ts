export declare const SectionPropTypes: {
    title: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    extra: {
        type: ObjectConstructor;
        default: () => null;
    };
};
declare const _default: {
    name: string;
    props: {
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
