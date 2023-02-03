import debounce from 'lodash/debounce';
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { number, string } from 'vue-types';

import Util from '@baifendian/adherev-util';
// @ts-ignore
import { ResizeObserver } from '@juggle/resize-observer';

import { Mode, Point } from './types';

const selectorPrefix = 'adherev-ui-writingboard';

const props = {
  defaultMode: string().def(Mode.FREE as string),
  defaultStrokeStyle: string().def('#000'),
  defaultLineWidth: number().def(2),
  resizeTime: number().def(300),
};

export default defineComponent({
  name: 'adv-writingboard',
  props,
  setup(props, { expose }) {
    const containerRef = ref<HTMLDivElement>();
    const canvasRef = ref<HTMLCanvasElement>();

    let ctx: CanvasRenderingContext2D | null = null;
    let ro: any = null;
    let startPoint: Point | null = null;
    let prePoint: Point | null = null;
    let curShape: Mode = props.defaultMode as Mode;
    let lineWidth: number = props.defaultLineWidth;
    let strokeStyle: string = props.defaultStrokeStyle;
    let stack: any = [];
    let stackIndex: number = 0;

    const config: Map<Mode, any> = new Map([
      // 自由模式
      [
        Mode.FREE,
        {
          draw({ sourcePoint, targetPoint }) {
            ctx?.beginPath();
            ctx?.moveTo(sourcePoint.x, sourcePoint.y);
            ctx?.lineTo(targetPoint.x, targetPoint.y);

            stack.push({
              shape: curShape,
              sourcePoint,
              targetPoint,
            });

            style({
              lineWidth: lineWidth,
              strokeStyle: strokeStyle,
            });

            // 描边
            ctx?.stroke();
          },
          drawStack(item) {
            ctx?.beginPath();
            ctx?.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx?.lineTo(item.targetPoint.x, item.targetPoint.y);

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.stroke();
          },
          mouseup(point) {
            draw({ sourcePoint: prePoint, targetPoint: point });
          },
        },
      ],
      // 直线
      [
        Mode.LINE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.clearRect(0, 0, canvasRef.value?.width!, canvasRef.value?.height!);
            drawStack();
            ctx?.beginPath();
            ctx?.moveTo(startPoint!.x, startPoint!.y);
            ctx?.lineTo(targetPoint.x, targetPoint.y);

            style({
              lineWidth: lineWidth,
              strokeStyle: strokeStyle,
            });

            // 描边
            ctx?.stroke();
          },
          drawStack(item) {
            ctx?.beginPath();
            ctx?.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx?.lineTo(item.targetPoint.x, item.targetPoint.y);

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.stroke();
          },
          mouseup(point) {
            stack.push({
              shape: curShape,
              lineWidth: ctx?.lineWidth,
              strokeStyle: ctx?.strokeStyle,
              sourcePoint: startPoint,
              targetPoint: point,
            });
          },
        },
      ],
      // 矩形
      [
        Mode.RECTANGLE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.clearRect(0, 0, canvasRef.value?.width!, canvasRef.value?.height!);
            drawStack();
            ctx?.beginPath();

            // 判断target在start的四个方向
            const rectStart = getPoint({ startPoint: startPoint, targetPoint });
            ctx?.rect(
              rectStart.x,
              rectStart.y,
              Math.abs(targetPoint.x - startPoint!.x),
              Math.abs(targetPoint.y - startPoint!.y),
            );

            style({
              lineWidth: lineWidth,
              strokeStyle: strokeStyle,
            });

            // 描边
            ctx?.stroke();
          },
          drawStack(item) {
            ctx?.beginPath();
            ctx?.rect(item.x, item.y, item.width, item.height);

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.stroke();
          },
          mouseup(point) {
            const rectStart = getPoint({ startPoint: startPoint, targetPoint: point });

            stack.push({
              shape: curShape,
              lineWidth: ctx?.lineWidth,
              strokeStyle: ctx?.strokeStyle,
              x: rectStart.x,
              y: rectStart.y,
              width: Math.abs(point.x - startPoint?.x!),
              height: Math.abs(point.y - startPoint?.y!),
            });
          },
        },
      ],
      // 圆形
      [
        Mode.CIRCLE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.clearRect(0, 0, canvasRef.value?.width!, canvasRef.value?.height!);
            drawStack();

            ctx?.beginPath();
            // 判断target在start的四个方向
            const rectStart = getPoint({ startPoint: startPoint, targetPoint });
            const radius = getDistanceByBetweenPoint({ p2: targetPoint, p1: startPoint });
            ctx?.ellipse(
              rectStart.x,
              rectStart.y,
              radius,
              radius,
              (45 * Math.PI) / 180,
              0,
              2 * Math.PI,
            );

            style({
              lineWidth: lineWidth,
              strokeStyle: strokeStyle,
            });

            // 描边
            ctx?.stroke();
          },
          drawStack(item) {
            ctx?.beginPath();
            ctx?.ellipse(
              item.x,
              item.y,
              item.radiusX,
              item.radiusY,
              item.rotation,
              item.startAngle,
              item.endAngle,
            );

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.stroke();
          },
          mouseup(point) {
            const center = getPoint({ startPoint: startPoint, targetPoint: point });
            const radius = getDistanceByBetweenPoint({ p2: point, p1: startPoint });
            stack.push({
              shape: curShape,
              lineWidth: ctx?.lineWidth,
              strokeStyle: ctx?.strokeStyle,
              x: center.x,
              y: center.y,
              radiusX: radius,
              radiusY: radius,
              rotation: (45 * Math.PI) / 180,
              startAngle: 0,
              endAngle: 2 * Math.PI,
            });
          },
        },
      ],
      // 三角形(多边形)
      [
        Mode.TRIANGLE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.clearRect(0, 0, canvasRef.value?.width!, canvasRef.value?.height!);
            drawStack();
            ctx?.beginPath();

            const points = triangle({ startPoint: startPoint, targetPoint });
            ctx?.moveTo(points[0].x, points[0].y);
            ctx?.lineTo(points[1].x, points[1].y);
            ctx?.lineTo(points[2].x, points[2].y);
            ctx?.closePath();

            style({
              lineWidth: lineWidth,
              strokeStyle: strokeStyle,
            });

            // 描边
            ctx?.stroke();
          },
          drawStack(item) {
            ctx?.beginPath();
            ctx?.moveTo(item.points[0].x, item.points[0].y);
            ctx?.lineTo(item.points[1].x, item.points[1].y);
            ctx?.lineTo(item.points[2].x, item.points[2].y);
            ctx?.closePath();

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.stroke();
          },
          mouseup(point) {
            const points = triangle({ startPoint: startPoint, targetPoint: point });

            stack.push({
              shape: curShape,
              lineWidth: ctx?.lineWidth,
              strokeStyle: ctx?.strokeStyle,
              points,
            });
          },
        },
      ],
      // 橡皮
      [
        Mode.RUBBER,
        {
          draw({ sourcePoint, targetPoint }) {
            ctx?.beginPath();
            ctx?.moveTo(sourcePoint.x, sourcePoint.y);
            ctx?.lineTo(targetPoint.x, targetPoint.y);

            stack.push({
              shape: curShape,
              sourcePoint,
              targetPoint,
            });

            (ctx as CanvasRenderingContext2D).lineWidth = 15;
            (ctx as CanvasRenderingContext2D).strokeStyle = '#fff';
            (ctx as CanvasRenderingContext2D).lineCap = 'round';
            (ctx as CanvasRenderingContext2D).lineJoin = 'round';
            ctx?.stroke();
          },
          drawStack(item) {
            ctx?.beginPath();
            ctx?.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx?.lineTo(item.targetPoint.x, item.targetPoint.y);

            (ctx as CanvasRenderingContext2D).lineWidth = 15;
            (ctx as CanvasRenderingContext2D).strokeStyle = '#fff';
            (ctx as CanvasRenderingContext2D).lineCap = 'round';
            (ctx as CanvasRenderingContext2D).lineJoin = 'round';
            ctx?.stroke();
          },
          mouseup(point) {
            draw({ sourcePoint: prePoint, targetPoint: point });
          },
        },
      ],
    ]);

    /**
     * style
     * @param lineWidth
     * @param strokeStyle
     */
    function style({ lineWidth, strokeStyle }) {
      (ctx as CanvasRenderingContext2D).lineWidth = lineWidth;
      (ctx as CanvasRenderingContext2D).strokeStyle = strokeStyle;
      (ctx as CanvasRenderingContext2D).lineCap = 'round';
      (ctx as CanvasRenderingContext2D).lineJoin = 'round';
    }

    /**
     * triangle - 获取三角形的三个点坐标
     * @param startPoint
     * @param targetPoint
     */
    function triangle({ startPoint, targetPoint }) {
      const s = getPoint({ startPoint, targetPoint });

      const w = Math.abs(targetPoint.x - startPoint.x);
      const h = Math.abs(targetPoint.y - startPoint.y);

      const point1 = {
        x: s.x,
        y: s.y + h,
      };

      const point2 = {
        x: s.x + w / 2,
        y: s.y,
      };

      const point3 = {
        x: s.x + w,
        y: s.y + h,
      };
      return [point1, point2, point3];
    }

    /**
     * devicePointToCanvasPoint
     * @param clientX
     * @param clientY
     */
    function devicePointToCanvasPoint({ clientX, clientY }): Point {
      const { x, y } = canvasRef?.value?.getBoundingClientRect()!;

      return {
        x: clientX - x,
        y: clientY - y,
      };
    }

    /**
     * getDistanceByBetweenPoint
     * @description 获取p1,p2两点间的距离
     * @param p1
     * @param p2
     */
    function getDistanceByBetweenPoint({ p1, p2 }) {
      const { x: Ax1, y: Ay1 } = p1;
      const { x: Ax2, y: Ay2 } = p2;
      return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
    }

    /**
     * drawStack
     */
    function drawStack() {
      for (let i = 0; i < stack.length; i++) {
        const item = stack[i];
        config.get(item.shape).drawStack(item);
      }
    }

    /**
     * getPoint
     * @param startPoint
     * @param targetPoint
     */
    function getPoint({ startPoint, targetPoint }) {
      if (targetPoint.x <= startPoint.x && targetPoint.y <= startPoint.y) {
        // leftTop
        return targetPoint;
      } else if (targetPoint.x <= startPoint.x && targetPoint.y >= startPoint.y) {
        // leftBottom
        return {
          x: targetPoint.x,
          y: startPoint.y,
        };
      } else if (targetPoint.x >= startPoint.x && targetPoint.y <= startPoint.y) {
        // rightTop
        return {
          x: startPoint.x,
          y: targetPoint.y,
        };
      } else if (targetPoint.x >= startPoint.x && targetPoint.y >= startPoint.y) {
        // rightBottom
        return startPoint;
      }
    }

    /**
     * draw
     * @param sourcePoint
     * @param targetPoint
     */
    function draw({ sourcePoint, targetPoint }) {
      const entry = config?.get(curShape);
      entry.draw({ sourcePoint, targetPoint });
    }

    // 注册事件
    function onMousemove(e) {
      move(e);
    }

    function onTouchmove(e) {
      move({
        ...e,
        clientX: e.targetTouches[0].clientX,
        clientY: e.targetTouches[0].clientY,
      });
    }

    function onMouseup(e) {
      end(e);
    }

    function onTouchend(e) {
      end({
        ...e,
        clientX: e.changedTouches[0].clientX,
        clientY: e.changedTouches[0].clientY,
      });
    }

    function onMousedown(e) {
      start(e);
    }

    function onTouchstart(e) {
      start({ ...e, clientX: e.targetTouches[0].clientX, clientY: e.targetTouches[0].clientY });
    }

    /**
     * start
     * @param e
     */
    function start(e) {
      // 屏幕坐标转换成canvas坐标
      const { clientX, clientY } = e;

      startPoint = prePoint = devicePointToCanvasPoint({ clientX, clientY });

      containerRef?.value?.addEventListener('mousemove', onMousemove);
      containerRef?.value?.addEventListener('mouseup', onMouseup);
      containerRef?.value?.addEventListener('touchmove', onTouchmove);
      containerRef?.value?.addEventListener('touchend', onTouchend);
    }

    /**
     * move
     * @param e
     */
    function move(e) {
      const { clientX, clientY } = e;

      const point = devicePointToCanvasPoint({ clientX, clientY });
      draw({ sourcePoint: prePoint, targetPoint: point });
      prePoint = point;
    }

    /**
     * end
     * @param e
     */
    function end(e) {
      const { clientX, clientY } = e;

      const point = devicePointToCanvasPoint({ clientX, clientY });

      config.get(curShape)?.mouseup(point);

      startPoint = null;
      prePoint = null;

      containerRef?.value?.removeEventListener('mousemove', onMousemove);
      containerRef?.value?.removeEventListener('mouseup', onMouseup);
      containerRef?.value?.removeEventListener('touchmove', onTouchmove);
      containerRef?.value?.removeEventListener('touchend', onTouchend);
    }

    /**
     * clear
     */
    function clear() {
      ctx?.clearRect(0, 0, canvasRef?.value?.width!, canvasRef?.value?.height!);

      prePoint = startPoint = null;

      stack = [];

      stackIndex = 0;
    }

    /**
     * toDataURL
     * @default canvas导出base64
     * @param backgroundColor
     * @param type
     * @param quality
     */
    function toDataURL(backgroundColor?: string, type?: string, quality?: any) {
      if (backgroundColor) {
        const [R, G, B] = Util.colorToRgb(backgroundColor);

        const fillsIndex: number[] = [];

        // 先设置背景
        let imageData = ctx?.getImageData(
          0,
          0,
          canvasRef?.value?.width!,
          canvasRef?.value?.height!,
        )!;

        for (let i = 0; i < imageData?.data?.length; i += 4) {
          // 当该像素是透明的，则设置成backgroundColor
          if (imageData.data[i + 3] === 0) {
            imageData.data[i] = R; // R
            imageData.data[i + 1] = G; // G
            imageData.data[i + 2] = B; // B
            imageData.data[i + 3] = 255;

            fillsIndex.push(i);
            fillsIndex.push(i + 1);
            fillsIndex.push(i + 2);
            fillsIndex.push(i + 3);
          }
        }

        ctx?.putImageData(imageData, 0, 0);

        // 生成base64字符串
        const base64 = canvasRef?.value?.toDataURL(type || 'image/png', quality);

        // 删除背景
        imageData = ctx?.getImageData(0, 0, canvasRef?.value?.width!, canvasRef?.value?.height!)!;

        fillsIndex.forEach((index) => {
          imageData.data[index] = 0;
        });
        ctx?.putImageData(imageData, 0, 0);

        return base64;
      }

      return canvasRef?.value?.toDataURL(type || 'image/png', quality);
    }

    expose({
      setMode: (mode) => {
        curShape = mode;
      },
      setStrokeStyle: (style) => {
        strokeStyle = style;
      },
      setLineWidth: (width) => {
        lineWidth = width;
      },
      /**
       * clear
       * @description 清除画布
       */
      clear,
      /**
       * toDataURL
       * @description 获取base64
       */
      toDataURL,
    });

    onMounted(() => {
      ctx = canvasRef?.value?.getContext('2d')!;

      const onResize = debounce(() => {
        (canvasRef.value as HTMLCanvasElement).width = containerRef?.value?.offsetWidth!;
        (canvasRef.value as HTMLCanvasElement).height = containerRef?.value?.offsetHeight!;

        ctx?.clearRect(0, 0, canvasRef?.value?.width!, canvasRef?.value?.height!);

        drawStack();
      }, props.resizeTime);

      ro = new ResizeObserver(onResize);

      ro?.observe?.(document.body);
    });

    onMounted(() => {
      containerRef?.value?.addEventListener('mousedown', onMousedown);
      containerRef?.value?.addEventListener('touchstart', onTouchstart);
    });

    onBeforeUnmount(() => {
      ro?.disconnect();
      containerRef?.value?.removeEventListener('mousedown', onMousedown);
      containerRef?.value?.removeEventListener('touchstart', onTouchstart);
    });

    return () => (
      <div ref={containerRef} class={selectorPrefix}>
        <canvas ref={canvasRef} />
      </div>
    );
  },
});
