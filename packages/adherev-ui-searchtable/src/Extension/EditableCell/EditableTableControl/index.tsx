import { PropType, VNode } from 'vue';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../../SearchTable';

export default {
  name: 'adv-searchtable-editable-control',
  props: {
    rowKey: {
      type: String,
    },
    renderEditorTable: {
      type: Function as PropType<() => VNode>,
    },
    renderSave: {
      type: Function as PropType<() => VNode>,
    },
    renderCancel: {
      type: Function as PropType<() => VNode>,
    },
    onEditor: {
      type: Function as PropType<() => Promise<void>>,
    },
    onSave: {
      type: Function as PropType<(values: { [prop: string]: any }[]) => Promise<void>>,
    },
  },
  emits: ['renderEditorTable', 'renderSave', 'renderCancel'],
  inject: ['getFormIns', 'getContext'],
  methods: {
    renderDefaultSave(h) {
      // return <a>{Intl.tv('保存')}</a>;
      return <a>保存</a>;
    },
    renderDefaultCancel(h) {
      // return <a>{Intl.tv('取消')}</a>;
      return <a>取消</a>;
    },
    renderDefaultEditorTable(h) {
      // return <a>{Intl.tv('编辑表格')}</a>;
      return <a>编辑表格</a>;
    },
    $onEditor() {
      if (this.onEditor) {
        this.onEditor?.()?.then(() => this.updateTableEdit());

        return;
      }

      this.updateTableEdit();
    },
    $onSave() {
      const form = this.getFormIns?.();

      form?.validateFields()?.then?.((values) => this.validateFieldsSuccess(values));
    },
    validateFieldsSuccess(values) {
      if (this.onSave) {
        this.onSave(values).then(() => this.updateEditorCellTableData(values));
        return;
      }

      this.updateEditorCellTableData(values);
    },
    updateEditorCellTableData(changeData) {
      const context = this.getContext?.()?.context;

      context?.updateEditorData(changeData)?.then(() => this.reset());
    },
    updateTableEdit() {
      const context = this.getContext?.()?.context;

      if (context) {
        context.isTableEditor = true;
      }
    },
    reset() {
      const context = this.getContext?.()?.context;

      if (context) {
        context.isTableEditor = false;
      }
    },
  },
  render(h) {
    const context = this.getContext?.().context;

    return (
      <div class={`${selectorPrefix}-editor-table-control`}>
        {!context?.isTableEditor && (
          <div class={`${selectorPrefix}-editor-table-control-edit`} onClick={this.$onEditor}>
            {this.$slots?.[this.renderEditorTable]?.() ||
              this.renderEditorTable?.(h) ||
              this.renderDefaultEditorTable?.(h)}
          </div>
        )}

        {context?.isTableEditor && (
          <div class={`${selectorPrefix}-editor-table-control-save-cancel`}>
            {/* 保存 */}
            <div
              class={`${selectorPrefix}-editor-table-control-save-cancel-item`}
              onClick={this.$onSave}
            >
              {this.$slots?.[this.renderSave]?.() ||
                this.renderSave?.(h) ||
                this.renderDefaultSave(h)}
            </div>

            {/* 取消 */}
            <div
              class={`${selectorPrefix}-editor-table-control-save-cancel-item`}
              onClick={this.reset}
            >
              {this.$slots?.[this.renderCancel]?.() ||
                this.renderCancel?.(h) ||
                this.renderDefaultCancel(h)}
            </div>
          </div>
        )}
      </div>
    );
  },
};
