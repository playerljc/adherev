import { VNode } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Auto from './auto';
import Fixed from './fixed';
import FlexLayout from './flexlayout';

const VerticalFlexLayout: any = {
  name: 'adv-flexlayout-vertical',
  props: {
    topClassName: {
      type: String,
      default: '',
    },
    topStyle: {
      type: String,
      default: '',
    },
    rightClassName: {
      type: String,
      default: '',
    },
    rightStyle: {
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
    leftClassName: {
      type: String,
      default: '',
    },
    leftStyle: {
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
    topProps: {
      type: Object,
      default: () => ({}),
    },
    rightProps: {
      type: Object,
      default: () => ({}),
    },
    bottomProps: {
      type: Object,
      default: () => ({}),
    },
    leftProps: {
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
  render(h): VNode {
    const {
      leftClassName,
      leftStyle,
      leftProps,
      mainAutoWrapClassName,
      mainAutoStyle,
      mainAutoWrapProps,
      mainWrapClassName,
      mainWrapStyle,
      topClassName,
      topStyle,
      topProps,
      mainClassName,
      mainStyle,
      mainProps,
      bottomClassName,
      bottomStyle,
      bottomProps,
      rightClassName,
      rightStyle,
      rightProps,
      $slots: { renderLeft, renderMain, renderTop, renderBottom, renderRight },
    } = this;

    return (
      <FlexLayout direction="vertical">
        <ConditionalRender conditional={!!renderTop}>
          <Fixed
            class={topClassName || ''}
            style={topStyle || ''}
            fit
            {...{
              props: topProps || {},
            }}
          >
            {renderTop}
          </Fixed>
        </ConditionalRender>

        <ConditionalRender conditional={!!renderMain}>
          <Auto
            class={mainAutoWrapClassName || ''}
            style={mainAutoStyle || ''}
            fit
            autoFixed
            {...{ props: mainAutoWrapProps || {} }}
          >
            <FlexLayout
              direction="horizontal"
              className={mainWrapClassName || ''}
              style={mainWrapStyle || ''}
            >
              <ConditionalRender conditional={!!renderLeft}>
                <Fixed
                  className={leftClassName || ''}
                  style={leftStyle || ''}
                  fit
                  {...{ props: leftProps || {} }}
                >
                  {renderLeft}
                </Fixed>
              </ConditionalRender>

              <Auto
                autoFixed
                fit
                className={mainClassName || ''}
                style={mainStyle || ''}
                {...{ props: mainProps || {} }}
              >
                {renderMain}
              </Auto>

              <ConditionalRender conditional={!!renderRight}>
                <Fixed
                  className={rightClassName || ''}
                  style={rightStyle || ''}
                  fit
                  {...{ props: rightProps || {} }}
                >
                  {renderRight}
                </Fixed>
              </ConditionalRender>
            </FlexLayout>
          </Auto>
        </ConditionalRender>

        <ConditionalRender conditional={!!renderBottom}>
          <Fixed
            className={bottomClassName || ''}
            style={bottomStyle || ''}
            fit
            {...{ props: bottomProps || {} }}
          >
            {renderBottom}
          </Fixed>
        </ConditionalRender>
      </FlexLayout>
    );
  },
};

export default VerticalFlexLayout;
