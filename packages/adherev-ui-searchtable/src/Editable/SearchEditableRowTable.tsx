import moment from 'moment';

import Util from '@baifendian/adherev-util';

import { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';
import SearchEditableCellTable from './SearchEditableCellTable';

const {
  _util: { extend },
} = Util;

/**
 * SearchEditableRowTable
 * @description 行可编辑的SearchTable
 * @param serviceName
 */
export default (serviceName) =>
  extend({
    className: 'SearchEditableRowTable',
    mixins: [SearchEditableCellTable(serviceName)],
    data() {
      return {
        $rowConfigReducers: [(...params) => this.rowEditableReducer(...params)],
        editorRowId: '',
      };
    },
    methods: {
      /**
       * rowEditableReducer
       * @description 可编辑row的处理
       * @param params
       */
      rowEditableReducer(params: {
        rowIndex: number;
        record: { [prop: string]: any };
        columns: ColumnTypeExt[];
        rowConfig: RowConfig;
      }): RowConfig {
        const { rowConfig, rowIndex, columns, record } = params;

        if (this.onEditorRow) {
          rowConfig.$editable = this.onEditorRow({
            rowIndex,
            record,
            columns,
          });
        }

        return rowConfig;
      },
      /**
       * onEditorRow
       * @param params
       */
      onEditorRow(params: {
        columns: ColumnTypeExt[];
        rowIndex: number;
        record: any;
      }): RowEditableConfig {
        return {
          editable: true,
        };
      },
      /**
       * onEditorCell
       * @param record
       * @param editorConfig
       */
      onEditorCell({ record, editorConfig }) {
        if (editorConfig) {
          editorConfig.useTrigger = false;

          if (record[this.getRowKey()] === this.editorRowId) {
            editorConfig.defaultStatus = 'edit';
          }
        }
      },
      /**
       * fetchData
       */
      fetchData() {
        return this.$fetchDataSearchTableImpl().then((res) => {
          this.editorRowId = '';

          return res;
        });
      },
      /**
       * updateEditableCellRowData
       * @description 更新可编辑单元格一行的数据
       * @param values 一行的数据
       * @param record
       * @return Promise<void>
       */
      updateEditorCellRowData({
        values,
        record,
        rowIndex,
      }: {
        values: { [props: string]: any };
        record: { [props: string]: any };
        rowIndex: number;
      }): Promise<void> {
        return new Promise((resolve) => {
          debugger;

          const dataSource = this.getData() || [];
          const rowKey = this.getRowKey();
          const keys = Object.keys(values);

          keys.forEach((valueDataIndex) => {
            let value = values[valueDataIndex];
            if (value instanceof moment) {
              value = value.valueOf();
            }

            const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
            if (recordItem) {
              const dataIndex = valueDataIndex.substring(
                0,
                valueDataIndex.lastIndexOf(`_${rowIndex}`),
              );
              recordItem[dataIndex] = value;
            }
          });

          this.receiveDataMutation(dataSource);

          this.$nextTick(() => resolve());
        });
      },
    },
  });
