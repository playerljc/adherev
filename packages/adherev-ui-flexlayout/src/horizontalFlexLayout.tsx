import { CSSProperties, defineComponent } from 'vue';
import { object, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Auto from './auto';
import Fixed from './fixed';
import FlexLayout from './flexlayout';
import { AutoProps, FixedProps } from './types';

export const horizontalFlexLayoutProps = {
  topClassName: string().def(''),
  topStyle: object<CSSProperties>().def({}),
  rightClassName: string().def(''),
  rightStyle: object<CSSProperties>().def({}),
  bottomClassName: string().def(''),
  bottomStyle: object<CSSProperties>().def({}),
  leftClassName: string().def(''),
  leftStyle: object<CSSProperties>().def({}),
  mainClassName: string().def(''),
  mainStyle: object<CSSProperties>().def({}),
  mainAutoWrapClassName: string().def(''),
  mainAutoStyle: object<CSSProperties>().def({}),
  mainWrapClassName: string().def(''),
  mainWrapStyle: object<CSSProperties>().def({}),
  topProps: object<FixedProps>().def({}),
  rightProps: object<FixedProps>().def({}),
  bottomProps: object<FixedProps>().def({}),
  leftProps: object<FixedProps>().def({}),
  mainProps: object<AutoProps>().def({}),
  mainAutoWrapProps: object<AutoProps>().def({}),
};

export default defineComponent({
  name: 'adv-flexlayout-horizontal',
  props: horizontalFlexLayoutProps,
  slots: ['renderLeft', 'renderMain', 'renderTop', 'renderBottom', 'renderRight'],
  setup(props, { slots }) {
    return () => (
      <FlexLayout direction="horizontal">
        <ConditionalRender conditional={!!slots.renderLeft}>
          <Fixed
            class={props.leftClassName || ''}
            style={props.leftStyle}
            fit
            {...(props.leftProps || {})}
          >
            {slots.renderLeft?.()}
          </Fixed>
        </ConditionalRender>

        <ConditionalRender conditional={!!slots.renderMain}>
          <Auto
            class={props.mainAutoWrapClassName || ''}
            style={props.mainAutoStyle}
            fit
            autoFixed
            {...(props.mainAutoWrapProps || {})}
          >
            <FlexLayout
              direction="vertical"
              class={props.mainWrapClassName || ''}
              style={props.mainWrapStyle}
            >
              <ConditionalRender conditional={!!slots.renderTop}>
                <Fixed
                  class={props.topClassName || ''}
                  style={props.topStyle}
                  fit
                  {...(props.topProps || {})}
                >
                  {slots.renderTop?.()}
                </Fixed>
              </ConditionalRender>

              <Auto
                autoFixed
                fit
                class={props.mainClassName || ''}
                style={props.mainStyle}
                {...(props.mainProps || {})}
              >
                {slots.renderMain?.()}
              </Auto>

              <ConditionalRender conditional={!!slots.renderBottom}>
                <Fixed
                  class={props.bottomClassName || ''}
                  style={props.bottomStyle}
                  fit
                  {...(props.bottomProps || {})}
                >
                  {slots.renderBottom?.()}
                </Fixed>
              </ConditionalRender>
            </FlexLayout>
          </Auto>
        </ConditionalRender>

        <ConditionalRender conditional={!!slots.renderRight}>
          <Fixed
            class={props.rightClassName || ''}
            style={props.rightStyle}
            fit
            {...(props.rightProps || {})}
          >
            {slots.renderRight?.()}
          </Fixed>
        </ConditionalRender>
      </FlexLayout>
    );
  },
});
