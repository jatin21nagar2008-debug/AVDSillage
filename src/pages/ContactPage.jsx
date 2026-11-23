import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  MessageSquareText, 
  Instagram, 
  Building2, 
  Send, 
  Check, 
  AlertCircle, 
  ExternalLink,
  Clock,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import { siteConfig } from '../config/siteConfig';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import { submitBusinessEnquiry } from '../utils/leadCapture';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: 'India',
    phone: '',
    email: '',
    product: 'Corn Silage',
    quantity: '10',
    unit: 'Tons',
    deliveryLocation: '',
    message: '',
    hp_field: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const breadcrumbItems = [
    { name: "Contact Us", path: "/contact" }
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
        else setFormErrors({ general: res.message || "Failed to submit inquiry." });
      } else {
        setSubmissionResult(res);
      }
    } catch {
      setFormErrors({ general: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": siteConfig.companyName,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address.street,
        "addressLocality": siteConfig.address.city,
        "addressRegion": siteConfig.address.state,
        "postalCode": siteConfig.address.pincode,
        "addressCountry": "IN"
      },
      "url": "https://avdsilage.com/contact"
    }
  };

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="Contact Us | AVD Silage Solutions Private Limited Harda"
        description="Contact AVD Silage Solutions Private Limited in Village Bhadugaon, Timarni, Harda, Madhya Pradesh – 461228, India. Submit B2B silage inquiries, WhatsApp chat, and quotation requests."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Banner */}
        <div className="mt-4 bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
              <Building2 className="w-3.5 h-3.5" />
              Direct Communication Desk
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
              Contact AVD Silage Solutions
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Reach our processing plant and administrative team directly in Timarni, Harda MP for domestic truckload logistics, commercial dealership inquiries, and export quotations.
            </p>
          </div>
        </div>

        {/* Split Section: Office Cards & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Column: Official Contact Details & Social */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-brand-900">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <h3 className="text-base font-bold font-heading text-slate-900 uppercase tracking-wider">
                  Plant &amp; Registered Address
                </h3>
              </div>

              <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                <p className="font-bold text-slate-900">{siteConfig.companyName}</p>
                <p>Bhadugaon, Tehsil Rahatgaon/Timarni</p>
                <p>Harda, Madhya Pradesh, India – 461228</p>
              </div>

              <div className="pt-3 border-t border-slate-100 pl-7 text-xs text-slate-500 space-y-1">
                <p><strong>CIN:</strong> {siteConfig.cin}</p>
                <p><strong>ROC:</strong> {siteConfig.roc}</p>
              </div>
            </div>

            {/* Electronic Inquiries Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-4">
              <h3 className="text-base font-bold font-heading text-slate-900 uppercase tracking-wider">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-0.5">
                    <MessageSquareText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">WhatsApp Official Desk</span>
                    <button
                      onClick={() => openWhatsAppEnquiry({ product: "Contact Page WhatsApp Click" })}
                      className="text-emerald-700 hover:underline font-semibold mt-0.5"
                    >
                      Connect with WhatsApp Representative
                    </button>
                    <p className="text-[11px] text-slate-500 mt-0.5">Fast response for pricing and dispatch dates.</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-900 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Official Business Email</span>
                    <span className="text-slate-700 font-mono mt-0.5 block">{siteConfig.email}</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">For formal purchase orders and contracts.</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-800 flex-shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Official Instagram</span>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-900 hover:underline font-semibold mt-0.5 inline-flex items-center gap-1"
                    >
                      <span>@avd_silage</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Follow our field updates and harvest videos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-brand-surface rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Facility Operating Hours</span>
              </div>
              <p className="pl-6">Monday – Saturday: 09:00 AM – 07:00 PM IST</p>
              <p className="pl-6 text-[11px] text-slate-500">Dispatch logistics coordinate 24/7 during seasonal harvest.</p>
            </div>
          </div>

          {/* Right Column: Interactive Commercial Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2">
              Send a Direct Business Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Complete the form below to receive a formal quotation from our management team.
            </p>

            {submissionResult ? (
              <div className="bg-emerald-50 rounded-2xl p-8 text-center space-y-4 border border-emerald-200">
                <Check className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold font-heading text-slate-900">Inquiry Logged</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">{submissionResult.message}</p>
                <div className="pt-2">
                  <a
                    href={submissionResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Confirm Directly via WhatsApp</span>
                  </a>
                </div>
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
                      placeholder="e.g. Navneet Jain"
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                    />
                    {formErrors.fullName && <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Farm Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Jain Cattle &amp; Dairy Farm"
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                    />
                    {formErrors.phone && <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="procurement@dairy.com"
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
                      <option value="Corn Silage">Corn Silage</option>
                      <option value="Pioneer Corn Silage">Pioneer Corn Silage</option>
                      <option value="Pioneer BMR Corn">Pioneer BMR Corn</option>
                      <option value="Whole-Crop Maize">Whole-Crop Maize</option>
                      <option value="Hybrid Napier Grass">Hybrid Napier Grass</option>
                      <option value="Organic Fodder">Organic Fodder</option>
                      <option value="Organic Fertilizer">Organic Fertilizer</option>
                      <option value="50 KG Silage Bags (Bulk)">50 KG Bags (Bulk)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Required Quantity *</label>
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
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Unit *</label>
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm bg-white"
                    >
                      <option value="Tons">Tons</option>
                      <option value="Bags (50 KG)">Bags (50 KG)</option>
                      <option value="KG">KG</option>
                      <option value="Full Truck Load (FTL)">Full Truck Load</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Delivery Destination *</label>
                  <input
                    type="text"
                    name="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={handleChange}
                    placeholder="e.g. Bhopal, MP OR Surat, Gujarat"
                    required
                    className="w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm"
                  />
                  {formErrors.deliveryLocation && <p className="text-[11px] text-red-600 mt-1">{formErrors.deliveryLocation}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Specifications</label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter monthly delivery schedules, moisture preference, or inquiries..."
                    className="w-full px-3 py-2 rounded-xl border text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-brand-lime hover:bg-brand-limeHover text-slate-950 font-extrabold uppercase tracking-wider text-xs sm:text-sm shadow-lg transition-all"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "SUBMIT BUSINESS ENQUIRY"}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Google Maps / Plant Location Embed Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
            <div>
              <h3 className="text-base font-bold font-heading text-slate-900 uppercase tracking-wider">
                Geographic Facility Location
              </h3>
              <p className="text-xs text-slate-500">Village Bhadugaon, Timarni, Harda District, Madhya Pradesh</p>
            </div>
            <a
              href="https://maps.google.com/?q=Timarni,Harda,Madhya+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <iframe
              title="AVD Silage Solutions Location - Timarni, Harda MP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.4854589255!2d77.15174542287413!3d22.370211108253165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397dc20958742b67%3A0x8670ba531278ca9e!2sTimarni%2C%20Madhya%20Pradesh%20461228!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
