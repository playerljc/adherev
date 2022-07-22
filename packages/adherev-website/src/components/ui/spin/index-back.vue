<template>
  <div class="Page">
    <h1>Spin</h1>
    <p>无侵入的loading</p>
    <p>放入含有position:relative的元素中则遮罩这个元素，否则遮罩body</p>

    <props
      :border="true"
      :title="'属性'"
      :data="[
        {
          params: 'spinning',
          desc: '是否显示这招',
          type: 'boolean',
          defaultVal: 'false',
        },
        {
          params: 'text',
          desc: '显示的文本',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'zIndex',
          desc: '遮罩的层级',
          type: 'number',
          defaultVal: '19999',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :code-text="code">
      <div>
        <div style="position: relative; width: 200px; height: 200px; word-break: break-all">
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved, which might cause designers and developers
          difficulties and duplication and reduce the efficiency of development.
          <adv-spin text="处理中..." :spinning="show" />
        </div>
        <div>
          <a-button type="primary" @click="show = true"> 显示 </a-button>
          <a-button @click="show = false"> 取消 </a-button>
        </div>
      </div>
    </playground>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: `
        <template>
          <div>
            <div style="position: relative; width: 200px; height: 200px; word-break: break-all">
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
              <adv-spin text="处理中..." :spinning="show" />
            </div>
            <div>
              <a-button type="primary" @click="show = true"> 显示 </a-button>
              <a-button @click="show = false"> 取消 </a-button>
            </div>
          </div>
        </template>
        <script>
        export default {
          data() {
            return {
              show: false,
            }
          }
        }
        <\/script>
      `,
      show: false,
    };
  },
};
</script>
