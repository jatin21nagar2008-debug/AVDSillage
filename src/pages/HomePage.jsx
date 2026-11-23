import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PackagingHighlight from '../components/home/PackagingHighlight';
import ProcessPreview from '../components/home/ProcessPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import InternationalPreview from '../components/home/InternationalPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import ConversionCTA from '../components/home/ConversionCTA';

export default function HomePage({ onOpenQuoteModal }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AVD Silage Solutions Private Limited",
    "url": "https://avdsilage.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://avdsilage.com/products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Premium Silage Solutions for Better Livestock Nutrition"
        description="AVD Silage Solutions Private Limited - Leading manufacturer of Corn Silage, Pioneer Corn Silage, BMR Corn, Hybrid Napier Grass, and Organic Fodder in 50 KG vacuum-sealed bags from Bhadugaon, Timarni, Harda, Madhya Pradesh, India."
        canonicalPath="/"
        jsonLd={jsonLd}
      />

      <HeroSection onOpenQuoteModal={onOpenQuoteModal} />
      <AboutPreview onOpenQuoteModal={onOpenQuoteModal} />
      <FeaturedProducts onOpenQuoteModal={onOpenQuoteModal} />
      <PackagingHighlight onOpenQuoteModal={onOpenQuoteModal} />
      <ProcessPreview />
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />
      <InternationalPreview onOpenQuoteModal={onOpenQuoteModal} />
      <GalleryPreview />
      <ConversionCTA onOpenQuoteModal={onOpenQuoteModal} />
    </>
  );
}
