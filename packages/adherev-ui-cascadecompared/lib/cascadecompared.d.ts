import { PropType, VNode } from 'vue';
import { IColumnConfig, IMasterItem, ITableConfig } from './types';
declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        indicatorClassName: {
            type: StringConstructor;
            default: string;
        };
        indicatorStyle: {
            type: StringConstructor;
            default: string;
        };
        indicatorFixedWrapClassName: {
            type: StringConstructor;
            default: string;
        };
        indicatorFixedWrapStyle: {
            type: StringConstructor;
            default: string;
        };
        indicatorAutoWrapClassName: {
            type: StringConstructor;
            default: string;
        };
        indicatorAutoWrapStyle: {
            type: StringConstructor;
            default: string;
        };
        masterClassName: {
            type: StringConstructor;
            default: string;
        };
        masterStyle: {
            type: StringConstructor;
            default: string;
        };
        masterInnerClassName: {
            type: StringConstructor;
            default: string;
        };
        masterInnerStyle: {
            type: StringConstructor;
            default: string;
        };
        masterStickFixedClassName: {
            type: StringConstructor;
            default: string;
        };
        masterStickFixedStyle: {
            type: StringConstructor;
            default: string;
        };
        masterStickInnerClassName: {
            type: StringConstructor;
            default: string;
        };
        masterStickInnerStyle: {
            type: StringConstructor;
            default: string;
        };
        indicator: {
            type: PropType<ITableConfig>;
            default: () => {
                columns: never[];
                dataSource: never[];
            };
        };
        master: {
            type: PropType<IMasterItem[]>;
            default: () => never[];
            validator(val: any): boolean;
        };
        defaultCellWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    };
    data(): {
        $scrolls: never[];
    };
    computed: {
        getIndicatorClassName(): string;
        getFixedWrapClassName(): (className: any) => string;
        getFixedWrapStyle(): (style: any, width: any) => string;
        getCellClassName(): (column: any) => string;
        getAutoWrapClassName(): (className: any) => string;
        getAutoInnerClassName(): (className: any) => string;
        getMasterClassName(): string;
        getMasterInnerClassName(): string;
        getFixedClassName(): string;
        getInnerClassName(): string;
    };
    methods: {
        initScroll(): void;
        getFixedColumnConfig(columns: Array<IColumnConfig>): IColumnConfig | null;
        renderCell(h: any, config: IColumnConfig, dataSource: any): VNode;
        renderMasterGroupTitle(h: any, title: any): VNode;
        renderMasterGroupContent(h: any, masterItem: IMasterItem): VNode;
        renderMasterGroup(h: any, config: IMasterItem, index: any): VNode;
        renderIndicator(h: any): VNode;
        renderMaster(h: any): VNode;
        /**
         * scrollToByIndex
         * @param {number} index
         * @param {number} duration
         * @return {boolean}
         */
        scrollToByIndex(index: number, duration?: number): void;
        /**
         * scrollToByHeaderEl
         * @param {HtmlElement} headerEl
         * @param {number} duration
         * @return {boolean}
         */
        scrollToByHeaderEl(headerEl: HTMLElement, duration?: number): void;
        /**
         * scrollToByColumn
         * @param {number} columnIndex
         */
        scrollToByColumn(columnIndex: number): void;
    };
    mounted(): void;
    updated(): void;
    render(h: any): VNode;
};
export default _default;
