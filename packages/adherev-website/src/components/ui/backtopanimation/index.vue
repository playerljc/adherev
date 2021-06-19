<template>
  <div class="Page">
    <h1>BackTopAnimation</h1>
    <p>动画的回到顶部</p>
    <h2>属性</h2>
    <props
      :data="[
        {
          params: 'className',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'style',
          desc: '附加的样式',
          type: 'React.CSSProperties',
          defaultVal: '',
        },
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
      ]"
    />

    <h2>基本使用</h2>
    <playground :code-text="code1">
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
    </playground>
  </div>
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
      code1: `
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
    };
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
