import classNames from 'classnames';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

const selectorPrefix = 'adherev-ui-playground-card';

export default {
  name: 'adv-playground-card',
  props: {
    headerClassName: {
      type: String,
      default: '',
    },
    headerStyle: {
      type: String,
      default: '',
    },
    bodyClassName: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: String,
      default: '',
    },
    actionClassName: {
      type: String,
      default: '',
    },
    actionStyle: {
      type: String,
      default: '',
    },
    title: {
      type: [String, Object],
      default: '',
    },
    extra: {
      type: Object,
      default: () => null,
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    const {
      headerClassName,
      headerStyle,
      bodyClassName,
      bodyStyle,
      actionClassName,
      actionStyle,
      title,
      extra,
      actions,
      $slots,
    } = this;

    return (
      <div class={selectorPrefix}>
        <ConditionalRender conditional={!!title || !!extra}>
          <div
            class={classNames(`${selectorPrefix}-header`, headerClassName.split(' '))}
            style={headerStyle}
          >
            <ConditionalRender conditional={!!title}>
              <div class={`${selectorPrefix}-header-title`}>{title}</div>
            </ConditionalRender>

            <ConditionalRender conditional={!!extra}>
              <div class={`${selectorPrefix}-header-extra`}>{extra}</div>
            </ConditionalRender>
          </div>
        </ConditionalRender>

        <ConditionalRender conditional={!!$slots.default}>
          <div
            class={classNames(`${selectorPrefix}-body`, bodyClassName.split(' '))}
            style={bodyStyle}
          >
            {$slots.default}
          </div>
        </ConditionalRender>

        <ConditionalRender conditional={!!(actions && actions.length)}>
          <ul
            class={classNames(`${selectorPrefix}-action`, actionClassName.split(' '))}
            style={actionStyle}
          >
            {actions.map((action, index) => (
              <li key={`${index + 1}`} class={`${selectorPrefix}-action-item`}>
                {$slots[action]}
              </li>
            ))}
          </ul>
        </ConditionalRender>
      </div>
    );
  },
};
