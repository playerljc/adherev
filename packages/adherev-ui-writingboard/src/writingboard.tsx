import debounce from 'lodash/debounce';
import { VNode } from 'vue';

import Util from '@baifendian/adherev-util';
import { ResizeObserver } from '@juggle/resize-observer';

import { Mode, Point } from './types';

const selectorPrefix = 'adherev-ui-writingboard';

const BackTopAnimation: any = {
  name: 'adv-writingboard',
  props: {
    defaultMode: {
      type: String,
      default: Mode.FREE,
    },
    defaultStrokeStyle: {
      type: String,
      default: '#000',
    },
    defaultLineWidth: {
      type: Number,
      default: 2,
    },
    resizeTime: {
      type: Number,
      default: 300,
    },
  },
  data() {
    return {
      $stack: [],
      $ctx: null,
      $ro: null,
      $config: null,
      $curShape: null,
      $lineWidth: null,
      $strokeStyle: null,
      $startPoint: null,
      $prePoint: null,
      $stackIndex: 0,
    };
  },
  methods: {
    drawStack() {
      for (let i = 0; i < this.$data.$stack.length; i++) {
        const item = this.$data.$stack[i];
        this.$data.$config.get(item.shape).drawStack(item);
      }
    },
    style({ lineWidth, strokeStyle }) {
      (this.$data.$ctx as CanvasRenderingContext2D).lineWidth = lineWidth;
      (this.$data.$ctx as CanvasRenderingContext2D).strokeStyle = strokeStyle;
      (this.$data.$ctx as CanvasRenderingContext2D).lineCap = 'round';
      (this.$data.$ctx as CanvasRenderingContext2D).lineJoin = 'round';
    },
    triangle({ startPoint, targetPoint }) {
      const s = this.getPoint({ startPoint, targetPoint });

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
    },
    devicePointToCanvasPoint({ clientX, clientY }): Point {
      const { x, y } = this.$refs.canvasRef.getBoundingClientRect();

      return {
        x: clientX - x,
        y: clientY - y,
      };
    },
    getDistanceByBetweenPoint({ p1, p2 }) {
      const { x: Ax1, y: Ay1 } = p1;
      const { x: Ax2, y: Ay2 } = p2;
      return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
    },
    getPoint({ startPoint, targetPoint }) {
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
    },
    draw({ sourcePoint, targetPoint }) {
      const entry = this.$data.$config.get(this.$data.$curShape);
      entry.draw({ sourcePoint, targetPoint });
    },
    onMousedown(e) {
      this.start(e);
    },
    onTouchstart(e) {
      this.start({
        ...e,
        clientX: e.targetTouches[0].clientX,
        clientY: e.targetTouches[0].clientY,
      });
    },
    onMousemove(e) {
      this.move(e);
    },
    onTouchmove(e) {
      this.move({
        ...e,
        clientX: e.targetTouches[0].clientX,
        clientY: e.targetTouches[0].clientY,
      });
    },
    onMouseup(e) {
      this.end(e);
    },
    onTouchend(e) {
      this.end({
        ...e,
        clientX: e.changedTouches[0].clientX,
        clientY: e.changedTouches[0].clientY,
      });
    },
    start(e) {
      // 屏幕坐标转换成canvas坐标
      const { clientX, clientY } = e;

      this.$data.$startPoint = this.$data.$prePoint = this.devicePointToCanvasPoint({
        clientX,
        clientY,
      });

      this.$refs.containerRef.addEventListener('mousemove', this.onMousemove);
      this.$refs.containerRef.addEventListener('mouseup', this.onMouseup);
      this.$refs.containerRef.addEventListener('touchmove', this.onTouchmove);
      this.$refs.containerRef.addEventListener('touchend', this.onTouchend);
    },
    move(e) {
      const { clientX, clientY } = e;

      const point = this.devicePointToCanvasPoint({ clientX, clientY });
      this.draw({ sourcePoint: this.$data.$prePoint, targetPoint: point });
      this.$data.$prePoint = point;
    },
    end(e) {
      const { clientX, clientY } = e;

      const point = this.devicePointToCanvasPoint({ clientX, clientY });

      this.$data.$config.get(this.$data.$curShape)?.mouseup(point);

      this.$data.$startPoint = null;
      this.$data.$prePoint = null;

      this.$refs.containerRef.removeEventListener('mousemove', this.onMousemove);
      this.$refs.containerRef.removeEventListener('mouseup', this.onMouseup);
      this.$refs.containerRef.removeEventListener('touchmove', this.onTouchmove);
      this.$refs.containerRef.removeEventListener('touchend', this.onTouchend);
    },
    clear() {
      this.$data.$ctx.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height);

      this.$data.$prePoint = this.$data.$startPoint = null;

      this.$data.$stack = [];

      this.$data.$stackIndex = 0;
    },
    setMode(mode) {
      this.$data.$curShape = mode;
    },
    setStrokeStyle(style) {
      this.$data.$strokeStyle = style;
    },
    setLineWidth(width) {
      this.$data.$lineWidth = width;
    },
    toDataURL(backgroundColor?: string, type?: string, quality?: any) {
      if (backgroundColor) {
        const [R, G, B] = Util.colorToRgb(backgroundColor);

        const fillsIndex: number[] = [];

        // 先设置背景
        let imageData = this.$data.$ctx?.getImageData(
          0,
          0,
          this.$refs.canvasRef.width,
          this.$refs.canvasRef.height,
        );

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

        this.$data.$ctx?.putImageData(imageData, 0, 0);

        // 生成base64字符串
        const base64 = this.$refs.canvasRef?.toDataURL(type || 'image/png', quality);

        // 删除背景
        imageData = this.$data.$ctx?.getImageData(
          0,
          0,
          this.$refs.canvasRef.width,
          this.$refs.canvasRef.height,
        );

        fillsIndex.forEach((index) => {
          imageData.data[index] = 0;
        });
        this.$data.$ctx?.putImageData(imageData, 0, 0);

        return base64;
      }

      return this.$refs.canvasRef?.toDataURL(type || 'image/png', quality);
    },
  },
  created() {
    this.$data.$curShape = this.defaultMode;
    this.$data.$lineWidth = this.defaultLineWidth;
    this.$data.$strokeStyle = this.defaultStrokeStyle;

    this.$data.$config = new Map([
      // 自由模式
      [
        Mode.FREE,
        {
          draw: ({ sourcePoint, targetPoint }) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.moveTo(sourcePoint.x, sourcePoint.y);
            ctx.lineTo(targetPoint.x, targetPoint.y);

            this.$data.$stack.push({
              shape: this.$data.$curShape,
              sourcePoint,
              targetPoint,
            });

            this.style({
              lineWidth: this.$data.$lineWidth,
              strokeStyle: this.$data.$strokeStyle,
            });

            // 描边
            ctx.stroke();
          },
          drawStack: (item) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx.lineTo(item.targetPoint.x, item.targetPoint.y);

            this.style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx.stroke();
          },
          mouseup: (point) => {
            this.draw({ sourcePoint: this.$data.$prePoint, targetPoint: point });
          },
        },
      ],
      // 直线
      [
        Mode.LINE,
        {
          draw: ({ targetPoint }) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            // 清除画布
            ctx.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height);
            this.drawStack();
            ctx.beginPath();
            ctx.moveTo(this.$data.$startPoint.x!, this.$data.$startPoint.y!);
            ctx.lineTo(targetPoint.x, targetPoint.y);

            this.style({
              lineWidth: this.$data.$lineWidth,
              strokeStyle: this.$data.$strokeStyle,
            });

            // 描边
            ctx.stroke();
          },
          drawStack: (item) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx.lineTo(item.targetPoint.x, item.targetPoint.y);

            this.style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx.stroke();
          },
          mouseup: (point) => {
            this.$data.$stack.push({
              shape: this.$data.$curShape,
              lineWidth: this.$data.$ctx.lineWidth,
              strokeStyle: this.$data.$ctx.strokeStyle,
              sourcePoint: this.$data.$startPoint,
              targetPoint: point,
            });
          },
        },
      ],
      // 矩形
      [
        Mode.RECTANGLE,
        {
          draw: ({ targetPoint }) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            // 清除画布
            ctx.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height);
            this.drawStack();
            ctx.beginPath();

            // 判断target在start的四个方向
            const rectStart = this.getPoint({ startPoint: this.$data.$startPoint, targetPoint });
            ctx.rect(
              rectStart.x,
              rectStart.y,
              Math.abs(targetPoint.x - this.$data.$startPoint.x!),
              Math.abs(targetPoint.y - this.$data.$startPoint.y!),
            );

            this.style({
              lineWidth: this.$data.$lineWidth,
              strokeStyle: this.$data.$strokeStyle,
            });

            // 描边
            ctx.stroke();
          },
          drawStack: (item) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.rect(item.x, item.y, item.width, item.height);

            this.style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx.stroke();
          },
          mouseup: (point) => {
            const rectStart = this.getPoint({
              startPoint: this.$data.$startPoint,
              targetPoint: point,
            });

            this.$data.$stack.push({
              shape: this.$data.$curShape,
              lineWidth: this.$data.$ctx.lineWidth,
              strokeStyle: this.$data.$ctx.strokeStyle,
              x: rectStart.x,
              y: rectStart.y,
              width: Math.abs(point.x - this.$data.$startPoint.x),
              height: Math.abs(point.y - this.$data.$startPoint.y),
            });
          },
        },
      ],
      // 圆形
      [
        Mode.CIRCLE,
        {
          draw: ({ targetPoint }) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            // 清除画布
            ctx.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height);
            this.drawStack();

            ctx.beginPath();
            // 判断target在start的四个方向
            const rectStart = this.getPoint({ startPoint: this.$data.$startPoint, targetPoint });
            const radius = this.getDistanceByBetweenPoint({
              p2: targetPoint,
              p1: this.$data.$startPoint,
            });
            ctx.ellipse(
              rectStart.x,
              rectStart.y,
              radius,
              radius,
              (45 * Math.PI) / 180,
              0,
              2 * Math.PI,
            );

            this.style({
              lineWidth: this.$data.$lineWidth,
              strokeStyle: this.$data.$strokeStyle,
            });

            // 描边
            ctx.stroke();
          },
          drawStack: (item) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.ellipse(
              item.x,
              item.y,
              item.radiusX,
              item.radiusY,
              item.rotation,
              item.startAngle,
              item.endAngle,
            );

            this.style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx.stroke();
          },
          mouseup: (point) => {
            const center = this.getPoint({
              startPoint: this.$data.$startPoint,
              targetPoint: point,
            });
            const radius = this.getDistanceByBetweenPoint({
              p2: point,
              p1: this.$data.$startPoint,
            });
            this.$data.$stack.push({
              shape: this.$data.$curShape,
              lineWidth: this.$data.$ctx.lineWidth,
              strokeStyle: this.$data.$ctx.strokeStyle,
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
          draw: ({ targetPoint }) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            // 清除画布
            ctx.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height);
            this.drawStack();
            ctx.beginPath();

            const points = this.triangle({ startPoint: this.$data.$startPoint, targetPoint });
            ctx.moveTo(points[0].x, points[0].y);
            ctx.lineTo(points[1].x, points[1].y);
            ctx.lineTo(points[2].x, points[2].y);
            ctx.closePath();

            this.style({
              lineWidth: this.$data.$lineWidth,
              strokeStyle: this.$data.$strokeStyle,
            });

            // 描边
            ctx.stroke();
          },
          drawStack: (item) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.moveTo(item.points[0].x, item.points[0].y);
            ctx.lineTo(item.points[1].x, item.points[1].y);
            ctx.lineTo(item.points[2].x, item.points[2].y);
            ctx.closePath();

            this.style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx.stroke();
          },
          mouseup: (point) => {
            const points = this.triangle({
              startPoint: this.$data.$startPoint,
              targetPoint: point,
            });

            this.$data.$stack.push({
              shape: this.$data.$curShape,
              lineWidth: this.$data.$ctx.lineWidth,
              strokeStyle: this.$data.$ctx.strokeStyle,
              points,
            });
          },
        },
      ],
      // 橡皮
      [
        Mode.RUBBER,
        {
          draw: ({ sourcePoint, targetPoint }) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.moveTo(sourcePoint.x, sourcePoint.y);
            ctx.lineTo(targetPoint.x, targetPoint.y);

            this.$data.$stack.push({
              shape: this.$data.$curShape,
              sourcePoint,
              targetPoint,
            });

            ctx.lineWidth = 15;
            ctx.strokeStyle = '#fff';
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
          },
          drawStack: (item) => {
            const ctx = this.$data.$ctx as CanvasRenderingContext2D;

            ctx.beginPath();
            ctx.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx.lineTo(item.targetPoint.x, item.targetPoint.y);

            ctx.lineWidth = 15;
            ctx.strokeStyle = '#fff';
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
          },
          mouseup: (point) => {
            this.draw({ sourcePoint: this.$data.$prePoint, targetPoint: point });
          },
        },
      ],
    ]);
  },
  mounted() {
    this.$data.$ctx = this.$refs.canvasRef.getContext('2d')!;
    this.$refs.canvasRef.width = this.$refs.containerRef.offsetWidth;
    this.$refs.canvasRef.height = this.$refs.containerRef.offsetHeight;

    const onResize = debounce(() => {
      this.$refs.canvasRef.width = this.$refs.containerRef.offsetWidth;
      this.$refs.canvasRef.height = this.$refs.containerRef.offsetHeight;

      this.$data.$ctx.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height);

      this.drawStack();
    }, this.resizeTime);

    this.$data.$ro = new ResizeObserver(onResize);
    this.$data.$ro.observe?.(document.body);

    this.$refs.containerRef.addEventListener('mousedown', this.onMousedown);
    this.$refs.containerRef.addEventListener('touchstart', this.onTouchstart);
  },
  beforeDestroy() {
    this.$refs.containerRef.removeEventListener('mousedown', this.onMousedown);
    this.$refs.containerRef.removeEventListener('touchstart', this.onTouchstart);
  },
  render(h): VNode {
    return (
      <div ref="containerRef" class={selectorPrefix}>
        <canvas ref="canvasRef" />
      </div>
    );
  },
};

export default BackTopAnimation;
