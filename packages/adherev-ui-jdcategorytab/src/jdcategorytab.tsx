import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll';
import { PropType, VNode } from 'vue';

import { IMenuDataItem } from './types';

const selectorPrefix = 'adherev-ui-jdcategorytab';

const JdCategoryTab: any = {
  name: 'adv-jdcategorytab',
  props: {
    className: {
      type: String,
      default: '',
    },
    menuClassName: {
      type: String,
      default: '',
    },
    menuStyle: {
      type: String,
      default: '',
    },
    menuInnerClassName: {
      type: String,
      default: '',
    },
    menuInnerStyle: {
      type: String,
      default: '',
    },
    tabClassName: {
      type: String,
      default: '',
    },
    tabStyle: {
      type: String,
      default: '',
    },
    menuItemClassName: {
      type: String,
      default: '',
    },
    menuItemStyle: {
      type: String,
      default: '',
    },
    menuData: {
      type: Array as PropType<IMenuDataItem[]>,
      default: () => [],
    },
    defaultActiveKey: {
      type: [String, Number],
      default: '',
    },
    onBeforeChange: {
      type: Function,
    },
  },
  emits: ['change'],
  data() {
    return {
      activeKey: this.defaultActiveKey,
      $scroll: null,
      $ease: IScroll.utils.ease,
    };
  },
  computed: {
    getMenuClassName(): string {
      const { menuClassName } = this;

      return classNames(`${selectorPrefix}-menu`, menuClassName || '');
    },
    getMenuInnerClassName(): string {
      const { menuInnerClassName } = this;
      return classNames(`${selectorPrefix}-menu-inner`, menuInnerClassName || '');
    },
    getTabClassName(): string {
      const { tabClassName } = this;

      return classNames(`${selectorPrefix}-tab`, tabClassName || '');
    },
    getMenuItemClassName() {
      return (curKey: string): string => {
        const { menuItemClassName, activeKey } = this;

        return classNames(
          `${selectorPrefix}-menu-item`,
          activeKey === curKey ? 'active' : null,
          menuItemClassName || '',
        );
      };
    },
  },
  watch: {
    defaultActiveKey(defaultActiveKey) {
      this.activeKey = defaultActiveKey;
    },
  },
  mounted() {
    this.initMenuScroll();
  },
  provide: function () {
    return {
      getActiveKey: this.getActiveKey,
    };
  },
  methods: {
    initMenuScroll() {
      const {
        $refs: { menuEl },
        $data,
      } = this;

      $data.$scroll = new IScroll(menuEl, { mouseWheel: true, click: true });

      menuEl.addEventListener('touchmove', (e) => {
        e.preventDefault();
      });
    },
    findElByKey(key): HTMLElement | null {
      const {
        $refs: { menuInnerEl },
        menuData,
      } = this;

      const index = menuData.findIndex((t) => t.key === key);

      const arr = Array.from(menuInnerEl?.querySelectorAll(`.${selectorPrefix}-menu-item`));

      if (arr.length) {
        return arr[index] as HTMLElement;
      }

      return null;
    },
    getActiveKey(): string {
      return this.activeKey;
    },
    scrollTo(key, time = 250, easing) {
      const {
        $data: {
          $ease: { circular },
          $scroll,
        },
        onBeforeChange,
        activeKey,
      } = this;

      easing = easing || circular;

      let isCan = true;

      if (onBeforeChange) {
        isCan = onBeforeChange(activeKey, key);
      }

      if (!isCan) return;

      $scroll.scrollToElement(this.findElByKey(key), time, null, null, easing);

      setTimeout(() => {
        this.activeKey = key;

        this.$nextTick(function () {
          this.$emit('change', key);
        });
      }, time);
    },
    renderMenu(h): VNode {
      const { $scopedSlots, menuData, getMenuItemClassName, menuItemStyle } = this;

      return menuData.map((data) => (
        <li key={data.key} class={getMenuItemClassName(data.key)} style={menuItemStyle}>
          <a
            onClick={() => {
              this.scrollTo(data.key);
            }}
          >
            {$scopedSlots.menuItem ? $scopedSlots.menuItem(data) : data.name}
          </a>
        </li>
      ));
    },
  },
  render(h): VNode {
    const {
      $slots,
      getMenuClassName,
      getMenuInnerClassName,
      getTabClassName,
      menuStyle,
      menuInnerStyle,
      tabStyle,
    } = this;

    return (
      <div class={selectorPrefix} ref="el">
        <div class={getMenuClassName} style={menuStyle} ref="menuEl">
          <ul class={getMenuInnerClassName} style={menuInnerStyle} ref="menuInnerEl">
            {this.renderMenu(h)}
          </ul>
        </div>
        <ul class={getTabClassName} style={tabStyle}>
          {$slots.default}
        </ul>
      </div>
    );
  },
};

export default JdCategoryTab;
