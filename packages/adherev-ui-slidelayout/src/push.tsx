import classNames from 'classnames';
import { CSSProperties, defineComponent, ref, watch } from 'vue';
import { object, string } from 'vue-types';

import useSlide, { slideProps } from './slide';
import { slider } from './slidelayout';

const selectorPrefix = 'adherev-ui-slidelayout-push';

const pushProps = {
  ...slideProps,
  className: string().def(''),
  style: object<CSSProperties>().def({}),
  slaveClassName: string().def(''),
  slaveStyle: object<CSSProperties>().def({}),
};

export default defineComponent({
  name: 'adv-slidelayout-push',
  props: pushProps,
  slots: ['slide', 'master'],
  emits: ['after-show', 'after-close'],
  setup(props, context) {
    const { slots, emit } = context;
    const pMasterEl = ref<HTMLDivElement>();
    const pSlaveEl = ref<HTMLDivElement>();

    const { setPositionConfig, getDuration, getElRef } = useSlide(props, context);

    setPositionConfig(({ el, maskEl }) => ({
      init: {
        left: () => {
          el.value.style.left = '0';
          (pSlaveEl.value as HTMLElement).style.left = `${el.value.offsetWidth}px`;
          slider(pMasterEl.value, `-${el.value.offsetWidth}px`, '0', '0', '0');
        },
        right: () => {
          el.value.style.right = '0';
          (pSlaveEl.value as HTMLElement).style.right = `${el.value.offsetWidth}px`;
          slider(pMasterEl.value, `${el.value.offsetWidth}px`, '0', '0', '0');
        },
      },
      show: {
        left: (time: string | number | null | undefined) => {
          slider(pMasterEl.value, '0', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-show');
          });

          if (maskEl) maskEl.style.display = 'block';
        },
        right: (time: string | number | null | undefined) => {
          slider(pMasterEl.value, '0', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-show');
          });

          if (maskEl) maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time: string | number | null | undefined) => {
          slider(
            pMasterEl.value,
            `-${el.value.offsetWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-close');
            },
          );

          if (maskEl) maskEl.style.display = 'none';
        },
        right: (time: string | number | null | undefined) => {
          slider(
            pMasterEl.value,
            `${el.value.offsetWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-close');
            },
          );

          if (maskEl) maskEl.style.display = 'none';
        },
      },
    }));

    watch(
      () => props.zIndex,
      (val) => {
        (pMasterEl.value as HTMLElement).style.zIndex = `${val - 1}`;

        (getElRef().value as HTMLElement).style.zIndex = `${val}`;

        (pSlaveEl.value as HTMLElement).style.zIndex = `${val - 2}`;
      },
    );

    return () => (
      <div class={`${selectorPrefix}-master`} ref={pMasterEl}>
        <div
          class={classNames(selectorPrefix, props.direction, props.className.split(/\s+/))}
          style={props.style}
          ref={getElRef()}
        >
          {slots?.slide?.()}
        </div>

        <div
          class={classNames(`${selectorPrefix}-slave`, (props.slaveClassName || '').split(/\s+/))}
          style={props.slaveStyle}
          ref={pSlaveEl}
        >
          {slots?.master?.()}
        </div>
      </div>
    );
  },
});
