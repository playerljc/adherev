<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="Comment">
      <p>评论</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div :class="$style.ScrollWrap" ref="ref">
          <div :class="$style.Scroll">
            <adv-comment
              :getScrollWrapContainer="getScrollWrapContainer"
              :fetchCommentData="fetchCommentData"
              :fetchReplyData="fetchReplyData"
              :fetchReply="fetchReply"
            >
              <template #renderCommentAuthor="record">
                {{ record.name }}
              </template>
              <template #renderCommentActions="props">
                <a-tooltip :title="'Like'">
                  <span @click="onLike(props)">
                    <like-outlined />
                    <span style="margin-left: 5px">{{ props.record.like }}</span>
                  </span>
                </a-tooltip>

                <a-tooltip :title="'Dislike'">
                  <span @click="onDisLike(props)">
                    <dislike-outlined />
                    <span style="margin-left: 5px">{{ props.record.dislike }}</span>
                  </span>
                </a-tooltip>
              </template>
              <template #renderCommentAvatar="record">
                <img :src="record.icon" alt="" />
              </template>
              <template #renderCommentContent="record">
                {{ record.info }}
              </template>
              <template #renderCommentDateTime="record">
                <adv-datedisplay-fromnow :value="record.time" />
              </template>
              <template #renderReplyActions="props">
                <a-tooltip :title="'Like'">
                  <span @click="onLike(props)">
                    <like-outlined />
                    <span style="margin-left: 5px">{{ props.record.like }}</span>
                  </span>
                </a-tooltip>

                <a-tooltip :title="'Dislike'">
                  <span @click="onDisLike(props)">
                    <dislike-outlined />
                    <span style="margin-left: 5px">{{ props.record.dislike }}</span>
                  </span>
                </a-tooltip>
              </template>
              <template #renderReplyAuthor="record">
                {{ record.name }}
              </template>
              <template #renderReplyAvatar="record">
                <img :src="record.icon" alt="" />
              </template>
              <template #renderReplyContent="record">
                {{ record.info }}
              </template>
              <template #renderReplyDateTime="record">
                <adv-datedisplay-fromnow :value="record.time" />
              </template>
            </adv-comment>
          </div>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import faker from 'faker';

import { DislikeOutlined, LikeOutlined } from '@ant-design/icons-vue';
import { GlobalIndicator } from '@baifendian/adherev';

const CommentData = Array.from({ length: 300 }).map((t, index) => ({
  id: index + 1,
  name: faker.internet.userName(),
  time: faker.date.past(),
  icon: 'https://joeschmoe.io/api/v1/random',
  info: faker.hacker.phrase(),
  isMore: index % 2 === 0,
  like: faker.random.number(),
  dislike: faker.random.number(),
}));

const ReplyData = Array.from({ length: 300 }).map((t, index) => ({
  id: index + 1,
  name: faker.internet.userName(),
  time: faker.date.past(),
  icon: 'https://joeschmoe.io/api/v1/random',
  info: faker.hacker.phrase(),
  isMore: index % 2 === 0,
  like: faker.random.number(),
  dislike: faker.random.number(),
}));

export default {
  displayName: 'comment',
  components: {
    'like-outlined': LikeOutlined,
    'dislike-outlined': DislikeOutlined,
  },
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          type: 'PlayGround',
          active: 'javascript',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          codeText: `
        <template>
          <div :class="$style.ScrollWrap" ref="ref">
            <div :class="$style.Scroll">
              <adv-comment
                :getScrollWrapContainer="getScrollWrapContainer"
                :fetchCommentData="fetchCommentData"
                :fetchReplyData="fetchReplyData"
                :fetchReply="fetchReply"
              >
                <template #renderCommentAuthor="record">
                  {{ record.name }}
                </template>
                <template #renderCommentActions="props">
                  <a-tooltip :title="'Like'">
                    <span @click="onLike(props)">
                      <like-outlined />
                      <span style="margin-left: 5px">{{ props.record.like }}</span>
                    </span>
                  </a-tooltip>

                  <a-tooltip :title="'Dislike'">
                    <span @click="onDisLike(props)">
                      <dislike-outlined />
                      <span style="margin-left: 5px">{{ props.record.dislike }}</span>
                    </span>
                  </a-tooltip>
                </template>
                <template #renderCommentAvatar="record">
                  <img :src="record.icon" alt="" />
                </template>
                <template #renderCommentContent="record">
                  {{ record.info }}
                </template>
                <template #renderCommentDateTime="record">
                  <adv-datedisplay-fromnow :value="record.time" />
                </template>
                <template #renderReplyActions="props">
                  <a-tooltip :title="'Like'">
                    <span @click="onLike(props)">
                      <like-outlined />
                      <span style="margin-left: 5px">{{ props.record.like }}</span>
                    </span>
                  </a-tooltip>

                  <a-tooltip :title="'Dislike'">
                    <span @click="onDisLike(props)">
                      <dislike-outlined />
                      <span style="margin-left: 5px">{{ props.record.dislike }}</span>
                    </span>
                  </a-tooltip>
                </template>
                <template #renderReplyAuthor="record">
                  {{ record.name }}
                </template>
                <template #renderReplyAvatar="record">
                  <img :src="record.icon" alt="" />
                </template>
                <template #renderReplyContent="record">
                  {{ record.info }}
                </template>
                <template #renderReplyDateTime="record">
                  <adv-datedisplay-fromnow :value="record.time" />
                </template>
              </adv-comment>
            </div>
          </div>
        </template>

        <script>
          import faker from 'faker';

          import { GlobalIndicator } from '@baifendian/adherev';

          const CommentData = Array.from({ length: 300 }).map((t, index) => ({
            id: index + 1,
            name: faker.internet.userName(),
            time: faker.date.past(),
            icon: 'https://joeschmoe.io/api/v1/random',
            info: faker.hacker.phrase(),
            isMore: index % 2 === 0,
            like: faker.random.number(),
            dislike: faker.random.number(),
          }));

          const ReplyData = Array.from({ length: 300 }).map((t, index) => ({
            id: index + 1,
            name: faker.internet.userName(),
            time: faker.date.past(),
            icon: 'https://joeschmoe.io/api/v1/random',
            info: faker.hacker.phrase(),
            isMore: index % 2 === 0,
            like: faker.random.number(),
            dislike: faker.random.number(),
          }));

          export default {
             data() {
               return {
               }
             },
             methods: {
                getScrollWrapContainer() {
                  return this.$refs.ref;
                },
                fetchCommentData({ page, limit }) {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve({
                        current: page,
                        totalPage: CommentData.length / limit + (CommentData.length % limit !== 0 ? 1 : 0),
                        list: CommentData.slice((page - 1) * limit, page * limit),
                        totalCount: CommentData.length,
                      });
                    }, 1500);
                  });
                },
                fetchReplyData(params) {
                  const { page, limit, record } = params;

                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve({
                        current: page,
                        totalPage: ReplyData.length / limit + (ReplyData.length % limit !== 0 ? 1 : 0),
                        list: ReplyData.slice((page - 1) * limit, page * limit),
                        totalCount: ReplyData.length,
                      });
                    }, 1500);
                  });
                },
                fetchReply(params) {
                  const { id, record, reply } = params;
                  const indicator = GlobalIndicator.show(document.body, '');
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      GlobalIndicator.hide(indicator);
                    }, 1000);
                  });
                },
                onDisLike(props) {
                  const { record, callback } = props;

                  setTimeout(() => {
                    record.dislike = faker.random.number();
                    callback({ ...record });
                  }, 1000);
                },
                onLike(props) {
                  const { record, callback } = props;

                  setTimeout(() => {
                    record.like = faker.random.number();
                    callback({ ...record });
                  }, 1000);
                },
             }
          }
        <\/script>

        <style lang="less" module>
        .ScrollWrap {
          position: relative;
          width: 100%;
          height: 800px;
          overflow-y: hidden;

          > .Scroll {
            width: 100%;
            height: 100%;
            overflow-y: auto;
          }
        }
        </style>
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
              params: 'getScrollWrapContainer',
              desc: '获取滚动的目标元素',
              type: 'HTMLElement',
              defaultVal: 'document.body',
            },
            {
              params: 'fetchCommentData',
              desc: '获取评论数据',
              type: '(params?: any) => Promise<any>',
              defaultVal: '',
            },
            {
              params: 'commentDataKeys',
              desc: '评论返回值结构',
              type: `
                  {
                    current: string;
                    totalPage: string;
                    list: string;
                    totalCount: string;
                  }
                `,
              defaultVal: `{
                  current: 'current',
                  totalPage: 'totalPage',
                  list: 'list',
                  totalCount: 'totalCount',
                }`,
            },
            {
              params: 'commentLimit',
              desc: '评论一页数据数',
              type: 'number',
              defaultVal: '10',
            },
            {
              params: 'commentKeyProp',
              desc: '评论数据的唯一主键属性',
              type: 'string',
              defaultVal: 'id',
            },
            {
              params: 'renderCommentActions',
              desc: '渲染评论的操作区',
              type: '(params?: any) => ReactNode[] | null',
              defaultVal: '',
            },
            {
              params: 'renderCommentAuthor',
              desc: '渲染评论作者',
              type: '(params?: any) => ReactNode[] | null',
              defaultVal: '',
            },
            {
              params: 'renderCommentAvatar',
              desc: '渲染评论头像',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderCommentContent',
              desc: '渲染评论内容',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderCommentDateTime',
              desc: '渲染评论时间',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderCommentLoading',
              desc: '渲染评论的loading',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'fetchReplyData',
              desc: '加载回复数据',
              type: '(params?: any) => Promise<any>',
              defaultVal: '',
            },
            {
              params: 'replyDataKeys',
              desc: '回复数据结构',
              type: `{
                  current: string;
                  totalPage: string;
                  list: string;
                  totalCount: string;
                }`,
              defaultVal: `{
                  current: 'current',
                  totalPage: 'totalPage',
                  list: 'list',
                  totalCount: 'totalCount',
                }`,
            },
            {
              params: 'replyLimit',
              desc: '回复数据的分页数',
              type: 'number',
              defaultVal: '10',
            },
            {
              params: 'replyKeyProp',
              desc: '回复数据唯一主键属性',
              type: 'string',
              defaultVal: 'id',
            },
            {
              params: 'renderReplyActions',
              desc: '渲染回复的工具',
              type: '(params?: any) => ReactNode[] | null',
              defaultVal: '',
            },
            {
              params: 'renderReplyAuthor',
              desc: '渲染回复的作者',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderReplyAvatar',
              desc: '渲染回复的头像renderReplyAvatar',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderReplyContent',
              desc: '渲染回复内容',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderReplyDateTime',
              desc: '渲染回复的时间',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'renderReplyLoading',
              desc: '渲染回复loading',
              type: '(params?: any) => ReactNode | null',
              defaultVal: '',
            },
            {
              params: 'fetchReply',
              desc: '进行回复',
              type: '(params?: any) => Promise<any>',
              defaultVal: '',
            },
            {
              params: 'listProps',
              desc: 'ScrollList的props',
              type: 'any',
              defaultVal: '{}',
            },
            {
              params: 'isMoreProp',
              desc: '是否有更多的属性',
              type: 'string',
              defaultVal: 'isMore',
            },
            {
              params: 'flexLayoutProps',
              desc: 'flexLayout的props',
              type: 'FlexLayoutProps',
              defaultVal: '{}',
            },
            {
              params: 'renderEmpty',
              desc: '无数据的渲染',
              type: '() => ReactElement | null',
              defaultVal: '',
            },
            {
              params: 'renderFirstLoading',
              desc: '第一次的渲染',
              type: '() => ReactNode',
              defaultVal: '',
            },
            {
              params: 'showReplyText',
              desc: '回复的文本',
              type: 'string | Function',
              defaultVal: '',
            },
            {
              params: 'hideReplyText',
              desc: '隐藏回复的文本',
              type: 'string | Function',
              defaultVal: '',
            },
            {
              params: 'loadMoreReplyText',
              desc: '加载更多数据的文本',
              type: 'string | Function',
              defaultVal: '',
            },
            {
              params: 'showReplyTextIcon',
              desc: '滚动',
              type: '回复文本的图标',
              defaultVal: 'ReactNode | Function',
            },
            {
              params: 'hideReplyTextIcon',
              desc: '隐藏回复的图标',
              type: 'ReactNode | Function',
              defaultVal: '',
            },
            {
              params: 'loadMoreCollapseTextIcon',
              desc: '加载更多数据的图标',
              type: 'ReactNode | Function',
              defaultVal: '',
            },
            {
              params: 'local',
              desc: '国际化',
              type: 'Local',
              defaultVal: 'zh',
            },
            {
              params: 'emojiPickerProps',
              desc: '表情组件的Props',
              type: 'any',
              defaultVal: '{}',
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
    getScrollWrapContainer() {
      return this.$refs.ref;
    },
    fetchCommentData({ page, limit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            current: page,
            totalPage: CommentData.length / limit + (CommentData.length % limit !== 0 ? 1 : 0),
            list: CommentData.slice((page - 1) * limit, page * limit),
            totalCount: CommentData.length,
          });
        }, 1500);
      });
    },
    fetchReplyData(params) {
      const { page, limit, record } = params;

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            current: page,
            totalPage: ReplyData.length / limit + (ReplyData.length % limit !== 0 ? 1 : 0),
            list: ReplyData.slice((page - 1) * limit, page * limit),
            totalCount: ReplyData.length,
          });
        }, 1500);
      });
    },
    fetchReply(params) {
      const { id, record, reply } = params;
      const indicator = GlobalIndicator.show(document.body, '');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          GlobalIndicator.hide(indicator);
        }, 1000);
      });
    },
    onDisLike(props) {
      const { record, callback } = props;

      setTimeout(() => {
        record.dislike = faker.random.number();
        callback({ ...record });
      }, 1000);
    },
    onLike(props) {
      const { record, callback } = props;

      setTimeout(() => {
        record.like = faker.random.number();
        callback({ ...record });
      }, 1000);
    },
  },
};
</script>

<style lang="less" module>
.ScrollWrap {
  position: relative;
  width: 100%;
  height: 800px;
  overflow-y: hidden;

  > .Scroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
