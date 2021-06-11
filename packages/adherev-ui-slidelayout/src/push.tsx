// @ts-ignore
import classNames from 'classnames';

// @ts-ignore
import { slider } from './slidelayout';
// @ts-ignore
import SlideLayout from './slide';

const selectorPrefix = 'adherev-ui-slidelayout-push';

export default {
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
    zIndex: function (val) {
      // @ts-ignore
      this.$refs.pMasterEl.style.zIndex = val - 1;
      // @ts-ignore
      this.$refs.el.style.zIndex = val;
      // @ts-ignore
      this.$refs.pSlaveEl.zIndex = val - 2;
    },
  },
  created() {
    // @ts-ignore
    this.$data._positionConfig = {
      init: {
        left: () => {
          // @ts-ignore
          this.$refs.el.style.left = '0';
          // @ts-ignore
          this.$refs.pSlaveEl.style.left = `${this.$refs.el.offsetWidth}px`;
          // @ts-ignore
          slider(this.$refs.pMasterEl, `-${this.$refs.el.offsetWidth}px`, '0', '0', '0');
        },
        right: () => {
          // @ts-ignore
          this.$refs.el.style.right = '0';
          // @ts-ignore
          this.$refs.pSlaveEl.style.right = `${this.$refs.el.offsetWidth}px`;
          // @ts-ignore
          slider(this.$refs.pMasterEl, `${this.$refs.el.offsetWidth}px`, '0', '0', '0');
        },
      },
      show: {
        left: (time) => {
          slider(
            // @ts-ignore
            this.$refs.pMasterEl,
            '0',
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-show')
            },
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
        right: (time) => {
          slider(
            // @ts-ignore
            this.$refs.pMasterEl,
            '0',
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-show')
            }
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time) => {
          slider(
            // @ts-ignore
            this.$refs.pMasterEl,
            // @ts-ignore
            `-${this.$refs.el.offsetWidth}px`,
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-close')
            }
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
        right: (time) => {
          slider(
            // @ts-ignore
            this.$refs.pMasterEl,
            // @ts-ignore
            `${this.$refs.el.offsetWidth}px`,
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-close')
            }
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
      },
    };
  },
  mounted() {
    // @ts-ignore
    const { zIndex } = this;

    // @ts-ignore
    this.$refs.pMasterEl.style.zIndex = zIndex - 1;
    // @ts-ignore
    this.$refs.el.style.zIndex = zIndex;
    // @ts-ignore
    this.$refs.pSlaveEl.zIndex = zIndex - 2;
  },
  render(h) {
    // @ts-ignore
    const { $slots, masterClassName, className, slaveClassName, direction } = this;

    return (
      // @ts-ignore
      <div
        class={classNames(
          `${selectorPrefix}-master`,
          // @ts-ignore
          masterClassName.split(' '),
        )}
        ref="pMasterEl"
      >
        {/* @ts-ignore */}
        <div
          class={classNames(
            selectorPrefix,
            direction,
            // @ts-ignore
            className.split(' '),
          )}
          ref="el"
        >
          {$slots.slide}
        </div>

        {/*@ts-ignore*/}
        <div
          class={classNames(
            `${selectorPrefix}-slave`,
            // @ts-ignore
            slaveClassName.split(' '),
          )}
          ref="pSlaveEl"
        >
          {$slots.master}
        </div>
      </div>
    );
  },
};
