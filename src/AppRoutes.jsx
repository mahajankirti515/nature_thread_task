import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Cart from './pages/Cart';

import Women from './pages/CategoryPages/Women';
import Men from './pages/CategoryPages/Men';
import Kids from './pages/CategoryPages/Kids';
import PersonalCare from './pages/CategoryPages/PersonalCare';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/women" element={<Women />} />
      <Route path="/shop/men" element={<Men />} />
      <Route path="/shop/kids" element={<Kids />} />
      <Route path="/shop/personal-care" element={<PersonalCare />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
