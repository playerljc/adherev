<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Popup">
      <ul>
        <li>- 支持使用 show 方式打开</li>
        <li>- 不与变量进行绑定，开箱即用的功能</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button type="primary" @click="onOpen">Open Popup</a-button>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import { Popup } from '@baifendian/adherev';
import PopupInner from './popup';

export default {
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '打开',
          cardProps: {
            description: {
              title: '打开',
              info: '打开',
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
    <h2>打开</h2>
    <a-button type="primary" @click="onOpen">Open Popup</a-button>
  </template>
  <script>
    export default {
      methods: {
        openPopup() {
          const self = this;

          const popup = Popup.create({
            onCreate: () => {
              console.log('onCreate');
            },
            onBeforeShow: () => {
              console.log('onBeforeShow');
            },
            onAfterShow: () => {
              console.log('onAfterShow');
            },
            onBeforeClose: () => {
              return new Promise((resolve) => {
                resolve();
              });
            },
            onAfterClose: () => {
              Popup.destroy(popup);
            },
            onDestroy: () => {
              console.log('onDestroy');
            },
            children: {
              template: \`<PopupInner ref="ref" @open-popup="onOpenPopup" @close-popup="onClosePopup"/>\`,
              components: {
                PopupInner,
              },
              methods: {
                onOpenPopup() {
                  self.openPopup();
                },
                onClosePopup() {
                  Popup.close(popup);
                },
              },
            },
            zIndex: 9999,
          });

          popup.show();
        },
        onOpen() {
          this.openPopup();
        },
      }
    }
  <\/script>
					`,
            },
            {
              title: 'popup.vue',
              key: 'popup.vue',
              codeText: `
  <template>
    <div :class="$style.Wrap">
      <div :class="$style.Fixed">
        <a @click="onOpen"> OpenNewPopup </a>
        <div>Popup{id} Title</div>
        <a @click="onClose"> Close </a>
      </div>

      <div :class="$style.Auto">
        <div class="block">
          <p>
            Here comes popup. You can put here anything, even independent view with its own
            navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad,
            on iPhone it is fullscreen.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo,
            eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna.
            Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis
            dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim
            quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean
            semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae
            ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.
          </p>
          <p>
            Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut
            lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam.
            Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
            eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
            Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
            pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
            convallis blandit dui sit amet, gravida adipiscing libero.
          </p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    methods: {
      onOpen() {
        this.$emit('open-popup');
      },
      onClose() {
        this.$emit('close-popup');
      }
    }
  };
  <\/script>
  <style lang="less" module src="./index.less"/>
					`,
            },
            {
              title: 'index.less',
              key: 'index.less',
              lang: 'less',
              codeText: `
  .Wrap {
    display: flex;
    flex-direction: column;

    > .Fixed {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-between;
      height: 3rem;
    }

    > .Auto {
      flex-grow: 1;
      box-sizing: border-box;
      min-height: 0;
      padding: 1rem;
      overflow-y: auto;
      font-size: 14px;
      line-height: 21px;
    }
  }
          `,
            },
          ],
          childrenSlot: 'p1',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: 'PopupFactory',
          data: [
            {
              name: 'PopupFactory.create',
              desc: '创建Popup',
              modifier: 'static',
              params: [
                {
                  name: 'config',
                  desc: '配置',
                  type: 'IConfig',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'PopupFactory.show',
              desc: '打开Popup',
              modifier: 'static',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的popup对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'PopupFactory.close',
              desc: '关闭一个Popup',
              modifier: 'static',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'PopupFactory.closeAll',
              desc: '关闭所有的popup',
              modifier: 'static',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'PopupFactory.destroy',
              desc: '销毁Popup',
              modifier: 'static',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'Popup.show',
              desc: '打开Popup',
              modifier: 'public',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的popup对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'Popup.close',
              desc: '关闭一个Popup',
              modifier: 'public',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'Popup.closeAll',
              desc: '关闭所有的popup',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'Popup.destroy',
              desc: '销毁Popup',
              modifier: 'public',
              params: [
                {
                  name: 'popup',
                  desc: '使用create创建的对象',
                  type: 'Popup',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'Popup.isDestroy方法',
              desc: '是否销毁Popup',
              modifier: 'public',
              params: [],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'Popup.isDestroy方法',
              desc: '获取popup的id',
              modifier: 'public',
              params: [],
              returnType: 'string',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'IConfig',
          data: [
            {
              params: 'onCreate',
              desc: '挂载的hook',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onBeforeShow',
              desc: '显示之前',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onAfterShow',
              desc: '显示之后',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onBeforeClose',
              desc: '关闭之前',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onAfterClose',
              desc: '关闭之后',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onDestroy',
              desc: '销毁',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'children',
              desc: '显示的内容',
              type: 'String | Object | Function',
              defaultVal: '',
            },
            {
              params: 'zIndex',
              desc: '显示的层级',
              type: 'number',
              defaultVal: '11000',
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
    openPopup() {
      const self = this;

      const popup = Popup.create({
        onCreate: () => {
          console.log('onCreate');
        },
        onBeforeShow: () => {
          console.log('onBeforeShow');
        },
        onAfterShow: () => {
          console.log('onAfterShow');
        },
        onBeforeClose: () => {
          return new Promise((resolve) => {
            resolve();
          });
        },
        onAfterClose: () => {
          Popup.destroy(popup);
        },
        onDestroy: () => {
          console.log('onDestroy');
        },
        children: {
          template: `<PopupInner ref="ref" @open-popup="onOpenPopup" @close-popup="onClosePopup"/>`,
          components: {
            PopupInner,
          },
          methods: {
            onOpenPopup() {
              self.openPopup();
            },
            onClosePopup() {
              Popup.close(popup);
            },
          },
        },
        zIndex: 9999,
      });

      popup.show();
    },
    onOpen() {
      this.openPopup();
    },
  },
};
</script>
