import { VNode } from 'vue';
import Resource from '@baifendian/adherev-util-resource';
import MessageDialog from '@baifendian/adherev-ui-messagedialog';
import intl from '@baifendian/adherev-util-intl';

const selectorPrefix = 'adherev-ui-delconfirm';

export function open(success, zIndex) {
  MessageDialog.Confirm({
    title: intl.tv('提示'),
    text: `${intl.tv('确定删除吗')}?`,
    zIndex,
    onSuccess: () => {
      return new Promise((resolve, reject) => {
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

export default {
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
  },
  methods: {
    onClick(e) {
      e.stopPropagation();

      // @ts-ignore
      const { success, zIndex = Resource.Dict.value.ResourceNormalMaxZIndex.value } = this;

      open(success, zIndex || Resource.Dict.value.ResourceNormalMaxZIndex.value);
    },
  },
  render(h): VNode {
    // @ts-ignore
    const { $slots } = this;

    // @ts-ignore
    return (
      // @ts-ignore
      <div class={selectorPrefix} onClick={this.onClick}>
        {$slots.default}
      </div>
    );
  },
};
