<template>
    <Layout>
    <Types/>
        <Output/>
        <Tags/>

        <Notes/>
        <NumberPad @submit="saveRecord"/>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Types from '@/components/Money/Types.vue';
    import Output from '@/components/Money/Output.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Notes from '@/components/Money/Notes.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';

    @Component({
        components: {NumberPad, Notes, Tags, Output, Types}
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