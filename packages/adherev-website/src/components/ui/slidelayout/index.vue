<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="SlideLayout">
      <p>抽屉布局</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <fragment>
          <adv-flexlayout direction="horizontal">
            <adv-flexlayout-auto>
              <div>
                <h3>left</h3>
                <div>
                  <a-button type="primary" @click="collapse1 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse1 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="horizontalCSS">
                  <adv-slidelayout-overlay
                    :default-collapse="collapse1"
                    @after-close="collapse1 = false"
                  >
                    left
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>

            <adv-flexlayout-auto>
              <div>
                <h3>right</h3>
                <div>
                  <a-button type="primary" @click="collapse2 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse2 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="horizontalCSS">
                  <adv-slidelayout-overlay
                    direction="right"
                    :default-collapse="collapse2"
                    @after-close="collapse2 = false"
                  >
                    right
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>
          </adv-flexlayout>

          <adv-flexlayout direction="horizontal">
            <adv-flexlayout-auto>
              <div>
                <h3>top</h3>
                <div>
                  <a-button type="primary" @click="collapse3 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse3 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="verticalCSS">
                  <adv-slidelayout-overlay
                    direction="top"
                    :default-collapse="collapse3"
                    @after-close="collapse3 = false"
                  >
                    top
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>

            <adv-flexlayout-auto>
              <div>
                <h3>bottom</h3>
                <div>
                  <a-button type="primary" @click="collapse4 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse4 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="verticalCSS">
                  <adv-slidelayout-overlay
                    direction="bottom"
                    :default-collapse="collapse4"
                    @after-close="collapse4 = false"
                  >
                    bottom
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>
          </adv-flexlayout>
        </fragment>
      </template>

      <template #p2>
        <adv-flexlayout direction="horizontal">
          <adv-flexlayout-auto>
            <div>
              <h3>left</h3>
              <div>
                <a-button type="primary" @click="collapse5 = true">打开</a-button>
                <adv-space :size="10" direction="horizontal" />
                <a-button @click="collapse5 = false">关闭</a-button>
              </div>
              <adv-space direction="vertical" />
              <div :style="horizontalCSS">
                <adv-slidelayout-push
                  :default-collapse="collapse5"
                  @after-close="collapse5 = false"
                >
                  <template #slide>
                    <div>left</div>
                  </template>
                  <template #master>
                    <div>master</div>
                  </template>
                </adv-slidelayout-push>
              </div>
            </div>
          </adv-flexlayout-auto>

          <adv-flexlayout-auto>
            <div>
              <h3>right</h3>
              <div>
                <a-button type="primary" @click="collapse6 = true">打开</a-button>
                <adv-space :size="10" direction="horizontal" />
                <a-button @click="collapse6 = false">关闭</a-button>
              </div>
              <adv-space direction="vertical" />
              <div :style="horizontalCSS">
                <adv-slidelayout-push
                  direction="right"
                  :default-collapse="collapse6"
                  @after-close="collapse6 = false"
                >
                  <template #slide>
                    <div>right</div>
                  </template>
                  <template #master>
                    <div>Master</div>
                  </template>
                </adv-slidelayout-push>
              </div>
            </div>
          </adv-flexlayout-auto>
        </adv-flexlayout>
      </template>

      <template #p3>
        <adv-flexlayout direction="horizontal">
          <adv-flexlayout-auto>
            <div>
              <h3>Reveal</h3>
              <div>
                <a-button type="primary" @click="collapse7 = true">打开</a-button>
                <adv-space :size="10" direction="horizontal" />
                <a-button @click="collapse7 = false">关闭</a-button>
              </div>

              <adv-space direction="vertical" />

              <div :style="horizontalCSS">
                <adv-slidelayout-reveal
                  :default-collapse="collapse7"
                  @after-close="collapse7 = false"
                >
                  <template #slide>
                    <div>left</div>
                  </template>
                  <template #master>
                    <div>Master</div>
                  </template>
                </adv-slidelayout-reveal>
              </div>
            </div>
          </adv-flexlayout-auto>

          <adv-flexlayout-auto>
            <div>
              <h3>right</h3>
              <div>
                <a-button type="primary" @click="collapse8 = true">打开</a-button>
                <adv-space :size="10" direction="horizontal" />
                <a-button @click="collapse8 = false">关闭</a-button>
              </div>
              <adv-space direction="vertical" />
              <div :style="horizontalCSS">
                <adv-slidelayout-reveal
                  direction="right"
                  :default-collapse="collapse8"
                  @after-close="collapse8 = false"
                >
                  <template #slide>
                    <div>right</div>
                  </template>
                  <template #master>
                    <div>Master</div>
                  </template>
                </adv-slidelayout-reveal>
              </div>
            </div>
          </adv-flexlayout-auto>
        </adv-flexlayout>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
      horizontalCSS: `
      	position: relative;
        width: 400px;
        height: 400px;
        border: 1px solid rgba(0,0,0,.1);
        overflow: hidden;
      `,
      verticalCSS: `
				position: relative;
				width: 400px;
        height: 500px;
				border: 1px solid rgba(0,0,0,.1);
        overflow: hidden;
      `,
      collapse1: true,
      collapse2: true,
      collapse3: true,
      collapse4: true,
      collapse5: true,
      collapse6: true,
      collapse7: true,
      collapse8: true,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'Overlay',
          cardProps: {
            description: {
              title: 'Overlay',
              info: 'Overlay',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>Overlay</h2>
          <adv-flexlayout direction="horizontal">
            <adv-flexlayout-auto>
              <div>
                <h3>left</h3>
                <div>
                  <a-button type="primary" @click="collapse1 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse1 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="horizontalCSS">
                  <adv-slidelayout-overlay
                    :defaultCollapse="collapse1"
                    @after-close="collapse1 = false"
                  >
                    left
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>

            <adv-flexlayout-auto>
              <div>
                <h3>right</h3>
                <div>
                  <a-button type="primary" @click="collapse2 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse2 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="horizontalCSS">
                  <adv-slidelayout-overlay
                    direction="right"
                    @after-close="collapse2 = false"
                    :defaultCollapse="collapse2"
                  >
                    right
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>
          </adv-flexlayout>

          <adv-flexlayout direction="horizontal">
            <adv-flexlayout-auto>
              <div>
                <h3>top</h3>
                <div>
                  <a-button type="primary" @click="collapse3 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse3 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="verticalCSS">
                  <adv-slidelayout-overlay
                    direction="top"
                    :defaultCollapse="collapse3"
                    @after-close="collapse3 = false"
                  >
                    top
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>

            <adv-flexlayout-auto>
              <div>
                <h3>bottom</h3>
                <div>
                  <a-button type="primary" @click="collapse4 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse4 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="verticalCSS">
                  <adv-slidelayout-overlay
                    direction="bottom"
                    :defaultCollapse="collapse4"
                    @after-close="collapse4 = false"
                  >
                    bottom
                  </adv-slidelayout-overlay>
                </div>
              </div>
            </adv-flexlayout-auto>
          </adv-flexlayout>
        </template>
        <script>
          export default {
            data() {
              return {
                collapse1: false,
                collapse2: false,
                collapse3: false,
                collapse4: false,
              }
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Push',
          cardProps: {
            description: {
              title: 'Push',
              info: 'Push',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>Push</h2>
          <adv-flexlayout direction="horizontal">
            <adv-flexlayout-auto>
              <div>
                <h3>left</h3>
                <div>
                  <a-button type="primary" @click="collapse5 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse5 = false">关闭</a-button>
                </div>
                <adv-space direction="vertical" />
                <div :style="horizontalCSS">
                  <adv-slidelayout-push :defaultCollapse="collapse5" @after-close="collapse5 = false">
                    <template v-slot:slide>
                      <div>left</div>
                    </template>
                    <template v-slot:master>
                      <div>master</div>
                    </template>
                  </adv-slidelayout-push>
                </div>
              </div>
            </adv-flexlayout-auto>

            <adv-flexlayout-auto>
              <div>
                <h3>right</h3>
                <div>
                  <a-button type="primary" @click="collapse6 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse6 = false">关闭</a-button>
                </div>
                <adv-space direction="vertical" />
                <div :style="horizontalCSS">
                  <adv-slidelayout-push
                    direction="right"
                    :defaultCollapse="collapse6"
                    @after-close="collapse6 = false"
                  >
                    <template v-slot:slide>
                      <div>right</div>
                    </template>
                    <template v-slot:master>
                      <div>Master</div>
                    </template>
                  </adv-slidelayout-push>
                </div>
              </div>
            </adv-flexlayout-auto>
          </adv-flexlayout>
        </template>
        <script>
          export default {
            data() {
              return {
                collapse5: false,
                collapse6: false,
              }
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'Revolving',
          cardProps: {
            description: {
              title: 'Revolving',
              info: 'Revolving',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>Revolving</h2>
          <adv-flexlayout direction="horizontal">
            <adv-flexlayout-auto>
              <div>
                <h3>Reveal</h3>
                <div>
                  <a-button type="primary" @click="collapse7 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse7 = false">关闭</a-button>
                </div>

                <adv-space direction="vertical" />

                <div :style="horizontalCSS">
                  <adv-slidelayout-reveal :defaultCollapse="collapse7" @after-close="collapse7 = false">
                    <template v-slot:slide>
                      <div>left</div>
                    </template>
                    <template v-slot:master>
                      <div>Master</div>
                    </template>
                  </adv-slidelayout-reveal>
                </div>
              </div>
            </adv-flexlayout-auto>

            <adv-flexlayout-auto>
              <div>
                <h3>right</h3>
                <div>
                  <a-button type="primary" @click="collapse8 = true">打开</a-button>
                  <adv-space :size="10" direction="horizontal" />
                  <a-button @click="collapse8 = false">关闭</a-button>
                </div>
                <adv-space direction="vertical" />
                <div :style="horizontalCSS">
                  <adv-slidelayout-reveal
                    direction="right"
                    :defaultCollapse="collapse8"
                    @after-close="collapse8 = false"
                  >
                    <template v-slot:slide>
                      <div>right</div>
                    </template>
                    <template v-slot:master>
                      <div>Master</div>
                    </template>
                  </adv-slidelayout-reveal>
                </div>
              </div>
            </adv-flexlayout-auto>
          </adv-flexlayout>
        </template>
        <script>
          export default {
            data() {
              return {
                collapse7: false,
                collapse8: false,
              }
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
          title: 'Overlay',
          data: [
            {
              params: 'width',
              desc: '宽度',
              type: 'string',
              defaultVal: '80%',
            },
            {
              params: 'height',
              desc: '高度',
              type: 'string',
              defaultVal: '40%',
            },
            {
              params: 'mask',
              desc: '是否有遮罩',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'zIndex',
              desc: '显示层级',
              type: 'number',
              defaultVal: '9999',
            },
            {
              params: 'time',
              desc: '过渡时间',
              type: 'number',
              defaultVal: '300ms',
            },
            {
              params: 'direction',
              desc: [('left', 'right', 'top', 'bottom')],
              type: 'string',
              defaultVal: 'left',
            },
            {
              params: 'collapse',
              desc: '显示或隐藏',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'onBeforeShow',
              desc: '显示之前',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onBeforeClose',
              desc: '隐藏之前',
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
              params: 'onAfterClose',
              desc: '隐藏之后',
              type: 'Function',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'Push',
          data: [
            {
              params: 'masterClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'masterStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
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
              params: 'slaveClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'slaveStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'width',
              desc: '宽度',
              type: 'string',
              defaultVal: '80%',
            },
            {
              params: 'height',
              desc: '高度',
              type: 'string',
              defaultVal: '40%',
            },
            {
              params: 'mask',
              desc: '是否有遮罩',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'zIndex',
              desc: '显示层级',
              type: 'number',
              defaultVal: '9999',
            },
            {
              params: 'time',
              desc: '过渡时间',
              type: 'number',
              defaultVal: '300ms',
            },
            {
              params: 'direction',
              desc: [('left', 'right')],
              type: 'string',
              defaultVal: 'left',
            },
            {
              params: 'collapse',
              desc: '显示或隐藏',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'onBeforeShow',
              desc: '显示之前',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onBeforeClose',
              desc: '隐藏之前',
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
              params: 'onAfterClose',
              desc: '隐藏之后',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'slide',
              desc: '抽屉面板JSX',
              type: 'String | Object | Function',
              defaultVal: '',
            },
            {
              params: 'master',
              desc: '抽屉主面板JSX',
              type: 'String | Object | Function',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'Reveal',
          data: [
            {
              params: 'masterClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'masterStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
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
              params: 'slaveClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'slaveStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'width',
              desc: '宽度',
              type: 'string',
              defaultVal: '80%',
            },
            {
              params: 'height',
              desc: '高度',
              type: 'string',
              defaultVal: '40%',
            },
            {
              params: 'mask',
              desc: '是否有遮罩',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'zIndex',
              desc: '显示层级',
              type: 'number',
              defaultVal: '9999',
            },
            {
              params: 'time',
              desc: '过渡时间',
              type: 'number',
              defaultVal: '300ms',
            },
            {
              params: 'direction',
              desc: [('left', 'right')],
              type: 'string',
              defaultVal: 'left',
            },
            {
              params: 'collapse',
              desc: '显示或隐藏',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'onBeforeShow',
              desc: '显示之前',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onBeforeClose',
              desc: '隐藏之前',
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
              params: 'onAfterClose',
              desc: '隐藏之后',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'slide',
              desc: '抽屉面板JSX',
              type: 'String | Object | Function',
              defaultVal: '',
            },
            {
              params: 'master',
              desc: '抽屉主面板JSX',
              type: 'String | Object | Function',
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
  methods: {},
};
</script>
