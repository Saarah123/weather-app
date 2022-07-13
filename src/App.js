
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Temp} from './components/Temp';

function App() {
  return (
   <Routes>
   < Route path ="/"  element={<Temp/>} />
   </Routes>
  );
}

export default App;
