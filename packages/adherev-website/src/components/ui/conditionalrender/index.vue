<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="ConditionalRender">
      <p>条件渲染</p>
      <p>适用于自定义显示条件的情况下是否显示组件</p>
      <p>实现了React的条件渲染</p>
      <p>实现了元素display切换</p>
      <p>实现了元素visibility切换</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="baseUseShow = !baseUseShow">{{
              baseUseShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender :conditional="baseUseShow">
            <template #default>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </template>
          </adv-conditionalrender>
        </a-card>
      </template>

      <template #p2>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="noMatchUseShow = !noMatchUseShow">{{
              noMatchUseShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender :conditional="noMatchUseShow">
            <template #default>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </template>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender>
        </a-card>
      </template>

      <template #p3>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rShow = !rShow">{{
              rShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rShow">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>
          </adv-conditionalrender-show>
        </a-card>
      </template>

      <template #p4>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rNoMatchShow = !rNoMatchShow">{{
              rNoMatchShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rNoMatchShow">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender-show>
        </a-card>
      </template>

      <template #p5>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rFragmentShow = !rFragmentShow">{{
              rFragmentShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rFragmentShow">
            <adv-conditionalrender-wrap>
              <p>Fragment1</p>
              <p>Fragment2</p>
              <p>Fragment3</p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <adv-conditionalrender-wrap>
                <p>NoMatchFragment1</p>
                <p>NoMatchFragment2</p>
                <p>NoMatchFragment3</p>
              </adv-conditionalrender-wrap>
            </template>
          </adv-conditionalrender-show>
        </a-card>
      </template>

      <template #p6>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rVisibility = !rVisibility">{{
              rVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rVisibility">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>
          </adv-conditionalrender-visibility>
        </a-card>
      </template>

      <template #p7>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rNoMatchVisibility = !rNoMatchVisibility">{{
              rNoMatchVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rNoMatchVisibility">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender-visibility>
        </a-card>
      </template>

      <template #p8>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rFragmentVisibility = !rFragmentVisibility">{{
              rFragmentVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rFragmentVisibility">
            <adv-conditionalrender-wrap>
              <p>Fragment1</p>
              <p>Fragment2</p>
              <p>Fragment3</p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <adv-conditionalrender-wrap>
                <p>NoMatchFragment1</p>
                <p>NoMatchFragment2</p>
                <p>NoMatchFragment3</p>
              </adv-conditionalrender-wrap>
            </template>
          </adv-conditionalrender-visibility>
        </a-card>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  displayName: 'conditionalrender',
  data() {
    return {
      baseUseShow: true,
      noMatchUseShow: true,
      rShow: true,
      rNoMatchShow: true,
      rFragmentShow: true,
      rVisibility: true,
      rNoMatchVisibility: true,
      rFragmentVisibility: true,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本的显示隐藏',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template slot="actions" class="ant-card-actions">
            <a-button type="primary" @click="baseUseShow=!baseUseShow">{{baseUseShow ? '隐藏' : '显示'}}</a-button>
          </template>
          <adv-conditionalrender :conditional="baseUseShow">
            <p>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </p>
          </adv-conditionalrender>
        </a-card>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '自定义不匹配时的UI',
          cardProps: {
            description: {
              title: '自定义不匹配时的UI',
              info: '自定义UI',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template slot="actions" class="ant-card-actions">
            <a-button type="primary" @click="noMatchUseShow=!noMatchUseShow">{{noMatchUseShow ? '隐藏' : '显示'}}</a-button>
          </template>
          <adv-conditionalrender :conditional="noMatchUseShow">
            <p>
              In the process of internal desktop applications development, many different design
              specs and implementations would be involved, which might cause designers and
              developers difficulties and duplication and reduce the efficiency of development.
            </p>
            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender>
        </a-card>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'show操作',
          cardProps: {
            description: {
              title: 'show操作',
              info: '不能使用<template #default>',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rShow = !rShow">{{
              rShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rShow">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>
          </adv-conditionalrender-show>
        </a-card>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'show操作noMatch',
          cardProps: {
            description: {
              title: 'show操作noMatch',
              info: '不能使用<template #default>',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rNoMatchShow = !rNoMatchShow">{{
              rNoMatchShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rNoMatchShow">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender-show>
        </a-card>
      `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: 'show操作Fragment',
          cardProps: {
            description: {
              title: 'show操作Fragment',
              info: '不能使用<template #default> noMatch不能使用<template #noMatch>',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rFragmentShow = !rFragmentShow">{{
              rFragmentShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rFragmentShow">
            <adv-conditionalrender-wrap>
              <p>Fragment1</p>
              <p>Fragment2</p>
              <p>Fragment3</p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <adv-conditionalrender-wrap>
                <p>NoMatchFragment1</p>
                <p>NoMatchFragment2</p>
                <p>NoMatchFragment3</p>
              </adv-conditionalrender-wrap>
            </template>
          </adv-conditionalrender-show>
        </a-card>
      `,
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: 'visibility操作',
          cardProps: {
            description: {
              title: 'visibility操作',
              info: '不能使用<template #default>',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rVisibility = !rVisibility">{{
              rVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rVisibility">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>
          </adv-conditionalrender-visibility>
        </a-card>
      `,
          childrenSlot: 'p6',
        },
        {
          id: 'p7',
          name: 'visibility操作noMatch',
          cardProps: {
            description: {
              title: 'visibility操作noMatch',
              info: '不能使用<template #default> noMatch不能使用<template #noMatch>',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rNoMatchVisibility = !rNoMatchVisibility">{{
              rNoMatchVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rNoMatchVisibility">
            <adv-conditionalrender-wrap>
              <p>
                In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of development.
              </p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender-visibility>
        </a-card>
      `,
          childrenSlot: 'p7',
        },
        {
          id: 'p8',
          name: 'visibility操作Fragment',
          cardProps: {
            description: {
              title: 'visibility操作Fragment',
              info: '不能使用<template #default> noMatch不能使用<template #noMatch>',
            },
          },
          type: 'PlayGround',
          codeText: `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rFragmentVisibility = !rFragmentVisibility">{{
              rFragmentVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rFragmentVisibility">
            <adv-conditionalrender-wrap>
              <p>Fragment1</p>
              <p>Fragment2</p>
              <p>Fragment3</p>
            </adv-conditionalrender-wrap>

            <template #noMatch>
              <adv-conditionalrender-wrap>
                <p>NoMatchFragment1</p>
                <p>NoMatchFragment2</p>
                <p>NoMatchFragment3</p>
              </adv-conditionalrender-wrap>
            </template>
          </adv-conditionalrender-visibility>
        </a-card>
      `,
          childrenSlot: 'p8',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'conditional',
              desc: '条件',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'noMatch',
              desc: '条件部匹配时显示的UI',
              type: 'VNode',
              defaultVal: 'null',
            },
          ],
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'conditionalRender',
              desc: '使用方法的ConditionalRender',
              modifier: 'static',
              params: [
                {
                  name: 'params',
                  desc: '',
                  type: `
                      {
                        conditional: boolean;
                        match: JSX.Element;
                        noMatch: JSX.Element | null;
                      }
                    `,
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'conditionalArr',
              desc: '含有PermissionConditional的React.Element的数组',
              modifier: 'static',
              params: [
                {
                  name: 'arr',
                  desc: '',
                  type: 'any[]',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'any[]',
              returnDesc: '',
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
