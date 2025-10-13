import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Carrito from './pages/Carrito';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import AddProduct from './pages/AddProduct';
import SingUp from './pages/SingUp';
import Login from './pages/Login';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      <Footer />

      </CartProvider>
      
    </ProductsProvider>
    
  );
}

export default App;