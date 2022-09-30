import { VNode, defineComponent } from 'vue';
import { array } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import Collapse, { collapseProps } from './Collapse';
import Table from './Table';

const selectPrefix = 'adherev-ui-playground-props';

export interface IDataItemType {
  params: string | VNode;
  desc: string | VNode;
  type: string | VNode;
  defaultVal: string | VNode;
}

export const propsProps = {
  ...collapseProps,
  data: array<IDataItemType>().def([]),
};

export default defineComponent({
  name: 'adv-playground-props',
  props: propsProps,
  setup(props, {}) {
    const columns = [
      {
        title: Intl.tv('参数'),
        key: 'params',
        dataIndex: 'params',
        width: '20%',
      },
      {
        title: Intl.tv('说明'),
        key: 'desc',
        dataIndex: 'desc',
        width: '50%',
      },
      {
        title: Intl.tv('类型'),
        key: 'type',
        dataIndex: 'type',
        width: '15%',
      },
      {
        title: Intl.tv('默认值'),
        key: 'defaultVal',
        dataIndex: 'defaultVal',
        width: '15%',
      },
    ];

    return () => {
      const _collapseProps = {};

      for (const p in collapseProps) {
        _collapseProps[p] = props[p];
      }

      return (
        // @ts-ignore
        <Collapse {..._collapseProps}>
          <div
            // @ts-ignore
            class={selectPrefix}
          >
            {/*@ts-ignore*/}
            <Table
              columns={columns}
              dataSource={props.data.map((t, i) => ({ ...t, id: `${i + 1}` }))}
              rowKey="id"
            >
              {{
                // @ts-ignore
                bodyCell: ({ text, column }) => {
                  if (column.dataIndex === 'type') {
                    return (
                      <code
                        // @ts-ignore
                        class={`${selectPrefix}-highlight`}
                      >
                        {text}
                      </code>
                    );
                  }

                  if (column.dataIndex === 'defaultVal') {
                    return <code>{text || '-'}</code>;
                  }

                  return null;
                },
              }}
            </Table>
          </div>
        </Collapse>
      );
    };
  },
});
