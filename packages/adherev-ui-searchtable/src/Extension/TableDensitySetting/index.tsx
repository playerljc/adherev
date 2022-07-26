import { CreateElement } from 'vue';
import { Popover } from 'ant-design-vue';

import { TableDensity } from '../../types';

// @ts-ignore
import Setting from './setting';

export default {
  name: 'adv-searchtable-tabledensity',
  inject: ['getContext'],
  methods: {
    onReset() {
      this.getContext().tableDensity = TableDensity.DEFAULT;
    },
    onChange(density) {
      this.getContext().tableDensity = density;
    },
  },
  render(h: CreateElement) {
    return (
      <Popover
        // @ts-ignore
        content={
          // @ts-ignore
          <Setting
            density={this.getContext?.()?.tableDensity || TableDensity.DEFAULT}
            onReset={this.onReset}
            onChange={this.onChange}
          />
        }
        placement="bottomRight"
        trigger="click"
        getPopupContainer={(el) => el.parentElement}
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
};
