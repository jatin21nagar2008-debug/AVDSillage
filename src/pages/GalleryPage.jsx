import React, { useState } from 'react';
import { 
  X, 
  Maximize2, 
  Image as ImageIcon, 
  Layers, 
  ArrowRight,
  Filter 
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { galleryItems, galleryCategories } from '../data/galleryData';

export default function GalleryPage({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const breadcrumbItems = [
    { name: "Gallery", path: "/gallery" }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="Agricultural Photo Gallery | Corn Fields & Silage Operations"
        description="View real agricultural photographs of lush corn fields, mechanized harvesting, 50 KG vacuum-sealed silage packaging, and dairy feeding from AVD Silage Solutions in Harda, MP."
        canonicalPath="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Banner */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-lime/20 text-brand-lime border border-brand-lime/30">
              <ImageIcon className="w-3.5 h-3.5" />
              Operational Photography
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Agricultural Gallery &amp; Field Operations
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Explore authentic glimpses into our whole-crop maize cultivation, modern green tractors operating in lush fields, standardized 50 KG vacuum packaging, and dairy herd forage feeding.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs ${
                activeCategory === cat.id
                  ? 'bg-brand-900 text-brand-gold shadow-md scale-102'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-slate-200/90 aspect-[4/3] bg-slate-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold">
                  {item.category}
                </span>
                <h4 className="text-base font-bold font-heading text-white mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-heading text-slate-900">
            Require Custom Batch Documentation or Bulk Sampling?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            We provide verified sample bags and batch certificates to commercial dairy farms and corporate agricultural buyers upon request.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal?.()}
              className="px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-900 hover:bg-brand-800 text-brand-gold shadow-md transition-all"
            >
              Request Commercial Quote
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />

            <div className="p-6 bg-brand-950 text-white border-t border-white/10">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold font-heading text-white mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
