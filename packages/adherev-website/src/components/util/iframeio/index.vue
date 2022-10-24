<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="IframeIO">
      <p>iframe的通信客户端和服务端</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <Client />
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import Client from './client';

export default {
  displayName: 'iframeio',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          type: 'PlayGroundTab',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          active: 'client.vue',
          config: [
            {
              title: 'client.vue',
              key: 'client.vue',
              codeText: `
        <template>
          <div class="Wrap">
            <template v-if="iframeReady">
              <div class="Inner">
                <a-space :direction="'vertical'" :size="'middle'" style="display: flex">
                  <a-card :title="'将输入框值设置到iframe里'">
                    <a-input-group :compact="true">
                      <a-input v-model="value" style="width: calc(100% - 200px)" />
                    </a-input-group>
                    <a-button :type="'primary'" @click="onSend">发送</a-button>
                  </a-card>

                  <a-card :title="'获取iframe文档内容'">
                    <a-button :type="'primary'" @click="onGetDoc">获取</a-button>
                  </a-card>

                  <a-card :title="'上传图片到iframe里面进行显示'">
                    <a-input id="uploadImgFile" type="file" @change="onUploadChange">获取</a-input>
                  </a-card>

                  <a-card :title="'带有进度的上传一个文件给iframe'">
                    <a-input id="uploadProgressFile" type="file" @change="onUploadProgressFile" />

                    <ul>
                      <a-space :direction="'vertical'" :size="'middle'" style="display: flex">
                        <li v-for="t in uploadList" :key="t.fileId">
                          <span>{{ t.file.name }}</span>
                          <a-progress
                            :percent="Number(((t.completeSize / t.file.size) * 100).toFixed(2))"
                            :status="t.status"
                          />
                        </li>
                      </a-space>
                    </ul>
                  </a-card>
                </a-space>
              </div>
            </template>

            <div class="IframeWrap">
              <h1 style="text-align: center">Iframe</h1>
              <iframe name="server" ref="iframeRef" class="Iframe" src="/server" @load="onIframeLoad" />
            </div>
          </div>
        </template>

        <script>
        import { v4 } from 'uuid';

        import Iframe from '../index';

        const sourceOrigin = 'http://localhost:8080';
        const targetOrigin = 'http://localhost:8080';

        export default {
          data() {
            return {
              value: '',
              iframeReady: false,
              uploadList: [],
              $fetch: null,
            };
          },
          created() {
            this.$data.$fetch = new Iframe.Fetch(window, sourceOrigin);
          },
          methods: {
            onSend() {
              this.$data.$fetch.put(this.$refs.iframeRef.contentWindow, targetOrigin, '/display', {
                data: this.value,
              });
            },
            onGetDoc() {
              this.$data.$fetch
                .get(this.$refs.iframeRef.contentWindow, targetOrigin, '/getDoc', {
                  data: this.value,
                })
                .then((res) => {
                  alert(res.getBody());
                });
            },
            onUploadChange(e) {
              debugger;
              const fileEl = e.target;

              const file = fileEl.files[0];

              const reader = new FileReader();

              reader.addEventListener('load', (e1) => {
                this.$data.$fetch.put(this.$refs.iframeRef.contentWindow, targetOrigin, '/uploadImg', {
                  data: e1.target.result,
                });
              });

              reader.readAsDataURL(file);
            },
            onUploadProgressFile(e) {
              const file = e.target.files[0];

              const fileId = v4();
              const uploadItem = {
                file,
                completeSize: 0,
                status: 'active',
                fileId,
              };

              this.uploadList = [...this.uploadList, uploadItem];

              const reader = new FileReader();
              reader.addEventListener('load', (e1) => {
                const buffer = e1.target.result;

                // 段的大小 1kb
                const segmentSize = 1024;

                // 段数
                const segmentCount =
                  Math.floor(buffer.byteLength / segmentSize) +
                  (buffer.byteLength % segmentSize === 0 ? 0 : 1);

                console.log('文件名称', file.name);
                console.log('文件大小', file.size);
                console.log('上传次数', segmentCount);

                let index = 0;

                // 传递数据就是多次调用接口进行文件上传
                const upload = () => {
                  if (index >= segmentCount) {
                    const list = [...this.uploadList];
                    const item = list.find((t) => t.fileId === fileId);
                    item.status = 'success';
                    this.uploadList = list;

                    console.log(\`文件\${file.name}上传完成!\`);
                    return;
                  }

                  const uploadBuffer = buffer.slice(index * segmentSize, (index + 1) * segmentSize);

                  console.log(\`第\${index + 1}次上传开始\`);

                  this.$data.$fetch
                    .get(this.$refs.iframeRef.contentWindow, targetOrigin, '/progressUploadFile', {
                      data: {
                        segmentSize,
                        segmentCount,
                        currentIndex: index,
                        fileId,
                        fileName: file.name,
                        size: file.size,
                        buffer: uploadBuffer,
                      },
                    })
                    .then((res) => {
                      // 更新进度
                      const list = [...this.uploadList];
                      console.log(\`第\${index + 1}次上传结束\`);
                      const item = list.find((t) => t.fileId === fileId);
                      item.status = 'active';
                      item.completeSize = (index + 1) * segmentSize;

                      this.uploadList = list;

                      index++;

                      upload();
                    });
                };

                upload();
              });
              reader.readAsArrayBuffer(file);
            },
            onIframeLoad() {
              this.iframeReady = true;
            },
          },
        };
        <\/script>

        <style lang="less" scoped>
        .Wrap {
          border: 1px solid #ccc;

          > .Inner {
            padding: 20px;
          }

          .IframeWrap {
            padding: 20px;

            .Iframe {
              width: 100%;
              height: 800px;
              border: 1px solid #ccc;
            }
          }
        }
        </style>
`,
            },
            {
              title: 'server.vue',
              key: 'server.vue',
              codeText: `
        <template>
          <div class="Wrap" ref="ref">
            <a-space :direction="'vertical'" :size="'middle'" style="display: flex">
              <a-card :title="'将输入框值设置到iframe里'">
                <div>{{ displayValue }}</div>
              </a-card>

              <a-card :title="'上传图片到iframe里面进行显示'">
                <div>
                  <img v-if="!!image" :src="image" alt="" />
                </div>
              </a-card>

              <a-card :title="'带有进度的上传一个文件给iframe'">
                <ul>
                  <a-space :direction="'vertical'" :size="'middle'" style="display: flex">
                    <li
                      :key="t.fileId"
                      v-for="t in uploadList"
                      :class="t.status === 'success' ? 'Hover' : ''"
                      @click="onItemClick(t)"
                    >
                      <span>{{ t.fileName }}</span>
                      <a-progress :percent="percent(t)" :status="t.status" />
                    </li>
                  </a-space>
                </ul>
              </a-card>
            </a-space>
          </div>
        </template>

        <script>
        import FileSaver from 'file-saver';

        import Iframe from '../index';

        const sourceOrigin = 'http://localhost:8080';
        const whiteList = [sourceOrigin];

        export default {
          data() {
            return {
              displayValue: '',
              image: '',
              uploadList: [],
              $server: null,
              $router: null,
            };
          },
          created() {
            this.$data.$router = new Iframe.Router();

            this.$data.$router
              /**
               * /display
               */
              .controller('/display', (ctx, next) => {
                const body = ctx.request.getBody();
                this.displayValue = body;
                ctx.response.setStatusCode(200);
                ctx.response.setStatusMessage('ok');
                next();
              })
              /**
               * /getDoc
               */
              .controller('/getDoc', (ctx, next) => {
                ctx.response.setBody(this.$refs.ref.outerHTML);
                ctx.response.setStatusCode(200);
                ctx.response.setStatusMessage('ok');
                next();
              })
              /**
               * uploadImg
               */
              .controller('/uploadImg', (ctx, next) => {
                const body = ctx.request.getBody();
                this.image = body;
                ctx.response.setStatusCode(200);
                ctx.response.setStatusMessage('ok');
                next();
              })
              /**
               * progressUploadFile
               */
              .controller('/progressUploadFile', (ctx, next) => {
                const fileUpload = ctx.request.getBody();

                // 一个文件的开始
                if (fileUpload.currentIndex === 0) {
                  const list = [...this.uploadList];
                  list.push({
                    ...fileUpload,
                    status: 'active',
                    fileBuffer: [fileUpload.buffer],
                  });

                  this.uploadList = list;
                }
                // 一个文件的结束
                else if (fileUpload.currentIndex === fileUpload.segmentCount - 1) {
                  const list = [...this.uploadList];
                  const index = list.findIndex((t) => t.fileId === fileUpload.fileId);
                  list[index] = {
                    ...fileUpload,
                    status: 'success',
                    fileBuffer: [...list[index].fileBuffer, fileUpload.buffer],
                  };

                  this.uploadList = list;
                }
                // 中间过程
                else {
                  const list = [...this.uploadList];
                  const index = list.findIndex((t) => t.fileId === fileUpload.fileId);
                  list[index] = {
                    ...fileUpload,
                    fileBuffer: [...list[index].fileBuffer, fileUpload.buffer],
                  };

                  this.uploadList = list;
                }

                ctx.response.setStatusCode(200);
                ctx.response.setStatusMessage('ok');
                next();
              });

            this.$data.$server = new Iframe.Server(whiteList, window, sourceOrigin);

            // //
            // server.current.use((ctx, next) => {
            //   console.log(' > use1');
            //   next();
            //   console.log(' < use1');
            // });
            //
            // //
            // server.current.use((ctx, next) => {
            //   console.log(' > use2');
            //   next();
            //   console.log(' < use2');
            // });
            //
            // //
            // server.current.use(
            //   (ctx, next) =>
            //     new Promise((resolve) => {
            //       setTimeout(() => {
            //         const p = next();
            //
            //         if (p && p.then) {
            //           p.then(() => {
            //             resolve();
            //           });
            //         } else {
            //           resolve();
            //         }
            //       }, 2000);
            //     }),
            // );

            this.$data.$server.use(this.$data.$router.routers());

            this.$data.$server.start();
          },
          methods: {
            percent(t) {
              return Number(
                ((t.fileBuffer.reduce((pre, val) => pre + val.byteLength, 0) / t.size) * 100).toFixed(2),
              );
            },
            onItemClick(t) {
              if (t.status === 'success') {
                const blob = new Blob(t.fileBuffer, { type: 'application/octet-stream' });
                FileSaver.saveAs(blob, t.fileName);
              }
            },
          },
        };
        <\/script>

        <style lang="less" scoped>
        .Wrap {
          width: 100%;
          height: 100%;

          .Hover {
            &:hover {
              cursor: pointer;
            }
          }
        }
        </style>

`,
            },
          ],
          childrenSlot: 'p1',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: 'Fetch',
          data: [
            {
              name: 'constructor',
              desc: '构造函数',
              modifier: 'public',
              params: [
                {
                  name: 'source',
                  desc: '客户端的window对象',
                  type: 'MessageEventSource',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'origin',
                  desc: '客户端的origin',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'get',
              desc: 'get请求',
              modifier: 'public',
              params: [
                {
                  name: 'targetWindow',
                  desc: '服务端的window',
                  type: 'MessageEventSource',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'targetOrigin',
                  desc: '服务端的origin',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'pathname',
                  desc: 'pathname',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'options',
                  desc: '配置',
                  type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise<Response>',
              returnDesc: '',
            },
            {
              name: 'put',
              desc: 'put请求',
              modifier: 'public',
              params: [
                {
                  name: 'targetWindow',
                  desc: '服务端的window',
                  type: 'MessageEventSource',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'targetOrigin',
                  desc: '服务端的origin',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'pathname',
                  desc: 'pathname',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'options',
                  desc: '配置',
                  type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise<Response>',
              returnDesc: '',
            },
            {
              name: 'delete',
              desc: 'delete请求',
              modifier: 'public',
              params: [
                {
                  name: 'targetWindow',
                  desc: '服务端的window',
                  type: 'MessageEventSource',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'targetOrigin',
                  desc: '服务端的origin',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'pathname',
                  desc: 'pathname',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'options',
                  desc: '配置',
                  type: `{
                      data: any,
                      headers: {
                        [prop: string]: string;
                      }
                    }`,
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Promise<Response>',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'Server',
          data: [
            {
              name: 'constructor',
              desc: '构造函数',
              modifier: 'public',
              params: [
                {
                  name: 'whitelist',
                  desc: '白名单',
                  type: 'string[]',
                  defaultVal: '[]',
                  required: '',
                },
                {
                  name: 'source',
                  desc: '服务端的window',
                  type: 'MessageEventSource',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'sourceOrigin',
                  desc: '服务端的origin',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: '启动服务',
              modifier: 'public',
              params: [],
              returnType: 'Promise<void>',
              returnDesc: '',
            },
            {
              name: 'close',
              desc: '关闭服务',
              modifier: 'public',
              params: [],
              returnType: 'Promise<void>',
              returnDesc: '',
            },
            {
              name: 'use',
              desc: '添加中间件',
              modifier: 'public',
              params: [
                {
                  name: 'middleWare',
                  desc: '中间件',
                  type: 'MiddleWare | MiddleWare[]',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'self',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'Router(路由)',
          data: [
            {
              name: 'controller',
              desc: '添加控制器',
              modifier: 'public',
              params: [
                {
                  name: 'path',
                  desc: '路由地址',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'middleWare',
                  desc: '处理请求的中间件',
                  type: 'MiddleWare',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'self',
              returnDesc: '',
            },
            {
              name: 'routers',
              desc: '获取所有的中间件',
              modifier: 'public',
              params: [],
              returnType: 'MiddleWare[]',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'Compose(中间件组合)',
          data: [
            {
              name: 'Compose',
              desc: '构造函数',
              modifier: 'public',
              params: [
                {
                  name: 'middleWares',
                  desc: '中间件集合',
                  type: 'MiddleWare[]',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '(ctx, next?: () => Promise<void> | void) => Promise<void></void>',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'Request',
          data: [
            {
              name: 'constructor',
              desc: '构造函数',
              modifier: 'public',
              params: [
                {
                  name: 'options',
                  desc: '',
                  type: `
                      {
                        pathname: string;
                        headers?: {
                          [prop: string]: string;
                        };
                        statusCode?: stateCode;
                        stateMessage?: string;
                        body?: any;
                      }
                    `,
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'Response',
          data: [
            {
              name: 'constructor',
              desc: '构造函数',
              modifier: 'public',
              params: [
                {
                  name: 'options',
                  desc: '',
                  type: `
                      {
                        requestId: string;
                        headers: {
                          [prop: string]: string;
                        };
                        statusCode: stateCode;
                        stateMessage: string;
                        body: any;
                      }
                    `,
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
    };
  },
  components: {
    Client,
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
