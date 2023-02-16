declare namespace _default {
    const mixins: import("vue").DefineComponent<{
        pagination: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, unknown, {
        loading: boolean;
        dataSource: {
            total: number;
            list: never[];
        };
    }, {}, {
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
        getOrderFieldValue(): "height";
        fetchDataExecute(searchParams: any): any;
        getPagination(): any;
    }, any, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        pagination: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        pagination: boolean;
    }>[];
    namespace methods {
        function getColumns(): ({
            title: string;
            dataIndex: string;
            key: string;
            children: {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                resizable: boolean;
            }[];
            align?: undefined;
            width?: undefined;
            resizable?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            children?: undefined;
            resizable?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            resizable: boolean;
            children?: undefined;
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
            children?: undefined;
            resizable?: undefined;
        })[];
        function getColumns(): ({
            title: string;
            dataIndex: string;
            key: string;
            children: {
                title: string;
                dataIndex: string;
                key: string;
                align: string;
                width: number;
                resizable: boolean;
            }[];
            align?: undefined;
            width?: undefined;
            resizable?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            children?: undefined;
            resizable?: undefined;
            sorter?: undefined;
            sortOrder?: undefined;
        } | {
            title: string;
            dataIndex: string;
            key: string;
            align: string;
            width: number;
            resizable: boolean;
            children?: undefined;
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
            children?: undefined;
            resizable?: undefined;
        })[];
    }
}
export default _default;
