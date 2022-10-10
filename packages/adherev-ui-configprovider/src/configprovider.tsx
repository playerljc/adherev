import { PropType, VNode } from 'vue';

import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

import { ConfigProviderProps } from './types';

const ConfigProvider: any = {
  name: 'adv-configprovider',
  props: {
    intl: {
      type: Object as PropType<ConfigProviderProps>,
      default: () => ({}),
    },
  },
  data() {
    return {
      isIntlInit: false,
    };
  },
  provide() {
    return {};
  },
  watch: {
    'intl.lang': function () {
      this.$init();
    },
    'intl.locales': function () {
      this.$init();
    },
    'intl.prefix': function () {
      this.$init();
    },
  },
  methods: {
    $init() {
      Intl.init(
        {
          prefix: this.intl.prefix || 'local',
          currentLocale: this.intl.lang,
          locales: this.intl.locales || {},
        },
        Intl.isInit(),
      ).then(() => {
        Resource.Dict.value.LocalsMoment.value[this.intl.lang]();

        if (!this.isIntlInit) {
          this.isIntlInit = true;
        } else {
          this.$forceUpdate();
        }
      });
    },
  },
  mounted() {
    this.$init();
  },
  render(h): VNode | null {
    return this.isIntlInit ? this?.$slots?.default : null;
  },
};

export default ConfigProvider;
