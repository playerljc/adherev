import classNames from 'classnames';
import { PropType, VNode } from 'vue';

import MenuItem from './MenuItem';
import { IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

const Menu: any = {
  props: {
    data: {
      type: Array as PropType<IData[]>,
      default: () => [],
    },
    className: {
      type: String,
      default: '',
    },
    styleName: {
      type: String,
      default: '',
    },
  },
  inject: ['getContext'],
  methods: {
    mount() {
      let {
        config: { x, y },
      } = this.getContext();

      const {
        $refs: { el },
      } = this;

      const menuWidth = el?.offsetWidth;
      const menuHeight = el?.offsetHeight;

      const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
      const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

      // console.log(
      //   'x',
      //   x,
      //   'y',
      //   y,
      //   'menuWidth',
      //   menuWidth,
      //   'menuHeight',
      //   menuHeight,
      //   'clientWidth',
      //   clientWidth,
      //   'clientHeight',
      //   clientHeight,
      // );

      if (clientWidth - x < menuWidth) {
        x = clientWidth - menuWidth;
      }

      if (clientHeight - y < menuHeight) {
        y = clientHeight - menuHeight;
      }

      (el as HTMLElement).style.left = `${x}px`;

      (el as HTMLElement).style.top = `${y}px`;
    },
    renderItems(h): VNode[] {
      const { data = [] } = this;

      // @ts-ignore
      return data.map((item) => <MenuItem key={item.id} data={item} />);
    },
  },
  computed: {
    getStyle(): string {
      const { styleName } = this;

      const { width } = this.getContext().config;

      return `${styleName}width:${width}px;z-index:${99999 * 2 + 1}`;
    },
    getClass(): string {
      const { className } = this;

      return classNames(selectorPrefix, className || '');
    },
  },
  render(h): VNode {
    return (
      <ul class={this.getClass} style={this.getStyle} ref="el">
        {this.renderItems(h)}
      </ul>
    );
  },
};

export default Menu;
