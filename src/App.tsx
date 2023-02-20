import './App.css';
import DropDownList from './components/DropDownList';
import Card from './components/Cards/Card';
import CardWithHeader from './components/Cards/CardWithHeader';
import ChartCard from './components/Cards/ChartCard';

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
    <ChartCard title="Chart card" chartType='bar'></ChartCard>
    </div>
  );
 
}

export default App;
