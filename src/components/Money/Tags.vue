<template>
    <div class="tags">
            <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
        <span>
                <Icon name="其他"/>
                其他
            </span>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {

    }
</script>

<style lang='scss' scoped>
    .tags{
        display: flex;
        font-size: 10px;
        padding: 16px;
        flex-wrap: wrap;
        align-content: flex-start;
        background: #FFF;
        flex-grow: 1;
        .icon{
            width: 24px;
            height: 24px;
        }
        span{
            display: flex;
            flex-direction: column;
            margin:10px 20px;
        };
    }
</style>