import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquareText, 
  FileText, 
  Check, 
  Package, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { products } from '../../data/productsData';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function FeaturedProducts({ onOpenQuoteModal }) {
  // Flagship Corn Silage is item 0, remaining 5 items follow in an editorial asymmetric grid
  const flagship = products[0];
  const otherProducts = products.slice(1, 6);

  return (
    <section className="py-24 bg-brand-surface border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching visual screenshot and guidelines */}
        <SectionHeader
          badge="WHAT WE SPECIAL OFFER"
          title="Premium Agricultural Silage &amp; Livestock Fodder"
          subtitle="Explore our specialized crop forage lineup, ensiled and vacuum-sealed in standardized 50 KG bags for commercial dairy herds, cattle feeders, and bulk agricultural distributors."
        />

        {/* 1. Flagship Spotlight Showcase: Corn Silage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 group"
        >
          {/* Flagship Image */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-100">
            <img
              src={flagship.heroImage}
              alt={`${flagship.name} - AVD Silage Solutions`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-brand-lime text-slate-950 shadow-md">
                FLAGSHIP FORAGE
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs lg:hidden">
              <span className="font-bold flex items-center gap-1.5">
                <Package className="w-4 h-4 text-brand-lime" />
                50 KG Bags
              </span>
              <span className="font-extrabold text-brand-gold bg-black/60 px-3 py-1 rounded-full">
                {flagship.pricing}
              </span>
            </div>
          </div>

          {/* Flagship Content */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {flagship.category}
                </span>
                <span className="hidden lg:inline-block text-xs font-black text-brand-900 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  {flagship.pricing}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-2">
                <Link to={`/products/${flagship.slug}`} className="hover:text-brand-900 transition-colors">
                  {flagship.name}
                </Link>
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {flagship.shortDescription}
              </p>

              {/* Verified Features */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Verified Crop Characteristics:
                </h4>
                <ul className="space-y-2">
                  {flagship.verifiedBenefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={`/products/${flagship.slug}`}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full text-xs font-extrabold uppercase tracking-wider text-brand-900 bg-brand-50 hover:bg-brand-100 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenQuoteModal?.(flagship.name)}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-brand-lime hover:bg-brand-limeHover transition-all shadow-md"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Get Price</span>
                </button>
              </div>

              <button
                onClick={() => openWhatsAppEnquiry({ product: flagship.name })}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              >
                <MessageSquareText className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Inquiry for {flagship.name}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. Editorial Grid for remaining 5 products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200/90 transition-all duration-300 flex flex-col group"
            >
              {/* Product Card Image Container */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={product.heroImage}
                  alt={`${product.name} - AVD Silage Solutions`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-900/90 text-brand-lime backdrop-blur-md border border-brand-700/60 shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Packaging & Pricing Tag */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-200">
                    <Package className="w-3.5 h-3.5" />
                    50 KG Bags
                  </span>
                  <span className="font-extrabold text-brand-gold uppercase tracking-wider text-[11px] bg-black/50 px-2.5 py-0.5 rounded-full">
                    {product.pricing}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brand-900 transition-colors">
                    <Link to={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Factually Supported Key Benefits */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {product.verifiedBenefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons matching Rule 6 */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    {/* View Details */}
                    <Link
                      to={`/products/${product.slug}`}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full text-xs font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    {/* Get Price */}
                    <button
                      onClick={() => onOpenQuoteModal?.(product.name)}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full text-xs font-bold text-slate-950 bg-brand-lime hover:bg-brand-limeHover transition-all shadow-sm"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Get Price</span>
                    </button>
                  </div>

                  {/* WhatsApp Enquiry Button */}
                  <button
                    onClick={() => openWhatsAppEnquiry({ product: product.name })}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
                  >
                    <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View Complete Catalog CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-900 hover:bg-brand-800 text-brand-lime shadow-lg hover:shadow-xl transition-all"
          >
            <span>Explore Complete Specifications &amp; FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
