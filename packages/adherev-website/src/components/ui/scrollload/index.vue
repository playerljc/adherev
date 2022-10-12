<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="ScrollLoad">
      <p>滚动加载</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-scrollload style="width: 400px; height: 600px" @scrollBottom="onCode1ScrollBottom">
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
        </adv-scrollload>
      </template>

      <template #p2>
        <adv-scrollload
          style="width: 400px; height: 600px"
          @scrollBottom="onCode2ScrollBottom"
          @emptyClick="onCode2EmptyClick"
        >
          <a-list item-layout="horizontal" :data-source="code2Data">
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
        </adv-scrollload>
      </template>

      <template #p3>
        <adv-scrollload
          style="width: 400px; height: 600px"
          @scrollBottom="onCode3ScrollBottom"
          @errorClick="onCode3ErrorClick"
        >
          <a-list item-layout="horizontal" :data-source="code2Data">
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
        </adv-scrollload>
      </template>

      <template #p4>
        <adv-scrollload style="width: 400px; height: 400px" @scrollBottom="onCode4ScrollBottom">
          <a-list item-layout="horizontal" :data-source="code2Data">
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

          <template #loading>
            <a-spin tip="loading..." style="width: 100%" />
          </template>

          <template #empty>
            <a-empty />
          </template>
        </adv-scrollload>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import { ScrollLoad } from '@baifendian/adherev';

const globalData = [];
globalData.length = 10;
globalData.fill(1);

let page = 1;

let callbackHandler = null;

let ref1Status = ScrollLoad.NORMAL;
let ref2Status = ScrollLoad.NORMAL;
let ref3Status = ScrollLoad.NORMAL;

function getData() {
  const result = [];
  result.length = page * 10;
  result.fill(0);

  // eslint-disable-next-line no-plusplus
  page++;

  console.log(result.length);

  return result.map((t, index) => ({
    title: `Ant Design Title ${index + 1}`,
  }));
}

export default {
  data() {
    return {
      data: getData(),
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
        <h2>基本使用</h2>
        <template>
          <adv-scrollload style="width: 400px; height: 600px" @scrollBottom="onCode1ScrollBottom">
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
          </adv-scrollload>
        </template>
        <script>
          let page = 1;

          let callbackHandler = null;

          function getData() {
            const result = [];
            result.length = page * 10;
            result.fill(0);

            // eslint-disable-next-line no-plusplus
            page++;

            console.log(result.length);

            return result.map((t, index) => ({
              title: "Ant Design Title" + (index + 1),
            }));
          }

          export default {
            data() {
              getData(),
            },
            watch: {
              data: function () {
                if (callbackHandler) {
                  callbackHandler(ScrollLoad.NORMAL);
                  callbackHandler = null;
                }
              }
            },
            methods: {
              onCode1ScrollBottom(callback) {
                setTimeout(() => {
                  callbackHandler = callback;
                  this.data = getData();
                }, 2000);
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '没有数据的显示',
          cardProps: {
            description: {
              title: '没有数据的显示',
              info: '没有数据的显示',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>没有数据的显示</h2>
          <adv-scrollload style="width: 400px; height: 600px" @scrollBottom="onCode2ScrollBottom" @emptyClick="onCode2EmptyClick">
            <a-list item-layout="horizontal" :data-source="code2Data">
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
          </adv-scrollload>
        </template>
        <script>
          const globalData = [];
          globalData.length = 10;
          globalData.fill(1);

          export default {
            computed: {
              code2Data() {
                return globalData.map((t, index) => ({
                  title: "Ant Design Title" + (index + 1),
                }))
              }
            },
            methods: {
              onCode2ScrollBottom(callback) {
                if (ref1Status === ScrollLoad.EMPTY) {
                  callback(ScrollLoad.EMPTY);
                }

                setTimeout(() => {
                  callback(ScrollLoad.EMPTY);
                  ref1Status = ScrollLoad.EMPTY;
                }, 2000);
              },
              onCode2EmptyClick() {
                alert('点击了');
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '错误的显示',
          cardProps: {
            description: {
              title: '错误的显示',
              info: '错误的显示',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>错误的显示</h2>
          <adv-scrollload style="width: 400px; height: 600px" @scrollBottom="onCode3ScrollBottom" @errorClick="onCode3ErrorClick">
            <a-list item-layout="horizontal" :data-source="code2Data">
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
          </adv-scrollload>
        </template>
        <script>
          const globalData = [];
          globalData.length = 10;
          globalData.fill(1);

          export default {
            computed: {
              code2Data() {
                return globalData.map((t, index) => ({
                  title: "Ant Design Title" + (index + 1),
                }))
              }
            },
            methods: {
               onCode3ScrollBottom(callback) {
                if (ref2Status === ScrollLoad.ERROR) {
                  callback(ScrollLoad.ERROR);
                }

                setTimeout(() => {
                  callback(ScrollLoad.ERROR);
                  ref2Status = ScrollLoad.ERROR;
                }, 2000);
              },
              onCode3ErrorClick() {
                alert('点击了');
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '自定义loading和empty',
          cardProps: {
            description: {
              title: '自定义loading和empty',
              info: '自定义loading和empty',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>自定义loading和empty</h2>
          <adv-scrollload style="width: 400px; height: 400px" @scrollBottom="onCode4ScrollBottom">
            <a-list item-layout="horizontal" :data-source="code2Data">
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

            <template v-slot:loading>
              <a-spin tip="loading..." style="width: 100%" />
            </template>

            <template v-slot:empty>
              <a-empty />
            </template>
          </adv-scrollload>
        </template>
        <script>
          const globalData = [];
          globalData.length = 10;
          globalData.fill(1);

          export default {
            computed: {
              code2Data() {
                return globalData.map((t, index) => ({
                  title: "Ant Design Title" + (index + 1),
                }))
              }
            },
            methods: {
               onCode4ScrollBottom(callback) {
                if (ref3Status === ScrollLoad.EMPTY) {
                  callback(ScrollLoad.EMPTY);
                }

                setTimeout(() => {
                  callback(ScrollLoad.EMPTY);
                  ref3Status = ScrollLoad.EMPTY;
                }, 2000);
              }
            }
          }
        <\/script>
      `,
          childrenSlot: 'p4',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'hideAll',
              desc: '隐藏所有',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'ScrollLoad',
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
              params: 'loadClassName',
              desc: 'load附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'loadStyle',
              desc: 'load附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'emptyClassName',
              desc: 'empty附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'emptyStyle',
              desc: 'empty附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'errorClassName',
              desc: 'error附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'errorStyle',
              desc: 'error附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'distance',
              desc: '距离底部的距离',
              type: 'number',
              defaultVal: '50',
            },
            {
              params: 'onScrollBottom',
              desc: '滚动到底部的钩子',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onEmptyClick',
              desc: '点击empty的钩子',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onErrorClick',
              desc: '点击error的钩子',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'renderLoading',
              desc: '自定义loading的UI',
              type: 'Function',
              defaultVal: '返回JSX',
            },
            {
              params: 'renderEmpty',
              desc: '自定义empty的UI',
              type: 'Function',
              defaultVal: 'JSX',
            },
            {
              params: 'renderError',
              desc: '自定义error的UI',
              type: 'Function',
              defaultVal: 'JSX',
            },
            {
              params: 'getScrollContainer',
              desc: '滚动元素设置',
              type: 'Function',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    code2Data() {
      return globalData.map((t, index) => ({
        title: `Ant Design Title${index + 1}`,
      }));
    },
  },
  watch: {
    data() {
      if (callbackHandler) {
        callbackHandler(ScrollLoad.NORMAL);
        callbackHandler = null;
      }
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    onCode1ScrollBottom(callback) {
      setTimeout(() => {
        callbackHandler = callback;
        this.data = getData();
      }, 2000);
    },
    onCode2ScrollBottom(callback) {
      if (ref1Status === ScrollLoad.EMPTY) {
        callback(ScrollLoad.EMPTY);
      }

      setTimeout(() => {
        callback(ScrollLoad.EMPTY);
        ref1Status = ScrollLoad.EMPTY;
      }, 2000);
    },
    onCode2EmptyClick() {
      alert('点击了');
    },
    onCode3ScrollBottom(callback) {
      if (ref2Status === ScrollLoad.ERROR) {
        callback(ScrollLoad.ERROR);
      }

      setTimeout(() => {
        callback(ScrollLoad.ERROR);
        ref2Status = ScrollLoad.ERROR;
      }, 2000);
    },
    onCode3ErrorClick() {
      alert('点击了');
    },
    onCode4ScrollBottom(callback) {
      if (ref3Status === ScrollLoad.EMPTY) {
        callback(ScrollLoad.EMPTY);
      }

      setTimeout(() => {
        callback(ScrollLoad.EMPTY);
        ref3Status = ScrollLoad.EMPTY;
      }, 2000);
    },
  },
};
</script>
