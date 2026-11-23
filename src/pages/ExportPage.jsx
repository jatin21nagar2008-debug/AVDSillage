import React, { useState } from 'react';
import { 
  Globe2, 
  Ship, 
  FileText, 
  MessageSquareText, 
  Mail, 
  ShieldCheck, 
  Check, 
  Info, 
  Package, 
  MapPin, 
  Clock, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { siteConfig } from '../config/siteConfig';
import { products } from '../data/productsData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import { submitBusinessEnquiry } from '../utils/leadCapture';

export default function ExportPage({ onOpenQuoteModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: 'United Arab Emirates',
    phone: '',
    email: '',
    product: 'Corn Silage',
    quantity: '1',
    unit: '40ft Container (Export)',
    deliveryLocation: 'Jebel Ali Port, UAE',
    message: '',
    hp_field: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const breadcrumbItems = [
    { name: "Global Business & Export", path: "/export" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});
    setSubmissionResult(null);

    try {
      const res = await submitBusinessEnquiry(formData);
      if (!res.success) {
        if (res.errors) setFormErrors(res.errors);
        else setFormErrors({ general: res.message || "Could not process form." });
      } else {
        setSubmissionResult(res);
      }
    } catch {
      setFormErrors({ general: "Network error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="International Business & Silage Export Supply Portal"
        description="Looking for silage and livestock fodder supply from India? Connect with AVD Silage Solutions for product details, bulk requirements and business enquiries across the UAE, Saudi Arabia, GCC, and South Asia."
        canonicalPath="/export"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Globe2 className="w-3.5 h-3.5" />
              International Trade &amp; B2B Supply
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              {siteConfig.internationalHeading}
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {siteConfig.internationalDescription}
            </p>
          </div>
        </div>

        {/* Factual Target Market Clarification */}
        <div className="mb-12 max-w-4xl mx-auto p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Target Market Notice:</strong> The geographic regions and ports highlighted below represent targeted prospective markets for our export supply framework and commercial partnerships. We actively welcome formal enquiries from importers, agricultural distributors, and commercial dairy operators seeking long-term supply arrangements.
          </p>
        </div>

        {/* Priority Target Regions Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card mb-12">
          <SectionHeader
            badge="Strategic Trade Regions"
            title="Target Import &amp; Agricultural Distribution Hubs"
            subtitle="We invite trade inquiries from procurement managers and livestock enterprises located across:"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.targetMarkets.map((m) => (
              <div 
                key={m.code}
                className="p-5 rounded-2xl bg-brand-surface border border-slate-200/80 hover:border-brand-300 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-900 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
                    {m.region}
                  </span>
                  <Globe2 className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mt-2">{m.country}</h3>
                <p className="text-xs text-slate-500 mt-1">FCL / 50 KG Silage Bag Inquiries Welcome</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export Packaging & Logistics Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-brand-800 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-2">
                Containerized Silage Freight
              </span>
              <h3 className="text-2xl font-bold font-heading">
                Maritime &amp; Overland Logistical Readiness
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Silage dispatched for international routes is packaged in our high-barrier 50 KG vacuum-sealed bags and systematically palletized. Each unit remains airtight and shielded from maritime humidity and heat during sea transit.
              </p>

              <div className="mt-6 space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>20ft FCL and 40ft High Cube Container pallet configurations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>Heavy-gauge stretch wrap and corner protectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span>Clear commercial documentation and freight forwarder coordination</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                Direct Communication:
              </div>
              <div className="text-xs text-slate-300 mt-1">
                Official Email: {siteConfig.email}
              </div>
            </div>
          </div>

          {/* Dedicated International RFQ Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2">
              Submit International Commercial RFQ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Please share your target port of entry, required tonnage, and livestock feed specifications.
            </p>

            {submissionResult ? (
              <div className="bg-emerald-50 rounded-2xl p-6 text-center space-y-4 border border-emerald-200">
                <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">RFQ Received Successfully</h4>
                <p className="text-xs text-slate-600">{submissionResult.message}</p>
                <a
                  href={submissionResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Forward RFQ to Export Desk via WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formErrors.general && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-xl text-xs">{formErrors.general}</div>
                )}

                <input type="text" name="hp_field" value={formData.hp_field} onChange={handleChange} className="hidden" tabIndex={-1} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Tariq Al-Mansoor"
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                    />
                    {formErrors.fullName && <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Importer Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Gulf Agrico Trading LLC"
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                    />
                    {formErrors.companyName && <p className="text-[11px] text-red-600 mt-1">{formErrors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm bg-white"
                    >
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Oman">Oman</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Other International Country">Other International</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 123 4567"
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                    />
                    {formErrors.phone && <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="trade@gulfagrico.com"
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                    />
                    {formErrors.email && <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Product *</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm bg-white"
                    >
                      {products.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Quantity *</label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Packaging / Unit *</label>
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm bg-white"
                    >
                      <option value="40ft Container (Export)">40ft Container (FCL)</option>
                      <option value="20ft Container (Export)">20ft Container (FCL)</option>
                      <option value="Metric Tons (Bulk)">Metric Tons</option>
                      <option value="50 KG Bags (Palletized)">50 KG Bags (Palletized)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Destination Port or City *</label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="e.g. Jebel Ali Port, UAE OR Chittagong Port, Bangladesh"
                    required
                    className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm"
                  />
                  {formErrors.deliveryLocation && <p className="text-[11px] text-red-600 mt-1">{formErrors.deliveryLocation}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Commercial Notes / Terms</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention desired shipping terms (FOB/CIF), delivery timeline, or sample requirements..."
                    className="w-full px-3 py-2 rounded-xl border text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-900 hover:bg-brand-800 text-brand-gold font-extrabold uppercase tracking-wider text-xs sm:text-sm shadow-md transition-all"
                >
                  {isSubmitting ? "Submitting Export RFQ..." : "Submit International RFQ"}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
