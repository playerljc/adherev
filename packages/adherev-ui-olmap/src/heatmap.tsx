import OLMap from './olmap';
import Util from './util';

export default {
  name: 'adv-olmap-heatmap',
  data() {
    return {
      $vectorSource: null,
      $layer: null,
    };
  },
  mixins: [OLMap],
  methods: {
    addLayer(heatMapLayerConfig = {}) {
      const { layer, vectorSource } = Util.createHeatMapLayer(heatMapLayerConfig || {});

      const { $data } = this;

      $data.$layer = layer;
      $data.$vectorSource = vectorSource;

      $data.$map.addLayer(layer);
    },
    getHeatMapLayer() {
      return this.$data.$layer;
    },
  },
};
