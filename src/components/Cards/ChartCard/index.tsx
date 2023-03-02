import CardWithHeader from "../CardWithHeader";
import {VictoryBar, VictoryChart, VictoryLine} from 'victory';

// i use Victory library for charts

type chartType = 'bar' | 'chart' | 'line';


interface Props{
    title:string,
    chartType:chartType,
    xAxisName:string | number,
    yAxisName:string | number
    data: {}[]
  }

const components = {
    bar:VictoryBar,
    chart:VictoryChart,
    line:VictoryLine
}

export default function ChartCard(props:Props){
    const Chart = components[props.chartType] as React.ElementType;

    return (
        <CardWithHeader title={props.title}>
        <Chart data={props.data} x={props.xAxisName} y={props.yAxisName}/>
       
        </CardWithHeader>
    )
}