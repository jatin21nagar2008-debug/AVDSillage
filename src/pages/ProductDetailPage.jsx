import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Package, 
  Check, 
  FileText, 
  MessageSquareText, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Layers,
  HelpCircle,
  Truck,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { products } from '../data/productsData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import { submitBusinessEnquiry } from '../utils/leadCapture';

export default function ProductDetailPage({ onOpenQuoteModal }) {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Active gallery thumbnail
  const [activeImage, setActiveImage] = useState(product.heroImage);
  const [openFaq, setOpenFaq] = useState(0);

  // Dedicated inline enquiry form state
  const [inlineForm, setInlineForm] = useState({
    fullName: '',
    companyName: '',
    country: 'India',
    phone: '',
    email: '',
    quantity: '',
    unit: 'Tons',
    deliveryLocation: '',
    message: '',
    hp_field: ''
  });
  const [inlineErrors, setInlineErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inlineResult, setInlineResult] = useState(null);

  const handleInlineChange = (e) => {
    const { name, value } = e.target;
    setInlineForm(prev => ({ ...prev, [name]: value }));
    if (inlineErrors[name]) {
      setInlineErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setInlineErrors({});
    setInlineResult(null);

    const payload = {
      ...inlineForm,
      product: product.name
    };

    try {
      const res = await submitBusinessEnquiry(payload);
      if (!res.success) {
        if (res.errors) {
          setInlineErrors(res.errors);
        } else {
          setInlineErrors({ general: res.message || "Could not process form." });
        }
      } else {
        setInlineResult(res);
      }
    } catch {
      setInlineErrors({ general: "Network error. Please try again or message via WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbItems = [
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.heroImage,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": "AVD Silage Solutions"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "Contact for Pricing",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title={`${product.name} | Silage & Fodder Supplier India`}
        description={`${product.shortDescription} Supplied in 50 KG vacuum-sealed bags from Bhadugaon, Timarni, Harda MP. Request commercial quotation.`}
        canonicalPath={`/products/${product.slug}`}
        type="product"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Product Overview Card */}
        <div className="mt-4 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-card mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 shadow-inner border border-slate-200">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnail Selector */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      activeImage === imgUrl ? 'border-brand-gold shadow-md scale-102' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Packaging Badge */}
              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200/80 flex items-start gap-3">
                <Package className="w-5 h-5 text-brand-900 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-brand-950">
                  <span className="font-bold uppercase tracking-wider block">Confirmed Packaging:</span>
                  <p className="text-slate-600 mt-0.5">{product.packagingInfo}</p>
                </div>
              </div>
            </div>

            {/* Product Summary Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-900 border border-brand-200 mb-2">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-brand-goldDark mt-1">
                  {product.tagline}
                </p>
                <div className="mt-3 text-lg font-black text-brand-900">
                  {product.pricing}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Factually Supported Key Benefits */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Verified Product Characteristics:
                </h3>
                <ul className="space-y-2">
                  {product.verifiedBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal?.(product.name)}
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-lime hover:bg-brand-limeHover text-slate-950 shadow-md hover:shadow-lg transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Product Quote</span>
                </button>

                <button
                  onClick={() => openWhatsAppEnquiry({ product: product.name })}
                  className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Tabs: Applications, Storage, Packaging */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Applications */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-gold" />
              <span>Recommended Farm Applications</span>
            </h3>
            <ul className="space-y-3">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-brand-900 flex-shrink-0 mt-1.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage Advice */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card">
            <h3 className="text-lg font-bold font-heading text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Storage &amp; Handling Best Practice</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {product.storageGuideline}
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <Truck className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Available for pan-India road freight &amp; export forwarding.</span>
            </div>
          </div>
        </div>

        {/* Inline Enquiry & RFQ Form Section */}
        <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl mb-12 border border-brand-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30 mb-2">
              Direct Manufacturer RFQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Inquire Regarding {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Submit your required quantity and delivery location for an official price quotation.
            </p>
          </div>

          {inlineResult ? (
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold font-heading">Quotation Request Recorded</h4>
              <p className="text-xs sm:text-sm text-slate-600">{inlineResult.message}</p>
              <div className="pt-2">
                <a
                  href={inlineResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Proceed to WhatsApp to Confirm Details</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInlineSubmit} className="max-w-2xl mx-auto space-y-4 text-slate-900">
              {inlineErrors.general && (
                <div className="p-3 bg-red-100 text-red-700 rounded-xl text-xs">
                  {inlineErrors.general}
                </div>
              )}

              <input 
                type="text" 
                name="hp_field" 
                value={inlineForm.hp_field} 
                onChange={handleInlineChange} 
                className="hidden" 
                tabIndex={-1} 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={inlineForm.fullName}
                    onChange={handleInlineChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  {inlineErrors.fullName && <p className="text-[11px] text-red-300 mt-1">{inlineErrors.fullName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={inlineForm.companyName}
                    onChange={handleInlineChange}
                    placeholder="Company / Farm Name *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  {inlineErrors.companyName && <p className="text-[11px] text-red-300 mt-1">{inlineErrors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <select
                    name="country"
                    value={inlineForm.country}
                    onChange={handleInlineChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  >
                    <option value="India">India</option>
                    <option value="United Arab Emirates">UAE</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Oman">Oman</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Other">Other Country</option>
                  </select>
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={inlineForm.phone}
                    onChange={handleInlineChange}
                    placeholder="WhatsApp Phone *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  {inlineErrors.phone && <p className="text-[11px] text-red-300 mt-1">{inlineErrors.phone}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={inlineForm.email}
                    onChange={handleInlineChange}
                    placeholder="Email Address *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  {inlineErrors.email && <p className="text-[11px] text-red-300 mt-1">{inlineErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={inlineForm.quantity}
                    onChange={handleInlineChange}
                    placeholder="Quantity *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  <select
                    name="unit"
                    value={inlineForm.unit}
                    onChange={handleInlineChange}
                    className="px-3 py-2.5 rounded-xl bg-white border text-xs font-bold"
                  >
                    <option value="Tons">Tons</option>
                    <option value="Bags (50 KG)">Bags (50 KG)</option>
                    <option value="KG">KG</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={inlineForm.deliveryLocation}
                    onChange={handleInlineChange}
                    placeholder="Delivery Location (City/Port) *"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                  {inlineErrors.deliveryLocation && <p className="text-[11px] text-red-300 mt-1">{inlineErrors.deliveryLocation}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-brand-lime hover:bg-brand-limeHover text-slate-950 font-extrabold uppercase tracking-wider text-xs sm:text-sm shadow-xl transition-all"
              >
                {isSubmitting ? "Submitting Inquiry..." : `SUBMIT BUSINESS ENQUIRY FOR ${product.name.toUpperCase()}`}
              </button>
            </form>
          )}
        </div>

        {/* FAQs Section */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card">
            <div className="flex items-center gap-2 mb-6 text-brand-900">
              <HelpCircle className="w-5 h-5 text-brand-gold" />
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Frequently Asked Questions ({product.name})
              </h3>
            </div>

            <div className="space-y-3">
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-brand-gold" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
