import { Form } from 'ant-design-vue';
import { defineComponent, inject } from 'vue';
import { array, number, object } from 'vue-types';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

import { selectorPrefix } from '../../../SearchTable';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
import FormItemGenerator from './FormItemGenerator';

/**
 * EditableTableCellEdit
 * @description 可编辑单元格的编辑状态
 */
export default defineComponent({
  props: {
    rowIndex: number(),
    record: object(),
    column: object<ColumnTypeExt>(),
    columns: array<ColumnTypeExt[]>().def([]),
    editableConfig: object<ColumnEditableConfig>(),
  },
  emits: ['triggerChange'],
  setup(props, { emit, slots }) {
    const getContext = inject<any>('getContext');
    const context = getContext?.()?.context;

    const form = inject<any>('getFormIns')();

    const renderSaveTriggerArgs = {
      value: props.record?.[props?.editableConfig?.dataIndex as string],
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props.rowIndex,
    };

    const renderCancelTriggerArgs = {
      value: props.record?.[props?.editableConfig?.dataIndex as string],
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props.rowIndex,
    };

    const initialValue = context?.valueToFormItemValue({
      type: props?.editableConfig?.type,
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
    });

    const renderArgs = {
      initialValue,
      value: props.record?.[props?.editableConfig?.dataIndex as string],
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props.rowIndex,
      form,
    };

    /**
     * renderFormItem
     */
    const renderFormItem = () => {
      let formItemNodeProps = {
        autoFocus: !props?.editableConfig?.useKeepEdit,
        ...(props?.editableConfig?.props || {}),
      };

      const formItemNode = FormItemGenerator.render({
        type: props?.editableConfig?.type,
        props: formItemNodeProps,
        dictName: props?.editableConfig?.dictName,
        renderChildren: props?.editableConfig?.renderChildren,
        dataIndex: props?.editableConfig?.dataIndex,
        rowIndex: props?.rowIndex,
        initialValue,
        name,
        form,
        context,
      });

      const renderArgs = {
        value: props?.record?.[props?.editableConfig?.dataIndex as string],
        record: props?.record,
        dataIndex: props?.editableConfig?.dataIndex,
        rowIndex: props?.rowIndex,
        children: formItemNode,
        form,
      };

      return (
        slots?.[props?.editableConfig?.render as any]?.(renderArgs) ||
        props?.editableConfig?.render?.(renderArgs) ||
        formItemNode
      );
    };

    /**
     * renderDefaultSaveTrigger
     * @description 渲染缺省的保存句柄
     */
    const renderDefaultSaveTrigger = () => <CheckOutlined />;

    /**
     * renderDefaultCancelTrigger
     * @description 渲染缺省的取消句柄
     */
    const renderDefaultCancelTrigger = () => <CloseOutlined />;

    /**
     * onSaveTrigger
     * @description 点击了保存句柄
     */
    const onSaveTrigger = () => {
      const value = getValue();

      if (props?.editableConfig?.onSave) {
        form?.validateFields().then((values) => {
          props?.editableConfig
            ?.onSave?.({
              value,
              values,
              record: props?.record,
              dataIndex: props?.editableConfig?.dataIndex,
              rowIndex: props?.rowIndex,
            })
            ?.then(() => {
              emit('triggerChange');
            });
        });

        return;
      }

      emit('triggerChange');
    };

    /**
     * onCancelTrigger
     * @description 点击了cancel句柄
     */
    const onCancelTrigger = () => {
      const value = props?.record?.[props?.editableConfig?.dataIndex as string];

      context.formData[name] = value;

      if (props?.editableConfig?.onBeforeCancel) {
        props?.editableConfig
          ?.onBeforeCancel?.({
            value,
            record: props?.record,
            dataIndex: props?.editableConfig?.dataIndex,
            rowIndex: props?.rowIndex,
          })
          ?.then(() => emit('triggerChange'));
        return;
      }

      emit('triggerChange');
    };

    /**
     * getValue
     */
    const getValue = () => {
      // return form?.()?.getFieldValue(`${props?.editableConfig?.dataIndex}_${props?.rowIndex}`);
      return context.formData[name as string];
    };

    const name = `${props?.editableConfig?.dataIndex}_${props?.rowIndex}`;

    return () => (
      <div class={`${selectorPrefix}-editablecell-edit`}>
        <div class={`${selectorPrefix}-editablecell-edit-inner`}>
          <Form.Item
            name={`${props?.editableConfig?.dataIndex}_${props.rowIndex}`}
            rules={props?.editableConfig?.rules}
            {...(props?.editableConfig?.formItemProps || {})}
          >
            {/*{getFieldDecorator(`${dataIndex}_${rowIndex}`, {
              rules,
              initialValue: context?.valueToFormItemValue({
                type,
                record,
                dataIndex,
              }),
              ...(formItemProps || {}),
            })(
              type !== 'custom'
                ? this.renderFormItem()
                : slots?.[render]?.(renderArgs) || render?.(renderArgs),
            )}*/}
            {props?.editableConfig?.type !== 'custom'
              ? renderFormItem?.()
              : slots?.[props?.editableConfig?.render as any]?.(renderArgs) ||
                props?.editableConfig?.render?.(renderArgs)}
          </Form.Item>
        </div>

        {!!props?.editableConfig?.useTrigger && !props?.editableConfig?.useKeepEdit && (
          <div class={`${selectorPrefix}-editablecell-edit-trigger`}>
            <div class={`${selectorPrefix}-editablecell-edit-trigger-inner`}>
              <div
                class={`${selectorPrefix}-editablecell-edit-trigger-save`}
                onClick={onSaveTrigger}
              >
                {slots?.[props?.editableConfig?.renderSaveTrigger as any]?.(
                  renderSaveTriggerArgs,
                ) ||
                  props?.editableConfig?.renderSaveTrigger?.(renderSaveTriggerArgs) ||
                  renderDefaultSaveTrigger()}
              </div>

              <div
                class={`${selectorPrefix}-editablecell-edit-trigger-cancel`}
                onClick={onCancelTrigger}
              >
                {slots?.[props?.editableConfig?.renderCancelTrigger as any]?.(
                  renderCancelTriggerArgs,
                ) ||
                  props?.editableConfig?.renderCancelTrigger?.(renderCancelTriggerArgs) ||
                  renderDefaultCancelTrigger()}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
});
