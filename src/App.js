import './App.css';
import WordCounter from './Components/WordCount';
import Calculator from './Components/Calculator';
import CP from './Components/ColorPickerExt';
import AgeCalculator from './Components/AgeCalc';
import Nav from './Components/Link';
import DummyData from './Components/DummyData';
import {BrowserRouter as HashRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
          <Route path="/Task1" element={<WordCounter />} />
          <Route path="/Task2" element={<Calculator />} />
          <Route path="/Task4" element={<DummyData />} />
          <Route path="/Task5" element={<AgeCalculator />} />
          <Route path="/" element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;
