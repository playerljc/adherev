import { Form } from 'ant-design-vue';
// import cloneDeep from 'lodash.clonedeep';
// import mergeWith from 'lodash.mergewith';
import moment from 'moment';

// import Vue from 'vue';
import Util from '@baifendian/adherev-util';

// import { selectorPrefix } from '@/SearchTable';
import SearchTableImplement from '../SearchTableImplement';
import { ColumnEditableConfig, ColumnTypeExt, FormItemType, RowEditableConfig } from '../types';

const {
  _util: { extend },
} = Util;

// Vue.config.optionMergeStrategies.data = (toVal, fromVal) => {
//   if (fromVal && toVal) {
//     return () => {
//       const fromValue = fromVal();
//       const toValue = toVal();
//
//       return mergeWith(fromValue, toValue, (objValue, srcValue) => {
//         if (Array.isArray(objValue) && Array.isArray(srcValue)) {
//           return Array.from(new Set([...objValue, ...srcValue]));
//         }
//       });
//     };
//   }
//
//   if (fromVal) {
//     return fromVal;
//   }
//
//   if (toVal) {
//     return toVal;
//   }
// };

/**
 * SearchEditableCellTable
 * @description 单元格可编辑的SearchTable
 * @param serviceName
 */
export default (serviceName) =>
  extend({
    className: 'SearchEditableCellTable',
    mixins: [SearchTableImplement(serviceName)],
    provide() {
      return {
        getFormIns: this.getFormIns,
      };
    },
    data() {
      return {
        $cellConfigReducers: [(...params) => this.cellEditableReducer(...params)],
        $valueToFormItemValueMap: new Map<
          string,
          (params: { record: { [prop: string]: any }; dataIndex: string }) => any
        >([
          [
            'rangePicker',
            ({ record, dataIndex }) => {
              let value = record?.[dataIndex as string];
              return Array.isArray(value) && value.length === 2
                ? [moment(value[0]), moment(value[1])]
                : [moment(), moment()];
            },
          ],
          [
            'datePicker',
            ({ record, dataIndex }) => {
              let value = record?.[dataIndex as string];
              return moment(value);
            },
          ],
          [
            'timePicker',
            ({ record, dataIndex }) => {
              let value = record?.[dataIndex as string];
              return moment(value);
            },
          ],
        ]),
        form: this.$form.createForm(this, { name: 'SearchEditableCellTableForm' }),
      };
    },
    methods: {
      /**
       * onTableRowComponentReducers
       * @param columns
       */
      onTableRowComponentReducers(columns: ColumnTypeExt[]): string[] {
        const existsEditable = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditable) {
          return Array.from(new Set([...this.$data.$tableRowComponentReducers, 'useEditableRow']));
        }

        return this.$data.$tableRowComponentReducers;
      },
      /**
       * onTableCellComponentReducers
       * @param columns
       */
      onTableCellComponentReducers(columns: ColumnTypeExt[]): string[] {
        const existsEditor = columns.some(
          (column) => '$editable' in column && column.$editable?.editable,
        );

        if (existsEditor) {
          return Array.from(
            new Set([...this.$data.$tableCellComponentReducers, 'useEditableCell']),
          );
        }

        return this.$data.$tableCellComponentReducers;
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
          editable: false,
        };
      },
      /**
       * onEditorCell
       * @param params
       */
      onEditorCell(params: {
        rowIndex: number;
        editorConfig: ColumnEditableConfig;
        record: any;
      }) {},
      /**
       * cellEditableReducer
       * @description 可编辑单元格的onCell处理
       * @param params
       */
      cellEditableReducer(params: {
        rowIndex: number;
        column: ColumnTypeExt;
        record: { [prop: string]: any };
        columns: ColumnTypeExt[];
      }): ColumnTypeExt {
        const { rowIndex, column, record } = params;

        // 如果设置了$editable则调用onEditorCell方法对每个cell进行props注入
        if ('$editable' in column && column.$editable?.editable && this.onEditorCell) {
          this.onEditorCell({
            rowIndex,
            editorConfig: column.$editable,
            record: { ...record },
          });

          return column;
        }

        return column;
      },
      /**
       * valueToFormItemValue
       * @description 值和表单值的转换
       */
      valueToFormItemValue({
        type,
        record,
        dataIndex,
      }: {
        type: FormItemType;
        record: { [prop: string]: any };
        dataIndex: string;
      }) {
        const item = this.$data.$valueToFormItemValueMap.get(type as string);

        return item ? item?.({ record, dataIndex }) : record?.[dataIndex as string];
      },
      /**
       * updateEditorCellDate
       * @description 更新可编辑单元格的数据
       * @param record 行数据
       * @param dataIndex 列索引
       * @param value 更新的值
       * @return Promise<void>
       */
      updateEditorCellDate({
        record,
        dataIndex,
        value,
      }: {
        record: { [props: string]: any };
        dataIndex: string;
        value: any;
      }): Promise<void> {
        return new Promise((resolve) => {
          if (record[dataIndex] === value) {
            resolve();
            return;
          }

          const dataSource = this.getData();
          const rowKey = this.getRowKey();

          const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
          if (recordItem) {
            recordItem[dataIndex] = value;

            this.receiveDataMutation(dataSource);

            this.$nextTick(() => resolve());
            return;
          }

          resolve();
        });
      },
      /**
       * updateEditorCellDateData
       * @description 更新日期类型可编辑单元格的数据
       * @param record
       * @param dataIndex
       * @param value
       * @return Promise<void>
       */
      updateEditorCellDateData({
        record,
        dataIndex,
        value,
      }: {
        record: { [props: string]: any };
        dataIndex: string;
        value: moment.Moment | null;
      }): Promise<void> {
        return new Promise((resolve) => {
          if (record[dataIndex] === value?.valueOf()) {
            resolve();
            return;
          }

          const dataSource = this.getData();
          const rowKey = this.getRowKey();

          const recordItem = dataSource.find((t) => t[rowKey] === record[rowKey]);
          if (recordItem) {
            recordItem[dataIndex] = value?.valueOf();

            this.receiveDataMutation(dataSource);

            this.$nextTick(() => resolve());
            return;
          }

          resolve();
        });
      },
      /**
       * renderSearchTable
       * @param h
       */
      renderSearchTable(h) {
        const children = this.$renderSearchTableSearchTable(h);
        return <Form form={this.form}>{children}</Form>;
      },
      /**
       * getFormIns
       * @description 获取form对象实例
       */
      getFormIns() {
        return this.form;
      },
    },
  });
