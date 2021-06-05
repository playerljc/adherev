<template>
  <div class="Page">
    <h1>FlexLayout</h1>
    <p>实现flex布局的组件</p>

    <h2>属性</h2>
    <h3>FlexLayout</h3>
    <props
      :data="[
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
          type: 'React.CSSProperties',
          defaultVal: '',
        },
      ]"
    />

    <h3>FlexLayout.Fixed</h3>
    <props
      :data="[
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
          type: 'React.CSSProperties',
          defaultVal: '',
        },
      ]"
    />

    <h3>FlexLayout.Auto</h3>
    <props
      :data="[
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
          type: 'React.CSSProperties',
          defaultVal: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :code-text="code1">
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
    </playground>

    <h2>嵌套</h2>
    <playground :code-text="code2">
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
    </playground>

    <h2>auto内容超出高度或宽度</h2>
    <playground :code-text="code3">
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
    </playground>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code1: `
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
      code2: `
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
      code3: `
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
    }
  }
};
</script>
