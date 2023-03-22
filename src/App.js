import './App.css';
import './style.css';
import Navbars from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Read from './pages/Read';
import NotFound from './pages/404';
import About from './pages/About';
import CreateProduct from './pages/CreateProduct';
import DataTable from 'react-data-table-component';
import { ProductTable } from './components/ProductTable';
import Footer from './pages/Footer';
import { Container } from 'react-bootstrap';
import FAQ from './pages/FAQ';

function App() {

  return (
    <>
    <Navbars />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Home />} />
              <Route path='/read/:id' element={<Read />} />
              <Route path='/about' element={<About />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/create' element={<CreateProduct update={false} />} />
              <Route path='/update' element={<CreateProduct update={true}/>}/>
              <Route path='/data-table' element={<ProductTable />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      <Container fluid className='bg-light'>
        <Footer />
      </Container>
      </>
  );
}

export default App;
