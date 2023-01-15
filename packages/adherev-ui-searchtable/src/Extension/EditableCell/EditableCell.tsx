import { CreateElement, VNode } from 'vue';

import Util from '@baifendian/adherev-util';

import EditableCellEdit from './Edit/EditableCellEdit';
import EditableCellView from './View';

const {
  _util: { cloneElement },
} = Util;

/**
 * EditableCell
 * @description 可编辑的单元格
 */
export default {
  inject: ['getActiveValue', 'setActiveValue'],
  data() {
    return {
      $editableCell: {
        defaultConfig: {
          editable: false,
          defaultStatus: 'view',
          type: 'input',
          props: {},
          formItemProps: {},
          useTrigger: true,
          require: true,
          dataIndex: this.column?.dataIndex,
          useKeepEdit: false,
        },
        watchHandler: [],
      },
      editableCell: {
        status: this.column?.$editable?.defaultStatus || 'view',
      },
    };
  },
  computed: {
    editableCellEditableConfig() {
      return { ...this.$data.$editableCell.defaultConfig, ...(this.column?.$editable || {}) };
    },
  },
  created() {
    const { $editableCell } = this.$data;

    $editableCell.watchHandler.push(
      this.$watch(
        function () {
          return this.getContext?.()?.context?.getData();
        },
        function () {
          this.editableCell.status = this.editableCellEditableConfig.defaultStatus;
        },
      ),
    );

    $editableCell.watchHandler.push(
      this.$watch(
        function () {
          return this.column?.$editable?.defaultStatus;
        },
        function () {
          this.editableCell.status = this.editableCellEditableConfig.defaultStatus;
        },
      ),
    );
  },
  beforeDestroy() {
    this.$data.$editableCell.watchHandler.forEach((handler) => handler());
  },
  methods: {
    /**
     * useEditableCell
     * @description 固定调用的处理函数
     * @param h
     * @param tdVNode
     */
    useEditableCell(h: CreateElement, tdVNode: VNode): VNode | null {
      let res = tdVNode;

      const {
        editableCellEditableConfig: { editable, useKeepEdit },
        editableCell: { status },
      } = this;

      // 单元格不是可编辑的单元格
      if (!editable) {
        this.setActiveValue('');
        res = tdVNode;
      }
      // 始终保持编辑状态
      else if (useKeepEdit) {
        res = cloneElement(tdVNode, {
          children: [
            // @ts-ignore
            <EditableCellEdit
              {...{
                props: this.$props,
              }}
              editableConfig={this.editableCellEditableConfig}
              onTriggerChange={() => {
                this.setActiveValue('');
                this.editableCell.status = 'view';
              }}
            >
              {tdVNode.children}
            </EditableCellEdit>,
          ],
        });
      }
      // 查看状态
      else if (status === 'view') {
        res = cloneElement(tdVNode, {
          children: [
            // @ts-ignore
            <EditableCellView
              {...{
                props: this.$props,
              }}
              editableConfig={this.editableCellEditableConfig}
              onTriggerChange={() => {
                this.setActiveValue(this.record[this.column.dataIndex]);
                this.editableCell.status = 'edit';
              }}
            >
              {tdVNode.children}
            </EditableCellView>,
          ],
        });
      }
      // 编辑状态
      else if (status === 'edit') {
        res = cloneElement(tdVNode, {
          children: [
            // @ts-ignore
            <EditableCellEdit
              {...{
                props: this.$props,
              }}
              editableConfig={this.editableCellEditableConfig}
              onTriggerChange={() => {
                this.setActiveValue('');
                this.editableCell.status = 'view';
              }}
            >
              {tdVNode.children}
            </EditableCellEdit>,
          ],
        });
      }

      return res;
    },
  },
};
