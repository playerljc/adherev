<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="DateDisplay">
      <p>时间显示组件</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-tablegridlayout :data="data1">
          <template v-slot:default v-if="true"></template>

          <template v-slot:YYLabel>
            <adv-tablegridlayout-label>YY</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-2 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYYLabel>
            <adv-tablegridlayout-label>YYYY</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYYValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-4 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-MLabel>
            <adv-tablegridlayout-label>YYYY-M</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-MValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-6 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-MMLabel>
            <adv-tablegridlayout-label>YYYY-MM</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-MMValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-6 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-M-DLabel>
            <adv-tablegridlayout-label>YYYY-M-D</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-M-DValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-8 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-MM-DDLabel>
            <adv-tablegridlayout-label>YYYY-MM-DD</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-MM-DDValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-10 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-M-D_H:m:sLabel>
            <adv-tablegridlayout-label>YYYY-M-D H:m:s</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-M-D_H:m:sValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-13 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-MM-DD_H:m:sLabel>
            <adv-tablegridlayout-label>YYYY-MM-DD H:m:s</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-MM-DD_H:m:sValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-15 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-M-D_HH:mm:ssLabel>
            <adv-tablegridlayout-label>YYYY-M-D HH:mm:ss</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-M-D_HH:mm:ssValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-16 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY-MM-DD_HH:mm:ssLabel>
            <adv-tablegridlayout-label>YYYY-MM-DD HH:mm:ss</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY-MM-DD_HH:mm:ssValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-18 :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:FromNowLabel>
            <adv-tablegridlayout-label>返回现在到当前实例的相对时间</adv-tablegridlayout-label>
          </template>
          <template v-slot:FromNowValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-fromnow :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:ToNowLabel>
            <adv-tablegridlayout-label>返回当前实例到现在的相对时间</adv-tablegridlayout-label>
          </template>
          <template v-slot:ToNowValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-tonow :value="Date.now()" />
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p2>
        <adv-tablegridlayout :data="data2">
          <template v-slot:default v-if="true"></template>

          <template v-slot:YYYY_MLabel>
            <adv-tablegridlayout-label>YYYY/M</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_MValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-6 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_MMLabel>
            <adv-tablegridlayout-label>YYYY/MM</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_MMValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-7 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_M_DLabel>
            <adv-tablegridlayout-label>YYYY/M/D</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_M_DValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-8 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_MM_DDLabel>
            <adv-tablegridlayout-label>YYYY/MM/DD</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_MM_DDValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-10 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_M_D_H-m-sLabel>
            <adv-tablegridlayout-label>YYYY/M/D H-m-s</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_M_D_H-m-sValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-13 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_MM_DD_H-m-sLabel>
            <adv-tablegridlayout-label>YYYY-MM-DD H-m-s</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_MM_DD_H-m-sValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-15 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_M_D_HH-mm-ssLabel>
            <adv-tablegridlayout-label>YYYY/MM/DD HH-mm-ss</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_M_D_HH-mm-ssValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-16 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:YYYY_MM_DD_HH-mm-ssLabel>
            <adv-tablegridlayout-label>YYYY/MM/DD HH-mm-ss</adv-tablegridlayout-label>
          </template>
          <template v-slot:YYYY_MM_DD_HH-mm-ssValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-18 :value="Date.now()" :split1="'/'" />
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p3>
        <adv-tablegridlayout :data="data3">
          <template v-slot:default v-if="true"></template>

          <template v-slot:LTLabel>
            <adv-tablegridlayout-label>LT</adv-tablegridlayout-label>
          </template>
          <template v-slot:LTValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-LT :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:LTSLabel>
            <adv-tablegridlayout-label>LTS</adv-tablegridlayout-label>
          </template>
          <template v-slot:LTSValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-LTS :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:Label>
            <adv-tablegridlayout-label>L</adv-tablegridlayout-label>
          </template>
          <template v-slot:LValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-L :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:LLLabel>
            <adv-tablegridlayout-label>LL</adv-tablegridlayout-label>
          </template>
          <template v-slot:LLValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-LL :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:LLLLabel>
            <adv-tablegridlayout-label>LLL</adv-tablegridlayout-label>
          </template>
          <template v-slot:LLLValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-LLL :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:LLLLLabel>
            <adv-tablegridlayout-label>LLLL</adv-tablegridlayout-label>
          </template>
          <template v-slot:LLLLValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-LLLL :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:lLabel>
            <adv-tablegridlayout-label>l</adv-tablegridlayout-label>
          </template>
          <template v-slot:lValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-l :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:llLabel>
            <adv-tablegridlayout-label>ll</adv-tablegridlayout-label>
          </template>
          <template v-slot:llValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-ll :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:lllLabel>
            <adv-tablegridlayout-label>lll</adv-tablegridlayout-label>
          </template>
          <template v-slot:lllValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-lll :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:llllLabel>
            <adv-tablegridlayout-label>llll</adv-tablegridlayout-label>
          </template>
          <template v-slot:llllValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay-llll :value="Date.now()" :locale="'zh-cn'" />
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p4>
        <adv-tablegridlayout :data="data4">
          <template v-slot:default v-if="true"></template>

          <template v-slot:formatLabel>
            <adv-tablegridlayout-label>L LT</adv-tablegridlayout-label>
          </template>
          <template v-slot:formatValue>
            <adv-tablegridlayout-value>
              <adv-datedisplay :value="Date.now()" :locale="'zh-cn'" :format="'L LT'" />
            </adv-tablegridlayout-value>
          </template>

          <template v-slot:format1Label>
            <adv-tablegridlayout-label
              >[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]</adv-tablegridlayout-label
            >
          </template>
          <template v-slot:format1Value>
            <adv-tablegridlayout-value>
              <adv-datedisplay
                :value="Date.now()"
                :locale="'zh-cn'"
                :format="'[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'"
              />
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
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
          <adv-tablegridlayout :data="data1">
              <template v-slot:default v-if="true"></template>

              <template v-slot:YYLabel>
                <adv-tablegridlayout-label>YY</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-2 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYYLabel>
                <adv-tablegridlayout-label>YYYY</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYYValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-4 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-MLabel>
                <adv-tablegridlayout-label>YYYY-M</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-MValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-6 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-MMLabel>
                <adv-tablegridlayout-label>YYYY-MM</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-MMValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-6 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-M-DLabel>
                <adv-tablegridlayout-label>YYYY-M-D</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-M-DValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-8 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-MM-DDLabel>
                <adv-tablegridlayout-label>YYYY-MM-DD</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-MM-DDValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-10 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-M-D_H:m:sLabel>
                <adv-tablegridlayout-label>YYYY-M-D H:m:s</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-M-D_H:m:sValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-13 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-MM-DD_H:m:sLabel>
                <adv-tablegridlayout-label>YYYY-MM-DD H:m:s</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-MM-DD_H:m:sValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-15 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-M-D_HH:mm:ssLabel>
                <adv-tablegridlayout-label>YYYY-M-D HH:mm:ss</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-M-D_HH:mm:ssValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-16 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY-MM-DD_HH:mm:ssLabel>
                <adv-tablegridlayout-label>YYYY-MM-DD HH:mm:ss</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY-MM-DD_HH:mm:ssValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-18 :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:FromNowLabel>
                <adv-tablegridlayout-label>返回现在到当前实例的相对时间</adv-tablegridlayout-label>
              </template>
              <template v-slot:FromNowValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-fromnow :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:ToNowLabel>
                <adv-tablegridlayout-label>返回当前实例到现在的相对时间</adv-tablegridlayout-label>
              </template>
              <template v-slot:ToNowValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-tonow :value="Date.now()" />
                </adv-tablegridlayout-value>
              </template>
          </adv-tablegridlayout>
        </template>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '分隔符',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分隔符',
              info: '分隔符',
            },
          },
          codeText: `
        <template>
          <adv-tablegridlayout :data="data2">
              <template v-slot:default v-if="true"></template>

              <template v-slot:YYYY_MLabel>
                <adv-tablegridlayout-label>YYYY/M</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_MValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-6 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_MMLabel>
                <adv-tablegridlayout-label>YYYY/MM</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_MMValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-7 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_M_DLabel>
                <adv-tablegridlayout-label>YYYY/M/D</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_M_DValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-8 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_MM_DDLabel>
                <adv-tablegridlayout-label>YYYY/MM/DD</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_MM_DDValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-10 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_M_D_H-m-sLabel>
                <adv-tablegridlayout-label>YYYY/M/D H-m-s</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_M_D_H-m-sValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-13 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_MM_DD_H-m-sLabel>
                <adv-tablegridlayout-label>YYYY-MM-DD H-m-s</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_MM_DD_H-m-sValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-15 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_M_D_HH-mm-ssLabel>
                <adv-tablegridlayout-label>YYYY/MM/DD HH-mm-ss</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_M_D_HH-mm-ssValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-16 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:YYYY_MM_DD_HH-mm-ssLabel>
                <adv-tablegridlayout-label>YYYY/MM/DD HH-mm-ss</adv-tablegridlayout-label>
              </template>
              <template v-slot:YYYY_MM_DD_HH-mm-ssValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-18 :value="Date.now()" :split1="'/'" />
                </adv-tablegridlayout-value>
              </template>
            </adv-tablegridlayout>
        </template>
          `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '本地化',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '本地化',
              info: '本地化',
            },
          },
          codeText: `
        <template>
          <adv-tablegridlayout :data="data3">
              <template v-slot:default v-if="true"></template>

              <template v-slot:LTLabel>
                <adv-tablegridlayout-label>LT</adv-tablegridlayout-label>
              </template>
              <template v-slot:LTValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-LT :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:LTSLabel>
                <adv-tablegridlayout-label>LTS</adv-tablegridlayout-label>
              </template>
              <template v-slot:LTSValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-LTS :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:Label>
                <adv-tablegridlayout-label>L</adv-tablegridlayout-label>
              </template>
              <template v-slot:LValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-L :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:LLLabel>
                <adv-tablegridlayout-label>LL</adv-tablegridlayout-label>
              </template>
              <template v-slot:LLValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-LL :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:LLLLabel>
                <adv-tablegridlayout-label>LLL</adv-tablegridlayout-label>
              </template>
              <template v-slot:LLLValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-LLL :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:LLLLLabel>
                <adv-tablegridlayout-label>LLLL</adv-tablegridlayout-label>
              </template>
              <template v-slot:LLLLValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-LLLL :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:lLabel>
                <adv-tablegridlayout-label>l</adv-tablegridlayout-label>
              </template>
              <template v-slot:lValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-l :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:llLabel>
                <adv-tablegridlayout-label>ll</adv-tablegridlayout-label>
              </template>
              <template v-slot:llValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-ll :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:lllLabel>
                <adv-tablegridlayout-label>lll</adv-tablegridlayout-label>
              </template>
              <template v-slot:lllValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-lll :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:llllLabel>
                <adv-tablegridlayout-label>llll</adv-tablegridlayout-label>
              </template>
              <template v-slot:llllValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay-llll :value="Date.now()" :locale="'zh-cn'" />
                </adv-tablegridlayout-value>
              </template>
          </adv-tablegridlayout>
        </template>
          `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '自定义format',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '自定义format',
              info: '自定义format',
            },
          },
          codeText: `
        <template>
          <adv-tablegridlayout :data="data4">
              <template v-slot:default v-if="true"></template>

              <template v-slot:formatLabel>
                <adv-tablegridlayout-label>L LT</adv-tablegridlayout-label>
              </template>
              <template v-slot:formatValue>
                <adv-tablegridlayout-value>
                  <adv-datedisplay :value="Date.now()" :locale="'zh-cn'" :format="'L LT'" />
                </adv-tablegridlayout-value>
              </template>

              <template v-slot:format1Label>
                <adv-tablegridlayout-label
                  >[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]</adv-tablegridlayout-label
                >
              </template>
              <template v-slot:format1Value>
                <adv-tablegridlayout-value>
                  <adv-datedisplay
                    :value="Date.now()"
                    :locale="'zh-cn'"
                    :format="'[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'"
                  />
                </adv-tablegridlayout-value>
              </template>
            </adv-tablegridlayout>
        </template>
          `,
          childrenSlot: 'p4',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              border: true,
              title: 'ResourceMomentFormat2',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat4',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat6',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat7',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat8',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat10',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat13',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat15',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat16',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'ResourceMomentFormat18',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'split1',
                  desc: 'YYYY-MM-DD的分割',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'split2',
                  desc: 'HH:mm:ss',
                  type: 'string',
                  defaultVal: '-',
                },
                {
                  params: 'errorUI',
                  desc: '错误的UI',
                  type: 'JXS.Element',
                  defaultVal: 'null',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayFromNow',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
                {
                  params: 'now',
                  desc: '',
                  type: 'boolean',
                  defaultVal: 'false',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayToNow',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
                {
                  params: 'now',
                  desc: '',
                  type: 'boolean',
                  defaultVal: 'false',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplay',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
                {
                  params: 'format',
                  desc: '自定义的format字串',
                  type: 'string',
                  defaultVal: '',
                },
              ],
            },

            {
              border: true,
              title: 'DateDisplayLT',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayLTS',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayL',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayLL',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayLLL',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayLLLL',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayl',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayll',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplaylll',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
            {
              border: true,
              title: 'DateDisplayllll',
              data: [
                {
                  params: 'value',
                  desc: '值',
                  type: '通datejs',
                  defaultVal: '',
                },
                {
                  params: 'locale',
                  desc: '国际化',
                  type: 'string',
                  defaultVal: 'zh-cn',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    data1() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'YY',
              label: 'YYLabel',
              value: 'YYValue',
            },
            {
              key: 'YYYY',
              label: 'YYYYLabel',
              value: 'YYYYValue',
            },
            {
              key: 'YYYY-M',
              label: 'YYYY-MLabel',
              value: 'YYYY-MValue',
            },
            {
              key: 'YYYY-MM',
              label: 'YYYY-MMLabel',
              value: 'YYYY-MMValue',
            },
            {
              key: 'YYYY-M-D',
              label: 'YYYY-M-DLabel',
              value: 'YYYY-M-DValue',
            },
            {
              key: 'YYYY-MM-DD',
              label: 'YYYY-MM-DDLabel',
              value: 'YYYY-MM-DDValue',
            },
            {
              key: 'YYYY-M-D H:m:s',
              label: 'YYYY-M-D_H:m:sLabel',
              value: 'YYYY-M-D_H:m:sValue',
            },
            {
              key: 'YYYY-MM-DD H:m:s',
              label: 'YYYY-MM-DD_H:m:sLabel',
              value: 'YYYY-MM-DD_H:m:sValue',
            },
            {
              key: 'YYYY-M-D HH:mm:ss',
              label: 'YYYY-M-D_HH:mm:ssLabel',
              value: 'YYYY-M-D_HH:mm:ssValue',
            },
            {
              key: 'YYYY-MM-DD HH:mm:ss',
              label: 'YYYY-MM-DD_HH:mm:ssLabel',
              value: 'YYYY-MM-DD_HH:mm:ssValue',
            },
            {
              key: 'FromNow',
              label: 'FromNowLabel',
              value: 'FromNowValue',
            },
            {
              key: 'ToNow',
              label: 'ToNowLabel',
              value: 'ToNowValue',
            },
          ],
        },
      ];
    },
    data2() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'YYYY/M',
              label: 'YYYY_MLabel',
              value: 'YYYY_MValue',
            },
            {
              key: 'YYYY/MM',
              label: 'YYYY_MMLabel',
              value: 'YYYY_MMValue',
            },
            {
              key: 'YYYY/M/D',
              label: 'YYYY_M_DLabel',
              value: 'YYYY_M_DValue',
            },
            {
              key: 'YYYY/MM/DD',
              label: 'YYYY_MM_DDLabel',
              value: 'YYYY_MM_DDValue',
            },
            {
              key: 'YYYY/M/D H-m-s',
              label: 'YYYY_M_D_H-m-sLabel',
              value: 'YYYY_M_D_H-m-sValue',
            },
            {
              key: 'YYYY/MM/DD H-m-s',
              label: 'YYYY_MM_DD_H-m-sLabel',
              value: 'YYYY_MM_DD_H-m-sValue',
            },
            {
              key: 'YYYY/M/D HH-mm-ss',
              label: 'YYYY_M_D_HH-mm-ssLabel',
              value: 'YYYY_M_D_HH-mm-ssValue',
            },
            {
              key: 'YYYY/MM/DD HH-mm-ss',
              label: 'YYYY_MM_DD_HH-mm-ssLabel',
              value: 'YYYY_MM_DD_HH-mm-ssValue',
            },
          ],
        },
      ];
    },
    data3() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [, 'auto'],
          data: [
            {
              key: 'LT',
              label: 'LTLabel',
              value: 'LTValue',
            },
            {
              key: 'LTS',
              label: 'LTSLabel',
              value: 'LTSValue',
            },
            {
              key: 'L',
              label: 'Label',
              value: 'LValue',
            },
            {
              key: 'LL',
              label: 'LLLabel',
              value: 'LLValue',
            },
            {
              key: 'LLL',
              label: 'LLLLabel',
              value: 'LLLValue',
            },
            {
              key: 'LLLL',
              label: 'LLLLLabel',
              value: 'LLLLValue',
            },
            {
              key: 'l',
              label: 'lLabel',
              value: 'lValue',
            },
            {
              key: 'll',
              label: 'llLabel',
              value: 'llValue',
            },
            {
              key: 'lll',
              label: 'lllLabel',
              value: 'lllValue',
            },
            {
              key: 'llll',
              label: 'llllLabel',
              value: 'llllValue',
            },
          ],
        },
      ];
    },
    data4() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 1,
          colgroup: [300, 'auto'],
          data: [
            {
              key: 'format',
              label: 'formatLabel',
              value: 'formatValue',
            },
            {
              key: 'format1',
              label: 'format1Label',
              value: 'format1Value',
            },
          ],
        },
      ];
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
