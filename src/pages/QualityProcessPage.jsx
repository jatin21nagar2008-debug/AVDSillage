import React from 'react';
import { 
  Sprout, 
  Tractor, 
  Scissors, 
  ShieldCheck, 
  PackageCheck, 
  Truck, 
  Info, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { productionSteps } from '../data/processData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export default function QualityProcessPage({ onOpenQuoteModal }) {
  const breadcrumbItems = [
    { name: "Quality & Process", path: "/quality-process" }
  ];

  const getIcon = (name) => {
    switch (name) {
      case 'Sprout': return <Sprout className="w-6 h-6 text-brand-gold" />;
      case 'Tractor': return <Tractor className="w-6 h-6 text-brand-gold" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-brand-gold" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-brand-gold" />;
      case 'Truck': return <Truck className="w-6 h-6 text-brand-gold" />;
      default: return <Sprout className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="Our Process | 5-Stage Agricultural Silage Lifecycle & Delivery"
        description="Learn how whole-crop corn silage is cultivated, harvested, prepared, vacuum-packaged in 50 KG bags, and delivered at AVD Silage Solutions in Bhadugaon, Timarni, Harda MP."
        canonicalPath="/quality-process"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Banner */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-lime/20 text-brand-lime border border-brand-lime/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Agronomic Process
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Our Agricultural &amp; Silage Process
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Explore the 5 key stages of silage production: from crop selection and mechanized harvesting to silage preparation, 50 KG vacuum packaging, and bulk delivery coordination.
            </p>
          </div>
        </div>

        {/* Operational Practice Disclaimer per Section 8 Guidelines */}
        <div className="mb-12 max-w-4xl mx-auto p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Clear Industry Disclosure:</strong> The steps presented below explain general scientific silage engineering principles recognized in ruminant nutrition literature alongside AVD Silage Solutions' specific operational standards. We do not claim third-party certifications not formally established.
          </p>
        </div>

        {/* 6-Stage Detailed Vertical Timeline */}
        <div className="space-y-10 mb-16">
          {productionSteps.map((step, idx) => (
            <div 
              key={step.step}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Step Marker & Title */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-brand-900 text-brand-gold flex items-center justify-center font-mono font-black text-lg shadow-sm">
                      {step.step}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-brand-50 border border-brand-200">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block pt-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                    {step.title}
                  </h3>
                </div>

                {/* Explanation: Industry Standard & AVD Operational Principle */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Agronomic Industry Context:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.industryContext}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-brand-surface border border-brand-200 space-y-1">
                    <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      AVD Silage Operational Practice:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {step.avdPractice}
                    </p>
                  </div>

                  {/* Quality Checklist */}
                  <div className="pt-2">
                    <h5 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Stage Quality Safeguards:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.keyPoints.map((kp, kIdx) => (
                        <div key={kIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                          <span>{kp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have Technical Questions About Our Processing Stage?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Our agricultural team in Bhadugaon, Timarni will be glad to share batch specifications.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal?.()}
              className="px-6 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-gold hover:bg-brand-goldHover text-brand-950 shadow-md transition-all"
            >
              Request Commercial Quote
            </button>
            <button
              onClick={() => openWhatsAppEnquiry({ product: "Quality Process Inquiries" })}
              className="px-5 py-3.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
            >
              WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
