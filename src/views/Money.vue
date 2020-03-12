<template>
    <Layout>
    <Types/>
        <Output/>
        <Tags/>

        <FormItem field-name="备注" placeholder="在这里输入备注"/>
        <NumberPad @submit="saveRecord"/>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Types from '@/components/Money/Types.vue';
    import Output from '@/components/Money/Output.vue';
    import Tags from '@/components/Money/Tags.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import FormItem from '@/components/Money/FormItem.vue';

    @Component({
        components: {FormItem, NumberPad, Tags, Output, Types}
    })
    export default class Money extends Vue {
        record: recordItem={
           id:null,tag:'',notes:'',type:'-',amount:0
        };

        saveRecord(){
            this.$store.commit('createRecord');

        }
    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
    ::v-deep .content {
        display: flex;
        flex-direction: column;

    }
</style>