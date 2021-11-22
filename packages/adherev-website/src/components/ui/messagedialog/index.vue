<template>
  <div class="Page">
    <h1>MessageDialog</h1>
    <p>对 ant-design 的&lt;Model&gt;进行封装</p>
    <ul>
      <li>- 支持使用 open 方式打开</li>
      <li>- 支持 Modal 原始方法</li>
      <li>- 支持预定义 Alert、Confirm</li>
      <li>- 不与变量进行绑定，开箱即用的功能</li>
    </ul>

    <adv-space />

    <function-props
      :border="true"
      :title="'Confirm方法'"
      :data="[
        {
          name: 'MessageDialog.Confirm',
          desc: '打开确认对话框',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'text',
              desc: '显示的内容',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'onSuccess',
              desc: '成功的回调函数，返回Promise',
              type: 'Function',
              defaultVal: '() => {}',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'Alert方法'"
      :data="[
        {
          name: 'MessageDialog.Alert',
          desc: '打开Alert对话框',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'text',
              desc: '显示的内容',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'Prompt方法'"
      :data="[
        {
          name: 'MessageDialog.Prompt',
          desc: '打开一个FormItem的窗体',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'config',
              desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'layout',
              desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'InputPrompt方法'"
      :data="[
        {
          name: 'MessageDialog.InputPrompt方法',
          desc: '打开一个InputFormItem的窗体',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'config',
              desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'layout',
              desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'TextAreaPrompt方法'"
      :data="[
        {
          name: 'MessageDialog.TextAreaPrompt方法',
          desc: '打开一个TextAreaFormItem的窗体',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'config',
              desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'layout',
              desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'PassWordPrompt方法'"
      :data="[
        {
          name: 'MessageDialog.PassWordPrompt方法',
          desc: '打开一个PassWordFormItem的窗体',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'config',
              desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'layout',
              desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'NumberPromptPrompt方法'"
      :data="[
        {
          name: 'MessageDialog.NumberPrompt方法',
          desc: '打开一个NumberFormItem的窗体',
          modifier: 'static',
          params: [
            {
              name: 'title',
              desc: '标题',
              type: 'String | VNode',
              defaultVal: '',
              required: '',
            },
            {
              name: 'config',
              desc: 'FormItemCreator的一个配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'layout',
              desc: 'FormItemCreator的layout配置，请参考adhere-ui-formitemcreator',
              type: 'Object',
              defaultVal: '',
              required: '',
            },
            {
              name: 'width',
              desc: '宽度',
              type: 'number',
              defaultVal: '300',
              required: '',
            },
            {
              name: 'zIndex',
              desc: '层级',
              type: 'number',
              defaultVal: '1000',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string | VNode',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'Modal方法'"
      :data="[
        {
          name: 'MessageDialog.Modal',
          desc: '打开一个模式对话框',
          modifier: 'static',
          params: [
            {
              name: 'config',
              desc: '配置',
              type: 'Object - antd的Modal的配置',
              defaultVal: '{}',
              required: '',
            },
            {
              name: 'children',
              desc: '显示的内容',
              type: 'VNode | null',
              defaultVal: '',
              required: '',
            },
            {
              name: 'defaultCloneBtn',
              desc: '是否缺省有关闭按钮',
              type: 'boolean',
              defaultVal: 'true',
              required: '',
            },
            {
              name: 'local',
              desc: '语言',
              type: 'string [zh_CN | pt_PT | en_US]',
              defaultVal: 'zh_CN',
              required: '',
            },
          ],
          returnType: 'HtmlElement',
          returnDesc: '返回Modal的HtmlElement对象',
        },
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'Close方法'"
      :data="[
        {
          name: 'MessageDialog.close',
          desc: '关闭一个Modal对话框',
          modifier: 'static',
          params: [
            {
              name: 'el',
              desc: 'Model的el,一般是MessageDialog.Modal的返回值',
              type: 'HtmlElement',
              defaultVal: '',
              required: '',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <h2>使用Confirm</h2>
    <playground :code-text="confirmCode" lang="javascript">
      <a-button type="primary" @click="onOpenConfirm">Open Confirm</a-button>
    </playground>

    <h2>使用Alert</h2>
    <playground :code-text="alertCode" lang="javascript">
      <a-button type="primary" @click="onOpenAlert">Open Alert</a-button>
    </playground>

    <h2>使用Prompt</h2>
    <playground :code-text="promptCode" lang="javascript">
      <a-button type="primary" @click="onOpenPrompt">Open Prompt</a-button>
    </playground>

    <h2>使用InputPrompt</h2>
    <playground :code-text="inputPromptCode" lang="javascript">
      <a-button type="primary" @click="onOpenInputPrompt">Open InputPrompt</a-button>
    </playground>

    <h2>使用TextAreaPrompt</h2>
    <playground :code-text="textAreaPromptCode" lang="javascript">
      <a-button type="primary" @click="onOpenTextAreaPrompt">Open TextAreaPrompt</a-button>
    </playground>

    <h2>使用PassWordPrompt</h2>
    <playground :code-text="passWordPromptCode" lang="javascript">
      <a-button type="primary" @click="onOpenPassWordPrompt">Open PassWordPrompt</a-button>
    </playground>

    <h2>使用NumberPrompt</h2>
    <playground :code-text="numberPromptCode" lang="javascript">
      <a-button type="primary" @click="onOpenNumberPrompt">Open NumberPrompt</a-button>
    </playground>

    <h2>使用Modal</h2>
    <playground :code-text="modalCode" lang="javascript">
      <a-button type="primary" @click="onOpenModal">Open Modal</a-button>
    </playground>
  </div>
</template>
<script>
import { MessageDialog } from '@baifendian/adherev';
import icon from './icon.svg';

export default {
  computed: {
    confirmCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.Confirm({
            title: '提示',
            text: '确认要进行此操作码？',
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            icon: (h) => <img src={icon} alt="" width={30} />,
            onSuccess: () => {
              return new Promise((resolve) => {
                alert('点击了确认');

                resolve();
              });
            },
          });
        `;
    },
    alertCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.Alert({
            title: '提示',
            text: '操作失败！',
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            icon: (h) => <img src={icon} alt="" width={30} />,
          });
        `;
    },
    promptCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.Prompt({
            title: '提示',
            config: {
              rule: [
                {
                  type: 'slider',
                  field: 'zk81ligvtzlpq',
                  title: '滑块',
                  info: '',
                  _fc_drag_tag: 'slider',
                  hidden: false,
                  display: true,
                  value: 0,
                  wrap: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 20 },
                  },
                },
              ],
              option: {
                labelPosition: 'right',
                size: 'mini',
                hideRequiredAsterisk: false,
                showMessage: true,
                inlineMessage: false,
              },
            },
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            onSuccess: (value) => {
              return new Promise((resolve) => {
                alert(value);
                resolve();
              });
            },
          });
        `;
    },
    inputPromptCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.InputPrompt({
            title: '提示',
            config: {
              rule: [
                {
                  value: '张三',
                  title: '姓名',
                  field: 'zk81ligvtzlpq',
                  wrap: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 20 },
                  },
                },
              ],
              option: {
                labelPosition: 'right',
                size: 'medium',
                hideRequiredAsterisk: false,
                showMessage: true,
                inlineMessage: false,
              },
            },
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            onSuccess: (value) => {
              return new Promise((resolve) => {
                alert(value);
                resolve();
              });
            },
          });
        `;
    },
    textAreaPromptCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.TextAreaPrompt({
            title: '提示',
            config: {
              rule: [
                {
                  title: '地址',
                  field: 'zk81ligvtzlpq',
                  wrap: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 20 },
                  },
                },
              ],
              option: {
                labelPosition: 'right',
                size: 'medium',
                hideRequiredAsterisk: false,
                showMessage: true,
                inlineMessage: false,
              },
            },
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            onSuccess: (value) => {
              return new Promise((resolve) => {
                alert(value);
                resolve();
              });
            },
          });
        `;
    },
    passWordPromptCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.PassWordPrompt({
            title: '提示',
            config: {
              rule: [
                {
                  title: '密码',
                  field: 'zk81ligvtzlpq',
                  wrap: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 20 },
                  },
                },
              ],
              option: {
                labelPosition: 'right',
                size: 'medium',
                hideRequiredAsterisk: false,
                showMessage: true,
                inlineMessage: false,
              },
            },
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            onSuccess: (value) => {
              return new Promise((resolve) => {
                alert(value);
                resolve();
              });
            },
          });
        `;
    },
    numberPromptCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.NumberPrompt({
            title: '提示',
            config: {
              rule: [
                {
                  title: '数字',
                  field: 'zk81ligvtzlpq',
                  wrap: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 20 },
                  },
                },
              ],
              option: {
                labelPosition: 'right',
                size: 'medium',
                hideRequiredAsterisk: false,
                showMessage: true,
                inlineMessage: false,
              },
            },
            width: 300,
            zIndex: 1000,
            local: 'zh_CN',
            onSuccess: (value) => {
              return new Promise((resolve) => {
                alert(value);
                resolve();
              });
            },
          });
        `;
    },
    modalCode() {
      return `
          import { MessageDialog } from '@baifendian/adherev';

          MessageDialog.Modal({
            config: {
              title: {
                template: \`
                    <div style="color: red;">提示</div>
                \`,
              },
            },
            defaultCloneBtn: false,
            children: {
              template: \`
                <a-result title="Your operation has been executed">
                  <template #extra>
                    <a-button key="console" type="primary">
                      Go Console
                    </a-button>
                  </template>
                </a-result>
              \`,
            },
          });
        `;
    },
  },
  methods: {
    onOpenConfirm() {
      MessageDialog.Confirm({
        title: '提示',
        text: '确认要进行此操作码？',
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        icon: (h) => <img src={icon} alt="" width={30} />,
        onSuccess: () => {
          return new Promise((resolve) => {
            alert('点击了确认');

            resolve();
          });
        },
      });
    },
    onOpenAlert() {
      MessageDialog.Alert({
        title: '提示',
        text: '操作失败！',
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        icon: (h) => <img src={icon} alt="" width={30} />,
      });
    },
    onOpenModal() {
      MessageDialog.Modal({
        config: {
          title: {
            template: `
                <div style="color: red;">{{$tv('点击上传')}}</div>
            `,
          },
          // title: '提示 '
        },
        defaultCloneBtn: false,
        // children: (h)=> {
        //   return (
        //     <Result title="Your operation has been executed">
        //       <Button type="primary">Go Console</Button>
        //     </Result>
        //   );
        // }
        children: {
          template: `
            <a-result title="Your operation has been executed">
              <template #extra>
                <a-button key="console" type="primary">
                  {{$tv('点击上传')}}
                </a-button>
              </template>
            </a-result>
          `,
        },
      });
    },
    onOpenPrompt() {
      MessageDialog.Prompt({
        title: '提示',
        config: {
          rule: [
            {
              type: 'slider',
              field: 'zk81ligvtzlpq',
              title: '滑块',
              info: '',
              _fc_drag_tag: 'slider',
              hidden: false,
              display: true,
              value: 0,
              wrap: {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
              },
            },
          ],
          option: {
            labelPosition: 'right',
            size: 'mini',
            hideRequiredAsterisk: false,
            showMessage: true,
            inlineMessage: false,
          },
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    },
    onOpenInputPrompt() {
      MessageDialog.InputPrompt({
        title: '提示',
        config: {
          rule: [
            {
              value: '张三',
              title: '姓名',
              field: 'zk81ligvtzlpq',
              wrap: {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
              },
            },
          ],
          option: {
            labelPosition: 'right',
            size: 'medium',
            hideRequiredAsterisk: false,
            showMessage: true,
            inlineMessage: false,
          },
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    },
    onOpenTextAreaPrompt() {
      MessageDialog.TextAreaPrompt({
        title: '提示',
        config: {
          rule: [
            {
              title: '地址',
              field: 'zk81ligvtzlpq',
              wrap: {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
              },
            },
          ],
          option: {
            labelPosition: 'right',
            size: 'medium',
            hideRequiredAsterisk: false,
            showMessage: true,
            inlineMessage: false,
          },
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    },
    onOpenPassWordPrompt() {
      MessageDialog.PassWordPrompt({
        title: '提示',
        config: {
          rule: [
            {
              title: '密码',
              field: 'zk81ligvtzlpq',
              wrap: {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
              },
            },
          ],
          option: {
            labelPosition: 'right',
            size: 'medium',
            hideRequiredAsterisk: false,
            showMessage: true,
            inlineMessage: false,
          },
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    },
    onOpenNumberPrompt() {
      MessageDialog.NumberPrompt({
        title: '提示',
        config: {
          rule: [
            {
              title: '数字',
              field: 'zk81ligvtzlpq',
              wrap: {
                labelCol: { span: 4 },
                wrapperCol: { span: 20 },
              },
            },
          ],
          option: {
            labelPosition: 'right',
            size: 'medium',
            hideRequiredAsterisk: false,
            showMessage: true,
            inlineMessage: false,
          },
        },
        width: 300,
        zIndex: 1000,
        local: 'zh_CN',
        onSuccess: (value) => {
          return new Promise((resolve) => {
            alert(value);
            resolve();
          });
        },
      });
    },
  },
};
</script>
