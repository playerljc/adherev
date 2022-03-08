// @ts-ignore
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import { defineComponent, nextTick, onMounted, ref } from 'vue';
import { bool, number, object, string } from 'vue-types';
import { IConfig, IPoint } from './types';

const selectorPrefix = 'adhere-ui-bmap';

const loadGridIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==';

const props = {
  ak: string().def('bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp'),
  zoom: number().def(5),
  center: object<IPoint>().def(() => ({
    lon: 116.404,
    lat: 39.915,
  })).isRequired,
  config: object<IConfig>().def(() => ({
    minZoom: 2,
    maxZoom: 20,
    enableHighResolution: true,
    enableAutoResize: true,
    enableMapClick: false,
  })),
  externalImportBMapScript: bool().def(false),
};

export default defineComponent({
  name: 'adv-bmap',
  props,
  emits: ['onBMapInitReady', 'onBMapScriptReady'],
  setup(props, { emit, expose }) {
    const root = ref<HTMLDivElement | null>(null);

    let isReady: boolean = false;
    let BMap: any;
    let map: any;
    let isLoad: boolean = false;

    onMounted(() => {
      // 外部载入bmap.js
      if (props.externalImportBMapScript) {
        BMap = (window as any).BMap;

        isReady = true;

        nextTick(() => {
          initMap();
        });
      }
      // 内部引入bmap.js
      else {
        importBMapJS().then(BMap => {
          BMap = BMap;

          (window as any).BMap = BMap;

          emit('onBMapScriptReady');

          isReady = true;

          nextTick(() => {
            initMap();
          });
        });
      }
    });

    const importBMapJS = () => {
      function importReal(src: string | null) {
        return new Promise<any>(resolve => {
          const script = document.createElement('script');

          script.onload = () => {
            resolve((window as any).BMap);
          };
          if (typeof src === 'string') {
            script.src = src;
          }

          if (document) {
            document.querySelector('head')?.appendChild(script);
          }
        });
      }

      return new Promise(resolve => {
        const preWrite = document.write;

        document.write = html => {
          const el = document.createElement('div');
          el.innerHTML = html;
          const first = el.firstElementChild;

          if (
            first?.tagName.toLowerCase() === 'script' &&
            first?.getAttribute('src')?.indexOf('http://api.map.baidu.com') !== -1
          ) {
            importReal(first.getAttribute('src')).then(res => {
              resolve(res);
            });
          } else {
            preWrite(html);
          }
        };

        const script = document.createElement('script');
        script.src = `http://api.map.baidu.com/api?v=3.0&ak=${props.ak}`;
        document?.querySelector('head')?.appendChild(script);
      });
    };

    const initMap = () => {
      map = new BMap.Map(root.value, {
        ...props.config,
        enableMapClick: false,
      });

      initMapControl();

      map.centerAndZoom(new BMap.Point(props.center?.lon, props.center?.lat), props.zoom);

      map.addEventListener('tilesloaded', () => {
        if (isLoad) return;

        isLoad = true;

        const logoEl = document.querySelector('.anchorBL');
        logoEl && logoEl?.parentElement?.removeChild(logoEl);

        setTimeout(() => {
          (root.value as HTMLElement).style.background = `url("${loadGridIcon}") repeat #fff;`;
        }, 2000);
      });

      emit('onBMapInitReady');
    };

    const initMapControl = () => {
      // 添加比例尺控件
      map.addControl(new BMap.NavigationControl());

      //开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);

      // this.map.disableScrollWheelZoom();
      // this.map.disableDoubleClickZoom();
      // this.map.disableKeyboard();
      // this.map.disableContinuousZoom();
      // this.map.disableAutoResize();
    };

    const getMap = () => map;

    expose({
      getMap,
    });

    return () => (
      // @ts-ignore
      <ConditionalRender conditional={isReady}>
        {{
          // @ts-ignore
          default: () => <div class={selectorPrefix} ref={root} />,
          noMatch: () => <div>loading</div>,
        }}
      </ConditionalRender>
    );
  },
});
