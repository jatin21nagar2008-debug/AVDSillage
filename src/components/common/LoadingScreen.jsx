import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant quick branded entrance
    const timer = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-950 text-white select-none pointer-events-none"
        >
          {/* Animated Background Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-brand-lime/10 blur-3xl pointer-events-none animate-pulse" />

          {/* Logo Emblem Reveal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* SVG Shield & Cob */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full drop-shadow-xl" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="22" fill="#0F5132"/>
                <rect 
                  x="3.5" y="3.5" 
                  width="93" height="93" 
                  rx="18.5" 
                  stroke="#EAB308" 
                  strokeWidth="2" 
                  strokeDasharray="4 4" 
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="28" fill="#0B3D25" />
                <path 
                  d="M50 20C42 26 41 36 41 52C41 68 50 75 50 75C50 75 59 68 59 52C59 36 58 26 50 20Z" 
                  fill="#EAB308"
                />
                <line x1="50" y1="26" x2="50" y2="70" stroke="#CA8A04" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M41 54C31 54 25 61 27 72C35 74 44 66 44 57" fill="#22C55E"/>
                <path d="M59 54C69 54 75 61 73 72C65 74 56 66 56 57" fill="#16A34A"/>
                <circle cx="50" cy="80" r="3" fill="#FEF08A" />
              </svg>
            </div>

            {/* Typography */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-xl sm:text-2xl font-black font-heading tracking-wider">
                <span className="text-white">AVD</span>
                <span className="text-brand-gold">SILAGE</span>
                <span className="text-white">SOLUTIONS</span>
              </div>
              <p className="text-[10px] sm:text-xs text-brand-lime font-mono tracking-widest uppercase mt-1">
                Bhadugaon • Timarni • Harda, MP
              </p>
            </div>

            {/* Progress Bar Line */}
            <div className="w-44 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-brand-lime via-brand-gold to-brand-sprout"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
