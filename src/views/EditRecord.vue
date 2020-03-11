<template>
    <Layout>
        Edit
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class EditRecord extends Vue {
        created(){
            const id=this.$route.params.id;
            this.$store.commit('fetchRecords');
            const records=this.$store.state.recordList;
            const record=records.filter(t=>t.id===id)[0];
            if(record){
                console.log(record);
            }else{
                this.$router.replace('/404')
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>