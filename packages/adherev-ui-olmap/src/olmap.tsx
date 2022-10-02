import { Fill, Stroke, Style, Text } from 'ol/style.js';

import Resource from '@baifendian/adherev-util-resource';

import Constent from './constent';
import Util from './util';

const selectorPrefix = 'adherev-ui-olmap';

const OLMap: any = {
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
    extent: {
      type: Array,
      default: () => [] /*Resource.Dict.value.ResourceGisXinbeiquMapExtent.value*/,
    },
    layers: {
      type: Array,
      default: () => undefined,
    },
  },
  data() {
    return {
      $map: null,
      $zoom: null,
      $mainGeoLayer: null,
    };
  },
  mounted() {
    const { mapConfig, type, maxZoom, minZoom, zoom, layers, center, extent } = this;

    // console.log('OLMap', this.$refs, center, zoom, extent, layers, mapConfig);

    this.$data.$map = Util.createMap({
      config: {
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

    this.$data.$zoom = this.$data.$map.getView().getZoom();
  },
  methods: {
    /**
     * addMainGeoJSONLayer - 添加主的geoJSON层
     * @param geoJSONStyle
     * @param geoJSONData
     */
    addMainGeoJSONLayer({ geoJSONStyle, geoJSONData }) {
      const { stroke, fill, text } = geoJSONStyle; // Dict.value['feature-style-xinbeiqu'];

      this.$data.$mainGeoLayer = this.addGeoLayer(
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
      return Util.addGeoLayer(this.$data.$map, geojsonData, getStyleConfig, zIndex);
    },

    /**
     * addWindLayer - 添加风场层
     * @param data
     * @param config
     * @param zIndex
     */
    addWindLayer(data, config, zIndex = 0) {
      return Util.addWindLayer(this.$data.$map, data, config, zIndex);
    },

    /**
     * 添加数据层
     * @return {*|{vectorLayer, vectorSource}}
     */
    addDataLayer(zIndex) {
      return Util.addVectorLayer(this.$data.$map, zIndex);
    },

    /**
     * 给地图实例添加 hover监听者
     */
    addHoverListener(layer, hit, unHit) {
      Util.addHoverListener(this.$data.$map, layer, hit, unHit);
    },

    /**
     * 添加缩放事件
     * @param handler
     */
    addZoomListener(handler) {
      this.$data.$map.on('moveend', (evt) => {
        const zoom = this.$data.$map.getView().getZoom();

        if (zoom !== this.$data.$zoom) {
          handler(zoom);
        }

        this.$data.$zoom = zoom;
      });
    },

    /**
     * 给地图实例添加 单击监听者
     */
    addClickListener(layer, hit, unHit) {
      Util.addClickListener(this.$data.$map, layer, hit, unHit, this.setCursor);
    },

    /**
     * 添加一个Overlay对象, 一般来说只有弹窗marker 故仅实例化一个
     */
    addOverlay(config) {
      return Util.addOverlay(this.$data.$map, config);
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
      this.$data.$map.getTarget().style.cursor = style;
    },

    /**
     * 清空所有层，除了底图和常州geoJSOn层
     */
    clear() {
      const layers = this.$data.$map.getLayers();

      for (let i = 1; i < layers.getLength(); i++) {
        this.$data.$map.removeLayer(layers.item(i));
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
  render(h) {
    return <div class={selectorPrefix} ref="ref" />;
  },
};

export default OLMap;
