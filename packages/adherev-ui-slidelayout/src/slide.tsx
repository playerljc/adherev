// @ts-ignore
import { createMask } from './slidelayout';

export default {
  props: {
    width: {
      type: [String, Number],
      default: '80%',
    },
    height: {
      type: [String, Number],
      default: '40%',
    },
    mask: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 9999,
    },
    time: {
      type: Number,
      default: 300,
    },
    direction: {
      type: String,
      default: 'left',
      validator: function (val) {
        return ['left', 'right', 'top', 'bottom'].indexOf(val) !== -1;
      },
    },
    defaultCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      _positionConfig: {},
      _maskEl: null,
      // @ts-ignore
      collapse: this.defaultCollapse,
    };
  },
  watch: {
    defaultCollapse(newVal, oldVal) {
      if (newVal !== oldVal) {
        // @ts-ignore
        this.collapse = newVal;

        const {
          // @ts-ignore
          $data: { _positionConfig },
          // @ts-ignore
          direction,
          // @ts-ignore
          collapse,
        } = this;

        if (collapse) {
          // @ts-ignore
          _positionConfig['show'][direction]();
        } else {
          // @ts-ignore
          _positionConfig['close'][direction]();
        }
      }
    },
  },
  mounted() {
    let {
      // @ts-ignore
      $refs: { el },
      // @ts-ignore
      zIndex,
      // @ts-ignore
      mask,
    } = this;

    if (mask) {
      // @ts-ignore
      this.$data._maskEl = createMask(zIndex, () => {
        // @ts-ignore
        this.close();
      });

      // @ts-ignore
      el?.parentElement?.insertBefore(this.$data._maskEl, el);
    }

    // @ts-ignore
    this.initial();
  },
  // updated() {
  //   const {
  //     // @ts-ignore
  //     $data: { _preCollapse, _positionConfig },
  //     // @ts-ignore
  //     direction,
  //     // @ts-ignore
  //     collapse,
  //   } = this;
  //
  //   if (_preCollapse !== collapse) {
  //     if (collapse) {
  //       // @ts-ignore
  //       _positionConfig['show'][direction]();
  //     } else {
  //       // @ts-ignore
  //       _positionConfig['close'][direction]();
  //     }
  //   }
  // },
  beforeDestroy() {
    const {
      // @ts-ignore
      $data: { _maskEl },
    } = this;

    if (_maskEl) {
      // @ts-ignore
      _maskEl.parentElement.removeChild(_maskEl);
    }
  },
  methods: {
    getDuration(time: undefined | null | string | number) {
      // @ts-ignore
      return time !== undefined && time !== null ? time : this.time;
    },
    initial() {
      const {
        // @ts-ignore
        $refs: { el },
        // @ts-ignore
        $data: { _positionConfig },
        // @ts-ignore
        direction,
        // @ts-ignore
        width,
        // @ts-ignore
        height,
        // @ts-ignore
        collapse,
      } = this;

      if (direction === 'left' || direction === 'right') {
        // 赋值宽度
        // @ts-ignore
        el?.style.height = '100%';
        width
          ? // @ts-ignore
            (el?.style.width = width)
          : // @ts-ignore
            (el?.style.width = `${el?.parentElement?.offsetWidth * 0.9}px`);
      } else {
        // 赋值高度
        // @ts-ignore
        el?.style.width = '100%';
        height
          ? // @ts-ignore
            (el?.style.height = height)
          : // @ts-ignore
            (el?.style.height = `${el?.parentElement?.offsetHeight * 0.3}px`);
      }

      // 赋值默认位置
      // @ts-ignore
      _positionConfig['init'][direction]();

      if (collapse) {
        // @ts-ignore
        _positionConfig['show'][direction](0);
      }
    },
    show() {
      // @ts-ignore
      this.$emit('before-show');

      const {
        // @ts-ignore
        $data: { _positionConfig },
        // @ts-ignore
        direction,
      } = this;

      // @ts-ignore
      this.collapse = true;

      _positionConfig['show'][direction]();
    },
    close() {
      // @ts-ignore
      this.$emit('before-close');

      const {
        // @ts-ignore
        $data: { _positionConfig },
        // @ts-ignore
        direction,
      } = this;

      // @ts-ignore
      this.collapse = false;

      _positionConfig['close'][direction]();
    },
  },
};
