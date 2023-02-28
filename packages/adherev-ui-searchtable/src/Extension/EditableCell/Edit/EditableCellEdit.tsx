import { Form, FormInstance } from 'ant-design-vue';
import dayjs from 'dayjs';
import { defineComponent, inject } from 'vue';
import { array, number, object } from 'vue-types';

import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

import { selectorPrefix } from '../../../SearchTable';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
import FormItemGenerator from './FormItemGenerator';

/**
 * EditableCellEditor
 * @description 可编辑单元格的编辑状态
 */
export default defineComponent({
  props: {
    rowIndex: number(),
    record: object().def({}),
    column: object<ColumnTypeExt>().def({}),
    columns: array<ColumnTypeExt[]>().def([]),
    editableConfig: object<ColumnEditableConfig>(),
  },
  emits: ['triggerChange'],
  setup(props, { emit, slots }) {
    const getContext = inject<any>('getContext');
    const context = getContext?.()?.context;

    // @ts-ignore
    const form = inject<FormInstance>('getFormIns')?.();

    const renderSaveTriggerArgs = {
      value: props?.record?.[props?.editableConfig?.dataIndex as string],
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props?.rowIndex,
    };

    const renderCancelTriggerArgs = {
      value: props?.record?.[props?.editableConfig?.dataIndex as string],
      record: props?.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props?.rowIndex,
    };

    const initialValue = context?.valueToFormItemValue({
      type: props?.editableConfig?.type,
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
    });

    const renderArgs = {
      initialValue,
      value: props?.record?.[props?.editableConfig?.dataIndex as string],
      record: props?.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props?.rowIndex,
      form,
      updateEditorCellData: () => updateEditorCellData(),
    };

    /**
     * updateEditorCellData
     * @description 更新单元格的值
     */
    const updateEditorCellData = () => {
      const value = getValue();

      const params = {
        record: props?.record,
        dataIndex: props?.editableConfig?.dataIndex,
        value,
        rowIndex: props?.rowIndex,
      };

      if (value instanceof dayjs) {
        return context?.updateEditorCellDateData(params);
      }

      return context?.updateEditorCellDate(params);
    };

    /**
     * renderFormItem
     */
    const renderFormItem = () => {
      let formItemNodeProps = {
        autoFocus: !props?.editableConfig?.useKeepEdit,
        ...(props?.editableConfig?.props || {}),
      };

      const formItemListeners = Object.keys(props?.editableConfig?.listeners || {}).reduce<{
        [prop: string]: Function;
      }>((eventCombination, eventType) => {
        eventCombination[eventType] = (e: any) => {
          props.editableConfig?.listeners[eventType]?.(e, {
            form,
            dataIndex: props?.editableConfig?.dataIndex,
            rowIndex: props?.rowIndex,
            updateEditorCellData: () => updateEditorCellData(),
          });
        };

        return eventCombination;
      }, {});

      const formItemNode = FormItemGenerator.render({
        type: props?.editableConfig?.type,
        props: formItemNodeProps,
        listeners: formItemListeners,
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
        updateEditorCellData: () => updateEditorCellData(),
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

      // 重置当前单元格的值
      context.formData[name] = value;

      if (props?.editableConfig?.onBeforeCancel) {
        props?.editableConfig
          ?.onBeforeCancel({
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
    const getValue = () => context.formData[name as string];

    const name = `${props?.editableConfig?.dataIndex}_${props?.rowIndex}`;

    return () => {
      return (
        <div class={`${selectorPrefix}-editablecell-edit`}>
          <div class={`${selectorPrefix}-editablecell-edit-inner`}>
            <Form.Item
              name={name}
              rules={props?.editableConfig?.rules}
              {...(props?.editableConfig?.formItemProps || {})}
            >
              {/*{getFieldDecorator(`${dataIndex}_${rowIndex}`, {
              rules,
              initialValue,
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
    };
  },
});
