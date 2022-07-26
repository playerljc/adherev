import { PropType } from 'vue';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

const selectorPrefix = 'adherev-ui-playground-card';

export const cardPropTypes = {
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
  description: {
    type: Object as PropType<{ title: string; info: string }>,
    default: () => null,
  },
};

export default {
  name: 'adv-playground-card',
  props: {
    ...cardPropTypes,
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
      description,
      actions,
      $slots,
    } = this;

    return (
      <div class={selectorPrefix}>
        <ConditionalRender conditional={!!title || !!extra}>
          <div
            class={classNames(`${selectorPrefix}-header`, headerClassName.split(/\s+/))}
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
            class={classNames(`${selectorPrefix}-body`, bodyClassName.split(/\s+/))}
            style={bodyStyle}
          >
            {$slots.default}
          </div>
        </ConditionalRender>

        <ConditionalRender conditional={!!description?.title || !!description?.info}>
          <div class={`${selectorPrefix}-description`}>
            <ConditionalRender conditional={!!description?.title}>
              <div class={`${selectorPrefix}-description-title`}>{description?.title}</div>
            </ConditionalRender>
            <ConditionalRender conditional={!!description?.info}>
              {description?.info}
            </ConditionalRender>
          </div>
        </ConditionalRender>

        <ConditionalRender conditional={!!(actions && actions.length)}>
          <ul
            class={classNames(`${selectorPrefix}-action`, actionClassName.split(/\s+/))}
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
