import { VNode, PropType } from 'vue';
import classNames from 'classnames';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Util from '@baifendian/adherev-util';

import { IMenuItemProps } from './types';

import SubMenu from './SubMenu';

const selectorPrefix = 'adherev-ui-contextmenu-menuitem';

export default {
  props: {
    data: {
      type: Object as PropType<IMenuItemProps>,
      default: () => ({}),
    },
  },
  inject: ['getContext'],
  computed: {
    getClass() {
      const {
        data: { disabled = false, className },
      } = this;

      return classNames(
        selectorPrefix,
        disabled ? 'disabled' : '',
        (className || '').split(/\s+/),
      );
    },
  },
  methods: {
    renderIcon(h): VNode {
      const {
        data: { icon },
      } = this;

      // @ts-ignore
      return (
        <ConditionalRender conditional={Util.isString(icon)}>
          <span class={classNames(`${selectorPrefix}-icon`, icon)} />

          <ConditionalRender slot="noMatch" conditional={Util.isObject(icon)}>
            <span class={classNames(`${selectorPrefix}-icon`)}>{h(icon)}</span>

            <ConditionalRender slot="noMatch" conditional={Util.isFunction(icon)}>
              <span class={classNames(`${selectorPrefix}-icon`)}>
                {Util.isFunction(icon) ? icon(h) : null}
              </span>
            </ConditionalRender>
          </ConditionalRender>
        </ConditionalRender>
      );
    },
    renderName(h):VNode {
      const {
        data: { name },
      } = this;

      // @ts-ignore
      return (
        <ConditionalRender conditional={Util.isString(name)}>
          <span class={classNames(`${selectorPrefix}-name`)}>{name}</span>

          <ConditionalRender slot="noMatch" conditional={Util.isObject(name)}>
            {<span class={classNames(`${selectorPrefix}-name`)}>{h(name)}</span>}

            <ConditionalRender slot="noMatch" conditional={Util.isFunction(name)}>
              <span class={classNames(`${selectorPrefix}-name`)}>
                {Util.isFunction(name) ? name(h) : null}
              </span>
            </ConditionalRender>
          </ConditionalRender>
        </ConditionalRender>
      );
    },
    renderMore(h):VNode {
      const {
        data: { children },
      } = this;

      // @ts-ignore
      return (
        <ConditionalRender conditional={children.length !== 0}>
          <span class={`${selectorPrefix}-more fa fa-caret-right`} />
        </ConditionalRender>
      );
    },
    renderSubMenu(h):VNode {
      const {
        data: { children, subMenuClassName, subMenuStyle },
      } = this;

      // @ts-ignore
      return (
        <ConditionalRender conditional={children.length !== 0}>
          <SubMenu data={children} className={subMenuClassName} styleName={subMenuStyle} />
        </ConditionalRender>
      );
    },
    onClick(e) {
      e.stopPropagation();

      const {
        data: { id, attribute, disabled, children },
      } = this;

      const { config, el } = this.getContext();

      const { handler } = config;

      if (disabled || (children || []).length > 0) return false;

      if (handler) {
        handler(id, attribute);

        this.$root.$destroy();

        el?.parentElement?.removeChild(el);
      }
    },
  },
  render(h):VNode {
    const {
      data: { separation, styleName },
    } = this;

    // @ts-ignore
    return (
      <ConditionalRender conditional={!separation}>
        <li class={this.getClass} style={styleName} onClick={this.onClick}>
          {this.renderIcon(h)}

          {this.renderName(h)}

          {this.renderMore(h)}

          {this.renderSubMenu(h)}
        </li>

        <li slot="noMatch" class={`${selectorPrefix}-separation`} />
      </ConditionalRender>
    );
  },
};
