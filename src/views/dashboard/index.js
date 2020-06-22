import React, { Component } from 'react'
import {Card} from 'antd'
import echarts from 'echarts'
const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
}
const option2 = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '车速',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '车速'}]
        }
    ]
};

export default class index extends Component {
    componentDidMount(){
        let mycharts = echarts.init(this.dashboard)
        let mycharts2 = echarts.init(this.dashboard2)
        mycharts.setOption(option)
        mycharts2.setOption(option2);
        setInterval(function () {
            option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            mycharts2.setOption(option2, true);
        },2000);
        
    }

    render() {
        return (
            <>
            <Card style={{width:600,float:'left'}}>
                <div ref={el=>this.dashboard=el} style={{width:600,height:300}}></div>
            </Card>
            <Card style={{width:650,float:'left'}}>
            <div ref={el=>this.dashboard2=el} style={{width:600,height:300}}></div>
            </Card>
            </>
        )
    }
}
