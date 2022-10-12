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

import { IframeIO } from '@baifendian/adherev';

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
    this.$data.$fetch = new IframeIO.Fetch(window, sourceOrigin);
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

            console.log(`文件${file.name}上传完成!`);
            return;
          }

          const uploadBuffer = buffer.slice(index * segmentSize, (index + 1) * segmentSize);

          console.log(`第${index + 1}次上传开始`);

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
              console.log(`第${index + 1}次上传结束`);
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
</script>

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
