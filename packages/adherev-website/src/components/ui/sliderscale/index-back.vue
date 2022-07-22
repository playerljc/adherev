<template>
  <div class="Page">
    <h1>SliderScale</h1>
    <p>刻度盘</p>

    <props
      :border="true"
      :title="'SliderScale'"
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
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <adv-sliderscale :min="0" :max="10" :step="1" :interval="5" />
      <adv-space />
      <adv-sliderscale :min="0" :max="60" :step="1" :interval="5" />
    </playground>

    <h2>不同的刻度</h2>
    <playground :codeText="code2">
      <adv-sliderscale :min="0" :max="60" :step="1" :interval="10" />
      <adv-space />
      <adv-sliderscale :min="0" :max="60" :step="1" :interval="20" />
    </playground>

    <h2>动态设置</h2>
    <playground :codeText="code3">
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
    </playground>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    code1() {
      return `
        <template>
          <adv-sliderscale :min="0" :max="10" :step="1" :interval="5" />
          <adv-space />
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="5" />
        </template>
      `;
    },
    code2() {
      return `
        <template>
          <h2>不同的刻度</h2>
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="10" />
          <adv-space />
          <adv-sliderscale :min="0" :max="60" :step="1" :interval="20" />
        </template>
      `;
    },
    code3() {
      return `
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
      `;
    },
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
