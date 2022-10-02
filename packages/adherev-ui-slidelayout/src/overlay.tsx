import classNames from 'classnames';

import SlideLayout from './slide';
import { slider } from './slidelayout';

const selectorPrefix = 'adherev-ui-slidelayout-overlay';

const Overlay: any = {
  name: 'adv-slidelayout-overlay',
  mixins: [SlideLayout],
  watch: {
    zIndex(val) {
      this.$refs.el.style.zIndex = val;
    },
  },
  created() {
    this.$data.$positionConfig = {
      init: {
        left: () => {
          slider(this.$refs.el, '-100%', '0', '0', '0');
        },
        right: () => {
          slider(this.$refs.el, `${this.$refs.el?.parentElement?.offsetWidth}px`, '0', '0', '0');
        },
        top: () => {
          slider(this.$refs.el, '0', '-100%', '0', '0');
        },
        bottom: () => {
          slider(this.$refs.el, '0', `${this.$refs.el?.parentElement?.offsetHeight}px`, '0', '0');
        },
      },
      show: {
        left: (time) => {
          slider(this.$refs.el, '0', '0', '0', `${this.getDuration(time)}ms`, () => {
            this.$emit('after-show');
          });

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'block';
        },
        right: (time) => {
          slider(
            this.$refs.el,

            `${this.$refs.el?.parentElement?.offsetWidth - this.$refs.el.offsetWidth}px`,
            '0',
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-show');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'block';
        },
        top: (time) => {
          slider(this.$refs.el, '0', '0', '0', `${this.getDuration(time)}ms`, () => {
            this.$emit('after-show');
          });

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'block';
        },
        bottom: (time) => {
          slider(
            this.$refs.el,
            '0',

            `${this.$refs.el?.parentElement?.offsetHeight - this.$refs.el.offsetHeight}px`,
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
          slider(this.$refs.el, '-100%', '0', '0', `${this.getDuration(time)}ms`, () => {
            this.$emit('after-close');
          });

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'none';
        },
        right: (time) => {
          slider(
            this.$refs.el,
            `${this.$refs.el?.parentElement?.offsetWidth}px`,
            '0',
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-close');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'none';
        },
        top: (time) => {
          slider(
            this.$refs.el,
            '0',

            `-${this.$refs.el?.parentElement?.offsetHeight}px`,
            '0',

            `${this.getDuration(time)}ms`,
            () => {
              this.$emit('after-close');
            },
          );

          if (this.$data.$maskEl) this.$data.$maskEl.style.display = 'none';
        },
        bottom: (time) => {
          slider(
            this.$refs.el,
            '0',

            `${this.$refs.el?.parentElement?.offsetHeight}px`,
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
  },
  render(h) {
    const { $slots, direction } = this;

    return (
      <div class={classNames(selectorPrefix, direction)} ref="el">
        {$slots.default}
      </div>
    );
  },
};

export default Overlay;
