import classNames from 'classnames';
import { PropType, VNode } from 'vue';

import MenuItem from './MenuItem';
import { IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

const SubMenu: any = {
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
  computed: {
    getClass(): string {
      const { className } = this;

      return classNames(selectorPrefix, className || '');
    },
    getStyle(): string {
      const { styleName } = this;

      const { width } = this.getContext().config;

      return `${styleName}width:${width}px;z-index:${99999 * 2 + 1}`;
    },
  },
  methods: {
    renderItems(h): VNode[] {
      const { data = [] } = this;

      // @ts-ignore
      return data.map((item) => <MenuItem key={item.id} data={item} />);
    },
  },
  render(h): VNode {
    return (
      <ul class={this.getClass} style={this.getStyle}>
        {this.renderItems(h)}
      </ul>
    );
  },
};

export default SubMenu;
