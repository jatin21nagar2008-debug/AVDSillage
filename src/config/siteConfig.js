/**
 * AVD SILAGE SOLUTIONS PRIVATE LIMITED
 * Central Site Configuration & Brand Variables
 * 
 * Location: Bhadugaon, Tehsil Rahatgaon/Timarni, Harda, Madhya Pradesh, India – 461228.
 * Packaging: 50 KG Bags.
 * Pricing: On Request / Contact for Pricing.
 */

export const siteConfig = {
  companyName: "AVD SILAGE SOLUTIONS PRIVATE LIMITED",
  brandName: "AVD SILAGE SOLUTIONS",
  shortName: "AVD Silage Solutions",
  legalName: "AVD Silage Solutions Private Limited",
  
  // Hero & Brand Headings
  heroHeading: "POWERING THE FUTURE OF LIVESTOCK NUTRITION",
  heroSubheading: "Premium Silage & Agricultural Fodder Solutions for Modern Dairy Farms and Global Markets.",
  
  aboutHeading: "Growing Better Feed. Building Better Futures.",
  aboutDescription: "AVD Silage Solutions focuses on providing agricultural silage and fodder solutions for modern livestock and dairy farming. Our product range includes corn silage, Pioneer BMR corn varieties, whole-crop maize and Hybrid Napier grass.",
  
  internationalHeading: "Connecting Agricultural Solutions to Global Opportunities.",
  internationalDescription: "Explore business opportunities with AVD Silage Solutions. Contact our team for product details, packaging information, pricing and supply enquiries.",

  // Corporate Registration & Address Details (Verified)
  cin: "U10800MP2026PTC086177",
  roc: "RoC-Gwalior",
  incorporationDate: "August 11, 2026",
  address: {
    street: "Village/Post Bhadugaon, Tehsil Rahatgaon / Timarni",
    city: "Timarni",
    district: "Harda",
    state: "Madhya Pradesh",
    pincode: "461228",
    country: "India",
    full: "Bhadugaon, Tehsil Rahatgaon/Timarni, Harda, Madhya Pradesh, India – 461228",
    registeredOffice: "Khasra No. 168/4, 168/5, Village Bhadugaon, Tehsil Rahatgaon / Timarni, Harda, MP - 461228"
  },

  // Central Contact Configuration (Configurable Placeholders)
  // Per requirement: Never invent phone numbers or fake personal details.
  whatsappNumber: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) || "REPLACE_WITH_OFFICIAL_NUMBER",
  email: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_OFFICIAL_EMAIL) || "info@avdsilage.com",
  instagramUrl: "https://www.instagram.com/avd_silage/",
  websiteUrl: "https://avdsilage.com",
  
  // Standard Packaging Highlight
  standardPackaging: "50 KG Bags (Multi-layer, UV-Stabilized & Vacuum-Sealed)",
  pricingNotice: "Price: On Request",

  // Brand Color Palette (Extracted directly from logo)
  colors: {
    primaryGreen: "#0F5132",
    forestGreen: "#0B3D25",
    lightGreen: "#16A34A",
    sproutGreen: "#22C55E",
    maizeGold: "#EAB308",
    maizeGoldDark: "#CA8A04",
    surfaceCream: "#FAFBF7",
    darkSlate: "#0F172A",
    borderSlate: "#E2E8F0"
  },

  // Navigation Links
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Our Process", path: "/quality-process" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ],

  // 5 Why Choose Us Points strictly matching Rule 7
  whyChoosePoints: [
    {
      title: "Agricultural Fodder Solutions",
      desc: "Specialized cultivation and preservation of quality green forage engineered specifically for ruminant digestion and dairy productivity."
    },
    {
      title: "Multiple Fodder Product Options",
      desc: "Diverse forage choices including Corn Silage, Pioneer hybrids, Pioneer BMR corn varieties, whole-crop maize, Napier grass, and organic inputs."
    },
    {
      title: "Convenient 50 KG Packaging",
      desc: "Standardized multi-layer vacuum-sealed bags that eliminate pit face spoilage and allow convenient manual and palletized handling."
    },
    {
      title: "Enquiry-Based Pricing",
      desc: "Transparent, customized commercial pricing based on requested metric tonnage, delivery frequency, and transit destination."
    },
    {
      title: "Solutions for Modern Dairy Farming",
      desc: "Reliable year-round forage supply helping dairy enterprises stabilize feed consistency regardless of summer dry spells."
    }
  ],

  // Value Props alias for whyChoosePoints
  get valueProps() {
    return this.whyChoosePoints;
  },

  // Target International Markets (Rule 9: target opportunities only)
  targetMarkets: [
    { country: "United Arab Emirates", code: "AE", region: "Middle East" },
    { country: "Saudi Arabia", code: "SA", region: "Middle East" },
    { country: "Oman", code: "OM", region: "Middle East" },
    { country: "Qatar", code: "QA", region: "Middle East" },
    { country: "Kuwait", code: "KW", region: "Middle East" },
    { country: "Bangladesh", code: "BD", region: "South Asia" },
    { country: "Nepal", code: "NP", region: "South Asia" },
    { country: "Other International Markets", code: "GLOBAL", region: "Worldwide" }
  ]
};
