<template>
    <label class="notes">
        <span>{{this.fieldName}}</span>
        <input type="text" v-model="$store.state.notes"
               :placeholder="placeholder">

    </label>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue {
        @Prop({default:''}) readonly value!: string;
        @Prop({required:true}) fieldName!: string;
        @Prop()placeholder?: string;
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