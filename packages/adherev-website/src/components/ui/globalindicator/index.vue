<template>
  <div class="Page">
    <h1>GlobalIndicator</h1>
    <p>全局无侵入的遮罩</p>

    <function-props
      :border="true"
      :title="'方法'"
      :data="[
        {
          name: 'show',
          desc: '显示遮罩',
          modifier: 'public',
          params: [
            {
              name: 'parent',
              desc: '遮罩挂载的元素，这个元素需要有position:relative',
              type: 'HtmlElement',
              defaultVal: 'document.body',
              required: 'false',
            },
            {
              name: 'text',
              desc: '显示的文本',
              type: 'string',
              defaultVal: '19999',
              required: 'false',
            },
            {
              name: 'zIndex',
              desc: '遮罩的层级',
              type: 'number',
              defaultVal: '19999',
              required: 'false',
            },
          ],
          returnType: 'HtmlElement',
          returnDesc: '返回遮罩的Html对象',
        },
        {
          name: 'hide',
          desc: '取消遮罩',
          modifier: 'public',
          params: [
            {
              name: 'indicatorDom',
              desc: '取消的HtmlElement元素,是show的返回值',
              type: 'HtmlElement',
              defaultVal: '',
              required: 'true',
            },
          ],
          returnType: '',
          returnDesc: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <a-button @click="onShowIndicator">显示遮罩</a-button>
    </playground>

    <h2>使用parent属性遮罩局部元素</h2>
    <playground :codeText="code2">
      <div>
        <div
          ref="ref"
          style="position: relative; width: 200px; height: 200px; word-break: break-all"
        >
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved, which might cause designers and developers
          difficulties and duplication and reduce the efficiency of development.
        </div>
        <div>
          <a-button type="primary" @click="onShow">显示</a-button>
          <a-button @click="onHide">取消</a-button>
        </div>
      </div>
    </playground>
  </div>
</template>
<script>
import { GlobalIndicator } from '@baifendian/adherev';

let handler;

export default {
  data() {
    return {
      code1: `
        <template>
          <a-button @click="onShowIndicator">显示遮罩</a-button>
        </template>
        <script>
          import { GlobalIndicator } from '@baifendian/adherev';

          export default {
            methods: {
              onShowIndicator() {
                setTimeout(() => {
                  GlobalIndicator.hide(el);
                }, 2000);

                const el = GlobalIndicator.show(document.body, '全局的遮罩');
              },
            }
          }
        <\/script>
      `,
      code2: `
        <template>
          <h2>使用parent属性遮罩局部元素</h2>
          <div>
            <div
              ref="ref"
              style="position: relative; width: 200px; height: 200px; word-break: break-all"
            >
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
            </div>
            <div>
              <a-button type="primary" @click="onShow">显示</a-button>
              <a-button @click="onHide">取消</a-button>
            </div>
          </div>
        </template>
        <script>
          import { GlobalIndicator } from '@baifendian/adherev';

          let handler;

          export default {
            onShow() {
              handler = GlobalIndicator.show(this.$refs.ref, '处理中...');
            },
            onHide() {
              GlobalIndicator.hide(handler);
            },
          }
        <\/script>
      `,
    };
  },
  methods: {
    onShowIndicator() {
      setTimeout(() => {
        GlobalIndicator.hide(el);
      }, 2000);

      const el = GlobalIndicator.show(document.body, '全局的遮罩');
    },
    onShow() {
      handler = GlobalIndicator.show(this.$refs.ref, '处理中...');
    },
    onHide() {
      GlobalIndicator.hide(handler);
    },
  },
};
</script>
