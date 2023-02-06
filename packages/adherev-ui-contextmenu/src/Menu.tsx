import classNames from 'classnames';
import { CSSProperties, computed, defineComponent, inject, ref } from 'vue';
import { array, object, string } from 'vue-types';

import { ContextReturnType } from './ContextMenu';
import MenuItem from './MenuItem';
import { IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

export const menuProps = {
  data: array<IData>().def([]),
  className: string().def(''),
  style: object<CSSProperties>().def({}),
};

export default defineComponent({
  props: menuProps,
  setup(props, { expose }) {
    const el = ref<HTMLUListElement | null>(null);

    const context = inject('context') as ContextReturnType;

    const getStyle = computed(() => {
      return {
        ...props.style,
        width: `${context.config.width}px`,
        zIndex: 99999 * 2 + 1,
      };
    });

    const getClass = computed(() =>
      classNames(selectorPrefix, (props.className || '').split(/\s+/)),
    );

    const mount = () => {
      let x = context.config.x;
      let y = context.config.y;

      const menuWidth = el.value?.offsetWidth as number;
      const menuHeight = el.value?.offsetHeight as number;

      const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
      const clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

      if (clientWidth - x < menuWidth) {
        x = clientWidth - menuWidth;
      }

      if (clientHeight - y < menuHeight) {
        y = clientHeight - menuHeight;
      }

      (el.value as HTMLElement).style.left = `${x}px`;

      (el.value as HTMLElement).style.top = `${y}px`;
    };

    const renderItems = (): JSX.Element[] =>
      props.data.map((item) => <MenuItem key={item.id} data={item} />);

    expose({
      mount,
    });

    return () => (
      <ul class={getClass.value} style={getStyle.value} ref={el}>
        {renderItems()}
      </ul>
    );
  },
});
