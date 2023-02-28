<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="FlexLayout">
      <p>实现flex布局的组件</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed>
            <div style="padding: 15px 20px; border-bottom: 1px solid #ccc; text-align: center">
              Top
            </div>
          </adv-flexlayout-fixed>
          <adv-flexlayout-auto style="justify-content: center; align-items: center"
            >Center</adv-flexlayout-auto
          >
          <adv-flexlayout-fixed>
            <div style="padding: 15px 20px; border-top: 1px solid #ccc; text-align: center">
              Bottom
            </div>
          </adv-flexlayout-fixed>
        </adv-flexlayout>

        <adv-space />

        <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed>
            <div style="padding: 15px 20px; border-bottom: 1px solid #ccc; text-align: center">
              Top
            </div>
          </adv-flexlayout-fixed>
          <adv-flexlayout-auto>
            <adv-flexlayout direction="horizontal">
              <adv-flexlayout-fixed
                style="
                  padding: 0 20px;
                  border-right: 1px solid #ccc;
                  justify-content: center;
                  align-items: center;
                "
              >
                left
              </adv-flexlayout-fixed>
              <adv-flexlayout-auto style="justify-content: center; align-items: center">
                Center
              </adv-flexlayout-auto>
              <adv-flexlayout-fixed
                style="
                  padding: 0 20px;
                  border-left: 1px solid #ccc;
                  justify-content: center;
                  align-items: center;
                "
              >
                Right
              </adv-flexlayout-fixed>
            </adv-flexlayout>
          </adv-flexlayout-auto>
          <adv-flexlayout-fixed>
            <div style="padding: 15px 20px; border-top: 1px solid #ccc; text-align: center">
              Bottom
            </div>
          </adv-flexlayout-fixed>
        </adv-flexlayout>

        <adv-space />

        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed
            style="
              border-right: 1px solid #ccc;
              padding: 0 15px;
              justify-content: center;
              align-items: center;
            "
          >
            Left
          </adv-flexlayout-fixed>
          <adv-flexlayout-auto>
            <adv-flexlayout>
              <adv-flexlayout-fixed
                style="
                  padding: 15px 0;
                  border-bottom: 1px solid #ccc;
                  justify-content: center;
                  align-items: center;
                "
              >
                Top
              </adv-flexlayout-fixed>
              <adv-flexlayout-auto style="justify-content: center; align-items: center">
                Center
              </adv-flexlayout-auto>
              <adv-flexlayout-fixed
                style="
                  padding: 15px 0;
                  border-top: 1px solid #ccc;
                  justify-content: center;
                  align-items: center;
                "
              >
                Bottom
              </adv-flexlayout-fixed>
            </adv-flexlayout>
          </adv-flexlayout-auto>
          <adv-flexlayout-fixed
            style="
              border-left: 1px solid #ccc;
              padding: 0 15px;
              justify-content: center;
              align-items: center;
            "
            >Right</adv-flexlayout-fixed
          >
        </adv-flexlayout>
      </template>

      <template #p2>
        <adv-flexlayout style="height: 500px; border: 1px solid #ccc">
          <adv-flexlayout-fixed>fixed1</adv-flexlayout-fixed>
          <adv-flexlayout-fixed>fixed2</adv-flexlayout-fixed>
          <adv-flexlayout-auto>auto1</adv-flexlayout-auto>
          <adv-flexlayout-fixed>fixed3</adv-flexlayout-fixed>
          <adv-flexlayout-auto>auto2</adv-flexlayout-auto>
          <adv-flexlayout-fixed>fixed4</adv-flexlayout-fixed>
        </adv-flexlayout>

        <adv-space />

        <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
          <adv-flexlayout-fixed>fixed1</adv-flexlayout-fixed>
          <adv-flexlayout-fixed>fixed2</adv-flexlayout-fixed>
          <adv-flexlayout-auto>auto1</adv-flexlayout-auto>
          <adv-flexlayout-fixed>fixed3</adv-flexlayout-fixed>
          <adv-flexlayout-auto>auto2</adv-flexlayout-auto>
          <adv-flexlayout-fixed>fixed4</adv-flexlayout-fixed>
        </adv-flexlayout>
      </template>

      <template #p3>
        <adv-flexlayout style="height: 100px; border: 1px solid #ccc">
          <adv-flexlayout-fixed>Top</adv-flexlayout-fixed>
          <adv-flexlayout-auto :fit="false" :auto-fixed="false" style="overflow-y: auto">
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
            <p>今天是个好日子</p>
          </adv-flexlayout-auto>
        </adv-flexlayout>

        <adv-space />

        <adv-flexlayout
          direction="horizontal"
          style="overflow: auto; height: 100px; border: 1px solid #ccc"
        >
          <adv-flexlayout-fixed>Left</adv-flexlayout-fixed>
          <adv-flexlayout-auto :fit="false" :auto-fixed="false">
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
          </adv-flexlayout-auto>
        </adv-flexlayout>
      </template>

      <template #p4>
        <adv-flexlayout-horizontal
          style="width: 100%; height: 300px; border: 1px solid #ccc"
          leftStyle="border-right: 1px solid #ccc; width: 100px;"
          rightStyle="border-left: 1px solid #ccc; width: 100px;"
        >
          <template #renderLeft><div>Left</div></template>
          <template #renderMain><div>Main</div></template>
          <template #renderRight><div>Right</div></template>
        </adv-flexlayout-horizontal>
      </template>

      <template #p5>
        <adv-flexlayout-vertical
          style="width: 100%; height: 300px; border: 1px solid #ccc"
          topStyle="border-bottom: 1px solid #ccc; height: 80px;"
          bottomStyle="border-top: 1px solid #ccc; height: 80px"
        >
          <template #renderTop><div>Top</div></template>
          <template #renderMain><div>Main</div></template>
          <template #renderBottom><div>Bottom</div></template>
        </adv-flexlayout-vertical>
      </template>

      <template #p6>
        <adv-flexlayout-horizontal
          style="width: 100%; border: 1px solid #ccc"
          leftStyle="border-right: 1px solid #ccc; width: 100px;"
          rightStyle="border-left: 1px solid #ccc; width: 100px;"
        >
          <template #renderLeft><div>Left</div></template>
          <template #renderMain>
            <adv-flexlayout-vertical
              style="width: 100%; height: 300px"
              topStyle="border-bottom: 1px solid #ccc; height: 80px;"
              bottomStyle="border-top: 1px solid #ccc; height: 80px"
            >
              <template #renderTop><div>Top</div></template>
              <template #renderMain><div>Main</div></template>
              <template #renderBottom><div>Bottom</div></template>
            </adv-flexlayout-vertical>
          </template>
          <template #renderRight><div>Right</div></template>
        </adv-flexlayout-horizontal>
      </template>

      <template #p7>
        <adv-flexlayout-toolbar
          :topToolBarSlotNames="['topAdd', 'topRemove', 'topUpdate']"
          :bottomToolBarSlotNames="['bottomAdd', 'bottomRemove', 'bottomUpdate']"
        >
          <template #topAdd>
            <a-button type="primary" key="add">添加</a-button>
          </template>
          <template #topRemove>
            <a-button type="primary" key="remove">删除</a-button>
          </template>
          <template #topUpdate>
            <a-button type="primary" key="update">修改</a-button>
          </template>
          <template #bottomAdd>
            <a-button type="primary" key="add">添加</a-button>
          </template>
          <template #bottomRemove>
            <a-button type="primary" key="remove">删除</a-button>
          </template>
          <template #bottomUpdate>
            <a-button type="primary" key="update">修改</a-button>
          </template>
          Main
        </adv-flexlayout-toolbar>
      </template>

      <template #p8>
        <adv-flexlayout-back
          :topToolBarSlotNames="['topAdd', 'topAdd1']"
          :bottomToolBarSlotNames="['bottomAdd', 'bottomUpdate', 'bottomRemove']"
        >
          <template #backTitle>返回</template>
          <template #topAdd>
            <a-button type="primary" key="add1">添加1</a-button>
          </template>
          <template #topAdd1>
            <a-button type="primary" key="add2">添加2</a-button>
          </template>

          <template #bottomAdd>
            <a-button type="primary" key="add">添加</a-button>
          </template>
          <template #bottomRemove>
            <a-button type="primary" key="remove">删除</a-button>
          </template>
          <template #bottomUpdate>
            <a-button type="primary" key="update">修改</a-button>
          </template>
          Main
        </adv-flexlayout-back>
      </template>

      <template #p9>
        <div style="height: 500px">
          <adv-flexlayout-scroll :scrollY="true">
            <adv-space-group direction="vertical">
              <FormItemWrap v-for="(item, index) in formItemWrapData" :key="index + 1" />
            </adv-space-group>
          </adv-flexlayout-scroll>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import FormItemWrap from './FormItemWrap';

export default {
  displayName: 'flexlayout',
  data() {
    return {
      data: Array.from({ length: 30 }),
      formItemWrapData: Array.from({ length: 20 }),
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
          <h2>基本使用</h2>
          <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
            <adv-flexlayout-fixed>
              <div style="padding: 15px 20px; border-bottom: 1px solid #ccc; text-align: center">
                Top
              </div>
            </adv-flexlayout-fixed>
            <adv-flexlayout-auto style="justify-content: center; align-items: center"
              >Center</adv-flexlayout-auto
            >
            <adv-flexlayout-fixed>
              <div style="padding: 15px 20px; border-top: 1px solid #ccc; text-align: center">
                Bottom
              </div>
            </adv-flexlayout-fixed>
          </adv-flexlayout>

          <adv-space />

          <adv-flexlayout style="height: 200px; border: 1px solid #ccc">
            <adv-flexlayout-fixed>
              <div style="padding: 15px 20px; border-bottom: 1px solid #ccc; text-align: center">
                Top
              </div>
            </adv-flexlayout-fixed>
            <adv-flexlayout-auto>
              <adv-flexlayout direction="horizontal">
                <adv-flexlayout-fixed
                  style="
                    padding: 0 20px;
                    border-right: 1px solid #ccc;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  left
                </adv-flexlayout-fixed>
                <adv-flexlayout-auto style="justify-content: center; align-items: center">
                  Center
                </adv-flexlayout-auto>
                <adv-flexlayout-fixed
                  style="
                    padding: 0 20px;
                    border-left: 1px solid #ccc;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  Right
                </adv-flexlayout-fixed>
              </adv-flexlayout>
            </adv-flexlayout-auto>
            <adv-flexlayout-fixed>
              <div style="padding: 15px 20px; border-top: 1px solid #ccc; text-align: center">
                Bottom
              </div>
            </adv-flexlayout-fixed>
          </adv-flexlayout>

          <adv-space />

          <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
            <adv-flexlayout-fixed
              style="
                border-right: 1px solid #ccc;
                padding: 0 15px;
                justify-content: center;
                align-items: center;
              "
            >
              Left
            </adv-flexlayout-fixed>
            <adv-flexlayout-auto>
              <adv-flexlayout>
                <adv-flexlayout-fixed
                  style="
                    padding: 15px 0;
                    border-bottom: 1px solid #ccc;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  Top
                </adv-flexlayout-fixed>
                <adv-flexlayout-auto style="justify-content: center; align-items: center">
                  Center
                </adv-flexlayout-auto>
                <adv-flexlayout-fixed
                  style="
                    padding: 15px 0;
                    border-top: 1px solid #ccc;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  Bottom
                </adv-flexlayout-fixed>
              </adv-flexlayout>
            </adv-flexlayout-auto>
            <adv-flexlayout-fixed
              style="
                border-left: 1px solid #ccc;
                padding: 0 15px;
                justify-content: center;
                align-items: center;
              "
              >Right</adv-flexlayout-fixed
            >
          </adv-flexlayout>
        </template>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '嵌套',
          cardProps: {
            description: {
              title: '嵌套',
              info: '嵌套',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>嵌套</h2>
          <adv-flexlayout style="height: 500px; border: 1px solid #ccc">
            <adv-flexlayout-fixed>fixed1</adv-flexlayout-fixed>
            <adv-flexlayout-fixed>fixed2</adv-flexlayout-fixed>
            <adv-flexlayout-auto>auto1</adv-flexlayout-auto>
            <adv-flexlayout-fixed>fixed3</adv-flexlayout-fixed>
            <adv-flexlayout-auto>auto2</adv-flexlayout-auto>
            <adv-flexlayout-fixed>fixed4</adv-flexlayout-fixed>
          </adv-flexlayout>

          <adv-space />

          <adv-flexlayout direction="horizontal" style="height: 200px; border: 1px solid #ccc">
            <adv-flexlayout-fixed>fixed1</adv-flexlayout-fixed>
            <adv-flexlayout-fixed>fixed2</adv-flexlayout-fixed>
            <adv-flexlayout-auto>auto1</adv-flexlayout-auto>
            <adv-flexlayout-fixed>fixed3</adv-flexlayout-fixed>
            <adv-flexlayout-auto>auto2</adv-flexlayout-auto>
            <adv-flexlayout-fixed>fixed4</adv-flexlayout-fixed>
          </adv-flexlayout>
        </template>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'auto内容超出高度或宽度',
          cardProps: {
            description: {
              title: 'auto内容超出高度或宽度',
              info: 'auto内容超出高度或宽度',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>auto内容超出高度或宽度</h2>
          <adv-flexlayout style="height: 100px; border: 1px solid #ccc">
            <adv-flexlayout-fixed>Top</adv-flexlayout-fixed>
            <adv-flexlayout-auto :fit="false" :autoFixed="false" style="overflow-y: auto">
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
              <p>今天是个好日子</p>
            </adv-flexlayout-auto>
          </adv-flexlayout>

          <adv-space />

          <adv-flexlayout
            direction="horizontal"
            style="overflow: auto; height: 100px; border: 1px solid #ccc"
          >
            <adv-flexlayout-fixed>Left</adv-flexlayout-fixed>
            <adv-flexlayout-auto :fit="false" :autoFixed="false">
              111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            </adv-flexlayout-auto>
          </adv-flexlayout>
        </template>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: `横向的快捷布局(HorizontalFlexLayout)`,
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'HorizontalFlexLayout',
              info: '分为Left、Main和Right',
            },
          },
          codeText: `
          <adv-flexlayout-horizontal
            style="width: 100%; height: 300px; border: 1px solid #ccc"
            leftStyle="border-right: 1px solid #ccc; width: 100px;"
            rightStyle="border-left: 1px solid #ccc; width: 100px;"
          >
            <template #renderLeft><div>Left</div></template>
            <template #renderMain><div>Main</div></template>
            <template #renderRight><div>Right</div></template>
          </adv-flexlayout-horizontal>
        `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: `纵向的快捷布局(VerticalFlexLayout)`,
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'HorizontalFlexLayout',
              info: '分为Top、Main和Bottom',
            },
          },
          codeText: `
          <adv-flexlayout-vertical
            style="width: 100%; height: 300px; border: 1px solid #ccc"
            topStyle="border-bottom: 1px solid #ccc; height: 80px;"
            bottomStyle="border-top: 1px solid #ccc; height: 80px"
          >
            <template #renderTop><div>Top</div></template>
            <template #renderMain><div>Main</div></template>
            <template #renderBottom><div>Bottom</div></template>
          </adv-flexlayout-vertical>
        `,
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: `嵌套(HorizontalFlexLayout,VerticalFlexLayout)`,
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'HorizontalFlexLayout，HorizontalFlexLayout',
              info: '组合嵌套',
            },
          },
          codeText: `
          <adv-flexlayout-horizontal
            style="width: 100%; border: 1px solid #ccc"
            leftStyle="border-right: 1px solid #ccc; width: 100px;"
            rightStyle="border-left: 1px solid #ccc; width: 100px;"
          >
            <template #renderLeft><div>Left</div></template>
            <template #renderMain>
              <adv-flexlayout-vertical
                style="width: 100%; height: 300px"
                topStyle="border-bottom: 1px solid #ccc; height: 80px;"
                bottomStyle="border-top: 1px solid #ccc; height: 80px"
              >
                <template #renderTop><div>Top</div></template>
                <template #renderMain><div>Main</div></template>
                <template #renderBottom><div>Bottom</div></template>
              </adv-flexlayout-vertical>
            </template>
            <template #renderRight><div>Right</div></template>
          </adv-flexlayout-horizontal>
        `,
          childrenSlot: 'p6',
        },
        {
          id: 'p7',
          name: `ToolBarLayout`,
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'ToolBarLayout',
              info: '包含上下的工具栏',
            },
          },
          codeText: `
          <adv-flexlayout-toolbar
            :topToolBarSlotNames="['topAdd', 'topRemove', 'topUpdate']"
            :bottomToolBarSlotNames="['bottomAdd', 'bottomRemove', 'bottomUpdate']"
          >
            <template #topAdd>
              <a-button type="primary" key="add">添加</a-button>
            </template>
            <template #topRemove>
              <a-button type="primary" key="remove">删除</a-button>
            </template>
            <template #topUpdate>
              <a-button type="primary" key="update">修改</a-button>
            </template>
            <template #bottomAdd>
              <a-button type="primary" key="add">添加</a-button>
            </template>
            <template #bottomRemove>
              <a-button type="primary" key="remove">删除</a-button>
            </template>
            <template #bottomUpdate>
              <a-button type="primary" key="update">修改</a-button>
            </template>
            Main
          </adv-flexlayout-toolbar>
        `,
          childrenSlot: 'p7',
        },
        {
          id: 'p8',
          name: `BackLayout`,
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'BackLayout',
              info: '带有返回操作的布局',
            },
          },
          codeText: `
          <adv-flexlayout-back
            :topToolBarSlotNames="['topAdd', 'topAdd1']"
            :bottomToolBarSlotNames="['bottomAdd', 'bottomUpdate', 'bottomRemove']"
          >
            <template #backTitle>返回</template>
            <template #topAdd>
              <a-button type="primary" key="add1">添加1</a-button>
            </template>
            <template #topAdd1>
              <a-button type="primary" key="add2">添加2</a-button>
            </template>

            <template #bottomAdd>
              <a-button type="primary" key="add">添加</a-button>
            </template>
            <template #bottomRemove>
              <a-button type="primary" key="remove">删除</a-button>
            </template>
            <template #bottomUpdate>
              <a-button type="primary" key="update">修改</a-button>
            </template>
            Main
          </adv-flexlayout-back>
        `,
          childrenSlot: 'p8',
        },
        {
          id: 'p9',
          name: `ScrollLayout`,
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '可以滚动的布局',
              info: '一般用在路由组件的外层，作为带有getPopupContainer的FormItem的parent',
            },
          },
          codeText: `
          <div style="height: 500px">
            <adv-flexlayout-scroll :scrollY="true">
              <adv-space-group direction="vertical">
                <FormItemWrap v-for="(item, index) in formItemWrapData" :key="index + 1" />
              </adv-space-group>
            </adv-flexlayout-scroll>
          </div>
          `,
          childrenSlot: 'p9',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'FlexLayout',
          data: [
            {
              params: 'direction',
              desc: '方向',
              type: ['vertical' | 'horizontal'],
              defaultVal: 'vertical',
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
          ],
        },
        {
          border: true,
          title: 'FlexLayout.Fixed',
          data: [
            {
              params: 'fit',
              desc: '子组件是否充满容器',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'className',
              desc: '附加的样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'FlexLayout.Auto',
          data: [
            {
              params: 'autoFixed',
              desc: '是否固定高度或宽度',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'fit',
              desc: '子组件是否充满容器',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'className',
              desc: '附加的样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'FlexLayout.HorizontalFlexLayout',
          data: [
            {
              params: 'leftClassName',
              desc: 'left的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'leftStyle',
              desc: 'left的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'rightClassName',
              desc: 'right的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'rightStyle',
              desc: 'right的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainClassName',
              desc: 'main的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainStyle',
              desc: 'main的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapClassName',
              desc: 'mainAuto的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainAutoStyle',
              desc: 'mainAuto的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainWrapClassName',
              desc: 'mainWrap的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainWrapStyle',
              desc: 'mainWrap的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'renderLeft',
              desc: 'left的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'renderMain',
              desc: 'main的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'renderRight',
              desc: 'right的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'leftProps',
              desc: 'left的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'rightProps',
              desc: 'right的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainProps',
              desc: 'main的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapProps',
              desc: 'mainAutoWrap的props',
              type: 'object',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'FlexLayout.VerticalFlexLayout',
          data: [
            {
              params: 'topClassName',
              desc: 'top的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'topStyle',
              desc: 'top的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'bottomClassName',
              desc: 'bottom的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'bottomStyle',
              desc: 'bottom的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainClassName',
              desc: 'main的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainStyle',
              desc: 'main的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapClassName',
              desc: 'mainAuto的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainAutoStyle',
              desc: 'mainAuto的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainWrapClassName',
              desc: 'mainWrap的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainWrapStyle',
              desc: 'mainWrap的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'renderLeft',
              desc: 'top的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'renderMain',
              desc: 'main的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'renderRight',
              desc: 'bottom的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'topProps',
              desc: 'top的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'bottomProps',
              desc: 'bottom的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainProps',
              desc: 'main的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapProps',
              desc: 'mainAutoWrap的props',
              type: 'object',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'FlexLayout.ToolBarLayout',
          data: [
            {
              params: 'topClassName',
              desc: 'top的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'topStyle',
              desc: 'top的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'bottomClassName',
              desc: 'bottom的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'bottomStyle',
              desc: 'bottom的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainClassName',
              desc: 'main的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainStyle',
              desc: 'main的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapClassName',
              desc: 'mainAuto的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainAutoStyle',
              desc: 'mainAuto的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainWrapClassName',
              desc: 'mainWrap的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainWrapStyle',
              desc: 'mainWrap的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'renderMain',
              desc: 'main的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'topProps',
              desc: 'top的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'bottomProps',
              desc: 'bottom的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainProps',
              desc: 'main的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapProps',
              desc: 'mainAutoWrap的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'topToolBarItems',
              desc: '上方工具栏',
              type: 'JSX.Element[]',
              defaultVal: '[]',
            },
            {
              params: 'bottomToolBarItems',
              desc: '下方工具栏',
              type: 'JSX.Element[]',
              defaultVal: '[]',
            },
          ],
        },
        {
          border: true,
          title: 'FlexLayout.BackLayout',
          data: [
            {
              params: 'topClassName',
              desc: 'top的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'topStyle',
              desc: 'top的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'bottomClassName',
              desc: 'bottom的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'bottomStyle',
              desc: 'bottom的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainClassName',
              desc: 'main的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainStyle',
              desc: 'main的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapClassName',
              desc: 'mainAuto的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainAutoStyle',
              desc: 'mainAuto的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'mainWrapClassName',
              desc: 'mainWrap的className',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'mainWrapStyle',
              desc: 'mainWrap的style',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'renderMain',
              desc: 'main的渲染',
              type: 'JSX.Element',
              defaultVal: '',
            },
            {
              params: 'topProps',
              desc: 'top的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'bottomProps',
              desc: 'bottom的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainProps',
              desc: 'main的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'mainAutoWrapProps',
              desc: 'mainAutoWrap的props',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'topToolBarItems',
              desc: '上方工具栏',
              type: 'JSX.Element[]',
              defaultVal: '[]',
            },
            {
              params: 'bottomToolBarItems',
              desc: '下方工具栏',
              type: 'JSX.Element[]',
              defaultVal: '[]',
            },

            {
              params: 'backPath',
              desc: '没有历史的时候回退的路由地址',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'enforceBackPath',
              desc: '强制执行的路由地址',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'isShowBack',
              desc: '是否显示返回按钮',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'history',
              desc: '路由对象',
              type: 'object',
              defaultVal: '',
            },
            {
              params: 'backTitle',
              desc: '返回按钮的文本',
              type: 'string | JSX.Element',
              defaultVal: '返回',
            },
          ],
        },
        {
          border: true,
          title: 'FlexLayout.ScrollLayout',
          data: [
            {
              params: 'scrollY',
              desc: '是否可以滚动',
              type: 'boolean',
              defaultVal: 'true',
            },
          ],
        },
      ],
    };
  },
  components: {
    FormItemWrap,
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
