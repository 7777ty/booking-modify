<template>
    <div class="tags">
            <span v-for="tag in currentTags" :key="tag">
                <Icon  :name="tag"></Icon>
                {{tag}}
            </span>

    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    type tags=string[]
    @Component

    export default class Tags extends Vue {
        payTags: tags=['其他','餐饮','交通','购物','服饰','日用','娱乐','食材','零食','烟酒','学习','医疗','住房','水电','通讯','红包','借出'];
        incomeTags: tags=['其他','薪资','奖金','借入','收债','利息','回收','投资'];
        get type(){
            return this.$store.state.type;
        }
         get currentTags(){
             if(this.type==='-'){
                 return this.payTags;
             }else {
                 return this.incomeTags;
             }
         }


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