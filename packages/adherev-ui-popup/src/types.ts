/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
  onCreate: Function;
  onBeforeShow: Function;
  onAfterShow: Function;
  onBeforeClose: () => Promise<null>;
  onAfterClose: Function;
  onDestroy: Function;
  children: null | Object;
  zIndex: number;
}
