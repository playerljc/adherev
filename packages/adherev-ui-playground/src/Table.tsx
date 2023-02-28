import classNames from 'classnames';
import { CSSProperties, defineComponent } from 'vue';
import { array, object, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import { IColumnItem } from './types';

const selectorPrefix = 'adherev-ui-playground-table';

export const tableProps = {
  tableClassName: string().def(''),
  tableStyle: object<CSSProperties>().def({}),
  columns: array<IColumnItem>().def([]),
  dataSource: array<object>().def([]),
  rowKey: string().def(''),
};

export default defineComponent({
  name: 'adv-playground-table',
  props: tableProps,
  setup(props, { slots }) {
    const renderHeader = (): JSX.Element => (
      <thead>
        <tr class={`${selectorPrefix}-header`}>
          {props.columns.map((column) => {
            const { className, style, align } = column;

            const defaultProps: {
              key: string;
              width?: string | number;
            } = {
              key: column.key,
            };

            column.width && (defaultProps.width = column.width);

            return (
              <th
                {...defaultProps}
                class={classNames(`${selectorPrefix}-header-column`, className || '' || '')}
                // @ts-ignore
                style={{
                  ...style,
                  textAlign: align || 'left',
                }}
              >
                {column.title || '-'}
              </th>
            );
          })}
        </tr>
      </thead>
    );

    const renderBody = (): JSX.Element => (
      <tbody>
        {props.dataSource.map((record: any, rowIndex: number) => {
          return (
            <tr class={`${selectorPrefix}-row`} key={record[props.rowKey]}>
              {props.columns.map((column, columnIndex) => {
                const { dataIndex, slot, align, valign } = column;

                return (
                  <td
                    class={`${selectorPrefix}-cell`}
                    key={column.key}
                    // @ts-ignore
                    valign={valign || 'top'}
                    // @ts-ignore
                    style={{
                      textAlign: align || 'left',
                    }}
                  >
                    <ConditionalRender conditional={!!slot}>
                      {{
                        default: () =>
                          slot && slots[slot]
                            ? slots?.[slot]?.({
                                value: record[dataIndex],
                                record,
                                rowIndex,
                                columnIndex,
                              })
                            : null,
                        noMatch: () => <span>{record[dataIndex] || '-'}</span>,
                      }}
                    </ConditionalRender>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );

    return () => (
      <div class={selectorPrefix}>
        <table
          class={classNames(`${selectorPrefix}-inner`, props.tableClassName || '' || '')}
          style={props.tableStyle}
        >
          {renderHeader()}
          {renderBody()}
        </table>
      </div>
    );
  },
});
