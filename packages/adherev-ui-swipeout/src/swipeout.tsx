import classNames from 'classnames';
import Swiper from 'swiper';
import { CSSProperties, VNode, computed, defineComponent, onMounted, ref, watch } from 'vue';
import { bool, number, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-swipeout';

export const swiperOutProps = {
  beforeClassName: string().def(''),
  beforeStyle: object<CSSProperties>().def({}),
  afterClassName: string().def(''),
  afterStyle: object<CSSProperties>().def({}),
  contentClassName: string().def(''),
  contentStyle: object<CSSProperties>().def({}),
  beforeShow: bool().def(false),
  afterShow: bool().def(false),
  direction: string().def('horizontal'),
  duration: number().def(0),
  renderBefore: object<VNode>(),
  renderAfter: object<VNode>(),
};

export default defineComponent({
  name: 'adv-swipeout',
  props: swiperOutProps,
  emits: ['init', 'slide-change-transition-start', 'slide-change-transition-end'],
  slots: ['before', 'after'],
  setup(props, { slots, emit }) {
    const root = ref<HTMLElement>();

    let swiper: any = null;
    const map = new Map<string, number>([
      [[true, true].toString(), 1],
      [[false, false].toString(), 1],
      [[true, false].toString(), 0],
      [[false, true].toString(), 2],
    ]);

    const getContainerClassName = computed(() => classNames(selectorPrefix, 'swiper-container'));

    const getBeforeClassName = computed(() =>
      classNames('swiper-slide', `${selectorPrefix}-before`, props.beforeClassName.split(/\s+/)),
    );

    const getContentClassName = computed(() =>
      classNames('swiper-slide', `${selectorPrefix}-content`, props.contentClassName.split(/\s+/)),
    );

    const getAfterClassName = computed(() =>
      classNames('swiper-slide', `${selectorPrefix}-after`, props.afterClassName.split(/\s+/)),
    );

    const createSwiper = () => {
      if (swiper) {
        swiper.destroy();
      }

      swiper = new Swiper(root.value, {
        init: false,
        // 初始化在第一个选项卡上
        initialSlide: map.get([props.beforeShow, props.afterShow].toString()),
        direction: props.direction,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
      });

      swiper.on('init', () => {
        emit('init');
      });

      swiper.on('slideChangeTransitionStart', () => {
        emit('slide-change-transition-start', swiper.activeIndex);
      });

      swiper.on('slideChangeTransitionEnd', () => {
        emit('slide-change-transition-end', swiper.activeIndex);
      });

      swiper.init();
    };

    const slide = (params: any): void =>
      swiper.slideTo(map.get([params.beforeShow, params.afterShow].toString()), params.duration);

    watch(
      () => props.direction,
      (direction, oldDirection) => {
        if (direction !== oldDirection) {
          swiper.changeDirection(direction);
        }
      },
    );

    watch(
      () => props.beforeShow,
      (val, oldVal) => {
        if (val !== oldVal) {
          slide({
            beforeShow: val,
            afterShow: props.afterShow,
            duration: props.duration,
          });
        }
      },
    );

    watch(
      () => props.afterShow,
      (val, oldVal) => {
        if (val !== oldVal) {
          slide({
            beforeShow: props.beforeShow,
            afterShow: val,
            duration: props.duration,
          });
        }
      },
    );

    onMounted(() => {
      createSwiper();
    });

    return () => (
      <div class={getContainerClassName.value} ref={root}>
        <div class="swiper-wrapper">
          <div class={getBeforeClassName.value} style={props.beforeStyle}>
            {slots?.before?.() || props.renderBefore}
          </div>
          <div class={getContentClassName.value} style={props.contentStyle}>
            {slots?.default?.()}
          </div>
          <div class={getAfterClassName.value} style={props.afterStyle}>
            {slots?.after?.() || props.renderAfter}
          </div>
        </div>
      </div>
    );
  },
});
