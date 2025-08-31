import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Catálogo principal */}
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />

        {/* Catálogo filtrado por categoría */}
        <Route path="/category/:categoriaId" element={<ItemListContainer/>} />

        {/* Detalle de un producto */}
        <Route path="/item/:ItemId" element={<ItemDetailContainer/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

