<template>
  <div class="Page">
    <h1>PullRefresh</h1>
    <p>下拉刷新</p>
    <ul>
      <li>- 支持mobile和pc</li>
    </ul>

    <adv-space />

    <props
      :border="true"
      :title="'PullRefresh'"
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
          type: 'String',
          defaultVal: '',
        },
        {
          params: 'scrollClassName',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'scrollStyle',
          desc: '附加的样式',
          type: 'String',
          defaultVal: '',
        },
        {
          params: 'pullHeight',
          desc: '拉取的高度',
          type: 'number',
          defaultVal: 'target返回的元素高度',
        },
        {
          params: 'icon',
          desc: '图标的渲染',
          type: 'slot',
          defaultVal: '',
        },
        {
          params: 'label',
          desc: '默认文字的渲染',
          type: 'slot',
          defaultVal: '',
        },
        {
          params: 'canLabel',
          desc: '可以刷新文本的渲染',
          type: 'slot',
          defaultVal: '',
        },
        {
          params: 'loadingAnimation',
          desc: '拉取后的loading效果，如果是string可选的值可以参考load-awesome库',
          type: 'slot',
          defaultVal: '',
        },
        {
          params: 'isShowUpdateTime',
          desc: '是否显示更新时间',
          type: 'boolean',
          defaultVal: '',
        },
        {
          params: 'updateTime',
          desc: '默认的更新时间(毫秒)',
          type: 'number',
          defaultVal: '当前时间的毫秒',
        },
        {
          params: 'updateTimeFormat',
          desc: '更新时间的格式化',
          type: 'string',
          defaultVal: 'YYYY-MM-DD HH:mm:ss',
        },
        {
          params: 'onPullStart',
          desc: '拖动开始',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullCanRefresh',
          desc: '可以进行刷新操作',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullRefresh',
          desc: '执行了刷新',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullBottom',
          desc: '拉动到了底部',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onPullRebound',
          desc: '弹回了',
          type: 'Function',
          defaultVal: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'方法'"
      :data="[
        {
          name: 'refresh',
          desc: '执行刷新操作',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'reset',
          desc: '重置',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'resetUpdateTime',
          desc: '重置更新时间',
          modifier: 'public',
          params: [
            {
              name: 'updateTime',
              desc: '更新时间(毫秒)',
              type: 'number',
              defaultVal: '当前时间的毫秒',
              required: '',
            },
          ],
          returnType: 'Promise',
          returnDesc: '',
        },
        {
          name: 'getUpdateTime',
          desc: '获取更新时间(毫秒)',
          modifier: 'public',
          params: [],
          returnType: 'number',
          returnDesc: '当前时间的毫秒',
        },
      ]"
    />

    <adv-space />

    <h2>基本使用</h2>
    <playground :code-text="code1">
      <adv-pullrefresh :class-name="$style.Wrap" @pull-refresh="onCode1Refresh">
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
      </adv-pullrefresh>
    </playground>

    <adv-space />

    <h2>Api触发刷新</h2>
    <playground :code-text="code2">
      <adv-pullrefresh ref="ref" :class-name="$style.Wrap" @pull-refresh="onCode2Refresh">
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
      </adv-pullrefresh>
      <adv-space />
      <a-button type="primary" @click="onCode2Click">触发下拉刷新</a-button>
    </playground>

    <adv-space />

    <h2>自定义图标和文本(1)</h2>
    <playground-mulit :defaultConfig="code3">
      <adv-pullrefresh
        :class-name="$style.Wrap"
        :is-show-update-time="false"
        :loading-animation="false"
        @pull-refresh="onCode3Refresh"
      >
        <template #icon>
          <div>
            <img :src="refreshIcon" alt="" />
          </div>
        </template>
        <template #label>
          <span>下拉可刷新</span>
        </template>
        <template #canLabel>
          <span>释放可刷新</span>
        </template>
        <template #loadingAnimation>
          <div :class="$style.RefreshCustom1">
            <img :src="refreshIcon" alt="" />
            <div>刷新中...</div>
          </div>
        </template>
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
      </adv-pullrefresh>
    </playground-mulit>
  </div>
</template>

<script>
import refreshIcon from './refresh.svg';

let data = [];
data.length = 100;
data.fill(0);
data = data.map((t, index) => `Ant Design Title ${index + 1}`);

export default {
  data() {
    return {
      data,
    };
  },
  computed: {
    refreshIcon() {
      return refreshIcon;
    },
    code1() {
      return `
        <template>
          <h2>基本使用</h2>
          <adv-pullrefresh :className="$style.Wrap" @pull-refresh="onCode1Refresh">
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
          </adv-pullrefresh>
        </template>
        <script>
          let data = [];
          data.length = 100;
          data.fill(0);
          data = data.map((t, index) => \`Ant Design Title \` + (index + 1));

          export default {
            data() {
              return {
                data,
              }
            },
            methods: {
              onCode1Refresh(ins) {
                setTimeout(() => {
                  ins.reset();
                }, 1000 * 3);
              },
            }
          }
        <\/script>
      `;
    },
    code2() {
      return `
        <template>
          <h2>Api触发刷新</h2>
          <adv-pullrefresh :className="$style.Wrap" ref="ref" @pull-refresh="onCode2Refresh">
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
          </adv-pullrefresh>
          <adv-space />
          <a-button type="primary" @click="onCode2Click">触发下拉刷新</a-button>
        </template>
        <script>
          let data = [];
          data.length = 100;
          data.fill(0);
          data = data.map((t, index) => \`Ant Design Title \` + (index + 1));

          export default {
            data() {
              return {
                data,
              }
            },
            methods: {
              onCode2Refresh(ins) {
                setTimeout(() => {
                  ins.reset();
                }, 1000 * 3);
              },
              onCode2Click() {
                this.$refs.ref.refresh();
              },
            }
          }
        <\/script>
      `;
    },
    code3() {
      return [
        {
          type: 'CodePanel',
          title: `index.vue`,
          lang: 'vue',
          codeText: `
            <template>
              <h2>自定义图标和文本(1)</h2>
              <adv-pullrefresh :className="$style.Wrap" :isShowUpdateTime="false" :loadingAnimation="false" @pull-refresh="onCode3Refresh">
                <template v-slot:icon>
                  <div>
                    <img :src="refreshIcon" alt="" />
                  </div>
                </template>
                <template v-slot:label>
                  <span>下拉可刷新</span>
                </template>
                <template v-slot:canLabel>
                  <span>释放可刷新</span>
                </template>
                <template v-slot:loadingAnimation>
                  <div :class="$style.RefreshCustom1">
                    <img :src="refreshIcon" alt="" />
                    <div>刷新中...</div>
                  </div>
                </template>
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
              </adv-pullrefresh>
            </template>
            <script>
              import refreshIcon from './refresh.svg';

              let data = [];
              data.length = 100;
              data.fill(0);
              data = data.map((t, index) => \`Ant Design Title \` + (index + 1));

              export default {
                data() {
                  return {
                    data,
                  }
                },
                computed: {
                  refreshIcon() {
                    return refreshIcon;
                  },
                }
                methods: {
                  onCode3Refresh(ins) {
                    setTimeout(() => {
                      ins.reset();
                    }, 1000 * 3);
                  }
                }
              }
            <\/script>
            <style lang="less" module src="./index.less" />
          `,
        },
        {
          type: 'CodePanel',
          title: 'index.less',
          lang: 'less',
          codeText: `
            .Wrap {
              height: 300px;
            }

            .RefreshCustom1 {
              display: flex;
              align-items: center;
              justify-content: center;
              color: #000;

              img {
                margin-right: 15px;
                :local {
                  animation: RefreshCustom1 1.2s infinite linear;
                }
              }
            }

            @keyframes RefreshCustom1 {
              to {
                transform: rotate(405deg);
                transform-origin: center center;
              }
            }
          `,
        },
      ];
    },
  },
  methods: {
    onCode1Refresh(ins) {
      setTimeout(() => {
        ins.reset();
      }, 1000 * 3);
    },
    onCode2Refresh(ins) {
      setTimeout(() => {
        ins.reset();
      }, 1000 * 3);
    },
    onCode2Click() {
      this.$refs.ref.refresh();
    },
    onCode3Refresh(ins) {
      setTimeout(() => {
        ins.reset();
      }, 1000 * 3);
    },
  },
};
</script>
<style lang="less" module src="./index.less" />
