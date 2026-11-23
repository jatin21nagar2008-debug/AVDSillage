import React from 'react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';

export default function TermsPage() {
  const breadcrumbItems = [
    { name: "Terms & Conditions", path: "/terms" }
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="Terms & Conditions | AVD Silage Solutions Private Limited"
        description="Commercial terms and conditions governing quotations, supplies, and orders with AVD Silage Solutions Private Limited."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-4 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card text-slate-800 space-y-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 border-b border-slate-100 pb-4">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs text-slate-500">
            Entity: {siteConfig.companyName} • CIN: {siteConfig.cin}
          </p>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">1. Commercial Inquiries &amp; Quotations</h2>
            <p>
              Quotations provided via this website, email, or official WhatsApp represent commercial estimations based on requested tonnages and prevailing seasonal crop cycles. Final price quotes are formalized via official Proforma Invoices upon mutual agreement of shipping terms.
            </p>
          </section>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">2. Silage Packaging &amp; Unloading Guidelines</h2>
            <p>
              Silage products are packaged in standardized 50 KG vacuum-sealed, multi-layer bags. Customers are advised to inspect seals upon arrival, store unopened units on clean pallets under shaded shelter, and report transit damages promptly.
            </p>
          </section>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">3. Domestic &amp; Export Freight</h2>
            <p>
              Domestic truckload dispatches are coordinated directly from our facility in Bhadugaon, Timarni, Harda. Export consignments are managed under designated Incoterms (e.g. EXW, FOB, CIF) as specified in formalized sales agreements.
            </p>
          </section>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">4. Jurisdiction</h2>
            <p>
              Any disputes arising from commercial contracts are subject to the exclusive jurisdiction of the competent courts in Harda, Madhya Pradesh, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
