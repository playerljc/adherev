import classNames from 'classnames';
import { PropType, VNode } from 'vue';
import { Fragment } from 'vue-fragment';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Util from '@baifendian/adherev-util';

import SubMenu from './SubMenu';
import { IMenuItemProps } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-menuitem';

const MenuItem: any = {
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

      return classNames(selectorPrefix, disabled ? 'disabled' : '', (className || '').split(/\s+/));
    },
  },
  methods: {
    renderIcon(h): VNode {
      const {
        data: { icon },
      } = this;

      return (
        <ConditionalRender conditional={Util.isString(icon)}>
          <span class={classNames(`${selectorPrefix}-icon`, icon)} />

          {/*@ts-ignore*/}
          <Fragment slot="noMatch">
            <ConditionalRender conditional={Util.isObject(icon)}>
              <span class={classNames(`${selectorPrefix}-icon`)}>{h(icon)}</span>

              {/*@ts-ignore*/}
              <Fragment slot="noMatch">
                <ConditionalRender conditional={Util.isFunction(icon)}>
                  <span class={classNames(`${selectorPrefix}-icon`)}>
                    {Util.isFunction(icon) ? icon(h) : null}
                  </span>
                </ConditionalRender>
              </Fragment>
            </ConditionalRender>
          </Fragment>
        </ConditionalRender>
      );
    },
    renderName(h): VNode {
      const {
        data: { name },
      } = this;

      return (
        <ConditionalRender conditional={Util.isString(name)}>
          <span class={classNames(`${selectorPrefix}-name`)}>{name}</span>

          {/*@ts-ignore*/}
          <Fragment slot="noMatch">
            <ConditionalRender conditional={Util.isObject(name)}>
              {<span class={classNames(`${selectorPrefix}-name`)}>{h(name)}</span>}

              {/*@ts-ignore*/}
              <Fragment slot="noMatch">
                <ConditionalRender conditional={Util.isFunction(name)}>
                  <span class={classNames(`${selectorPrefix}-name`)}>
                    {Util.isFunction(name) ? name(h) : null}
                  </span>
                </ConditionalRender>
              </Fragment>
            </ConditionalRender>
          </Fragment>
        </ConditionalRender>
      );
    },
    renderMore(h): VNode {
      const {
        data: { children },
      } = this;

      return (
        <ConditionalRender conditional={children.length !== 0}>
          <span class={`${selectorPrefix}-more fa fa-caret-right`} />
        </ConditionalRender>
      );
    },
    renderSubMenu(h): VNode {
      const {
        data: { children, subMenuClassName, subMenuStyle },
      } = this;

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
  render(h): VNode {
    const {
      data: { separation, styleName },
    } = this;

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

export default MenuItem;
