import { computed, createApp, defineComponent, onMounted, provide, reactive, ref } from 'vue';
import { array, object } from 'vue-types';

import Menu from './Menu';
import { IComponent, IConfig, IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu';

export type ContextReturnType = {
  config: IConfig;
  el: HTMLElement;
};

const props = {
  data: array<IData>().def([]),
  config: object<IConfig>().def(),
  el: object<HTMLElement>().def(),
};

/**
 * ContextMenuComponent
 * @class ContextMenuComponent
 * @classdesc ContextMenuComponent
 */
const ContextMenuComponent = defineComponent({
  props,
  setup(props, { expose }) {
    const menuIns = ref<any>(null);

    const context = reactive({
      config: props.config,
      el: props.el,
    });

    const getStyle = computed(() => ({
      zIndex: 9999 * 2,
    }));

    const onClick = (e: MouseEvent) => {
      e.stopPropagation();

      props.el?.parentElement?.removeChild?.(props.el);
    };

    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      props.el?.parentElement?.removeChild?.(props.el);
    };

    const mount = () => menuIns.value.mount();

    provide('context', context);

    expose({
      mount,
    });

    onMounted(() => mount());

    return () => (
      <div
        class={selectorPrefix}
        style={getStyle.value}
        // @ts-ignore
        onClick={onClick}
        // @ts-ignore
        onContextmenu={onContextMenu}
      >
        <Menu
          data={props.data}
          className={props.config.className}
          style={props.config.style}
          ref={menuIns}
        />
      </div>
    );
  },
});

let globalConfig: IConfig | null = null;

const ContextMenu: IComponent = {
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
   * @param defaultConfig
   */
  open(data: IData[], defaultConfig: IConfig) {
    const config: IConfig = { ...defaultConfig, width: 200, maskClosable: true };

    const parentEl = document.createElement('div');

    document.body.appendChild(parentEl);

    const app = createApp({
      setup() {
        const root = ref<any>(null);

        onMounted(() => {
          root.value.mount();
        });

        provide('root', {
          unmount() {
            try {
              // @ts-ignore
              app.unmount();
            } catch (err) {
              (parentEl as HTMLElement)?.parentElement?.removeChild(parentEl);
            }
          },
        });

        return () => <ContextMenuComponent ref={root} data={data} config={config} el={parentEl} />;
      },
    });
    if (globalConfig) globalConfig?.beforeMount?.(app);
    app.mount(parentEl);

    return {
      vm: app,
      el: parentEl,
    };
  },
  /**
   * close
   * @param vm
   * @param el
   */
  close({ vm, el }) {
    try {
      vm.unmount();
    } catch (err) {
      (el as HTMLElement)?.parentElement?.removeChild(el);
    }
  },
  setConfig(config) {
    globalConfig = config;
  },
};

export default ContextMenu;
