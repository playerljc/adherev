import dayjs from 'dayjs';
import { VNode, defineComponent, inject } from 'vue';
import { func, number, object, oneOfType, string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../../SearchTable';

export default defineComponent({
  name: 'adv-searchtable-editable-row-control',
  props: {
    rowKey: string().def(''),
    rowIndex: number(),
    editorRowId: string().def(''),
    record: object().def({}),
    renderEditorRow: oneOfType([string(), func<() => VNode>()]),
    renderSave: oneOfType([string(), func<() => VNode>()]),
    renderCancel: oneOfType([string(), func<() => VNode>()]),
    onSave: func<(values: { [props: string]: any }) => Promise<void>>(),
    onEditor: func<(id: string) => Promise<void>>(),
  },
  emits: ['renderEditorRow', 'renderSave', 'renderCancel'],
  setup(props, { slots }) {
    const context = inject<any>('getContext')?.()?.context;
    const form = inject<any>('getFormIns')?.();
    const setRowFieldValue = inject<(record: any, rowIndex: number) => void>('setRowFieldValue');

    const renderDefaultEditorRow = () => <a>{Intl.tv('编辑行')}</a>;

    const renderDefaultCancel = () => <a>{Intl.tv('取消')}</a>;

    const renderDefaultSave = () => <a>{Intl.tv('保存')}</a>;

    const validateFieldsSuccess = (values) => {
      if (props.onSave) {
        props.onSave(values).then(() => updateEditorCellRowData(values));
        return;
      }

      updateEditorCellRowData(values);
    };

    const updateEditorCellRowData = (values) => {
      context
        ?.updateEditorCellRowData({ values, record: props.record, rowIndex: props.rowIndex })
        ?.then(() => onReset());
    };

    const updateRowEdit = () => {
      if (context) {
        context.editorRowId = props.record[props.rowKey];
      }
    };

    const onReset = () => {
      if (context) {
        context.editorRowId = '';

        setRowFieldValue?.(props.record, props?.rowIndex as number);

        // const formData = {};
        //
        // Object.keys(props.record).forEach((dataIndex) => {
        //   const column = context?.getColumnByDataIndex(dataIndex);
        //   if (!column) return;
        //
        //   const type = column?.$editable?.type as string;
        //
        //   const name = `${dataIndex}_${props?.rowIndex}`;
        //
        //   if (['datePicker', 'timePicker'].includes(type)) {
        //     formData[name] = dayjs(props.record[dataIndex]);
        //   } else {
        //     formData[name] = props.record[dataIndex];
        //   }
        // });
        //
        // context.formData = formData;
      }
    };

    const onEditor = () => {
      if (props.onEditor) {
        props.onEditor?.(props.record[props.rowKey])?.then(() => updateRowEdit());

        return;
      }

      updateRowEdit();
    };

    return () => (
      <div class={`${selectorPrefix}-editor-row-control`}>
        {props.editorRowId !== props.record[props.rowKey] && (
          <div class={`${selectorPrefix}-editor-row-control-edit`} onClick={onEditor}>
            {slots?.[props?.renderEditorRow as string]?.() ||
              (props?.renderEditorRow as Function)?.() ||
              renderDefaultEditorRow()}
          </div>
        )}

        {props.editorRowId === props.record[props.rowKey] && (
          <div class={`${selectorPrefix}-editor-row-control-save-cancel`}>
            <div
              class={`${selectorPrefix}-editor-row-control-save-cancel-item`}
              onClick={() => form?.validateFields().then((values) => validateFieldsSuccess(values))}
            >
              {slots?.[props?.renderSave as string]?.() ||
                (props?.renderSave as Function)?.() ||
                renderDefaultSave()}
            </div>

            <div class={`${selectorPrefix}-editor-row-control-save-cancel-item`} onClick={onReset}>
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
