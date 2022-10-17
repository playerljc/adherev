import { defineComponent } from 'vue';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../searchtable';
import { TableDensity } from '../../types';

export default defineComponent({
  props: {
    density: {
      type: String,
      default: TableDensity.DEFAULT,
    },
  },
  emits: ['reset', 'change'],
  data() {
    return {
      $config: [
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
      ],
    };
  },
  render() {
    return (
      <div class={`${selectorPrefix}-table-density-setting`}>
        <div class={`${selectorPrefix}-table-density-setting-header`}>
          {/*@ts-ignore*/}
          <a onClick={() => this.$emit('reset')}>{Intl.tv('重置')}</a>
        </div>

        <div class={`${selectorPrefix}-table-density-setting-body`}>
          <ul>
            {this.$data.$config.map((t) => (
              <li
                key={t.value}
                class={this.density === t.value ? 'active' : ''}
                // @ts-ignore
                onClick={() => this.$emit('change', t.value)}
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
