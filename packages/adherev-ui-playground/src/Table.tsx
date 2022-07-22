import classNames from 'classnames';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

const selectorPrefix = 'adherev-ui-playground-table';

export default {
  name: 'adv-playground-table',
  props: {
    tableClassName: {
      type: String,
      default: '',
    },
    tableStyle: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    rowKey: {
      type: String,
    },
  },
  methods: {
    renderHeader(h) {
      const { columns } = this;

      return (
        <thead>
          <tr class={`${selectorPrefix}-header`}>
            {columns.map((column) => {
              const { className, style, align } = column;
              const props = {
                key: column.key,
              };

              // @ts-ignore
              column.width && (props.width = column.width);

              return (
                <th
                  {...{ props }}
                  class={classNames(
                    `${selectorPrefix}-header-column`,
                    (className || '').split(/\s+/),
                  )}
                  style={`text-align:${align || 'left'};${style}`}
                >
                  {column.title || '-'}
                </th>
              );
            })}
          </tr>
        </thead>
      );
    },
    renderBody(h) {
      const { columns, dataSource, rowKey, $scopedSlots } = this;

      return (
        <tbody>
          {dataSource.map((record, rowIndex: number) => {
            return (
              <tr class={`${selectorPrefix}-row`} key={record[rowKey]}>
                {columns.map((column, columnIndex) => {
                  const { dataIndex, slot, align, valign } = column;

                  return (
                    <td
                      class={`${selectorPrefix}-cell`}
                      key={column.key}
                      valign={valign || 'top'}
                      style={`text-align:${align || 'left'};`}
                    >
                      <ConditionalRender conditional={!!slot}>
                        {$scopedSlots[slot]
                          ? $scopedSlots[slot]({
                              value: record[dataIndex],
                              record,
                              rowIndex,
                              columnIndex,
                            })
                          : null}
                        <span slot="noMatch">{record[dataIndex] || '-'}</span>
                      </ConditionalRender>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      );
    },
  },
  render(h) {
    const { tableClassName, tableStyle } = this;

    return (
      <div class={selectorPrefix}>
        <table
          class={classNames(`${selectorPrefix}-inner`, tableClassName.split(/\s+/))}
          style={tableStyle}
        >
          {this.renderHeader(h)}
          {this.renderBody(h)}
        </table>
      </div>
    );
  },
};
