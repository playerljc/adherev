import classNames from 'classnames';
import Swiper from 'swiper';

import { ISwipeOutProps } from './types';

const selectorPrefix = 'adherev-ui-swipeout';

export default {
  name: 'adv-swipeout',
  props: {
    className: {
      type: String,
      default: '',
    },
    beforeClassName: {
      type: String,
      default: '',
    },
    beforeStyle: {
      type: String,
      default: '',
    },
    afterClassName: {
      type: String,
      default: '',
    },
    afterStyle: {
      type: String,
      default: '',
    },
    contentClassName: {
      type: String,
      default: '',
    },
    contentStyle: {
      type: String,
      default: '',
    },
    beforeShow: {
      type: Boolean,
      default: false,
    },
    afterShow: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
    duration: {
      type: Number,
      default: 0,
    },
    // onInit: {
    //   type: Function,
    //   default: () => null,
    // },
    // slideChangeTransitionStart: {
    //   type: Function,
    //   default: () => null,
    // },
    // slideChangeTransitionEnd: {
    //   type: Function,
    //   default: () => null,
    // },
  },
  data() {
    return {
      $swiper: null,
      $map: new Map([
        [[true, true].toString(), 1],
        [[false, false].toString(), 1],
        [[true, false].toString(), 0],
        [[false, true].toString(), 2],
      ]),
    };
  },
  watch: {
    direction(direction, oldDirection) {
      if (direction !== oldDirection) {
        this.$data.$swiper.changeDirection(direction);
      }
    },
    beforeShow(val, oldVal) {
      if (val !== oldVal) {
        this.slide({
          beforeShow: val,
          afterShow: this.afterShow,
          duration: this.duration,
        });
      }
    },
    afterShow(val, oldVal) {
      if (val !== oldVal) {
        this.slide({
          beforeShow: this.beforeShow,
          afterShow: val,
          duration: this.duration,
        });
      }
    },
  },
  computed: {
    getContainerClassName() {
      const { className } = this;

      return classNames(selectorPrefix, 'swiper-container', className.split(/\s+/));
    },
    getWrapperClassName() {
      return `swiper-wrapper`;
    },
    getBeforeClassName() {
      const { beforeClassName } = this;

      return classNames('swiper-slide', `${selectorPrefix}-before`, beforeClassName.split(/\s+/));
    },
    getContentClassName() {
      const { contentClassName } = this;

      return classNames('swiper-slide', `${selectorPrefix}-content`, contentClassName.split(/\s+/));
    },
    getAfterClassName() {
      const { afterClassName } = this;

      return classNames('swiper-slide', `${selectorPrefix}-after`, afterClassName.split(/\s+/));
    },
  },
  methods: {
    createSwiper() {
      const { $refs, $data, direction } = this;

      if ($data.$swiper) {
        $data.$swiper.destroy();
      }

      const { beforeShow, afterShow } = this;

      $data.$swiper = new Swiper($refs.ref, {
        init: false,
        // 初始化在第一个选项卡上
        initialSlide: $data.$map.get([beforeShow, afterShow].toString()),
        direction,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 0,
      });

      $data.$swiper.on('init', () => {
        this.$emit('init');
      });

      $data.$swiper.on('slideChangeTransitionStart', () => {
        this.$emit('slide-change-transition-start', $data.$swiper.activeIndex);
      });

      $data.$swiper.on('slideChangeTransitionEnd', () => {
        this.$emit('slide-change-transition-end', $data.$swiper.activeIndex);
      });

      $data.$swiper.init();
    },
    slide(props: ISwipeOutProps): void {
      const { beforeShow, afterShow, duration } = props;

      const {
        $data: { $swiper, $map },
      } = this;

      $swiper.slideTo($map.get([beforeShow, afterShow].toString()), duration);
    },
  },
  mounted() {
    this.createSwiper();
  },
  render(h): any {
    const { $slots, contentStyle, beforeStyle, afterStyle } = this;

    return (
      <div class={this.getContainerClassName} ref="ref">
        <div class={this.getWrapperClassName}>
          <div class={this.getBeforeClassName} style={beforeStyle}>
            {$slots.before}
          </div>
          <div class={this.getContentClassName} style={contentStyle}>
            {$slots.default}
          </div>
          <div class={this.getAfterClassName} style={afterStyle}>
            {$slots.after}
          </div>
        </div>
      </div>
    );
  },
};
