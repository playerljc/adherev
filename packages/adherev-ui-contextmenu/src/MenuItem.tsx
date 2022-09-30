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

    const renderIcon = (): JSX.Element => {
      return (
        // @ts-ignore
        <ConditionalRender conditional={Util?.isString?.(props.data.icon)}>
          {{
            // @ts-ignore
            default: () => <span class={classNames(`${selectorPrefix}-icon`, props.data.icon)} />,
            noMatch: () => (
              // @ts-ignore
              <ConditionalRender conditional={Util?.isObject?.(props.data.icon)}>
                {{
                  default: () => (
                    // @ts-ignore
                    <span class={classNames(`${selectorPrefix}-icon`)}>
                      {h(props.data.icon as object)}
                    </span>
                  ),
                  noMatch: () => (
                    // @ts-ignore
                    <ConditionalRender conditional={Util?.isFunction?.(props.data.icon)}>
                      {/*@ts-ignore*/}
                      <span class={classNames(`${selectorPrefix}-icon`)}>
                        {Util?.isFunction?.(props.data.icon)
                          ? (props.data.icon as Function)()
                          : null}
                      </span>
                    </ConditionalRender>
                  ),
                }}
              </ConditionalRender>
            ),
          }}
        </ConditionalRender>
      );
    };

    const renderName = (): JSX.Element => {
      return (
        // @ts-ignore
        <ConditionalRender conditional={Util?.isString?.(props.data.name)}>
          {{
            default: () => (
              // @ts-ignore
              <span class={classNames(`${selectorPrefix}-name`)}>{props.data.name}</span>
            ),
            noMatch: () => (
              // @ts-ignore
              <ConditionalRender conditional={Util?.isObject?.(props.data.name)}>
                {{
                  default: () => (
                    // @ts-ignore
                    <span class={classNames(`${selectorPrefix}-name`)}>
                      {h(props.data.name as object)}
                    </span>
                  ),
                  noMatch: () => (
                    // @ts-ignore
                    <ConditionalRender conditional={Util?.isFunction?.(props.data.name)}>
                      {/*@ts-ignore*/}
                      <span class={classNames(`${selectorPrefix}-name`)}>
                        {Util?.isFunction?.(props.data.name)
                          ? (props.data.name as Function)()
                          : null}
                      </span>
                    </ConditionalRender>
                  ),
                }}
              </ConditionalRender>
            ),
          }}
        </ConditionalRender>
      );
    };

    const renderMore = (): JSX.Element => (
      // @ts-ignore
      <ConditionalRender conditional={props?.data?.children?.length !== 0}>
        {/*@ts-ignore*/}
        <span class={`${selectorPrefix}-more fa fa-caret-right`} />
      </ConditionalRender>
    );

    const renderSubMenu = (): JSX.Element => (
      // @ts-ignore
      <ConditionalRender conditional={props?.data?.children?.length !== 0}>
        {/*@ts-ignore*/}
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
            // @ts-ignore
            <li class={getClass.value} style={props.data.style} onClick={onClick}>
              {renderIcon()}
              {renderName()}
              {renderMore()}
              {renderSubMenu()}
            </li>
          ),
          // @ts-ignore
          noMatch: () => <li class={`${selectorPrefix}-separation`} />,
        }}
      </ConditionalRender>
    );
  },
});
