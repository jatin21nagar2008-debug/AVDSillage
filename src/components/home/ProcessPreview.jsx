import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Tractor, 
  Scissors, 
  PackageCheck, 
  Truck, 
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { productionSteps } from '../../data/processData';

export default function ProcessPreview() {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (name) => {
    switch (name) {
      case 'Sprout': return <Sprout className="w-5 h-5" />;
      case 'Tractor': return <Tractor className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      default: return <Sprout className="w-5 h-5" />;
    }
  };

  const current = productionSteps[activeStep] || productionSteps[0];

  return (
    <section className="py-24 bg-brand-surface border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="OUR PROCESS TIMELINE"
          title="From Seed Selection to Bulk Delivery"
          subtitle="A transparent overview of the 5-stage agricultural process through which forage crops are harvested, chopped, compacted, sealed, and dispatched."
        />

        {/* Industry Notice */}
        <div className="mb-12 max-w-3xl mx-auto p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-amber-950 text-xs flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Process Transparency:</strong> The 5 stages below reflect recognized scientific silage engineering practices and AVD Silage Solutions' general operating procedures. We present these as a verified general process.
          </p>
        </div>

        {/* Connected Horizontal / Grid Timeline Tabs with Animated Progress Bar */}
        <div className="relative mb-12">
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {productionSteps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-brand-900 text-white border-brand-900 shadow-xl scale-102 ring-4 ring-brand-lime/30'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-black font-mono px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-brand-lime text-slate-950' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {step.step}
                    </span>
                    <div className={`p-2 rounded-xl ${
                      isActive ? 'bg-brand-800 text-brand-lime' : 'bg-brand-50 text-brand-900'
                    }`}>
                      {getIcon(step.iconName)}
                    </div>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold leading-snug">
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Animated Card */}
        <motion.div 
          key={current.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Narrative Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-black font-mono bg-brand-lime text-slate-950">
                  STAGE {current.step}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {current.subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Quality Safeguards */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  Key Operational Safeguards:
                </h4>
                <div className="space-y-2">
                  {current.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Large Relevant Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-72 sm:h-80">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                  Stage {current.step} • {current.title} Operations
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Process Link */}
        <div className="mt-10 text-center">
          <Link
            to="/quality-process"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-900 hover:text-emerald-700 hover:underline"
          >
            <span>Learn more about quality controls &amp; agronomy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
