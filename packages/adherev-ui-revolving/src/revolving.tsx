import classNames from 'classnames';
// @ts-ignore
import Swiper from 'swiper';
import { CSSProperties, computed, defineComponent, onMounted, onUpdated, ref } from 'vue';
import { bool, number, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-revolving';

enum direction {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

const revolvingProps = {
  classNameWrapper: string().def(''),
  wrapperStyle: object<CSSProperties>().def({}),
  speed: number().def(1000),
  delay: number().def(1000),
  direction: string<direction>().def(direction.top),
  loop: bool().def(true),
  stopOnLastSlide: bool().def(false),
  listeners: object<object>().def({}),
};

export default defineComponent({
  name: 'adv-revolving',
  props: revolvingProps,
  setup(props, { expose, slots }) {
    const el = ref<HTMLDivElement>();
    const wrapperEl = ref<HTMLDivElement>();

    const getWrapperClass = computed(() =>
      classNames(
        `${selectorPrefix}-wrapper`,
        'swiper-wrapper',
        (props.classNameWrapper || '').split(/\s+/),
      ),
    );

    let swiper: any = null;

    const initial = () => {
      if (swiper) {
        if ('destory' in swiper && swiper.destory instanceof Function) {
          swiper.destory();
        }

        swiper = null;
      }

      swiper = new Swiper(el.value, {
        allowTouchMove: false,
        direction: getDirection(props.direction),
        loop: props.loop,
        speed: props.speed,
        autoplay: {
          delay: props.delay,
          stopOnLastSlide: props.stopOnLastSlide,
          reverseDirection: props.direction === 'right' || props.direction === 'bottom',
        },
        on: props.listeners,
      });
    };

    const getDirection = (direction: string) =>
      direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';

    const start = () => swiper.autoplay.start();

    const stop = () => swiper.autoplay.stop();

    const isRunning = () => swiper.autoplay.running;

    onMounted(() => {
      initial();
    });

    onUpdated(() => {
      initial();
    });

    expose({
      start,
      stop,
      isRunning,
    });

    return () => (
      <div
        class={classNames(selectorPrefix, 'swiper-container')}
        // @ts-ignore
        ref={el}
      >
        <div
          class={getWrapperClass.value}
          style={props.wrapperStyle}
          // @ts-ignore
          ref={wrapperEl}
        >
          {slots?.default?.()}
        </div>
      </div>
    );
  },
});
