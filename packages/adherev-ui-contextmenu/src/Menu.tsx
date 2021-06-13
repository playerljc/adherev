// @ts-ignore
import classNames from 'classnames';

import { IData } from './types';
// @ts-ignore
import MenuItem from './MenuItem';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

export default {
  props: {
    data: {
      type: Array,
      default: [],
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
      // @ts-ignore
      const {
        config: { x, y },
        // @ts-ignore
      } = this.getContext();

      const {
        // @ts-ignore
        $refs: { el },
      } = this;

      const menuWidth = el?.offsetWidth;
      const menuHeight = el?.offsetHeight;

      const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
      const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

      console.log(
        'x',
        x,
        'y',
        y,
        'menuWidth',
        menuWidth,
        'menuHeight',
        menuHeight,
        'clientWidth',
        clientWidth,
        'clientHeight',
        clientHeight,
      );

      // @ts-ignore
      if (clientWidth - x < menuWidth) {
        // @ts-ignore
        x = clientWidth - menuWidth;
      }

      // @ts-ignore
      if (clientHeight - y < menuHeight) {
        // @ts-ignore
        y = clientHeight - menuHeight;
      }

      // @ts-ignore
      el?.style.left = `${x}px`;

      // @ts-ignore
      el?.style.top = `${y}px`;
    },
    renderItems(h) {
      // @ts-ignore
      const { data = [] } = this;

      return data.map((item) => (
        // @ts-ignore
        <MenuItem
          key={item.id}
          // @ts-ignore
          data={item}
        />
      ));
    },
  },
  computed: {
    getStyle() {
      // @ts-ignore
      const { styleName } = this;
      // @ts-ignore
      const { width } = this.getContext().config;

      return `${styleName}width:${width}px;z-index:${99999 * 2 + 1}`;
    },
    getClass() {
      // @ts-ignore
      const { className } = this;

      return classNames(
        selectorPrefix,
        // @ts-ignore
        (className || '').split(' '),
      );
    },
  },
  render(h) {
    return (
      // @ts-ignore
      <ul
        // @ts-ignore
        class={this.getClass}
        // @ts-ignore
        style={this.getStyle}
        ref="el"
      >
        {/*@ts-ignore*/}
        {this.renderItems(h)}
      </ul>
    );
  },
};
