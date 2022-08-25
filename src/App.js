import Welcome from './pages/Welcome';
import './styles/Welcome.css';
import Index from './pages/Index';
import Cities from './pages/Cities';
import {BrowserRouter , Routes, Route, } from 'react-router-dom'
import UnderConstriction from './layouts/UnderConstriction';
import Header from './components/Header';


function App() {
  return (
    <>

      <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/" element={<Index />} />
          <Route path='*' element={<UnderConstriction />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
