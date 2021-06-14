// @ts-ignore
import classNames from 'classnames';
// @ts-ignore
import Swiper from 'swiper';

const selectorPrefix = 'adherev-ui-revolving';

export default {
  name: 'adv-revolving',
  props: {
    className: {
      type: String,
      default: '',
    },
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
      _swiper: null,
    };
  },
  computed: {
    getClass() {
      // @ts-ignore
      const { className } = this;

      return classNames(
        selectorPrefix,
        'swiper-container',
        // @ts-ignore
        className.split(' '),
      );
    },
    getWrapperClass() {
      // @ts-ignore
      const { classNameWrapper } = this;

      return classNames(
        `${selectorPrefix}-wrapper`,
        'swiper-wrapper',
        // @ts-ignore
        classNameWrapper.split(' '),
      );
    },
    getWrapperStyle() {
      // @ts-ignore
      return this.styleWrapper;
    },
  },
  mounted() {
    // @ts-ignore
    this.initial();
  },
  updated() {
    // @ts-ignore
    this.initial();
  },
  methods: {
    initial() {
      const {
        // @ts-ignore
        $refs: { el },
        // @ts-ignore
        $data,
        // @ts-ignore
        speed,
        // @ts-ignore
        delay,
        // @ts-ignore
        loop,
        // @ts-ignore
        direction,
        // @ts-ignore
        stopOnLastSlide,
        // @ts-ignore
        listeners,
      } = this;

      if ($data._swiper) {
        $data._swiper.destory();
      }

      $data._swiper = new Swiper(el, {
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
      // @ts-ignore
      this.$data._swiper.autoplay.start();
    },
    /**
     * stop
     */
    stop() {
      // @ts-ignore
      this.$data._swiper.autoplay.stop();
    },
    /**
     * isRunning
     * @return {boolean}
     */
    isRunning() {
      // @ts-ignore
      return this.$data._swiper.autoplay.running;
    },
  },
  render(h) {
    // @ts-ignore
    const { $slots } = this;

    return (
      // @ts-ignore
      <div class={this.getClass} ref="el">
        {/*@ts-ignore*/}
        <div class={this.getWrapperClass} style={this.getWrapperStyle} ref="wrapperEl">
          {$slots.default}
        </div>
      </div>
    );
  },
};
