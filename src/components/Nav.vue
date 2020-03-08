<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>记账
    </router-link>
    <router-link to="/general" class="item" active-class="selected">
      <Icon name="账单" />本月概况
    </router-link>
    <router-link to="/chart" class="item" active-class="selected">
      <Icon name="statistic" />图表
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
export default {
  name: "Nav",
  components: {Icon}
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 40px;
      height: 40px;
    }
  }
  > .item.selected {
    color:#f00;
  }
}
a {
  text-decoration: none;
}
</style>