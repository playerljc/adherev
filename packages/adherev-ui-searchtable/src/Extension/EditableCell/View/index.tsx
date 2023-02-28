import classNames from 'classnames';
import { defineComponent, inject } from 'vue';
import { array, number, object } from 'vue-types';

import { EditOutlined } from '@ant-design/icons-vue';

import { selectorPrefix } from '../../../SearchTable';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';

/**
 * EditableCellView
 * @description 可编辑单元格的查看状态
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
    const renderToEditTriggerArgv = {
      value: props.record?.[props?.editableConfig?.dataIndex as string],
      record: props.record,
      dataIndex: props?.editableConfig?.dataIndex,
      rowIndex: props.rowIndex,
    };

    /**
     * onTrigger
     */
    const onTrigger = () => {
      if (props?.editableConfig?.onBeforeToEdit) {
        props?.editableConfig
          ?.onBeforeToEdit({
            value: props.record[props?.editableConfig?.dataIndex as string],
            record: props.record,
            dataIndex: props?.editableConfig?.dataIndex,
            rowIndex: props.rowIndex as number,
          })
          ?.then(() => {
            emit('triggerChange');
          });
        return;
      }

      emit('triggerChange');
    };

    /**
     * renderTrigger
     * @description 渲染句柄
     */
    const renderTrigger = () => <EditOutlined />;

    return () => {
      // 不使用句柄则返回原始组件
      if (!props?.editableConfig?.useTrigger) {
        return slots?.default?.();
      }

      return (
        <div class={`${selectorPrefix}-editablecell-view`}>
          <div
            class={classNames(
              `${selectorPrefix}-editablecell-view-inner`,
              'ellipsis' in props.column && props.column.ellipsis
                ? `${selectorPrefix}-editablecell-view-inner-ellipsis`
                : '',
            )}
          >
            {slots?.default?.()}
          </div>
          <div class={`${selectorPrefix}-editablecell-view-trigger`}>
            <div class={`${selectorPrefix}-editablecell-view-trigger-inner`} onClick={onTrigger}>
              {slots?.[props?.editableConfig?.renderToEditTrigger as any]?.(
                  renderToEditTriggerArgv,
                ) ||
                props?.editableConfig?.renderToEditTrigger?.(renderToEditTriggerArgv)}
              {!slots[props?.editableConfig?.renderToEditTrigger as any] &&
                !props?.editableConfig?.renderToEditTrigger &&
                renderTrigger()}
            </div>
          </div>
        </div>
      )
    }
  },
});
