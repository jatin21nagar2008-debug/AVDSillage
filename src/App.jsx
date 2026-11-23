import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import EnquiryModal from './components/common/EnquiryModal';
import LoadingScreen from './components/common/LoadingScreen';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PackagingPage from './pages/PackagingPage';
import QualityProcessPage from './pages/QualityProcessPage';
import ExportPage from './pages/ExportPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('Corn Silage');

  const handleOpenQuoteModal = (productName = 'Corn Silage') => {
    setSelectedProductForQuote(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream text-slate-800">
      {/* Branded Loading Screen (Rule 14A) */}
      <LoadingScreen />

      {/* Top Sticky Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/products" element={<ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/products/:slug" element={<ProductDetailPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/packaging" element={<PackagingPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/quality-process" element={<QualityProcessPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/export" element={<ExportPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/gallery" element={<GalleryPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Global Floating WhatsApp and Mobile Action Bar */}
      <FloatingWhatsApp onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Global Business Enquiry / Quote Modal */}
      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preSelectedProduct={selectedProductForQuote}
      />
    </div>
  );
}
