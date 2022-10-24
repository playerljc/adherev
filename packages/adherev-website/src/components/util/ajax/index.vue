<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Ajax" />

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button type="primary" @click="onCode1F1">call</a-button>
      </template>

      <template #p2>
        <a-button type="primary" @click="onCode2F1">call</a-button>
      </template>

      <template #p3>
        <form ref="uploadFormFef" encType="multipart/form-data" method="post">
          <div>
            <a-avatar v-if="!!img" shape="square" size="large" :src="img" />
            <a-avatar v-else shape="square" size="large" icon="user" />

            <div style="margin-bottom: 20px" />

            <input type="file" @change="onCode3F1($event)" />

            <div style="margin-bottom: 20px" />

            <a-progress :percent="percent" />
          </div>
        </form>
      </template>

      <template #p4>
        <a-button type="primary" @click="onCode4F1">call</a-button>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import { Ajax, GlobalIndicator } from '@baifendian/adherev';

const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

const uploadFormFef = null;
const uploadRef = null;

export default {
  displayName: 'ajax',
  data() {
    return {
      img: null,
      percent: 0,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'get',
          cardProps: {
            description: {
              title: 'get',
              info: 'get',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>get</h2>
          <a-button type="primary" @click="onCode1F1">call</a-button>
        </template>
        <script>
          import { Ajax } from '@baifendian/adherev';

          const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

          export default {
            onCode1F1() {
              k007Ajax
                .get({
                  path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
                  loading: {
                    show: true,
                  },
                })
                .then((res) => {
                  if (res) {
                    if (res.data.code === 200) {
                      alert(JSON.stringify(res.data.data));
                    }

                    res.hideIndicator();
                  }
                });
            },
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'post',
          cardProps: {
            description: {
              title: 'post',
              info: 'post',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
         <h2>post</h2>
         <a-button type="primary" @click="onCode2F1">call</a-button>
        </template>
        <script>
          import { Ajax } from '@baifendian/adherev';

          const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

          export default {
             methods: {
               onCode2F1() {
                k007Ajax
                  .post({
                    path: '/api/controlledObject/facade/fq/queryList',
                    data: [
                      {
                        resource: '12345678',
                        type: '101',
                        uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
                      },
                      { resource: '', type: '103', uuid: '562096255732281344' },
                    ],
                    loading: {
                      show: true,
                    },
                  })
                  .then((res) => {
                    if (res) {
                      if (res.data.code === 200) {
                        alert(JSON.stringify(res.data.data));
                      }

                      res.hideIndicator();
                    }
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
          name: 'upload',
          cardProps: {
            description: {
              title: 'upload',
              info: 'upload',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>upload</h2>
          <form ref="uploadFormFef" encType="multipart/form-data" method="post">
            <div>
              <a-avatar v-if="!!img" shape="square" size="large" :src="img" />
              <a-avatar v-else shape="square" size="large" icon="user" />

              <div style="margin-bottom: 20px" />

              <input type="file" @change="onCode3F1($event)" />

              <div style="margin-bottom: 20px" />

              <a-progress :percent="percent" />
            </div>
          </form>
        </template>
        <script>
          import { Ajax } from '@baifendian/adherev';

          const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

          const uploadFormFef = null;
          const uploadRef = null;

          export default {
            methods: {
              onCode3F1(e) {
                const { target } = e;
                const file = target.files[0];

                const { size } = file;

                const reader = new FileReader();
                reader.onload = (e) => {
                  this.img = e.target.result;
                };

                reader.readAsDataURL(file);

                k007Ajax
                  .post({
                    path: '/api/personControl/monitorPerson/image/upload',
                    data: {
                      form: this.$refs.uploadFormFef,
                      data: {
                        file,
                      },
                    },
                    loading: {
                      show: true,
                    },
                    onProgress: (e) => {
                      this.percent((e.loaded / size) * 100);
                    },
                    onLoadend: () => {
                      this.percent = 100;
                    },
                  })
                  .then((res) => {
                    this.percent = 100;

                    if (res) {
                      if (res.data.code === 200) {
                        alert(JSON.stringify(res.data.data));
                      }

                      res.hideIndicator();
                    }
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
          name: 'PromiseAll',
          cardProps: {
            description: {
              title: 'PromiseAll',
              info: 'PromiseAll',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>PromiseAll</h2>
          <a-button type="primary" @click="onCode4F1">call</a-button>
        </template>
        <script>
          import { Ajax, GlobalIndicator } from '@baifendian/adherev';

          const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

          export default {
            methods: {
              onCode4F1() {
                const globalIndicator = GlobalIndicator.show();

                Promise.all([
                  k007Ajax.get({
                    path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
                  }),
                  k007Ajax.get({
                    path: '/api/SystemManager/system/role/login/list?state=&kw=&pageNum=1&pageSize=10',
                  }),
                  k007Ajax.post({
                    path: '/api/controlledObject/facade/fq/queryList',
                    data: [
                      {
                        resource: '12345678',
                        type: '101',
                        uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
                      },
                      { resource: '', type: '103', uuid: '562096255732281344' },
                    ],
                  }),
                ])
                  .then((res) => {
                    GlobalIndicator.hide(globalIndicator);
                    alert(JSON.stringify(res));
                  })
                  .catch(() => {
                    GlobalIndicator.hide(globalIndicator);
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
          title: '方法',
          data: [
            {
              name: 'get',
              desc: 'get请求',
              modifier: 'public',
              params: [
                {
                  name: 'params',
                  desc: '',
                  type: 'ISendArg',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise',
              returnDesc: '',
            },
            {
              name: 'post',
              desc: 'post请求',
              modifier: 'public',
              params: [
                {
                  name: 'params',
                  desc: '',
                  type: 'ISendArg',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise',
              returnDesc: '',
            },
            {
              name: 'path',
              desc: 'path请求',
              modifier: 'public',
              params: [
                {
                  name: 'params',
                  desc: '',
                  type: 'ISendArg',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise',
              returnDesc: '',
            },
            {
              name: 'put',
              desc: 'put请求',
              modifier: 'public',
              params: [
                {
                  name: 'params',
                  desc: '',
                  type: 'ISendArg',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise',
              returnDesc: '',
            },
            {
              name: 'delete',
              desc: 'delete请求',
              modifier: 'public',
              params: [
                {
                  name: 'params',
                  desc: '',
                  type: 'ISendArg',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'ISendArg',
          data: [
            {
              params: 'path',
              desc: '请求的地址(相对的地址)',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'headers',
              desc: '请求的头',
              type: 'Object<key,value>',
              defaultVal: '',
            },
            {
              params: 'data',
              desc: '请求的数据',
              type: '{form?: HTMLFormElement;data: object;} | object',
              defaultVal: '',
            },
            {
              params: 'mock',
              desc: '是否支持mock数据',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'loading',
              desc: 'loading的配置',
              type: '{show:boolean;text:string;el:HtmlElement}',
              defaultVal: '',
            },
            {
              params: 'onBeforeResponse',
              desc: '和后端定义的三大业务key',
              type: '() => {}',
              defaultVal: '',
            },
            {
              params: 'dataKey',
              desc: '数据属性',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'messageKey',
              desc: '消息属性',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'codeKey',
              desc: '业务code属性',
              type: 'number | string',
              defaultVal: '',
            },
            {
              params: 'codeSuccess',
              desc: '业务code成功属性',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'showWarn',
              desc: '在code不等于200的时候是否使出message的warn',
              type: 'boolean',
              defaultVal: '',
            },
            {
              params: 'onTimeout',
              desc: '超时函数',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onLoadsStart',
              desc: '加载开始',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onProgress',
              desc: '加载进度',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onAbort',
              desc: '请求取消',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onError',
              desc: '发生错误',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onLoad',
              desc: '开始加载',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onLoadend',
              desc: '加载完成',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'timeout',
              desc: '超时时间',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'withCredentials',
              desc: '是否携带客户端信息',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'interceptor',
              desc: '拦截器',
              type: 'Function({status,statusText,response,responseText})',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'IConfig',
          data: [
            {
              params: 'onTimeout',
              desc: '在预设时间内没有接收到响应时触发',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onLoadsStart',
              desc: '接收到响应数据时触发',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onProgress',
              desc: '当请求接收到更多数据时，周期性地触发',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onAbort',
              desc: '当 request 被停止时触发，例如当程序调用 XMLHttpRequest.abort() 时',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onError',
              desc: '当 request 遭遇错误时触发',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onLoad',
              desc: 'XMLHttpRequest请求成功完成时触发',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onLoadend',
              desc: '请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'timeout',
              desc: '超时时间',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'withCredentials',
              desc: '是否携带客户端数据',
              type: 'boolean',
              defaultVal: 'true',
            },
            {
              params: 'interceptor',
              desc: '拦截器接口定义',
              type: 'Function({status,statusText,response,responseText})',
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
    onCode1F1() {
      k007Ajax
        .get({
          path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
          loading: {
            show: true,
          },
        })
        .then((res) => {
          if (res) {
            if (res.data.code === 200) {
              alert(JSON.stringify(res.data.data));
            }

            res.hideIndicator();
          }
        });
    },
    onCode2F1() {
      k007Ajax
        .post({
          path: '/api/controlledObject/facade/fq/queryList',
          data: [
            {
              resource: '12345678',
              type: '101',
              uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
            },
            { resource: '', type: '103', uuid: '562096255732281344' },
          ],
          loading: {
            show: true,
          },
        })
        .then((res) => {
          if (res) {
            if (res.data.code === 200) {
              alert(JSON.stringify(res.data.data));
            }

            res.hideIndicator();
          }
        });
    },
    onCode3F1(e) {
      const { target } = e;
      const file = target.files[0];

      const { size } = file;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.img = e.target.result;
      };

      reader.readAsDataURL(file);

      k007Ajax
        .post({
          path: '/api/personControl/monitorPerson/image/upload',
          data: {
            form: this.$refs.uploadFormFef,
            data: {
              file,
            },
          },
          loading: {
            show: true,
          },
          onProgress: (e) => {
            this.percent((e.loaded / size) * 100);
          },
          onLoadend: () => {
            this.percent = 100;
          },
        })
        .then((res) => {
          this.percent = 100;

          if (res) {
            if (res.data.code === 200) {
              alert(JSON.stringify(res.data.data));
            }

            res.hideIndicator();
          }
        });
    },
    onCode4F1() {
      const globalIndicator = GlobalIndicator.show();

      Promise.all([
        k007Ajax.get({
          path: '/api/securitypolice/frontend/config/namespace?kw=k007.service_address@@resource@@gis@@application',
        }),
        k007Ajax.get({
          path: '/api/SystemManager/system/role/login/list?state=&kw=&pageNum=1&pageSize=10',
        }),
        k007Ajax.post({
          path: '/api/controlledObject/facade/fq/queryList',
          data: [
            {
              resource: '12345678',
              type: '101',
              uuid: '7419d8b2-76f8-11eb-ada5-b76f62efdb0c',
            },
            { resource: '', type: '103', uuid: '562096255732281344' },
          ],
        }),
      ])
        .then((res) => {
          GlobalIndicator.hide(globalIndicator);
          alert(JSON.stringify(res));
        })
        .catch(() => {
          GlobalIndicator.hide(globalIndicator);
        });
    },
  },
};
</script>
