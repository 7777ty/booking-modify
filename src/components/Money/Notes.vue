<template>
    <label class="notes">
        <span>备注</span>
        <input type="text" v-model="value"
               placeholder="在这里输入备注">
    </label>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue {
        value='';
    }
</script>

<style lang='scss' scoped>
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
</style>