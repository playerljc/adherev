import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll';
import {
  CSSProperties,
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  ref,
  watch,
} from 'vue';
import { array, func, object, string } from 'vue-types';

import { IMenuDataItem } from './types';

const selectorPrefix = 'adherev-ui-jdcategorytab';

const props = {
  className: string().def(''),
  menuClassName: string().def(''),
  menuStyle: object<CSSProperties>().def({}),
  menuInnerClassName: string().def(''),
  menuInnerStyle: object<CSSProperties>().def({}),
  tabClassName: string().def(''),
  tabStyle: object<CSSProperties>().def({}),
  menuItemClassName: string().def(''),
  menuItemStyle: object<CSSProperties>().def({}),
  menuData: array<IMenuDataItem>().def([]),
  defaultActiveKey: string().def(''),
  onBeforeChange: func<(activeKey: string, key: string) => boolean>(),
};

export default defineComponent({
  name: 'adv-jdcategorytab',
  props,
  slots: ['menuItem'],
  emits: ['change'],
  setup(props, { slots, emit, expose }) {
    const activeKey = ref<string>(props.defaultActiveKey);
    const menuEl = ref<HTMLDivElement | null>(null);
    const menuInnerEl = ref<HTMLDivElement | null>(null);

    let scroll: any = null;
    let ease = IScroll.utils.ease;

    const getMenuClassName = computed(() =>
      classNames(`${selectorPrefix}-menu`, props.menuClassName.split(/\s+/)),
    );

    const getMenuInnerClassName = computed(() =>
      classNames(`${selectorPrefix}-menu-inner`, props.menuInnerClassName.split(/\s+/)),
    );

    const getTabClassName = computed(() =>
      classNames(`${selectorPrefix}-tab`, props.tabClassName.split(/\s+/)),
    );

    const getMenuItemClassName = computed(
      () => (curKey: string) =>
        classNames(
          `${selectorPrefix}-menu-item`,
          activeKey.value === curKey ? 'active' : null,
          props.menuItemClassName.split(/\s+/),
        ),
    );

    const initMenuScroll = () => {
      scroll = new IScroll(menuEl.value, { mouseWheel: true, click: true });

      (menuEl.value as HTMLDivElement).addEventListener('touchmove', (e) => {
        e.preventDefault();
      });
    };

    const findElByKey = (key: string): HTMLElement | null => {
      const index = props.menuData.findIndex((t) => t.key === key);

      const arr = Array.from(
        (menuInnerEl.value as HTMLDivElement)?.querySelectorAll(`.${selectorPrefix}-menu-item`),
      );

      if (arr.length) {
        return arr[index] as HTMLElement;
      }

      return null;
    };

    const scrollTo = (key: string, time?: number, easing?: number) => {
      easing = easing || ease.circular;

      let isCan = true;

      if (props.onBeforeChange) {
        isCan = props.onBeforeChange(activeKey.value, key);
      }

      if (!isCan) return;

      scroll.scrollToElement(findElByKey(key), time, null, null, easing);

      setTimeout(() => {
        activeKey.value = key;

        nextTick(function () {
          emit('change', key);
        });
      }, time);
    };

    const renderMenu = () => {
      return props.menuData.map((data) => (
        <li key={data.key} class={getMenuItemClassName.value(data.key)} style={props.menuItemStyle}>
          <a
            onClick={() => {
              scrollTo(data.key);
            }}
          >
            {slots.menuItem ? slots.menuItem(data) : data.name}
          </a>
        </li>
      ));
    };

    watch(
      () => props.defaultActiveKey,
      (newActiveKey) => {
        activeKey.value = newActiveKey;
      },
    );

    onMounted(() => {
      initMenuScroll();
    });

    provide('activeKey', activeKey);

    expose({
      scrollTo,
    });

    return () => (
      <div class={selectorPrefix}>
        <div class={getMenuClassName.value} style={props.menuStyle} ref={menuEl}>
          <ul class={getMenuInnerClassName.value} style={props.menuInnerStyle} ref={menuInnerEl}>
            {renderMenu()}
          </ul>
        </div>
        <ul class={getTabClassName.value} style={props.tabStyle}>
          {slots.default ? slots.default() : null}
        </ul>
      </div>
    );
  },
});
