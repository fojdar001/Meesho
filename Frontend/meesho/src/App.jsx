import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Navbar from './Components/Navbar';  // Ensure Navbar has default export
import ProductPage from './pages/ProductPage';  
import ProfilePage from './pages/ProfilePage';
import ShopkeeperRegister from './pages/ShopkeeperRegister';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopregister" element={<ShopkeeperRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
