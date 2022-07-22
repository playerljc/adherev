<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Split">
      <p>无侵入性的竖线和横线分割</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="display: flex; align-items: center; height: 15px">
          <a>编辑</a>
          <adv-split direction="horizontal" />
          <a>查看</a>
          <adv-split direction="horizontal" />
          <a>删除</a>
        </div>
      </template>

      <template #p2>
        <div>
          <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
          <adv-split direction="vertical" />
          <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        </div>
      </template>

      <template #p3>
        <div>
          <div style="display: flex; align-items: center; height: 15px">
            <a>编辑</a>
            <adv-split direction="horizontal" :size="10" />
            <a>查看</a>
            <adv-split direction="horizontal" :size="10" />
            <a>删除</a>
          </div>

          <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
          <adv-split direction="vertical" :size="10" />
          <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        </div>
      </template>

      <template #p4>
        <div>
          <div style="display: flex; align-items: center; height: 15px">
            <adv-split-group direction="horizontal">
              <a>编辑</a>
              <a>查看</a>
              <a>删除</a>
            </adv-split-group>
          </div>

          <adv-split-group direction="vertical">
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </adv-split-group>
        </div>
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
          name: '横向',
          cardProps: {
            description: {
              title: '横向',
              info: '横向',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>横向</h2>
          <div style="display: flex; align-items: center; height: 15px">
            <a>编辑</a>
            <adv-split direction="horizontal" />
            <a>查看</a>
            <adv-split direction="horizontal" />
            <a>删除</a>
          </div>
        </template>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '纵向',
          cardProps: {
            description: {
              title: '纵向',
              info: '纵向',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <div>
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <adv-split direction="vertical" />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        </template>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '间距',
          cardProps: {
            description: {
              title: '间距',
              info: '间距',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <div>
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <adv-split direction="vertical" />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        </template>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'SplitGroup',
          cardProps: {
            description: {
              title: 'SplitGroup',
              info: 'SplitGroup',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>SplitGroup</h2>
          <div>
            <div style="display: flex; align-items: center; height: 15px">
              <adv-split-group direction="horizontal">
                <a>编辑</a>
                <a>查看</a>
                <a>删除</a>
              </adv-split-group>
            </div>

            <adv-split-group direction="vertical">
              <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
              <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
            </adv-split-group>
          </div>
        </template>
      `,
          childrenSlot: 'p4',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'Split',
          data: [
            {
              params: 'direction',
              desc: '方向',
              type: `['vertical' | 'horizontal']`,
              defaultVal: 'vertical',
            },
            {
              params: 'size',
              desc: '宽度或这高度',
              type: 'string | number',
              defaultVal: '20',
            },
            {
              params: 'className',
              desc: '附加的样式',
              type: 'string',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'Split.Group',
          data: [
            {
              params: 'direction',
              desc: '方向',
              type: `['vertical' | 'horizontal']`,
              defaultVal: 'vertical',
            },
            {
              params: 'size',
              desc: '宽度或这高度',
              type: 'string | number',
              defaultVal: '20',
            },
            {
              params: 'className',
              desc: '附加的样式',
              type: 'string',
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
