<template>
    <Layout>
        <div class="title">账单详情</div>
        <div class="summary">
            <div>{{this.billDate()}}账单</div>
            <div>共{{this.billDetail('count','-')}}笔支出，￥-{{this.billDetail('amount','-')}}</div>
            <div class="last"><span>共{{this.billDetail('count','+')}}笔收入，￥{{this.billDetail('amount','+')}}</span><span>结余￥{{this.billDetail('amount','+')-this.billDetail('amount','-')}}</span></div>
        </div>
        <Types class="type" />
        <div >
            <v-chart  v-if="this.$store.state.type==='-'"  class="v-chart-bar"  :options="bar1" ></v-chart>
            <v-chart  v-else-if="this.$store.state.type==='+'"  class="v-chart-bar"  :options="bar2" ></v-chart>
        </div>
        <div>
            <v-chart v-if="this.$store.state.type==='-'" class="v-chart-pie"  :options="pie1" ></v-chart>
            <v-chart v-if="this.$store.state.type==='+'" class="v-chart-pie"  :options="pie2" ></v-chart>
        </div>

    </Layout>

</template>



<script>

    import ECharts from 'vue-echarts'
    import "echarts/lib/chart/bar"
    import "echarts/lib/chart/pie"
    import Types from "@/components/Money/Types";
    import dayjs from 'dayjs';
    import clone from "@/lib/clone";



    export default {
        components: {
            Types,
            'v-chart': ECharts
        },

        data: function() {
            return {
                bar1: {
                    grid: {
                        x: 15,
                        y: 40,
                        x2: 20,
                        y2: 30,
                        borderWidth: 1
                    },

                    xAxis: {

                        type: 'category',
                        data: this.days('day'),
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#F5F4F9'],
                            }
                        },

                        axisLine: {//坐标线

                            lineStyle: {
                                type: 'solid',
                                color: '#F5F4F9',//轴线的颜色
                                width: '1',//坐标线的宽度
                            }
                        },
                        axisTick: {//刻度

                            show: false//不显示刻度线
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#000',//坐标值的具体的颜色
                                fontSize: 8,
                            }
                        },

                    },
                    yAxis: {
                        splitLine: {show: false},
                        axisLine: {//线
                            show: false
                        },
                        axisTick: {//刻度
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                    },
                    series: [
                        {
                            type: "bar",
                            data: this.days('amounts','-'),


                            itemStyle: {
                                normal: {
                                    barBorderRadius: [20, 10, 0, 0],
                                    color: '#FD6B71',//设置柱子颜色
                                    label: {
                                        show: true,//柱子上显示值
                                        position: 'top',//值在柱子上方显示
                                        textStyle: {
                                            color: '#FD6B71',//值得颜色

                                        }
                                    }
                                }
                            },
                            barWidth: 5//设置柱子宽度，单位为px
                        }
                    ],
                },
                bar2: {
                    grid: {
                        x: 15,
                        y: 40,
                        x2: 20,
                        y2: 30,
                        borderWidth: 1
                    },

                    xAxis: {

                        type: 'category',
                        data: this.days('day'),
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#F5F4F9'],
                            }
                        },

                        axisLine: {//坐标线

                            lineStyle: {
                                type: 'solid',
                                color: '#F5F4F9',//轴线的颜色
                                width: '1',//坐标线的宽度
                            }
                        },
                        axisTick: {//刻度

                            show: false//不显示刻度线
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: '#000',//坐标值的具体的颜色
                                fontSize: 8,
                            }
                        },

                    },
                    yAxis: {
                        splitLine: {show: false},
                        axisLine: {//线
                            show: false
                        },
                        axisTick: {//刻度
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                    },
                    series: [
                        {
                            type: "bar",
                            data: this.days('amounts','+'),


                            itemStyle: {
                                normal: {
                                    barBorderRadius: [20, 10, 0, 0],
                                    color: '#5FA0FA',//设置柱子颜色
                                    label: {
                                        show: true,//柱子上显示值
                                        position: 'top',//值在柱子上方显示
                                        textStyle: {
                                            color: '#5FA0FA',//值得颜色

                                        }
                                    }
                                }
                            },
                            barWidth: 5//设置柱子宽度，单位为px
                        }
                    ],
                },
                pie1: {
            series: [
                {
                    center: ['50%', '50%'],
                    type: 'pie',//图形类型，如饼状图，柱状图等
                    radius: ['35%', '65%'],//饼图的半径，数组的第一项是内半径，第二项是外半径。支持百分比，本例设置成环形图。具体可以看文档或改变其值试一试
                    //roseType:'area',是否显示成南丁格尔图，默认false
                    labelLine:{
                        normal:{
                            length:5,
                        }},
                    itemStyle: {
                        normal:{
                            label:{
                                show:true,
                                textStyle:{color:'#3c4858',fontSize:"12"},
                                formatter:function(val){   //让series 中的文字进行换行
                                    return val.name.split("-").join("\n");}
                            },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                            //线条颜色
                        },//基本样式
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                            textColor:'#000'
                        }//鼠标放在各个区域的样式
                    },
                    data:
                        this.pieData('-')
                    ,//数据，数据中其他属性，查阅文档
                    color: ['#C0504D','#F79646','#772C2A','#B65708','#CD7371','#F9AB6B','#9F3B38','#F3740B','#D99694','#8064A2'],//各个区域颜色
                },//数组中一个{}元素，一个图，以此可以做出环形图
            ],//系列列表
                },
                pie2: {

                    series: [
                        {

                            type: 'pie',//图形类型，如饼状图，柱状图等
                            radius: ['35%', '65%'],//饼图的半径，数组的第一项是内半径，第二项是外半径。支持百分比，本例设置成环形图。具体可以看文档或改变其值试一试
                            //roseType:'area',是否显示成南丁格尔图，默认false
                            itemStyle: {
                                normal:{
                                    label:{
                                        show:true,
                                        textStyle:{color:'#3c4858',fontSize:"12"},
                                        formatter:function(val){   //让series 中的文字进行换行
                                            return val.name.split("-").join("\n");}
                                    },//饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。可以与itemStyle属性同级，具体看文档
                                    labelLine:{
                                        show:true,
                                        lineStyle:{color:'#3c4858'}
                                    }//线条颜色
                                },//基本样式
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)',//鼠标放在区域边框颜色
                                    textColor:'#000'
                                }//鼠标放在各个区域的样式
                            },
                            data:
                                this.pieData('+')
                            ,//数据，数据中其他属性，查阅文档
                            color: ['#4F81BD','#4BACC6','#8064A2','#2C4D75','#276A7C','#729ACA','#AFC97A','#6FBDD1','#B3A2C7','#B3A2C7'],//各个区域颜色
                        },//数组中一个{}元素，一个图，以此可以做出环形图
                    ],//系列列表
                },
                };
    },
        methods:{
            pieData(type){
                const amount=this.billDetail('amount',type);
                let i,j,value=0;
                const result=[];
                const recordList = this.$store.state.recordList;
                const newList=clone(recordList).filter(r=>r.type===type);
                let name='';
                for(i=0;i<newList.length;){
                    name=newList[i].tag;
                    for (j=0;j<newList.length;){

                        if(newList[j].tag===name){
                            value+=newList[j].amount;
                            newList.splice(j,1);
                        }else {
                            j++;
                        }
                    }
                    value=(value/amount*100).toFixed(2);
                    name=value.toString()+'%'+'-'+name;
                    result.push({name,value});
                    value=0;
                }
                return result;
            },
            billDate(){
                const date=new Date().toISOString();
                return dayjs(date).format('YYYY年MM月');
            },
            billDetail(name,type){
                let amount=0;
                let count =0;
                const now = dayjs();
                const recordList = this.$store.state.recordList;
                const newList=clone(recordList).filter(r=>r.type===type);
                for(let i=0;i<newList.length;i++){
                    if(now.isSame(dayjs(newList[i].createAt),'month')){
                        amount+=newList[i].amount;
                        count+=1;
                    }
                }
                if (name==='amount'){  return amount;}
                if(name==='count'){    return count;}
            },
            getDays() {
                const [year, month] = [dayjs().year(), dayjs().month()];
                const d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
                    if (month === 1) {
                        return 29;
                    } else {
                        return d[month];
                    }
                } else {
                    return d[month];
                }
            },
            days(name,type){
                const day=[];
                const days=this.getDays();
                const amounts=[];
                let amount=null;
                for(let i=1;i<=days;i++){
                    const date =dayjs().date(i);
                    for (let j=0;j<this.$store.state.recordList.length;j++){
                        if(dayjs(this.$store.state.recordList[j].createAt).isSame(date,'day')){
                            if(this.$store.state.recordList[j].type===type){amount+=this.$store.state.recordList[j].amount;}

                        }
                    }
                    day.push(i);
                    amounts.push(amount);
                    amount=null;
                }

             if(name==='day'){
                 return day;}
             if(name==='amounts'){
                 return amounts;}
          },
    },

        beforeCreate(){
            this.$store.commit('fetchRecords');

        },

    };

</script>

<style lang="scss" scoped>
    .v-chart-bar{
        background: #FFFFFF;
        width: 100%;
        height: 200px;
        margin-top: 10px;
        margin-bottom: 20px;

    }
    .v-chart-pie{
        background: #FFFFFF;
        width: 100%;
        height: 250px;
        margin-top: 10px;
        margin-bottom: 20px;

    }
    .title {
        background: #e8e8e8;
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
    }
    .summary{
        background: #FFFFFF;
        padding: 10px 8px;
        margin: 10px 4px ;
        div{
            padding: 4px 0;
        }
    }
    .last{
        display: flex;
        justify-content: space-between;
    }
    .type ::v-deep{
        background: #F5F4F9;
        height: 32px;
        > span {
            background: #DEECEC;
            margin: 3px 5px;
            color: #0D966D;
            height: 28px;
            width: 60px;
            font-size: 14px;
            border-radius: 5px;
            &.selected {
                background: #0D966D;
                color: #DEECEC;
            }
            &.selected::after {

                background: transparent;
            }
        }
    }
    .histogram{
        width: 100%;
        height: 150px;
    }
</style>