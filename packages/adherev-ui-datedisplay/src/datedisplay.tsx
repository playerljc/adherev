import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Resource from '@baifendian/adherev-util-resource';

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);

const keys = Object.keys(Resource.Dict.handlers).filter((dictName) =>
  dictName.startsWith('ResourceMomentFormat'),
);

const Components: {
  [props: string]: any;
} = {
  dayjs,
};

// 字典的组件
keys.forEach((key) => {
  const name = key.substring('ResourceMomentFormat'.length);

  Components[`DateDisplay${name}`] = {
    name: `adv-datedisplay-${name}`,
    props: {
      value: {
        type: [Object, Number, String, Date],
      },
      split1: {
        type: String,
        default: '-',
      },
      split2: {
        type: String,
        default: ':',
      },
    },
    setup(props, { slots }) {
      const dict = Resource.Dict.value[key].value;

      return () => (
        // @ts-ignore
        <ConditionalRender conditional={!!props.value}>
          {{
            default: () => {
              dayjs(props.value).format(
                dict instanceof Function ? dict(props.split1, props.split2) : dict,
              );
            },
            noMatch: () => slots?.errorUI?.(),
          }}
        </ConditionalRender>
      );
    },
  };
});

/**
 * DateDisplayFromNow
 * @constructor
 * @classdesc 返回现在到当前实例的相对时间
 */
Components[`DateDisplayFromNow`] = {
  name: `adv-datedisplay-fromnow`,
  props: {
    value: {
      type: [Object, Number, String, Date],
    },
    locale: {
      type: String,
      default: 'zh-cn',
    },
    now: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      // @ts-ignore
      <ConditionalRender conditional={!!props.value}>
        {{
          default: () => dayjs(props.value).locale(props.locale).fromNow(props.now),
        }}
      </ConditionalRender>
    );
  },
};

/**
 * DateDisplayToNow
 * @constructor
 * @classdesc 返回当前实例到现在的相对时间
 */
Components[`DateDisplayToNow`] = {
  name: `adv-datedisplay-tonow`,
  props: {
    value: {
      type: [Object, Number, String, Date],
    },
    locale: {
      type: String,
      default: 'zh-cn',
    },
    now: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      // @ts-ignore
      <ConditionalRender conditional={!!props.value}>
        {{
          default: () => dayjs(props.value).locale(props.locale).toNow(props.now),
        }}
      </ConditionalRender>
    );
  },
};

/**
 * DateDisplay
 * @constructor
 */
Components[`DateDisplay`] = {
  name: `adv-datedisplay`,
  props: {
    value: {
      type: [Object, Number, String, Date],
    },
    locale: {
      type: String,
      default: 'zh-cn',
    },
    format: {
      type: String,
    },
  },
  setup(props) {
    return () => (
      // @ts-ignore
      <ConditionalRender conditional={!!props.value}>
        {{
          default: () => dayjs(props.value).locale(props.locale).format(props.format),
        }}
      </ConditionalRender>
    );
  },
};

// 本地
['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'].forEach((format) => {
  const options = {
    name: `adv-datedisplay-${format}`,
  };

  const Com = Components['DateDisplay'];

  Components[`DateDisplay${format}`] = {
    ...Com,
    ...options,
    setup(props) {
      return () => <Com {...props} format={format} />;
    },
  };
});

export default Components;
