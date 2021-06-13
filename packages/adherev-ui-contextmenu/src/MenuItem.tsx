// @ts-ignore
import classNames from 'classnames';
// @ts-ignore
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
// @ts-ignore
import Util from '@baifendian/adherev-util';

import { IMenuItemProps } from './types';
// @ts-ignore
import SubMenu from './SubMenu';

const selectorPrefix = 'adherev-ui-contextmenu-menuitem';

export default {
  props: {
    data: {
      type: Object,
      default: {},
      validator(val: IMenuItemProps): boolean {
        return val instanceof Object;
      },
    },
  },
  computed: {
    getClass() {
      const {
        // @ts-ignore
        data: { disabled = false, className },
      } = this;

      return classNames(
        selectorPrefix,
        disabled ? 'disabled' : '',
        // @ts-ignore
        (className || '').split(' '),
      );
    },
  },
  methods: {
    renderIcon(h) {
      // console.log('data', this.data, Util.isString(this.data.icon),Util.isObject(this.data.icon));

      const {
        // @ts-ignore
        data: { icon },
      } = this;

      return (
        // @ts-ignore
        <ConditionalRender conditional={Util.isString(icon)}>
          {/*@ts-ignore*/}
          <span class={classNames(`${selectorPrefix}-icon`, icon)} />
          {/*@ts-ignore*/}
          <ConditionalRender slot="noMatch" conditional={Util.isObject(icon)}>
            {/*@ts-ignore*/}
            <span class={classNames(`${selectorPrefix}-icon`)}>{h(icon)}</span>
            {/*@ts-ignore*/}
            <ConditionalRender slot="noMatch" conditional={Util.isFunction(icon)}>
              {/*@ts-ignore*/}
              <span class={classNames(`${selectorPrefix}-icon`)}>
                {Util.isFunction(icon) ? icon(h) : null}
              </span>
            </ConditionalRender>
          </ConditionalRender>
        </ConditionalRender>
      );
    },
    renderName(h) {
      const {
        // @ts-ignore
        data: { name },
      } = this;

      return (
        // @ts-ignore
        <ConditionalRender conditional={Util.isString(name)}>
          {/*@ts-ignore*/}
          <span class={classNames(`${selectorPrefix}-name`)}>{name}</span>
          {/*@ts-ignore*/}
          <ConditionalRender slot="noMatch" conditional={Util.isObject(name)}>
            {/*@ts-ignore*/}
            {<span class={classNames(`${selectorPrefix}-name`)}>{h(name)}</span>}
            {/*@ts-ignore*/}
            <ConditionalRender slot="noMatch" conditional={Util.isFunction(name)}>
              {/*@ts-ignore*/}
              <span class={classNames(`${selectorPrefix}-name`)}>
                {Util.isFunction(name) ? name(h) : null}
              </span>
            </ConditionalRender>
          </ConditionalRender>
        </ConditionalRender>
      );
    },
    renderMore(h) {
      const {
        // @ts-ignore
        data: { children },
      } = this;

      return (
        // @ts-ignore
        <ConditionalRender conditional={children.length !== 0}>
          {/*@ts-ignore*/}
          <span class={`${selectorPrefix}-more fa fa-caret-right`} />
        </ConditionalRender>
      );
    },
    renderSubMenu(h) {
      const {
        // @ts-ignore
        data: { children, subMenuClassName, subMenuStyle },
      } = this;

      return (
        // @ts-ignore
        <ConditionalRender conditional={children.length !== 0}>
          {/*@ts-ignore*/}
          <SubMenu data={children} className={subMenuClassName} styleName={subMenuStyle} />
        </ConditionalRender>
      );
    },
    onClick(e) {
      e.stopPropagation();

      const {
        // @ts-ignore
        data: { id, attribute, disabled, children },
      } = this;

      // @ts-ignore
      const { config, el } = this.getContext();
      // @ts-ignore
      const { handler } = config;

      if (disabled || (children || []).length > 0) return false;

      if (handler) {
        handler(id, attribute);

        // @ts-ignore
        this.$root.$destroy();
        // @ts-ignore
        el?.parentElement?.removeChild(el);
      }
    },
  },
  inject: ['getContext'],
  render(h) {
    const {
      // @ts-ignore
      data: { separation, styleName },
    } = this;

    return (
      // @ts-ignore
      <ConditionalRender conditional={!separation}>
        {/*@ts-ignore*/}
        <li class={this.getClass} style={styleName} onClick={this.onClick}>
          {/*@ts-ignore*/}
          {this.renderIcon(h)}
          {/*@ts-ignore*/}
          {this.renderName(h)}
          {/*@ts-ignore*/}
          {this.renderMore(h)}
          {/*@ts-ignore*/}
          {this.renderSubMenu(h)}
        </li>
        {/*@ts-ignore*/}
        <li slot="noMatch" class={`${selectorPrefix}-separation`} />
      </ConditionalRender>
    );
  },
};
