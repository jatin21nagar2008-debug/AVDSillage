import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageSquareText, 
  ChevronRight, 
  FileText
} from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../../config/siteConfig';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const showTransparent = isHomePage && !isScrolled;

  // 6 menu items specified in Rule 4
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Our Process', path: '/quality-process' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showTransparent
            ? 'bg-transparent text-white pt-2 sm:pt-3 pb-3'
            : 'bg-white/95 backdrop-blur-md py-3 text-slate-800 shadow-sm border-b border-slate-100'
        }`}
      >
        {/* Top Minimal Notification Capsule Bar */}
        {showTransparent && (
          <div className="max-w-4xl mx-auto px-4 mb-2 hidden md:block">
            <div className="bg-black/35 backdrop-blur-md text-white/90 text-[11px] font-medium py-1 px-4 rounded-full text-center border border-white/10 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
              <span>AVD Silage Solutions • Quality-focused corn silage &amp; livestock fodder supply from Harda, Madhya Pradesh</span>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Logo 
              variant={showTransparent ? 'light' : 'dark'}
              size="normal"
            />

            {/* Navigation Links in Center with Animated Underline */}
            <nav 
              className="hidden xl:flex items-center gap-1 2xl:gap-2 relative"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path));

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onMouseEnter={() => setHoveredPath(item.path)}
                    className={({ isActive: linkActive }) => `
                      relative px-4 py-2 rounded-full text-xs 2xl:text-sm font-semibold tracking-wide transition-colors duration-200
                      ${showTransparent
                        ? linkActive
                          ? 'text-white font-bold'
                          : 'text-white/80 hover:text-white'
                        : linkActive
                          ? 'text-brand-900 font-bold'
                          : 'text-slate-600 hover:text-brand-900'
                      }
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Animated Underline Indicator on Hover / Active */}
                    {(hoveredPath === item.path || (!hoveredPath && isActive)) && (
                      <motion.div
                        layoutId="navbar-underline"
                        className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full ${
                          showTransparent ? 'bg-brand-lime' : 'bg-brand-900'
                        }`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              {/* WhatsApp Quick CTA */}
              <button
                onClick={() => openWhatsAppEnquiry({ product: "Website Header Inquiry" })}
                className={`p-2.5 rounded-full transition-all ${
                  showTransparent
                    ? 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                }`}
                title="WhatsApp Desk"
              >
                <MessageSquareText className="w-4 h-4" />
              </button>

              {/* Get a Quote Button */}
              <button
                onClick={() => onOpenQuoteModal?.()}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md transform hover:-translate-y-0.5 ${
                  showTransparent
                    ? 'bg-brand-lime text-slate-950 hover:bg-brand-limeHover'
                    : 'bg-brand-900 text-brand-lime hover:bg-brand-800'
                }`}
              >
                <span>GET A QUOTE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => onOpenQuoteModal?.()}
                className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                  showTransparent ? 'bg-brand-lime text-slate-950' : 'bg-brand-900 text-white'
                }`}
              >
                Quote
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  showTransparent ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Framer Motion Slide & Stagger Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-50 overflow-y-auto"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-brand-50/60">
                <Logo size="small" showTagline={false} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4 space-y-1.5 flex-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    className={({ isActive }) => `
                      flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors
                      ${isActive 
                        ? 'bg-brand-900 text-brand-lime font-bold' 
                        : 'text-slate-700 hover:bg-brand-50'
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              <div className="p-4 border-t border-slate-100 space-y-2 bg-slate-50">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-900 text-brand-lime shadow-md"
                >
                  <span>Get a Business Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWhatsAppEnquiry({ product: "Mobile Menu WhatsApp" });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>WhatsApp Official Desk</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
