<template>
  <div class="Page">
    <h1>ImageLazy</h1>
    <p>图片懒加载</p>

    <h2>属性</h2>
    <props
      :data="[
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
      ]"
    />

    <h2>imgArgs</h2>
    <props
      :data="[
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
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <a-list item-layout="vertical" size="large" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <adv-imagelazy
            slot="extra"
            :img-args="{
              width: 272,
              alt: 'logo',
              targetSrc:
                'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
            }"
          />
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </a-list>
    </playground>

    <h2>使用originSrc设置初始化图片</h2>
    <playground :codeText="code2">
      <a-list item-layout="vertical" size="large" :data-source="listData">
        <a-list-item slot="renderItem" slot-scope="item, index">
          <adv-imagelazy
            slot="extra"
            :img-args="{
              width: 272,
              alt: 'logo',
              originSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
              targetSrc:
                'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
            }"
          />
          <a-list-item-meta :description="item.description">
            <a slot="title" :href="item.href">{{ item.title }}</a>
            <a-avatar slot="avatar" :src="item.avatar" />
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </a-list>
    </playground>
  </div>
</template>

<script>
export default {
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
    code1() {
      return `
        <template>
          <a-list item-layout="vertical" size="large" :data-source="listData">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <adv-imagelazy
                slot="extra"
                :img-args="{
                  width: 272,
                  alt: 'logo',
                  targetSrc:
                    'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
                }"
              />
              <a-list-item-meta :description="item.description">
                <a slot="title" :href="item.href">{{ item.title }}</a>
                <a-avatar slot="avatar" :src="item.avatar" />
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
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
      `;
    },
    code2() {
      return `
        <template>
          <a-list item-layout="vertical" size="large" :data-source="listData">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <adv-imagelazy
                slot="extra"
                :img-args="{
                  width: 272,
                  alt: 'logo',
                  originSrc: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1989213037.jpg',
                  targetSrc:
                    'https://img2.baidu.com/it/u=1697432864,1600199787&fm=26&fmt=auto&gp=0.jpg',
                }"
              />
              <a-list-item-meta :description="item.description">
                <a slot="title" :href="item.href">{{ item.title }}</a>
                <a-avatar slot="avatar" :src="item.avatar" />
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
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
      `;
    },
  },
};
</script>
