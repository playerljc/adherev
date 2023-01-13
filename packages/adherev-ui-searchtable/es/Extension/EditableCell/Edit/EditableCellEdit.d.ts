import { PropType } from 'vue';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
/**
 * EditableCellEditor
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
         * updateEditorCellData
         * @description 更新单元格的值
         */
        updateEditorCellData(): any;
        /**
         * renderFormItem
         */
        renderFormItem(): any;
        /**
         * onSaveTrigger
         * @description 点击了保存句柄
         */
        onSaveTrigger(): void;
        /**
         * renderDefaultSaveTrigger
         * @description 渲染缺省的保存句柄
         */
        renderDefaultSaveTrigger(): JSX.Element;
        /**
         * onCancelTrigger
         * @description 点击了cancel句柄
         */
        onCancelTrigger(): void;
        /**
         * renderDefaultCancelTrigger
         * @description 渲染缺省的取消句柄
         */
        renderDefaultCancelTrigger(): JSX.Element;
        /**
         * getValue
         */
        getValue(): any;
    };
    render(): JSX.Element;
};
export default _default;
