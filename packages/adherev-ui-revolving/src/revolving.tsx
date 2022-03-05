import { VNode } from 'vue';
import classNames from 'classnames';
import Swiper from 'swiper';

const selectorPrefix = 'adherev-ui-revolving';

export default {
  name: 'adv-revolving',
  props: {
    classNameWrapper: {
      type: String,
      default: '',
    },
    wrapperStyle: {
      type: String,
      default: '',
    },
    speed: {
      type: Number,
      default: 1000,
    },
    delay: {
      type: Number,
      default: 1000,
    },
    direction: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'right', 'bottom', 'left'].indexOf(val) !== -1;
      },
    },
    loop: {
      type: Boolean,
      default: true,
    },
    stopOnLastSlide: {
      type: Boolean,
      default: false,
    },
    listeners: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      $swiper: null,
    };
  },
  computed: {
    getClass() {
      return classNames(selectorPrefix, 'swiper-container');
    },
    getWrapperClass() {
      const { classNameWrapper } = this;

      return classNames(
        `${selectorPrefix}-wrapper`,
        'swiper-wrapper',
        classNameWrapper.split(/\s+/),
      );
    },
    getWrapperStyle() {
      return this.styleWrapper;
    },
  },
  mounted() {
    this.initial();
  },
  updated() {
    this.initial();
  },
  methods: {
    initial() {
      const {
        $refs: { el },
        $data,
        speed,
        delay,
        loop,
        direction,
        stopOnLastSlide,
        listeners,
      } = this;

      if ($data.$swiper) {
        // $data.$swiper.destory();
        if ('destory' in $data.$swiper && $data.$swiper.destory instanceof Function) {
          $data.$swiper.destory();
        }

        $data.$swiper = null;
      }

      $data.$swiper = new Swiper(el, {
        allowTouchMove: false,
        direction: this.getDirection(direction),
        loop,
        speed,
        autoplay: {
          delay,
          stopOnLastSlide,
          reverseDirection: direction === 'right' || direction === 'bottom',
        },
        on: listeners,
      });
    },
    getDirection(direction) {
      return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
    },
    /**
     * start
     */
    start() {
      this.$data.$swiper.autoplay.start();
    },
    /**
     * stop
     */
    stop() {
      this.$data.$swiper.autoplay.stop();
    },
    /**
     * isRunning
     * @return {boolean}
     */
    isRunning() {
      return this.$data.$swiper.autoplay.running;
    },
  },
  render(h): VNode {
    const { $slots } = this;

    return (
      <div class={this.getClass} ref="el">
        <div class={this.getWrapperClass} style={this.getWrapperStyle} ref="wrapperEl">
          {$slots.default}
        </div>
      </div>
    );
  },
};
