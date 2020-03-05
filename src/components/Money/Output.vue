<template>
    <div class="output">
        <Icon name="其他"/>
        <span>￥0</span>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Output extends Vue {

    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
    .output{
        @extend %innerShadow;
        display: flex;
        justify-content: space-between;
        padding: 8px 15px;
        font-size: 20px;
        background: #FFF;
        .icon {
            width: 32px;
            height: 32px;
        }
    }
</style>