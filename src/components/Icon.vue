<template>

  <svg class="icon" @click="updateTag ">
    <use :xlink:href="'#'+name" />

  </svg>

</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Icon extends Vue{
  @Prop() readonly name!: string;
  beforeCreate(){
    const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
            requireContext.keys().forEach(requireContext);
    try {
      importAll(require.context("../assets/icons/", true, /\.svg$/));
    } catch (error) {
      console.log(error);
    }
  }
  updateTag(){
    this.$store.commit('updateTag',this.name)
  }

}
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>