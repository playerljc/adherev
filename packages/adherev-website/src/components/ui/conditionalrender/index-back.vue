<template>
  <div class="Page">
    <h1>ConditionalRender</h1>
    <p>条件渲染</p>
    <h2></h2>

    <props
      :border="true"
      :title="'属性'"
      :data="[
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
      ]"
    />

    <h2>基本使用</h2>
    <playground :code-text="code1">
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
    </playground>

    <h2>自定义不匹配时的UI</h2>
    <playground :code-text="code2">
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
    </playground>

    <h2>show操作</h2>
    <playground :code-text="code3">
      <a-card>
        <template #actions class="ant-card-actions">
          <a-button type="primary" @click="rShow = !rShow">{{ rShow ? '隐藏' : '显示' }}</a-button>
        </template>
        <adv-conditionalrender-show :conditional="rShow">
          <p>
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </p>
        </adv-conditionalrender-show>
      </a-card>
    </playground>

    <h2>show操作noMatch</h2>
    <playground :code-text="code4">
      <a-card>
        <template #actions class="ant-card-actions">
          <a-button type="primary" @click="rNoMatchShow = !rNoMatchShow">{{
            rNoMatchShow ? '隐藏' : '显示'
          }}</a-button>
        </template>
        <adv-conditionalrender-show :conditional="rNoMatchShow">
          <p>
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </p>

          <a-empty slot="noMatch" />
        </adv-conditionalrender-show>
      </a-card>
    </playground>

    <h2>show操作Fragment</h2>
    <playground :code-text="code5">
      <a-card>
        <template #actions class="ant-card-actions">
          <a-button type="primary" @click="rFragmentShow = !rFragmentShow">{{
            rFragmentShow ? '隐藏' : '显示'
          }}</a-button>
        </template>
        <adv-conditionalrender-show :conditional="rFragmentShow">
          <p>Fragment1</p>
          <p>Fragment2</p>
          <p>Fragment3</p>

          <p slot="noMatch">NoMatchFragment1</p>
          <p slot="noMatch">NoMatchFragment2</p>
          <p slot="noMatch">NoMatchFragment3</p>
        </adv-conditionalrender-show>
      </a-card>
    </playground>

    <h2>visibility操作</h2>
    <playground :code-text="code6">
      <a-card>
        <template #actions class="ant-card-actions">
          <a-button type="primary" @click="rVisibility = !rVisibility">{{
            rVisibility ? '隐藏' : '显示'
          }}</a-button>
        </template>
        <adv-conditionalrender-visibility :conditional="rVisibility">
          <p>
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </p>
        </adv-conditionalrender-visibility>
      </a-card>
    </playground>

    <h2>visibility操作noMatch</h2>
    <playground :code-text="code7">
      <a-card>
        <template #actions class="ant-card-actions">
          <a-button type="primary" @click="rNoMatchVisibility = !rNoMatchVisibility">{{
            rNoMatchVisibility ? '隐藏' : '显示'
          }}</a-button>
        </template>
        <adv-conditionalrender-visibility :conditional="rNoMatchVisibility">
          <p>
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
          </p>

          <a-empty slot="noMatch" />
        </adv-conditionalrender-visibility>
      </a-card>
    </playground>

    <h2>visibility操作Fragment</h2>
    <playground :code-text="code8">
      <a-card>
        <template #actions class="ant-card-actions">
          <a-button type="primary" @click="rFragmentVisibility = !rFragmentVisibility">{{
            rFragmentVisibility ? '隐藏' : '显示'
          }}</a-button>
        </template>
        <adv-conditionalrender-visibility :conditional="rFragmentVisibility">
          <p>Fragment1</p>
          <p>Fragment2</p>
          <p>Fragment3</p>

          <p slot="noMatch">NoMatchFragment1</p>
          <p slot="noMatch">NoMatchFragment2</p>
          <p slot="noMatch">NoMatchFragment3</p>
        </adv-conditionalrender-visibility>
      </a-card>
    </playground>
  </div>
</template>

<script>
export default {
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
    };
  },
  computed: {
    code1() {
      return `
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
      `;
    },
    code2() {
      return `
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
            <template v-slot:noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender>
        </a-card>
      `;
    },
    code3() {
      return `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rShow = !rShow">{{ rShow ? '隐藏' : '显示' }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rShow">
            <p>
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
            </p>
          </adv-conditionalrender-show>
        </a-card>
      `;
    },
    code4() {
      return `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rNoMatchShow = !rNoMatchShow">{{
              rNoMatchShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rNoMatchShow">
            <p>
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
            </p>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender-show>
        </a-card>
      `;
    },
    code5() {
      return `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rFragmentShow = !rFragmentShow">{{
              rFragmentShow ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-show :conditional="rFragmentShow">
            <p>Fragment1</p>
            <p>Fragment2</p>
            <p>Fragment3</p>

            <template #noMatch>
              <p>NoMatchFragment1</p>
              <p>NoMatchFragment2</p>
              <p>NoMatchFragment3</p>
            </template>
          </adv-conditionalrender-show>
        </a-card>
      `;
    },
    code6() {
      return `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rShow = !rVisibility">{{
              rVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rVisibility">
            <p>
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
            </p>
          </adv-conditionalrender-visibility>
        </a-card>
      `;
    },
    code7() {
      return `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rNoMatchVisibility = !rNoMatchVisibility">{{
              rNoMatchVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rNoMatchVisibility">
            <p>
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
            </p>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender-visibility>
        </a-card>
      `;
    },
    code8() {
      return `
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="rFragmentVisibility = !rFragmentVisibility">{{
              rFragmentVisibility ? '隐藏' : '显示'
            }}</a-button>
          </template>
          <adv-conditionalrender-visibility :conditional="rFragmentVisibility">
            <p>Fragment1</p>
            <p>Fragment2</p>
            <p>Fragment3</p>

            <template #noMatch>
              <p>NoMatchFragment1</p>
              <p>NoMatchFragment2</p>
              <p>NoMatchFragment3</p>
            </template>
          </adv-conditionalrender-visibility>
        </a-card>
      `;
    },
  },
};
</script>
