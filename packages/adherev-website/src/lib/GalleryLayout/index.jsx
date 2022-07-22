import { Input, Row, Col, Card } from 'ant-design-vue';

import styles from './index.less';

const { Search } = Input;

export default {
  props: {
    rowCount: {
      type: Number,
      default: 2,
    },
    manifest: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      keyword: '',
      list: this.manifest,
    };
  },
  methods: {
    onChange(e) {
      this.keyword = e.target.value.trim();
    },
    onSearch() {
      const { keyword, manifest } = this;

      this.list = keyword ? manifest.filter((t) => t.keyword.indexOf(keyword) !== -1) : manifest;
    },
    renderGallery(h) {
      const { rowCount } = this;

      const result = [];

      let index = 0;

      const { list } = this;

      do {
        const itemList = list.slice(index, index + rowCount);

        result.push(
          <Row gutter={24}>
            {itemList.map((t, index) => (
              <Col span={24 / rowCount} key={`${index}`}>
                <div className={styles.CardWrap}>
                  <Card title={t.title} bordered={false}>
                    {t.component(h)}
                  </Card>
                </div>
              </Col>
            ))}
          </Row>,
        );
        index += rowCount;
      } while (index < list.length);

      return result;
    },
  },
  render(h) {
    return (
      <div class={styles.Wrap}>
        <div class={styles.Fixed}>
          <Search
            style="width: 60%"
            placeholder="请输入关键字"
            value={this.keyword}
            allowClear
            enterButton
            onChange={this.onChange}
            onSearch={this.onSearch}
          />
        </div>
        <div class={styles.Auto}>{this.renderGallery(h)}</div>
      </div>
    );
  },
};
