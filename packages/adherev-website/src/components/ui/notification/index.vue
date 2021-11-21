<template>
  <div class="Page">
    <h1>Notification</h1>
    <p>通知</p>
    <ul>
      <li>- 支持ios和material</li>
      <li>- 支持top和bottom方向</li>
    </ul>

    <function-props
      :border="true"
      :title="'NotificationFactory'"
      :data="[
        {
          name: 'build',
          desc: '构建一个Notification',
          modifier: 'static',
          params: [
            {
              name: 'container',
              desc: '父容器',
              type: 'HtmlElement',
              defaultVal: '',
              required: '',
            },
            {
              name: 'config',
              desc: '配置',
              type: 'IConfig',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'Notification',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'Notification'"
      :data="[
        {
          name: 'show',
          desc: '显示一个自定义的notification',
          modifier: 'public',
          params: [
            {
              name: 'config',
              desc: '配置',
              type: 'IShowConfig',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'string',
          returnDesc: 'notification的id',
        },
        {
          name: 'showStandard',
          desc: '显示一个标准的notification',
          modifier: 'public',
          params: [
            {
              name: 'config',
              desc: '配置',
              type: 'IShowStandardConfig',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'string',
          returnDesc: 'notification的id',
        },
        {
          name: 'close',
          desc: '关闭一个notification',
          modifier: 'public',
          params: [
            {
              name: 'id',
              desc: 'id',
              type: 'string',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <props
      :border="true"
      :title="'IConfig'"
      :data="[
        {
          params: 'style',
          desc: '风格',
          type: 'ios' | 'material',
          defaultVal: 'ios',
        },
        {
          params: 'type',
          desc: '类型',
          type: 'top' | 'bottom',
          defaultVal: 'top',
        },
        {
          params: 'onCreate',
          desc: '创建完成',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onShow',
          desc: '显示完成',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onCloseBefore',
          desc: '关闭之前',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onCloseAfter',
          desc: '关闭之后',
          type: 'Function',
          defaultVal: '',
        },
      ]"
    />

    <adv-space />

    <props
      :border="true"
      :title="'IShowConfig'"
      :data="[
        {
          params: 'closed',
          desc: '是否有关闭按钮',
          type: 'boolean',
          defaultVal: '',
        },
        {
          params: 'children',
          desc: '显示的UI',
          type: 'Object | Function | String',
          defaultVal: '',
        },
      ]"
    />

    <adv-space />

    <props
      :border="true"
      :title="'IShowStandardConfig'"
      :data="[
        {
          params: 'closed',
          desc: '是否有关闭按钮',
          type: 'boolean',
          defaultVal: '',
        },
        {
          params: 'headerLabel',
          desc: '头部UI',
          type: 'string | Object | Function',
          defaultVal: '',
        },
        {
          params: 'headerIcon',
          desc: '头部图标',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'title',
          desc: '标题',
          type: 'string | Object | Function',
          defaultVal: '',
        },
        {
          params: 'text',
          desc: '内容',
          type: 'string | Object | Function',
          defaultVal: '',
        },
        {
          params: 'icon',
          desc: '图标',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'datetime',
          desc: '时间',
          type: 'string | Object | Function',
          defaultVal: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <a-tabs tab-position="left" :active-key="activeKey" @change="onChange">
        <a-tab-pane v-for="t in config" :key="t.key" :tab="t.key">
          <div v-if="t.key === activeKey" :class="$style.Tab">
            <div :class="$style.Fixed">
              <a-button @click="onShowCustomClose">show custom close</a-button>
              <a-button @click="onShowCustomUnClose">show custom unclose</a-button>
              <a-button @click="onShowStandardClose">show Standard close</a-button>
              <a-button @click="onShowStandardUnClose">show Standard unclose</a-button>
            </div>
            <div :class="$style.Auto" :ref="t.ref" />
          </div>
        </a-tab-pane>
      </a-tabs>
    </playground>
  </div>
</template>

<script>
import { Notification } from '@baifendian/adherev';

export default {
  data() {
    return {
      config: [
        { key: 'ios-top', ref: 'ref1', ins: null },
        { key: 'ios-bottom', ref: 'ref2', ins: null },
        { key: 'material-top', ref: 'ref3', ins: null },
        { key: 'material-bottom', ref: 'ref4', ins: null },
      ],
      activeKey: 'ios-top',
    };
  },
  computed: {
    code1() {
      return `
        <template>
          <h2>基本使用</h2>
          <a-tabs tab-position="left" :active-key="activeKey" @change="onChange">
            <a-tab-pane v-for="t in config" :key="t.key" :tab="t.key">
              <div v-if="t.key === activeKey" :class="$style.Tab">
                <div :class="$style.Fixed">
                  <a-button @click="onShowCustomClose">show custom close</a-button>
                  <a-button @click="onShowCustomUnClose">show custom unclose</a-button>
                  <a-button @click="onShowStandardClose">show Standard close</a-button>
                  <a-button @click="onShowStandardUnClose">show Standard unclose</a-button>
                </div>
                <div :class="$style.Auto" :ref="t.ref" />
              </div>
            </a-tab-pane>
          </a-tabs>
        </template>

        <script>
          import { Notification } from '@baifendian/adherev';

          export default {
            data() {
              return {
                config: [
                  { key: 'ios-top', ref: 'ref1', ins: null },
                  { key: 'ios-bottom', ref: 'ref2', ins: null },
                  { key: 'material-top', ref: 'ref3', ins: null },
                  { key: 'material-bottom', ref: 'ref4', ins: null },
                ],
                activeKey: 'ios-top',
              };
            },
            mounted() {
              const record = this.getRecord(this.activeKey);
              const [style, type] = this.activeKey.split('-');
              record.ins = Notification.build(this.$refs[record.ref][0], {
                style,
                type,
              });
            },
            methods: {
              onChange(key) {
                this.activeKey = key;

                this.$nextTick(function () {
                  const record = this.getRecord(this.activeKey);
                  const [style, type] = this.activeKey.split('-');
                  record.ins = Notification.build(this.$refs[record.ref][0], {
                    style,
                    type,
                  });
                });
              },
              getRecord(curKey) {
                return this.config.find(({ key }) => key === curKey);
              },
              onShowCustomClose() {
                const record = this.getRecord(this.activeKey);
                record.ins.show({
                  closed: true,
                  children: (h) => <div>自定义的UI</div>,
                });
              },
              onShowCustomUnClose() {
                const record = this.getRecord(this.activeKey);
                record.ins.show({
                  closed: false,
                  children: (h) => <div>自定义的UI</div>,
                });
              },
              onShowStandardClose() {
                const record = this.getRecord(this.activeKey);
                record.ins.showStandard({
                  headerLabel: 'NotificationTitle',
                  headerIcon:
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  title: 'Notification',
                  text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
                  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  closed: true,
                  datetime: '2019-02-12',
                });
              },
              onShowStandardUnClose() {
                const record = this.getRecord(this.activeKey);
                record.ins.showStandard({
                  headerLabel: 'NotificationTitle',
                  headerIcon:
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  title: 'Notification',
                  text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
                  icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                  closed: false,
                  datetime: '2019-02-12',
                });
              },
            }
          }
        <\/script>
      `;
    },
  },
  mounted() {
    const record = this.getRecord(this.activeKey);
    const [style, type] = this.activeKey.split('-');
    record.ins = Notification.build(this.$refs[record.ref][0], {
      style,
      type,
    });
  },
  methods: {
    onChange(key) {
      this.activeKey = key;

      this.$nextTick(function () {
        const record = this.getRecord(this.activeKey);
        const [style, type] = this.activeKey.split('-');
        record.ins = Notification.build(this.$refs[record.ref][0], {
          style,
          type,
        });
      });
    },
    getRecord(curKey) {
      return this.config.find(({ key }) => key === curKey);
    },
    onShowCustomClose() {
      const record = this.getRecord(this.activeKey);
      record.ins.show({
        closed: true,
        children: (h) => <div>自定义的UI</div>,
      });
    },
    onShowCustomUnClose() {
      const record = this.getRecord(this.activeKey);
      record.ins.show({
        closed: false,
        children: (h) => <div>自定义的UI</div>,
      });
    },
    onShowStandardClose() {
      const record = this.getRecord(this.activeKey);
      record.ins.showStandard({
        headerLabel: 'NotificationTitle',
        headerIcon:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        title: 'Notification',
        text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        closed: true,
        datetime: '2019-02-12',
      });
    },
    onShowStandardUnClose() {
      const record = this.getRecord(this.activeKey);
      record.ins.showStandard({
        headerLabel: 'NotificationTitle',
        headerIcon:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        title: 'Notification',
        text: 'CtMobile A mobile-side framework that supports multiple forms of page switching, page transitions, page values, notifications, etc., suitable for developing single-page applications (SPA), hybrid development (mixed), and Córdoba development',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        closed: false,
        datetime: '2019-02-12',
      });
    },
  },
};
</script>

<style lang="less" module src="./index.less" />
