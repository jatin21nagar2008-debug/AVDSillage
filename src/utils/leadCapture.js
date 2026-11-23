/**
 * AVD SILAGE SOLUTIONS - LEAD CAPTURE & VALIDATION SERVICE
 * 
 * Complies with strict truth-in-advertising and real lead capture requirements:
 * 1. Validates all inputs thoroughly.
 * 2. Deduplicates submissions.
 * 3. Integrates with configured backend endpoint (VITE_LEAD_API_URL / Supabase).
 * 4. Always persists leads to localStorage ('avd_silage_leads') as a safety backup.
 * 5. Generates seamless WhatsApp direct fallback if remote backend is unconfigured.
 */

import { buildWhatsAppUrl } from './whatsapp.js';

const STORAGE_KEY = 'avd_silage_leads_v1';
const SUBMISSION_TIMESTAMPS = new Set();

/**
 * Validates email format strictly.
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
};

/**
 * Validates international/Indian phone numbers (minimum 7 digits, maximum 16 digits).
 */
export const isValidPhone = (phone) => {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 16;
};

/**
 * Validates full lead form submission.
 */
export const validateLeadForm = (formData) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!formData.companyName || formData.companyName.trim().length < 2) {
    errors.companyName = "Please specify your company, farm, or dairy name.";
  }

  if (!formData.country || formData.country.trim().length < 2) {
    errors.country = "Please select or enter your country.";
  }

  if (!formData.phone || !isValidPhone(formData.phone)) {
    errors.phone = "Please enter a valid phone or WhatsApp number with country code.";
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Please provide a valid business email address.";
  }

  if (!formData.product || formData.product.trim().length < 2) {
    errors.product = "Please select a product of interest.";
  }

  if (!formData.quantity || Number(formData.quantity) <= 0) {
    errors.quantity = "Please enter a valid quantity greater than zero.";
  }

  if (!formData.unit) {
    errors.unit = "Please select a unit (KG, Tons, or Bags).";
  }

  if (!formData.deliveryLocation || formData.deliveryLocation.trim().length < 2) {
    errors.deliveryLocation = "Please provide your destination city/port/state.";
  }

  // Honeypot spam check
  if (formData.hp_field) {
    errors.hp = "Automated submission rejected.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Saves a lead safely to browser storage.
 */
export const saveLeadLocally = (lead) => {
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existing = existingRaw ? JSON.parse(existingRaw) : [];
    existing.unshift(lead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
    return true;
  } catch (err) {
    console.warn("Could not save lead to localStorage", err);
    return false;
  }
};

/**
 * Retrieves all locally saved leads (useful for admin debugging / export).
 */
export const getStoredLeads = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/**
 * Submits the lead to backend and creates WhatsApp fallback.
 */
export const submitBusinessEnquiry = async (formData) => {
  // 1. Validation
  const validation = validateLeadForm(formData);
  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.errors
    };
  }

  // 2. Prevent rapid duplicate submissions
  const hashKey = `${formData.email}_${formData.product}_${formData.quantity}`;
  const now = Date.now();
  if (SUBMISSION_TIMESTAMPS.has(hashKey)) {
    return {
      success: false,
      message: "A similar inquiry was recently submitted. Please check WhatsApp or wait a moment."
    };
  }
  SUBMISSION_TIMESTAMPS.add(hashKey);
  setTimeout(() => SUBMISSION_TIMESTAMPS.delete(hashKey), 120000); // 2 minute cooldown

  // 3. Prepare Lead Object
  const leadId = `AVD-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`;
  const leadPayload = {
    id: leadId,
    timestamp: new Date().toISOString(),
    fullName: formData.fullName.trim(),
    companyName: formData.companyName.trim(),
    country: formData.country.trim(),
    phone: formData.phone.trim(),
    email: formData.email.trim(),
    product: formData.product.trim(),
    quantity: formData.quantity,
    unit: formData.unit || "Tons",
    deliveryLocation: formData.deliveryLocation.trim(),
    message: (formData.message || "").trim(),
    sourceUrl: window.location.href,
    userAgent: navigator.userAgent
  };

  // Always save locally first so client never loses data
  saveLeadLocally(leadPayload);

  // Generate WhatsApp continuation link
  const whatsappUrl = buildWhatsAppUrl({
    name: leadPayload.fullName,
    company: leadPayload.companyName,
    country: leadPayload.country,
    product: leadPayload.product,
    quantity: leadPayload.quantity,
    unit: leadPayload.unit,
    deliveryLocation: leadPayload.deliveryLocation,
    message: leadPayload.message
  });

  // 4. Remote backend submission (if configured)
  const apiUrl = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_LEAD_API_URL) || "";
  let backendDelivered = false;

  if (apiUrl && apiUrl.startsWith('http')) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(leadPayload)
      });

      if (response.ok) {
        backendDelivered = true;
      } else {
        console.warn(`Lead API returned HTTP ${response.status}`);
      }
    } catch (err) {
      console.warn("Network error sending lead to backend API", err);
    }
  }

  return {
    success: true,
    leadId,
    leadPayload,
    backendDelivered,
    hasConfiguredApi: Boolean(apiUrl),
    whatsappUrl,
    message: backendDelivered 
      ? "Your business inquiry has been recorded successfully. Our team will review your specifications." 
      : "Your inquiry details have been saved securely. Click below to instantly forward your specifications to our WhatsApp desk."
  };
};
