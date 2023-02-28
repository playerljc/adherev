import { defineComponent } from 'vue';
import { string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../SearchTable';
import { TableDensity } from '../../types';

export default defineComponent({
  props: {
    density: string().def(TableDensity.DEFAULT),
  },
  emits: ['reset', 'change'],
  setup(props, { emit }) {
    const config = [
      {
        label: Intl.tv('缺省'),
        value: TableDensity.DEFAULT,
      },
      {
        label: Intl.tv('中等'),
        value: TableDensity.MIDDLE,
      },
      {
        label: Intl.tv('紧凑'),
        value: TableDensity.SMALL,
      },
    ];

    return () => (
      <div class={`${selectorPrefix}-table-density-setting`}>
        <div class={`${selectorPrefix}-table-density-setting-header`}>
          <a onClick={() => emit('reset')}>{Intl.tv('重置')}</a>
        </div>

        <div class={`${selectorPrefix}-table-density-setting-body`}>
          <ul>
            {config.map((t) => (
              <li
                key={t.value}
                class={props.density === t.value ? 'active' : ''}
                onClick={() => {
                  emit('change', t.value)
                }}
              >
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  },
});
