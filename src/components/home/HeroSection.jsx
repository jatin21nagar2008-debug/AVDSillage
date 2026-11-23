import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  MessageSquareText, 
  ChevronDown, 
  PackageCheck, 
  Building2, 
  ArrowUpRight,
  Play,
  Pause
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { openWhatsAppEnquiry } from '../../utils/whatsapp';

export default function HeroSection({ onOpenQuoteModal }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 140]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.25]);

  // Robust asset paths for both local development and GitHub Pages subpath
  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const posterUrl = `${cleanBase}images/tractor-hero.jpg`;
  const videoUrl = `${cleanBase}videos/tractor-hero.mp4`;

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // If autoplay is blocked by browser policy, keep poster active
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Heading word-by-word animation variants
  const headingWords = siteConfig.heroHeading.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 25 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 120
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 overflow-hidden bg-brand-forest"
    >
      {/* Background Container with Tractor Video & High-Res Poster */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="w-full h-full"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={posterUrl}
            className="w-full h-full object-cover object-center"
          >
            <source src={videoUrl} type="video/mp4" />
            <img
              src={posterUrl}
              alt="Modern agricultural tractor operating in a lush green agricultural field harvesting silage"
              className="w-full h-full object-cover object-center"
            />
          </video>
        </motion.div>

        {/* Cinematic Gradient Overlays:
            - Left side gradient: ensures 100% white text contrast
            - Center & Right side: clear and bright so the tractor and vibrant agricultural machinery are prominently visible
            - Top & Bottom gradients: smooth navbar transparency & seamless section blending
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/50 to-brand-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/60" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-950/80 to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8E870_1px,transparent_1px)] [background-size:28px_28px]" />
      </motion.div>

      {/* Interactive Video Play/Pause Controller (matching Harvestam reference theme) */}
      <div className="absolute right-6 sm:right-12 top-32 sm:top-36 z-20 hidden md:block">
        <button
          onClick={toggleVideo}
          className="relative group p-4 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
          title={isPlaying ? "Pause background video" : "Play background video"}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {/* Concentric rings */}
          <span className="absolute inset-0 rounded-full border border-white/20 scale-125 animate-pulse" />
          <span className="absolute inset-0 rounded-full border border-white/30 scale-100" />
          <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-brand-lime group-hover:text-slate-950 group-hover:scale-105 transition-all shadow-xl">
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current translate-x-0.5" />
            )}
          </div>
        </button>
      </div>

      {/* Hero Foreground Content */}
      <motion.div 
        style={{ opacity: opacityParallax }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 w-full flex-1 flex flex-col justify-between"
      >
        {/* Main Typography & CTAs (Left Side) */}
        <div className="max-w-3xl space-y-6 pt-4 sm:pt-6">
          
          {/* Pill Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
            <span className="text-brand-lime font-bold font-mono">AVD SILAGE SOLUTIONS</span>
            <span className="text-white/60">•</span>
            <span className="text-slate-200">Bhadugaon, Harda (MP)</span>
          </motion.div>

          {/* Word-by-Word Animated Hero Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08] max-w-3xl"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2.5 sm:mr-4"
              >
                {word === "LIVESTOCK" || word === "NUTRITION" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime via-brand-gold to-white drop-shadow-sm">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading with Smooth Fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base sm:text-lg lg:text-xl text-emerald-100/90 max-w-2xl leading-relaxed font-normal"
          >
            {siteConfig.heroSubheading}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA (Vibrant Lime/Chartreuse Button matching Harvestam reference) */}
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-brand-lime hover:bg-brand-limeHover text-slate-950 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>EXPLORE OUR PRODUCTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            <button
              onClick={() => onOpenQuoteModal?.()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-brand-gold" />
              <span>GET A BUSINESS QUOTE</span>
            </button>

            {/* Quick WhatsApp Inquiry */}
            <button
              onClick={() => openWhatsAppEnquiry({ product: "Hero Section Inquiry" })}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-xs sm:text-sm font-semibold bg-emerald-600/90 hover:bg-emerald-500 text-white backdrop-blur-md border border-emerald-400/40 shadow-lg transition-all cursor-pointer"
              title="Connect on WhatsApp"
            >
              <MessageSquareText className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Area: Scroll Down (Left) & Side-by-Side Floating Cards (Right) */}
        <div className="pt-10 sm:pt-14 pb-2 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          
          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex items-center gap-3 text-slate-400 select-none"
          >
            <a
              href="#about-section"
              className="inline-flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-brand-lime group-hover:text-slate-950 transition-all duration-300 animate-bounce">
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-white/70 group-hover:text-white transition-colors">
                SCROLL DOWN
              </span>
            </a>
          </motion.div>

          {/* Side-by-Side Feature Cards (Matching Harvestam Theme bottom-right cards) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto"
          >
            {/* Card 1: 50 KG Bags Standard */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/40 text-slate-900 w-full sm:w-64 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black font-heading text-brand-900 tracking-tight">
                  50 KG
                </span>
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <PackageCheck className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Standardized Vacuum Bags
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Multi-layer UV-stabilized protection designed for zero spoilage.
              </p>
              
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Pricing:</span>
                <span className="font-extrabold text-brand-900 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                  On Request
                </span>
              </div>
            </div>

            {/* Card 2: Direct Processing Plant */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/40 text-slate-900 w-full sm:w-64 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black font-heading text-brand-900 tracking-tight">
                  Direct Plant
                </span>
                <div className="p-2 rounded-xl bg-amber-50 text-brand-gold border border-amber-200">
                  <Building2 className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Bhadugaon, Harda Facility
              </h4>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Commercial dairy farm supply &amp; containerized maritime export inquiry.
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <button
                  onClick={() => onOpenQuoteModal?.()}
                  className="inline-flex items-center gap-1 font-bold text-brand-900 hover:text-emerald-700 hover:underline cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-slate-400 font-mono">MP – 461228</span>
              </div>
            </div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
