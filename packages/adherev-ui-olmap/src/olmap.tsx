// @ts-ignore
import { Fill, Stroke, Style, Text } from 'ol/style.js';
// @ts-ignore
import Resource from '@baifendian/adherev-util-resource';

import Constent from './constent';
import Util from './util';

const selectorPrefix = 'adherev-ui-olmap';

export default {
  name: 'adv-olmap',
  props: {
    type: {
      type: String,
      default: Constent.MAP_TYPE_ADMINISTRATIVE,
      validator(val) {
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
    layers: {
      type: Array,
      default: () => undefined,
    },
  },
  data() {
    return {
      _map: null,
      _zoom: null,
      _mainGeoLayer: null,
    };
  },
  mounted() {
    // @ts-ignore
    const { mapConfig, type, maxZoom, minZoom, zoom, layers, center, extent } = this;

    // console.log('OLMap', this.$refs, center, zoom, extent, layers, mapConfig);

    // @ts-ignore
    this.$data._map = Util.createMap({
      config: {
        // @ts-ignore
        target: this.$refs.ref,
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

    // @ts-ignore
    this.$data._zoom = this.$data._map.getView().getZoom();
  },
  methods: {
    /**
     * addMainGeoJSONLayer - 添加主的geoJSON层
     * @param geoJSONStyle
     * @param geoJSONData
     */
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }) {
      const { stroke, fill, text } = geoJSONStyle; // Dict.value['feature-style-xinbeiqu'];

      // @ts-ignore
      this.$data._mainGeoLayer = this.addGeoLayer(
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
    addGeoLayer(geojsonData, getStyleConfig, zIndex = 0) {
      // @ts-ignore
      return Util.addGeoLayer(this.$data._map, geojsonData, getStyleConfig, zIndex);
    },

    /**
     * 添加数据层
     * @return {*|{vectorLayer, vectorSource}}
     */
    addDataLayer(zIndex) {
      // @ts-ignore
      return Util.addVectorLayer(this.$data._map, zIndex);
    },

    /**
     * 给地图实例添加 hover监听者
     */
    addHoverListener(layer, hit, unHit) {
      // @ts-ignore
      Util.addHoverListener(this.$data._map, layer, hit, unHit);
    },

    /**
     * 添加缩放事件
     * @param handler
     */
    addZoomListener(handler) {
      // @ts-ignore
      this.$data._map.on('moveend', (evt) => {
        // @ts-ignore
        const zoom = this.$data._map.getView().getZoom();

        // @ts-ignore
        if (zoom !== this.$data._zoom) {
          handler(zoom);
        }

        // @ts-ignore
        this.$data._zoom = zoom;
      });
    },

    /**
     * 给地图实例添加 单击监听者
     */
    addClickListener(layer, hit, unHit) {
      // @ts-ignore
      Util.addClickListener(this.$data._map, layer, hit, unHit, this.setCursor);
    },

    /**
     * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
     */
    addOverlay(config) {
      // @ts-ignore
      return Util.addOverlay(this.$data._map, config);
    },

    /**
     * 给Overlay对象 配置状态
     */
    setOverlayState(overlay, state) {
      Util.setOverlayState(overlay, state);
    },

    /**
     * 将此处鼠标点样式
     */
    setCursor(style) {
      // @ts-ignore
      this.$data._map.getTarget().style.cursor = style;
    },

    /**
     * 清空所有层，除了底图和常州geoJSOn层
     */
    clear() {
      // @ts-ignore
      const layers = this.$data._map.getLayers();

      for (let i = 1; i < layers.getLength(); i++) {
        // @ts-ignore
        this.$data._map.removeLayer(layers.item(i));
      }
    },

    /**
     * getMap
     * @return {*|Map}
     */
    getMap() {
      // @ts-ignore
      return this.$data._map;
    },
  },
  render(h) {
    // @ts-ignore
    return <div class={selectorPrefix} ref="ref" />;
  },
};
