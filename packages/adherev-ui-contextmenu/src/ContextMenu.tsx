// @ts-ignore
import Vue from 'vue';
// @ts-ignore
import classNames from 'classnames';
import { IData, IConfig } from './types';
// @ts-ignore
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
      // @ts-ignore
      type: Array,
      default: () => [],
      validator(val: Array<IData>): boolean {
        return val instanceof Array;
      },
    },
    config: {
      // @ts-ignore
      type: Object,
      default: () => {},
      validator(val: IData): boolean {
        return val instanceof Object;
      },
    },
    el: {
      type: HTMLElement,
    },
  },
  provide() {
    return {
      // @ts-ignore
      getContext: this.getContext,
    };
  },
  computed: {
    getClass() {
      return classNames(selectorPrefix);
    },
    getStyle() {
      return `z-index: ${9999 * 2}`;
    },
  },
  methods: {
    getContext() {
      return {
        // @ts-ignore
        config: this.config,
        // @ts-ignore
        el: this.el,
      };
    },
    mount() {
      // @ts-ignore
      this.$refs.menuIns?.mount();
    },
    onClick(e) {
      e.stopPropagation();

      // @ts-ignore
      this.$destroy();

      // @ts-ignore
      const { el } = this;

      // @ts-ignore
      el.parentElement.removeChild(el);
    },
    onContextMenu(e) {
      e.preventDefault();

      // @ts-ignore
      this.$destroy();

      // @ts-ignore
      const { el } = this;

      // @ts-ignore
      el.parentElement.removeChild(el);
    },
  },
  render(h) {
    // @ts-ignore
    const { data = [], config } = this;

    return (
      // @ts-ignore
      <div
        // @ts-ignore
        class={this.getClass}
        // @ts-ignore
        style={this.getStyle}
        // @ts-ignore
        onClick={this.onClick}
        // @ts-ignore
        onContextMenu={this.onContextMenu}
      >
        {/*@ts-ignore*/}
        <Menu data={data} className={config.className} styleName={config.styleName} ref="menuIns" />
      </div>
    );
  },
};

const ContextMenu = {
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
    // @ts-ignore
    config = { width: 200, maskClosable: true, ...config };

    const parentEl = document.createElement('div');

    const replaceEl = document.createElement('div');
    parentEl.appendChild(replaceEl);
    document.body.appendChild(parentEl);

    const vm = new Vue({
      mounted() {
        // @ts-ignore
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
    el.parentElement.removeChild(el);
  },
};

export default ContextMenu;
