import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquareText, 
  FileText, 
  CheckCircle2,
  ShieldCheck,
  Package
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function ConversionCTA({ onOpenQuoteModal }) {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-brand-800 relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lime/20 text-brand-lime border border-brand-lime/30 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Manufacturer Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Looking for Consistent Silage Supply from Central India?
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
              Whether you manage an expanding dairy herd of 500+ cattle, require regular truckloads of 50 KG vacuum-sealed corn silage bags, or seek custom fodder partnerships, AVD Silage Solutions is ready to support your feed program.
            </p>

            {/* Key Trust Signals */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                Bhadugaon, Harda Processing Unit
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                Standard 50 KG Airtight Bag Supply
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                Pan-India &amp; Global Export Logistics
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuoteModal?.("Direct Commercial Supply")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-lime hover:bg-brand-limeHover text-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>SUBMIT BUSINESS ENQUIRY</span>
              </button>

              <button
                onClick={() => openWhatsAppEnquiry({ product: "Bulk Dairy Supply Inquiries" })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300"
              >
                <MessageSquareText className="w-4 h-4 text-brand-lime" />
                <span>Chat via Official WhatsApp</span>
              </button>
            </div>

            <p className="text-[11px] text-emerald-200/70 pt-2 font-mono">
              Plant Location: {siteConfig.address.full}
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
