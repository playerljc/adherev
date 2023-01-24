import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/pt';
import 'dayjs/locale/zh-cn';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import { VNode } from 'vue';
import { Fragment } from 'vue-fragment';
import { createHOC } from 'vue-hoc';

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
    render(h): VNode {
      const dict = Resource.Dict.value[key].value;

      return !!this.value ? (
        <span>
          {dayjs(this.value).format(
            dict instanceof Function ? dict(this.split1, this.split2) : dict,
          )}
        </span>
      ) : (
        this.$slots.errorUI || null
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
  render(h) {
    return !!this.value ? (
      <span>{dayjs(this.value).locale(this.locale).fromNow(this.now)}</span>
    ) : null;
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
  render(h) {
    return !!this.value ? (
      <span>{dayjs(this.value).locale(this.locale).toNow(this.now)}</span>
    ) : null;
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
  render(h) {
    return !!this.value ? (
      <span>{dayjs(this.value).locale(this.locale).format(this.format)}</span>
    ) : null;
  },
};

// 本地
['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'].forEach((format) => {
  const options = {
    name: `adv-datedisplay-${format}`,
  };

  const Com = Components['DateDisplay'];

  Components[`DateDisplay${format}`] = createHOC(Com, options, {
    props(props) {
      return {
        ...props,
        format,
      };
    },
  });
});

export default Components;
