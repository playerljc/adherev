<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Space">
      <p>无侵入性的上下留白和左右留白</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="display: flex; align-items: center; height: 15px">
          <a>编辑</a>
          <adv-space direction="horizontal" />
          <a>查看</a>
          <adv-space direction="horizontal" />
          <a>删除</a>
        </div>
      </template>

      <template #p2>
        <div>
          <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
          <adv-space direction="vertical" />
          <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        </div>
      </template>

      <template #p3>
        <div>
          <div style="display: flex; align-items: center; height: 15px">
            <a>编辑</a>
            <adv-space direction="horizontal" :size="10" />
            <a>查看</a>
            <adv-space direction="horizontal" :size="10" />
            <a>删除</a>
          </div>

          <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
          <adv-space direction="vertical" :size="10" />
          <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        </div>
      </template>

      <template #p4>
        <div>
          <adv-space-group direction="horizontal">
            <a>编辑</a>
            <a>查看</a>
            <a>删除</a>
          </adv-space-group>

          <adv-space-group direction="vertical">
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </adv-space-group>
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
            <adv-space direction="horizontal" />
            <a>查看</a>
            <adv-space direction="horizontal" />
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
            <adv-space direction="vertical" />
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
          <h2>间距</h2>
          <div>
            <div style="display: flex; align-items: center; height: 15px">
              <a>编辑</a>
              <adv-space direction="horizontal" :size="10" />
              <a>查看</a>
              <adv-space direction="horizontal" :size="10" />
              <a>删除</a>
            </div>

            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <adv-space direction="vertical" :size="10" />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        </template>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'SpaceGroup',
          cardProps: {
            description: {
              title: 'SpaceGroup',
              info: 'SpaceGroup',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <div>
            <div style="display: flex; align-items: center; height: 15px">
              <adv-space-group direction="horizontal">
                <a>编辑</a>
                <a>查看</a>
                <a>删除</a>
              </adv-space-group>
            </div>

            <adv-space-group direction="vertical">
              <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
              <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
            </adv-space-group>
          </div>
        </template>
      `,
          childrenSlot: 'p4',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'Space',
          data: [
            {
              params: 'direction',
              desc: '方向',
              type: ['vertical' | 'horizontal'],
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
          title: 'Space.Group',
          data: [
            {
              params: 'direction',
              desc: '方向',
              type: ['vertical' | 'horizontal'],
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
