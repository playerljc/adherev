import { Heatmap as HeatmapLayer } from 'ol/layer';

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
      $vectorSource: null,
    };
  },
  mixins: [OLMap],
  methods: {
    addLayer() {
      const { heatMapLayerConfig } = this;

      this.$data.$vectorSource = Util.addHeatmapLayer(this.$data.$map, heatMapLayerConfig);
    },
    getHeatmapLayer() {
      const layers = this.$data.$map.getLayers();

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
