import Vue from 'vue';
import { IColumnSetting } from '../../types';
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    onShowColumns(e: any): void;
    onReset(): void;
    onEnd(): void;
    onChange(column: any, e: any): void;
}, {
    showColumns: any;
}, {
    columns: IColumnSetting[];
}>;
export default _default;
