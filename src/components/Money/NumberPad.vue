<template>
    <div class="numberPad">
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove"><Icon name="删除"/></button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button class="OK" >OK</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="clear">清零</button>
            <button @click="inputContent">0</button>
            <button @click="inputContent">.</button>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        inputContent(event: MouseEvent){
            this.$store.commit('inputContent',event);
        }
        remove(){
            this.$store.commit('removeInput',event);
        }
        clear(){
            this.$store.commit('clearInput');
        }
    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
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