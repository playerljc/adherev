import Intl from '@baifendian/adherev-util-intl';

import Table from './Table';
import Collapse from './Collapse';
import { propTypes } from './types';

const selectPrefix = 'adherev-ui-playground-props';

export default {
  name: 'adv-playground-props',
  props: {
    ...propTypes,
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    columns() {
      return [
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
          slot: 'type',
        },
        {
          title: Intl.tv('默认值'),
          key: 'defaultVal',
          dataIndex: 'defaultVal',
          width: '15%',
          slot: 'defaultVal',
        },
      ];
    },
  },
  components: {
    Table,
    Collapse,
  },
  render(h) {
    const scopedSlots = {
      type: ({ value }) => <code class={`${selectPrefix}-highlight`}>{value}</code>,
      defaultVal: ({ value }) => <code>{value ? value : '-'}</code>,
    };

    const props = {};
    for (const p in propTypes) {
      props[p] = this[p];
    }

    return (
      <Collapse props={{ ...props }}>
        <div class={selectPrefix}>
          <Table
            scopedSlots={scopedSlots}
            columns={this.columns}
            dataSource={this.data.map((t, i) => ({ ...t, id: `${i + 1}` }))}
            rowKey="id"
          />
        </div>
      </Collapse>
    );
  },
};
