export declare const FunctionPropsPropTypes: {
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    headerClassName: {
        type: StringConstructor;
        default: string;
    };
    headerStyle: {
        type: StringConstructor;
        default: string;
    };
    bodyClassName: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: (StringConstructor | ObjectConstructor)[];
        default: string;
    };
    extra: {
        type: ObjectConstructor;
        default: () => null;
    };
    defaultCollapse: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    border: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    scrollY: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    fixedHeaderScrollBody: {
        type: BooleanConstructor;
        default: () => boolean;
    };
};
declare const FunctionProps: any;
export default FunctionProps;
