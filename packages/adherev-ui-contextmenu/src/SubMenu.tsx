import classNames from 'classnames';
import { CSSProperties, computed, defineComponent, inject } from 'vue';
import { array, object, string } from 'vue-types';

import { ContextReturnType } from './ContextMenu';
import MenuItem from './MenuItem';
import { IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

export const subMenuProps = {
  data: array<IData>().def([]),
  className: string().def(''),
  style: object<CSSProperties>().def({}),
};

export default defineComponent({
  props: subMenuProps,
  setup(props) {
    const context = inject('context') as ContextReturnType;

    const getClass = computed(() =>
      classNames(selectorPrefix, (props.className || '').split(/\s+/)),
    );

    const getStyle = computed(() => {
      return {
        ...props.style,
        width: `${context.config.width}px`,
        zIndex: 99999 * 2 + 1,
      };
    });

    const renderItems = (): JSX.Element[] =>
      props.data.map((item) => <MenuItem key={item.id} data={item} />);

    return () => (
      <ul class={getClass.value} style={getStyle.value}>
        {renderItems()}
      </ul>
    );
  },
});
