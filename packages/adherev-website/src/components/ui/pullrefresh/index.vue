<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="PullRefresh">
      <p>下拉刷新</p>
      <ul>
        <li>- 支持mobile和pc</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-pullrefresh :class="$style.Wrap" @pull-refresh="onCode1Refresh">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="item, index">
              <a-list-item>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>

                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </adv-pullrefresh>
      </template>

      <template #p2>
        <adv-pullrefresh ref="ref" :class="$style.Wrap" @pull-refresh="onCode2Refresh">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="item, index">
              <a-list-item>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>

                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </adv-pullrefresh>
        <adv-space />
        <a-button type="primary" @click="onCode2Click">触发下拉刷新</a-button>
      </template>

      <template #p3>
        <adv-pullrefresh
          :class="$style.Wrap"
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
            <template #renderItem="item, index">
              <a-list-item>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>

                  <template #avatar>
                    <a-avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </adv-pullrefresh>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import refreshIcon from './refresh.svg';

let data = [];
data.length = 100;
data.fill(0);
data = data.map((t, index) => `Ant Design Title ${index + 1}`);

export default {
  displayName: 'pullrefresh',
  data() {
    return {
      data,
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
          <adv-pullrefresh :class="$style.Wrap" @pull-refresh="onCode1Refresh">
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
              onCode1Refresh(reset) {
                setTimeout(() => {
                  reset();
                }, 1000 * 3);
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Api触发刷新',
          cardProps: {
            description: {
              title: 'Api触发刷新',
              info: 'Api触发刷新',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>Api触发刷新</h2>
          <adv-pullrefresh :class="$style.Wrap" ref="ref" @pull-refresh="onCode2Refresh">
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
              onCode2Refresh(reset) {
                setTimeout(() => {
                  reset();
                }, 1000 * 3);
              },
              onCode2Click() {
                this.$refs.ref.refresh();
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '自定义图标和文本',
          cardProps: {
            description: {
              title: '自定义图标和文本',
              info: '自定义图标和文本',
            },
          },
          type: 'PlayGroundTab',
          active: 'index.vue',
          config: [
            {
              title: 'index.vue',
              key: 'index.vue',
              codeText: `
            <template>
              <h2>自定义图标和文本(1)</h2>
              <adv-pullrefresh :class="$style.Wrap" :isShowUpdateTime="false" :loadingAnimation="false" @pull-refresh="onCode3Refresh">
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
                  onCode3Refresh(reset) {
                    setTimeout(() => {
                      reset();
                    }, 1000 * 3);
                  }
                }
              }
            <\/script>
            <style lang="less" module src="./index.less" />
          `,
            },
            {
              title: 'index.less',
              key: 'index.less',
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
          ],
          childrenSlot: 'p3',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
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
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'PullRefresh',
          data: [
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
          ],
        },
      ],
    };
  },
  computed: {
    refreshIcon() {
      return refreshIcon;
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {
    onCode1Refresh(reset) {
      setTimeout(() => {
        reset();
      }, 1000 * 3);
    },
    onCode2Refresh(reset) {
      setTimeout(() => {
        reset();
      }, 1000 * 3);
    },
    onCode2Click() {
      this.$refs.ref.refresh();
    },
    onCode3Refresh(reset) {
      setTimeout(() => {
        reset();
      }, 1000 * 3);
    },
  },
};
</script>

<style lang="less" module src="./index.less" />
