import { Button } from 'ant-design-vue';
import { CSSProperties, computed, defineComponent, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { array, bool, object, string } from 'vue-types';

import HistoryBack from '@baifendian/adherev-ui-historyback';
import Intl from '@baifendian/adherev-util-intl';

import ToolBarLayout from './toolBarLayout';
import { AutoProps, FixedProps } from './types';

const props = {
  topClassName: string().def(''),
  topStyle: object<CSSProperties>().def({}),
  bottomClassName: string().def(''),
  bottomStyle: object<CSSProperties>().def({}),
  mainClassName: string().def(''),
  mainStyle: object<CSSProperties>().def({}),
  mainAutoWrapClassName: string().def(''),
  mainAutoStyle: object<CSSProperties>().def({}),
  mainWrapClassName: string().def(''),
  mainWrapStyle: object<CSSProperties>().def({}),
  topProps: object<FixedProps>().def({}),
  bottomProps: object<FixedProps>().def({}),
  mainProps: object<AutoProps>().def({}),
  mainAutoWrapProps: object<AutoProps>().def({}),
  topToolBarSlotNames: array<string>().def([]),
  bottomToolBarSlotNames: array<string>().def([]),
  backPath: string().def('/'),
  enforceBackPath: string().def(''),
  isShowBack: bool().def(true),
};

export default defineComponent({
  name: 'adv-flexlayout-back',
  props,
  setup(props, { slots }) {
    const router = useRouter();

    const renderToolBarItems = () => {
      const slotsObj = {};

      (props.topToolBarSlotNames || []).forEach(
        (slotName) => (slotsObj[slotName] = () => slots?.[slotName]?.()),
      );

      if (props.isShowBack) {
        slotsObj['$back'] = () => (
          <Button
            onClick={() => {
              if (props.enforceBackPath) {
                router.replace(props.enforceBackPath);
              } else {
                HistoryBack(router, props.backPath);
              }
            }}
          >
            {slots?.backTitle?.() || Intl.tv('返回')}
          </Button>
        );
      }

      return slotsObj;
    };

    const renderBottomToolBarItems = () => {
      const slotsObj = {};

      (props.bottomToolBarSlotNames || []).forEach(
        (slotName) => (slotsObj[slotName] = () => slots?.[slotName]?.()),
      );

      return slotsObj;
    };

    const otherProps = computed(() => {
      const { isShowBack, backPath, enforceBackPath, ...others } = toRefs(props);

      const _props = {};

      for (const p in others) {
        if (p in others) {
          _props[p] = others[p].value;
        }
      }

      return _props;
    });

    return () => (
      <ToolBarLayout
        {...{
          ...(otherProps.value || {}),
          topToolBarSlotNames: [...(props.topToolBarSlotNames || []), '$back'],
        }}
      >
        {{
          default: () => slots?.default?.(),
          ...renderToolBarItems(),
          ...renderBottomToolBarItems(),
        }}
      </ToolBarLayout>
    );
  },
});
