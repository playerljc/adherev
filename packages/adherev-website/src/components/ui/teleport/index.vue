<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Teleport">
      <p>滑动门</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <fragment>
          <adv-teleport to="#teleport" :is-wrap="false">
            <div>挂载到id="teleport"的元素上</div>
          </adv-teleport>

          <div id="teleport"></div>
        </fragment>
      </template>

      <template #p2>
        <fragment>
          <adv-teleport
            to="#teleportWrapTag"
            :is-wrap="true"
            :wrap-tag="'p'"
            :wrap-class-name="$style.customWrapClass"
          >
            <div class="myWrap">自定义的包裹元素</div>
          </adv-teleport>

          <div id="teleportWrapTag"></div>
        </fragment>
      </template>

      <template #p3>
        <fragment>
          <adv-teleport
            :to="p3To"
            :is-wrap="true"
            :wrap-tag="'p'"
            :wrap-class-name="$style.customWrapClass"
          >
            <div class="myWrap">使用函数返回目标元素</div>
          </adv-teleport>

          <div id="customTarget"></div>
        </fragment>
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
          name: '不包裹元素',
          cardProps: {
            description: {
              title: '不包裹元素',
              info: '不包裹元素',
            },
          },
          type: 'PlayGround',
          codeText: `
  <template>
    <fragment>
      <adv-teleport to="#teleport" :is-wrap="false">
        <div>挂载到id="teleport"的元素上</div>
      </adv-teleport>

      <div id="teleport"></div>
    </fragment>
  </template>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '自定义包裹元素',
          cardProps: {
            description: {
              title: '自定义包裹元素',
              info: '自定义包裹元素',
            },
          },
          type: 'PlayGround',
          codeText: `
  <template>
    <fragment>
      <adv-teleport
        to="#teleportWrapTag"
        :is-wrap="true"
        :wrap-tag="'p'"
        :wrap-class-name="$style.customWrapClass"
      >
        <div class="myWrap">自定义的包裹元素</div>
      </adv-teleport>

      <div id="teleportWrapTag"></div>
    </fragment>
  </template>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '目标元素设置',
          cardProps: {
            description: {
              title: '目标元素设置',
              info: '目标元素设置',
            },
          },
          type: 'PlayGround',
          codeText: `
  <template>
    <fragment>
      <adv-teleport
        :to="p3To"
        :is-wrap="true"
        :wrap-tag="'p'"
        :wrap-class-name="$style.customWrapClass"
      >
        <div class="myWrap">使用函数返回目标元素</div>
      </adv-teleport>

      <div id="customTarget"></div>
    </fragment>
  </template>

  <script>
    export default {
      methods: {
        p3To() {
          return document.getElementById('customTarget');
        },
      },
    }
  <\/script>

      `,
          childrenSlot: 'p3',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'to',
              desc: '传送的元素',
              type: '[String | HtmlElement | () => HtmlElement]',
              defaultVal: 'document.body',
            },
            {
              params: 'isWrap',
              desc: '是否在包裹元素渲染',
              type: 'Boolean',
              defaultVal: 'true',
            },
            {
              params: 'wrapTag',
              desc: '包裹元素的标签名',
              type: 'String',
              defaultVal: 'div',
            },
            {
              params: 'wrapClassName',
              desc: '包裹元素的类名',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'wrapStyle',
              desc: '包裹元素的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'rate',
              desc: '渲染频率',
              type: 'Number',
              defaultVal: '100',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    p3To() {
      return document.getElementById('customTarget');
    },
  },
};
</script>

<style lang="less" module>
.customWrapClass {
  color: red;
}
</style>
