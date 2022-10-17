import { Checkbox } from 'ant-design-vue';
import { PropType, defineComponent } from 'vue';
import Draggable from 'vuedraggable';

import Intl from '@baifendian/adherev-util-intl';

import { selectorPrefix } from '../../searchtable';
import { IColumnSetting } from '../../types';

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<IColumnSetting[]>,
      default: () => [],
    },
  },
  emits: ['showColumns', 'reset', 'sortEnd', 'displayColumn'],
  computed: {
    showColumns() {
      return this.columns.every((column) => column.display);
    },
  },
  methods: {
    onShowColumns(e) {
      this.$emit('showColumns', e.target.checked);
    },
    onReset() {
      this.$emit('reset');
    },
    onEnd() {
      const map = new Map<string, number>();

      this.columns.forEach((column, index) => {
        map.set(column.key, index);
      });

      this.$emit('sortEnd', map);
    },
    onChange(column, e) {
      this.$emit('displayColumn', { column, checked: e.target.checked });
    },
  },
  render() {
    return (
      <div class={`${selectorPrefix}-column-setting`}>
        <div class={`${selectorPrefix}-column-setting-header`}>
          <div>
            {/*@ts-ignore*/}
            <Checkbox checked={this.showColumns} onChange={this.onShowColumns}>
              {Intl.tv('列展示')}
            </Checkbox>
          </div>

          <div>
            <a onClick={this.onReset}>{Intl.tv('重置')}</a>
          </div>
        </div>

        <div class={`${selectorPrefix}-column-setting-body`}>
          {/*@ts-ignore*/}
          <Draggable
            tag="ul"
            list={this.columns}
            itemKey={(item) => item.dataIndex || item.key}
            // @ts-ignore
            handle={`.${selectorPrefix}-column-setting-handle`}
            onEnd={this.onEnd}
            v-slots={{
              item: ({ element: column }) => (
                <li key={column.dataIndex || column.key}>
                  <img
                    class={`${selectorPrefix}-column-setting-handle`}
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1pYyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjY2MiIGQ9Ik0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTJzLjktMiAyLTJzMiAuOSAyIDJ6bS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6bTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTJzLTIgLjktMiAycy45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyczItLjkgMi0ycy0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMnMyLS45IDItMnMtLjktMi0yLTJ6Ij48L3BhdGg+PC9zdmc+DQo="
                    alt=""
                  />
                  {/*@ts-ignore*/}
                  <Checkbox checked={column.display} onChange={(e) => this.onChange(column, e)}>
                    {column.title}
                  </Checkbox>
                </li>
              ),
            }}
          />
        </div>
      </div>
    );
  },
});
