import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  FileText, 
  MessageSquareText, 
  Package, 
  Check, 
  Sparkles 
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { products } from '../data/productsData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export default function ProductsPage({ onOpenQuoteModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Maize Silage', 'Hybrid Maize Silage', 'Brown Midrib Silage', 'Whole-Crop Forage', 'Perennial Green Fodder', 'Organic Farming Solutions'];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const breadcrumbItems = [
    { name: "Products", path: "/products" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": p.name,
      "description": p.shortDescription,
      "image": p.heroImage,
      "url": `https://avdsilage.com/products/${p.slug}`,
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "price": "Contact for Pricing"
      }
    }))
  };

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="Agricultural Silage & Livestock Fodder Products"
        description="Browse premium corn silage, Pioneer corn silage, Pioneer BMR corn, whole-crop maize, hybrid napier grass, and organic fertilizer by AVD Silage Solutions. Packaged in 50 KG vacuum-sealed bags."
        canonicalPath="/products"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Banner */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Package className="w-3.5 h-3.5" />
              Verified Agricultural Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Premium Silage &amp; Forage Products
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Standardized, vacuum-sealed forage solutions developed for commercial dairy production, cattle feeding, and livestock cooperatives. All silage products are packaged in durable 50 KG multi-layer bags.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by crop, seed variety, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
              />
            </div>

            {/* Total Results Count */}
            <div className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              Showing {filteredProducts.length} of {products.length} Products
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-900 text-brand-gold shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200/90 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-900/90 text-brand-gold backdrop-blur-md border border-brand-700/60 shadow-sm">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-200">
                    <Package className="w-3.5 h-3.5" />
                    50 KG Silage Bag
                  </span>
                  <span className="font-extrabold text-brand-gold uppercase tracking-wider text-[11px] bg-black/40 px-2 py-0.5 rounded">
                    {product.pricing}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brand-900 transition-colors">
                    <Link to={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Verified Features:
                    </h4>
                    <ul className="space-y-1.5">
                      {product.verifiedBenefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100/80 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <button
                      onClick={() => onOpenQuoteModal?.(product.name)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-slate-950 bg-brand-lime hover:bg-brand-limeHover transition-all shadow-sm"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Get Price</span>
                    </button>
                  </div>

                  <button
                    onClick={() => openWhatsAppEnquiry({ product: product.name })}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
                  >
                    <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry for {product.name}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Feedback */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto my-12">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or reset category filter to "All".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-900 text-brand-gold text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
