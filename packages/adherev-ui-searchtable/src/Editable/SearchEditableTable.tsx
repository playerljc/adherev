import Util from '@baifendian/adherev-util';

import { ColumnTypeExt, RowConfig, RowEditableConfig } from '../types';
import SearchEditableCellTable from './SearchEditableCellTable';

const {
  _util: { extend },
} = Util;

/**
 * SearchEditableTable
 * @description 表格整体可编辑的SearchTable
 * @param serviceName
 */
export default (serviceName) =>
  extend({
    className: 'SearchEditableTable',
    mixins: [SearchEditableCellTable(serviceName)],
    data() {
      return {
        $rowConfigReducers: [(...params) => this.rowEditableReducer(...params)],
        isTableEditor: false,
      };
    },
    methods: {
      onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
        const existsEditor = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditor) {
          return Array.from(
            new Set([...this.$data.$tableRowComponentReducers, 'useEditableTableRow']),
          );
        }

        return this.$data.$tableRowComponentReducers;
      },

      onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
        const existsEditor = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditor) {
          return Array.from(
            new Set([...this.$data.$tableCellComponentReducers, 'useEditableTableCell']),
          );
        }

        return this.$data.$tableCellComponentReducers;
      },

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

          if (this.isTableEditor) {
            editorConfig.defaultStatus = 'edit';
          }
        }
      },
      /**
       * setFieldValues
       */
      setFieldValues() {
        const form = this.getFormIns();
        form?.setFieldsValue?.(this.$arrayToValues(this.getData()));
      },
      /**
       * $arrayToValues
       * @param dataSource
       */
      $arrayToValues(dataSource: { [prop: string]: any }[]): { [prop: string]: any } {
        const columns = this.getTableColumns();

        return (dataSource || []).reduce((values, record, currentIndex) => {
          columns.forEach(({ dataIndex, $editable }) => {
            if (dataIndex in record && $editable && 'type' in $editable) {
              // 这个表格表单数据key的生成规则
              const key = `${dataIndex}_${currentIndex}`;

              values[key] = this.valueToFormItemValue({
                type: $editable.type,
                record,
                dataIndex,
              });
            }
          });
          return values;
        }, {});
      },
      /**
       * $valuesToArray
       * @param values
       */
      $valuesToArray(values: { [prop: string]: any }): { [prop: string]: any }[] {
        /**
         * name_0:1
         * sex_0:2
         * address_0:3
         *
         * name_1:4
         * sex_1:5
         * address_1:6
         *
         * [
         *   {
         *     name:1,
         *     sex:2,
         *     address:3
         *   },
         *   {
         *     name:4,
         *     sex:5,
         *     address:6
         *   }
         * ]
         */
        return Object.keys(values).reduce<{ [props: string]: any }[]>((array, key) => {
          const currentIndex = parseInt(key.substring(key.lastIndexOf('_') + 1));

          const prop = key.substring(0, key.lastIndexOf('_'));

          if (!array[currentIndex]) {
            array[currentIndex] = {};
          }

          const record = array[currentIndex];
          record[prop] = values[key];

          return array;
        }, []);
      },
      /**
       * fetchData
       */
      fetchData() {
        return this.$fetchDataSearchTableImpl().then((res) => {
          this.isTableEditor = false;

          return res;
        });
      },
      /**
       * updateEditorData
       * @description 更新可编辑的所有单元格
       * @return Promise<void>
       */
      updateEditorData(changeData: { [props: string]: any }): Promise<void> {
        return new Promise<void>((resolve) => {
          // 原始的数据
          const dataSource = this.getData();
          // 改变的数据
          const changeDataSource = this.$valuesToArray(changeData);

          this[`${this.getServiceName()}${this.getFetchListPropNameToFirstUpper()}`][
            this.getDataKey()
          ] = dataSource.map((srcRecord, _index) => ({
            // 原始数据和改变的数据做merge
            ...srcRecord,
            ...changeDataSource[_index],
          }));

          this.$nextTick(() => resolve());
        });
      },
    },
  });
