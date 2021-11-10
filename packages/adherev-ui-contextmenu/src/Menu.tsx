import classNames from 'classnames';

import { IData } from './types';

import MenuItem from './MenuItem';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
      validator(val: Array<IData>): boolean {
        return val instanceof Array;
      },
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
      const {
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

      el?.style.left = `${x}px`;

      el?.style.top = `${y}px`;
    },
    renderItems(h) {
      const { data = [] } = this;

      return data.map((item) => <MenuItem key={item.id} data={item} />);
    },
  },
  computed: {
    getStyle() {
      const { styleName } = this;

      const { width } = this.getContext().config;

      return `${styleName}width:${width}px;z-index:${99999 * 2 + 1}`;
    },
    getClass() {
      const { className } = this;

      return classNames(
        selectorPrefix,

        (className || '').split(' '),
      );
    },
  },
  render(h) {
    return (
      <ul class={this.getClass} style={this.getStyle} ref="el">
        {this.renderItems(h)}
      </ul>
    );
  },
};
