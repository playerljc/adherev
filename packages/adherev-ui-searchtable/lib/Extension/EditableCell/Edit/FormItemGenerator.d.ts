import { CreateElement, VNode } from 'vue';
import { FormItemGeneratorConfig } from '../../../types';
declare const _default: {
    /**
     * render
     * @description 对表单控件进行渲染
     * @param h
     * @param type 控件类型
     * @param renderChildren 渲染孩子
     * @param props 控件的props
     * @param dictName distName
     * @param form 表单的form实例
     * @param dataIndex
     * @param rowIndex
     */
    render(h: CreateElement, { type, renderChildren, props, dictName, form, dataIndex, rowIndex }: FormItemGeneratorConfig): VNode | undefined;
};
export default _default;