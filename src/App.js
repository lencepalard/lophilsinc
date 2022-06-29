
import './App.css';
import EmaillContentViewComponent from './Components/EmailContentViewComponent';
import HeaderView from './Components/HeaderView';

function App() {
  return (
    <div className="lophils-app">
        <HeaderView/>
        <EmaillContentViewComponent
        />
    </div>
  );
}

export default App;
