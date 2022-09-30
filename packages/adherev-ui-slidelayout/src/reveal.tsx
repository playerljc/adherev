import classNames from 'classnames';
import { CSSProperties, defineComponent, ref, watch } from 'vue';
import { object, string } from 'vue-types';

import useSlide, { slideProps } from './slide';
import { slider } from './slidelayout';

const selectorPrefix = 'adherev-ui-slidelayout-reveal';

const revealProps = {
  ...slideProps,
  masterClassName: string().def(''),
  masterStyle: object<CSSProperties>().def({}),
  slaveClassName: string().def(''),
  slaveStyle: object<CSSProperties>().def({}),
};

export default defineComponent({
  name: 'adv-slidelayout-reveal',
  props: revealProps,
  slots: ['slide', 'master'],
  emits: ['after-show', 'after-close'],
  setup(props, context) {
    const { slots, emit } = context;

    const rMasterEl = ref<HTMLElement>();

    const { getElRef, setPositionConfig, getDuration } = useSlide(props, context);

    setPositionConfig(({ el, maskEl }) => ({
      init: {
        left: () => {
          el.value.style.zIndex = props.zIndex;
          (rMasterEl.value as HTMLElement).style.zIndex = `${props.zIndex + 1}`;
          el.value.style.left = '0';
        },
        right: () => {
          el.value.style.zIndex = props.zIndex;
          (rMasterEl.value as HTMLElement).style.zIndex = `${props.zIndex + 1}`;
          el.value.style.right = '0';
        },
      },
      show: {
        left: (time: string | number | null | undefined) => {
          el.value.style.zIndex = props.zIndex;
          if (maskEl) maskEl.style.zIndex = props.zIndex - 1;
          (rMasterEl.value as HTMLElement).style.zIndex = `${props.zIndex - 2}`;

          slider(
            rMasterEl.value,
            `${el.value.offsetWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-show');
            },
          );

          if (maskEl) maskEl.style.display = 'block';
        },
        right: (time: string | number | null | undefined) => {
          el.value.style.zIndex = props.zIndex;
          if (maskEl) maskEl.style.zIndex = props.zIndex - 1;
          (rMasterEl.value as HTMLElement).style.zIndex = `${props.zIndex - 2}`;

          slider(
            rMasterEl.value,
            `-${el.value.offsetWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-show');
            },
          );

          if (maskEl) maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time: string | number | null | undefined) => {
          el.value.style.zIndex = props.zIndex;
          (rMasterEl.value as HTMLElement).style.zIndex = `${props.zIndex + 1}`;
          slider(rMasterEl.value, '0', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-close');
          });

          if (maskEl) maskEl.style.display = 'none';
        },
        right: (time: string | number | null | undefined) => {
          el.value.style.zIndex = props.zIndex;
          (rMasterEl.value as HTMLElement).style.zIndex = `${props.zIndex + 1}`;
          slider(rMasterEl.value, '0', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-close');
          });

          if (maskEl) maskEl.style.display = 'none';
        },
      },
    }));

    watch(
      () => props.zIndex,
      (val) => {
        (getElRef().value as HTMLElement).style.zIndex = `${val}`;
        (rMasterEl.value as HTMLElement).style.zIndex = `${val + 1}`;
      },
    );

    return () => (
      <>
        <div
          class={classNames(
            `${selectorPrefix}`,
            props.direction,
            (props.slaveClassName || '').split(/\s+/),
          )}
          style={props.slaveStyle}
          // @ts-ignore
          ref={getElRef()}
        >
          {slots?.slide?.()}
        </div>

        <div
          class={classNames(`${selectorPrefix}-master`, (props.masterClassName || '').split(/\s+/))}
          style={props.masterStyle}
          // @ts-ignore
          ref={rMasterEl}
        >
          {slots?.master?.()}
        </div>
      </>
    );
  },
});
