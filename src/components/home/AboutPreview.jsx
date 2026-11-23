import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Check, 
  ArrowRight, 
  Wheat, 
  Building2, 
  Sparkles,
  ShieldCheck,
  Package
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function AboutPreview({ onOpenQuoteModal }) {
  const featuredOfferings = [
    { title: "Corn Silage", desc: "Energy-dense fermented whole-crop maize for balanced dairy rations." },
    { title: "Pioneer BMR Corn Varieties", desc: "Lower-lignin genetic trait engineered for enhanced fiber digestibility." },
    { title: "Whole-Crop Maize", desc: "Total-plant forage combining ear, grain, stalk, and leaf matter." },
    { title: "Hybrid Napier Grass", desc: "High-biomass succulent perennial fodder for economical green roughage." }
  ];

  return (
    <section id="about-section" className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Editorial Composition with Animations */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-surface bg-brand-surface">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                alt="Agricultural fields and silage production operations at AVD Silage Solutions"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
              
              {/* Bottom In-image Floating Location Pill */}
              <div className="absolute bottom-6 left-6 right-6 text-white p-5 rounded-2xl bg-brand-950/80 backdrop-blur-md border border-white/10 shadow-xl">
                <div className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Processing Facility &amp; Operational Base</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  {siteConfig.address.full}
                </p>
              </div>
            </div>

            {/* Overlapping Badge Pill (Top-Right Floating) */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-4 bg-brand-lime text-slate-950 rounded-2xl shadow-xl border border-white/40"
            >
              <Package className="w-8 h-8 text-brand-950" />
              <div className="text-left">
                <span className="block text-[11px] font-extrabold uppercase tracking-wider">Modular Supply</span>
                <span className="block text-sm font-black">50 KG Vacuum Bags</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Narrative matching Section 5 */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-50 text-brand-900 border border-brand-200 mb-4">
                <Building2 className="w-3.5 h-3.5 text-brand-900" />
                <span>About AVD Silage Solutions</span>
              </div>

              {/* Exact Heading from Rule 5 */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                {siteConfig.aboutHeading}
              </h2>

              {/* Exact Description from Rule 5 */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                {siteConfig.aboutDescription}
              </p>
            </div>

            {/* Key Offerings Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-extrabold text-brand-900 uppercase tracking-widest">
                Our Core Fodder Specialization
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredOfferings.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    className="p-4 rounded-2xl bg-brand-surface border border-slate-200 hover:border-brand-300 transition-all"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="p-1 rounded-full bg-brand-900 text-brand-lime flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <p className="text-[11px] text-slate-600 leading-tight mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button matching Rule 5: Discover Our Story */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-900 hover:bg-brand-800 text-brand-lime shadow-md hover:shadow-lg transition-all"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenQuoteModal?.()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-700 hover:text-brand-900 hover:bg-brand-50 border border-slate-300 transition-all"
              >
                <span>Request Commercial Pricing</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
