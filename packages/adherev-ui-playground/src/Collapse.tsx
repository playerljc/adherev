import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import classNames from 'classnames';
import { CSSProperties, defineComponent, ref, VNode, watch /*PropType*/ } from 'vue';
import { bool, object, oneOfType, string } from 'vue-types';

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
        // @ts-ignore
        class={classNames(
          selectorPrefix,
          props.scrollY ? `${selectorPrefix}-scroll-y` : '',
          props.fixedHeaderScrollBody ? `${selectorPrefix}-fixed-header-scroll-body` : '',
        )}
      >
        <div
          // @ts-ignore
          class={classNames(
            `${selectorPrefix}-header`,
            props.border ? `${selectorPrefix}-header-border` : '',
            (props.headerClassName || '').split(/\s+/),
          )}
          style={props.headerStyle}
          onClick={onClickHeader}
        >
          <div
            // @ts-ignore
            class={`${selectorPrefix}-header-collapse`}
          >
            <div
              // @ts-ignore
              class={classNames(
                `${selectorPrefix}-header-collapse-icon`,
                collapse.value ? '' : `${selectorPrefix}-header-collapse-icon-close`,
              )}
            />
            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!props.title}>
              <div
                // @ts-ignore
                class={`${selectorPrefix}-header-title`}
              >
                {props.title}
              </div>
            </ConditionalRender>
          </div>

          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!props.extra}>
            <div
              // @ts-ignore
              class={`${selectorPrefix}-header-extra`}
            >
              {props.extra}
            </div>
          </ConditionalRender>
        </div>

        {/*@ts-ignore*/}
        <ConditionalRender conditional={!collapse.value}>
          <div
            // @ts-ignore
            class={classNames(
              `${selectorPrefix}-body`,
              props.border ? `${selectorPrefix}-body-border` : '',
              (props.bodyClassName || '').split(/\s+/),
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
