import Util from '@baifendian/adherev-util';

import { ColumnTypeExt, RowDragSortBodyConfig, RowDragSortRowConfig } from '../types';

import SearchRowDragSortTable from '../DragSort/RowDragSort/SearchRowDragSortTable';
import SearchEditableTable from '../Editable/SearchEditableTable';

const {
  _util: { extend },
} = Util;

/**
 * SearchDragSortEditableTable
 * @description 可拖拽和编辑的表格
 * @param serviceName
 */
const SearchDragSortEditableTable: (serviceName: string) => any = (serviceName) =>
  extend({
    className: 'SearchDragSortEditableTable',
    mixins: [SearchEditableTable(serviceName), SearchRowDragSortTable(serviceName)],
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
      /**
       * fetchData
       */
      fetchData() {
        return this.$fetchDataSearchEditableCellTable();
      },
      /**
       * renderSearchTable
       */
      renderSearchTable() {
        return this.$renderSearchTableSearchEditableCellTable();
      },
      onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
        const set = Array.from(
          new Set([...this.$data.$tableRowComponentReducers, 'useRowDragSortRow']),
        );

        const existsEditable = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditable) {
          return [...Array.from(set), 'useEditableTableRow'];
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
          return [...Array.from(set), 'useEditableTableCell'];
        }

        return Array.from(set);
      },
      /**
       * onDragSortBody
       * @description
       */
      onDragSortBody(): RowDragSortBodyConfig {
        return {
          canDrag: () => !this.isTableEditor,
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
          canDrag: () => !this.isTableEditor,
        };
      },
    },
  });

export default SearchDragSortEditableTable;
