import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import './components/Header.css';
import About from'./pages/About';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
