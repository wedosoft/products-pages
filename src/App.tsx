import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import VendorPage from './pages/VendorPage.tsx';
import ProductPage from './pages/ProductPage.tsx';
import ComparePage from './pages/ComparePage.tsx';
import ContactPage from './pages/ContactPage.tsx';

// CSS 설정
import './index.css';

function App() {
  // GitHub Pages에서 호스팅될 때의 기본 경로 설정
  const basename = process.env.NODE_ENV === 'production' ? '/products-pages' : '';
  
  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:vendorId" element={<VendorPage />} />
          <Route path="/:vendorId/:productId" element={<ProductPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
