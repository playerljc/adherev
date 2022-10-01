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
declare const _default: {
    name: string;
    props: {
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
    components: {
        Collapse: {
            name: string;
            props: {
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
            data(): {
                collapse: any;
            };
            watch: {
                defaultCollapse(collapse: any, preCollapse: any): void;
            };
            methods: {
                onClickHeader(): void;
            };
            render(h: any): any;
        };
    };
    render(h: any): any;
};
export default _default;
