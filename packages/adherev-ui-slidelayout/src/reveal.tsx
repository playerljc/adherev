// @ts-ignore
import { Fragment } from 'vue-fragment';
// @ts-ignore
import classNames from 'classnames';

// @ts-ignore
import SlideLayout from './slide';
// @ts-ignore
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
    zIndex: function (val) {
      // @ts-ignore
      this.$refs.el.style.zIndex = val;
      // @ts-ignore
      this.$refs.rMasterEl.style.zIndex = val + 1;
    }
  },
  created() {
    // @ts-ignore
    this.$data._positionConfig = {
      init: {
        left: () => {
          // @ts-ignore
          this.$refs.el.style.zIndex = this.zIndex;

          // @ts-ignore
          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          // @ts-ignore
          this.$refs.el.style.left = '0';
        },
        right: () => {
          // @ts-ignore
          this.$refs.el.style.zIndex = this.zIndex;

          // @ts-ignore
          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          // @ts-ignore
          this.$refs.el.style.right = '0';
        },
      },
      show: {
        left: (time) => {
          // @ts-ignore
          this.$refs.el.style.zIndex = this.zIndex;

          // @ts-ignore
          this.$data._maskEl.style.zIndex = this.zIndex - 1;

          // @ts-ignore
          this.$refs.rMasterEl.style.zIndex = this.zIndex - 2;

          slider(
            // @ts-ignore
            this.$refs.rMasterEl,
            // @ts-ignore
            `${this.$refs.el.offsetWidth}px`,
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
        right: (time) => {
          // @ts-ignore
          this.$refs.el.style.zIndex = this.zIndex;
          // @ts-ignore
          this.$data._maskEl.style.zIndex = this.zIndex - 1;
          // @ts-ignore
          this.$refs.rMasterEl.style.zIndex = this.zIndex - 2;

          slider(
            // @ts-ignore
            this.$refs.rMasterEl,
            // @ts-ignore
            `-${this.$refs.el.offsetWidth}px`,
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-show');
            }
          );

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time) => {
          // @ts-ignore
          this.$refs.el.style.zIndex = this.zIndex;

          // @ts-ignore
          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          // @ts-ignore
          slider(this.$refs.rMasterEl, '0', '0', '0', `${this.getDuration(time)}ms`, () => {
            // @ts-ignore
            this.$emit('after-close');
          });

          // @ts-ignore
          if (this.$data._maskEl) this.$data._maskEl.style.display = 'none';
        },
        right: (time) => {
          // @ts-ignore
          this.$refs.el.style.zIndex = this.zIndex;

          // @ts-ignore
          this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;

          slider(
            // @ts-ignore
            this.$refs.rMasterEl,
            '0',
            '0',
            '0',
            // @ts-ignore
            `${this.getDuration(time)}ms`,
            () => {
              // @ts-ignore
              this.$emit('after-close');
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
    this.$refs.el.style.zIndex = this.zIndex;
    // @ts-ignore
    this.$refs.rMasterEl.style.zIndex = this.zIndex + 1;
  },
  render(h) {
    // @ts-ignore
    const { $slots, masterClassName, slaveClassName, direction } = this;

    return (
      // @ts-ignore
      <Fragment>
        {/*@ts-ignore*/}
        <div
          class={classNames(
            `${selectorPrefix}`,
            direction,
            // @ts-ignore
            slaveClassName.split(' '),
          )}
          ref="el"
        >
          {$slots.slide}
        </div>

        {/*@ts-ignore*/}
        <div
          class={classNames(
            `${selectorPrefix}-master`,
            // @ts-ignore
            masterClassName.split(' '),
          )}
          ref="rMasterEl"
        >
          {$slots.master}
        </div>
      </Fragment>
    );
  },
};
