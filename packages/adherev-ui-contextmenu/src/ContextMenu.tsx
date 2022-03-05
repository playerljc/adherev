import Vue, { VNode, PropType } from 'vue';

import { IData, IConfig, ContextMenuType } from './types';
import Menu from './Menu';

const selectorPrefix = 'adherev-ui-contextmenu';

/**
 * ContextMenuComponent
 * @class ContextMenuComponent
 * @classdesc ContextMenuComponent
 */
const ContextMenuComponent = {
  props: {
    data: {
      type: Array as PropType<IData[]>,
      default: () => [],
    },
    config: {
      type: Object as PropType<IData>,
      default: () => {},
    },
    el: {
      type: HTMLElement,
      default: () => null,
    },
  },
  provide() {
    return {
      getContext: this.getContext,
    };
  },
  computed: {
    getStyle() {
      return `z-index: ${9999 * 2}`;
    },
  },
  methods: {
    getContext() {
      return {
        config: this.config,
        el: this.el,
      };
    },
    mount() {
      this.$refs.menuIns?.mount();
    },
    onClick(e) {
      e.stopPropagation();

      this.$destroy();

      const { el } = this;

      el.parentElement.removeChild(el);
    },
    onContextMenu(e) {
      e.preventDefault();

      this.$destroy();

      const { el } = this;

      el.parentElement.removeChild(el);
    },
  },
  render(h): VNode {
    const { data = [], config } = this;

    return (
      <div
        class={selectorPrefix}
        style={this.getStyle}
        onClick={this.onClick}
        onContextMenu={this.onContextMenu}
      >
        {/*@ts-ignore*/}
        <Menu data={data} className={config.className} styleName={config.styleName} ref="menuIns" />
      </div>
    );
  },
};

const ContextMenu: ContextMenuType = {
  /**
   * config
   * {
   *   name - {String} 名字
   *   icon - {String} 图标
   *   id - {String} 唯一的id
   *   disabled - {Boolean} 不可用
   *   separation - {Bolean} 分割线
   *   attribute - {Object} 自定义属性
   *   children - {Array<Object> 孩子
   * }
   *{
   *   width - {Number} 宽度
   *   x - {Number} 显示的x坐标 相对于body
   *   y - {Number} 现实的y坐标 相对于body
   *   maskClosable - {Boolean} 点击其他位置是否关闭菜单
   *   handler - {Function} 点击的事件句柄
   * }
   * @return {HTMLDivElement}
   * @param data
   * @param config
   */
  open(data: IData, config: IConfig) {
    config = { ...{ width: 200, maskClosable: true }, ...config };

    const parentEl = document.createElement('div');

    const replaceEl = document.createElement('div');

    parentEl.appendChild(replaceEl);
    document.body.appendChild(parentEl);

    const vm = new Vue({
      mounted() {
        this.$refs.ref.mount();
      },
      render(h) {
        return h(ContextMenuComponent, {
          props: {
            data,
            config,
            el: parentEl,
          },
          ref: 'ref',
        });
      },
    });

    vm.$mount(replaceEl);

    return {
      vm,
      el: parentEl,
    };
  },
  /**
   * close
   * @param vm
   * @param el
   */
  close({ vm, el }) {
    vm.$destroy();
    el?.parentElement?.removeChild?.(el);
  },
};

export default ContextMenu;
