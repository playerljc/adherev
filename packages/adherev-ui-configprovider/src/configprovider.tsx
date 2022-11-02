import debounce from 'lodash.debounce';
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
  emits: ['intlInit', 'propsChange'],
  data() {
    return {
      isIntlInit: false,
      $propsChangeHandler: null,
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
    'intl.mainLanguage': function () {
      this.$init();
    },
  },
  created() {
    this.$data.$propsChangeHandler = debounce(() => {
      this.$emit('propsChange');
    }, 200);
  },
  methods: {
    $init() {
      Intl.init(
        {
          prefix: this.intl.prefix || 'local',
          currentLocale: this.intl.lang,
          locales: this.intl.locales || {},
          mainLanguage: this.intl.mainLanguage || 'zh_CN',
        },
        Intl.isInit(),
      ).then(() => {
        Resource.Dict.value.LocalsMoment.value[this.intl.lang]();

        if (!this.isIntlInit) {
          this.isIntlInit = true;
          this.$nextTick(function () {
            this.$emit('intlInit');
          });
        } else {
          this.$forceUpdate();
          this.$nextTick(this.$data.$propsChangeHandler);
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
