import React from 'react';
import { Link } from 'react-router-dom';

/**
 * AVD SILAGE SOLUTIONS - BRAND LOGO COMPONENT
 * 
 * Features:
 * - High-precision vector emblem incorporating the golden corn cob, 
 *   fresh green fodder leaves, and circular agricultural shield.
 * - Extracts and maintains exact brand colors: 
 *   Primary Forest Green (#0F5132) & Golden Harvest Gold (#EAB308).
 * - Light and dark mode support for placement on dark hero or white navbar.
 * - Option to swap with an external raster image file if provided later.
 */
export default function Logo({ 
  variant = 'dark', // 'dark' (for white bg) | 'light' (for dark/hero bg)
  size = 'normal',  // 'small' | 'normal' | 'large'
  showTagline = true,
  className = ''
}) {
  const isLight = variant === 'light';

  // Sizing configurations
  const heightClasses = {
    small: 'h-8 sm:h-9',
    normal: 'h-10 sm:h-12',
    large: 'h-14 sm:h-16'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Brand Vector Emblem */}
      <div className={`relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${heightClasses[size]}`}>
        <svg 
          viewBox="0 0 100 100" 
          className="h-full w-auto aspect-square drop-shadow-sm" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield / Emblem */}
          <rect width="100" height="100" rx="22" fill="#0F5132"/>
          <rect 
            x="3.5" y="3.5" 
            width="93" height="93" 
            rx="18.5" 
            stroke="#EAB308" 
            strokeWidth="1.75" 
            strokeDasharray="3 3" 
            opacity="0.8"
          />

          {/* Inner Glow Field */}
          <circle cx="50" cy="50" r="30" fill="#14532D" />

          {/* Maize Cob Body */}
          <path 
            d="M50 20C42 26 41 36 41 52C41 68 50 75 50 75C50 75 59 68 59 52C59 36 58 26 50 20Z" 
            fill="#EAB308"
          />

          {/* Cob Segments / Kernels */}
          <line x1="50" y1="26" x2="50" y2="70" stroke="#CA8A04" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="45" y1="36" x2="55" y2="36" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round"/>
          <line x1="43" y1="44" x2="57" y2="44" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round"/>
          <line x1="43" y1="52" x2="57" y2="52" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round"/>
          <line x1="45" y1="60" x2="55" y2="60" stroke="#CA8A04" strokeWidth="2" strokeLinecap="round"/>

          {/* Left Green Forage Leaf */}
          <path 
            d="M41 54C31 54 25 61 27 72C35 74 44 66 44 57" 
            fill="#22C55E"
          />

          {/* Right Green Forage Leaf */}
          <path 
            d="M59 54C69 54 75 61 73 72C65 74 56 66 56 57" 
            fill="#16A34A"
          />

          {/* Golden Center Accent */}
          <circle cx="50" cy="80" r="3" fill="#FEF08A" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-extrabold tracking-tight font-heading ${
            size === 'small' ? 'text-xl' : size === 'large' ? 'text-3xl' : 'text-2xl sm:text-2xl'
          } ${isLight ? 'text-white' : 'text-brand-900'}`}>
            AVD
          </span>
          <span className={`font-bold tracking-wider ${
            size === 'small' ? 'text-xs' : 'text-sm sm:text-base'
          } text-brand-gold`}>
            SILAGE
          </span>
        </div>

        <div className="flex items-center gap-1 mt-0.5 leading-tight">
          <span className={`font-semibold tracking-widest text-[9px] sm:text-[10px] uppercase ${
            isLight ? 'text-emerald-100/90' : 'text-slate-700'
          }`}>
            Solutions Pvt. Ltd.
          </span>
        </div>

        {showTagline && (
          <span className={`hidden md:block text-[8px] font-medium tracking-wide mt-0.5 ${
            isLight ? 'text-emerald-200/70' : 'text-slate-600'
          }`}>
            Bhadugaon • Timarni • Harda, MP
          </span>
        )}
      </div>
    </Link>
  );
}
