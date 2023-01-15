import { arrayMoveImmutable } from 'array-move';

import Util from '@baifendian/adherev-util';

import SearchTableImplement from '../../SearchTableImplement';
import {
  BodyConfig,
  ColumnRowDragSortConfig,
  ColumnTypeExt,
  RowConfig,
  RowDragSortBodyConfig,
  RowDragSortRowConfig,
} from '../../types';

const {
  _util: { extend },
} = Util;

/**
 * SearchRowDragSortTable
 * @description 可以进行行拖拽排序的表格
 * @param serviceName
 */
export default (serviceName) =>
  extend({
    className: 'SearchRowDragSortTable',
    mixins: [SearchTableImplement(serviceName)],
    data() {
      return {
        $bodyConfigReducers: [(...params) => this.bodyDragSortReducer(...params)],
        $rowConfigReducers: [(...params) => this.rowDragSortReducer(...params)],
        $cellConfigReducers: [(...params) => this.cellDragSortReducer(...params)],
      };
    },
    methods: {
      onTableBodyComponentReducers(columns: ColumnTypeExt[]): string[] {
        return Array.from(
          new Set([...this.$data.$tableBodyComponentReducers, 'useDragSortRowBody']),
        );
      },

      onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
        return Array.from(new Set([...this.$data.$tableRowComponentReducers, 'useRowDragSortRow']));
      },

      onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
        return Array.from(
          new Set([...this.$data.$tableCellComponentReducers, 'useRowDragSortCell']),
        );
      },

      /**
       * bodyDragSortReducer
       * @param params
       */
      bodyDragSortReducer(params): BodyConfig {
        return {
          $bodyDragSort: this.onDragSortBody(),
        };
      },

      /**
       * rowDragSortReducer
       * @param params
       */
      rowDragSortReducer(params: {
        rowIndex: number;
        record: { [prop: string]: any };
        columns: ColumnTypeExt[];
        rowConfig: RowConfig;
      }): RowConfig {
        const { rowConfig, rowIndex, columns, record } = params;

        rowConfig.$rowDragSort = this.onDragSortRow({
          rowIndex,
          record: { ...record },
          columns,
        });

        return rowConfig;
      },

      /**
       * cellDragSortReducer
       * @param params
       */
      cellDragSortReducer(params: {
        rowIndex: number;
        column: ColumnTypeExt;
        record: { [prop: string]: any };
        columns: ColumnTypeExt[];
      }): ColumnTypeExt {
        const { rowIndex, column, record, columns } = params;

        column.$rowDragSort = this.onDragSortCell({
          rowIndex,
          record: { ...record },
          columns,
        });

        return column;
      },

      /**
       * onDragSortBody
       * @description
       */
      onDragSortBody(): RowDragSortBodyConfig {
        return {};
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
        return {};
      },

      /**
       * onDragSortCell
       * @param params
       */
      onDragSortCell(params: {
        rowIndex: number;
        record: { [prop: string]: any };
        columns: ColumnTypeExt[];
      }): ColumnRowDragSortConfig {
        return {};
      },
      /**
       * moveRow
       * @description 换行
       * @param fromIndex
       * @param toIndex
       */
      moveRow(fromIndex: number, toIndex: number) {
        return new Promise<void>((resolve) => {
          this.receiveDataMutation(arrayMoveImmutable(this.getData(), fromIndex, toIndex));

          this.$nextTick(() => {
            resolve();
          });
        });
      },
    },
  });
