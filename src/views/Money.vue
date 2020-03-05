<template>
    <Layout>
    <div class="types">
        <span class="selected">支出</span>
        <span>收入</span>
    </div>
        <div class="output">
            <Icon name="其他"/>
            <span>￥0</span>
        </div>
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

            <label class="notes">
                <span>备注</span>
                <input type="text" placeholder="请输入备注">
            </label>

        <div class="numberPad">
            <div class="buttons">
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button ><Icon name="删除"/></button>
                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button class="OK" >OK</button>
                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button >清零</button>
                <button >0</button>
                <button >.</button>
            </div>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({

    })
    export default class Money extends Vue {

    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
    .types {
        background: #e8e8e8;
        display: flex;
        text-align: center;
        font-size: 18px;
        justify-content: center;
        > span {
            width: 10%;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin: 0 15px;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333
            }
        }
    }
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
    .tags{
        display: flex;
        font-size: 10px;
        padding: 16px;
        flex-wrap: wrap;
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
    .notes{

        background: white;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items:center;


        span {
            padding-right: 16px;

        }

        input {
            text-align: right;
            height: 40px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
    .numberPad {


        .buttons {

            > button {
                width: 25%;
                height: 64px;
                float: left;
                background: transparent;
                border: none;
                font-size: 20px;
                .icon{
                    width: 24px;
                    height: 24px;
                }
                &.OK {
                    height: 192px;
                    float: right;
                }

                &.zero {
                    width: 50%;
                }

                &:nth-child(1) {
                    background: $bg;
                }
                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }
                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(12){
                    background: darken($bg, 4*3%);
                }
                &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }
                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }
                &:nth-child(8) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }
</style>