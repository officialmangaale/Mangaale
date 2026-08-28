import { addressOneLine, companyData } from './companyData'

/*
 * The email, phone and address are re-exported from companyData rather than
 * repeated here: they are the same details Google Play review checks against
 * the console entry, and they used to sit in this file as the placeholders
 * "hello@mangaale.com" / "+91 XXXXXXXXXX" / "India".
 */
export const contactData = {
  email: companyData.supportEmail,
  phones: [companyData.phone],
  office: addressOneLine,
  hours: 'Mon - Sat, 9:00 AM to 8:00 PM (IST)',
  /*
   * Still a placeholder: WhatsAppButton hides itself rather than linking
   * somewhere broken, and enabling the floating button is a separate decision
   * from publishing the support phone number.
   */
  whatsapp: '+91XXXXXXXXXX'
}

export const inquiryTypes = [
  { value: 'restaurant', label: 'Restaurant Partnership' },
  { value: 'rider', label: 'Rider Signup' },
  { value: 'customer', label: 'Customer Support' },
  { value: 'business', label: 'Business Inquiry' },
  { value: 'other', label: 'Other' }
]
