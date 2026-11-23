/**
 * AVD SILAGE SOLUTIONS - CENTRAL WHATSAPP UTILITY
 * 
 * Generates formatted WhatsApp click-to-chat links with pre-filled business enquiry messages.
 * Uses official number from siteConfig.js (or .env).
 */

import { siteConfig } from '../config/siteConfig.js';

/**
 * Checks whether the WhatsApp number has been replaced with a real number.
 */
export const isWhatsAppConfigured = () => {
  const num = siteConfig.whatsappNumber;
  return Boolean(
    num && 
    num !== "REPLACE_WITH_OFFICIAL_NUMBER" && 
    !num.includes("REPLACE") &&
    num.replace(/\D/g, '').length >= 8
  );
};

/**
 * Sanitizes and formats phone numbers for wa.me links.
 */
export const getCleanPhoneNumber = () => {
  if (!isWhatsAppConfigured()) {
    return null;
  }
  // Strip spaces, dashes, +, parentheses
  return siteConfig.whatsappNumber.replace(/\D/g, '');
};

/**
 * Generates the pre-filled message string per required project format.
 */
export const formatEnquiryMessage = ({
  name = "",
  company = "",
  country = "",
  product = "Corn Silage",
  quantity = "",
  unit = "Tons",
  deliveryLocation = "",
  message = ""
} = {}) => {
  let text = `Hello AVD Silage Solutions,\n\nI am interested in your products.\n\n`;
  if (name) text += `Name: ${name}\n`;
  if (company) text += `Company: ${company}\n`;
  if (country) text += `Country: ${country}\n`;
  text += `Product: ${product}\n`;
  if (quantity) text += `Required Quantity: ${quantity} ${unit}\n`;
  if (deliveryLocation) text += `Delivery Location: ${deliveryLocation}\n`;
  if (message) text += `Additional Notes: ${message}\n`;
  text += `\nPlease share product details and your best quotation.\n\nThank you.`;
  return text;
};

/**
 * Builds the complete wa.me link.
 */
export const buildWhatsAppUrl = (enquiryData = {}) => {
  const cleanNumber = getCleanPhoneNumber();
  const message = formatEnquiryMessage(enquiryData);
  const encodedText = encodeURIComponent(message);

  if (!cleanNumber) {
    // Returns generic share link if number not yet configured
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * Direct quick enquiry opener
 */
export const openWhatsAppEnquiry = (enquiryData = {}) => {
  const url = buildWhatsAppUrl(enquiryData);
  window.open(url, '_blank', 'noopener,noreferrer');
};
