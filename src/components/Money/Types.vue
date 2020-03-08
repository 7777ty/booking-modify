<template>
    <div class="types">
        <span :class="type ==='-' && 'selected'" @click="selectType('-')">支出</span>
        <span :class="type ==='+' && 'selected'" @click="selectType('+')">收入</span>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        get type(){
            return this.$store.state.type;
        }
        selectType(type: string){
            if(type!=='-'&&type!=='+'){
                throw new Error('type is unknown');
            }

            this.$store.commit('selectType',type);
        }

    }
</script>

<style lang='scss' scoped>
    .types {
        background: #e8e8e8;
        display: flex;
        text-align: center;
        font-size: 18px;
        justify-content: center;
        font-weight: 500;
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
</style>