// useEditableTableCell

// import { CreateElement, VNode } from 'vue';
//
// /**
//  * EditableTableCell
//  * @description 可编辑的表格单元格
//  */
// export default {
//   methods: {
//     useEditableTableCell(h: CreateElement, value: VNode): VNode | null {
//       return null;
//     },
//   },
// };

import { CreateElement, VNode } from 'vue';

import Util from '@baifendian/adherev-util';

import EditableTableCellEdit from './Edit/EditableTableCellEdit';
import EditableCellView from './View';

const {
  _util: { cloneElement },
} = Util;

/**
 * EditableCell
 * @description 表格整体编辑
 */
export default {
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
     * useEditableTableCell
     * @description 固定调用的处理函数
     * @param h
     * @param tdVNode
     */
    useEditableTableCell(h: CreateElement, tdVNode: VNode): VNode | null {
      let res = tdVNode;

      const {
        editableCellEditableConfig: { editable, useKeepEdit },
        editableCell: { status },
      } = this;

      // 单元格不是可编辑的单元格
      if (!editable) {
        res = tdVNode;
      }
      // 始终保持编辑状态
      else if (useKeepEdit) {
        res = cloneElement(tdVNode, {
          children: [
            // @ts-ignore
            <EditableTableCellEdit
                {...{
                  props: this.$props,
                }}
                editableConfig={this.editableCellEditableConfig}
                onTriggerChange={() => (this.editableCell.status = 'view')}
            >
              {tdVNode.children}
            </EditableTableCellEdit>,
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
            <EditableTableCellEdit
                {...{
                  props: this.$props,
                }}
                editableConfig={this.editableCellEditableConfig}
                onTriggerChange={() => {
                  console.log('取消编辑');
                  this.editableCell.status = 'view';
                }}
            >
              {tdVNode.children}
            </EditableTableCellEdit>,
          ],
        });
      }

      return res;
    },
  },
};

