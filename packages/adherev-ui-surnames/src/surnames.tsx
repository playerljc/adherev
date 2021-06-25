import classNames from 'classnames';
import Util from '@baifendian/adherev-util';

const selectorPrefix = 'adherev-ui-surnames';

const DURATION = 100;

function isTouch() {
  return 'ontouchend' in document;
}

export default {
  name: 'adv-surnames',
  props: {
    className: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'right',
      validator(val) {
        return ['top', 'right', 'bottom', 'left'].indexOf(val) !== -1;
      },
    },
    indexes: {
      type: Array,
      default: () => [],
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      $key: false,
      $isMouseClicked: false,
      $isMouseMoved: false,
      $startY: null,
      $startX: null,
      $curIndexName: null,
      $indexPositionMap: null,
      $maskEl: null,
    };
  },
  computed: {
    getClassName() {
      const { position, className } = this;

      return classNames(
        selectorPrefix,
        `${selectorPrefix}-config-position-${position}`,
        className.split(' '),
      );
    },
  },
  mounted() {
    this.initEvent();
    this.createMask();
    this.adapterDimension();
    this.createIndexPosition();
  },
  updated() {
    this.adapterDimension();
    this.createIndexPosition();
  },
  beforeDestroy() {
    const {
      $data: { $maskEl },
    } = this;

    if ($maskEl) {
      $maskEl.parentElement.removeChild($maskEl);
    }
  },
  methods: {
    onClick(e) {
      e.preventDefault();

      e.stopPropagation();

      this.clickDetail(e);
    },
    onTouchmove(e) {
      e.preventDefault();

      const y = e.changedTouches[0].pageY;

      const x = e.changedTouches[0].pageX;

      const target = e.target;

      const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`);

      this.$data.$curIndexName = indexItemEl.dataset.name;

      this.moveDetail(x, y);
    },
    onTouchend() {
      const {
        $refs: { highlightedEl },
      } = this;

      highlightedEl.style.display = 'none';
      highlightedEl.innerText = '';
      highlightedEl.style.transform = 'translate3d(0,0,0)';
    },
    onMousedown(e) {
      e.preventDefault();

      this.$data.$startY = e.pageY;

      this.$data.$startX = e.pageX;

      const target = e.target;

      const indexItemEl = Util.getTopDom(target, `${selectorPrefix}-index-item`);

      // console.log('按下获取索引名称', indexItemEl.dataset.name);

      this.$data.$curIndexName = indexItemEl.dataset.name;

      this.$data.$isMouseClicked = true;
    },
    onMousemove(e) {
      const {
        $data: { $isMouseClicked },
      } = this;

      if (!$isMouseClicked) return false;

      this.$data.$isMouseMoved = true;

      e.preventDefault();

      const y = e.pageY;

      const x = e.pageX;

      this.moveDetail(x, y);
    },
    onMouseleave() {
      const {
        $refs: { highlightedEl },
      } = this;

      this.$data.$isMouseClicked = false;
      this.$data.$isMouseMoved = false;

      highlightedEl.style.display = 'none';
      highlightedEl.innerText = '';
      highlightedEl.style.transform = 'translate3d(0,0,0)';
    },
    onMouseup(e) {
      const {
        $refs: { highlightedEl },
        $data,
      } = this;

      if ($data.$isMouseMoved) {
        $data.$isMouseClicked = false;
        $data.$isMouseMoved = false;

        highlightedEl.style.display = 'none';
        highlightedEl.innerText = '';
        highlightedEl.style.transform = 'translate3d(0,0,0)';

        return false;
      }

      e.preventDefault();

      this.clickDetail(e);
    },
    onResize() {
      this.update();
    },
    clickDetail(e) {
      const target = e.target;

      e.preventDefault();

      const { $data } = this;

      if ($data.$key) {
        return false;
      }

      $data.$key = true;

      $data.$maskEl.style.display = 'block';

      const targetEl = Util.getTopDom(target, `${selectorPrefix}-index-item`);

      this.scrollToAnimation(targetEl?.dataset?.name);
    },
    moveDetail(x, y) {
      const index = this.findIndex(x, y);

      if (index) {
        const {
          $refs: { highlightedEl },
        } = this;

        highlightedEl.innerText = index.name;
        highlightedEl.style.display = 'block';

        const direction = this.getDirection();

        if (direction === 'vertical') {
          const translateY = index.offsetTop + Math.floor(index.height / 2);
          highlightedEl.style.transform = `translate3d(0,${translateY}px,0)`;
        } else {
          const translateX = index.offsetLeft + index.width;
          highlightedEl.style.transform = `translate3d(${translateX}px,0,0)`;
        }

        this.scrollTo(index.name);
      }
    },
    initEvent() {
      const {
        $refs: { indexInnerEl },
      } = this;

      if (isTouch()) {
        indexInnerEl.addEventListener('click', this.onClick);

        // 索引touchmove和mousemove
        indexInnerEl.addEventListener('touchmove', this.onTouchmove);

        indexInnerEl.addEventListener('touchend', this.onTouchend);
      } else {
        indexInnerEl.addEventListener('mousedown', this.onMousedown);

        indexInnerEl.addEventListener('mousemove', this.onMousemove);

        indexInnerEl.addEventListener('mouseleave', this.onMouseleave);

        indexInnerEl.addEventListener('mouseup', this.onMouseup);

        window.addEventListener('resize', this.onResize);
      }
    },
    adapterDimension() {
      const {
        $refs: { el, indexInnerEl },
      } = this;

      const direction = this.getDirection();

      if (direction === 'vertical') {
        el?.style.height = `${indexInnerEl?.offsetHeight + 50}px`;
        el?.style.width = '100%';
      } else {
        el?.style.height = '100%';
      }
    },
    createIndexPosition() {
      const {
        $refs: { indexInnerEl },
        $data,
      } = this;

      const indexItemEls = indexInnerEl.querySelectorAll(`.${selectorPrefix}-index-item`);

      $data.$indexPositionMap = [];

      // 计算每一项距离视口的top和bottom
      for (let i = 0; i < indexItemEls.length; i++) {
        const indexItemEl = indexItemEls[i];
        const indexName = indexItemEl.dataset.name;

        const rect = indexItemEl.getBoundingClientRect();

        $data.$indexPositionMap.push({
          name: indexName,
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          offsetTop: indexItemEl.offsetTop,
          offsetLeft: indexItemEl.offsetLeft,
          width: indexItemEl.offsetWidth,
          height: indexItemEl.offsetHeight,
        });
      }
    },
    createMask() {
      const el = document.createElement('div');

      el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

      this.$data.$maskEl = el.firstElementChild as HTMLElement;

      // @ts-ignore
      document.body.appendChild(this.$data.$maskEl);
    },
    scrollToAnimation(name: string | undefined, duration = 100) {
      const self = this;

      const {
        $refs: { contentEl, el },
        $data,
      } = this;

      const targetEl = contentEl.querySelector(
        `.${selectorPrefix}-group-title[data-name='${name}']`,
      );

      let scrollVal = contentEl.scrollTop;

      const targetTop = targetEl.offsetTop;

      const { updateInterval } = screen;

      const step =
        el.scrollHeight /
        ((DURATION | duration) / (updateInterval || 16.7) +
          ((DURATION | duration) % (updateInterval || 16.7) !== 0 ? 1 : 0));

      /**
       * scrollAnimation
       */
      function scrollAnimation() {
        if (contentEl.scrollTop < targetTop) {
          if (scrollVal + step > targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal += step;
          }
        } else if (scrollVal - step < targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal -= step;
        }

        contentEl.scrollTop = scrollVal;

        if (contentEl.scrollTop < targetTop) {
          if (scrollVal >= targetTop) {
            clear();
          } else {
            window.requestAnimationFrame(scrollAnimation);
          }
        } else if (scrollVal <= targetTop) {
          clear();
        } else {
          window.requestAnimationFrame(scrollAnimation);
        }

        function clear() {
          $data.$key = false;
          $data.$isMouseClicked = false;
          $data.$maskEl.style.display = 'none';

          self.$emit('scroll', name);
        }
      }

      this.$emit('before-scroll', name);

      window.requestAnimationFrame(scrollAnimation);
    },
    scrollTo(name: any) {
      const {
        $refs: { contentEl },
      } = this;

      contentEl.scrollTop = contentEl.querySelector(
        `.${selectorPrefix}-group-title[data-name='${name}']`,
      ).offsetTop;

      this.$emit('scroll', name);
    },
    getDirection() {
      const { position } = this;

      return position === 'left' || position === 'right' ? 'vertical' : 'horizontal';
    },
    findIndex(x: number, y: number) {
      const direction = this.getDirection();

      const {
        $data: { $startX, $startY, $curIndexName, $indexPositionMap },
      } = this;
      const val = direction === 'vertical' ? y - $startY : x - $startX;
      const curIndex = $indexPositionMap.find((t) => t.name === $curIndexName);

      // console.log('获取增量', val);
      // console.log('移动获取当前索引信息', curIndex);

      let low = 0;
      let high = $indexPositionMap.length - 1;
      let middle;
      let target;

      while (
        low <= high &&
        low <= $indexPositionMap.length - 1 &&
        high <= $indexPositionMap.length - 1
      ) {
        middle = (high + low) >> 1;
        const targetVal = $indexPositionMap[middle];

        let t1;
        let t2;
        let t3;
        let t4;
        if (direction === 'vertical') {
          t1 = curIndex.top + val;
          t2 = curIndex.bottom + val;
          t3 = targetVal.top;
          t4 = targetVal.bottom;
        } else {
          t1 = curIndex.left + val;
          t2 = curIndex.right + val;
          t3 = targetVal.left;
          t4 = targetVal.right;
        }

        if (t1 >= t3 && t1 <= t4) {
          target = targetVal;
          break;
        } else if (t1 < t3) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }

      if (target) {
        return target;
      } else {
        return null;
      }
    },
    update() {
      this.adapterDimension();
      this.createIndexPosition();
    },
    renderIndex(h) {
      const { $scopedSlots, indexes } = this;

      return indexes.map((index) => {
        return (
          <a key={index.index} class={`${selectorPrefix}-index-item`} data-name={index.index}>
            {$scopedSlots.index(index)}
          </a>
        );
      });
    },
    renderContent(h) {
      const { $scopedSlots, dataSource } = this;

      return dataSource.map((record) => {
        return (
          <div key={record.index} class={`${selectorPrefix}-group`}>
            <a class={`${selectorPrefix}-group-title`} data-name={record.index}>
              {$scopedSlots.title(record)}
            </a>
            <div class={`${selectorPrefix}-group-inner`}>{$scopedSlots.content(record)}</div>
          </div>
        );
      });
    },
  },
  render(h) {
    return (
      <div class={this.getClassName} ref="el">
        <div class={`${selectorPrefix}-highlighted`} ref="highlightedEl" />

        <div class={`${selectorPrefix}-content`} ref="contentEl">
          {this.renderContent(h)}
        </div>

        <div class={`${selectorPrefix}-index`} ref="indexEl">
          <div class={`${selectorPrefix}-index-inner`} ref="indexInnerEl">
            {this.renderIndex(h)}
          </div>
        </div>
      </div>
    );
  },
};
