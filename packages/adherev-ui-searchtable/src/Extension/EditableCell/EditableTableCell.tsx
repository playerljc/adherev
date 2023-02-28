import { VNode, computed, h, inject, onBeforeUnmount, ref, toRaw, watch } from "vue";

import EditableTableCellEdit from './Edit/EditableTableCellEdit';
import EditableCellView from './View';

/**
 * EditableCell
 * @description 表格整体编辑
 */
export const useEditableTableCell = (props, _context) => {
  const getContext = inject<any>('getContext');
  const context = getContext?.()?.context;

  const $editableCell = {
    defaultConfig: {
      editable: false,
      defaultStatus: 'view',
      type: 'input',
      props: {},
      formItemProps: {},
      useTrigger: true,
      require: true,
      dataIndex: props.column?.dataIndex,
      useKeepEdit: false,
    },
  };

   const status = ref<string>(props.column?.$editable?.defaultStatus || 'view') ;

  const editableCellEditableConfig = computed(() => {
    return { ...$editableCell.defaultConfig, ...(props.column?.$editable || {}) };
  });

  const watchHandler1 = watch(
    () => context?.getData?.(),
    () => {
      status.value = editableCellEditableConfig.value.defaultStatus;
    },
  );

  const watchHandler2 = watch(
    () => props.column?.$editable?.defaultStatus,
    () => {
      status.value = editableCellEditableConfig.value.defaultStatus;
    },
  );

  onBeforeUnmount(() => {
    watchHandler1();
    watchHandler2();
  });

  return (tdVNode: VNode) => {
    let res = tdVNode;

    // 单元格不是可编辑的单元格
    if (!editableCellEditableConfig.value.editable) {
      res = tdVNode;
    }
    // 始终保持编辑状态
    else if (editableCellEditableConfig.value.useKeepEdit) {
      res = h(tdVNode, {}, [
        <EditableTableCellEdit
          {...toRaw(props)}
          editableConfig={editableCellEditableConfig.value}
          onTriggerChange={() => (status.value = 'view')}
        >
          {tdVNode.children}
        </EditableTableCellEdit>,
      ]);
    }
    // 查看状态
    else if (status.value === 'view') {
      res = h(tdVNode, {}, [
        <EditableCellView
          {...toRaw(props)}
          editableConfig={editableCellEditableConfig.value}
          onTriggerChange={() => {
            status.value = 'edit';
          }}
        >
          {tdVNode.children}
        </EditableCellView>,
      ]);
    }
    // 编辑状态
    else if (status.value === 'edit') {
      res = h(tdVNode, {}, [
        <EditableTableCellEdit
          {...toRaw(props)}
          editableConfig={editableCellEditableConfig.value}
          onTriggerChange={() => {
            status.value = 'view';
          }}
        >
          {tdVNode.children}
        </EditableTableCellEdit>,
      ]);
    }

    return res;
  };
};
