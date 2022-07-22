import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

const selectorPrefix = 'adhere-ui-bmap';

const loadGridIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==';

export default {
  name: 'adv-bmap',
  props: {
    ak: {
      type: String,
      default: 'bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp',
    },
    zoom: {
      type: Number,
      default: 5,
    },
    center: {
      type: Object,
      default: () => ({
        lon: 116.404,
        lat: 39.915,
      }),
    },
    config: {
      type: Object,
      default: () => ({
        minZoom: 2,
        maxZoom: 20,
        enableHighResolution: true,
        enableAutoResize: true,
        enableMapClick: false,
      }),
    },
    // onBMapInitReady: {
    //   type: Function,
    // },
    // onBMapScriptReady: {
    //   type: Function,
    // },
    externalImportBMapScript: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isReady: false,
      $BMap: null,
      $map: null,
      $isLoad: false,
    };
  },
  methods: {
    importBMapJS() {
      function importReal(src) {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.onload = () => {
            // @ts-ignore
            resolve(window.BMap);
          };
          script.src = src;
          document.querySelector('head')?.appendChild(script);
        });
      }

      return new Promise((resolve) => {
        const preWrite = document.write;

        document.write = (html) => {
          const el = document.createElement('div');
          el.innerHTML = html;
          const first = el.firstElementChild;

          if (
            first?.tagName.toLowerCase() === 'script' &&
            first?.getAttribute('src')?.indexOf('http://api.map.baidu.com') !== -1
          ) {
            importReal(first.getAttribute('src')).then((res) => {
              resolve(res);
            });
          } else {
            preWrite(html);
          }
        };

        const script = document.createElement('script');
        script.src = `http://api.map.baidu.com/api?v=3.0&ak=${this.props.ak}`;
        document?.querySelector('head')?.appendChild(script);
      });
    },
    initMap() {
      const { $BMap } = this.$data;

      const { config, zoom, center } = this;

      this.$data.$map = new $BMap.Map(this.$refs.ref, {
        enableMapClick: false,
        ...config,
      });

      this.initMapControl();

      this.$data.$map.centerAndZoom(new $BMap.Point(center?.lon, center?.lat), zoom);

      this.$data.$map.addEventListener('tilesloaded', () => {
        if (this.$data.$isLoad) return;

        this.$data.$isLoad = true;

        const logoEl = document.querySelector('.anchorBL');
        logoEl && logoEl?.parentElement?.removeChild(logoEl);

        setTimeout(() => {
          // @ts-ignore
          this?.$refs?.ref?.style?.background = `url("${loadGridIcon}") repeat #fff;`;
        }, 2000);
      });

      this.$emit('onBMapInitReady');
    },
    initMapControl() {
      const { $BMap, $map } = this.$data;

      // 添加比例尺控件
      $map.addControl(new $BMap.NavigationControl());

      //开启鼠标滚轮缩放
      $map.enableScrollWheelZoom(true);

      // this.map.disableScrollWheelZoom();
      // this.map.disableDoubleClickZoom();
      // this.map.disableKeyboard();
      // this.map.disableContinuousZoom();
      // this.map.disableAutoResize();
    },
    getMap() {
      return this.$data.$map;
    },
  },
  mounted() {
    const { externalImportBMapScript } = this;

    // 外部载入bmap.js
    if (externalImportBMapScript) {
      // @ts-ignore
      this.$data.$BMap = window.BMap;

      this.isReady = true;
      this.$nextTick(() => {
        this.initMap();
      });
    }
    // 内部引入bmap.js
    else {
      this.importBMapJS().then((BMap) => {
        this.$data.$BMap = BMap;

        // @ts-ignore
        window.BMap = BMap;

        this.$emit('onBMapScriptReady');

        this.isReady = true;

        this.$nextTick(() => {
          this.initMap();
        });
      });
    }
  },
  render(h) {
    const { isReady } = this;
    return (
      <ConditionalRender conditional={isReady}>
        {/*@ts-ignore*/}
        <div class={selectorPrefix} ref="ref" />
        <div slot="noMatch">loading</div>
      </ConditionalRender>
    );
  },
};
