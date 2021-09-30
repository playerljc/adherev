<template>
  <div :class="$style.App">
    <div :class="$style.Fixed">
      <div :class="$style.Fixed">
        <a :href="location">
          <h2>adherev(v{{ version }})</h2>
        </a>
      </div>
      <div :class="$style.Auto">
        <a :href="repositoryUrl">
          <svg id="tanuki-logo" width="36" height="36">
            <path
              id="tanuki-right-ear"
              class="tanuki-shape"
              fill="#e24329"
              d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
            />
            <path
              id="tanuki-left-ear"
              class="tanuki-shape"
              fill="#e24329"
              d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
            />
            <path id="tanuki-nose" class="tanuki-shape" fill="#e24329" d="M18,34.38 3,14 33,14 Z" />
            <path
              id="tanuki-right-eye"
              class="tanuki-shape"
              fill="#fc6d26"
              d="M18,34.38 11.38,14 2,14 6,25Z"
            />
            <path
              id="tanuki-left-eye"
              class="tanuki-shape"
              fill="#fc6d26"
              d="M18,34.38 24.62,14 34,14 30,25Z"
            />
            <path
              id="tanuki-right-cheek"
              class="tanuki-shape"
              fill="#fca326"
              d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
            />
            <path
              id="tanuki-left-cheek"
              class="tanuki-shape"
              fill="#fca326"
              d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div :class="$style.Auto">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import lernaJSON from '../../../lerna.json';
import packageJSON from '../../../package.json';

export default {
  computed: {
    location() {
      return window.location.origin;
    },
    version() {
      return lernaJSON.version;
    },
    repositoryUrl() {
      return packageJSON.repository.url;
    },
  },
};
</script>

<style lang="less" module>
.App {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > .Fixed {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    > .Fixed {
      flex-shrink: 0;
      padding: 10px;
    }

    > .Auto {
      flex-grow: 1;
      min-width: 0;
      margin-right: 20px;
      text-align: right;
    }
  }

  > .Auto {
    flex-grow: 1;
    min-height: 0;
  }
}
</style>
