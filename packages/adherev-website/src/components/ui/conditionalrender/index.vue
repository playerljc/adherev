<template>
  <div class="Page">
    <h1>ConditionalRender</h1>
    <p>条件渲染</p>
    <p>适用于自定义显示条件的情况下是否显示组件</p>
    <h2>属性</h2>

    <props
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
          type: 'React.ReactElement',
          defaultVal: 'null',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
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
    </playground>

    <h2>自定义不匹配时的UI</h2>
    <playground :codeText="code2">
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
    </playground>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseUseShow: true,
      noMatchUseShow: true,
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
      `
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
    }
  }
};
</script>
