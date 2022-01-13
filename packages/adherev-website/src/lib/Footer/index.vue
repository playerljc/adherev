<template>
  <ul :class="$style.Wrap">
    <li :class="$style.Item">
      <dl>
        <dt>相关资源</dt>
        <dd>
          <ul :class="$style.ItemList">
            <li :class="$style.ItemListItem">
              自主研发
              <ul>
                <li>
                  <a href="http://49.232.163.126:8083/" target="_blank" rel="noopener noreferrer">
                    adhere
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/CTSJ-BUILD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CTSJ-BUILD
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/CTSJ-BUILDV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CTSJ-BUILDV
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/CTSJ-STATE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CTSJ-STATE
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/CTSJ-DvaGenerator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CTSJ-DvaGenerator
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/CTSJ-ROUTER"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CTSJ-ROUTER
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/CTSJ-VuexGenerator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CTSJ-VuexGenerator
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/playerljc/WebViewJavascriptBridge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WebViewJavascriptBridge
                  </a>
                </li>
              </ul>
            </li>
            <li :class="$style.ItemListItem">
              模板工程
              <ul>
                <li>
                  <a
                    href="https://gitee.com/playerljc/ReactPro/tree/adhere"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReactPro(G1)
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitee.com/playerljc/ReactPro/tree/polyfill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReactPro(G1)(支持IE)
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitee.com/playerljc/AntPro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AntPro(G1)
                  </a>
                </li>
                <li>
                  <a
                    href="http://git.baifendian.com/dongxu.guo/ReactWeb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ReactWeb(G3)
                  </a>
                </li>
                <li>
                  <a
                    href="http://git.baifendian.com/bo.li/Percent_Vue_Admin.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PercentVue(G3)
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitee.com/playerljc/VuePro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VuePro(G1)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </dd>
      </dl>
    </li>
    <li :class="$style.Item">
      <dl>
        <dt>帮助</dt>
        <dd>
          <ul :class="$style.ItemList">
            <li :class="$style.ItemListItem">
              <a :href="repositoryUrl" target="_blank" rel="noopener noreferrer">
                <a-icon type="github" />
                <span :class="$style.ItemListItemText">Gitlib</span>
              </a>
            </li>
            <li :class="$style.ItemListItem">
              <router-link to="/adherev/changelog">
                <a-icon type="schedule" />
                <span :class="$style.ItemListItemText">更新日志</span>
              </router-link>
            </li>
          </ul>
        </dd>
      </dl>
    </li>
  </ul>
</template>

<script>
import packageJSON from '../../../../../package.json';

export default {
  computed: {
    repositoryUrl() {
      return packageJSON.repository.url;
    },
  },
};
</script>

<style lang="less" module>
.Wrap {
  display: flex;
  padding: 60px;
  color: #fff6;
  font-size: 14px;
  line-height: 1.5;
  background-color: #000;

  > .Item {
    flex-grow: 1;
    > dl {
      > dt {
        position: relative;
        margin: 0 auto 24px;
        color: #fff;
        font-weight: 500;
        font-size: 20px;
      }

      > dd {
        > .ItemList {
          > .ItemListItem {
            margin-left: 15px;
            color: #fff;
            font-size: 16px;
            list-style-type: circle;

            &:not(:last-child) {
              margin-bottom: 15px;
            }

            > a {
              color: #fff;
            }

            .ItemListItemText {
              margin-left: 10px;
            }

            > ul {
              padding-top: 15px;
              > li {
                margin-left: 10px;
                color: #fff;
                font-size: 14px;

                > a {
                  color: #fff;
                }

                &:not(:last-child) {
                  margin-bottom: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
