import { Icon } from 'ant-design-vue';
import classNames from 'classnames';
import { PropType } from 'vue';

import { selectorPrefix } from '../../../SearchTable';
import { ColumnEditableConfig, ColumnTypeExt } from '../../../types';

/**
 * EditableCellView
 * @description 可编辑单元格的查看状态
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
  inject: ['getContext'],
  emits: ['triggerChange'],
  methods: {
    /**
     * onTrigger
     */
    onTrigger() {
      const { onBeforeToEdit, dataIndex } = this.editableConfig;
      const { rowIndex, record } = this;

      if (onBeforeToEdit) {
        this.editableConfig
          .onBeforeToEdit({
            value: record[dataIndex as string],
            record,
            dataIndex,
            rowIndex,
          })
          ?.then(() => {
            this.$emit('triggerChange');
          });
        return;
      }

      this.$emit('triggerChange');
    },
    /**
     * renderTrigger
     * @description 渲染句柄
     */
    renderTrigger() {
      return <Icon type="edit" />;
    },
  },
  render(h) {
    const {
      editableConfig: { renderToEditTrigger, useTrigger, dataIndex },
      record,
      rowIndex,
      column,
    } = this;

    // 不使用句柄则返回原始组件
    if (!useTrigger) {
      return this?.$slots.default;
    }

    const renderToEditTriggerArgv = {
      value: record?.[dataIndex as string],
      record,
      dataIndex,
      rowIndex,
    };

    const context = this.getContext?.()?.context;

    const $scopedSlots = context?.$scopedSlots;

    return (
      <div class={`${selectorPrefix}-editablecell-view`}>
        <div
          class={classNames(
            `${selectorPrefix}-editablecell-view-inner`,
            'ellipsis' in column && column.ellipsis
              ? `${selectorPrefix}-editablecell-view-inner-ellipsis`
              : '',
          )}
        >
          {this?.$slots.default}
        </div>
        <div class={`${selectorPrefix}-editablecell-view-trigger`}>
          <div class={`${selectorPrefix}-editablecell-view-trigger-inner`} onClick={this.onTrigger}>
            {$scopedSlots?.[renderToEditTrigger]?.(renderToEditTriggerArgv) ||
              renderToEditTrigger?.(renderToEditTriggerArgv)}
            {!$scopedSlots[renderToEditTrigger] && !renderToEditTrigger && this.renderTrigger()}
          </div>
        </div>
      </div>
    );
  },
};
