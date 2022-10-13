<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="BackTopAnimation">
      <p>动画的回到顶部</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="position: relative; height: 300px; overflow-y: hidden">
          <div ref="ref" style="height: 100%; overflow-y: auto">
            <a-list item-layout="horizontal" :data-source="data">
              <a-list-item slot="renderItem" slot-scope="item, index">
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
          <adv-backtopanimation @target="onTarget" @trigger="onTrigger" @scroll-top="onScrollTop" />
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
let data = [];
data.length = 100;
data.fill(0);
data = data.map((t, index) => ({
  title: `Ant Design Title ${index}`,
}));

export default {
  data() {
    return {
      data,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '列表中使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '列表中使用',
              info: '可以动画的回到列表的顶端',
            },
          },
          codeText: `
        <template>
          <h2>基本使用</h2>
          <div style="position: relative; height: 300px; overflow-y: hidden">
            <div style="height: 100%; overflow-y: auto" ref="ref">
              <a-list itemLayout="horizontal" :dataSource="data">
                <a-list-item slot="renderItem" slot-scope="item, index">
                  <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  >
                    <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                    <a-avatar
                      slot="avatar"
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </div>
            <adv-backtopanimation @target="onTarget" @trigger="onTrigger" @scroll-top="onScrollTop" />
          </div>
        </template>
        <script>
          let data = [];
          data.length = 100;
          data.fill(0);
          data = data.map((t, index) => ({
            title: "Ant Design Title" + index,
          }));

          export default {
             data() {
               return {
                 data,
               }
             },
             methods: {
               onTarget: function (callback) {
                  callback(this.$refs.ref);
                },
                onTrigger: function (next) {
                  next();
                },
                onScrollTop: function (val) {
                  console.log(val);
                },
             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'zIndex',
              desc: '层级',
              type: 'boolean',
              defaultVal: '',
            },
            {
              params: 'duration',
              desc: '动画持续的事件',
              type: 'number',
              defaultVal: '300',
            },
            {
              params: 'target',
              desc: '获取滚动的目标元素',
              type: '() => HtmlElement | Window',
              defaultVal: '',
            },
            {
              params: 'onTrigger',
              desc: '点击事件',
              type: '() => void',
              defaultVal: '',
            },
            {
              params: 'onScrollTop',
              desc: '滚动',
              type: '(value: number) => void',
              defaultVal: '',
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
    onTarget(callback) {
      callback(this.$refs.ref);
    },
    onTrigger(next) {
      next();
    },
    onScrollTop(val) {
      console.log(val);
    },
  },
};
</script>
