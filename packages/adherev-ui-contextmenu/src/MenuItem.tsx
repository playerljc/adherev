import classNames from 'classnames';
import { computed, defineComponent, h, inject } from 'vue';
import { object } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Util from '@baifendian/adherev-util';

import { ContextReturnType } from './ContextMenu';
import SubMenu from './SubMenu';
import { IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-menuitem';

const props = {
  data: object<IData>().def({}),
};

export default defineComponent({
  props,
  setup(props) {
    const context = inject('context') as ContextReturnType;
    const root = inject('root') as any;

    const getClass = computed(() =>
      classNames(
        selectorPrefix,
        props.data.disabled ? 'disabled' : '',
        (props.data.className || '').split(/\s+/),
      ),
    );

    const renderIcon = (): JSX.Element | null => {
      if (props.data.icon && Util?.isString?.(props.data.icon)) {
        return <span class={classNames(`${selectorPrefix}-icon`, props.data.icon as string)} />;
      }

      if (props.data.icon && Util?.isObject?.(props.data.icon)) {
        return (
          <span class={classNames(`${selectorPrefix}-icon`)}>{h(props.data.icon as object)}</span>
        );
      }

      if (props.data.icon && Util?.isFunction?.(props.data.icon)) {
        return (
          <span class={classNames(`${selectorPrefix}-icon`)}>
            {(props.data.icon as Function)(h, { ...props.data })}
          </span>
        );
      }

      return null;
    };

    const renderName = (): JSX.Element | null => {
      if (props.data.name && Util?.isString?.(props.data.name)) {
        return <span class={classNames(`${selectorPrefix}-name`)}>{props.data.name}</span>;
      }

      if (props.data.name && Util?.isObject?.(props.data.name)) {
        return (
          <span class={classNames(`${selectorPrefix}-name`)}>{h(props.data.name as object)}</span>
        );
      }

      if (props.data.name && Util?.isFunction?.(props.data.name)) {
        return (
          <span class={classNames(`${selectorPrefix}-name`)}>
            {(props.data.name as Function)(h, { ...props.data })}
          </span>
        );
      }

      return null;
    };

    const renderMore = (): JSX.Element => (
      // @ts-ignore
      <ConditionalRender conditional={props?.data?.children?.length !== 0}>
        <span class={`${selectorPrefix}-more fa fa-caret-right`} />
      </ConditionalRender>
    );

    const renderSubMenu = (): JSX.Element => (
      // @ts-ignore
      <ConditionalRender conditional={props?.data?.children?.length !== 0}>
        <SubMenu
          data={props?.data?.children}
          className={props.data.subMenuClassName}
          style={props.data.subMenuStyle}
        />
      </ConditionalRender>
    );

    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      // const { config, el } = inject('getContext') as ContextReturnType;

      const { handler } = context.config;

      if (props.data.disabled || (props.data.children || []).length > 0) return false;

      if (handler) {
        handler(props.data.id, props.data.attribute);

        (root as any).unmount();

        context.el?.parentElement?.removeChild(context.el);
      }
    };

    return () => (
      // @ts-ignore
      <ConditionalRender conditional={!props.data.separation}>
        {{
          default: () => (
            <li
              class={getClass.value}
              style={props.data.style}
              // @ts-ignore
              onClick={onClick}
            >
              {renderIcon()}
              {renderName()}
              {renderMore()}
              {renderSubMenu()}
            </li>
          ),
          noMatch: () => <li class={`${selectorPrefix}-separation`} />,
        }}
      </ConditionalRender>
    );
  },
});
