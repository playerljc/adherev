// @ts-ignore
import { defineComponent } from 'vue';
import { func, number, string } from 'vue-types';

import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-delconfirm';

/**
 * open
 * @param success
 * @param params
 */
export function open({ success, ...params }) {
  MessageDialog.Confirm({
    ...params,
    title: params.title || intl.tv('提示'),
    text: params.text || `${intl.tv('确定删除吗')}?`,
    zIndex: 'zIndex' in params ? params.zIndex : Resource.Dict.value.ResourceNormalMaxZIndex.value,
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
  success: func<() => Promise<void>>(),
  title: string().def(intl.tv('提示')),
  text: string().def(intl.tv('确定删除吗')),
};

export default defineComponent({
  name: 'adv-delconfirm',
  props,
  setup(props, { slots }) {
    const onClick = () =>
      open({
        success: props.success,
        title: props.title,
        text: props.text,
        zIndex: props.zIndex,
      });

    return () => (
      // @ts-ignore
      <div class={selectorPrefix} onClick={onClick}>
        {slots.default ? slots.default() : null}
      </div>
    );
  },
});
