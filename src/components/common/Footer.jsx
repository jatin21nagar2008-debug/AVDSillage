import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  MessageSquareText, 
  Instagram, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  Phone,
  ArrowRight,
  Globe2
} from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../../config/siteConfig';
import { products } from '../../data/productsData';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function Footer({ onOpenQuoteModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-slate-300 pt-16 pb-12 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pre-Footer B2B Banner */}
        <div className="bg-gradient-to-r from-brand-900 to-brand-800 rounded-3xl p-6 sm:p-10 mb-14 text-white shadow-xl border border-brand-700/50 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-lime/20 text-brand-lime border border-brand-lime/30 mb-3">
              Direct Manufacturer Supply
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Ready to Secure Quality Silage for Your Dairy Operations?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              Speak directly with our team in Harda, MP. We support bulk truckload dispatches across India and international containerized requirements.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal?.()}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-lime hover:bg-brand-limeHover text-slate-950 shadow-lg hover:shadow-xl transition-all"
            >
              Request Commercial Quote
            </button>
            <button
              onClick={() => openWhatsAppEnquiry({ product: "Footer Quick Enquiry" })}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & Corporate Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="normal" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md pt-2">
              AVD Silage Solutions Private Limited is an agricultural enterprise dedicated to high-energy corn silage, Pioneer BMR silage, and sustainable livestock fodder, packaged in standardized 50 KG vacuum-sealed bags.
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-400 border-l-2 border-brand-gold pl-3">
              <p><strong className="text-slate-200">CIN:</strong> {siteConfig.cin}</p>
              <p><strong className="text-slate-200">ROC:</strong> {siteConfig.roc}</p>
              <p><strong className="text-slate-200">Status:</strong> Active Private Limited Company</p>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Official Instagram"
                title="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button
                onClick={() => openWhatsAppEnquiry({ product: "Footer Social Icon" })}
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="WhatsApp Enquiry"
                title="Message on WhatsApp"
              >
                <MessageSquareText className="w-5 h-5" />
              </button>

              <Link
                to="/export"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>Global Inquiries</span>
              </Link>
            </div>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider mb-4 border-b border-brand-800/60 pb-2">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link 
                    to={`/products/${p.slug}`}
                    className="text-slate-400 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-gold/60" />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider mb-4 border-b border-brand-800/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-brand-gold transition-colors">
                  About AVD Silage
                </Link>
              </li>
              <li>
                <Link to="/packaging" className="text-slate-400 hover:text-brand-gold transition-colors">
                  50 KG Silage Packaging
                </Link>
              </li>
              <li>
                <Link to="/quality-process" className="text-slate-400 hover:text-brand-gold transition-colors">
                  Quality &amp; Production Process
                </Link>
              </li>
              <li>
                <Link to="/export" className="text-slate-400 hover:text-brand-gold transition-colors">
                  International Business &amp; RFQ
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-brand-gold transition-colors">
                  Agricultural Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-brand-gold transition-colors">
                  Contact Processing Plant
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => onOpenQuoteModal?.()} 
                  className="text-brand-gold hover:underline font-semibold"
                >
                  Request Bulk Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Contact */}
          <div>
            <h4 className="text-white text-sm font-bold font-heading uppercase tracking-wider mb-4 border-b border-brand-800/60 pb-2">
              Plant &amp; Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="truncate">{siteConfig.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquareText className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <button 
                  onClick={() => openWhatsAppEnquiry({ product: "Footer Contact Address" })}
                  className="text-emerald-400 hover:underline font-semibold text-left"
                >
                  Official WhatsApp Desk
                </button>
              </div>

              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 bg-slate-800/90 text-slate-300 rounded text-[11px] font-medium border border-slate-700">
                  Packaging: 50 KG Bags
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {siteConfig.companyName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-300 transition-colors"
            >
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
