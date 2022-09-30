import classNames from 'classnames';
import copy from 'copy-to-clipboard';
import { computed, defineComponent } from 'vue';
import { bool, func, object } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

import Card, { CardProps } from './Card';
import Message from './Message';
import Constant from './constant';

const selectPrefix = 'adherev-ui-playground';

export const playGroundBaseProps = {
  // id: string().def(''),
  cardProps: object<CardProps>().def(),
  isActive: bool().def(false),
  defaultExpand: bool().def(false),
  getClipboardText: func<(e?: any) => Promise<string>>(),
};

export default defineComponent({
  name: 'adv-playground-base',
  props: playGroundBaseProps,
  emits: ['expand'],
  slots: ['codeView', 'copy', 'expand'],
  setup(props, { slots, emit }) {
    const expandIcon = computed(() =>
      props.defaultExpand ? Constant.DownSquareOutlined : Constant.UpSquareOutlined,
    );

    const expandAlt = computed(() => (props.defaultExpand ? Intl.v('收起') : Intl.v('展开')));

    const onCopy = (e: MouseEvent) => {
      props.getClipboardText?.(e)?.then((text) => {
        copy(text);
        Message.success(Intl.v('复制成功') as string);
      });
    };

    return () => {
      return (
        <div class={classNames(selectPrefix, props.isActive ? `${selectPrefix}-active` : '')}>
          <Card actions={['copy', 'expand']} {...(props.cardProps || {})}>
            {{
              default: () => slots?.default?.(),
              copy: () => (
                <img
                  class={`${selectPrefix}-action-btn`}
                  src={Constant.CopyOutlined}
                  alt={Intl.v('复制')}
                  onClick={onCopy}
                />
              ),
              expand: () => (
                <img
                  class={`${selectPrefix}-action-btn`}
                  src={expandIcon.value}
                  alt={expandAlt.value}
                  onClick={() => {
                    emit('expand', props.defaultExpand);
                  }}
                />
              ),
            }}
          </Card>

          {slots?.codeView?.()}
        </div>
      );
    };
  },
});
