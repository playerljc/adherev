import Util from '@baifendian/adherev-util';

import { ColumnTypeExt, RowDragSortBodyConfig, RowDragSortRowConfig } from '../types';

import SearchRowDragSortTable from '../DragSort/RowDragSort/SearchRowDragSortTable';
import SearchEditableRowTable from '../Editable/SearchEditableRowTable';

const {
  _util: { extend },
} = Util;

/**
 * SearchDragSortEditableRowTable
 * @description 可拖拽和编辑行的表格
 * @param serviceName
 */
export default (serviceName) =>
  extend({
    className: 'SearchDragSortEditableRowTable',
    mixins: [SearchEditableRowTable(serviceName), SearchRowDragSortTable(serviceName)],
    data() {
      return {
        $rowConfigReducers: [
          (...params) => this.rowDragSortReducer(...params),
          (...params) => this.rowEditableReducer(...params),
        ],
        $cellConfigReducers: [
          (...params) => this.cellDragSortReducer(...params),
          (...params) => this.cellEditableReducer(...params),
        ],
      };
    },
    methods: {
      onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
        const set = Array.from(
          new Set([...this.$data.$tableRowComponentReducers, 'useRowDragSortRow']),
        );

        const existsEditable = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditable) {
          return [...Array.from(set), 'useEditableRow'];
        }

        return Array.from(set);
      },
      /**
       * onTableCellComponentReducers
       * @param columns
       */
      onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
        const set = new Set([...this.$data.$tableCellComponentReducers, 'useRowDragSortCell']);

        const existsEditor = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditor) {
          return [...Array.from(set), 'useEditableCell'];
        }

        return Array.from(set);
      },
      /**
       * onDragSortBody
       * @description
       */
      onDragSortBody(): RowDragSortBodyConfig {
        return {
          canDrag: () => !this.editorRowId,
        };
      },
      /**
       * onDragSortRow
       * @param params
       */
      onDragSortRow(params: {
        rowIndex: number;
        record: { [prop: string]: any };
        columns: ColumnTypeExt[];
      }): RowDragSortRowConfig {
        return {
          canDrag: () => !this.editorRowId,
        };
      },
    },
  });
