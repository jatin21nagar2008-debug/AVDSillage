import React from 'react';

export default function SectionHeader({
  badge = "",
  title = "",
  subtitle = "",
  centered = true,
  theme = "light", // 'light' (dark text) | 'dark' (light text)
  className = ""
}) {
  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3.5 shadow-sm ${
          isDark 
            ? 'bg-brand-lime/20 text-brand-lime border border-brand-lime/30' 
            : 'bg-brand-50 text-brand-900 border border-brand-200'
        }`}>
          <span>{badge}</span>
        </div>
      )}

      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
