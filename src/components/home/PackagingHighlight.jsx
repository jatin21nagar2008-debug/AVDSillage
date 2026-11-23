import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ShieldCheck, 
  Sun, 
  Wind, 
  Truck, 
  FileText, 
  MessageSquareText, 
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function PackagingHighlight({ onOpenQuoteModal }) {
  const packagingFeatures = [
    {
      icon: Layers,
      title: "Multi-Layer Barrier Film",
      desc: "Engineered polymeric structure designed for high puncture resistance during rough farm transport and mechanical handling."
    },
    {
      icon: Sun,
      title: "UV-Stabilized Compound",
      desc: "Inhibits solar degradation and thermal breakdown, protecting nutritional integrity even when stored in outdoor farm sheds."
    },
    {
      icon: Wind,
      title: "Hermetic Vacuum Sealing",
      desc: "Evacuates oxygen to sustain strict anaerobic fermentation, locking out mold, yeast growth, and aerobic spoilage."
    },
    {
      icon: Truck,
      title: "Standardized 50 KG Portability",
      desc: "Optimized for manual farm distribution without requiring heavy front-loader machinery, while reducing open bunker waste."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-lime/20 text-brand-lime border border-brand-lime/30">
                <Package className="w-3.5 h-3.5" />
                <span>Modular Forage Preservation</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                Standardized 50 KG Vacuum-Sealed Silage Packaging
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Traditional pit or trench silage often suffers 15% to 25% dry-matter spoilage along open exposed face lines. AVD Silage Solutions utilizes heavy-duty 50 KG vacuum-sealed bags that seal each ration in an airtight anaerobic capsule—guaranteeing freshness until the moment it reaches the feed trough.
              </p>

              {/* Technical Spec List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {packagingFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                    <feat.icon className="w-5 h-5 text-brand-gold mb-2" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{feat.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal?.("50 KG Silage Bags (Bulk)")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-lime hover:bg-brand-limeHover text-slate-950 shadow-lg hover:shadow-xl transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request 50 KG Bulk Quote</span>
                </button>

                <button
                  onClick={() => openWhatsAppEnquiry({ product: "50 KG Silage Bags Availability" })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Check Availability on WhatsApp</span>
                </button>

                <Link
                  to="/packaging"
                  className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-semibold ml-2"
                >
                  <span>Learn more about packaging specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Representation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=900&q=80"
                  alt="High barrier 50 KG corn silage bags stored on pallets"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />

                {/* Floating Bag Specs Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-900/90 backdrop-blur-md p-4 rounded-2xl border border-brand-700/60 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-brand-800">
                    <span className="text-slate-300">Standard Net Unit:</span>
                    <span className="font-bold text-brand-gold">50 KG Net Weight</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-slate-300">Handling Type:</span>
                    <span className="font-semibold text-white">Manual / Palletized Truckloads</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
