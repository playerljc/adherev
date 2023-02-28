<template>
  <div :class="$style.Wrap" ref="ref">
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

import { IframeIO } from '@baifendian/adherev';

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
    this.$data.$router = new IframeIO.Router();

    this.$data.$router
      /**
       * /display
       */
      .controller('/display', (ctx, next) => {
        debugger
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

    this.$data.$server = new IframeIO.Server(whiteList, window, sourceOrigin);

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
</script>

<style lang="less" module>
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
