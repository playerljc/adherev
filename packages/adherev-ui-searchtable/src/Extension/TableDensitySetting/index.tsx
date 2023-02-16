import { Popover } from 'ant-design-vue';
import { defineComponent, inject } from 'vue';
import { string } from 'vue-types';

import { TableDensity } from '../../types';
import Setting from './setting';

export default defineComponent({
  name: 'adv-searchtable-tabledensity',
  props: {
    density: string().def(TableDensity.DEFAULT),
  },
  // emits: ['reset', 'change'],
  setup() {
    const context = inject<any>('getContext')?.()?.context;

    const onReset = () => {
      context.tableDensity = TableDensity.DEFAULT;
    };

    const onChange = (density) => {
      context.tableDensity = density;
    };

    return () => (
      <Popover
        content={
          <Setting
            density={context?.tableDensity || TableDensity.DEFAULT}
            onReset={onReset}
            onChange={onChange}
            // onReset={() => emit('reset')}
            // onChange={(...params) => emit('change', ...params)}
          />
        }
        placement="bottomRight"
        trigger="click"
        getPopupContainer={(el) => el?.parentElement as HTMLElement}
      >
        <a>
          <img
            alt=""
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1mbHVlbnQiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjODg4ODg4IiBkPSJNOC41IDFhLjUuNSAwIDAgMSAuNS41djEzYS41LjUgMCAwIDEtMSAwdi0xM2EuNS41IDAgMCAxIC41LS41Wk03IDNIMi41YS41LjUgMCAwIDAgMCAxSDdWM1ptMCAzSDIuNWEuNS41IDAgMCAwIDAgMUg3VjZabTAgM0gyLjVhLjUuNSAwIDAgMCAwIDFIN1Y5Wm0wIDNIMi41YS41LjUgMCAwIDAgMCAxSDd2LTFabTUuNSAwSDEwVjloMi41YTEuNSAxLjUgMCAwIDEgMCAzWm0wLTVIMTBWNGgyLjVhMS41IDEuNSAwIDAgMSAwIDNaIj48L3BhdGg+PC9zdmc+"
          />
        </a>
      </Popover>
    );
  },
});
