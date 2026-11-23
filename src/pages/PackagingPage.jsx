import React from 'react';
import { 
  Package, 
  Layers, 
  Sun, 
  Wind, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  MessageSquareText, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export default function PackagingPage({ onOpenQuoteModal }) {
  const breadcrumbItems = [
    { name: "Packaging", path: "/packaging" }
  ];

  const packagingFeatures = [
    {
      icon: Layers,
      title: "Co-Extruded Multi-Layer Film",
      description: "Engineered polymeric structure offering extreme puncture, tear, and burst resistance to endure rough transit and field handling without breach."
    },
    {
      icon: Sun,
      title: "High UV-Inhibitor Protection",
      description: "Infused with specialized UV stabilizers that protect organic plant proteins and carotenes against solar thermal degradation in farm godowns."
    },
    {
      icon: Wind,
      title: "Mechanical Vacuum Anaerobic Barrier",
      description: "Oxygen is actively evacuated prior to sealing, preventing aerobic reheating, mold proliferation, and dry-matter fermentation losses."
    },
    {
      icon: Truck,
      title: "Optimized 50 KG Ergonomics",
      description: "A practical single-man handling size designed for modular dairy feeding, eliminating the daily face-line spoilage typical of open trench bunkers."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="50 KG Silage Packaging | Heavy-Duty Vacuum-Sealed Silage Bags"
        description="Discover AVD Silage Solutions' standardized 50 KG silage packaging. UV-stabilized, multi-layered, vacuum-sealed bags designed for aerobic stability, pallet handling, and zero face-spoilage."
        canonicalPath="/packaging"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Banner */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-16">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Package className="w-3.5 h-3.5" />
              Standardized Packaging Technology
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              50 KG Vacuum-Sealed Silage Bags
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Engineered to eliminate open-pit aerobic face spoilage, maintain long-term anaerobic stability, and enable dependable palletized transportation across India and global seaports.
            </p>
          </div>
        </div>

        {/* Technical Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              centered={false}
              badge="Packaging Engineering"
              title="Why 50 KG Vacuum Packaging Excels"
              subtitle="Silage quality is only as durable as its anaerobic barrier. Our packaging eliminates the persistent vulnerabilities of pit ensiling."
            />

            <div className="space-y-4">
              {packagingFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-50 text-brand-900 border border-brand-200 flex-shrink-0">
                    <feat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">{feat.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1000&q=80"
                alt="50 KG Silage bags loaded on pallets"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Comparative Pit vs Bag Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card mb-16">
          <SectionHeader
            badge="Storage Comparison"
            title="Conventional Pit Bunker vs. 50 KG Vacuum Bags"
            subtitle="Understand the economic and nutritional advantages of modular sealed packaging."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-brand-surface text-slate-900">
                  <th className="p-4 font-bold uppercase tracking-wider">Evaluation Factor</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-slate-500">Traditional Pit Silage</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-brand-900 bg-brand-50">AVD 50 KG Vacuum Bags</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Aerobic Spoilage Losses</td>
                  <td className="p-4 text-red-600">15% – 25% (Face exposure &amp; top rot)</td>
                  <td className="p-4 font-bold text-emerald-700 bg-brand-50/50">Near-zero until opened</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Capital Infrastructure</td>
                  <td className="p-4">Requires concrete bunkers, tarps, tires</td>
                  <td className="p-4 font-bold text-emerald-700 bg-brand-50/50">Zero civil construction needed</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Handling Flexibility</td>
                  <td className="p-4">Requires tractor loaders &amp; fuel</td>
                  <td className="p-4 font-bold text-emerald-700 bg-brand-50/50">Convenient manual feeding</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Transportability</td>
                  <td className="p-4">Bulk loose silage loses moisture fast</td>
                  <td className="p-4 font-bold text-emerald-700 bg-brand-50/50">Stackable, truckload &amp; container-ready</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Ration Dosing Control</td>
                  <td className="p-4">Estimated bucket loads</td>
                  <td className="p-4 font-bold text-emerald-700 bg-brand-50/50">Precise 50 KG net increments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Commercial Inquiry CTA */}
        <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Inquire for 50 KG Bag Truckload or Container Availability
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              We arrange direct dispatches from our Timarni plant across Madhya Pradesh, neighboring states, and export logistics hubs.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal?.("50 KG Silage Bags (Bulk)")}
              className="px-7 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-gold hover:bg-brand-goldHover text-brand-950 shadow-md transition-all"
            >
              Request 50 KG Bulk Pricing
            </button>
            <button
              onClick={() => openWhatsAppEnquiry({ product: "50 KG Silage Packaging Inquiries" })}
              className="px-6 py-3.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all flex items-center gap-2"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
