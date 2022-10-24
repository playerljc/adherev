<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="ImageLazy">
      <p>图片懒加载</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-list item-layout="vertical" size="large" :data-source="listData">
          <template #renderItem="{ item }">
            <a-list-item>
              <template #extra>
                <adv-imagelazy
                  :img-args="{
                    width: 272,
                    alt: 'logo',
                    originSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                    targetSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                  }"
                />
              </template>

              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.href">{{ item.title }}</a>
                </template>

                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>

              {{ item.content }}
            </a-list-item>
          </template>
        </a-list>
      </template>

      <template #p2>
        <a-list item-layout="vertical" size="large" :data-source="listData">
          <template #renderItem="{ item }">
            <a-list-item>
              <template #extra>
                <adv-imagelazy
                  :img-args="{
                    width: 272,
                    alt: 'logo',
                    originSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                    targetSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                  }"
                />
              </template>

              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.href">{{ item.title }}</a>
                </template>

                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>

              {{ item.content }}
            </a-list-item>
          </template>
        </a-list>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  displayName: 'imagelazy',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template #p1>
        <a-list item-layout="vertical" size="large" :data-source="listData">
          <template #renderItem="{ item }">
            <a-list-item>
              <template #extra>
                <adv-imagelazy
                  :img-args="{
                    width: 272,
                    alt: 'logo',
                    targetSrc:
                      'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
                  }"
                />
              </template>

              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.href">{{ item.title }}</a>
                </template>

                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
          </template>
        </a-list>
      </template>

        <script>
          export default {
            computed: {
              listData() {
                const listData = [];

                for (let i = 0; i < 6; i++) {
                  listData.push({
                    href: 'https://ant.design',
                    title: \`ant design part \${i}\`,
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
                      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content:
                      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                  });
                }

                return listData;
              }
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '初始化图片',
          cardProps: {
            description: {
              title: '初始化图片',
              info: '使用originSrc设置初始化图片',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template #p2>
        <a-list item-layout="vertical" size="large" :data-source="listData">
          <template #renderItem="{ item }">
            <a-list-item>
              <template #extra>
                <adv-imagelazy
                  :img-args="{
                    width: 272,
                    alt: 'logo',
                    originSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                    targetSrc:
                      'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
                  }"
                />
              </template>

              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.href">{{ item.title }}</a>
                </template>

                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
          </template>
        </a-list>
      </template>

        <script>
          export default {
            computed: {
              listData() {
                const listData = [];

                for (let i = 0; i < 6; i++) {
                  listData.push({
                    href: 'https://ant.design',
                    title: \`ant design part \${i}\`,
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:
                      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    content:
                      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                  });
                }

                return listData;
              }
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'className',
              desc: '附加样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'imgArgs',
              desc: '图片的参数',
              type: 'object',
              defaultVal: `{originSrc:'',targetSrc:''}`,
            },
          ],
        },
        {
          border: true,
          title: 'imgArgs',
          data: [
            {
              params: 'originSrc',
              desc: '预加载的图片地址',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'errorSrc',
              desc: '图片载入错误时候图片的地址',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'targetSrc',
              desc: '实际的图片地址',
              type: 'string',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    listData() {
      const listData = [];

      for (let i = 0; i < 6; i++) {
        listData.push({
          href: 'https://ant.design',
          title: `ant design part ${i}`,
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        });
      }

      return listData;
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
