import Index from './pages/Index';
import Cities from './pages/Cities';
import {BrowserRouter , Routes, Route, } from 'react-router-dom'
import UnderConstriction from './layouts/UnderConstriction';
import Header from './components/Header';
import NewCity from './pages/NewCity';
import Details from './components/Details';
import EditCity from './pages/EditCity'

function App() {
  return (
    <>

      <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/Cities" element={<Cities />} />
          <Route path="/" element={<Index />} />
          <Route path='/NewCity' element={<NewCity />}/>
          <Route path='/cities/:id' element={<Details />}/> 
          <Route path='/EditCity' element={<EditCity />}/>
          <Route path='*' element={<UnderConstriction />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
