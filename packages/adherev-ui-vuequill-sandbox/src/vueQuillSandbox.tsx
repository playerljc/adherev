import classNames from 'classnames';
import type { DeltaStatic, Sources, StringMap } from 'quill';
import { CSSProperties, EventHandler, createElement, createRef } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import type { Range, UnprivilegedEditor, Value } from 'react-quill';
import {
  PropType,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
} from 'vue';
import { array, bool, func, number, object, oneOfType, string } from 'vue-types';

import ReactQuill from '@baifendian/adhere-ui-reactquill-sandbox';

const selectorPrefix = 'adherev-ui-vuequillsandbox';

export const propsDefine = {
  wrapClassName: string().def(''),
  wrapStyle: object<CSSProperties>().def({}),
  quillStyle: string().def(''),
  bounds: oneOfType([string(), HTMLElement]),
  className: string().def(''),
  defaultValue: {
    type: Object as PropType<Value>,
  },
  formats: array<string>().def([]),
  id: string(),
  modules: object<StringMap>(),
  placeholder: string(),
  preserveWhitespace: bool(),
  readOnly: bool(),
  scrollingContainer: oneOfType([string(), number()]),
  style: object<CSSProperties>().def({}),
  tabIndex: number(),
  theme: string(),
  value: {
    type: Object as PropType<Value>,
  },
  onChange:
    func<
      (value: string, delta: DeltaStatic, source: Sources, editor: UnprivilegedEditor) => void
    >(),
  onChangeSelection:
    func<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>(),
  onFocus: func<(selection: Range, source: Sources, editor: UnprivilegedEditor) => void>(),
  onBlur: func<(previousSelection: Range, source: Sources, editor: UnprivilegedEditor) => void>(),
  onKeyDown: object<EventHandler<any>>(),
  onKeyPress: object<EventHandler<any>>(),
  onKeyUp: object<EventHandler<any>>(),
};

const VueQuillSandbox = defineComponent({
  name: 'adv-vuequillsandbox',
  props: propsDefine,
  setup(props, { expose }) {
    const rootRef = ref<HTMLDivElement>();

    const reactQuillRef = createRef<any>();

    let reactRoot: Root;

    /**
     * renderQuill
     * @description 渲染React的Quill
     */
    const renderQuill = () => {
      return new Promise<void>((resolve) => {
        const reactProps = Object.keys(propsDefine).reduce(
          (_props, key) => {
            _props[key] = props[key];
            return _props;
          },
          { ref: reactQuillRef },
        );

        reactRoot = ReactDOM.createRoot(rootRef.value as HTMLElement);
        reactRoot.render(createElement(ReactQuill, reactProps));

        nextTick(function () {
          resolve();
        }).then((r) => {});
      });
    };

    onMounted(() => renderQuill());

    onUpdated(() => renderQuill());

    onBeforeUnmount(() => reactRoot.unmount());

    expose({
      focus() {
        reactQuillRef?.current?.focus?.();
      },
      blur() {
        reactQuillRef?.current?.blur?.();
      },
      getEditor() {
        return reactQuillRef?.current?.getEditor?.();
      },
      getQuill() {
        return reactQuillRef?.current?.getQuill?.();
      },
    });

    return () => (
      <div
        class={classNames(selectorPrefix, props.wrapClassName || '')}
        // @ts-ignore
        ref={rootRef}
        style={props.wrapStyle || {}}
      />
    );
  },
});

export default VueQuillSandbox;
