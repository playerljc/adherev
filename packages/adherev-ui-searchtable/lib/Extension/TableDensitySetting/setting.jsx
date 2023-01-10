import Intl from '@baifendian/adherev-util-intl';
import { selectorPrefix } from '../../SearchTable';
import { TableDensity } from '../../types';
const Setting = {
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
    render(h) {
        return (<div class={`${selectorPrefix}-table-density-setting`}>
        <div class={`${selectorPrefix}-table-density-setting-header`}>
          <a onClick={() => this.$emit('reset')}>{Intl.tv('重置')}</a>
        </div>

        <div class={`${selectorPrefix}-table-density-setting-body`}>
          <ul>
            {this.$data.$config.map((t) => (<li key={t.value} class={this.density === t.value ? 'active' : ''} onClick={() => this.$emit('change', t.value)}>
                {t.label}
              </li>))}
          </ul>
        </div>
      </div>);
    },
};
export default Setting;
//# sourceMappingURL=setting.jsx.map