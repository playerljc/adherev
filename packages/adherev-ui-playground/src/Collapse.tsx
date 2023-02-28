import classNames from 'classnames';
import {
  CSSProperties,
  VNode,
  defineComponent,
  ref,
  watch,
  /*PropType*/
} from 'vue';
import { bool, object, oneOfType, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

const selectorPrefix = 'adherev-ui-playground-collapse';

export const collapseProps = {
  headerClassName: string().def(''),
  headerStyle: object<CSSProperties>().def({}),
  bodyClassName: string().def(''),
  bodyStyle: object<CSSProperties>().def({}),
  title: oneOfType([string(), object<VNode>()]),
  extra: oneOfType([string(), object<VNode>()]),
  defaultCollapse: bool().def(false),
  border: bool().def(false),
  scrollY: bool().def(false),
  fixedHeaderScrollBody: bool().def(false),
};

export default defineComponent({
  name: 'adv-playground-collapse',
  props: collapseProps,
  setup(props, { slots }) {
    const collapse = ref<boolean>(props.defaultCollapse);

    watch(
      () => props.defaultCollapse,
      (newVal, preValue) => {
        if (newVal !== preValue) {
          collapse.value = newVal;
        }
      },
    );

    const onClickHeader = () => {
      collapse.value = !collapse.value;
    };

    return () => (
      <div
        class={classNames(
          selectorPrefix,
          props.scrollY ? `${selectorPrefix}-scroll-y` : '',
          props.fixedHeaderScrollBody ? `${selectorPrefix}-fixed-header-scroll-body` : '',
        )}
      >
        <div
          class={classNames(
            `${selectorPrefix}-header`,
            props.border ? `${selectorPrefix}-header-border` : '',
            props.headerClassName || '' || '',
          )}
          style={props.headerStyle}
          onClick={onClickHeader}
        >
          <div class={`${selectorPrefix}-header-collapse`}>
            <div
              class={classNames(
                `${selectorPrefix}-header-collapse-icon`,
                collapse.value ? '' : `${selectorPrefix}-header-collapse-icon-close`,
              )}
            />

            <ConditionalRender conditional={!!props.title}>
              <div class={`${selectorPrefix}-header-title`}>{props.title}</div>
            </ConditionalRender>
          </div>

          <ConditionalRender conditional={!!props.extra}>
            <div class={`${selectorPrefix}-header-extra`}>{props.extra}</div>
          </ConditionalRender>
        </div>

        <ConditionalRender conditional={!collapse.value}>
          <div
            class={classNames(
              `${selectorPrefix}-body`,
              props.border ? `${selectorPrefix}-body-border` : '',
              props.bodyClassName || '' || '',
              !!props.title || !!props.extra ? `${selectorPrefix}-body-exists-header` : '',
            )}
            style={props.bodyStyle}
          >
            {slots.default ? slots.default() : null}
          </div>
        </ConditionalRender>
      </div>
    );
  },
});
