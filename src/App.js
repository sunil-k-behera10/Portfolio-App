import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from  './components/Portfolio'

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
