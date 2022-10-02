import classNames from 'classnames';

import SlideLayout from './slide';
import { slider } from './slidelayout';

const selectorPrefix = 'adherev-ui-slidelayout-push';

const Push: any = {
  name: 'adv-slidelayout-push',
  mixins: [SlideLayout],
  props: {
    masterClassName: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    slaveClassName: {
      type: String,
      default: '',
    },
  },
  watch: {
    zIndex(val) {
      this.$refs.pMasterEl.style.zIndex = val - 1;

      this.$refs.el.style.zIndex = val;

      this.$refs.pSlaveEl.zIndex = val - 2;
    },
  },
  created() {
    this.$data.$positionConfig = {
      init: {
        left: () => {
          this.$refs.el.style.left = '0';

          this.$refs.pSlaveEl.style.left = `${this.$refs.el.offsetWidth}px`;

          slider(this.$refs.pMasterEl, `-${this.$refs.el.offsetWidth}px`, '0', '0', '0');
        },
        right: () => {
          this.$refs.el.style.right = '0';

          this.$refs.pSlaveEl.style.right = `${this.$refs.el.offsetWidth}px`;

          slider(this.$refs.pMasterEl, `${this.$refs.el.offsetWidth}px`, '0', '0', '0');
        },
      },
      show: {
        left: (time) => {
          slider(
            this.$refs.pMasterEl,
            '0',
            '0',
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-show');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'block';
        },
        right: (time) => {
          slider(
            this.$refs.pMasterEl,
            '0',
            '0',
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-show');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time) => {
          slider(
            this.$refs.pMasterEl,

            `-${this.$refs.el.offsetWidth}px`,
            '0',
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-close');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'none';
        },
        right: (time) => {
          slider(
            this.$refs.pMasterEl,

            `${this.$refs.el.offsetWidth}px`,
            '0',
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-close');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'none';
        },
      },
    };
  },
  mounted() {
    const { zIndex } = this;

    this.$refs.pMasterEl.style.zIndex = zIndex - 1;

    this.$refs.el.style.zIndex = zIndex;

    this.$refs.pSlaveEl.zIndex = zIndex - 2;
  },
  render(h) {
    const { $slots, masterClassName, className, slaveClassName, direction } = this;

    return (
      <div
        class={classNames(`${selectorPrefix}-master`, masterClassName.split(/\s+/))}
        ref="pMasterEl"
      >
        <div class={classNames(selectorPrefix, direction, className.split(/\s+/))} ref="el">
          {$slots.slide}
        </div>

        <div
          class={classNames(`${selectorPrefix}-slave`, slaveClassName.split(/\s+/))}
          ref="pSlaveEl"
        >
          {$slots.master}
        </div>
      </div>
    );
  },
};

export default Push;
