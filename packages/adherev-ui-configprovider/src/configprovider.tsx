import { defineComponent, onMounted, ref, watch } from 'vue';
import { object } from 'vue-types';

import Hooks from '@baifendian/adherev-ui-hooks';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';
import Resource from '@baifendian/adherev-util-resource';

import { IntlProps } from './types';

const props = {
  intl: object<IntlProps>().def(() => ({
    lang: 'zh_CN',
    locales: {},
    prefix: 'local',
  })),
};

const { forceUpdate } = Mixins;

const { useForceUpdate } = Hooks;

const ConfigProvider = defineComponent({
  name: 'adv-configprovider',
  mixins: [forceUpdate],
  props,
  setup(props, { slots }) {
    const isIntlInit = ref(false);

    const $forceUpdate = useForceUpdate();

    const init = () =>
      Intl.init(
        {
          prefix: props.intl.prefix || 'local',
          currentLocale: props.intl.lang,
          locales: props.intl.locales || {},
        },
        Intl.isInit(),
      ).then(() => {
        Resource.Dict.value.LocalsMoment.value[props.intl.lang]();

        if (!isIntlInit.value) {
          isIntlInit.value = true;
        } else {
          $forceUpdate();
        }
      });

    watch([() => props.intl.lang, () => props.intl.locales, () => props.intl.prefix], () => init());

    onMounted(() => init());

    return () => (isIntlInit.value ? slots?.default?.() : null);
  },
});

export default ConfigProvider;
