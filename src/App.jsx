import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/cart/Cart/Cart";
import Footer from "./components/common/Footer/Footer";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Catálogo principal */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />

          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoriaId" element={<ItemListContainer />} />

          {/* Detalle de un producto */}
          <Route path="/item/:ItemId" element={<ItemDetailContainer />} />

          {/* 🛒 Carrito */}
          <Route path="/cart" element={<Cart />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

