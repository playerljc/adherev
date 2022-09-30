import { defineComponent, onMounted, ref, watch } from 'vue';
import { number } from 'vue-types';

const selectorPrefix = 'adherev-ui-sliderscale';

const sloderScaleProps = {
  min: number().def(0),
  max: number().def(100),
  step: number().def(1),
  value: number().def(0),
  interval: number().def(5),
};

export default defineComponent({
  name: 'adv-sliderscale',
  props: sloderScaleProps,
  emits: ['change'],
  setup(props, { emit }) {
    const rangeEl = ref<HTMLInputElement>();

    let preValue: any = null;

    const touchEvent = (e: { target: { value: any } }) => {
      const { value } = e.target;

      (rangeEl.value as HTMLInputElement).value = value;

      if (preValue !== value) {
        preValue = value;
        emit('change', value);
      }
    };

    const renderScale = (): JSX.Element[] => {
      const itResult: JSX.Element[] = [];

      for (let i: number = props.min; i < props.max; i++) {
        if (props.max - 1 === props.min) {
          break;
        }

        let itemJSX: JSX.Element | null = null;

        if ((i + 1) % props.interval === 0) {
          itemJSX = (
            <div key={i} class={`${selectorPrefix}-scale-item ${selectorPrefix}-scale-item-point`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
            </div>
          );
        } else if (i === props.min) {
          itemJSX = (
            <div key={i} class={`${selectorPrefix}-scale-item`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{props.min}</span>
            </div>
          );
        } else if ((i + 1) % props.interval !== 0 && i === props.max - 1) {
          itemJSX = (
            <div key={i} class={`${selectorPrefix}-scale-item`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
            </div>
          );
        } else {
          itemJSX = <div key={i} class={`${selectorPrefix}-scale-item`} />;
        }

        itResult.push(itemJSX);
      }

      const result: JSX.Element[] = [];

      if (props.min === props.max) {
        result.push(
          <div key={0} class={`${selectorPrefix}-scale-item`}>
            <span class={`${selectorPrefix}-scale-item-value`}>0</span>
            <span class={`${selectorPrefix}-scale-item-value`} style={{ right: 0, left: 'auto' }}>
              {props.max}
            </span>
          </div>,
        );
      } else {
        if (props.max - 1 === props.min) {
          result.push(
            <div key={props.min} class={`${selectorPrefix}-scale-item`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{props.min}</span>
              <span class={`${selectorPrefix}-scale-item-value`} style={{ right: 0, left: 'auto' }}>
                {props.max}
              </span>
            </div>,
          );
        }
      }

      return result.concat(itResult);
    };

    const onMousemove = (e: { target: { value: any } }) => touchEvent(e);

    const onTouchmove = (e: { target: { value: any } }) => touchEvent(e);

    onMounted(() => {
      (rangeEl.value as HTMLInputElement).value = `${props.value}`;
    });

    watch(
      () => props.value,
      (newValue) => {
        (rangeEl.value as HTMLInputElement).value = `${newValue}`;
      },
    );

    return () => (
      <div class={selectorPrefix}>
        <div class={`${selectorPrefix}-scale`}>{renderScale()}</div>

        <input
          ref={rangeEl}
          class={`${selectorPrefix}-range`}
          type="range"
          min={props.min}
          max={props.max}
          step={props.step}
          // @ts-ignore
          onMousemove={onMousemove}
          // @ts-ignore
          onTouchmove={onTouchmove}
        />
      </div>
    );
  },
});
