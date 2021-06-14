<template>
  <div class="Page">
    <h1>Revolving</h1>
    <p>走马灯</p>
    <p>此组件是基于Swiper编写的</p>

    <h3>Revolving</h3>
    <props
      :data="[
        {
          params: 'className',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'classNameWrapper',
          desc: 'wrapper附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'styleWrapper',
          desc: 'wrapper附加的样式',
          type: 'String',
          defaultVal: '',
        },
        {
          params: 'speed',
          desc: '速度',
          type: 'number',
          defaultVal: '1000',
        },
        {
          params: 'delay',
          desc: '过度的时间',
          type: 'number',
          defaultVal: '1000',
        },
        {
          params: 'direction',
          desc: '方向 top | right | bottom | left',
          type: 'string',
          defaultVal: 'top',
        },
        {
          params: 'loop',
          desc: '是否循环播放',
          type: 'boolean',
          defaultVal: 'true',
        },
        {
          params: 'stopOnLastSlide',
          desc: '启用此参数并在到达最后一张幻灯片时停止自动播放',
          type: 'boolean',
          defaultVal: 'false',
        },
        {
          params: 'listeners',
          desc: '事件注册句柄，具体型参考Swiper的事件',
          type: 'Object',
          defaultVal: '{}',
        },
      ]"
    />

    <h3>方法</h3>
    <function-props
      :data="[
        {
          name: 'start',
          desc: '开始播放',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'stop',
          desc: '停止播放',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'isRunning',
          desc: '是否处于播放状态',
          modifier: 'public',
          params: [],
          returnType: 'boolean',
          returnDesc: '播放返回true,为播放返回false',
        },
      ]"
    />

    <h3>Revolving.Item</h3>
    <props
      :data="[
        {
          params: 'className',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        }
      ]"
    />

    <h2>direction - left</h2>
    <playground :codeText="code1">
      <adv-revolving direction="left">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>

    <h2>direction - right</h2>
    <playground :codeText="code2">
      <adv-revolving direction="right">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>

    <h2>direction - top</h2>
    <playground :codeText="code3">
      <adv-revolving direction="top" style="height: 50px">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>

    <h2>direction - bottom</h2>
    <playground :codeText="code4">
      <adv-revolving direction="bottom" style="height: 50px">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>

    <h2>speed - 过度时间</h2>
    <playground :codeText="code5">
      <adv-revolving direction="bottom" :speed="1000 * 3" style="height: 50px">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>

    <h2>delay - 转换时间</h2>
    <playground :codeText="code6">
      <adv-revolving direction="bottom" :delay="1000 * 3" style="height: 50px">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>

    <h2>api控制</h2>
    <playground :codeText="code7">
      <div style="display: flex; align-items: center">
        <adv-space-group direction="horizontal">
          <a-button type="primary" @click="onCodeApiStart">start</a-button>
          <a-button @click="onCodeApiEnd">stop</a-button>
        </adv-space-group>
      </div>

      <adv-space />

      <adv-revolving direction="bottom" :delay="1000 * 3" style="height: 50px" ref="ref">
        <adv-revolving-item>Slide 1</adv-revolving-item>
        <adv-revolving-item>Slide 2</adv-revolving-item>
        <adv-revolving-item>Slide 3</adv-revolving-item>
        <adv-revolving-item>Slide 4</adv-revolving-item>
        <adv-revolving-item>Slide 5</adv-revolving-item>
        <adv-revolving-item>Slide 6</adv-revolving-item>
        <adv-revolving-item>Slide 7</adv-revolving-item>
        <adv-revolving-item>Slide 8</adv-revolving-item>
        <adv-revolving-item>Slide 9</adv-revolving-item>
        <adv-revolving-item>Slide 10</adv-revolving-item>
      </adv-revolving>
    </playground>
  </div>
</template>
<script>
export default {
  computed: {
    code1: () => `
      <template>
        <h2>direction - left</h2>
        <adv-revolving direction="left">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
    `,
    code2: () => `
      <template>
        <h2>direction - right</h2>
        <adv-revolving direction="right">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
    `,
    code3: () => `
      <template>
        <h2>direction - top</h2>
        <adv-revolving direction="top" style="height: 50px">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
    `,
    code4: () => `
      <template>
        <h2>direction - bottom</h2>
        <adv-revolving direction="bottom" style="height: 50px">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
    `,
    code5: () => `
      <template>
        <h2>speed - 过度时间</h2>
        <adv-revolving direction="bottom" :speed="1000 * 3" style="height: 50px">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
    `,
    code6: () => `
      <template>
        <h2>delay - 转换时间</h2>
        <adv-revolving direction="bottom" :delay="1000 * 3" style="height: 50px">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
    `,
    code7: () => `
      <template>
        <h2>api控制</h2>
        <div style="display: flex; align-items: center">
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="onCodeApiStart">start</a-button>
            <a-button @click="onCodeApiEnd">stop</a-button>
          </adv-space-group>
        </div>

        <adv-space />

        <adv-revolving direction="bottom" :delay="1000 * 3" style="height: 50px" ref="ref">
          <adv-revolving-item>Slide 1</adv-revolving-item>
          <adv-revolving-item>Slide 2</adv-revolving-item>
          <adv-revolving-item>Slide 3</adv-revolving-item>
          <adv-revolving-item>Slide 4</adv-revolving-item>
          <adv-revolving-item>Slide 5</adv-revolving-item>
          <adv-revolving-item>Slide 6</adv-revolving-item>
          <adv-revolving-item>Slide 7</adv-revolving-item>
          <adv-revolving-item>Slide 8</adv-revolving-item>
          <adv-revolving-item>Slide 9</adv-revolving-item>
          <adv-revolving-item>Slide 10</adv-revolving-item>
        </adv-revolving>
      </template>
      <script>
        export default {
          methods: {
            onCodeApiStart() {
              this.$refs.ref.start();
            },
            onCodeApiEnd() {
              this.$refs.ref.stop();
            },
          },
        }
      <\/script>
    `,
  },
  methods: {
    onCodeApiStart() {
      this.$refs.ref.start();
    },
    onCodeApiEnd() {
      this.$refs.ref.stop();
    },
  },
};
</script>
