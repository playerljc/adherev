import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import classNames from 'classnames';
import { CSSProperties, defineComponent } from 'vue';
import { array, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-playground-table';

interface IColumnItem {
  title?: string;
  className?: string;
  style?: CSSProperties;
  align?: string;
  width?: string | null;
  key: string;
  dataIndex: string;
  valign?: string;
  slot?: string;
}

const tableProps = {
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
        <tr
          // @ts-ignore
          class={`${selectorPrefix}-header`}
        >
          {props.columns.map(column => {
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
                class={classNames(
                  `${selectorPrefix}-header-column`,
                  (className || '').split(/\s+/),
                )}
                style={{
                  ...style,
                  // @ts-ignore
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
            <tr
              // @ts-ignore
              class={`${selectorPrefix}-row`}
              key={record[props.rowKey]}
            >
              {props.columns.map((column, columnIndex) => {
                const { dataIndex, slot, align, valign } = column;

                return (
                  <td
                    class={`${selectorPrefix}-cell`}
                    key={column.key}
                    // @ts-ignore
                    valign={valign || 'top'}
                    style={{
                      // @ts-ignore
                      textAlign: align || 'left',
                    }}
                  >
                    {/*@ts-ignore*/}
                    <ConditionalRender conditional={!!slot}>
                      {{
                        default: () =>
                          slot && slots[slot]
                            ? // @ts-ignore
                              slots[slot]({
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
      <div
        // @ts-ignore
        class={selectorPrefix}
      >
        <table
          // @ts-ignore
          class={classNames(`${selectorPrefix}-inner`, (props.tableClassName || '').split(/\s+/))}
          style={props.tableStyle}
        >
          {renderHeader()}
          {renderBody()}
        </table>
      </div>
    );
  },
});
