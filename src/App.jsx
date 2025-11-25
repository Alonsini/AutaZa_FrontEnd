import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/organisms/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Footer from './components/organisms/Footer';
import SignUp from './pages/SignUp';
import Consignaciones from "./pages/Consignaciones";
import Developer from "./pages/Developer";
import DeveloperUsers from "./pages/DeveloperUsers";
import DeveloperDatabase from "./pages/DeveloperDatabase";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/AddProduct" element={<Consignaciones />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/developer/users" element={<DeveloperUsers />} />
        <Route path="/developer/database" element={<DeveloperDatabase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;