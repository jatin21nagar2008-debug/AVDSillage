import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Layers, 
  Package, 
  FileText, 
  Wheat,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { siteConfig } from '../../config/siteConfig';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  // 5 exact points specified in Rule 7
  const cards = [
    {
      icon: Sprout,
      title: "Agricultural Fodder Solutions",
      desc: "Specialized crop cultivation and scientific ensiling dedicated to maintaining consistent dry-matter intake and herd nutrition.",
      tag: "Specialized Agronomy"
    },
    {
      icon: Layers,
      title: "Multiple Fodder Product Options",
      desc: "A wide agricultural forage lineup including standard Corn Silage, Pioneer hybrids, Pioneer BMR corn varieties, whole-crop maize, and Napier grass.",
      tag: "Diverse Crops"
    },
    {
      icon: Package,
      title: "Convenient 50 KG Packaging",
      desc: "Standardized multi-layer vacuum-sealed bags that eliminate bunker face spoilage, protect against sunlight, and enable single-person handling.",
      tag: "Airtight Seal"
    },
    {
      icon: FileText,
      title: "Enquiry-Based Pricing",
      desc: "Customized, competitive commercial quotations tailored specifically to your farm tonnage, schedule, and destination requirements.",
      tag: "Direct B2B Rates"
    },
    {
      icon: Wheat,
      title: "Solutions for Modern Dairy Farming",
      desc: "Dependable year-round forage stability engineered to cushion commercial dairy farms against summer and seasonal green fodder shortages.",
      tag: "Dairy Stability"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="PROVEN CAPABILITIES"
          title="Why Work with AVD Silage Solutions"
          subtitle="Built around genuine agricultural capabilities, verified operational principles, and direct commercial transparency from Bhadugaon, Timarni, Harda."
        />

        {/* 5 Cards Layout (2-row asymmetrical layout with high visual interest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'bg-gradient-to-br from-brand-950 via-brand-900 to-brand-forest text-white border-brand-800' : 'bg-brand-surface text-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    idx === 0 ? 'bg-brand-lime text-slate-950' : 'bg-brand-900 text-brand-lime'
                  }`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    idx === 0 ? 'bg-white/10 text-brand-lime border border-white/20' : 'bg-brand-50 text-brand-900 border border-brand-200'
                  }`}>
                    {card.tag}
                  </span>
                </div>

                <h3 className={`text-lg font-bold font-heading mb-2.5 ${
                  idx === 0 ? 'text-white' : 'text-slate-900'
                }`}>
                  {card.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  idx === 0 ? 'text-emerald-100/90' : 'text-slate-600'
                }`}>
                  {card.desc}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t text-[11px] font-semibold flex items-center gap-1.5 ${
                idx === 0 ? 'border-white/15 text-brand-lime' : 'border-slate-200 text-brand-900'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business Offering</span>
              </div>
            </motion.div>
          ))}

          {/* Action Callout Box filling the 6th slot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-7 rounded-3xl bg-brand-lime text-slate-950 shadow-card flex flex-col justify-between border border-brand-limeHover"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest bg-black/10 px-3 py-1 rounded-full inline-block mb-3">
                Commercial Dispatch
              </span>
              <h3 className="text-xl font-black font-heading text-slate-950">
                Ready to Secure Bulk Silage?
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 mt-2 leading-relaxed font-medium">
                We coordinate truckload dispatches across Madhya Pradesh &amp; neighboring dairy corridors.
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal?.()}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Get a Business Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
