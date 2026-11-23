import React from 'react';
import SEO from '../components/common/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { siteConfig } from '../config/siteConfig';

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: "Privacy Policy", path: "/privacy-policy" }
  ];

  return (
    <div className="pt-24 pb-20 bg-brand-surface min-h-screen">
      <SEO
        title="Privacy Policy | AVD Silage Solutions Private Limited"
        description="Privacy policy and data governance practices of AVD Silage Solutions Private Limited."
        canonicalPath="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mt-4 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card text-slate-800 space-y-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 border-b border-slate-100 pb-4">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-500">
            Last Updated: November 2026 • Entity: {siteConfig.companyName}
          </p>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you submit a business inquiry, request a commercial quotation, or initiate contact via WhatsApp or email, we collect relevant commercial contact information, including your full name, organization or dairy name, geographic location/destination port, email address, and WhatsApp contact number.
            </p>
          </section>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">2. How We Utilize Your Information</h2>
            <p>
              The submitted information is used exclusively for the preparation of factual commercial quotes, scheduling freight dispatches, providing silage nutritional documentation, and communicating regarding bulk orders. We do not sell, rent, or trade customer commercial data to third-party advertising brokers.
            </p>
          </section>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">3. Lead Data Storage &amp; Security</h2>
            <p>
              All inquiry records are handled under strict confidentiality. Any local browser persistence serves as temporary backup to prevent form submission loss during intermittent network connectivity.
            </p>
          </section>

          <section className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">4. Contact Information</h2>
            <p>
              For questions concerning data privacy, contact our office at:
              <br />
              <strong>{siteConfig.companyName}</strong>
              <br />
              {siteConfig.address.full}
              <br />
              Email: {siteConfig.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
