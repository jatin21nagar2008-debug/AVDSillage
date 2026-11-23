import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Package, MessageSquareText } from 'lucide-react';
import SEO from '../components/common/SEO';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-brand-surface px-4">
      <SEO
        title="Page Not Found"
        description="The requested page could not be located on AVD Silage Solutions."
        canonicalPath="/404"
      />

      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-900 border border-brand-200 flex items-center justify-center mx-auto">
          <Package className="w-8 h-8 text-brand-gold" />
        </div>

        <div>
          <span className="text-xs font-black font-mono text-brand-gold uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-2xl font-bold font-heading text-slate-900 mt-1">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            The page you are looking for may have been moved, updated, or does not exist.
          </p>
        </div>

        <div className="pt-2 space-y-2">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-900 hover:bg-brand-800 text-brand-gold text-xs font-bold shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all"
          >
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
