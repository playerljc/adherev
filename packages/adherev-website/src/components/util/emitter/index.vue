<template>
  <div class="Page">
    <h1>观察者模式</h1>
    <ul>
      <li>- 发布</li>
      <li>- 订阅</li>
      <li>- 解除订阅</li>
    </ul>

    <h2>方法</h2>
    <function-props
      :data="[
        {
          name: 'on',
          desc: '注册一个事件',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'handler',
              desc: '事件句柄',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
            {
              name: 'makStackSize',
              desc: '最大注册数',
              type: 'number',
              defaultVal: '200',
              required: 'false',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'once',
          desc: '注册只执行一次的事件',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'handler',
              desc: '事件句柄',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'all',
          desc: '依赖类型都执行后的钩子',
          modifier: 'public',
          params: [
            {
              name: 'types',
              desc: '事件类型',
              type: 'Array<String>',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'handler',
              desc: '事件句柄',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
          ],
          returnType: 'Function',
          returnDesc: '注销的方法',
        },
        {
          name: 'race',
          desc: '依赖类型任意一个执行后的钩子',
          modifier: 'public',
          params: [
            {
              name: 'types',
              desc: '事件类型',
              type: 'Array<String>',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'handler',
              desc: '事件句柄',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
          ],
          returnType: 'Function',
          returnDesc: '注销的方法',
        },
        {
          name: 'count',
          desc: '一个类型执行了count次后的钩子',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'count',
              desc: '执行次数',
              type: 'number',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'handler',
              desc: '事件句柄',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
          ],
          returnType: 'Function',
          returnDesc: '注销的方法',
        },
        {
          name: 'remove',
          desc: '解除一个事件',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'handler',
              desc: '事件句柄',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'hasType',
          desc: '一个事件是否注册过',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
          ],
          returnType: 'boolean',
          returnDesc: '注册过返回true，未注册过返回false',
        },
        {
          name: 'clear',
          desc: '清除一个事件类型的所有句柄',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'clearAll',
          desc: '清除所有事件类型的句柄',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'trigger',
          desc: '触发一个事件类型的事件',
          modifier: 'public',
          params: [
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'params',
              desc: '传递的参数',
              type: 'Object',
              defaultVal: '',
              required: 'true',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'dispatchEvent',
          desc: '触发一个Html的自定义事件',
          modifier: 'static',
          params: [
            {
              name: 'el',
              desc: '触发事件的HtmlElement',
              type: 'HtmlElement | Document',
              defaultVal: 'document',
              required: 'true',
            },
            {
              name: 'type',
              desc: '事件类型',
              type: 'String',
              defaultVal: '',
              required: 'true',
            },
            {
              name: 'params',
              desc: '传递的参数',
              type: 'CustomEventInit',
              defaultVal: '',
              required: 'true',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <h2>基本的使用</h2>
    <playground :code-text="code1">
      <a-button style="margin-right: 20px" @click="onCase1F1"> 注册通知 </a-button>
      <a-button @click="onCase1F2"> 发出通知 </a-button>
    </playground>

    <h2>注册多次，并且传递参数</h2>
    <playground :code-text="code2">
      <a-button style="margin-right: 20px" @click="onCase2F1">注册通知</a-button>
      <a-button @click="onCase2F2">发出通知</a-button>
    </playground>

    <h2>触发HtmlElement的自定义事件</h2>
    <playground :code-text="code3">
      <a-button style="margin-right: 20px" @click="onCase3F1">注册通知</a-button>
      <a-button @click="onCase3F2">发出通知</a-button>
    </playground>

    <h2>只执行一次</h2>
    <playground :code-text="code4">
      <a-button style="margin-right: 20px" @click="onCase4F1">注册通知</a-button>
      <a-button @click="onCase4F2">发出通知</a-button>
    </playground>

    <h2>all</h2>
    <playground :code-text="code5">
      <a-button style="margin-right: 20px" @click="onCase5F1">注册通知</a-button>
      <a-button @click="onCase5F2">发出通知并监控</a-button>
    </playground>

    <h2>race</h2>
    <playground :code-text="code6">
      <a-button style="margin-right: 20px" @click="onCase6F1">注册通知</a-button>
      <a-button @click="onCase6F2">发出通知并监控</a-button>
    </playground>

    <h2>count</h2>
    <playground :code-text="code7">
      <a-button style="margin-right: 20px" @click="onCase7F1">注册通知</a-button>
      <a-button @click="onCase7F2">发出通知并监控</a-button>
    </playground>
  </div>
</template>
<script>
import { Emitter } from '@baifendian/adherev';

let handler1;

export default {
  data() {
    return {
      code1: `
        <template>
          <h2>基本的使用</h2>
          <a-button style="margin-right: 20px" @click="onCase1F1"> 注册通知 </a-button>
          <a-button @click="onCase1F2"> 发出通知 </a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          let handler1;

          export default {
            methods: {
              onCase1F1() {
                if (handler1) {
                  Emitter.remove('type1', handler1);
                }

                handler1 = () => {
                  alert('接到了通知');
                };

                Emitter.on('type1', handler1);

                alert('注册成功');
              },
              onCase1F2() {
                if (!handler1) {
                  alert('还没有注册事件');

                  return;
                }

                Emitter.trigger('type1');
              },
            }
          }
        <\/script>
      `,
      code2: `
        <template>
          <h2>注册多次，并且传递参数</h2>
          <a-button style="margin-right: 20px" @click="onCase2F1">注册通知</a-button>
          <a-button @click="onCase2F2">发出通知</a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          export default {
            methods: {
              onCase2F1() {
                Emitter.on('type2', (params) => {
                  alert(params);
                });

                alert('注册成功');
              },
              onCase2F2() {
                Emitter.trigger('type2', 'Hello World');
              },
            }
          }
        <\/script>
      `,
      code3: `
        <template>
          <h2>触发HtmlElement的自定义事件</h2>
          <a-button style="margin-right: 20px" @click="onCase3F1">注册通知</a-button>
          <a-button @click="onCase3F2">发出通知</a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          export default {
            methods: {
              onCase3F1() {
                document.addEventListener('customType', (e) => {
                  alert(JSON.stringify(e.detail));
                });

                alert('注册成功');
              },
              onCase3F2() {
                Emitter.dispatchEvent(document, 'customType', {
                  detail: {
                    hazcheeseburger: true,
                  },
                });
              },
            }
          }
        <\/script>
      `,
      code4: `
        <template>
          <h2>只执行一次</h2>
          <a-button style="margin-right: 20px" @click="onCase4F1">注册通知</a-button>
          <a-button @click="onCase4F2">发出通知</a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          export default {
            methods: {
              onCase4F1() {
                Emitter.once('type3', () => {
                  alert('type3');
                });

                Emitter.once('type3', () => {
                  alert('type3');
                });
              },
              onCase4F2() {
                Emitter.trigger('type3');
              },
            }
          }
        <\/script>
      `,
      code5: `
        <template>
          <h2>all</h2>
          <a-button style="margin-right: 20px" @click="onCase5F1">注册通知</a-button>
          <a-button @click="onCase5F2">发出通知并监控</a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          export default {
            methods: {
              onCase5F1() {
                Emitter.once('type4', () => {
                  alert('type4');
                });

                Emitter.once('type5', () => {
                  alert('type5');
                });

                Emitter.once('type6', () => {
                  alert('type6');
                });
              },
              onCase5F2() {
                const fun = Emitter.all(['type4', 'type5', 'type6'], () => {
                  alert('type4,type5,type6 - changed');
                });

                Emitter.trigger('type4');
                Emitter.trigger('type5');
                Emitter.trigger('type6');
              },
            }
          }
        <\/script>
      `,
      code6: `
        <template>
          <h2>race</h2>
          <a-button style="margin-right: 20px" @click="onCase6F1">注册通知</a-button>
          <a-button @click="onCase6F2">发出通知并监控</a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          export default {
            methods: {
              onCase6F1() {
                Emitter.once('type7', () => {
                  alert('type7');
                });

                Emitter.once('type8', () => {
                  alert('type8');
                });

                Emitter.once('type9', () => {
                  alert('type9');
                });
              },
              onCase6F2() {
                const fun = Emitter.race(['type7', 'type8', 'type9'], () => {
                  alert('type7,type8,type9 - changed');
                });

                Emitter.trigger('type7');
                Emitter.trigger('type8');
                Emitter.trigger('type9');
              },
            }
          }
        <\/script>
      `,
      code7: `
        <template>
          <h2>count</h2>
          <a-button style="margin-right: 20px" @click="onCase7F1">注册通知</a-button>
          <a-button @click="onCase7F2">发出通知并监控</a-button>
        </template>
        <script>
          import { Emitter } from '@baifendian/adherev';

          export default {
            methods: {
              onCase7F1() {
                Emitter.on('type10', () => {
                  alert('type10');
                });
              },
              onCase7F2() {
                const fun = Emitter.count('type10', 2, () => {
                  alert('type10 - called 2');
                });

                Emitter.trigger('type10');
                Emitter.trigger('type10');
              },
            }
          }
        <\/script>
      `,
    };
  },
  methods: {
    onCase1F1() {
      if (handler1) {
        Emitter.remove('type1', handler1);
      }

      handler1 = () => {
        alert('接到了通知');
      };

      Emitter.on('type1', handler1);

      alert('注册成功');
    },
    onCase1F2() {
      if (!handler1) {
        alert('还没有注册事件');

        return;
      }

      Emitter.trigger('type1');
    },

    onCase2F1() {
      Emitter.on('type2', (params) => {
        alert(params);
      });

      alert('注册成功');
    },
    onCase2F2() {
      Emitter.trigger('type2', 'Hello World');
    },

    onCase3F1() {
      document.addEventListener('customType', (e) => {
        alert(JSON.stringify(e.detail));
      });

      alert('注册成功');
    },
    onCase3F2() {
      Emitter.dispatchEvent(document, 'customType', {
        detail: {
          hazcheeseburger: true,
        },
      });
    },

    onCase4F1() {
      Emitter.once('type3', () => {
        alert('type3');
      });

      Emitter.once('type3', () => {
        alert('type3');
      });
    },
    onCase4F2() {
      Emitter.trigger('type3');
    },

    onCase5F1() {
      Emitter.once('type4', () => {
        alert('type4');
      });

      Emitter.once('type5', () => {
        alert('type5');
      });

      Emitter.once('type6', () => {
        alert('type6');
      });
    },
    onCase5F2() {
      const fun = Emitter.all(['type4', 'type5', 'type6'], () => {
        alert('type4,type5,type6 - changed');
      });

      Emitter.trigger('type4');
      Emitter.trigger('type5');
      Emitter.trigger('type6');
    },

    onCase6F1() {
      Emitter.once('type7', () => {
        alert('type7');
      });

      Emitter.once('type8', () => {
        alert('type8');
      });

      Emitter.once('type9', () => {
        alert('type9');
      });
    },
    onCase6F2() {
      const fun = Emitter.race(['type7', 'type8', 'type9'], () => {
        alert('type7,type8,type9 - changed');
      });

      Emitter.trigger('type7');
      Emitter.trigger('type8');
      Emitter.trigger('type9');
    },

    onCase7F1() {
      Emitter.on('type10', () => {
        alert('type10');
      });
    },
    onCase7F2() {
      const fun = Emitter.count('type10', 2, () => {
        alert('type10 - called 2');
      });

      Emitter.trigger('type10');
      Emitter.trigger('type10');
    },
  },
};
</script>
