<template>
  <div class="Page">
    <h1>Suspense</h1>
    <p>
      数据加载单元(如第一次是骷髅骨架，其他是loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是loading
    </p>
    <p>
      此组件是一个父类，使用的时候需要写一个子类，人后重写fetchData、renderInner和showLoading三个方法，所以只能使用class的方式，不能使用hooks
    </p>

    <h2>属性</h2>
    <props
      :data="[
        {
          params: 'reset',
          desc: '是否重置',
          type: 'boolean',
          defaultVal: 'false',
        },
        {
          params: 'firstLoading',
          desc: '自定义firstLoading',
          type: 'React.ReactElement | null',
          defaultVal: 'null',
        },
      ]"
    />

    <h2>重写的方法</h2>
    <function-props
      :data="[
        {
          name: 'fetchData',
          desc: '加载数据',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'renderInner',
          desc: '渲染的UI',
          modifier: 'public',
          params: [],
          returnType: 'React.ReactElement',
          returnDesc: '',
        },
        {
          name: 'showLoading',
          desc: '是否显示遮罩',
          modifier: 'public',
          params: [],
          returnType: 'boolean',
          returnDesc: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground>
      <a-button type="primary" @click="onCode1F1">重置</a-button>
      <suspense-table :reset="reset" />
    </playground>

    <h2>自定义firstLoading的UI</h2>
    <playground>
      <a-button type="primary" @click="onCode2F1">重置</a-button>
      <suspense-table :reset="reser1">
        <template v-slot:firstLoading>
          <div style="position: relative">
            <adv-spin :spinning="true" />
          </div>
        </template>
      </suspense-table>
    </playground>
  </div>
</template>
<script>
import Table from './table';

export default {
  data() {
    return {
      reset: false,
      reser1: false,
    };
  },
  components: {
    'suspense-table': Table,
  },
  methods: {
    onCode1F1() {
      this.reset = true;
    },
    onCode2F1() {
      this.reser1 = true;
    },
  },
};
</script>
