import CardWithHeader from "../CardWithHeader";
import {VictoryBar, VictoryChart, VictoryLine} from 'victory';

type chartType = 'bar' | 'chart' | 'line';

const components = {
    bar:VictoryBar,
    chart:VictoryChart,
    line:VictoryLine
}

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

export default function ChartCard(props:{title:string, chartType:chartType}){
    const Chart = components[props.chartType] as React.ElementType
    return (
        <CardWithHeader title={props.title}>
        <Chart data={data}  x="quarter" y="earnings"/>
       
        </CardWithHeader>
    )
}