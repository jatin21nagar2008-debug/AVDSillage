import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquareText, 
  Package, 
  MapPin, 
  Building2, 
  User, 
  Mail, 
  PhoneCall, 
  Globe
} from 'lucide-react';
import { products } from '../../data/productsData';
import { siteConfig } from '../../config/siteConfig';
import { submitBusinessEnquiry } from '../../utils/leadCapture';

export default function EnquiryModal({ 
  isOpen, 
  onClose, 
  preSelectedProduct = "Corn Silage" 
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: 'India',
    phone: '',
    email: '',
    product: preSelectedProduct,
    quantity: '',
    unit: 'Tons',
    deliveryLocation: '',
    message: '',
    hp_field: '' // honeypot
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  useEffect(() => {
    if (preSelectedProduct) {
      setFormData(prev => ({ ...prev, product: preSelectedProduct }));
    }
  }, [preSelectedProduct, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});
    setSubmissionResult(null);

    try {
      const res = await submitBusinessEnquiry(formData);
      if (!res.success) {
        if (res.errors) {
          setFormErrors(res.errors);
        } else {
          setFormErrors({ general: res.message || "Failed to process inquiry." });
        }
      } else {
        setSubmissionResult(res);
      }
    } catch {
      setFormErrors({ general: "A network error occurred. Please try again or connect via WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmissionResult(null);
    setFormErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        onClick={handleResetAndClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 text-center sm:p-0">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 260 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full text-left shadow-2xl overflow-hidden border border-slate-200 my-8"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-forest text-white p-6 sm:p-8 relative">
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-lime/20 text-brand-lime border border-brand-lime/30 mb-2">
              <Package className="w-3.5 h-3.5" />
              Direct Commercial Quotation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Request Silage &amp; Fodder Quotation
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-lg">
              AVD Silage Solutions Private Limited • Bhadugaon, Timarni, Harda, MP. Direct manufacturer bulk orders and export inquiries.
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {submissionResult ? (
              /* Success State */
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {submissionResult.message}
                  </p>
                  <p className="text-xs font-mono font-bold text-brand-900 bg-brand-50 inline-block px-3 py-1.5 rounded-lg border border-brand-200">
                    Reference ID: {submissionResult.leadId}
                  </p>
                </div>

                {/* WhatsApp Instant Forwarding CTA */}
                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 text-left max-w-md mx-auto space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquareText className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                        Accelerate Response via WhatsApp
                      </h5>
                      <p className="text-xs text-emerald-800 mt-0.5">
                        Forward this inquiry directly to our dispatch desk with one tap.
                      </p>
                    </div>
                  </div>

                  <a
                    href={submissionResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Open in WhatsApp with Pre-filled Specs</span>
                  </a>
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              /* Submission Form matching Rule 11 */
              <form onSubmit={handleSubmit} className="space-y-4">
                {formErrors.general && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{formErrors.general}</span>
                  </div>
                )}

                {/* Honeypot field for bot prevention */}
                <input 
                  type="text" 
                  name="hp_field" 
                  value={formData.hp_field} 
                  onChange={handleChange} 
                  tabIndex={-1} 
                  autoComplete="off" 
                  className="hidden" 
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patel"
                        required
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 transition-all ${
                          formErrors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.fullName && <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Dairy Farm Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Patel Dairy &amp; Cattle Farm"
                        required
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 transition-all ${
                          formErrors.companyName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.companyName && <p className="text-[11px] text-red-600 mt-1">{formErrors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Country */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 bg-white"
                      >
                        <option value="India">India</option>
                        <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Oman">Oman</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Other Country">Other International</option>
                      </select>
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 transition-all ${
                          formErrors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.phone && <p className="text-[11px] text-red-600 mt-1">{formErrors.phone}</p>}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="buyer@domain.com"
                        required
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 transition-all ${
                          formErrors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.email && <p className="text-[11px] text-red-600 mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Interested Product */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Interested Product <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 bg-white"
                    >
                      {products.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="50 KG Silage Bags (Bulk)">50 KG Silage Bags (Bulk)</option>
                      <option value="Multiple Products / Dealership">Multiple Products / Dealership</option>
                    </select>
                  </div>

                  {/* Required Quantity */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Required Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                      required
                      className={`w-full px-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 transition-all ${
                        formErrors.quantity ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {formErrors.quantity && <p className="text-[11px] text-red-600 mt-1">{formErrors.quantity}</p>}
                  </div>

                  {/* Quantity Unit */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Quantity Unit <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 bg-white"
                    >
                      <option value="Tons">Tons (Metric)</option>
                      <option value="Bags (50 KG)">Bags (50 KG)</option>
                      <option value="KG">KG (Kilograms)</option>
                      <option value="Full Truck Load (FTL)">Full Truck Load (FTL)</option>
                      <option value="20ft Container (Export)">20ft Container (Export)</option>
                      <option value="40ft Container (Export)">40ft Container (Export)</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Delivery Location (City, State / Port) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      placeholder="e.g. Indore, Madhya Pradesh OR Jebel Ali Port, UAE"
                      required
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800 transition-all ${
                        formErrors.deliveryLocation ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {formErrors.deliveryLocation && <p className="text-[11px] text-red-600 mt-1">{formErrors.deliveryLocation}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Specific Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention delivery frequency, seasonal feeding schedule, or moisture preferences..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-800"
                  />
                </div>

                {/* Button strictly labeled "SUBMIT BUSINESS ENQUIRY" per Rule 11 */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500">
                    B2B confidentiality maintained for all commercial inquiries.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-lime hover:bg-brand-limeHover text-slate-950 shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT BUSINESS ENQUIRY</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
