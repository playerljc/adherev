declare const _default: {
    name: string;
    mixins: {
        name: string;
        props: {
            cascaderProps: {
                type: ObjectConstructor;
                default: () => {};
            };
            value: {
                type: ArrayConstructor;
                default: () => never[];
            };
            dataSource: {
                type: ArrayConstructor;
                default: () => never[];
            };
        };
        computed: {
            targetValue(): any;
        };
        watch: {
            value(value: any): void;
        };
        methods: {
            $exists(value: any): null;
        };
        render(h: any): any;
    }[];
    props: {
        cascaderProps: {
            type: ObjectConstructor;
            default: () => {};
        };
        value: {
            type: ArrayConstructor;
            default: () => never[];
        };
        dataSource: {
            type: ArrayConstructor;
            default: () => never[];
        };
    };
    computed: {
        targetDataSource(): any;
    };
    render(h: any): any;
};
export default _default;
