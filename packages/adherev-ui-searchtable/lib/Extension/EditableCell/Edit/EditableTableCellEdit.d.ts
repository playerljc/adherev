import { PropType } from 'vue';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
/**
 * EditableTableCellEdit
 * @description 可编辑单元格的编辑状态
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
    emits: string[];
    inject: string[];
    methods: {
        /**
         * renderFormItem
         */
        renderFormItem(h: any): any;
        /**
         * renderDefaultSaveTrigger
         * @description 渲染缺省的保存句柄
         */
        renderDefaultSaveTrigger(): JSX.Element;
        /**
         * renderDefaultCancelTrigger
         * @description 渲染缺省的取消句柄
         */
        renderDefaultCancelTrigger(): JSX.Element;
        /**
         * onSaveTrigger
         * @description 点击了保存句柄
         */
        onSaveTrigger(): void;
        /**
         * onCancelTrigger
         * @description 点击了cancel句柄
         */
        onCancelTrigger(): void;
        /**
         * getValue
         */
        getValue(): any;
    };
    render(h: any): JSX.Element;
};
export default _default;
