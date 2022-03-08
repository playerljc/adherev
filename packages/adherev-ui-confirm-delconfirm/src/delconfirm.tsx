// @ts-ignore
import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';
import { defineComponent } from 'vue';
import { func, number } from 'vue-types';

const selectorPrefix = 'adherev-ui-delconfirm';

export function open(success?: Function, zIndex?: number) {
  MessageDialog.Confirm({
    title: intl.tv('提示'),
    text: `${intl.tv('确定删除吗')}?`,
    zIndex,
    onSuccess: () => {
      return new Promise<void>((resolve, reject) => {
        if (success) {
          success()
            .then(() => {
              resolve();
            })
            .catch(() => {
              reject();
            });
        } else {
          resolve();
        }
      });
    },
  });
}

const props = {
  zIndex: number().def(Resource.Dict.value.ResourceNormalMaxZIndex.value),
  success: func<() => void>(),
};

export default defineComponent({
  name: 'adv-delconfirm',
  props,
  setup(props, { slots }) {
    const onClick = () =>
      open(props.success, props.zIndex || Resource.Dict.value.ResourceNormalMaxZIndex.value);

    return () => (
      // @ts-ignore
      <div class={selectorPrefix} onClick={onClick}>
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
