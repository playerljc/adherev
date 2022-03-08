<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="SplitLayout">
      <p>实现分割窗体的布局，可以拉动调整大小</p>
      <p>需要配合FlexLayout一起使用</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="width: 30px" />
          <adv-splitlayout />
          <adv-flexlayout-auto />
        </adv-flexlayout>

        <adv-space :size="30" />

        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-auto />
          <adv-splitlayout />
          <adv-flexlayout-fixed style="width: 30px" />
        </adv-flexlayout>

        <adv-space :size="30" />

        <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="height: 30px" />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-auto />
        </adv-flexlayout>

        <adv-space :size="30" />

        <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-auto />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-fixed style="height: 30px" />
        </adv-flexlayout>
      </template>

      <template #p2>
        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="width: 30px" />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-auto />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-fixed style="width: 30px" />
        </adv-flexlayout>

        <adv-space :size="30" />

        <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="height: 30px" />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-auto />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-fixed style="height: 30px" />
        </adv-flexlayout>
      </template>

      <template #p3>
        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="width: 30px" />
          <adv-splitlayout />
          <adv-flexlayout-auto>
            <adv-flexlayout>
              <adv-flexlayout-fixed style="height: 30px" />
              <adv-splitlayout style="width: auto" />
              <adv-flexlayout-auto />
              <adv-splitlayout style="width: auto" />
              <adv-flexlayout-fixed style="height: 30px" />
            </adv-flexlayout>
          </adv-flexlayout-auto>
          <adv-splitlayout />
          <adv-flexlayout-fixed style="width: 30px" />
        </adv-flexlayout>

        <adv-space :size="30" />

        <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="height: 30px" />
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-auto>
            <adv-flexlayout direction="horizontal">
              <adv-flexlayout-fixed style="width: 30px" />
              <adv-splitlayout />
              <adv-flexlayout-auto />
              <adv-splitlayout />
              <adv-flexlayout-fixed style="width: 30px" />
            </adv-flexlayout>
          </adv-flexlayout-auto>
          <adv-splitlayout style="width: auto" />
          <adv-flexlayout-fixed style="height: 30px" />
        </adv-flexlayout>
      </template>

      <template #p4>
        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="width: 30px" />
          <adv-splitlayout min-size="20%" max-size="50%" />
          <adv-flexlayout-auto />
        </adv-flexlayout>

        <adv-space :size="30" />

        <adv-flexlayout style="height: 400px; border: 1px solid #ccc">
          <adv-flexlayout-fixed style="height: 30px" />
          <adv-splitlayout min-size="20%" max-size="50%" style="width: auto" />
          <adv-flexlayout-auto />
        </adv-flexlayout>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
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
            <h2>基本使用</h2>
            <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="width: 30px" />
              <adv-splitlayout />
              <adv-flexlayout-auto />
            </adv-flexlayout>

            <adv-space :size="30" />

            <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-auto />
              <adv-splitlayout />
              <adv-flexlayout-fixed style="width: 30px" />
            </adv-flexlayout>

            <adv-space :size="30" />

            <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="height: 30px" />
              <adv-splitlayout style="width: auto" />
              <adv-flexlayout-auto />
            </adv-flexlayout>

            <adv-space :size="30" />

            <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-auto />
              <adv-splitlayout style="width: auto" />
              <adv-flexlayout-fixed style="height: 30px" />
            </adv-flexlayout>
          </template>
        `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '多个分割点',
          cardProps: {
            description: {
              title: '多个分割点',
              info: '多个分割点',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <h2>多个分割点</h2>
            <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="width: 30px" />
              <adv-splitlayout style="width: auto;"/>
              <adv-flexlayout-auto />
              <adv-splitlayout style="width: auto;"/>
              <adv-flexlayout-fixed style="width: 30px" />
            </adv-flexlayout>

            <adv-space :size="30" />

            <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="height: 30px" />
              <adv-splitlayout style="width: auto;"/>
              <adv-flexlayout-auto />
              <adv-splitlayout style="width: auto;"/>
              <adv-flexlayout-fixed style="height: 30px" />
            </adv-flexlayout>
          </template>
        `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '嵌套',
          cardProps: {
            description: {
              title: '嵌套',
              info: '嵌套',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <h2>嵌套</h2>
            <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="width: 30px" />
              <adv-splitlayout />
              <adv-flexlayout-auto>
                <adv-flexlayout>
                  <adv-flexlayout-fixed style="height: 30px" />
                  <adv-splitlayout style="width: auto;"/>
                  <adv-flexlayout-auto />
                  <adv-splitlayout style="width: auto;"/>
                  <adv-flexlayout-fixed style="height: 30px" />
                </adv-flexlayout>
              </adv-flexlayout-auto>
              <adv-splitlayout />
              <adv-flexlayout-fixed style="width: 30px" />
            </adv-flexlayout>

            <adv-space :size="30" />

            <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="height: 30px" />
              <adv-splitlayout style="width: auto;"/>
              <adv-flexlayout-auto>
                <adv-flexlayout direction="horizontal">
                  <adv-flexlayout-fixed style="width: 30px" />
                  <adv-splitlayout />
                  <adv-flexlayout-auto />
                  <adv-splitlayout/>
                  <adv-flexlayout-fixed style="width: 30px" />
                </adv-flexlayout>
              </adv-flexlayout-auto>
              <adv-splitlayout style="width: auto;"/>
              <adv-flexlayout-fixed style="height: 30px" />
            </adv-flexlayout>
          </template>
        `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '使用minSize和maxSize控制拖放范围',
          cardProps: {
            description: {
              title: '使用minSize和maxSize控制拖放范围',
              info: '使用minSize和maxSize控制拖放范围',
            },
          },
          type: 'PlayGround',
          codeText: `
          <template>
            <h2>使用minSize和maxSize控制拖放范围</h2>
            <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="width: 30px" />
              <adv-splitlayout minSize="20%" maxSize="50%"/>
              <adv-flexlayout-auto />
            </adv-flexlayout>

            <adv-space :size="30" />

            <adv-flexlayout style="height: 400px; border: 1px solid #ccc">
              <adv-flexlayout-fixed style="height: 30px" />
              <adv-splitlayout minSize="20%" maxSize="50%" style="width: auto;"/>
              <adv-flexlayout-auto />
            </adv-flexlayout>
          </template>
        `,
          childrenSlot: 'p4',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'SplitLayout',
          data: [
            {
              params: 'maxSize',
              desc: '最大距离，可以使数值或是字符串的百分比',
              type: 'string | number',
              defaultVal: '100%',
            },
            {
              params: 'minSize',
              desc: '最小距离，可以使数值或是字符串的百分比',
              type: 'string | number',
              defaultVal: '10',
            },
            {
              params: 'onCanDrag',
              desc: '是否可以拖动',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onDragStarted',
              desc: '多动开始',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onDragFinished',
              desc: '拖动结束',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onOut',
              desc: '移出拖动范围',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onChange',
              desc: '拖动变化',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
