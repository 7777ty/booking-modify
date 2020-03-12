<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click.native="goBack"/>
            <span class="title"><Icon :name="record.tag" />{{record.tag}}</span>
            <span class="rightIcon"></span>
        </div>
        <div  class="form-wrapper">
            <label class="notes">
                <span>金额</span>
                <input type="number"
                       :value="record.amount"
                       @change="editAmount($event.target.value)"
                       :placeholder="record.amount">

            </label>
        </div>
        <div  class="form-wrapper">
            <label class="notes">
                <span>备注</span>
                <input type="text"
                       :value="record.notes"
                       @input="record.notes=$event.target.value"
                       :placeholder="record.notes">

            </label>
        </div>
        <div class="button-wrapper">
            <Button  @click="saveEdit" >修改</Button>
            <Button class="deleteButton" @click="remove">删除</Button>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import FormItem from '@/components/Money/FormItem.vue';
    import Button from '@/components/Button.vue';
    @Component({
        components: {Button, FormItem}
    })
    export default class EditRecord extends Vue {
        record?: recordItem=undefined;
        created(){
            const id=this.$route.params.id;
            this.$store.commit('fetchRecords');
            const records=this.$store.state.recordList;

            const record: recordItem=records.filter((item: recordItem)=>item.id===id)[0];
            if(record){
                this.record=record;
            }else{
                this.$router.replace('/404')
            }
        }
        goBack(){
            this.$router.back();
        }
        editAmount(value: string){

            if (parseFloat(value).toString() == "NaN"){window.alert('请输入一个数字')}
           else{
               this.record!.amount=parseFloat(value)}
        }
        saveEdit(){
            this.$store.commit('updateRecord',{id:this.record?.id,notes:this.record?.notes,amount:this.record?.amount});
            this.$router.back()
        }
        remove(){
            this.$store.commit('removeRecord',this.record?.id);
            this.$router.back();
        }

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
    .navBar {
        text-align: center;
        font-size: 16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > .title {

            display: flex;
            flex-direction: column;
            align-items: center;
            .icon{
                width: 30px;
                height: 30px;
            }

        }
        > .leftIcon {
            width: 24px;
            height: 24px;
        }
        > .rightIcon {
            width: 24px;
            height: 24px;
        }
    }
    .form-wrapper{
        background: white;
        margin-top: 1px;
    }
    .button-wrapper{
        text-align: center;
        padding: 16px;
        margin-top: 44px;

    }
    .deleteButton{
        background: darkred;
        margin-left: 15px;
    }
</style>