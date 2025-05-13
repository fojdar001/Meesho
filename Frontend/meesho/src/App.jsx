import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import ProductPage from './pages/ProductPage';  
import ProfilePage from './pages/ProfilePage';
import ShopkeeperRegister from './pages/ShopkeeperRegister';
import Footer from './Components/Footer';
import './App.css';



function App() {
  return (

      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shopregister" element={<ShopkeeperRegister />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
