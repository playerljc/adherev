import classNames from 'classnames';
import type { DeltaStatic, Sources, StringMap } from 'quill';
import { CSSProperties, EventHandler, createElement, createRef } from 'react';
import ReactDOM from 'react-dom';
import type { Range, UnprivilegedEditor, Value } from 'react-quill';
import Vue, { PropType, VNode } from 'vue';

import ReactQuill from '@baifendian/adhere-ui-reactquill-sandbox';

const selectorPrefix = 'adherev-ui-vuequillsandbox';

const propsDefine = {
  wrapClassName: {
    type: String,
    default: '',
  },
  wrapStyle: {
    type: Object as PropType<CSSProperties>,
  },
  quillStyle: {
    type: String,
    default: '',
  },
  bounds: {
    type: [String, HTMLElement],
  },
  className: {
    type: String,
    default: '',
  },
  defaultValue: {
    type: Object as PropType<Value>,
  },
  formats: {
    type: Object as PropType<string[]>,
  },
  id: {
    type: String,
  },
  modules: {
    type: Object as PropType<StringMap>,
  },
  placeholder: {
    type: String,
  },
  preserveWhitespace: {
    type: Boolean,
  },
  readOnly: {
    type: Boolean,
  },
  scrollingContainer: {
    type: [String, HTMLElement],
  },
  style: {
    type: Object as PropType<CSSProperties>,
  },
  tabIndex: {
    type: Number,
  },
  theme: {
    type: String,
  },
  value: {
    type: Object as PropType<Value>,
  },
  onChange: {
    type: Function as PropType<
      (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void
    >,
  },
  onChangeSelection: {
    type: Function as PropType<
      (selection: Range, source: Sources, editor: UnprivilegedEditor) => void
    >,
  },
  onFocus: {
    type: Function as PropType<
      (selection: Range, source: Sources, editor: UnprivilegedEditor) => void
    >,
  },
  onBlur: {
    type: Function as PropType<
      (previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void
    >,
  },
  onKeyDown: {
    type: Object as PropType<EventHandler<any>>,
  },
  onKeyPress: {
    type: Object as PropType<EventHandler<any>>,
  },
  onKeyUp: {
    type: Object as PropType<EventHandler<any>>,
  },
};

const VueQuillSandbox: any = {
  name: 'adv-vuequillsandbox',
  props: propsDefine,
  emits: [],
  data() {
    return {
      $reactQuillRef: createRef(),
    };
  },
  mounted() {
    this.$renderQuill();
  },
  updated() {
    this.$renderQuill();
  },
  beforeDestroy() {
    ReactDOM.unmountComponentAtNode(this.$refs.wrapRef);
  },
  methods: {
    $renderQuill(this: Vue) {
      return new Promise<void>((resolve) => {
        const props = Object.keys(propsDefine).reduce(
          (_props, key) => {
            _props[key] = this[key];
            return _props;
          },
          { ref: this.$data.$reactQuillRef },
        );

        // @ts-ignore
        ReactDOM.render(createElement(ReactQuill, props), this.$refs.wrapRef, () => resolve());
      });
    },
    focus(this: Vue) {
      this.$data.$reactQuillRef?.current?.focus?.();
    },
    blur(this: Vue) {
      this.$data.$reactQuillRef?.current?.blur?.();
    },
    getEditor(this: Vue) {
      return this.$data.$reactQuillRef?.current?.getEditor?.();
    },
    getQuill(this: Vue) {
      return this.$data.$reactQuillRef?.current?.getQuill?.();
    },
  },
  render(h): VNode {
    // @ts-ignore
    return (
      <div
        // @ts-ignore
        class={classNames(selectorPrefix, this.wrapClassName || '')}
        ref="wrapRef"
        style={this.wrapStyle || {}}
      />
    );
  },
};

export default VueQuillSandbox;
