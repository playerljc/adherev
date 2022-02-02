import { Fragment } from 'vue-fragment';
import classNames from 'classnames';

import SlideLayout from './slide';
import { slider } from './slidelayout';

const selectorPrefix = 'adherev-ui-slidelayout-reveal';

export default {
  name: 'adv-slidelayout-reveal',
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
      this.$refs.el.style.zIndex = val;

      this.$refs.rMasterEl.style.zIndex = val + 1;
    },
  },
  created() {
    this.$data.$positionConfig = {
      init: {
        left: () => {
          this.$refs.el.style.zIndex = this.zIndex;

          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          this.$refs.el.style.left = '0';
        },
        right: () => {
          this.$refs.el.style.zIndex = this.zIndex;

          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          this.$refs.el.style.right = '0';
        },
      },
      show: {
        left: (time) => {
          this.$refs.el.style.zIndex = this.zIndex;

          this.$data.$maskEl.style.zIndex = this.zIndex - 1;

          this.$refs.rMasterEl.style.zIndex = this.zIndex - 2;

          slider(
            this.$refs.rMasterEl,

            `${this.$refs.el.offsetWidth}px`,
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
          this.$refs.el.style.zIndex = this.zIndex;

          this.$data.$maskEl.style.zIndex = this.zIndex - 1;

          this.$refs.rMasterEl.style.zIndex = this.zIndex - 2;

          slider(
            this.$refs.rMasterEl,

            `-${this.$refs.el.offsetWidth}px`,
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
          this.$refs.el.style.zIndex = this.zIndex;

          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          slider(this.$refs.rMasterEl, '0', '0', '0', `${this.getDuration(time)}ms`, () => {
            this.$emit('after-close');
          });

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'none';
        },
        right: (time) => {
          this.$refs.el.style.zIndex = this.zIndex;

          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          slider(
            this.$refs.rMasterEl,
            '0',
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
    this.$refs.el.style.zIndex = this.zIndex;

    this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;
  },
  render(h) {
    const { $slots, masterClassName, slaveClassName, direction } = this;

    return (
      <Fragment>
        <div
          class={classNames(
            `${selectorPrefix}`,
            direction,
            slaveClassName.split(/\s+/),
          )}
          ref="el"
        >
          {$slots.slide}
        </div>

        <div
          class={classNames(
            `${selectorPrefix}-master`,
            masterClassName.split(/\s+/),
          )}
          ref="rMasterEl"
        >
          {$slots.master}
        </div>
      </Fragment>
    );
  },
};
