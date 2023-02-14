import { VNode, defineComponent, inject } from 'vue';
import { func, oneOfType, string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../../SearchTable';

export default defineComponent({
  name: 'adv-searchtable-editable-control',
  props: {
    rowKey: string().def(''),
    renderEditorTable: oneOfType([string(), func<() => VNode>()]),
    renderSave: oneOfType([string(), func<() => VNode>()]),
    renderCancel: oneOfType([string(), func<() => VNode>()]),
    onEditor: func<() => Promise<void>>(),
    onSave: func<(values: { [prop: string]: any }[]) => Promise<void>>(),
  },
  emits: ['renderEditorTable', 'renderSave', 'renderCancel'],
  setup(props, { slots }) {
    const context = inject<any>('getContext')?.()?.context;
    const form = inject<any>('getFormIns')?.();
    const setFieldValuesByDataSource = inject<() => void>('setFieldValuesByDataSource');

    const renderDefaultSave = () => <a>{Intl.tv('保存')}</a>;

    const renderDefaultCancel = () => <a>{Intl.tv('取消')}</a>;

    const renderDefaultEditorTable = () => <a>{Intl.tv('编辑表格')}</a>;

    const onEditor = () => {
      if (props.onEditor) {
        props.onEditor?.()?.then(() => updateTableEdit());

        return;
      }

      updateTableEdit();
    };

    const onSave = () => {
      form?.validateFields()?.then?.((values) => validateFieldsSuccess(values));
    };

    const validateFieldsSuccess = (values) => {
      if (props.onSave) {
        props.onSave(values).then(() => updateEditorCellTableData(values));
        return;
      }

      updateEditorCellTableData(values);
    };

    const updateEditorCellTableData = (changeData) => {
      context?.updateEditorData(changeData)?.then(onReset);
    };

    const updateTableEdit = () => {
      if (context) {
        context.isTableEditor = true;
      }
    };

    const onReset = () => {
      if (context) {
        context.isTableEditor = false;
      }

      setFieldValuesByDataSource?.();
    };

    return () => (
      <div class={`${selectorPrefix}-editor-table-control`}>
        {!context?.isTableEditor && (
          <div class={`${selectorPrefix}-editor-table-control-edit`} onClick={onEditor}>
            {slots?.[props.renderEditorTable as string]?.() ||
              (props?.renderEditorTable as Function)?.() ||
              renderDefaultEditorTable?.()}
          </div>
        )}

        {context?.isTableEditor && (
          <div class={`${selectorPrefix}-editor-table-control-save-cancel`}>
            {/* 保存 */}
            <div
              class={`${selectorPrefix}-editor-table-control-save-cancel-item`}
              onClick={onSave}
            >
              {slots?.[props?.renderSave as string]?.() ||
                (props?.renderSave as Function)?.() ||
                renderDefaultSave()}
            </div>

            {/* 取消 */}
            <div
              class={`${selectorPrefix}-editor-table-control-save-cancel-item`}
              onClick={onReset}
            >
              {slots?.[props?.renderCancel as string]?.() ||
                (props?.renderCancel as Function)?.() ||
                renderDefaultCancel()}
            </div>
          </div>
        )}
      </div>
    );
  },
});
