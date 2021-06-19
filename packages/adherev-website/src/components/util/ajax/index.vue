<template>
  <div class="Page">
    <h1>Ajax</h1>

    <function-props
      :data="[
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
      ]"
    />

    <h2>ISendArg</h2>
    <props
      :data="[
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
      ]"
    />

    <h2>get</h2>
    <playground>
      <a-button type="primary" @click="onCode1F1">call</a-button>
    </playground>

    <h2>post</h2>
    <playground>
      <a-button type="primary" @click="onCode2F1">call</a-button>
    </playground>

    <h2>upload</h2>
    <playground>
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
    </playground>

    <h2>PromiseAll</h2>
    <playground>
      <a-button type="primary" @click="onCode4F1">call</a-button>
    </playground>
  </div>
</template>
<script>
import { Ajax, GlobalIndicator } from '@baifendian/adherev';

const k007Ajax = new Ajax('http://k007-pe.baifendian.com');

const uploadFormFef = null;
const uploadRef = null;

export default {
  data() {
    return {
      img: null,
      percent: 0,
    };
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
