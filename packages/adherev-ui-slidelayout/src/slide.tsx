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
      validator(val) {
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
      $positionConfig: {},
      $maskEl: null,

      collapse: this.defaultCollapse,
    };
  },
  watch: {
    defaultCollapse(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.collapse = newVal;

        const {
          $data: { $positionConfig },

          direction,

          collapse,
        } = this;

        if (collapse) {
          $positionConfig['show'][direction]();
        } else {
          $positionConfig['close'][direction]();
        }
      }
    },
  },
  mounted() {
    const {
      $refs: { el },
      zIndex,
      mask,
    } = this;

    if (mask) {
      this.$data.$maskEl = createMask(zIndex, () => {
        this.close();
      });

      el?.parentElement?.insertBefore(this.$data.$maskEl, el);
    }

    this.initial();
  },
  // updated() {
  //   const {
  //
  //     $data: { _preCollapse, $positionConfig },
  //
  //     direction,
  //
  //     collapse,
  //   } = this;
  //
  //   if (_preCollapse !== collapse) {
  //     if (collapse) {
  //
  //       $positionConfig['show'][direction]();
  //     } else {
  //
  //       $positionConfig['close'][direction]();
  //     }
  //   }
  // },
  beforeDestroy() {
    const {
      $data: { $maskEl },
    } = this;

    if ($maskEl) {
      $maskEl.parentElement.removeChild($maskEl);
    }
  },
  methods: {
    getDuration(time: undefined | null | string | number) {
      return time !== undefined && time !== null ? time : this.time;
    },
    initial() {
      const {
        $refs: { el },
        $data: { $positionConfig },
        direction,
        width,
        height,
        collapse,
      } = this;

      if (direction === 'left' || direction === 'right') {
        // 赋值宽度
        (el as HTMLElement).style.height = '100%';
        width
          ? ((el as HTMLElement).style.width = width)
          : ((el as HTMLElement).style.width = `${el?.parentElement?.offsetWidth * 0.9}px`);
      } else {
        // 赋值高度

        (el as HTMLElement).style.width = '100%';
        height
          ? ((el as HTMLElement).style.height = height)
          : ((el as HTMLElement).style.height = `${el?.parentElement?.offsetHeight * 0.3}px`);
      }

      // 赋值默认位置

      $positionConfig['init'][direction]();

      if (collapse) {
        $positionConfig['show'][direction](0);
      }
    },
    show() {
      this.$emit('before-show');

      const {
        $data: { $positionConfig },
        direction,
      } = this;

      this.collapse = true;

      $positionConfig['show'][direction]();
    },
    close() {
      this.$emit('before-close');

      const {
        $data: { $positionConfig },
        direction,
      } = this;

      this.collapse = false;

      $positionConfig['close'][direction]();
    },
  },
};
