import './App.css';
import GetCoord from './services/GetCoord';
// import GetWather from './services/GetWather';
import City from './components/City';
import Country from './components/Country';
// import Temperature from './components/Temperature';
// import MaxTemp from './components/MaxTemp';
// import MinTemp from './components/MinTemp';
import ButtonTemp from './components/ButtonTemp/ButtonTemp'
import Icons from './icons/Icons';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <GetCoord/> */}
        {/* <GetCoord/> */}
        <Icons/>
        <div>
        <City />, <Country />
       </div>
       <ButtonTemp/>
      </header>
    </div>
  );
}

export default App;
