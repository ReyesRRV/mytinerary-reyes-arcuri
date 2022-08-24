
import Welcome from './pages/Welcome';
import './styles/Welcome.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cities from './pages/Cities';
import {BrowserRouter , Routes, Route, } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
