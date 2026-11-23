import React, { useState } from 'react';
import { MessageSquareText, FileText, X, AlertCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { openWhatsAppEnquiry, isWhatsAppConfigured } from '../../utils/whatsapp';

export default function FloatingWhatsApp({ onOpenQuoteModal }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  const handleClick = () => {
    if (!isWhatsAppConfigured()) {
      setShowConfigNotice(true);
    } else {
      openWhatsAppEnquiry({ product: "General Website Visitor Inquiry" });
    }
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="relative group">
          {/* Tooltip on hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center">
            <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-slate-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Chat with AVD Silage Desk</span>
            </div>
            <div className="w-2 h-2 bg-slate-900 rotate-45 -mr-1 border-t border-r border-slate-700" />
          </div>

          {/* Floating Circle Button */}
          <button
            onClick={handleClick}
            className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none ring-4 ring-emerald-400/30"
            aria-label="Direct WhatsApp Enquiry"
          >
            <MessageSquareText className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Fixed Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* WhatsApp Direct Action */}
          <button
            onClick={handleClick}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold shadow-sm"
          >
            <MessageSquareText className="w-4 h-4 text-emerald-200" />
            <span>WhatsApp Us</span>
          </button>

          {/* Get Quote Action */}
          <button
            onClick={() => onOpenQuoteModal?.()}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-900 active:bg-brand-950 text-brand-lime text-xs font-bold shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Get a Quote</span>
          </button>
        </div>
      </div>

      {/* Configuration Notice Dialog (Shown if number is still placeholder) */}
      {showConfigNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in duration-200">
            <button
              onClick={() => setShowConfigNotice(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="Close Notice"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  WhatsApp Contact Configuration
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Per strict instructions, no fake phone numbers are used on this website. 
                  The placeholder <code className="bg-slate-100 text-amber-700 px-1 py-0.5 rounded font-mono text-[11px]">WHATSAPP_NUMBER</code> in <code className="text-slate-800 font-mono text-[11px]">src/config/siteConfig.js</code> will link directly once the official company phone number is provided.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setShowConfigNotice(false);
                      openWhatsAppEnquiry({ product: "Inquiry via general share" });
                    }}
                    className="text-xs text-emerald-700 font-semibold hover:underline"
                  >
                    Open Shareable WhatsApp Link
                  </button>
                  <button
                    onClick={() => {
                      setShowConfigNotice(false);
                      onOpenQuoteModal?.();
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-brand-900 text-brand-gold text-xs font-bold"
                  >
                    Use Lead Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
