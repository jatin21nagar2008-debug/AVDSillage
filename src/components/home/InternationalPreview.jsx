import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Ship, 
  FileText, 
  MessageSquareText, 
  Mail, 
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { siteConfig } from '../../config/siteConfig';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function InternationalPreview({ onOpenQuoteModal }) {
  const [selectedCountry, setSelectedCountry] = useState('United Arab Emirates');

  return (
    <section className="py-24 bg-brand-forest text-white border-b border-brand-800 relative overflow-hidden">
      {/* Background World Graphic Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8E870_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Rule 9 */}
        <SectionHeader
          theme="dark"
          badge="GLOBAL BUSINESS INITIATIVE"
          title={siteConfig.internationalHeading}
          subtitle={siteConfig.internationalDescription}
        />

        {/* Factual Target Opportunity Disclaimer */}
        <div className="mb-12 max-w-3xl mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 text-emerald-200/90 text-xs flex items-start gap-3 backdrop-blur-md">
          <Info className="w-5 h-5 text-brand-lime flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Target Market Notice:</strong> Overseas trade corridors listed below represent target prospective markets for our export supply framework and commercial partnerships. We actively invite inquiries from importers, feed traders, and commercial dairy operators.
          </p>
        </div>

        {/* Global Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Target Trade Hubs & Visual Map Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-brand-950/85 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-brand-lime text-xs font-bold uppercase tracking-wider">
                  <Ship className="w-4 h-4" />
                  <span>Maritime &amp; Overland Supply Framework</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Origin: India (MP)</span>
              </div>

              {/* Target Markets Tag Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {siteConfig.targetMarkets.map((m) => {
                  const isSelected = selectedCountry === m.country;
                  return (
                    <button
                      key={m.code}
                      onClick={() => setSelectedCountry(m.country)}
                      className={`p-3 rounded-2xl text-left transition-all border text-xs font-bold ${
                        isSelected 
                          ? 'bg-brand-lime text-slate-950 border-brand-lime shadow-md scale-102' 
                          : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
                      }`}
                    >
                      <div className="text-[10px] uppercase opacity-75 font-mono">{m.region}</div>
                      <div className="mt-0.5 truncate">{m.country}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Route Info */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-brand-lime">Selected Priority Region:</span>
                  <span className="font-mono text-white font-bold">{selectedCountry}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We prepare containerized pallet arrangements in 50 KG vacuum-sealed units suitable for standard 20ft and 40ft ocean dry containers, preserving forage stability during maritime voyages.
                </p>
              </div>
            </div>

            {/* Quick Export Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xs font-bold text-brand-lime uppercase tracking-wider">FCL &amp; LCL Inquiries</h4>
                <p className="text-[11px] text-slate-300 mt-1">Flexible metric tonnage dispatch planning.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xs font-bold text-brand-lime uppercase tracking-wider">Hermetic Packaging</h4>
                <p className="text-[11px] text-slate-300 mt-1">UV &amp; puncture resistant 50 KG bags.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xs font-bold text-brand-lime uppercase tracking-wider">Direct RFQ Response</h4>
                <p className="text-[11px] text-slate-300 mt-1">B2B commercial quotation support.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Global Buyer RFQ Action Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-900 border border-brand-200 mb-3">
              <Globe2 className="w-3.5 h-3.5 text-brand-900" />
              <span>International Procurement</span>
            </span>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              Submit International RFQ
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Are you an importer, distributor, or commercial dairy operator in the GCC, South Asia, or neighboring agricultural regions?
            </p>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => onOpenQuoteModal?.("International Bulk Supply")}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-900 hover:bg-brand-800 text-brand-lime shadow-lg hover:shadow-xl transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Export Quotation Request</span>
              </button>

              <button
                onClick={() => openWhatsAppEnquiry({ 
                  country: selectedCountry,
                  product: "International Silage Supply Inquiry",
                  quantity: "1",
                  unit: "40ft Container"
                })}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
              >
                <MessageSquareText className="w-4 h-4" />
                <span>Chat with Export Desk via WhatsApp</span>
              </button>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-brand-900" />
                  {siteConfig.email}
                </span>
                <span>•</span>
                <Link to="/export" className="text-brand-900 hover:underline font-bold">
                  View Full Export Portal
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
