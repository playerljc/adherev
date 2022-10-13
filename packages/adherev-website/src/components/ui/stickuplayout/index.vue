<template>
  <adv-playground-page :scrollEl="scrollEl" class="StickupLayout" ref="ref">
    <adv-playground-page-section title="StickupLayout">
      <p>滚动固定头额布局</p>
      <p>父元素需要固定高度</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="height: 500px; overflow: hidden">
          <adv-stickuplayout>
            <adv-stickuplayout-item>
              <template v-slot:title>
                <span class="title">基本参数</span>
              </template>
              <table>
                <tr>
                  <td>厂商指导价(元)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>本地参考底价(元)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>厂商</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>级别</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>能源类型</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>上市时间</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大功率(KW)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>发动机</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </adv-stickuplayout-item>

            <adv-stickuplayout-item>
              <template v-slot:title>
                <span class="title">车身</span>
              </template>
              <table>
                <tr>
                  <td>长度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>宽度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>高度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>轴距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>前轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>后轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>车身结构</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </adv-stickuplayout-item>

            <adv-stickuplayout-item>
              <template v-slot:title>
                <span class="title">发动机</span>
              </template>
              <table>
                <tr>
                  <td>长度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>宽度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>高度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>轴距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>前轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>后轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>车身结构</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </adv-stickuplayout-item>

            <adv-stickuplayout-item>
              <template v-slot:title>
                <span class="title">变速箱</span>
              </template>
              <table>
                <tr>
                  <td>长度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>宽度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>高度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>轴距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>前轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>后轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>车身结构</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </adv-stickuplayout-item>

            <adv-stickuplayout-item>
              <template v-slot:title>
                <span class="title">车轮制动</span>
              </template>
              <table>
                <tr>
                  <td>长度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>宽度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>高度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>轴距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>前轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>后轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>车身结构</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </adv-stickuplayout-item>

            <adv-stickuplayout-item>
              <template v-slot:title>
                <span class="title">主/被动安全装备</span>
              </template>
              <table>
                <tr>
                  <td>长度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>宽度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>高度(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>轴距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>前轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>后轮距(mm)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>车身结构</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>最大扭矩(NH)</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </adv-stickuplayout-item>
          </adv-stickuplayout>
        </div>
      </template>

      <template #p2>
        <fragment>
          <adv-space-group direction="horizontal" :size="10">
            <a-button type="primary" @click="$refs.ref1.scrollToByIndex(5)"
              >滚动到底部(动画)</a-button
            >
            <a-button @click="$refs.ref1.scrollToByIndex(0)">置顶(动画)</a-button>
            <a-button type="primary" @click="$refs.ref1.scrollToByIndex(5, 0)"
              >滚动到底部(无动画)</a-button
            >
            <a-button @click="$refs.ref1.scrollToByIndex(0, 0)">置顶(无动画)</a-button>
          </adv-space-group>

          <adv-space />

          <div style="height: 500px; overflow: hidden">
            <adv-stickuplayout ref="ref1">
              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">基本参数</span>
                </template>
                <table>
                  <tr>
                    <td>厂商指导价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>本地参考底价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>厂商</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>级别</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>能源类型</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>上市时间</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大功率(KW)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>发动机</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">车身</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">发动机</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">变速箱</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">车轮制动</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">主/被动安全装备</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>
            </adv-stickuplayout>
          </div>
        </fragment>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

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
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
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
              <h2>基本使用</h2>
              <div style="height: 500px; overflow: hidden">
                <adv-stickuplayout>
                  <adv-stickuplayout-item>
                    <template v-slot:title>
                      <span class="title">基本参数</span>
                    </template>
                    <table>
                      <tr>
                        <td>厂商指导价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>本地参考底价(元)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>厂商</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>级别</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>能源类型</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>上市时间</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大功率(KW)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>发动机</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </adv-stickuplayout-item>

                  <adv-stickuplayout-item>
                    <template v-slot:title>
                      <span class="title">车身</span>
                    </template>
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </adv-stickuplayout-item>

                  <adv-stickuplayout-item>
                    <template v-slot:title>
                      <span class="title">发动机</span>
                    </template>
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </adv-stickuplayout-item>

                  <adv-stickuplayout-item>
                    <template v-slot:title>
                      <span class="title">变速箱</span>
                    </template>
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </adv-stickuplayout-item>

                  <adv-stickuplayout-item>
                    <template v-slot:title>
                      <span class="title">车轮制动</span>
                    </template>
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </adv-stickuplayout-item>

                  <adv-stickuplayout-item>
                    <template v-slot:title>
                      <span class="title">主/被动安全装备</span>
                    </template>
                    <table>
                      <tr>
                        <td>长度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>宽度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>高度(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轴距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>前轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>后轮距(mm)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>车身结构</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>最大扭矩(NH)</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </table>
                  </adv-stickuplayout-item>
                </adv-stickuplayout>
              </div>
            </template>
            <style lang="less" module src="./index.less" />
          `,
            },
            {
              title: 'index.less',
              key: 'index.less',
              lang: 'less',
              codeText: `
            :global {
              .StickupLayout {
                .adherev-ui-stickuplayout-fixed {
                  > .adherev-ui-stickuplayout-item-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    > .title {
                      font-weight: bold;
                    }
                  }
                }
                .adherev-ui-stickuplayout-inner {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                  > .adherev-ui-stickuplayout-item {
                    position: static;
                    margin: 0;
                    padding: 0;
                    &::before {
                      width: 0;
                      height: 0;
                      content: '';
                    }
                    > .adherev-ui-stickuplayout-item-header {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      padding: 15px;
                      border: 1px solid rgba(0, 0, 0, 0.1);
                      > .title {
                        font-weight: bold;
                      }
                    }

                    > .adherev-ui-stickuplayout-item-content {
                      > table {
                        width: 100%;
                        table-layout: fixed;
                        border-collapse: collapse;
                        > tr {
                          > td {
                            padding: 15px;
                            font-size: 12px;
                            border: 1px solid rgba(0, 0, 0, 0.1);
                            &:first-child {
                              background-color: #f8f8f8;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
            },
          ],
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '滚动到指定位置',
          cardProps: {
            description: {
              title: '滚动到指定位置',
              info: '滚动到指定位置',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>滚动到指定位置</h2>
          <adv-space-group direction="horizontal" :size="10">
            <a-button type="primary" @click="$refs.ref1.scrollToByIndex(5)">滚动到底部(动画)</a-button>
            <a-button @click="$refs.ref1.scrollToByIndex(0)">置顶(动画)</a-button>
            <a-button type="primary" @click="$refs.ref1.scrollToByIndex(5, 0)"
              >滚动到底部(无动画)</a-button
            >
            <a-button @click="$refs.ref1.scrollToByIndex(0, 0)">置顶(无动画)</a-button>
          </adv-space-group>

          <adv-space />

          <div style="height: 500px; overflow: hidden">
            <adv-stickuplayout ref="ref1">
              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">基本参数</span>
                </template>
                <table>
                  <tr>
                    <td>厂商指导价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>本地参考底价(元)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>厂商</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>级别</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>能源类型</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>上市时间</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大功率(KW)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>发动机</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">车身</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">发动机</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">变速箱</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">车轮制动</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>

              <adv-stickuplayout-item>
                <template v-slot:title>
                  <span class="title">主/被动安全装备</span>
                </template>

                <table>
                  <tr>
                    <td>长度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>宽度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>高度(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>轴距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>前轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>后轮距(mm)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>车身结构</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>最大扭矩(NH)</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
              </adv-stickuplayout-item>
            </adv-stickuplayout>
          </div>
        </template>
        <style lang="less" module src="./index.less" />
      `,
          childrenSlot: 'p2',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'scrollToByIndex',
              desc: '滚动到指定所引出',
              modifier: 'public',
              params: [
                {
                  name: 'index',
                  desc: '滚动到的索引',
                  type: 'number',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'duration',
                  desc: '滚动的时间',
                  type: 'number',
                  defaultVal: '600',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'scrollToByHeaderEl',
              desc: '滚动到指定el',
              modifier: 'public',
              params: [
                {
                  name: 'headerEl',
                  desc: '指定的el',
                  type: 'HtmlElement',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'duration',
                  desc: '滚动的时间',
                  type: 'number',
                  defaultVal: '300',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'SplitLayout',
          data: [
            {
              params: 'fixedClassName',
              desc: '固定头附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'fixedStyle',
              desc: '固定头的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'innerClassName',
              desc: '内部附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'innerStyle',
              desc: '内部附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'onChange',
              desc: '滚动到固定区域',
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
  methods: {},
};
</script>

<style lang="less" module src="./index.less" />
