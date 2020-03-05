<template>
  <div>
    当前页面不存在，请检查网址是否正确
    <hr />
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import   Vue from 'vue'
import {Component} from 'vue-property-decorator';


@Component({
})
export default class NotFound extends Vue
{

}
</script>

<style lang="scss" scoped>
</style>