import { Form, Icon } from 'ant-design-vue';
import { PropType } from 'vue';

import { selectorPrefix } from '../../../SearchTable';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';
import FormItemGenerator from './FormItemGenerator';

/**
 * EditableTableCellEdit
 * @description 可编辑单元格的编辑状态
 */
export default {
  props: {
    rowIndex: {
      type: Number,
    },
    record: {
      type: Object as PropType<{
        [propName: string]: any;
      }>,
    },
    column: {
      type: Object as PropType<ColumnTypeExt>,
    },
    columns: {
      type: Array as PropType<ColumnTypeExt[]>,
    },
    editableConfig: {
      type: Object as PropType<ColumnEditableConfig>,
    },
  },
  emits: ['triggerChange'],
  inject: ['getFormIns', 'getContext'],
  methods: {
    /**
     * renderFormItem
     */
    renderFormItem(h) {
      const { useKeepEdit, dataIndex, type, render, dictName, renderChildren } =
        this.editableConfig;
      const { rowIndex, record } = this;

      const form = this.getFormIns();

      let formItemNodeProps = {
        autoFocus: !useKeepEdit,
        ...this.editableConfig.props,
      };

      const formItemNode = FormItemGenerator.render(h, {
        type,
        props: formItemNodeProps,
        dictName,
        renderChildren,
        form,
        dataIndex,
        rowIndex,
      });

      const $scopedSlots = this.getContext?.()?.context?.$scopedSlots;

      const renderArgs = {
        value: record?.[dataIndex as string],
        record,
        dataIndex,
        rowIndex,
        form,
        children: formItemNode,
      };

      return $scopedSlots?.[render]?.(renderArgs) || render?.(renderArgs) || formItemNode;
    },
    /**
     * renderDefaultSaveTrigger
     * @description 渲染缺省的保存句柄
     */
    renderDefaultSaveTrigger(h) {
      return <Icon type="check" />;
    },
    /**
     * renderDefaultCancelTrigger
     * @description 渲染缺省的取消句柄
     */
    renderDefaultCancelTrigger(h) {
      return <Icon type="close" />;
    },
    /**
     * onSaveTrigger
     * @description 点击了保存句柄
     */
    onSaveTrigger() {
      const { dataIndex, onSave } = this.editableConfig;
      const { rowIndex, record } = this;

      const form = this.getFormIns();
      const value = this.getValue();

      if (onSave) {
        form?.validateFields().then((values) => {
          onSave({
            value,
            values,
            record,
            dataIndex,
            rowIndex,
          })?.then(() => {
            this.$emit('triggerChange');
          });
        });

        return;
      }

      this.$emit('triggerChange');
    },
    /**
     * onCancelTrigger
     * @description 点击了cancel句柄
     */
    onCancelTrigger() {
      const { dataIndex, onBeforeCancel } = this.editableConfig;
      const { rowIndex, record } = this;

      const value = this.getValue();

      if (onBeforeCancel) {
        onBeforeCancel({
          value,
          record,
          dataIndex,
          rowIndex,
        })?.then(() => this.$emit('triggerChange'));
        return;
      }

      this.$emit('triggerChange');
    },
    /**
     * getValue
     */
    getValue() {
      return this.getFormIns?.()?.getFieldValue(
        `${this.editableConfig.dataIndex}_${this.rowIndex}`,
      );
    },
  },
  render(h) {
    const {
      useTrigger,
      useKeepEdit,
      renderSaveTrigger,
      renderCancelTrigger,
      dataIndex,
      type,
      render,
      rules,
      formItemProps,
    } = this.editableConfig;

    const { record, rowIndex } = this;

    const context = this.getContext?.()?.context;

    const $scopedSlots = context?.$scopedSlots;

    const form = this.getFormIns();
    const { getFieldDecorator } = form;

    const renderArgs = {
      value: record?.[dataIndex as string],
      record,
      dataIndex,
      rowIndex,
      form,
    };

    const renderSaveTriggerArgs = {
      value: record?.[dataIndex as string],
      record,
      dataIndex,
      rowIndex,
    };

    const renderCancelTriggerArgs = {
      value: record?.[dataIndex as string],
      record,
      dataIndex,
      rowIndex,
    };

    return (
      <div class={`${selectorPrefix}-editablecell-edit`}>
        <div class={`${selectorPrefix}-editablecell-edit-inner`}>
          <Form.Item>
            {getFieldDecorator(`${dataIndex}_${rowIndex}`, {
              rules,
              initialValue: context?.valueToFormItemValue({
                type,
                record,
                dataIndex,
              }),
              ...(formItemProps || {}),
            })(
              type !== 'custom'
                ? this.renderFormItem(h)
                : $scopedSlots?.[render]?.(renderArgs) || render?.(renderArgs),
            )}
          </Form.Item>
        </div>

        {!!useTrigger && !useKeepEdit && (
          <div class={`${selectorPrefix}-editablecell-edit-trigger`}>
            <div class={`${selectorPrefix}-editablecell-edit-trigger-inner`}>
              <div
                class={`${selectorPrefix}-editablecell-edit-trigger-save`}
                onClick={this.onSaveTrigger}
              >
                {$scopedSlots?.[renderSaveTrigger]?.(renderSaveTriggerArgs) ||
                  renderSaveTrigger?.(renderSaveTriggerArgs) ||
                  this.renderDefaultSaveTrigger(h)}
              </div>

              <div
                class={`${selectorPrefix}-editablecell-edit-trigger-cancel`}
                onClick={this.onCancelTrigger}
              >
                {$scopedSlots?.[renderCancelTrigger]?.(renderCancelTriggerArgs) ||
                  renderCancelTrigger?.(renderCancelTriggerArgs) ||
                  this.renderDefaultCancelTrigger(h)}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
};
