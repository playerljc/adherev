<template>
  <div class="Page">
    <h1>Space</h1>
    <p>无侵入性的上下留白和左右留白</p>
    <h2>属性</h2>
    <h3>Space</h3>
    <props
      :data="[
        {
          params: 'direction',
          desc: '方向',
          type: ['vertical' | 'horizontal'],
          defaultVal: 'vertical',
        },
        {
          params: 'size',
          desc: '宽度或这高度',
          type: 'string | number',
          defaultVal: '20',
        },
        {
          params: 'className',
          desc: '附加的样式',
          type: 'string',
          defaultVal: '',
        },
      ]"
    />

    <h3>Space.Group</h3>
    <props
      :data="[
        {
          params: 'direction',
          desc: '方向',
          type: ['vertical' | 'horizontal'],
          defaultVal: 'vertical',
        },
        {
          params: 'size',
          desc: '宽度或这高度',
          type: 'string | number',
          defaultVal: '20',
        },
        {
          params: 'className',
          desc: '附加的样式',
          type: 'string',
          defaultVal: '',
        },
      ]"
    />

    <h2>横向</h2>
    <playground :code-text="code1">
      <div style="display: flex; align-items: center; height: 15px">
        <a>编辑</a>
        <adv-space direction="horizontal" />
        <a>查看</a>
        <adv-space direction="horizontal" />
        <a>删除</a>
      </div>
    </playground>

    <h2>纵向</h2>
    <playground :code-text="code2">
      <div>
        <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
        <adv-space direction="vertical" />
        <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
      </div>
    </playground>

    <h2>间距</h2>
    <playground :code-text="code3">
      <div>
        <div style="display: flex; align-items: center; height: 15px">
          <a>编辑</a>
          <adv-space direction="horizontal" :size="10" />
          <a>查看</a>
          <adv-space direction="horizontal" :size="10" />
          <a>删除</a>
        </div>

        <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
        <adv-space direction="vertical" :size="10" />
        <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
      </div>
    </playground>

    <h2>SpaceGroup</h2>
    <playground :code-text="code4">
      <div>
        <adv-space-group direction="horizontal">
          <a>编辑</a>
          <a>查看</a>
          <a>删除</a>
        </adv-space-group>

        <adv-space-group direction="vertical">
          <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
          <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        </adv-space-group>
      </div>
    </playground>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code1: `
        <template>
          <h2>横向</h2>
          <div style="display: flex; align-items: center; height: 15px">
            <a>编辑</a>
            <adv-space direction="horizontal" />
            <a>查看</a>
            <adv-space direction="horizontal" />
            <a>删除</a>
          </div>
        </template>
      `,
      code2: `
        <template>
          <div>
            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <adv-space direction="vertical" />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        </template>
      `,
      code3: `
        <template>
          <h2>间距</h2>
          <div>
            <div style="display: flex; align-items: center; height: 15px">
              <a>编辑</a>
              <adv-space direction="horizontal" :size="10" />
              <a>查看</a>
              <adv-space direction="horizontal" :size="10" />
              <a>删除</a>
            </div>

            <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
            <adv-space direction="vertical" :size="10" />
            <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
          </div>
        </template>
      `,
      code4: `
        <template>
          <div>
            <div style="display: flex; align-items: center; height: 15px">
              <adv-space-group direction="horizontal">
                <a>编辑</a>
                <a>查看</a>
                <a>删除</a>
              </adv-space-group>
            </div>

            <adv-space-group direction="vertical">
              <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
              <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
            </adv-space-group>
          </div>
        </template>
      `,
    };
  },
};
</script>
