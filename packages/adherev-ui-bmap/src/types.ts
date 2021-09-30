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
