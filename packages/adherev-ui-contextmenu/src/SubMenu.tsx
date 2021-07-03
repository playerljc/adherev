import classNames from 'classnames';

import { IData } from './types';

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
  computed: {
    getClass() {
      const { className } = this;

      return classNames(
        selectorPrefix,

        (className || '').split(' '),
      );
    },
    getStyle() {
      const { styleName } = this;

      const { width } = this.getContext().config;

      return `${styleName}width:${width}px;z-index:${99999 * 2 + 1}`;
    },
  },
  methods: {
    renderItems(h) {
      const { data = [] } = this;

      return data.map((item) => <MenuItem key={item.id} data={item} />);
    },
  },
  render(h) {
    return (
      <ul class={this.getClass} style={this.getStyle}>
        {this.renderItems(h)}
      </ul>
    );
  },
};
