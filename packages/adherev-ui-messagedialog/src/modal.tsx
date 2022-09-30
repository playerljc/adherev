import { Button, Modal } from 'ant-design-vue';
import { defineComponent, toRaw } from 'vue';
import { any, bool, func } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

export const selectorPrefix = 'adherev-ui-messagedialog';

const props = {
  config: any(),
  closeBtn: bool().def(true),
  onClose: func(),
};

export default defineComponent({
  props,
  slots: ['title', 'footer'],
  setup(props, { slots }) {
    // const onEmitterClose = () => {
    //   if (!!props.onClose) {
    //     props.onClose();
    //   }
    // };

    const renderCloseBtn = (): JSX.Element => {
      return (
        // @ts-ignore
        <Button
          key="close"
          type={!props.config.footerJSX ? 'primary' : ''}
          title={Intl.tv('取消')}
          onClick={() => {
            if (!!props.onClose) {
              props.onClose();
            }
          }}
        >
          {Intl.tv('取消')}
        </Button>
      );
    };

    const renderDefault = () => slots.default?.();

    const renderTitle = () => slots.title?.();

    const renderFooter = (): JSX.Element | null => {
      let result: JSX.Element | null = null;

      if (props.config.footerJSX) {
        if (props.closeBtn) {
          result = <div>{[...props.config.footerJSX, renderCloseBtn()]}</div>;
        } else {
          result = <div>{props.config.footerJSX}</div>;
        }
      } else {
        if (props.closeBtn) {
          result = renderCloseBtn();
        }
      }

      return result;
    };

    // onMounted(() => {
    //   Emitter.on(Actions.close, onEmitterClose);
    // });

    // onBeforeUnmount(() => {
    //   Emitter.remove(Actions.close, onEmitterClose);
    // });

    return () => {
      const { footer, centered, title, ...other } = toRaw(props.config);

      return (
        // @ts-ignore
        <Modal
          {...other}
          centered={centered === undefined || centered === null ? true : centered}
          wrapClassName={selectorPrefix}
          onCancel={() => {
            if (!!props.onClose) {
              props.onClose();
            }
          }}
          visible
        >
          {{
            default: () => renderDefault(),
            title: () => renderTitle(),
            footer: () => renderFooter(),
          }}
        </Modal>
      );
    };
  },
});
