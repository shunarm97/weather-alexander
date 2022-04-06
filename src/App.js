import './App.css';
import City from './components/City';
import ButtonTemp from './components/ButtonTemp/ButtonTemp'
import Icons from './components/icons/Icons';
import Others from './components/Others/Others';
// import GetWather from './services/GetWather';
// import GetCoords from './services/GetCoords';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <GetWather/> */}
        {/* <GetCoords/> */}
        {/* <GetWather/> */}
        <City />
        <Icons/>
       <ButtonTemp/>
       <Others/>
      </header>
    </div>
  );
}

export default App;
