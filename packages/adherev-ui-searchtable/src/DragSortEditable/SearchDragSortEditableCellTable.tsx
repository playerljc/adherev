import Util from '@baifendian/adherev-util';

import SearchRowDragSortTable from '../DragSort/RowDragSort/SearchRowDragSortTable';
import SearchEditableCellTable from '../Editable/SearchEditableCellTable';
import { ColumnTypeExt, RowDragSortBodyConfig, RowDragSortRowConfig } from '../types';

const {
  _util: { extend },
} = Util;

/**
 * SearchDragSortEditableCellTable
 * @description 可拖拽和编辑单元格的表格
 * @param serviceName
 */
const SearchDragSortEditableCellTable: (serviceName: string) => any = (serviceName) =>
  extend({
    className: 'SearchDragSortEditableCellTable',
    mixins: [SearchEditableCellTable(serviceName), SearchRowDragSortTable(serviceName)],
    data() {
      return {
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
      /**
       * onTableRowComponentReducers
       * @param columns
       */
      onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
        const set = new Set([...this.$data.$tableRowComponentReducers, 'useRowDragSortRow']);

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
          canDrag: () => !this.activeValue,
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
          canDrag: () => !this.activeValue,
        };
      },
    },
  });

export default SearchDragSortEditableCellTable;
