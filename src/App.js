import './App.css';
import City from './components/City';
import ButtonTemp from './components/ButtonTemp/ButtonTemp'
import Icons from './components/icons/Icons';
import Others from './components/Others/Others';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <City />
        <Icons/>
        <ButtonTemp/>
        <Others/>
      </header>
    </div>
  );
}

export default App;
