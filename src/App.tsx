import './App.css';
import DropDownList from './components/DropDownList';
import Card from './components/Cards/Card';
import CardWithHeader from './components/Cards/CardWithHeader';
import ChartCard from './components/Cards/ChartCard';

const tempChartDAta = [
  {Months: 1, 'Number of Companies': 13000},
  {Months: 2, 'Number of Companies': 16500},
  {Months: 3, 'Number of Companies': 14250},
  {Months: 4, 'Number of Companies': 19000}
];


function App() {
  return (
    <div>
    <DropDownList data={['anton','sahked','tal']}></DropDownList>
    <Card>
      <div>
        <p>HEllo</p>
      </div>
    </Card>
    <CardWithHeader title='Jobs Graph'>
      <div>
        TEST
      </div>
    </CardWithHeader>
    <ChartCard title="Chart card" chartType='bar' xAxisName="Months" yAxisName='Number of Companies' data={tempChartDAta}></ChartCard>
    </div>
  );
 
}

export default App;
