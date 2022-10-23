<template>
  <div class="ScrollWrap" ref="ref">
    <div class="Scroll">
      <adv-comment
        :getScrollWrapContainer="getScrollWrapContainer"
        :fetchCommentData="fetchCommentData"
        :fetchReplyData="fetchReplyData"
        :fetchReply="fetchReply"
      >
        <template v-slot:renderCommentAuthor="record">
          {{ record.name }}
        </template>
        <template v-slot:renderCommentActions="props">
          <a-tooltip :title="'Like'">
            <span @click="onLike(props)">
              <a-icon type="like" />
              <span style="margin-left: 5px">{{ props.record.like }}</span>
            </span>
          </a-tooltip>

          <a-tooltip :title="'Dislike'">
            <span @click="onDisLike(props)">
              <a-icon type="dislike" />
              <span style="margin-left: 5px">{{ props.record.dislike }}</span>
            </span>
          </a-tooltip>
        </template>
        <template v-slot:renderCommentAvatar="record">
          <img :src="record.icon" alt="" />
        </template>
        <template v-slot:renderCommentContent="record">
          {{ record.info }}
        </template>
        <template v-slot:renderCommentDateTime="record">
          <adv-datedisplay-fromnow :value="record.time" />
        </template>
        <template v-slot:renderReplyActions="props">
          <a-tooltip :title="'Like'">
            <span @click="onLike(props)">
              <a-icon type="like" />
              <span style="margin-left: 5px">{{ props.record.like }}</span>
            </span>
          </a-tooltip>

          <a-tooltip :title="'Dislike'">
            <span @click="onDisLike(props)">
              <a-icon type="dislike" />
              <span style="margin-left: 5px">{{ props.record.dislike }}</span>
            </span>
          </a-tooltip>
        </template>
        <template v-slot:renderReplyAuthor="record">
          {{ record.name }}
        </template>
        <template v-slot:renderReplyAvatar="record">
          <img :src="record.icon" alt="" />
        </template>
        <template v-slot:renderReplyContent="record">
          {{ record.info }}
        </template>
        <template v-slot:renderReplyDateTime="record">
          <adv-datedisplay-fromnow :value="record.time" />
        </template>
      </adv-comment>
    </div>
  </div>
</template>

<script>
import faker from 'faker';

import GlobalIndicator from '@baifendian/adherev-ui-globalindicator';

const CommentData = Array.from({ length: 300 }).map((t, index) => ({
  id: index + 1, //faker.datatype.uuid(),
  name: faker.internet.userName(),
  time: faker.date.past(),
  icon: 'https://joeschmoe.io/api/v1/random',
  info: faker.hacker.phrase(),
  isMore: index % 2 === 0,
  like: faker.random.number(),
  dislike: faker.random.number(),
}));

const ReplyData = Array.from({ length: 300 }).map((t, index) => ({
  id: index + 1, //faker.datatype.uuid(),
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
    return {};
  },
  methods: {
    getScrollWrapContainer() {
      return this.$refs.ref;
    },
    fetchCommentData({ page, limit }) {
      // console.log(
      //   'fetchCommentData',
      //   page,
      //   limit,
      //   CommentData.slice((page - 1) * limit, page * limit),
      // );

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

      console.log('fetchReplyData', 'page', page);

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

<style lang="less" scoped>
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
