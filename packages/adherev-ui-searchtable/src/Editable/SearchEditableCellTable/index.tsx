import { Form } from 'ant-design-vue';
import dayjs from 'dayjs';
import { string } from 'vue-types';

import Util from '@baifendian/adherev-util';

import { selectorPrefix } from '../../SearchTable';
import SearchTableImplement from '../../SearchTableImplement';
import { ColumnEditableConfig, ColumnTypeExt, FormItemType, RowEditableConfig } from '../../types';

const {
  _util: { extend },
} = Util;

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
        getActiveValue: this.getActiveValue,
        setActiveValue: this.setActiveValue,
        setRowFieldValue: this.setRowFieldValue,
        setFieldValuesByDataSource: this.setFieldValuesByDataSource,
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
                ? [dayjs(value[0]), dayjs(value[1])]
                : [dayjs(), dayjs()];
            },
          ],
          [
            'datePicker',
            ({ record, dataIndex }) => {
              let value = record?.[dataIndex as string];
              return dayjs(value);
            },
          ],
          [
            'timePicker',
            ({ record, dataIndex }) => {
              let value = record?.[dataIndex as string];
              return dayjs(value);
            },
          ],
        ]),
        // form: this.$form.createForm(this, { name: 'SearchEditableCellTableForm' }),
        // 正在编辑的单元格id
        activeValue: '',
        // 表单的数据
        formData: {},
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
       * setFieldValuesByDataSource
       * @description 设置整个表单的数据
       */
      setFieldValuesByDataSource() {
        // 赋值formData
        const formData = {};

        const data = this.getData();

        data.forEach((record, rowIndex) =>
          Object.keys(record).forEach((dataIndex) => {
            const column = this?.getColumnByDataIndex(dataIndex);
            if (!column) return;

            const type = column?.$editable?.type as string;

            const name = `${dataIndex}_${rowIndex}`;

            if (['datePicker', 'timePicker'].includes(type)) {
              formData[name] = dayjs(record[dataIndex]);
            } else {
              formData[name] = record[dataIndex];
            }
          }),
        );

        console.log('formData',formData);

        this.formData = formData;
      },
      /**
       * setRowFieldValue
       * @description 设置行的调单数据
       * @param record
       * @param rowIndex
       */
      setRowFieldValue(record: any, rowIndex: number) {
        const formData = {};

        Object.keys(record).forEach((dataIndex) => {
          const column = this?.getColumnByDataIndex(dataIndex);
          if (!column) return;

          const type = column?.$editable?.type as string;

          const name = `${dataIndex}_${rowIndex}`;

          if (['datePicker', 'timePicker'].includes(type)) {
            formData[name] = dayjs(record[dataIndex]);
          } else {
            formData[name] = record[dataIndex];
          }
        });

        this.formData = formData;
      },
      /**
       * fetchData
       */
      fetchData() {
        return this.$fetchDataSearchTableImpl().then((res) => {
          this.setFieldValuesByDataSource();

          return res;
        });
      },
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
       * @param rowIndex 行索引
       * @param value 更新的值
       * @return Promise<void>
       */
      updateEditorCellDate({
        record,
        dataIndex,
        rowIndex,
        value,
      }: {
        record: { [props: string]: any };
        dataIndex: string;
        rowIndex: number;
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
        rowIndex: number;
        value: dayjs.Dayjs | null;
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
       */
      renderSearchTable() {
        return (
          <Form class={`${selectorPrefix}-form`} model={this.formData} ref="formRef">
            {this.$renderSearchTableSearchTable()}
          </Form>
        );
      },
      /**
       * setActiveValue
       * @param activeValue
       */
      setActiveValue(activeValue) {
        this.activeValue = activeValue;
      },
      /**
       * getActiveValue
       */
      getActiveValue() {
        return this.activeValue;
      },
      /**
       * getFormIns
       * @description 获取form对象实例
       */
      getFormIns() {
        return this.$refs.formRef;
      },
    },
  });
