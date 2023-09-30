import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/Projects' element={<Projects/>}></Route>
    <Route path="/Certifications" element={<Certifications/>}></Route>
    </Routes>
    </>
  );
}

export default App;
