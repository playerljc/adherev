<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="PolygonSelection">
      <p>多功能选区</p>
      <ul>
        <li>- 圆形区域</li>
        <li>- 菱形区域</li>
        <li>- 多边形区域</li>
        <li>- 矩形形区域</li>
        <li>- 五角星区域</li>
        <li>- 三角形区域</li>
        <li>- 自由绘制区域</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <ImageSelect />
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import ImageSelect from './ImageSelect';

export default {
  components: {
    ImageSelect,
  },
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '图片截取',
          cardProps: {
            description: {
              title: '图片截取',
              info: '图片截取',
            },
          },
          type: 'PlayGround',
          codeText: `
<template>
  <div :class="$style.Wrap">
    <div :class="$style.Fixed">
      <ul>
        <li>
          <input
            id="file"
            accept="image/gif,image/jpeg,image/png,image/bmp"
            type="file"
            style="display: none"
          />
          <a-button type="primary" @click="onOpen()">打开</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onSaveData">保存数据</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onSetData">设置数据</a-button>
        </li>
      </ul>

      <ul>
        <li>
          <a-button type="primary" @click="onDrawCircle">圆形</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onDrawRectangle">矩形</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onDrawDiamond">菱形</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onDrawTriangle">三角形</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onDrawStart">五角星</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onDrawPolygon">多边形</a-button>
        </li>
        <li>
          <a-button type="primary" @click="onDrawFree">自由绘制</a-button>
        </li>
      </ul>
    </div>
    <div :class="$style.Auto" ref="autoRef"></div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';

import {
  PolygonSelection as PolygonSelectionModule,
  Preferences,
  MessageDialog,
} from '@baifendian/adherev';

const {
  PolygonSelection,
  PolygonDrawAction,
  CircleDrawAction,
  RectangleDrawAction,
  TriangleDrawAction,
  DiamondDrawAction,
  StartDrawAction,
  FreeDrawAction,
  CircleModifyAction,
  DiamondModifyAction,
  PolygonModifyAction,
  RectangleModifyAction,
  TriangleModifyAction,
  StartModifyAction,
  Types: { PolygonSelectionActions, ActionEvents },
} = PolygonSelectionModule;

// ActionType
const typeActionMap = new Map([
  ['Polygon', PolygonModifyAction],
  ['Circle', CircleModifyAction],
  ['Rectangle', RectangleModifyAction],
  ['Triangle', TriangleModifyAction],
  ['Diamond', DiamondModifyAction],
  ['Start', StartModifyAction],
]);

export default {
  data() {
    return {
      $polygonSelection: null,
      $imgCanvasRef: null,
    };
  },
  mounted() {
    const {
      $refs: { autoRef },
    } = this;

    // 初始化polygonSelection
    this.$data.$polygonSelection = new PolygonSelection(autoRef, [], {
      [PolygonSelectionActions.CanvasMount]: () => {
        // 初始化image显示的画布
        this.$data.$imgCanvasRef = document.createElement('canvas');
        this.$data.$imgCanvasRef.style.position = 'absolute';
        this.$data.$imgCanvasRef.style.left = '0';
        this.$data.$imgCanvasRef.style.top = '0';
        this.$data.$imgCanvasRef.style.width = '100%';
        this.$data.$imgCanvasRef.style.height = '100%';
        this.$data.$imgCanvasRef.style.zIndex = '0';
        this.$data.$imgCanvasRef.width = autoRef.offsetWidth;
        this.$data.$imgCanvasRef.height = autoRef.offsetHeight;
        autoRef.appendChild(this.$data.$imgCanvasRef);
      },
    });

    // 点击了画布中的几何图形
    this.$data.$polygonSelection.on(PolygonSelectionActions.CanvasClickGeometry, (data) => {
      const Component = typeActionMap.get(data.type);

      const action = new Component({
        selectType: data.type,
        actionType: 'Draw',
        data,
      });

      action.on(ActionEvents.End, () => {
        action.start();
      });

      this.$data.$polygonSelection.changeAction(action);

      action.start();
    });

    // 点击了画布的空位置
    this.$data.$polygonSelection.on(PolygonSelectionActions.CanvasClickEmpty, () => {
      console.log('clickEmpty');
      this.$data.$polygonSelection.clearDraw();
      this.$data.$polygonSelection.clearAssistDraw();
      this.$data.$polygonSelection.drawHistoryData();
    });

    // 打开文件
    const fileEl = document.getElementById('file');
    fileEl.addEventListener('change', () => {
      const file = fileEl.files[0];

      const read = new FileReader();
      read.onloadend = (e) => {
        const img = new Image();

        img.onload = () => {
          const ctx = this.$data.$imgCanvasRef.getContext('2d');
          ctx.clearRect(0, 0, img.width, img.height);
          ctx.drawImage(img, 0, 0, img.width, img.height);
        };

        img.src = e.target.result;
      };
      read.readAsDataURL(file);
    });
  },
  methods: {
    onOpen() {
      const fileEl = document.getElementById('file');
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      fileEl.dispatchEvent(event);
    },
    onSaveData() {
      const { $polygonSelection } = this.$data;

      // 画布的数据
      const canvasData = $polygonSelection.getHistoryData();

      if (!canvasData || !canvasData.length) {
        message.warn('画布上没有可以保存的数据！');
        return;
      }

      MessageDialog.InputPrompt({
        title: '数据名称',
        config: {
          rule: [
            {
              title: '数据名称',
              field: 'dataName',
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
            const localData = Preferences.getObjectByLocal('polygonSelectionData') || [];

            // 添加画布数据
            localData.push({
              id: new Date().getTime(),
              name: value,
              data: canvasData,
            });

            Preferences.putObjectByLocal('polygonSelectionData', localData);
            message.success('保存成功！');
            resolve();
          });
        },
      });
    },
    onSetData() {
      const self = this;

      const localData = Preferences.getObjectByLocal('polygonSelectionData') || [];

      const el = MessageDialog.Modal({
        config: {
          title: '设置数据',
        },
        defaultCloseBtn: false,
        children: {
          computed: {
            localData() {
              return localData;
            },
            columns() {
              return [
                {
                  title: '名称',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '操作',
                  dataIndex: 'option',
                  key: 'option',
                  scopedSlots: { customRender: 'option' },
                },
              ];
            },
          },
          methods: {
            onDelete(record) {
              const index = localData.findIndex((data) => data.id === record.id);
              if (index !== -1) {
                localData.splice(index, 1);
                Preferences.putObjectByLocal('polygonSelectionData', localData);
                message.success('删除成功！');
                MessageDialog.close(el);
              }
            },
            onOpen(record) {
              message.success('操作成功！');
              MessageDialog.close(el);
              const { data } = record;
              const { $polygonSelection } = self.$data;
              $polygonSelection.setHistoryData(data);
              $polygonSelection.clearDraw();
              $polygonSelection.drawHistoryData();
            },
          },
          template: \`
             <div style="width: 100%;">
              <a-table rowKey="id" :columns="columns" :data-source="localData" :pagination="false">
                <div
                  slot="option"
                  slot-scope="text, record, index"
                  style="display: flex;align-items: center; height: 15px;"
                >
                  <a @click="onDelete(record,index)">删除</a>
                  <adv-split direction="horizontal" />
                  <a @click="onOpen(record,index)">打开</a>
                </div>
              </a-table>
            </div>
          \`,
        },
      });
    },
    onDrawCircle() {
      const { $polygonSelection } = this.$data;
      const action = new CircleDrawAction();
      action.on(ActionEvents.End, (data) => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
    onDrawRectangle() {
      const { $polygonSelection } = this.$data;
      const action = new RectangleDrawAction();
      action.on(ActionEvents.End, (data) => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
    onDrawDiamond() {
      const { $polygonSelection } = this.$data;
      const action = new DiamondDrawAction();
      action.on(ActionEvents.End, (data) => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
    onDrawTriangle() {
      const { $polygonSelection } = this.$data;
      const action = new TriangleDrawAction();
      action.on(ActionEvents.End, (data) => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
    onDrawStart() {
      const { $polygonSelection } = this.$data;
      const action = new StartDrawAction();
      action.on(ActionEvents.End, (data) => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
    onDrawPolygon() {
      const { $polygonSelection } = this.$data;
      const action = new PolygonDrawAction();
      action.on(ActionEvents.End, (data) => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
    onDrawFree() {
      const { $polygonSelection } = this.$data;
      const action = new FreeDrawAction();
      action.on(ActionEvents.End, () => {
        action.start();
      });
      $polygonSelection.changeAction(action);
      action.start();
    },
  },
};
<\/script>

<style lang="less" module>
.Wrap {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.Fixed {
  flex-shrink: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  > ul {
    margin: 0;
    padding: 20px;
    list-style: none;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    > li {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      /deep/ .ant-btn {
        width: 100%;
      }
    }
  }
}

.Auto {
  position: relative;
  flex-grow: 1;
  min-width: 0;
}
</style>
`,
          childrenSlot: 'p1',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: 'PolygonSelection',
          data: [
            {
              name: 'getCtx',
              desc: 'getCtx',
              modifier: 'public',
              params: [],
              returnType: 'CanvasRenderingContext2D | null',
              returnDesc: '',
            },
            {
              name: 'getCanvasEl',
              desc: 'getCanvasEl',
              modifier: 'public',
              params: [],
              returnType: 'HTMLCanvasElement | null',
              returnDesc: '',
            },
            {
              name: 'getAssistCtx',
              desc: 'getAssistCtx',
              modifier: 'public',
              params: [],
              returnType: 'CanvasRenderingContext2D | null',
              returnDesc: '',
            },
            {
              name: 'getAssistCanvasEl',
              desc: 'getAssistCanvasEl',
              modifier: 'public',
              params: [],
              returnType: 'HTMLCanvasElement | null',
              returnDesc: '',
            },
            {
              name: 'getWidth',
              desc: 'getWidth',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
            {
              name: 'getHeight',
              desc: 'getHeight',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
            {
              name: 'addHistoryData',
              desc: '添加一个ActionData到canvasData中',
              modifier: 'public',
              params: [
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IActionData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'removeHistoryDataById',
              desc: '删除一个ActionData中的数据',
              modifier: 'public',
              params: [
                {
                  name: 'actionDataId',
                  desc: 'actionDataId',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'IActionData[]',
              returnDesc: '',
            },
            {
              name: 'drawHistoryData',
              desc: '绘制历史数据',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getHistoryDataById',
              desc: '获取历史数据',
              modifier: 'public',
              params: [
                {
                  name: 'id',
                  desc: 'id',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'IActionData | null | undefined ',
              returnDesc: '',
            },
            {
              name: 'getHistoryData',
              desc: '获取历史数据',
              modifier: 'public',
              params: [],
              returnType: 'IActionData[]',
              returnDesc: '',
            },
            {
              name: 'setHistoryData',
              desc: '设置历史数据',
              modifier: 'public',
              params: [
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IActionData[]',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'changeAction',
              desc: '切换一个Action',
              modifier: 'public',
              params: [
                {
                  name: 'action',
                  desc: 'action对象',
                  type: 'IAction',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getCurAction',
              desc: '获取当前的Action',
              modifier: 'public',
              params: [],
              returnType: 'IAction | null',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: '开始',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: '样式',
                  type: 'IStyle',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: '结束',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearDraw',
              desc: 'clearDraw',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearAssistDraw',
              desc: 'clearAssistDraw',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setFrontCanvas',
              desc: '置顶',
              modifier: 'public',
              params: [
                {
                  name: 'canvasEl',
                  desc: 'canvasEl',
                  type: 'HTMLCanvasElement',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setBackCanvas',
              desc: '置底',
              modifier: 'public',
              params: [
                {
                  name: 'canvasEl',
                  desc: 'canvasEl',
                  type: 'HTMLCanvasElement',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: '销毁',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'CircleDrawAction',
          data: [
            {
              name: 'booleanPointInData',
              desc: 'booleanPointInData',
              modifier: 'static',
              params: [
                {
                  name: 'point',
                  desc: 'point',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'ICircleData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'ICircleData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: `
                  {
                    center: IPoint;
                    radius: number;
                  }
                `,
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'DiamondDrawAction',
          data: [
            {
              name: 'booleanPointInData',
              desc: 'booleanPointInData',
              modifier: 'static',
              params: [
                {
                  name: 'point',
                  desc: 'point',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IDiamondData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IDiamondData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: `
                  {
                    leftTopPoint: IPoint | null;
                    width: number;
                    height: number;
                  }
                `,
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'FreeDrawAction',
          data: [
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IFreeData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: `
                  {
                    points: IPoint[];
                  }
                `,
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'PolygonDrawAction',
          data: [
            {
              name: 'booleanPointInData',
              desc: 'booleanPointInData',
              modifier: 'static',
              params: [
                {
                  name: 'point',
                  desc: 'point',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IPolygonData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IPolygonData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IPoint[]',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'RectangleDrawAction',
          data: [
            {
              name: 'booleanPointInData',
              desc: 'booleanPointInData',
              modifier: 'static',
              params: [
                {
                  name: 'point',
                  desc: 'point',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IRectangleData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IRectangleData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: `
                  {
                    leftTopPoint: IPoint | null;
                    width: number;
                    height: number;
                  }
                `,
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'StartDrawAction',
          data: [
            {
              name: 'booleanPointInData',
              desc: 'booleanPointInData',
              modifier: 'static',
              params: [
                {
                  name: 'point',
                  desc: 'point',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IStartData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'IStartData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: `
                  {
                    center: IPoint;
                    outRadius: number;
                    innerRadius: number;
                  }
                `,
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'TriangleDrawAction',
          data: [
            {
              name: 'booleanPointInData',
              desc: 'booleanPointInData',
              modifier: 'static',
              params: [
                {
                  name: 'point',
                  desc: 'point',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'ITriangleData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'draw',
              desc: 'draw',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: 'ITriangleData',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawHistoryPath',
              desc: '绘制历史数据',
              modifier: 'static',
              params: [
                {
                  name: 'ctx',
                  desc: 'ctx',
                  type: 'CanvasRenderingContext2D',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'data',
                  desc: 'data',
                  type: `
                  {
                    points: IPoint[];
                  }
                `,
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [
                {
                  name: 'style',
                  desc: 'style',
                  type: 'IStyle',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: '获取状态',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'CircleModifyAction',
          data: [
            {
              name: 'isCanMove',
              desc: 'isCanMove',
              modifier: 'public',
              params: [
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [
                {
                  name: 'startPoint',
                  desc: 'startPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },

            {
              name: 'initMoveEvents',
              desc: 'initMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearMoveEvents',
              desc: 'clearMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousedown',
              desc: 'onMoveMousedown',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousemove',
              desc: 'onMoveMousemove',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMouseup',
              desc: 'onMoveMouseup',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: 'getStatus',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'DiamondModifyAction',
          data: [
            {
              name: 'isCanMove',
              desc: 'isCanMove',
              modifier: 'public',
              params: [
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [
                {
                  name: 'startPoint',
                  desc: 'startPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },

            {
              name: 'initMoveEvents',
              desc: 'initMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearMoveEvents',
              desc: 'clearMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousedown',
              desc: 'onMoveMousedown',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousemove',
              desc: 'onMoveMousemove',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMouseup',
              desc: 'onMoveMouseup',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: 'getStatus',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'PolygonModifyAction',
          data: [
            {
              name: 'isCanMove',
              desc: 'isCanMove',
              modifier: 'public',
              params: [
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [
                {
                  name: 'startPoint',
                  desc: 'startPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },

            {
              name: 'initMoveEvents',
              desc: 'initMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearMoveEvents',
              desc: 'clearMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousedown',
              desc: 'onMoveMousedown',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousemove',
              desc: 'onMoveMousemove',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMouseup',
              desc: 'onMoveMouseup',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: 'getStatus',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'RectangleModifyAction',
          data: [
            {
              name: 'isCanMove',
              desc: 'isCanMove',
              modifier: 'public',
              params: [
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [
                {
                  name: 'startPoint',
                  desc: 'startPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },

            {
              name: 'initMoveEvents',
              desc: 'initMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearMoveEvents',
              desc: 'clearMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousedown',
              desc: 'onMoveMousedown',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousemove',
              desc: 'onMoveMousemove',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMouseup',
              desc: 'onMoveMouseup',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: 'getStatus',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'StartModifyAction',
          data: [
            {
              name: 'isCanMove',
              desc: 'isCanMove',
              modifier: 'public',
              params: [
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [
                {
                  name: 'startPoint',
                  desc: 'startPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },

            {
              name: 'initMoveEvents',
              desc: 'initMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearMoveEvents',
              desc: 'clearMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousedown',
              desc: 'onMoveMousedown',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousemove',
              desc: 'onMoveMousemove',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMouseup',
              desc: 'onMoveMouseup',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: 'getStatus',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'TriangleModifyAction',
          data: [
            {
              name: 'isCanMove',
              desc: 'isCanMove',
              modifier: 'public',
              params: [
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'boolean',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'drawMoveGeometry',
              desc: 'drawMoveGeometry',
              modifier: 'public',
              params: [
                {
                  name: 'startPoint',
                  desc: 'startPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'targetPoint',
                  desc: 'targetPoint',
                  type: 'IPoint',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },

            {
              name: 'initMoveEvents',
              desc: 'initMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'clearMoveEvents',
              desc: 'clearMoveEvents',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousedown',
              desc: 'onMoveMousedown',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMousemove',
              desc: 'onMoveMousemove',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'onMoveMouseup',
              desc: 'onMoveMouseup',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'start',
              desc: 'start',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'end',
              desc: 'end',
              modifier: 'public',
              params: [
                {
                  name: 'e',
                  desc: 'e',
                  type: 'MouseEvent',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'destroy',
              desc: 'destroy',
              modifier: 'public',
              params: [],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'setContext',
              desc: 'setContext',
              modifier: 'public',
              params: [
                {
                  name: 'context',
                  desc: 'context',
                  type: 'IPolygonSelection',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStatus',
              desc: 'getStatus',
              modifier: 'public',
              params: [],
              returnType: 'number',
              returnDesc: '',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
