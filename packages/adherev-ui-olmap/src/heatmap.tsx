import { defineComponent } from 'vue';
import OLMap from './olmap';
import { IHeatMapData, IHeatMapSelf } from './types';
import Util from './util';

export default defineComponent({
  name: 'adv-olmap-heatmap',
  data() {
    return {
      $vectorSource: null,
      $layer: null,
    } as IHeatMapData;
  },
  mixins: [OLMap],
  methods: {
    addLayer(heatMapLayerConfig = {}) {
      const { layer, vectorSource } = Util.createHeatMapLayer(heatMapLayerConfig || {});

      const { $data } = (this as unknown) as IHeatMapSelf;

      $data.$layer = layer;
      $data.$vectorSource = vectorSource;

      $data.$map.addLayer(layer);
    },
    getHeatMapLayer() {
      return this.$data.$layer;
    },
  },
});
