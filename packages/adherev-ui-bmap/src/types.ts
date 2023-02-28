import { ExtractPropTypes } from 'vue';

import { bmapProps } from './bmap';

export interface IPoint {
  lon: number;
  lat: number;
}

export interface IConfig {
  minZoom: number;
  maxZoom: number;
  enableHighResolution: boolean;
  enableAutoResize: boolean;
  enableMapClick: boolean;
}

export type BmapProps = Partial<ExtractPropTypes<typeof bmapProps>>;
