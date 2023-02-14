import { defineComponent, onMounted, ref, watch ,nextTick} from 'vue';
import { object } from 'vue-types';
import debounce from 'lodash.debounce';
import Hooks from '@baifendian/adherev-ui-hooks';
import Intl from '@baifendian/adherev-util-intl';
import Mixins from '@baifendian/adherev-util-mixins';
import Resource from '@baifendian/adherev-util-resource';

import { IntlProps } from './types';

export const configProviderProps = {
  intl: object<IntlProps>().def(() => ({
    lang: 'zh_CN',
    locales: {},
    prefix: 'local',
    mainLanguage: 'zh_CN',
  })),
};

const { forceUpdate } = Mixins;

const { useForceUpdate } = Hooks;

const ConfigProvider = defineComponent({
  name: 'adv-configprovider',
  mixins: [forceUpdate],
  props: configProviderProps,
  emits: ['intlInit', 'propsChange'],
  setup(props, { slots,emit }) {
    const isIntlInit = ref(false);

    const $forceUpdate = useForceUpdate();

    const propsChangeHandler = debounce(() => {
      emit('propsChange');
    }, 200);

    const init = () =>
      Intl.init(
        {
          prefix: props.intl.prefix || 'local',
          currentLocale: props.intl.lang,
          locales: props.intl.locales || {},
          mainLanguage: props.intl.mainLanguage || 'zh_CN',
        },
        Intl.isInit(),
      ).then(() => {
        Resource.Dict.value.LocalsMoment.value[props.intl.lang]();

        if (!isIntlInit.value) {
          isIntlInit.value = true;
          nextTick(function () {
            emit('intlInit');
          });
        } else {
          $forceUpdate();
          nextTick(propsChangeHandler);
        }
      });

    watch(
      [
        () => props.intl.lang,
        () => props.intl.locales,
        () => props.intl.prefix,
        () => props.intl.mainLanguage,
      ],
      () => init(),
    );

    onMounted(() => init());

    return () => (isIntlInit.value ? slots?.default?.() : null);
  },
});

export default ConfigProvider;
