import classNames from 'classnames';
import { CSSProperties, computed, defineComponent, toRefs } from 'vue';
import { array, object, string } from 'vue-types';

import { selectorPrefix as _selectorPrefix } from './flexlayout';
import { AutoProps, FixedProps } from './types';
import VerticalFlexLayout from './verticalFlexLayout';

const selectorPrefix = `${_selectorPrefix}-toolbarlayout`;

const props = {
  topClassName: string().def(''),
  topStyle: object<CSSProperties>().def({}),
  bottomClassName: string().def(''),
  bottomStyle: object<CSSProperties>().def({}),
  mainClassName: string().def(''),
  mainStyle: object<CSSProperties>().def({}),
  mainAutoWrapClassName: string().def(''),
  mainAutoStyle: object<CSSProperties>().def({}),
  mainWrapClassName: string().def(''),
  mainWrapStyle: object<CSSProperties>().def({}),
  topToolBarSlotNames: array<string>().def([]),
  bottomToolBarSlotNames: array<string>().def([]),
  topProps: object<FixedProps>().def({}),
  bottomProps: object<FixedProps>().def({}),
  mainProps: object<AutoProps>().def({}),
  mainAutoWrapProps: object<AutoProps>().def({}),
};

export default defineComponent({
  name: 'adv-flexlayout-toolbar',
  props,
  setup(props, { slots }) {
    const topProps = computed(() => ({
      fit: false,
      ...(props.topProps || {}),
    }));

    const bottomProps = computed(() => ({
      fit: false,
      ...(props.bottomProps || {}),
    }));

    const otherProps = computed(() => {
      const {
        topClassName,
        bottomClassName,
        mainAutoWrapClassName,
        topToolBarSlotNames,
        bottomToolBarSlotNames,
        ...others
      } = toRefs(props);

      const _props = {};

      for (const p in others) {
        if (p in others) {
          _props[p] = others[p].value;
        }
      }

      return _props;
    });

    return () => (
      <VerticalFlexLayout
        class={selectorPrefix}
        topClassName={classNames(
          (props.topToolBarSlotNames || []).length ? `${selectorPrefix}-top` : null,
          props.topClassName || '',
        )}
        bottomClassName={classNames(
          (props.bottomToolBarSlotNames || []).length ? `${selectorPrefix}-bottom` : null,
          props.bottomClassName || '',
        )}
        mainAutoWrapClassName={classNames(
          `${selectorPrefix}-main-auto-wrap`,
          props.mainAutoWrapClassName || '',
        )}
        {...(otherProps.value || {})}
        topProps={topProps.value}
        bottomProps={bottomProps.value}
      >
        {{
          renderTop: () =>
            (props.topToolBarSlotNames || []).map((slotName, index) => (
              <div key={index} class={`${selectorPrefix}-toolbar-item`}>
                {slots?.[slotName]?.()}
              </div>
            )),
          renderMain: () => slots?.default?.(),
          renderBottom: () =>
            (props.bottomToolBarSlotNames || []).map((slotName, index) => (
              <div key={index} class={`${selectorPrefix}-toolbar-item`}>
                {slots?.[slotName]?.()}
              </div>
            )),
        }}
      </VerticalFlexLayout>
    );
  },
});
