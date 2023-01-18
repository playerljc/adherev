declare const _default: {
    name: string;
    props: {
        groupData: {
            type: ArrayConstructor;
            default: () => never[];
        };
        tableGridLayoutConfig: {
            type: ObjectConstructor;
            default: () => {
                layout: string;
                bordered: boolean;
            };
        };
        remainingGroupData: {
            type: ArrayConstructor;
            default: () => never[];
        };
        advancedSearchConfig: {
            type: ObjectConstructor;
            default: () => {
                rowCount: string;
                showStrategy: string;
                advancedSearch: {
                    className: string;
                    style: {};
                    width: string;
                    mask: boolean;
                    zIndex: number;
                    time: number;
                    direction: string;
                    collapse: boolean;
                    onBeforeShow: () => void;
                    onBeforeClose: () => void;
                    onAfterShow: () => void;
                    onAfterClose: () => void;
                    getPopupContainer: () => HTMLElement;
                };
            };
        };
        searchFn: {
            type: FunctionConstructor;
        };
        resetFn: {
            type: FunctionConstructor;
        };
        collapseFn: {
            type: FunctionConstructor;
        };
    };
    inject: string[];
    slots: string[];
    data(): {
        collapse: any;
    };
    watch: {
        'advancedSearchConfig.advancedSearch.collapse': (collapse: any) => void;
    };
    render(h: any): JSX.Element;
};
export default _default;
