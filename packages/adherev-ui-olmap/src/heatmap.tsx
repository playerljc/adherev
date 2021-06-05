// @ts-ignore
import { Heatmap as HeatmapLayer } from 'ol/layer';

// @ts-ignore
import OLMap from './olmap';
import Util from './util';

export default {
  name: 'adv-olmap-heatmap',
  props: {
    heatMapLayerConfig: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      _vectorSource: null,
    };
  },
  mixins: [OLMap],
  methods: {
    addLayer() {
      // @ts-ignore
      const { heatMapLayerConfig } = this;

      // @ts-ignore
      this.$data._vectorSource = Util.addHeatmapLayer(this.$data._map, heatMapLayerConfig);
    },
    getHeatmapLayer() {
      // @ts-ignore
      const layers = this.$data._map.getLayers();

      let result = null;

      for (let i = 1; i < layers.getLength(); i++) {
        const layer = layers.item(i);
        if (layer instanceof HeatmapLayer) {
          result = layer;
          break;
        }
      }

      return result;
    },
  },
};
