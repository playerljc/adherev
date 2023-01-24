declare namespace _default {
    const mixins: {
        mixins: any[];
        data(): {
            loading: boolean;
            dataSource: {
                total: number;
                list: never[];
            };
        };
        props: {
            pagination: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        watch: {
            pagination(oldValue: any, newValue: any): void;
        };
        methods: {
            getParams(): {
                name: string;
                sex: string;
                startTime: null;
                endTime: null;
                deptCode: string;
                homeTown: string;
                width: string;
                height: string;
            };
            getFetchDataParams(): {
                startTime: any;
                endTime: any;
            };
            getData(): any;
            getTotal(): any;
            getColumns(): ({
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                scopedSlots?: undefined;
                sorter?: undefined;
                sortOrder?: undefined;
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                scopedSlots: {
                    customRender: string;
                };
                sorter?: undefined;
                sortOrder?: undefined;
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                sorter: boolean;
                width: number;
                sortOrder: any;
                scopedSlots: {
                    customRender: string;
                };
            } | {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                sorter: boolean;
                sortOrder: any;
                width: number;
                scopedSlots?: undefined;
            })[];
            getScopedSlots(): {
                sex: (text: any) => any;
                birthday: (text: any) => string;
            };
            renderSearchForm(h: any): JSX.Element;
            renderSearchFooterItems(): null;
            showLoading(): any;
            getOrderFieldValue(): string;
            fetchDataExecute(searchParams: any): Promise<void>;
            getPagination(): any;
        };
    }[];
    namespace methods {
        function getColumns(): ({
            title: string;
            key: string;
            children: {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                $resizable: boolean;
            }[];
            dataIndex?: undefined;
            align?: undefined;
            width?: undefined;
            scopedSlots?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            scopedSlots: {
                customRender: string;
            };
            children?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            children?: undefined;
            scopedSlots?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            sorter: boolean;
            width: number;
            sortOrder: any;
            scopedSlots: {
                customRender: string;
            };
            children?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            sorter: boolean;
            sortOrder: any;
            width: number;
            children?: undefined;
            scopedSlots?: undefined;
        })[];
    }
}
export default _default;