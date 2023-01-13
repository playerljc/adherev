import { PropType, VNode } from 'vue';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../../SearchTable';

export default {
  name: 'adv-searchtable-editable-row-control',
  props: {
    rowKey: {
      type: String,
    },
    editorRowId: {
      type: String,
    },
    record: {
      type: Object as PropType<{ [prop: string]: any }>,
      default: () => ({}),
    },
    renderEditorRow: {
      type: Function as PropType<() => VNode>,
    },
    renderSave: {
      type: Function as PropType<() => VNode>,
    },
    renderCancel: {
      type: Function as PropType<() => VNode>,
    },
    onSave: {
      type: Function as PropType<(values: { [props: string]: any }) => Promise<void>>,
    },
    onEditor: {
      type: Function as PropType<(id: string) => Promise<void>>,
    },
  },
  emits: ['renderEditorRow', 'renderSave', 'renderCancel'],
  inject: ['getFormIns', 'getContext'],
  methods: {
    renderDefaultEditorRow(h) {
      return <a>{Intl.tv('编辑行')}</a>;
      // return <a>编辑行</a>;
    },
    renderDefaultCancel(h) {
      return <a>{Intl.tv('取消')}</a>;
      // return <a>取消</a>;
    },
    renderDefaultSave(h) {
      return <a>{Intl.tv('保存')}</a>;
      // return <a>保存</a>;
    },
    validateFieldsSuccess(values) {
      if (this.onSave) {
        this.onSave(values).then(() => this.updateEditorCellRowData(values));
        return;
      }

      this.updateEditorCellRowData(values);
    },
    updateEditorCellRowData(values) {
      const context = this.getContext?.()?.context;

      context?.updateEditorCellRowData({ values, record: this.record })?.then(() => this.reset());
    },
    updateRowEdit() {
      const context = this.getContext?.()?.context;

      if (context) {
        context.editorRowId = this.record[this.rowKey];
      }
    },
    reset() {
      const context = this.getContext?.()?.context;

      if (context) {
        context.editorRowId = '';
      }
    },
    $onEditor() {
      if (this.onEditor) {
        this.onEditor?.(this.record[this.rowKey])?.then(() => this.updateRowEdit());

        return;
      }

      this.updateRowEdit();
    },
  },
  render(h) {
    const { editorRowId, record, rowKey } = this;
    const form = this.getFormIns();

    return (
      <div class={`${selectorPrefix}-editor-row-control`}>
        {editorRowId !== record[rowKey] && (
          <div class={`${selectorPrefix}-editor-row-control-edit`} onClick={this.$onEditor}>
            {this.$slots?.[this.renderEditorRow]?.() ||
              this?.renderEditorRow?.() ||
              this.renderDefaultEditorRow(h)}
          </div>
        )}

        {editorRowId === record[rowKey] && (
          <div class={`${selectorPrefix}-editor-row-control-save-cancel`}>
            <div
              class={`${selectorPrefix}-editor-row-control-save-cancel-item`}
              onClick={() =>
                form?.validateFields().then((values) => this.validateFieldsSuccess(values))
              }
            >
              {this.$slots?.[this.renderSave]?.() ||
                this?.renderSave?.() ||
                this.renderDefaultSave(h)}
            </div>

            <div
              class={`${selectorPrefix}-editor-row-control-save-cancel-item`}
              onClick={this.reset}
            >
              {this.$slots?.[this.renderCancel]?.() ||
                this?.renderCancel?.() ||
                this.renderDefaultCancel(h)}
            </div>
          </div>
        )}
      </div>
    );
  },
};
