<template>
  <div :class="$style.Wrap">
    <div :class="$style.Fixed">
      <img :src="searchIcon" alt="" />
    </div>

    <div :class="$style.Auto" ref="ref">
      <a-select
        style="width: 600px"
        class="dropdownClassName"
        :search-value="searchVal"
        :get-popup-container="(e) => e.parentElement"
        :open="open"
        :auto-focus="true"
        :show-search="true"
        :default-active-first-option="false"
        :auto-clear-search-value="false"
        :show-arrow="false"
        :filter-option="false"
        :bordered="false"
        @search="onSearch($event)"
        @dropdownVisibleChange="onDropdownVisibleChange($event)"
      >
        <template #dropdownRender>
          <adv-conditionalrender :conditional="!!filter.length">
            <div :class="$style.List">
              <ul :class="$style.Fixed">
                <li v-for="(item, index) in filter" :key="index" @click="onLink(item.path)">
                  {{ item.group }} - {{ item.kw[0] }}
                </li>
              </ul>
              <ul :class="$style.Auto">
                <li v-for="(item, index) in filter" :key="index" @click="onLink(item.path)">
                  {{ item.kw[1] }}
                </li>
              </ul>
            </div>

            <template #noMatch>
              <a-empty />
            </template>
          </adv-conditionalrender>
        </template>
      </a-select>
    </div>
  </div>
</template>

<script>
import Mark from 'mark.js';

import Index from './index.json';

const searchIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTgiIHZlcnNpb249IjEuMSIgY2xhc3NOYW1lPSJpY29uIiB0PSIxNjQ0Mjk3NDYzMzE3Ij4KCiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHBhdGggaWQ9InN2Z18xIiBmaWxsPSIjZTZlNmU2IiBwLWlkPSIxMjU5IiBkPSJtOTUwLjE0OTA2LDkwOC4xOTY1M2wtMjcwLjI3MjM4LC0yNzEuOTI0MThjNTAuMzgxNDcsLTYwLjMyNzk5IDgwLjcxMjQ5LC0xMzcuOTc5NTQgODAuNzEyNDksLTIyMi43MjQ2NGMwLC0xOTIuMDMxNiAtMTU1LjY3MTcyLC0zNDcuNzA0MSAtMzQ3LjcxOTM3LC0zNDcuNzA0MWMtMTkyLjAzMjMsMCAtMzQ3LjcwNDAyLDE1NS42NzE0OCAtMzQ3LjcwNDAyLDM0Ny43MDQxYzAsMTkyLjAzMjYyIDE1NS42NzI3NCwzNDcuNzA0MSAzNDcuNzA0MDIsMzQ3LjcwNDFjODcuMjY0OTksMCAxNjcuMDE1NTMsLTMyLjE0ODE5IDIyOC4wNjc0NiwtODUuMjM5MzZsMjY5Ljg2NDA2LDI3MS41MjYxMWMxMC44NjM4NywxMC44NjU0NiAyOC40ODE4MywxMC44NjU0NiAzOS4zNDc3NCwwYzEwLjg1MjYxLC0xMC44NjY0OSAxMC44NTI2MSwtMjguNDc1NTQgMCwtMzkuMzQyMDN6bS01MzcuMjc5MjYsLTIwMi4xMTczYy0xNjEuNTUzOTIsMCAtMjkyLjUzMTIyLC0xMzAuOTcwOTEgLTI5Mi41MzEyMiwtMjkyLjUzMjU0YzAsLTE2MS41NTk1OSAxMzAuOTc3MywtMjkyLjUzMzU3IDI5Mi41MzEyMiwtMjkyLjUzMzU3YzE2MS41Nzk1MSwwIDI5Mi41NTk4OCwxMzAuOTcyOTYgMjkyLjU1OTg4LDI5Mi41MzM1N2MtMC4wMDEwMiwxNjEuNTYxNjMgLTEzMC45ODE0LDI5Mi41MzI1NCAtMjkyLjU1OTg4LDI5Mi41MzI1NHoiLz4KIDwvZz4KPC9zdmc+';

export default {
  data() {
    return {
      filter: [],
      searchVal: '',
      open: false,
      $instance: null,
    };
  },
  computed: {
    searchIcon() {
      return searchIcon;
    },
  },
  watch: {
    searchVal(searchVal) {
      const { $refs, $data } = this;

      if ($refs.ref && !$data.$instance) {
        $data.$instance = new Mark($refs.ref);
      }

      if ($data.$instance) {
        $data.$instance.unmark();
        $data.$instance.mark(searchVal);
      }

      this.filter = searchVal
        ? Index.filter(({ kw }) =>
            kw.some((k) => k.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1),
          )
        : [];

      if (!searchVal) {
        this.open = false;
      }
    },
  },
  methods: {
    onSearch(val) {
      this.searchVal = this.open ? val : this.searchVal;
    },
    onDropdownVisibleChange(visible) {
      this.open = visible;

      const { $refs, $data } = this;

      if ($refs.ref && !$data.$instance) {
        $data.$instance = new Mark($refs.ref);
      }
    },
    onLink(path) {
      this.$router.push(path);
      this.searchVal = '';
    },
  },
};
</script>

<style lang="less" module src="./index.less" />
