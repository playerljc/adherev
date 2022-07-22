import Vue from 'vue';
import debounce from 'lodash/debounce';
import Util from '@baifendian/adherev-util';

export default {
  name: 'adv-teleport',
  props: {
    // 传送的元素
    to: {
      type: [String, HTMLElement, Function],
    },
    // 是否在包裹元素渲染
    isWrap: {
      type: Boolean,
      default: true,
    },
    // 包裹元素的标签名
    wrapTag: {
      type: String,
      default: 'div',
    },
    // 包裹元素的类名
    wrapClassName: {
      type: String,
    },
    // 包裹元素的样式
    wrapStyle: {
      type: String,
    },
    // 渲染频率
    rate: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      $mountEl: null,
      $vm: null,
      $debounceRender: debounce(() => {
        if (!this.toEl) return;

        if (!this.$data.$mountEl) {
          this.$data.$mountEl = this.createMountEl();
        }

        const self = this;

        if (!this.$data.$vm) {
          this.$data.$vm = new Vue({
            el: this.$data.$mountEl,
            render(_h) {
              return self.$slots.default;
            },
          });
        } else {
          try {
            this.$data.$vm.$forceUpdate();
          } catch (e) {}
        }
      }, this.rate),
    };
  },
  computed: {
    toEl() {
      let toEl = this.to;

      if (Util.isString(this.to)) {
        toEl = document.querySelector(this.to);
      }

      if (Util.isFunction(this.to)) {
        toEl = this.to();
      }

      return toEl;
    },
  },
  methods: {
    createMountEl() {
      if (!this.isWrap) {
        const mountEl = document.createElement('div');

        this.toEl.appendChild(mountEl);

        return mountEl;
      }

      const wrapTag = this.wrapTag || 'div';
      const mountWrapEl = document.createElement(wrapTag);

      if (this.wrapClassName) {
        mountWrapEl.className = this.wrapClassName;
      }

      if (this.wrapStyle) {
        mountWrapEl.style.cssText = this.wrapStyle;
      }

      const mountEl = document.createElement('div');

      mountWrapEl.appendChild(mountEl);

      this.toEl.appendChild(mountWrapEl);

      return mountEl;
    },
  },
  render(h) {
    this.$data.$debounceRender();

    return null;
  },
};
