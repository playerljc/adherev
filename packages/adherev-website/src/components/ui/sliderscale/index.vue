<template>
  <adv-playground-page :scrollEl="scrollEl" class="Surnames" ref="ref">
    <adv-playground-page-section title="SliderScale">
      <p>刻度盘</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <fragment>
          <adv-sliderscale :min="0" :max="10" :step="1" :interval="5" />
          <adv-space />
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="5" />
        </fragment>
      </template>

      <template #p2>
        <fragment>
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="10" />
          <adv-space />
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="20" />
        </fragment>
      </template>

      <template #p3>
        <fragment>
          <a-slider :min="0" :max="60" :value="value" @change="onSliderChange" />

          <adv-space />

          <adv-sliderscale
            :min="0"
            :max="60"
            :step="1"
            :interval="20"
            :value="value"
            @change="onSliderScaleChange"
          />
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
      value: 0,
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
          <adv-sliderscale :min="0" :max="10" :step="1" :interval="5" />
          <adv-space />
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="5" />
        </template>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '不同的刻度',
          cardProps: {
            description: {
              title: '不同的刻度',
              info: '不同的刻度',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>不同的刻度</h2>
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="10" />
          <adv-space />
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="20" />
        </template>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '动态设置',
          cardProps: {
            description: {
              title: '动态设置',
              info: '动态设置',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>动态设置</h2>
          <a-slider :min="0" :max="60" :value="value" @change="onSliderChange" />

          <adv-space />

          <adv-sliderscale
            :min="0"
            :max="60"
            :step="1"
            :interval="20"
            :value="value"
            @change="onSliderScaleChange"
          />
        </template>
        <script>
          export default {
            data() {
              return {
                value: 0,
              }
            },
            methods: {
              onSliderChange(value) {
                this.value = parseInt(value);
              },
              onSliderScaleChange(value) {
                this.value = parseInt(value);
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p3',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'SliderScale',
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
              params: 'min',
              desc: '最小值',
              type: 'number',
              defaultVal: '0',
            },
            {
              params: 'max',
              desc: '最大值',
              type: 'number',
              defaultVal: '100',
            },
            {
              params: 'step',
              desc: '步进',
              type: 'number',
              defaultVal: '1',
            },
            {
              params: 'value',
              desc: '当前值',
              type: 'number',
              defaultVal: '0',
            },
            {
              params: 'interval',
              desc: '刻度的间隔',
              type: 'number',
              defaultVal: '5',
            },
            {
              params: 'onChange',
              desc: '改变的钩子',
              type: 'Function',
              defaultVal: '',
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
    onSliderChange(value) {
      this.value = parseInt(value);
    },
    onSliderScaleChange(value) {
      this.value = parseInt(value);
    },
  },
};
</script>

<style lang="less" module src="./index.less" />
