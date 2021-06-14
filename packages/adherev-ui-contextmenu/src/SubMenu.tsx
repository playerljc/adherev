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
  computed: {
    getClass() {
      // @ts-ignore
      const { className } = this;

      return classNames(
        selectorPrefix,
        // @ts-ignore
        (className || '').split(' '),
      );
    },
    getStyle() {
      // @ts-ignore
      const { styleName } = this;
      // @ts-ignore
      const { width } = this.getContext().config;

      return `${styleName}width:${width}px;z-index:${99999 * 2 + 1}`;
    },
  },
  methods: {
    renderItems(h) {
      // @ts-ignore
      const { data = [] } = this;

      return data.map((item) => (
        // @ts-ignore
        <MenuItem key={item.id} data={item} />
      ));
    },
  },
  render(h) {
    return (
      // @ts-ignore*
      <ul class={this.getClass} style={this.getStyle}>
        {/*@ts-ignore**/}
        {this.renderItems(h)}
      </ul>
    );
  },
};
