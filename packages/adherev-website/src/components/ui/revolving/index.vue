<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Revolving">
      <p>走马灯</p>
      <p>此组件是基于Swiper编写的</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
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

      <template #p2>
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

      <template #p3>
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

      <template #p4>
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

      <template #p5>
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

      <template #p6>
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

      <template #p7>
        <div style="display: flex; align-items: center">
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="onCodeApiStart">start</a-button>
            <a-button @click="onCodeApiEnd">stop</a-button>
          </adv-space-group>
        </div>

        <adv-space />

        <adv-revolving ref="ref" direction="bottom" :delay="1000 * 3" style="height: 50px">
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
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  displayName: 'revolving',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'direction - left',
          cardProps: {
            description: {
              title: 'direction - left',
              info: 'direction - left',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'direction - right',
          cardProps: {
            description: {
              title: 'direction - right',
              info: 'direction - right',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'direction - top',
          cardProps: {
            description: {
              title: 'direction - top',
              info: 'direction - top',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'direction - bottom',
          cardProps: {
            description: {
              title: 'direction - bottom',
              info: 'direction - bottom',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: 'speed - 过度时间',
          cardProps: {
            description: {
              title: 'speed - 过度时间',
              info: 'speed - 过度时间',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: 'delay - 转换时间',
          cardProps: {
            description: {
              title: 'delay - 转换时间',
              info: 'delay - 转换时间',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p6',
        },
        {
          id: 'p7',
          name: 'api控制',
          cardProps: {
            description: {
              title: 'api控制',
              info: 'api控制',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p7',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
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
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'Revolving',
          data: [
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
          ],
        },
        {
          border: true,
          title: 'Revolving.Item',
          data: [
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
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
    onCodeApiStart() {
      this.$refs.ref.start();
    },
    onCodeApiEnd() {
      this.$refs.ref.stop();
    },
  },
};
</script>
