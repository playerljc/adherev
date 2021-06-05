// @ts-ignore
import { Vector as VectorLayer } from 'ol/layer';
// @ts-ignore
import { Vector as VectorSource } from 'ol/source';
// @ts-ignore
import GeoJSON from 'ol/format/GeoJSON';
// @ts-ignore
import Resource from '@baifendian/adherev-util-resource';

/**
 * GeoLayer
 * @class GeoLayer
 * @classdesc openlayers中的geojson的layer
 */
class GeoLayer extends VectorLayer {
  private vectorSource: VectorSource;

  /**
   * constructor
   * @param geoJsonObject - 数据
   * @param onStyle - onStyle
   * @param zIndex
   */
  constructor(geoJsonObject, onStyle, zIndex) {
    const geoSource = new VectorSource({
      features: new GeoJSON({
        dataProjection: Resource.Dict.value.ResourceGisEpsg4326.value,
        featureProjection: Resource.Dict.value.ResourceGisEpsg3857.value,
      }).readFeatures(geoJsonObject),
    });

    super({ source: geoSource, style: onStyle, zIndex });

    this.vectorSource = geoSource;
  }
}

export default GeoLayer;
