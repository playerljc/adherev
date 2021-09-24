<template>
  <div class="Page BMap">
    <h1>BMap</h1>
    <p>百度地图</p>

    <h3>基本地图组件</h3>
    <playground>
      <div :class="$style.BMapWrap">
        <adv-bmap ref="baseMapRef" :zoom="6" :externalImportBMapScript="true" />
      </div>
    </playground>

    <h3>风场</h3>
    <playground>
      <div :class="$style.ToolBar">
        <a-button type="primary" @click="onAddWindLayer">加入风场</a-button>
      </div>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="winLayerRef"
          :zoom="2"
          :externalImportBMapScript="true"
          @onBMapInitReady="onWindMapInitReady"
        />
      </div>
    </playground>

    <h3>热力图</h3>
    <playground>
      <div :class="$style.ToolBar">
        <a-button type="primary" @click="onAddHotLayer">加入热力图</a-button>
      </div>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="hotLayerRef"
          :zoom="5"
          :externalImportBMapScript="true"
          @onBMapInitReady="onHotMapInitReady"
        />
      </div>
    </playground>

    <h3>气压</h3>
    <playground>
      <div :class="$style.ToolBar">
        <a-button type="primary" @click="onAddAirPressureLayer">加入气压</a-button>
      </div>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="airPressureRef"
          :zoom="2"
          :externalImportBMapScript="true"
          @onBMapInitReady="onAirPressureMapInitReady"
        />
      </div>
    </playground>

    <dl>
      <dt>
        <h1>几何图形绘制</h1>
      </dt>

      <dd>
        <h3>绘制点</h3>
        <playground>
          <div :class="$style.ToolBar">
            <span>点的类型：</span>
            <a-select style="width: 200px" v-model="pointType" @change="onPointTypeChange($event)">
              <a-select-option value="-1">请选择</a-select-option>
              <a-select-option value="circle">圆形点</a-select-option>
              <a-select-option value="image">image</a-select-option>
              <a-select-option value="regularPolygon">regularPolygon</a-select-option>
              <a-select-option value="start">start</a-select-option>
              <a-select-option value="sector">sector</a-select-option>
              <a-select-option value="rect">rect</a-select-option>
              <a-select-option value="radiusRect">radiusRect</a-select-option>
              <a-select-option value="leaf">leaf</a-select-option>
            </a-select>
          </div>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="pointLayerRef"
              :zoom="12"
              :externalImportBMapScript="true"
              @onBMapInitReady="onPointLayerMapInitReady"
            />
          </div>
        </playground>

        <h3>多个点</h3>
        <playground>
          <div :class="$style.ToolBar">
            <span>点的类型：</span>
            <a-select
              style="width: 200px"
              v-model="pointType"
              @change="onMulitPointTypeChange($event)"
            >
              <a-select-option value="-1">请选择</a-select-option>
              <a-select-option value="circle">圆形点</a-select-option>
              <a-select-option value="image">image</a-select-option>
              <a-select-option value="regularPolygon">regularPolygon</a-select-option>
              <a-select-option value="start">start</a-select-option>
              <a-select-option value="sector">sector</a-select-option>
              <a-select-option value="rect">rect</a-select-option>
              <a-select-option value="radiusRect">radiusRect</a-select-option>
              <a-select-option value="leaf">leaf</a-select-option>
            </a-select>
          </div>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="mulitPointLayerRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onMulitPointLayerMapInitReady"
            />
          </div>
        </playground>

        <h3>各种几何图形</h3>
        <playground>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="geometryLayerRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onGeometryMapInitReady"
            />
          </div>
        </playground>

        <h3>多边形</h3>
        <playground>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="polygonLayerRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onPolygonMapInitReady"
            />
          </div>
        </playground>

        <h3>多个多边形</h3>
        <playground>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="mulitPolygonLayerRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onMulitPolygonMapInitReady"
            />
          </div>
        </playground>

        <h3>线</h3>
        <playground>
          <div :class="$style.ToolBar">
            <a-select
              style="width: 200px"
              v-model="lineStringType"
              @change="onLineStringTypeChange($event)"
            >
              <a-select-option value="-1">请选择</a-select-option>
              <a-select-option value="base">无箭头</a-select-option>
              <a-select-option value="fromArrow">开始剪头</a-select-option>
              <a-select-option value="toArrow">结束箭头</a-select-option>
              <a-select-option value="betweenArrow">双向箭头</a-select-option>
            </a-select>
          </div>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="lineStringRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onLineStringMapInitReady"
            />
          </div>
        </playground>

        <h3>正多边形</h3>
        <playground>
          <div :class="$style.ToolBar">
            <a-select
              style="width: 200px"
              v-model="regularPolygonCount"
              @change="onRegularPolygonChange($event)"
            >
              <a-select-option value="-1">请选择</a-select-option>
              <a-select-option value="4">4</a-select-option>
              <a-select-option value="5">5</a-select-option>
              <a-select-option value="6">6</a-select-option>
              <a-select-option value="7">7</a-select-option>
            </a-select>
          </div>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="regularPolygonRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onRegularPolygonMapInitReady"
            />
          </div>
        </playground>

        <h3>n叶草</h3>
        <playground>
          <div :class="$style.ToolBar">
            <a-select style="width: 200px" v-model="leafCount" @change="onLeafCountChange($event)">
              <a-select-option value="-1">请选择</a-select-option>
              <a-select-option value="6">6</a-select-option>
              <a-select-option value="7">7</a-select-option>
              <a-select-option value="8">8</a-select-option>
              <a-select-option value="9">9</a-select-option>
              <a-select-option value="10">10</a-select-option>
            </a-select>
          </div>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="leafRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onLeafMapInitReady"
            />
          </div>
        </playground>

        <h3>文字</h3>
        <playground>
          <div :class="$style.ToolBar">
            <a-select style="width: 200px" v-model="textCount" @change="onTextCountChange($event)">
              <a-select-option value="-1">请选择</a-select-option>
              <a-select-option value="text">文字</a-select-option>
              <a-select-option value="geomText">几何图形中的文字</a-select-option>
            </a-select>
          </div>
          <div :class="$style.BMapWrap">
            <adv-bmap
              ref="textRef"
              :zoom="5"
              :externalImportBMapScript="true"
              @onBMapInitReady="onTextMapInitReady"
            />
          </div>
        </playground>
      </dd>
    </dl>

    <h3>GeoJSON</h3>
    <playground>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="geoJSONRef"
          :zoom="5"
          :externalImportBMapScript="true"
          @onBMapInitReady="onGeoJSONPressureMapInitReady"
        />
      </div>
    </playground>

    <h3>交互式绘制</h3>
    <playground>
      <div :class="$style.ToolBar">
        <a-select
          style="width: 200px"
          v-model="interactionValue"
          @change="onInteractionChange($event)"
        >
          <a-select-option value="-1">请选择</a-select-option>
          <a-select-option value="Circle">圆</a-select-option>
          <a-select-option value="Diamond">菱形</a-select-option>
          <a-select-option value="Free">自由绘制</a-select-option>
          <a-select-option value="Polygon">多边形</a-select-option>
          <a-select-option value="Rectangle">矩形</a-select-option>
          <a-select-option value="Start">五角星</a-select-option>
          <a-select-option value="Triangle">三角形</a-select-option>
        </a-select>
      </div>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="interactionRef"
          :zoom="5"
          :externalImportBMapScript="true"
          @onBMapInitReady="onInteractionMapInitReady"
        />
      </div>
    </playground>

    <h3>测距</h3>
    <playground>
      <div :class="$style.ToolBar">
        <a-button type="primary" @click="onRangingStart">开始</a-button>
      </div>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="rangingRef"
          :zoom="5"
          :externalImportBMapScript="true"
          @onBMapInitReady="onRangingMapInitReady"
        />
      </div>
    </playground>

    <h3>轨迹回放</h3>
    <playground>
      <div :class="$style.ToolBar">
        <a-button type="primary" @click="onTrajectoryStart">开始</a-button>
        <a-button type="primary" @click="onTrajectoryOther">
          <span v-if="isTrajectorPause">恢复</span>
          <span v-else>暂停</span>
        </a-button>
      </div>
      <div :class="$style.BMapWrap">
        <adv-bmap
          ref="trajectoryRef"
          :zoom="5"
          :externalImportBMapScript="true"
          @onBMapInitReady="onTrajectoryMapInitReady"
        />
      </div>
    </playground>
  </div>
</template>

<script>
import { v1 } from 'uuid';
import { BMap, MessageDialog } from '@baifendian/adherev';

import citys from './data/citys.json';
import isoline from './data/isoline';
import icon from './站点.svg';

const {
  BMapWindLayer,
  BMapAirPressureLayer,
  HeatMapLayer,
  Vector: {
    Feature,
    InnerTextFeature,
    VectorLayer,
    VectorSource,
    Trajectory: { Trajectory, TrajectoryPlayBackLayer },
    Interaction: {
      InteractionLayer,
      CircleDrawAction,
      DiamondDrawAction,
      FreeDrawAction,
      PolygonDrawAction,
      DistanceDrawAction,
      RectangleDrawAction,
      StartDrawAction,
      TriangleDrawAction,
      CircleModifyAction,
      DiamondModifyAction,
      PolygonModifyAction,
      RectangleModifyAction,
      StartModifyAction,
      TriangleModifyAction,
      Types: InteractionTypes,
    },
    Geom: {
      PointGeometry,
      MulitPointGeometry,
      PolygonGeometry,
      MulitPolygonGeometry,
      LineStringGeometry,
      // 正多边形
      RegularPolygonGeometry,
      // 矩形
      RectGeometry,
      // 圆角矩形
      RadiusRectGeometry,
      // 圆形
      CircleGeometry,
      // 扇形
      SectorGeometry,
      // 五角星
      StartGeometry,
      // n叶草
      LeafGeometry,
      // 文字
      TextGeometry,
    },
  },
  Util,
} = BMap;

const interactionModifyTypeActionMap = new Map([
  ['Polygon', PolygonModifyAction],
  ['Circle', CircleModifyAction],
  ['Rectangle', RectangleModifyAction],
  ['Triangle', TriangleModifyAction],
  ['Diamond', DiamondModifyAction],
  ['Start', StartModifyAction],
]);

const interactionDrawTypeActionMap = new Map([
  ['Polygon', PolygonDrawAction],
  ['Circle', CircleDrawAction],
  ['Rectangle', RectangleDrawAction],
  ['Triangle', TriangleDrawAction],
  ['Diamond', DiamondDrawAction],
  ['Free', FreeDrawAction],
  ['Start', StartDrawAction],
]);

const defaultStyle = {
  lineWidth: 1,
  strokeStyle: 'yellow',
  fillStyle: 'red',
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function createVectorLayer({ context, overlay, ref, source, zIndex }) {
  if (context[overlay]) return;

  const map = ref.getMap();

  context[source] = new VectorSource([]);
  context[overlay] = new VectorLayer(map, {
    paneName: 'vertexPane',
    zIndex,
    source: context[source],
  });

  map.addOverlay(context[overlay]);
}

function createInteractionLayer({ context, overlay, ref, defaultData, listeners }) {
  if (context[overlay]) return;

  const map = ref.getMap();

  context[overlay] = new InteractionLayer(map, defaultData || [], listeners || {});

  map.addOverlay(context[overlay]);
}

export default {
  data() {
    return {
      interactionValue: '-1',
      isTrajectorPause: false,
      pointType: '-1',
      $windLayerOverlay: null,
      $hotLayerOverlay: null,
      $airPressureOverlay: null,
      $geoJSONOverlay: null,
      $geoJSONSource: null,
      $interactionLayer: null,
      $rangingOverlay: null,
      $trajectoryPlayBackLayerRef: null,
      $trajector: null,
      $trajectorDuration: 60 * 2,
      $pointLayerOverlay: null,
      $pointLayerSource: null,
      $mulitPointLayerRef: null,
      $mulitPointLayerOverlay: null,
      $mulitPointLayerSource: null,
      $preMulitPointFeature: null,
      mulitPointType: '-1',
      $geometryLayerRef: null,
      $geometryLayerOverlay: null,
      $geometryLayerSource: null,
      $polygonLayerRef: null,
      $polygonLayerOverlay: null,
      $polygonLayerSource: null,
      $mulitPolygonLayerRef: null,
      $mulitPolygonOverlay: null,
      $mulitPolygonSource: null,
      $lineStringRef: null,
      $lineStringOverlay: null,
      $lineStringSource: null,
      $preLineStringFeature: null,
      lineStringType: '-1',
      $regularPolygonRef: null,
      $regularPolygonOverlay: null,
      $regularPolygonSource: null,
      $preRegularPolygonFeature: null,
      regularPolygonCount: '-1',
      $leafRef: null,
      $leafOverlay: null,
      $leafSource: null,
      $preLeafFeature: null,
      leafCount: '-1',
      $textRef: null,
      $textOverlay: null,
      $textSource: null,
      $preTextFeature: null,
      textCount: '-1',
    };
  },
  methods: {
    onAddWindLayer() {
      const { winLayerRef } = this.$refs;

      const map = winLayerRef.getMap();

      if (this.$data.$windLayerOverlay) {
        map.removeOverlay(this.$data.$windLayerOverlay);
        this.$data.$windLayerOverlay = null;
      }

      this.$data.$windLayerOverlay = new BMapWindLayer();
      map.addOverlay(this.$data.$windLayerOverlay);
    },
    onWindMapInitReady() {
      this.$refs.winLayerRef.getMap().enableScrollWheelZoom(true);
    },
    onAddHotLayer() {
      const { hotLayerRef } = this.$refs;
      const map = hotLayerRef.getMap();

      if (this.$data.$hotLayerOverlay) {
        map.removeOverlay(this.$data.$hotLayerOverlay);
        this.$data.$hotLayerOverlay = null;
      }

      const points = citys.map((t) => {
        return {
          lng: t[0],
          lat: t[1],
          count: getRandomArbitrary(1, 100),
        };
      });

      this.$data.$hotLayerOverlay = new HeatMapLayer({ radius: 10, visible: true });

      map.addOverlay(this.$data.$hotLayerOverlay);

      this.$data.$hotLayerOverlay.setDataSet({ data: points, max: 100 });
    },
    onHotMapInitReady() {
      this.$refs.hotLayerRef.getMap().enableScrollWheelZoom(true);
    },
    onAddAirPressureLayer() {
      const { airPressureRef } = this.$refs;
      const map = airPressureRef.getMap();

      if (this.$data.$airPressureOverlay) {
        map.removeOverlay(this.$data.$airPressureOverlay);
        this.$data.$airPressureOverlay = null;
      }

      const data = [];

      for (let i = 0; i < isoline.length; i++) {
        const bPoints = [];

        const { points } = isoline[i];

        points.forEach((p, index) => {
          if (index % 2 === 1) {
            bPoints.push({ lng: points[index - 1], lat: p });
          }
        });

        data.push(bPoints);
      }

      this.$data.$airPressureOverlay = new BMapAirPressureLayer({
        map,
        data,
        paneName: 'markerShadow',
        zIndex: 2,
        style: {
          strokeStyle: '#ccc',
          lineJoin: 'round',
          lineWidth: 1,
        },
      });

      map.addOverlay(this.$data.$airPressureOverlay);
    },
    onAirPressureMapInitReady() {
      this.$refs.airPressureRef.getMap().enableScrollWheelZoom(true);
    },
    onGeoJSONPressureMapInitReady() {
      const { geoJSONRef } = this.$refs;

      const map = geoJSONRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$geoJSONOverlay',
        ref: geoJSONRef,
        source: '$geoJSONSource',
        zIndex: 9999,
      });

      this.$data.$geoJSONSource.appendGeoJSON(
        {
          type: 'GeometryCollection',
          geometries: [
            {
              type: 'Point',
              coordinates: [100.624066094, 36.2843638038],
            },
            {
              type: 'LineString',
              coordinates: [
                [121.48789948, 31.24916171],
                [123.471095, 41.6862],
              ],
            },
            {
              type: 'Polygon',
              coordinates: citys.map((city) => [city[0], city[1]]),
            },
          ],
        },
        (geom) => {
          const feature = new Feature();
          feature.setGeometry(geom);

          feature.setStyle({
            lineWidth: 1,
            strokeStyle: 'yellow',
            fillStyle: 'red',

            pointType: 'circle',
            radius: 30,

            arrow: {
              // 是否绘制
              draw: true,
              // 箭头方向 箭头绘制在开始 | 结束 | 双向
              direction: 'bothEnds',
              // 箭头的类型 尖的箭头，还是方形的箭头
              type: 'normal',
              // 箭头的大小 小 | 中 | 大
              size: 'normal',
            },
          });

          return feature;
        },
      );
    },
    onInteractionChange(value) {
      this.interactionValue = value;

      if (value === '-1') {
        this.$data.$interactionLayer.changeAction(null);
        return;
      }
      this.$data.$interactionLayer.changeAction(null);

      const DrawActionComponent = interactionDrawTypeActionMap.get(value);
      const action = new DrawActionComponent();
      action.on(InteractionTypes.ActionEvents.End, ({ data }) => {
        const Component = interactionModifyTypeActionMap.get(data.type);
        const mAction = new Component({
          selectType: data.type,
          actionType: 'Draw',
          data,
        });

        mAction.on(InteractionTypes.ActionEvents.End, () => {
          mAction.start();
        });

        this.$data.$interactionLayer.changeAction(mAction);

        mAction.start();
      });
      this.$data.$interactionLayer.changeAction(action);
      action.start();
    },
    onInteractionMapInitReady() {
      const { interactionRef } = this.$refs;

      const map = interactionRef.getMap();
      map.enableScrollWheelZoom(true);

      createInteractionLayer({
        context: this.$data,
        overlay: '$interactionLayer',
        ref: interactionRef,
        defaultData: [],
        listeners: {
          [InteractionTypes.InteractionLayerActions.CanvasMount]: () => {
            // 点击了画布中的几何图形
            this.$data.$interactionLayer.emitter.on(
              InteractionTypes.InteractionLayerActions.CanvasClickGeometry,
              (data) => {
                const Component = interactionModifyTypeActionMap.get(data.type);

                const action = new Component({
                  selectType: data.type,
                  actionType: 'Draw',
                  data,
                });

                action.on(InteractionTypes.ActionEvents.End, () => {
                  action.start();
                });

                this.$data.$interactionLayer.changeAction(action);

                action.start();
              },
            );

            // 点击了画布的空位置
            this.$data.$interactionLayer.emitter.on(
              InteractionTypes.InteractionLayerActions.CanvasClickEmpty,
              () => {
                this.$data.$interactionLayer.changeAction(null);
              },
            );
          },
        },
      });
    },
    onRangingStart() {
      this.$data.$rangingOverlay.changeAction(null);

      const action = new DistanceDrawAction();
      action.on(InteractionTypes.ActionEvents.End, (data) => {
        // action.start();
      });
      this.$data.$rangingOverlay.changeAction(action);
      action.start();
    },
    onRangingMapInitReady() {
      const { rangingRef } = this.$refs;

      const map = rangingRef.getMap();
      map.enableScrollWheelZoom(true);

      createInteractionLayer({
        context: this.$data,
        overlay: '$rangingOverlay',
        ref: rangingRef,
        defaultData: [],
        listeners: {
          [InteractionTypes.InteractionLayerActions.CanvasMount]: () => {},
        },
      });
    },
    onTrajectoryStart() {
      MessageDialog.NumberPrompt({
        title: '提示',
        config: {
          rule: [
            {
              title: '完成事件(秒)',
              field: 'zk81ligvtzlpq',
              value: `${60 * 2}`,
              wrap: {
                labelCol: { span: 10 },
                wrapperCol: { span: 14 },
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
            if (this.$data.$trajector) {
              this.isTrajectorPause = false;
              this.$data.$trajectoryPlayBackLayerRef.removeTrajectory(this.$data.$trajector);
            }

            this.$data.$trajectorDuration = parseInt(value);

            this.$data.$trajector = new Trajectory({
              context: this.$data.$trajectoryPlayBackLayerRef,
              id: '1',
              coordinates: citys.map((t) => ({ lng: t[0], lat: t[1] })),
              duration: this.$data.$trajectorDuration,
            });

            this.$data.$trajectoryPlayBackLayerRef.addTrajectory(this.$data.$trajector);
            this.$data.$trajector.start();

            resolve();
          });
        },
      });
    },
    onTrajectoryOther() {
      if (!this.$data.$trajector) return;

      if (this.isTrajectorPause) {
        this.$data.$trajector.resume();
      } else {
        this.$data.$trajector.pause();
      }

      this.isTrajectorPause = !this.isTrajectorPause;
    },
    onTrajectoryMapInitReady() {
      const { trajectoryRef } = this.$refs;

      const map = trajectoryRef.getMap();
      this.$data.$trajectoryPlayBackLayerRef = new TrajectoryPlayBackLayer(map, {
        paneName: 'floatPane',
        zIndex: 20001,
      });

      map.addOverlay(this.$data.$trajectoryPlayBackLayerRef);
    },
    onPointTypeChange(value) {
      this.pointType = value;

      if (value === '-1') return;

      createVectorLayer({
        context: this.$data,
        overlay: '$pointLayerOverlay',
        ref: this.$refs.pointLayerRef,
        source: '$pointLayerSource',
        zIndex: 9999,
      });

      const pointGeom = new PointGeometry({ lng: 121.487899486, lat: 31.24916171 });

      const id = `${new Date().getTime()}`;
      const feature = new Feature({
        name: id,
        id,
        geometry: pointGeom,
        style: {
          lineWidth: 1,
          strokeStyle: 'yellow',
          fillStyle: 'red',
          radius: 30,
          img: {
            src: icon,
            width: 32,
            height: 32,
          },
          regularPolygon: {
            n: 3,
            size: 10,
          },
          start: {
            innerRadius: 20 / 2,
            outRadius: 20,
          },
          sector: {
            radius: 20,
            angle1: 180,
            angle2: 360,
          },
          rect: {
            width: 50,
            height: 50,
          },
          radiusRect: {
            width: 30,
            height: 20,
            radius: 3,
          },
          leaf: {
            n: 4,
            size: 15,
            length: 60,
          },
          pointType: value,
        },
      });

      this.$data.$pointLayerSource.addFeature(feature);

      const map = this.$refs.pointLayerRef.getMap();
      map.panTo(new window.BMap.Point(121.487899486, 31.24916171));
    },
    onPointLayerMapInitReady() {
      this.$refs.pointLayerRef.getMap().enableScrollWheelZoom(true);
    },
    onMulitPointTypeChange(value) {
      this.mulitPointType = value;
      if (value === '-1') return;

      createVectorLayer({
        context: this.$data,
        overlay: '$mulitPointLayerOverlay',
        ref: this.$refs.mulitPointLayerRef,
        source: '$mulitPointLayerSource',
        zIndex: 9999,
      });

      if (this.$data.$preMulitPointFeature) {
        this.$data.$mulitPointLayerSource.removeFeature(this.$data.$preMulitPointFeature);
      }

      const mulitPointGemo = new MulitPointGeometry(
        citys.map((city) => ({
          lng: city[0],
          lat: city[1],
        })),
      );

      const id = `${new Date().getTime()}`;
      this.$data.$preMulitPointFeature = new Feature({
        name: id,
        id,
        geometry: mulitPointGemo,
        style: {
          lineWidth: 1,
          strokeStyle: 'yellow',
          fillStyle: 'red',
          radius: 10,
          img: {
            src: icon,
            width: 32,
            height: 32,
          },
          regularPolygon: {
            n: 3,
            size: 10,
          },
          start: {
            innerRadius: 20 / 2,
            outRadius: 20,
          },
          sector: {
            radius: 20,
            angle1: 180,
            angle2: 360,
          },
          rect: {
            width: 30,
            height: 20,
          },
          radiusRect: {
            width: 30,
            height: 20,
            radius: 3,
          },
          leaf: {
            n: 4,
            size: 15,
            length: 60,
          },
          pointType: value,
        },
      });

      this.$data.$mulitPointLayerSource.addFeature(this.$data.$preMulitPointFeature);
    },
    onMulitPointLayerMapInitReady() {
      this.$refs.mulitPointLayerRef.getMap().enableScrollWheelZoom(true);
    },
    onGeometryMapInitReady() {
      this.$refs.geometryLayerRef.getMap().enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$geometryLayerOverlay',
        ref: this.$refs.geometryLayerRef,
        source: '$geometryLayerSource',
        zIndex: 9999,
      });

      const geom = new Map([
        // 正多边形
        [
          0,
          {
            getGeom: (point) =>
              new RegularPolygonGeometry({
                n: [4, 5, 6, 7][Math.floor(Math.random() * 4)],
                center: point,
                size: 2000,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
        // 矩形
        [
          1,
          {
            getGeom: (point) =>
              new RectGeometry({
                leftTop: point,
                width: 2000,
                height: 3000,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
        // 圆角矩形
        [
          2,
          {
            getGeom: (point) =>
              new RadiusRectGeometry({
                leftTop: point,
                width: 1000,
                height: 2000,
                radius: 1000 / 10,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
        // 圆形
        [
          3,
          {
            getGeom: (point) =>
              new CircleGeometry({
                center: point,
                radius: 2000,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
        // 扇形
        [
          4,
          {
            getGeom: (point) =>
              new SectorGeometry({
                center: point,
                radius: 2000,
                angle1: 0,
                angle2: 90,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
        // 五角星
        [
          5,
          {
            getGeom: (point) =>
              new StartGeometry({
                center: point,
                innerRadius: 2000 / 2,
                outRadius: 2000,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
        // n叶草
        [
          6,
          {
            getGeom: (point) =>
              new LeafGeometry({
                center: point,
                n: [6, 7, 8, 9, 10][Math.floor(Math.random() * 5)],
                size: 800,
                length: 800 * 4,
              }),
            getStyle: () => ({ ...defaultStyle }),
          },
        ],
      ]);

      const features = citys.map(
        (city, i) =>
          new Feature({
            id: v1(),
            name: v1(),
            geometry: geom.get(i % geom.size).getGeom({
              lng: city[0],
              lat: city[1],
            }),
            style: geom.get(i % geom.size).getStyle(),
          }),
      );

      this.$data.$geometryLayerSource.addFeatures(features);
    },
    onPolygonMapInitReady() {
      const map = this.$refs.polygonLayerRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$polygonLayerOverlay',
        ref: this.$refs.polygonLayerRef,
        source: '$polygonLayerSource',
        zIndex: 9999,
      });

      const points = [
        [116.387112, 39.920977],
        [116.385243, 39.913063],
        [116.394226, 39.917988],
        [116.401772, 39.921364],
        [116.41248, 39.927893],
      ];

      const polygonGeom = new PolygonGeometry(
        points.map((point) => {
          return {
            lng: point[0],
            lat: point[1],
          };
        }),
      );

      const feature = new Feature({
        id: v1(),
        name: v1(),
        geometry: polygonGeom,
        style: {
          lineWidth: 1,
          strokeStyle: 'yellow',
          fillStyle: 'red',
        },
      });

      this.$data.$polygonLayerSource.addFeature(feature);

      Util.fit(
        map,
        points.map((p) => new window.BMap.Point(p[0], p[1])),
      );
    },
    onMulitPolygonMapInitReady() {
      const map = this.$refs.mulitPolygonLayerRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$mulitPolygonOverlay',
        ref: this.$refs.mulitPolygonLayerRef,
        source: '$mulitPolygonSource',
        zIndex: 9999,
      });

      const polygon = [
        [
          {
            lng: 121.487899486,
            lat: 31.24916171,
          },
          {
            lng: 103.725020656,
            lat: 27.3406329636,
          },
          {
            lng: 99.7136815989,
            lat: 27.8310294612,
          },
          {
            lng: 121.487899486,
            lat: 31.24916171,
          },
        ],
        [
          {
            lng: 109.993706251,
            lat: 39.8164895606,
          },
          {
            lng: 121.360525873,
            lat: 38.9658447898,
          },
          {
            lng: 124.832994532,
            lat: 45.1360489701,
          },
          {
            lng: 109.993706251,
            lat: 39.8164895606,
          },
        ],
        [
          {
            lng: 106.757915842,
            lat: 31.8691891592,
          },
          {
            lng: 104.776071339,
            lat: 29.3591568895,
          },
          {
            lng: 106.285267996,
            lat: 36.0215234807,
          },
          {
            lng: 106.757915842,
            lat: 31.8691891592,
          },
        ],
      ];

      const mulitPolygonGemo = new MulitPolygonGeometry(polygon);

      const feature = new Feature({
        id: v1(),
        name: v1(),
        geometry: mulitPolygonGemo,
        style: {
          lineWidth: 1,
          strokeStyle: 'yellow',
          fillStyle: 'red',
        },
      });

      this.$data.$mulitPolygonSource.addFeature(feature);

      Util.fit(
        map,
        polygon.flat().map((p) => new window.BMap.Point(p.lng, p.lat)),
      );
    },
    onLineStringTypeChange(value) {
      const map = this.$refs.lineStringRef.getMap();

      this.lineStringType = value;

      if (value === '-1') return;

      if (this.$data.$preLineStringFeature) {
        this.$data.$lineStringSource.removeFeature(this.$data.$preLineStringFeature);
      }

      let style;
      const fromPoint = [123.47052, 41.684476];
      const toPoint = [116.401889, 39.917344];

      const lineStringGemo = new LineStringGeometry({
        point1: {
          lng: fromPoint[0],
          lat: fromPoint[1],
        },
        point2: {
          lng: toPoint[0],
          lat: toPoint[1],
        },
      });

      // 设置几何形状
      if (value === 'base') {
        // 无箭头
        style = {
          lineWidth: 2,
          strokeStyle: 'red',
          fillStyle: 'red',
          arrow: {
            // 是否绘制
            draw: false,
          },
        };
      } else if (value === 'fromArrow') {
        // 开始箭头
        style = {
          lineWidth: 2,
          strokeStyle: 'red',
          fillStyle: 'red',
          arrow: {
            draw: true,
            direction: 'start',
            type: 'normal',
            size: 'normal',
          },
        };
      } else if (value === 'toArrow') {
        // 结束箭头
        style = {
          lineWidth: 2,
          strokeStyle: 'red',
          fillStyle: 'red',
          arrow: {
            draw: true,
            direction: 'end',
            type: 'normal',
            size: 'normal',
          },
        };
      } else if (value === 'betweenArrow') {
        // 双向箭头
        style = {
          lineWidth: 2,
          strokeStyle: 'red',
          fillStyle: 'red',
          arrow: {
            draw: true,
            direction: 'bothEnds',
            type: 'normal',
            size: 'normal',
          },
        };
      }

      this.$data.$preLineStringFeature = new Feature({
        id: v1(),
        name: v1(),
        geometry: lineStringGemo,
        style,
      });

      this.$data.$lineStringSource.addFeature(this.$data.$preLineStringFeature);

      Util.fit(map, [
        new window.BMap.Point(fromPoint[0], fromPoint[1]),
        new window.BMap.Point(toPoint[0], toPoint[1]),
      ]);
    },
    onLineStringMapInitReady() {
      const map = this.$refs.lineStringRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$lineStringOverlay',
        ref: this.$refs.lineStringRef,
        source: '$lineStringSource',
        zIndex: 9999,
      });
    },
    onRegularPolygonChange(value) {
      this.regularPolygonCount = value;

      if (value === '-1') return;

      if (this.$data.$preRegularPolygonFeature) {
        this.$data.$regularPolygonSource.removeFeature(this.$data.$preRegularPolygonFeature);
      }

      const regularPolygonGemo = new RegularPolygonGeometry({
        // eslint-disable-next-line radix
        n: parseInt(value),
        center: {
          lng: 121.487899486,
          lat: 31.24916171,
        },
        size: 20000,
      });

      this.$data.$preRegularPolygonFeature = new Feature({
        id: v1(),
        name: v1(),
        geometry: regularPolygonGemo,
        style: { ...defaultStyle },
      });

      this.$data.$regularPolygonSource.addFeature(this.$data.$preRegularPolygonFeature);
    },
    onRegularPolygonMapInitReady() {
      const map = this.$refs.regularPolygonRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$regularPolygonOverlay',
        ref: this.$refs.regularPolygonRef,
        source: '$regularPolygonSource',
        zIndex: 9999,
      });
    },
    onLeafCountChange(value) {
      this.leafCount = value;

      if (value === '-1') return;

      if (this.$data.$preLeafFeature) {
        this.$data.$leafSource.removeFeature(this.$data.$preLeafFeature);
      }

      const leafGemo = new LeafGeometry({
        center: {
          lng: 121.487899486,
          lat: 31.24916171,
        },
        // eslint-disable-next-line radix
        n: parseInt(value),
        size: 2000,
        length: 2000 * 4,
      });

      this.$data.$preLeafFeature = new Feature({
        id: v1(),
        name: v1(),
        geometry: leafGemo,
        style: { ...defaultStyle },
      });

      this.$data.$leafSource.addFeature(this.$data.$preLeafFeature);
    },
    onLeafMapInitReady() {
      const map = this.$refs.leafRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$leafOverlay',
        ref: this.$refs.leafRef,
        source: '$leafSource',
        zIndex: 9999,
      });
    },
    onTextCountChange(value) {
      const map = this.$refs.textRef.getMap();

      this.textCount = value;

      if (value === '-1') return;

      if (this.$data.$preTextFeature) {
        this.$data.$textSource.removeFeature(this.$data.$preTextFeature);
      }

      let textGemo;
      const style = {
        font: 'bold 24px sans-serif',
        textAlign: 'center',
        textBaseline: 'middle',
        direction: 'inherit',
        strokeStyle: 'red',
        fillStyle: 'red',
      };
      const point = [121.487899486, 31.24916171];

      if (value === 'text') {
        textGemo = new TextGeometry({
          point: {
            lng: point[0],
            lat: point[1],
          },
          text: '我爱北京天安门',
        });

        this.$data.$preTextFeature = new Feature({
          id: v1(),
          name: v1(),
          geometry: textGemo,
          style,
        });
      } else {
        textGemo = new PointGeometry({ lng: point[0], lat: point[1] });

        this.$data.$preTextFeature = new InnerTextFeature({
          id: v1(),
          name: v1(),
          geometry: textGemo,
          text: '我爱北京天安门',
          textStyle: { ...style },
          style: {
            lineWidth: 6,
            strokeStyle: 'yellow',
            fillStyle: 'blue',
            radius: 60,
            pointType: 'circle',
          },
        });
      }

      this.$data.$textSource.addFeature(this.$data.$preTextFeature);

      Util.fit(map, [new window.BMap.Point(point[0], point[1])]);
    },
    onTextMapInitReady() {
      const map = this.$refs.textRef.getMap();
      map.enableScrollWheelZoom(true);

      createVectorLayer({
        context: this.$data,
        overlay: '$textOverlay',
        ref: this.$refs.textRef,
        source: '$textSource',
        zIndex: 9999,
      });
    },
  },
};
</script>

<style lang="less" module>
.BMapWrap {
  width: 100%;
  height: 600px;
}

.ToolBar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
  :global(> .ant-btn) {
    margin-right: 15px;
    margin-bottom: 15px;
  }
}
</style>
