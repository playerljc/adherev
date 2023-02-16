<script>
import SearchTable from '../../../index'

import { Table } from '../Components/List'

const { SearchTableImplementFactory } = SearchTable

export default {
  components: {
    UserList: SearchTableImplementFactory(Table),
  },
}
</script>

<template>
  <UserList />
</template>

<style lang="less" module>
.Header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 15px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  > .HeaderItem {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
