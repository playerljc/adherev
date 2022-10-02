import { VNode } from 'vue';

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

const DelConfirm: any = {
  name: 'adv-delconfirm',
  props: {
    zIndex: {
      type: Number,
      required: false,
      default: Resource.Dict.value.ResourceNormalMaxZIndex.value,
    },
    success: {
      type: Function,
      required: false,
      default: () => {},
    },
    title: {
      type: String,
      required: false,
      default: intl.tv('提示'),
    },
    text: {
      type: String,
      required: false,
      default: `${intl.tv('确定删除吗')}?`,
    },
  },
  methods: {
    onClick(e) {
      e.stopPropagation();

      const { success, title, text, zIndex } = this;

      open({
        success,
        title,
        text,
        zIndex,
      });
    },
  },
  render(h): VNode {
    const { $slots } = this;

    return (
      <div class={selectorPrefix} onClick={this.onClick}>
        {$slots.default}
      </div>
    );
  },
};

export default DelConfirm;
