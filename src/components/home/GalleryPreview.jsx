import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Maximize2, 
  ArrowRight, 
  ImageIcon
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { galleryItems, galleryCategories } from '../../data/galleryData';

export default function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems.slice(0, 6)
    : galleryItems.filter(item => item.category === activeCategory).slice(0, 6);

  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="VISUAL ARCHIVE"
          title="Field Operations &amp; Silage Showcase"
          subtitle="Explore modern green tractors operating in lush maize fields, precision forage harvesters, 50 KG vacuum-sealed silage packaging, and commercial dairy feeding."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-900 text-brand-lime shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Editorial Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * idx, duration: 0.5 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover cursor-pointer border border-slate-200/90 aspect-[4/3] bg-slate-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              {/* Dark Hover Gradient Mask with Text Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-lime">
                  {item.category}
                </span>
                <h4 className="text-base font-bold font-heading text-white mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-lime">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-surface hover:bg-brand-100 text-brand-900 border border-brand-200 shadow-sm transition-all"
          >
            <span>View Full Visual Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Lightbox Modal with Animated Entrance & Exit */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
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
                <span className="text-xs font-bold text-brand-lime uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
