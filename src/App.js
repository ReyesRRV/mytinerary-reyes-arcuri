
import Welcome from './pages/Welcome';
import './styles/Welcome.css';
import Home from './pages/Home';
import Cities from './pages/Cities';
import {BrowserRouter , Routes, Route, } from 'react-router-dom'
import UnderConstriction from './layouts/UnderConstriction';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/" element={<Home />} />
          <Route path='/UnderConstriction' element={<UnderConstriction />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
