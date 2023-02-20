import './App.css';
import DropDownList from './components/DropDownList';
import Card from './components/Card';
import CardWithHeader from './components/CardWithHeader';

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
    </div>
  );
 
}

export default App;
