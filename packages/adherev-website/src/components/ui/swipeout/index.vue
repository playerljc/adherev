<template>
  <div class="Page">
    <h1>SwipeOut</h1>
    <p>滑动操作</p>

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
          params: 'beforeClassName',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'beforeStyle',
          desc: '附加的样式',
          type: 'React.CSSProperties',
          defaultVal: '',
        },
        {
          params: 'afterClassName',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'afterStyle',
          desc: '附加的样式',
          type: 'React.CSSProperties',
          defaultVal: '',
        },
        {
          params: 'contentClassName',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'contentStyle',
          desc: '附加的样式',
          type: 'React.CSSProperties',
          defaultVal: '',
        },
        {
          params: 'beforeShow',
          desc: '是否显示内容之前的操作',
          type: 'boolean',
          defaultVal: 'false',
        },
        {
          params: 'afterShow',
          desc: '是否显示内容之后的操作',
          type: 'boolean',
          defaultVal: 'false',
        },
        {
          params: 'direction',
          desc: '方向',
          type: 'horizontal' | 'vertical',
          defaultVal: 'horizontal',
        },
        {
          params: 'before',
          desc: '内容之前的UI',
          type: '() => React.ReactElement',
          defaultVal: '',
        },
        {
          params: 'after',
          desc: '内容之后的UI',
          type: '() => React.ReactElement',
          defaultVal: '',
        },
        {
          params: 'duration',
          desc: 'beforeShow和afterShow的持续时间(毫秒)',
          type: 'number',
          defaultVal: '200',
        },
        {
          params: 'onInit',
          desc: 'onInit',
          type: '() => void',
          defaultVal: '',
        },
        {
          params: 'slideChangeTransitionStart',
          desc: 'slideChangeTransitionStart',
          type: '() => void',
          defaultVal: '',
        },
        {
          params: 'slideChangeTransitionEnd',
          desc: 'slideChangeTransitionEnd',
          type: '() => void',
          defaultVal: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <div>
        <a-radio-group>
          <a-radio-button value="large" @click="onShowBefore">showBefore</a-radio-button>
          <a-radio-button value="default" @click="onShowAfter">showAfter</a-radio-button>
          <a-radio-button value="small" @click="onShowCloseAll">closeAll</a-radio-button>
        </a-radio-group>
      </div>

      <adv-space />

      <a-list item-layout="horizontal" :data-source="data">
        <adv-swipeout
          slot="renderItem"
          slot-scope="item, index"
          :before-show="item.beforeShow"
          :after-show="item.afterShow"
          :duration="item.duration"
        >
          <a-radio-group slot="before">
            <a-radio-button value="large">Large</a-radio-button>
            <a-radio-button value="default">Default</a-radio-button>
            <a-radio-button value="small">Small</a-radio-button>
          </a-radio-group>

          <a-radio-group slot="after">
            <a-radio-button value="large">Large</a-radio-button>
            <a-radio-button value="default">Default</a-radio-button>
            <a-radio-button value="small">Small</a-radio-button>
          </a-radio-group>

          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </adv-swipeout>
      </a-list>
    </playground>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'Ant Design Title 1',
          beforeShow: false,
          afterShow: false,
          duration: 200,
        },
        {
          title: 'Ant Design Title 2',
          beforeShow: false,
          afterShow: false,
          duration: 200,
        },
        {
          title: 'Ant Design Title 3',
          beforeShow: false,
          afterShow: false,
          duration: 200,
        },
        {
          title: 'Ant Design Title 4',
          beforeShow: false,
          afterShow: false,
          duration: 200,
        },
      ],
    };
  },
  computed: {
    code1() {
      return `
        <template>
          <h2>基本使用</h2>
          <div>
            <a-radio-group>
              <a-radio-button value="large" @click="onShowBefore">showBefore</a-radio-button>
              <a-radio-button value="default" @click="onShowAfter">showAfter</a-radio-button>
              <a-radio-button value="small" @click="onShowCloseAll">closeAll</a-radio-button>
            </a-radio-group>
          </div>

          <adv-space />

          <a-list item-layout="horizontal" :data-source="data">
            <adv-swipeout
              slot="renderItem"
              slot-scope="item, index"
              :before-show="item.beforeShow"
              :after-show="item.afterShow"
              :duration="item.duration"
            >
              <a-radio-group slot="before">
                <a-radio-button value="large">Large</a-radio-button>
                <a-radio-button value="default">Default</a-radio-button>
                <a-radio-button value="small">Small</a-radio-button>
              </a-radio-group>

              <a-radio-group slot="after">
                <a-radio-button value="large">Large</a-radio-button>
                <a-radio-button value="default">Default</a-radio-button>
                <a-radio-button value="small">Small</a-radio-button>
              </a-radio-group>

              <a-list-item-meta
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              >
                <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </adv-swipeout>
          </a-list>
        </template>

        <script>
          export default {
            data() {
              return {
                data: [
                  {
                    title: 'Ant Design Title 1',
                    beforeShow: false,
                    afterShow: false,
                    duration: 200,
                  },
                  {
                    title: 'Ant Design Title 2',
                    beforeShow: false,
                    afterShow: false,
                    duration: 200,
                  },
                  {
                    title: 'Ant Design Title 3',
                    beforeShow: false,
                    afterShow: false,
                    duration: 200,
                  },
                  {
                    title: 'Ant Design Title 4',
                    beforeShow: false,
                    afterShow: false,
                    duration: 200,
                  },
                ],
              };
            },
            methods: {
              onShowBefore() {
                this.data = this.data.map((t) => ({ ...t, beforeShow: true, afterShow: false }));
              },
              onShowAfter() {
                this.data = this.data.map((t) => ({ ...t, beforeShow: false, afterShow: true }));
              },
              onShowCloseAll() {
                this.data = this.data.map((t) => ({ ...t, beforeShow: false, afterShow: false }));
              }
            }
          }
        <\/script>
      `;
    }
  },
  methods: {
    onShowBefore() {
      this.data = this.data.map((t) => ({ ...t, beforeShow: true, afterShow: false }));
    },
    onShowAfter() {
      this.data = this.data.map((t) => ({ ...t, beforeShow: false, afterShow: true }));
    },
    onShowCloseAll() {
      this.data = this.data.map((t) => ({ ...t, beforeShow: false, afterShow: false }));
    }
  }
};
</script>
