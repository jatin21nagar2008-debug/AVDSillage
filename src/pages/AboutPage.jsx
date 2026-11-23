import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Wheat, 
  FileText, 
  MessageSquareText, 
  ArrowRight,
  Sprout,
  Package
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { siteConfig } from '../config/siteConfig';
import { products } from '../data/productsData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export default function AboutPage({ onOpenQuoteModal }) {
  const breadcrumbItems = [
    { name: "About Us", path: "/about" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": siteConfig.companyName,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.state,
        "postalCode": siteConfig.address.pincode,
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="About Us | Leading Silage & Fodder Manufacturer in Madhya Pradesh"
        description="Learn about AVD Silage Solutions Private Limited, located in Bhadugaon, Timarni, Harda MP. Specializing in Corn Silage, Pioneer varieties, Napier grass, and 50 KG vacuum-sealed silage packaging."
        canonicalPath="/about"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Banner */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-16">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-lime/20 text-brand-lime border border-brand-lime/30">
              <Building2 className="w-3.5 h-3.5" />
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              {siteConfig.aboutHeading}
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {siteConfig.aboutDescription}
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Split Section: Company Overview & Plant Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-50 text-brand-900 border border-brand-200">
              <MapPin className="w-3.5 h-3.5 text-brand-900" />
              <span>Plant &amp; Registered Office</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Rooted in Central India's Agricultural Heart
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>AVD Silage Solutions Private Limited</strong> is incorporated under the Ministry of Corporate Affairs, Government of India (RoC-Gwalior). Our operational and processing base is located at <strong>Khasra No. 168/4, 168/5, Village/Post Bhadugaon, Tehsil Rahetgaon, Timarni, Harda District, Madhya Pradesh – 461228, India</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Situated in the fertile agricultural tract along the Narmada river valley, our facility benefits from reliable local irrigation, rich alluvial soil, and ideal agronomic conditions for cultivating high-density whole-crop maize and perennial forage grasses.
            </p>

            {/* Corporate Registration Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100">
                Official Entity Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <div><span className="font-semibold text-slate-900">Legal Name:</span> {siteConfig.companyName}</div>
                <div><span className="font-semibold text-slate-900">CIN:</span> {siteConfig.cin}</div>
                <div><span className="font-semibold text-slate-900">ROC:</span> {siteConfig.roc}</div>
                <div><span className="font-semibold text-slate-900">Registration Location:</span> Timarni, Harda, MP</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80"
                alt="Maize agricultural fields in Madhya Pradesh"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-900 text-white p-5 rounded-2xl shadow-xl max-w-xs border border-brand-700">
              <Wheat className="w-6 h-6 text-brand-gold mb-1" />
              <div className="text-xs font-bold uppercase tracking-wider text-brand-gold">Focus Crop</div>
              <p className="text-xs text-slate-200 mt-0.5">High-energy Whole-Crop Maize &amp; Pioneer BMR genetics</p>
            </div>
          </div>
        </div>

        {/* Product Focus Grid */}
        <div className="mb-20">
          <SectionHeader
            badge="Agricultural Portfolio"
            title="Our Core Product Focus"
            subtitle="Engineered to service modern dairy farming requirements through verified fodder crops and vacuum-sealed packaging."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-card flex flex-col justify-between">
                <div>
                  <div className="h-40 rounded-2xl overflow-hidden mb-4">
                    <img src={p.heroImage} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-900 border border-brand-200">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-slate-900 mt-2">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {p.shortDescription}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link to={`/products/${p.slug}`} className="text-xs font-bold text-brand-900 hover:text-brand-700 inline-flex items-center gap-1">
                    <span>Explore Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button 
                    onClick={() => onOpenQuoteModal?.(p.name)}
                    className="text-xs font-bold text-brand-goldDark hover:underline"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Commitments */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card mb-16">
          <SectionHeader
            badge="Operating Standard"
            title="Our Core Business Propositions"
            subtitle="Straightforward, factual commitments that guide our manufacturing and supply operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(siteConfig.whyChoosePoints || siteConfig.valueProps || []).map((vp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-brand-surface border border-slate-200/70">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{vp.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{vp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have Questions About Crop Specifications or Bulk Tonnage?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Connect with our operational facility in Bhadugaon, Timarni, Harda today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal?.()}
              className="px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-gold hover:bg-brand-goldHover text-brand-950 shadow-md transition-all"
            >
              Request Commercial Quote
            </button>
            <button
              onClick={() => openWhatsAppEnquiry({ product: "About Us General Inquiry" })}
              className="px-5 py-3 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all flex items-center gap-2"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
