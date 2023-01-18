import { PropType } from 'vue';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
/**
 * EditableCellView
 * @description 可编辑单元格的查看状态
 */
declare const _default: {
    props: {
        rowIndex: {
            type: NumberConstructor;
        };
        record: {
            type: PropType<{
                [propName: string]: any;
            }>;
        };
        column: {
            type: PropType<ColumnTypeExt>;
        };
        columns: {
            type: PropType<ColumnTypeExt[]>;
        };
        editableConfig: {
            type: PropType<ColumnEditableConfig>;
        };
    };
    inject: string[];
    emits: string[];
    methods: {
        /**
         * onTrigger
         */
        onTrigger(): void;
        /**
         * renderTrigger
         * @description 渲染句柄
         */
        renderTrigger(h: any): JSX.Element;
    };
    render(h: any): any;
};
export default _default;
