import classNames from 'classnames';
import { CSSProperties, computed, defineComponent, inject } from 'vue';
import { array, object, string } from 'vue-types';

import { ContextReturnType } from './ContextMenu';
import MenuItem from './MenuItem';
import { IData } from './types';

const selectorPrefix = 'adherev-ui-contextmenu-submenu';

const props = {
  data: array<IData>().def([]),
  className: string().def(''),
  style: object<CSSProperties>().def({}),
};

export default defineComponent({
  props,
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
      // @ts-ignore
      props.data.map((item) => <MenuItem key={item.id} data={item} />);

    return () => (
      // @ts-ignore
      <ul class={getClass.value} style={getStyle.value}>
        {renderItems()}
      </ul>
    );
  },
});
