<template>
  <div class="Page">
    <h1>Permission</h1>
    <p>权限的组件</p>
    <ul>
      <li>- 设置所有权限</li>
      <li>- 传入权限(支持多个)</li>
      <li>- 可以自定义无权限的 UI</li>
    </ul>

    <h3>Permission</h3>
    <props
      :data="[
        {
          params: 'allPermission',
          desc: '所有的权限',
          type: 'Array<String>',
          defaultVal: 'undefined',
        },
        {
          params: 'permissions',
          desc: '校验的权限',
          type: 'Array<String>',
          defaultVal: '',
        },
        {
          params: 'children',
          desc: '有权限时显示的内容',
          type: 'React.ReactElement | null',
          defaultVal: '',
        },
        {
          params: 'noMatch',
          desc: '没有权限时显示的内容',
          type: 'React.ReactElement',
          defaultVal: 'null',
        },
      ]"
    />

    <h3>setPermission</h3>
    <function-props
      :data="[
        {
          name: 'setPermission',
          desc: '设置所有的权限',
          modifier: 'static',
          params: [
            {
              name: 'permission',
              desc: '所有的权限',
              type: 'Array<String>',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <h3>getPermission</h3>
    <function-props
      :data="[
        {
          name: 'getPermission',
          desc: '获取所有的权限',
          modifier: 'static',
          params: [],
          returnType: 'Array<String>',
          returnDesc: '返回所有权限的数组',
        },
      ]"
    />
  </div>

  <h3>checkPermission</h3>
  <function-props
    :data="[
      {
        name: 'checkPermission',
        desc: '监测是否有指定的权限',
        modifier: 'static',
        params: [
          {
            name: 'allPermission',
            desc: '所有的权限',
            type: 'Array<String>',
            defaultVal: '',
            required: '',
          },
          {
            name: 'currentPermissions',
            desc: '监测的权限',
            type: 'Array<String>',
            defaultVal: '',
            required: '',
          },
        ],
        returnType: 'boolean',
        returnDesc: '是否存在指定的权限',
      },
    ]"
  />

  <h2>基本使用</h2>
  <playground>
    <a-card>
      <template slot="actions" class="ant-card-actions">
        <a-button type="primary" @click="onSetAllPermission">设置所有权限</a-button>
        <a-button @click="onSetCurPermission">设置当前权限</a-button>
      </template>

      <adv-permission :permission="curPermission">
        <Button>有权限才能看到这个按钮</Button>
        <template v-slot:noMatch>
          <a-empty />
        </template>
      </adv-permission>
    </a-card>
  </playground>
</template>
<script>
import { Permission } from '@baifendian/adherev';

const {setPermission, getPermission} = Permission;

export default {
  data() {
    return {
      allPermission: getPermission(),
      curPermission: ['2'],
    };
  },
  methods: {
    onSetAllPermission() {},
    onSetCurPermission() {},
  },
};
</script>
