<template>
    <div class="output">
        <Icon :name="selectedTag" :class="selectedType"/>
        <span>￥{{this.$store.state.output}}</span>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({
        computed:{
            selectedTag(){
                return this.$store.state.selectedTag
            },
            selectedType(){
                if(this.$store.state.type=='-'){
                    return 'payColor'
                }else {
                    return 'incomeColor'
                }

            }
        }
    })
    export default class Output extends Vue {
        beforeCreate(){
            this.$store.state.selected='其他';

        }

    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
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
    .payColor{
        color:#FD6B71
    }
        .incomeColor{
            color:#5FA0FA
        }
    }
</style>