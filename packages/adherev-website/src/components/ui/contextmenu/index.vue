<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="ContextMenu">
      <p>上下文菜单</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p2>
        <a-button type="primary" @click="onClickCode1($event)">点击弹出</a-button>
      </template>

      <template #p3>
        <a-button type="primary" @contextmenu="onContextMenuCode2($event)">右键弹出</a-button>
      </template>

      <template #p4>
        <a-radio-group value="large" @change="onChangeCode3($event)">
          <a-radio-button value="file">File</a-radio-button>
          <a-radio-button value="edit">Edit</a-radio-button>
          <a-radio-button value="view">View</a-radio-button>
        </a-radio-group>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import { ContextMenu } from '@baifendian/adherev';

/**
 * 上下文菜单数据
 * @return - {Array}
 */
const contextMenuData = [
  {
    // <folder-add-outlined />
    name: 'add',
    id: 'add',
    icon: {
      template: `<folder-add-outlined />`,
    }, // <FolderAddOutlined />,
    separation: false,
    attribute: {},
    children: [
      {
        name: 'folder',
        id: 'folder',
        icon: {
          template: `<folder-outlined />`,
        }, // <FolderOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Add page above',
        id: 'addpageabove',
        icon: {
          template: `<folder-add-outlined />`,
        }, // <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Add page below',
        id: 'addpagebelow',
        icon: {
          template: `<folder-add-outlined />`,
        }, // <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'subpage',
        id: 'subpage',
        icon: {
          template: '<folder-add-outlined />',
        }, // <FileAddOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
    ],
  },
  {
    name: 'move',
    id: 'move',
    icon: {
      template: `<arrow-left-outlined />`,
    }, // <ArrowsAltOutlined />,
    separation: false,
    attribute: {},
    children: [
      {
        name: 'Move up',
        id: 'moveup',
        icon: 'fa fa-long-arrow-alt-up',
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'Move down',
        id: 'movedown',
        icon: {
          template: `<arrow-up-outlined />`,
        }, // <ArrowUpOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'upgrade',
        id: 'upgrade',
        icon: {
          template: `<arrow-down-outlined />`,
        }, // <ArrowDownOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
      {
        name: 'downgrade',
        id: 'downgrade',
        icon: {
          template: `<download-outlined />`,
        }, // <DownloadOutlined />,
        separation: false,
        attribute: {},
        children: [],
      },
    ],
  },
  {
    name: 'delete',
    id: 'delete',
    icon: {
      template: `<delete-outlined />`,
    }, // <DeleteOutlined />,
    separation: false,
    attribute: {},
    children: [],
  },
  {
    name: 'rename',
    id: 'rename',
    icon: {
      template: `<edit-outlined />`,
    }, // <EditOutlined />,
    separation: false,
    attribute: {},
    children: [],
  },
];

export default {
  displayName: 'contextmenu',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '菜单的数据',
          cardProps: {
            description: {
              title: '菜单的数据',
              info: '菜单的数据',
            },
          },
          type: 'PlayGround',
          codeText: `
        const contextMenuData = [
          {
            // <folder-add-outlined />
            name: 'add',
            id: 'add',
            icon: {
              template: \`<folder-add-outlined />\`,
            }, //<FolderAddOutlined />,
            separation: false,
            attribute: {},
            children: [
              {
                name: 'folder',
                id: 'folder',
                icon: {
                  template: \`<folder-outlined />\`,
                }, // <FolderOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
              {
                name: 'Add page above',
                id: 'addpageabove',
                icon: {
                  template: \`<folder-add-outlined />\`,
                }, //<FileAddOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
              {
                name: 'Add page below',
                id: 'addpagebelow',
                icon: {
                  template: \`<folder-add-outlined />\`,
                }, //<FileAddOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
              {
                name: 'subpage',
                id: 'subpage',
                icon: {
                  template: '<folder-add-outlined />',
                }, //<FileAddOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
            ],
          },
          {
            name: 'move',
            id: 'move',
            icon: {
              template: \`<arrow-left-outlined />\`,
            }, // <ArrowsAltOutlined />,
            separation: false,
            attribute: {},
            children: [
              {
                name: 'Move up',
                id: 'moveup',
                icon: 'fa fa-long-arrow-alt-up',
                separation: false,
                attribute: {},
                children: [],
              },
              {
                name: 'Move down',
                id: 'movedown',
                icon: {
                  template: \`<arrow-up-outlined />\`,
                }, // <ArrowUpOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
              {
                name: 'upgrade',
                id: 'upgrade',
                icon: {
                  template: \`<arrow-down-outlined />\`,
                }, // <ArrowDownOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
              {
                name: 'downgrade',
                id: 'downgrade',
                icon: {
                  template: \`<download-outlined />\`,
                }, // <DownloadOutlined />,
                separation: false,
                attribute: {},
                children: [],
              },
            ],
          },
          {
            name: 'delete',
            id: 'delete',
            icon: {
              template: \`<delete-outlined />\`,
            }, // <DeleteOutlined />,
            separation: false,
            attribute: {},
            children: [],
          },
          {
            name: 'rename',
            id: 'rename',
            icon: {
              template: \`<edit-outlined />\`,
            }, // <EditOutlined />,
            separation: false,
            attribute: {},
            children: [],
          },
        ];
      `,
        },
        {
          id: 'p2',
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
          <a-button type="primary" @click="onClickCode1($event)">点击弹出</a-button>
        </template>
        <script>
          import { ContextMenu } from '@baifendian/adherev';

          export default {
            methods: {
              onClickCode1(e) {
                ContextMenu.open([].concat(contextMenuData), {
                  width: 200,
                  x: e.clientX,
                  y: e.clientY,
                  maskClosable: true,
                  handler: (id, attribute) => {
                    // folder 添加目录
                    // addpageabove 向上添加页面
                    // addpagebelow 向下添加页面
                    // subpage 添加子页面
                    // delete 删除
                    // rename 重命名
                  },
                });
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '右键弹出',
          cardProps: {
            description: {
              title: '右键弹出',
              info: '右键弹出',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>右键弹出</h2>
          <a-button type="primary" @contextmenu="onContextMenuCode2($event)">右键弹出</a-button>
        </template>
        <script>
          import { ContextMenu } from '@baifendian/adherev';

          export default {
             methods: {
               onContextMenuCode2(e) {
                e.preventDefault();

                ContextMenu.open([].concat(contextMenuData), {
                  width: 200,
                  x: e.clientX,
                  y: e.clientY,
                  maskClosable: true,
                  handler: (id, attribute) => {
                    // folder 添加目录
                    // addpageabove 向上添加页面
                    // addpagebelow 向下添加页面
                    // subpage 添加子页面
                    // delete 删除
                    // rename 重命名
                  },
                });
              },
             }
          }
        <\/script>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '多项按钮',
          cardProps: {
            description: {
              title: '多项按钮',
              info: '多项按钮',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>多项按钮</h2>
          <a-radio-group value="large" @change="onChangeCode3($event)">
            <a-radio-button value="file">File</a-radio-button>
            <a-radio-button value="edit">Edit</a-radio-button>
            <a-radio-button value="view">View</a-radio-button>
          </a-radio-group>
        </template>
        <script>
          import { ContextMenu } from '@baifendian/adherev';

          export default {
             methods: {
               onChangeCode3(e) {
                e.preventDefault();

                ContextMenu.open([].concat(contextMenuData), {
                  width: 200,
                  x: e.nativeEvent.currentTarget.getBoundingClientRect().left,
                  y: e.nativeEvent.currentTarget.getBoundingClientRect().top,
                  maskClosable: true,
                  handler: (id, attribute) => {
                    // folder 添加目录
                    // addpageabove 向上添加页面
                    // addpagebelow 向下添加页面
                    // subpage 添加子页面
                    // delete 删除
                    // rename 重命名
                    alert(id+attribute);
                  },
                });
              },
             }
          }
        <\/script>
      `,
          childrenSlot: 'p4',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: 'ContextMenu方法',
          data: [
            {
              name: 'open',
              desc: '显示一个上下文菜单',
              modifier: 'public',
              params: [
                {
                  name: 'data',
                  desc: '菜单的数据',
                  type: 'IData',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'config',
                  desc: '配置',
                  type: 'IConfig',
                  defaultVal: '{}',
                  required: '',
                },
              ],
              returnType: 'HtmlElement',
              returnDesc: '上下文菜单的el',
            },
            {
              name: 'close',
              desc: '关闭一个上下文菜单',
              modifier: 'public',
              params: [
                {
                  name: 'el',
                  desc: '使用open方法返回的参数',
                  type: 'HtmlElement',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'IData',
          data: [
            {
              params: 'name',
              desc: '菜单名称',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'icon',
              desc: '菜单图标',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'id',
              desc: '菜单的唯一id',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'disabled',
              desc: '是否可用',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'separation',
              desc: '是否是分割线',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'attribute',
              desc: '自定义参数',
              type: 'Object',
              defaultVal: '',
            },
            {
              params: 'children',
              desc: '孩子',
              type: 'Array<IData>',
              defaultVal: '[]',
            },
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'Object',
              defaultVal: '',
            },
            {
              params: 'subMenuClassName',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'subMenuStyle',
              desc: '附加样式',
              type: 'Object',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'IConfig',
          data: [
            {
              params: 'x',
              desc: '菜单显示的x坐标，现对于视口',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'y',
              desc: '菜单显示的y坐标，现对于视口',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'width',
              desc: '菜单宽度',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'maskClosable',
              desc: '是否点击遮罩消失',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'handler',
              desc: '点击菜单项的钩子',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加样式',
              type: 'Object',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    onClickCode1(e) {
      ContextMenu.open([].concat(contextMenuData), {
        width: 200,
        x: e.clientX,
        y: e.clientY,
        maskClosable: true,
        handler: (id, attribute) => {
          // folder 添加目录
          // addpageabove 向上添加页面
          // addpagebelow 向下添加页面
          // subpage 添加子页面
          // delete 删除
          // rename 重命名
        },
      });
    },
    onContextMenuCode2(e) {
      e.preventDefault();

      ContextMenu.open([].concat(contextMenuData), {
        width: 200,
        x: e.clientX,
        y: e.clientY,
        maskClosable: true,
        handler: (id, attribute) => {
          // folder 添加目录
          // addpageabove 向上添加页面
          // addpagebelow 向下添加页面
          // subpage 添加子页面
          // delete 删除
          // rename 重命名
        },
      });
    },
    onChangeCode3(e) {
      e.preventDefault();

      ContextMenu.open([].concat(contextMenuData), {
        width: 200,
        x: e.nativeEvent.currentTarget.getBoundingClientRect().left,
        y: e.nativeEvent.currentTarget.getBoundingClientRect().top,
        maskClosable: true,
        handler: (id, attribute) => {
          // folder 添加目录
          // addpageabove 向上添加页面
          // addpagebelow 向下添加页面
          // subpage 添加子页面
          // delete 删除
          // rename 重命名
          alert(`${id},${attribute}`);
        },
      });
    },
  },
};
</script>
