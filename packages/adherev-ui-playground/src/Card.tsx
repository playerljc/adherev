import classNames from 'classnames';
import { CSSProperties, ExtractPropTypes, VNode, defineComponent } from 'vue';
import { array, object, oneOfType, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

const selectorPrefix = 'adherev-ui-playground-card';

export const cardProps = {
  headerClassName: string().def(''),
  headerStyle: object<CSSProperties>().def({}),
  bodyClassName: string().def(''),
  bodyStyle: object<CSSProperties>().def({}),
  actionClassName: string().def(''),
  actionStyle: object<CSSProperties>().def({}),
  title: oneOfType([string(), object<VNode>()]),
  extra: object<VNode>(),
  actions: array<any>().def([]),
  description: object<{
    title: string;
    info: string;
  }>(),
};

export type CardProps = Partial<ExtractPropTypes<typeof cardProps>>;

export default defineComponent({
  name: 'adv-playground-card',
  props: cardProps,
  setup(props, { slots }) {
    return () => (
      <div class={selectorPrefix}>
        {/*@ts-ignore*/}
        <ConditionalRender conditional={!!props.title || !!props.extra}>
          <div
            class={classNames(`${selectorPrefix}-header`, props.headerClassName || '' || '')}
            style={props.headerStyle}
          >
            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!props.title}>
              <div class={`${selectorPrefix}-header-title`}>{props.title}</div>
            </ConditionalRender>

            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!props.extra}>
              <div class={`${selectorPrefix}-header-extra`}>{props.extra}</div>
            </ConditionalRender>
          </div>
        </ConditionalRender>

        {/*@ts-ignore*/}
        <ConditionalRender conditional={!!slots.default}>
          <div
            class={classNames(`${selectorPrefix}-body`, props.bodyClassName || '' || '')}
            style={props.bodyStyle}
          >
            {slots?.default?.()}
          </div>
        </ConditionalRender>

        {/*@ts-ignore*/}
        <ConditionalRender conditional={!!props.description?.title || !!props.description?.info}>
          <div class={`${selectorPrefix}-description`}>
            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!props.description?.title}>
              <div class={`${selectorPrefix}-description-title`}>{props.description?.title}</div>
            </ConditionalRender>

            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!props.description?.info}>
              {props.description?.info}
            </ConditionalRender>
          </div>
        </ConditionalRender>

        {/*@ts-ignore**/}
        <ConditionalRender conditional={!!(props.actions && props.actions.length)}>
          <ul
            class={classNames(`${selectorPrefix}-action`, props.actionClassName || '' || '')}
            style={props.actionStyle}
          >
            {props.actions?.map((action, index) => (
              <li key={`${index + 1}`} class={`${selectorPrefix}-action-item`}>
                {slots[action]?.()}
              </li>
            ))}
          </ul>
        </ConditionalRender>
      </div>
    );
  },
});
