
import Welcome from './pages/Welcome';
import './styles/Welcome.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Places from './components/Places'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
