<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="WritingBoard">
      <p>写字板</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="position: relative; height: 300px; overflow-y: hidden; border: 1px solid #ccc">
          <div style="height: 100%" ref="ref1">
            <adv-writingboard />
          </div>
        </div>
      </template>

      <template #p2>
        <Simple />
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import Simple from './simple';

export default {
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          codeText: `
        <template>
          <div style="position: relative; height: 300px; overflow-y: hidden; border: 1px solid #ccc">
            <div style="height: 100%" ref="ref1">
              <adv-writingboard />
            </div>
          </div>
        </template>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '简易写字板',
          type: 'PlayGroundMulit',
          cardProps: {
            description: {
              title: '简易写字板',
              info: '切换类型、颜色和粗细',
            },
          },
          defaultExpand: true,
          defaultConfig: [
            {
              type: 'CodePanel',
              title: 'index.vue',
              codeText: `
        <template>
          <Simple />
        </template>

        <script>
          import Simple from './simple';

          export default {
             components: {
                Simple,
             },
          }
        <\/script>
          `,
            },
            {
              type: 'CodePanel',
              title: 'simple.vue',
              codeText: `
        <template>
          <adv-flexlayout direction="horizontal" style="width: 100%; height: 100%">
            <adv-flexlayout-fixed style="width: 300px">
              <a-space direction="vertical">
                <a-card :title="'绘制模式'">
                  <a-radio-group
                    :default-value="'line'"
                    :value="mode"
                    :button-style="'solid'"
                    @change="onModeChange"
                  >
                    <a-radio-button :value="'line'">直线</a-radio-button>
                    <a-radio-button :value="'rectangle'">矩形</a-radio-button>
                    <a-radio-button :value="'circle'">圆形</a-radio-button>
                    <a-radio-button :value="'triangle'">三角形</a-radio-button>
                    <a-radio-button :value="'free'">自由绘制</a-radio-button>
                    <a-radio-button :value="'rubber'">橡皮</a-radio-button>
                  </a-radio-group>
                </a-card>

                <a-card :title="'线条颜色'">
                  <sketch-picker v-model="color" />
                </a-card>

                <a-card :title="'线条宽度'">
                  <a-select :value="width" @change="onLineWidthChange">
                    <a-select-option :value="2">2</a-select-option>
                    <a-select-option :value="3">3</a-select-option>
                    <a-select-option :value="4">4</a-select-option>
                    <a-select-option :value="5">5</a-select-option>
                    <a-select-option :value="6">6</a-select-option>
                  </a-select>
                </a-card>

                <a-card :title="'操作'">
                  <a-space :direction="'horizontal'">
                    <a-button type="primary" @click="onClear">清空</a-button>
                    <a-button type="primary" @click="onSave">保存图片</a-button>
                  </a-space>
                </a-card>
              </a-space>
            </adv-flexlayout-fixed>

            <adv-flexlayout-auto>
              <adv-writingboard ref="ref" />
            </adv-flexlayout-auto>
          </adv-flexlayout>
        </template>

        <script>
          import Color from 'vue-color';

          export default {
            data() {
              return {
                mode: 'line',
                color: '#000',
                width: 2,
              };
            },
            components: {
              'sketch-picker': Color.Sketch,
            },
            watch: {
              color(newValue) {
                this.$refs.ref.setStrokeStyle(newValue.hex);
              },
            },
            methods: {
              onModeChange(e) {
                this.mode = e.target.value;
                this.$refs.ref.setMode(e.target.value);
              },
              onLineWidthChange(v) {
                this.width = v;
                this.$refs.ref.setLineWidth(v);
              },
              onClear() {
                this.$refs.ref.clear();
              },
              onSave() {
                const base64 = this.$refs.ref.toDataURL();

                const save_link = document.createElement('a');
                save_link.href = base64;
                save_link.download = 'img';

                const event = document.createEvent('MouseEvents');
                event.initMouseEvent(
                  'click',
                  true,
                  false,
                  window,
                  0,
                  0,
                  0,
                  0,
                  0,
                  false,
                  false,
                  false,
                  false,
                  0,
                  null,
                );
                save_link.dispatchEvent(event);
              },
            },
          };
        <\/script>

        <style lang="less">
        .Wrap {
          width: 100%;
          height: 100%;
        }
        </style>
`,
            },
          ],
          childrenSlot: 'p2',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'defaultMode',
              desc: '绘制模式',
              type: `
                  {
                    // 直线
                    LINE = 'line',
                    // 矩形
                    RECTANGLE = 'rectangle',
                    // 圆形
                    CIRCLE = 'circle',
                    // 三角形
                    TRIANGLE = 'triangle',
                    // 自由绘制
                    FREE = 'free',
                    // 橡皮
                    RUBBER = 'rubber',
                  }
                `,
              defaultVal: 'line',
            },
            {
              params: 'defaultStrokeStyle',
              desc: '线条颜色',
              type: 'string',
              defaultVal: '#000',
            },
            {
              params: 'defaultLineWidth',
              desc: '线条宽度',
              type: 'number',
              defaultVal: '1',
            },
            {
              params: 'resizeTime',
              desc: '防抖的事件',
              type: 'number',
              defaultVal: '300',
            },
          ],
        },
      ],
    };
  },
  components: {
    Simple,
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
