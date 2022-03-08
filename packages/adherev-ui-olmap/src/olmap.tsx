import Resource from '@baifendian/adherev-util-resource';
import { Fill, Stroke, Style, Text } from 'ol/style.js';
import { defineComponent } from 'vue';
import Constent from './constent';
import { IOLMapData, IOLMapSelf } from './types';
import Util from './util';

const selectorPrefix = 'adherev-ui-olmap';

export default defineComponent({
  name: 'adv-olmap',
  props: {
    type: {
      type: String,
      default: Constent.MAP_TYPE_ADMINISTRATIVE,
      validator(val: string) {
        return [Constent.MAP_TYPE_ADMINISTRATIVE, Constent.MAP_TYPE_SATELLITE].indexOf(val) !== -1;
      },
    },
    mapConfig: {
      type: Object,
      default: () => {},
    },
    maxZoom: {
      type: [String, Number],
      default: Resource.Dict.value.ResourceGisMapMaxZoom.value,
    },
    zoom: {
      type: [String, Number],
      default: Resource.Dict.value.ResourceGisMapMaxZoom.value,
    },
    fitZoom: {
      type: [String, Number],
      default: Resource.Dict.value.ResourceGisMapMaxZoom.value,
    },
    minZoom: {
      type: [String, Number],
      default: Resource.Dict.value.ResourceGisMapMinZoom.value,
    },
    center: {
      type: Array,
      default: () => Resource.Dict.value.ResourceGisXinbeiquCenterPoint.value,
    },
    extent: {
      type: Array,
      default: () => [] /*Resource.Dict.value.ResourceGisXinbeiquMapExtent.value*/,
    },
    layers: {
      type: Array,
      default: () => undefined,
    },
  },
  data(): IOLMapData {
    return {
      $map: null,
      $zoom: null,
      $mainGeoLayer: null,
    };
  },
  mounted() {
    const { mapConfig, type, maxZoom, minZoom, zoom, layers, center, extent, $data, $refs } =
      this as unknown as IOLMapSelf;

    $data.$map = Util.createMap({
      config: {
        target: $refs.ref,
      },
      type,
      maxZoom,
      zoom,
      minZoom,
      center,
      extent,
      layers,
      ...mapConfig,
    });

    this.$data.$zoom = $data.$map.getView().getZoom();
  },
  methods: {
    /**
     * addMainGeoJSONLayer - 添加主的geoJSON层
     * @param geoJSONStyle
     * @param geoJSONData
     */
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }: any) {
      const { stroke, fill, text } = geoJSONStyle; // Dict.value['feature-style-xinbeiqu'];

      (this as unknown as IOLMapSelf).$data.$mainGeoLayer = this.addGeoLayer(
        geoJSONData /* Dict.value.mainGeoJSONData */,
        () => {
          return new Style({
            fill: new Fill({ ...fill }),
            stroke: new Stroke({ ...stroke }),
            text: new Text({ ...text, fill: new Fill({ color: text.color }), overflow: true }),
          });
        },
      );
    },
    /**
     * 添加GeoJSONLayer
     * @param geojsonData
     * @param getStyleConfig
     * @param zIndex
     */
    addGeoLayer(geojsonData: any, getStyleConfig: any, zIndex = 0) {
      return Util.addGeoLayer(this.$data.$map, geojsonData, getStyleConfig, zIndex);
    },
    /**
     * addWindLayer - 添加风场层
     * @param data
     * @param config
     * @param zIndex
     */
    addWindLayer(data: any, config: any, zIndex = 0) {
      return Util.addWindLayer(this.$data.$map, data, config, zIndex);
    },
    /**
     * 添加数据层
     * @return {*|{vectorLayer, vectorSource}}
     */
    addDataLayer(zIndex: any) {
      return Util.addVectorLayer(this.$data.$map, zIndex);
    },
    /**
     * 给地图实例添加 hover监听者
     */
    addHoverListener(layer: any, hit: (arg0: any) => void, unHit: (arg0?: undefined) => void) {
      Util.addHoverListener(this.$data.$map, layer, hit, unHit);
    },
    /**
     * 添加缩放事件
     * @param handler
     */
    addZoomListener(handler: (arg0: any) => void) {
      const { $data } = this as unknown as IOLMapSelf;

      (this as unknown as IOLMapSelf).$data.$map.on('moveend', () => {
        const zoom = $data.$map.getView().getZoom();

        if (zoom !== $data.$zoom) {
          handler(zoom);
        }

        this.$data.$zoom = zoom;
      });
    },
    /**
     * 给地图实例添加 单击监听者
     */
    addClickListener(
      layer: any,
      hit: ((feature: any) => void) | undefined,
      unHit: ((feature: any) => void) | undefined,
    ) {
      Util.addClickListener(this.$data.$map, layer, hit, unHit, this.setCursor);
    },
    /**
     * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
     */
    addOverlay(config: any) {
      const { $data } = this as unknown as IOLMapSelf;

      return Util.addOverlay($data.$map, config);
    },
    /**
     * 给Overlay对象 配置状态
     */
    setOverlayState(overlay: { setPosition: (arg0: any) => void }, state: any) {
      Util.setOverlayState(overlay, state);
    },
    /**
     * 将此处鼠标点样式
     */
    setCursor(style: any) {
      const { $data } = this as unknown as IOLMapSelf;

      $data.$map.getTarget().style.cursor = style;
    },
    /**
     * 清空所有层，除了底图和常州geoJSOn层
     */
    clear() {
      const { $data } = this as unknown as IOLMapSelf;

      const layers = $data.$map.getLayers();

      for (let i = 1; i < layers.getLength(); i++) {
        (this as unknown as IOLMapSelf).$data.$map.removeLayer(layers.item(i));
      }
    },
    /**
     * getMap
     * @return {*|Map}
     */
    getMap() {
      return this.$data.$map;
    },
  },
  render() {
    // @ts-ignore
    return <div class={selectorPrefix} ref="ref" />;
  },
});
