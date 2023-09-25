import './App.css';
import { Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ProductsPage from './pages/ProductsPage/ProductsPage';
import NavBar from './components/NavBar/NavBar';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
