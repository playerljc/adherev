// @ts-ignore
import classNames from 'classnames';

// @ts-ignore
import { slider } from './slidelayout';
// @ts-ignore
import SlideLayout from './slide';

const selectorPrefix = 'adherev-ui-slidelayout-overlay';

export default {
  name: 'adv-slidelayout-overlay',
  mixins: [SlideLayout],
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  watch: {
    zIndex: function (val) {
      // @ts-ignore
      this.$refs.el.style.zIndex = val;
    },
  },
  created() {
    // @ts-ignore
    this.$data._positionConfig = {
      init: {
        left: () => {
          // @ts-ignore
          slider(this.$refs.el, '-100%', '0', '0', '0');
        },
        right: () => {
          // @ts-ignore
          slider(
            // @ts-ignore
            this.$refs.el,
            // @ts-ignore
            `${this.$refs.el?.parentElement?.offsetWidth}px`,
            '0',
            '0',
            '0',
          );
        },
        top: () => {
          // @ts-ignore
          slider(this.$refs.el, '0', '-100%', '0', '0');
        },
        bottom: () => {
          // @ts-ignore
          slider(this.$refs.el, '0', `${this.$refs.el?.parentElement?.offsetHeight}px`, '0', '0');
        },
      },
      show: {
        left: (time) => {
          // @ts-ignore
          slider(this.$refs.el, '0', '0', '0', `${this.getDuration(time)}ms`, () => {
            // @ts-ignore
            this.$emit('after-show');
          });

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
        right: (time) => {
          slider(
            // @ts-ignore
            this.$refs.el,
            // @ts-ignore
            `${this.$refs.el?.parentElement?.offsetWidth - this.$refs.el.offsetWidth}px`,
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-show');
            },
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
        top: (time) => {
          // @ts-ignore
          slider(this.$refs.el, '0', '0', '0', `${this.getDuration(time)}ms`, () => {
            // @ts-ignore
            this.$emit('after-show');
          });

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
        bottom: (time) => {
          slider(
            // @ts-ignore
            this.$refs.el,
            '0',
            // @ts-ignore
            `${this.$refs.el?.parentElement?.offsetHeight - this.$refs.el.offsetHeight}px`,
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-show');
            },
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time) => {
          // @ts-ignore
          slider(this.$refs.el, '-100%', '0', '0', `${this.getDuration(time)}ms`, () => {
            // @ts-ignore
            this.$emit('after-close');
          });

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
        right: (time) => {
          slider(
            // @ts-ignore
            this.$refs.el,
            // @ts-ignore
            `${this.$refs.el?.parentElement?.offsetWidth}px`,
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-close');
            },
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
        top: (time) => {
          slider(
            // @ts-ignore
            this.$refs.el,
            '0',
            // @ts-ignore
            `-${this.$refs.el?.parentElement?.offsetHeight}px`,
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-close');
            },
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
        bottom: (time) => {
          slider(
            // @ts-ignore
            this.$refs.el,
            '0',
            // @ts-ignore
            `${this.$refs.el?.parentElement?.offsetHeight}px`,
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-close');
            },
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
      },
    };
  },
  mounted() {
    // @ts-ignore
    this.$refs.el.style.zIndex = this.zIndex;
  },
  render(h) {
    // @ts-ignore
    const { $slots, className, direction } = this;

    return (
      // @ts-ignore
      <div
        class={classNames(
          selectorPrefix,
          direction,
          // @ts-ignore
          className.split(' '),
        )}
        ref="el"
      >
        {$slots.default}
      </div>
    );
  },
};
