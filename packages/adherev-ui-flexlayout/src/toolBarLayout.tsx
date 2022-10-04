import classNames from 'classnames';
import { VNode } from 'vue';
import { Fragment } from 'vue-fragment';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import { selectorPrefix as _selectorPrefix } from './flexlayout';
import VerticalFlexLayout from './verticalFlexLayout';

const selectorPrefix = `${_selectorPrefix}-toolbarlayout`;

const ToolBarLayout: any = {
  name: 'adv-flexlayout-toolbar',
  props: {
    topClassName: {
      type: String,
      default: '',
    },
    topStyle: {
      type: String,
      default: '',
    },
    bottomClassName: {
      type: String,
      default: '',
    },
    bottomStyle: {
      type: String,
      default: '',
    },
    mainClassName: {
      type: String,
      default: '',
    },
    mainStyle: {
      type: String,
      default: '',
    },
    mainAutoWrapClassName: {
      type: String,
      default: '',
    },
    mainAutoStyle: {
      type: String,
      default: '',
    },
    mainWrapClassName: {
      type: String,
      default: '',
    },
    mainWrapStyle: {
      type: String,
      default: '',
    },
    topToolBarSlotNames: {
      type: Array,
      default: () => [],
    },
    bottomToolBarSlotNames: {
      type: Array,
      default: () => [],
    },
    topProps: {
      type: Object,
      default: () => ({}),
    },
    bottomProps: {
      type: Object,
      default: () => ({}),
    },
    mainProps: {
      type: Object,
      default: () => ({}),
    },
    mainAutoWrapProps: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    _topProps() {
      return { fit: false, ...(this.topProps || {}) };
    },
    _bottomProps() {
      return { fit: false, ...(this.bottomProps || {}) };
    },
    otherProps() {
      const {
        topClassName,
        bottomClassName,
        mainAutoWrapClassName,
        topToolBarSlotNames,
        bottomToolBarSlotNames,
        ...others
      } = this;

      const props = {};

      for (const p in this.$props) {
        if (p in others) {
          props[p] = others[p];
        }
      }

      return props;
    },
  },
  render(h): VNode {
    const {
      topClassName = '',
      bottomClassName = '',
      mainAutoWrapClassName = '',
      topToolBarSlotNames = [],
      bottomToolBarSlotNames = [],
    } = this;

    return (
      <VerticalFlexLayout
        topClassName={classNames(
          (topToolBarSlotNames || []).length ? `${selectorPrefix}-top` : null,
          topClassName || '',
        )}
        bottomClassName={classNames(
          (bottomToolBarSlotNames || []).length ? `${selectorPrefix}-bottom` : null,
          bottomClassName || '',
        )}
        mainAutoWrapClassName={classNames(
          `${selectorPrefix}-main-auto-wrap`,
          mainAutoWrapClassName || '',
        )}
        topProps={this._topProps}
        bottomProps={this._bottomProps}
        {...{ props: this.otherProps }}
      >
        <ConditionalRender slot="renderTop" conditional={!!(topToolBarSlotNames || []).length}>
          {topToolBarSlotNames.map((slotName, index) => (
            <div key={index} className={`${selectorPrefix}-toolbar-item`}>
              {this.$slots[slotName]}
            </div>
          ))}
        </ConditionalRender>

        {/*@ts-ignore*/}
        <Fragment slot="renderMain">{this.$slots.default}</Fragment>

        <ConditionalRender
          slot="renderBottom"
          conditional={!!(bottomToolBarSlotNames || []).length}
        >
          {bottomToolBarSlotNames.map((slotName, index) => (
            <div key={index} className={`${selectorPrefix}-toolbar-item`}>
              {this.$slots[slotName]}
            </div>
          ))}
        </ConditionalRender>
      </VerticalFlexLayout>
    );
  },
};

export default ToolBarLayout;
