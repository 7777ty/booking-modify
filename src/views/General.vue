<template>
    <Layout>
        <div class="title">我的记账本</div>
        <div class="parcel">
            <div>本月支出</div>
            <span class="expenses">￥{{result('-','month')}}</span>

            <div class="budget">
                <span>本月收入<a>￥{{result('+','month')}}</a></span>
                <span>预算剩余
                 <a v-if="!($store.state.budget)" @click="createBudget">
                     请设置预算</a>
                    <a v-else @click="createBudget">￥{{$store.state.budget-result('-','month')}} </a>
                </span>
            </div>
            <div class="chart">
                <router-link to="/chart">
                    <Icon name="statistic"/>
                    查看图表分析
                </router-link>
            </div>
        </div>
        <div class="today">
            <span>今日支出<a>￥{{result('-','day')}}</a></span>
            <span>今日收入<a>￥{{result('+','day')}}</a></span>
        </div>
        <div class="records">
        <router-link class="record" v-for="item in recordList" :key="item.createAt" :to="`general/edit/${item.id}`">
            <Icon :name="item.tag"/>
            <span class="icon-span">{{item.tag}}<span>{{item.notes}}</span></span>
            <span class="amount"><span >￥{{item.type}}{{item.amount}}</span>{{beautify(item.createAt)}}</span>
        </router-link>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import clone from '@/lib/clone';
    import dayjs from 'dayjs';
    import Button from '@/components/Button.vue';

    @Component({
        components: {Button}
    })
    export default class General extends Vue {
        get recordList(){
            return (this.$store.state as RootState).recordList;
        }
        result(type: string, time: string){
            let daily=0;
            let monthly=0;
            const now = dayjs();
            const {recordList} = this;
            const newList=clone(recordList).filter(r=>r.type===type);
            for(let i=0;i<newList.length;i++){
                if(now.isSame(dayjs(newList[i].createAt),'day')){
                    daily+=newList[i].amount;
                }
                if(now.isSame(dayjs(newList[i].createAt),'month')){
                    monthly+=newList[i].amount;
                }
            }
            if(time==='day'){return daily;}
            if(time==='month'){return monthly;}

        }
        beautify(string: string) {
            const day = dayjs(string);
            const now = dayjs();
            if (day.isSame(now, 'day')) {
                return '今天  '+day.format('HH:mm');
            } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
                return '昨天  '+day.format('HH:mm');
            } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
                return '前天  '+day.format('HH:mm');
            } else if (day.isSame(now, 'year')) {
                return day.format('M月D日  HH:mm');
            } else {
                return day.format('YYYY年M月D日  HH:mm');
            }
        }
        beforeCreate(){
            this.$store.commit('fetchRecords');
            this.$store.commit('fetchBudget');
        }
        createBudget() {
            const name = window.prompt('请输入预算');
            if (!name) { this.$store.commit('removeBudget',); return}
            this.$store.commit('createBudget', parseFloat(name));
        }
    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/helper.scss";
    .title {
        background: #e8e8e8;
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
    }

    .parcel {
        margin: 8px 12px;
        background: #FFFFFF;

        div {
            color: #c5c5c5;
            font-size: 14px;
            padding: 5px 8px;
        }

        .budget {
            display: flex;
            justify-content: space-between;

            span {
                font-size: 14px;
                padding-right: 5px;

                a {
                    color: #000;
                }
            }

        }

        .expenses {
            font-size: 28px;
            font-weight: bold;
            padding-left: 10px;
        }

        .chart {
            display: flex;
            justify-content: center;
            color: forestgreen;
            padding: 15px 0;
        }
    }

    .today {
        margin: 20px 12px;
        span{
            padding-right: 8px;
        }
    }
    .records{
        display: flex;
        flex-direction: column-reverse;

    }
    .record{
        background:#FFFFFF;
        margin: 4px 12px;
        padding: 10px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & span{
            display: flex;
            flex-direction: column;
            align-items: flex-end;


        }
        .icon{
            font-size: 30px;
        }
        .icon-span{
            align-items: center;
            font-size: 14px;
            font-weight: normal;
        }
        .amount{
            color: #c5c5c5;
            font-size: 12px;
            & span{
                font-size: 16px;
                font-weight: bold;
                color: black;
            }
        }
    }

</style>