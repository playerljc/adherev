import classNames from 'classnames';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import { propTypes } from './types';

const selectorPrefix = 'adherev-ui-playground-collapse';

const Collapse: any = {
  name: 'adv-playground-collapse',
  props: {
    ...propTypes,
  },
  data() {
    return {
      collapse: this.defaultCollapse,
    };
  },
  watch: {
    defaultCollapse(collapse, preCollapse) {
      if (collapse !== preCollapse) {
        this.collapse = collapse;
      }
    },
  },
  methods: {
    onClickHeader() {
      this.collapse = !this.collapse;
    },
  },
  render(h) {
    const {
      headerClassName,
      headerStyle,
      bodyClassName,
      bodyStyle,
      title,
      extra,
      border,
      scrollY,
      fixedHeaderScrollBody,
      collapse,
    } = this;

    return (
      <div
        class={classNames(
          selectorPrefix,
          scrollY ? `${selectorPrefix}-scroll-y` : '',
          fixedHeaderScrollBody ? `${selectorPrefix}-fixed-header-scroll-body` : '',
        )}
      >
        <div
          class={classNames(
            `${selectorPrefix}-header`,
            border ? `${selectorPrefix}-header-border` : '',
            headerClassName.split(/\s+/),
          )}
          style={headerStyle}
          onClick={this.onClickHeader}
        >
          <div class={`${selectorPrefix}-header-collapse`}>
            <div
              class={classNames(
                `${selectorPrefix}-header-collapse-icon`,
                collapse ? '' : `${selectorPrefix}-header-collapse-icon-close`,
              )}
            />
            <ConditionalRender conditional={!!title}>
              <div class={`${selectorPrefix}-header-title`}>{title}</div>
            </ConditionalRender>
          </div>

          <ConditionalRender conditional={!!extra}>
            <div class={`${selectorPrefix}-header-extra`}>{extra}</div>
          </ConditionalRender>
        </div>

        <ConditionalRender conditional={!collapse}>
          <div
            class={classNames(
              `${selectorPrefix}-body`,
              border ? `${selectorPrefix}-body-border` : '',
              bodyClassName.split(/\s+/),
              !!title || !!extra ? `${selectorPrefix}-body-exists-header` : '',
            )}
            style={bodyStyle}
          >
            {this.$slots.default}
          </div>
        </ConditionalRender>
      </div>
    );
  },
};

export default Collapse;
