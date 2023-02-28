<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="GlobalIndicator">
      <p>全局无侵入的遮罩</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button @click="onShowIndicator">显示遮罩</a-button>
      </template>

      <template #p2>
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
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import { GlobalIndicator } from '@baifendian/adherev';

let handler;

export default {
  displayName: 'globalindicator',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '使用parent属性遮罩局部元素',
          cardProps: {
            description: {
              title: '使用parent属性遮罩局部元素',
              info: '使用parent属性遮罩局部元素',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p2',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
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
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
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
