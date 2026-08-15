import { CompanyContact } from '../types';

export const COMPANY_DETAILS: CompanyContact = {
  name: 'KM Enterprise',
  tagline: 'Your Trusted Partner in Global Trade',
  purchaseEmail: 'purchase@Kmentp.com',
  salesEmail: 'sales@Kmentp.com',
  mobile1: {
    number: '+91 95863 07407',
    person: 'Jay Patel',
    raw: '+919586307407'
  },
  mobile2: {
    number: '+91 98799 65601',
    person: 'Mukeshkumar Patel',
    raw: '+919879965601'
  },
  whatsapp: {
    number: '+91 95863 07407',
    raw: '919586307407',
    link: 'https://wa.me/919586307407?text=Hello%20KM%20Enterprise,%20I%20am%20interested%20in%20your%20products/services.%20Please%20share%20more%20information.'
  },
  address: {
    line1: 'G11, Tirth Arcade',
    line2: 'Kadi Thol Road, Kadi',
    city: 'Kadi',
    district: 'Mahesana',
    state: 'Gujarat',
    pincode: '384440',
    country: 'India',
    full: 'G11, Tirth Arcade, Kadi Thol Road, Kadi, Dist-Mehesana, Gujarat – 384440, India'
  },
  web3formsAccessKey: 'c838e55e-2b1d-409b-b5cb-19f9570bb1fb'
};

export const GLOBAL_TRADE_REGIONS = [
  { name: 'India (Hub)', code: 'IN', label: 'Manufacturing & Export Origin' },
  { name: 'Middle East', code: 'ME', label: 'UAE, Saudi Arabia, Qatar, Oman' },
  { name: 'Europe', code: 'EU', label: 'Germany, UK, Netherlands, Italy' },
  { name: 'Southeast Asia', code: 'SEA', label: 'Singapore, Malaysia, Vietnam, Thailand' },
  { name: 'Africa', code: 'AF', label: 'Kenya, South Africa, Nigeria, Egypt' },
  { name: 'Americas', code: 'AM', label: 'USA, Canada, Brazil, Mexico' }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Requirement',
    desc: 'Understand the customer’s specific product requirement, technical parameters, and quality benchmarks.'
  },
  {
    step: '02',
    title: 'Sourcing',
    desc: 'Identify suitable products and certified suppliers matching exact specifications and pricing goals.'
  },
  {
    step: '03',
    title: 'Verification',
    desc: 'Coordinate product samples, technical datasheet verification, and pre-order commercial details.'
  },
  {
    step: '04',
    title: 'Documentation & Logistics',
    desc: 'Coordinate required export trade documentation, customs compliance, and container shipping processes.'
  },
  {
    step: '05',
    title: 'Delivery',
    desc: 'Provide tracking, port clearance support, and dedicated coordination until successful order completion.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Reliable Business Communication',
    desc: 'Fast, responsive, and transparent communication across all time zones and order stages.'
  },
  {
    title: 'Quality-Focused Sourcing',
    desc: 'Strict QA/QC alignment, inspection checks, and reliable manufacturer selection.'
  },
  {
    title: 'Competitive Solutions',
    desc: 'Cost-optimized international trading structures without compromising on product standards.'
  },
  {
    title: 'B2B Expertise',
    desc: 'Specialized focus on industrial goods, machinery, lubricants, and precision components.'
  },
  {
    title: 'Transparent Coordination',
    desc: 'Clear commercial terms, shipment tracking, and proactive documentation updates.'
  },
  {
    title: 'Long-Term Partnerships',
    desc: 'Building sustainable, mutually beneficial trade relationships with global buyers and suppliers.'
  }
];
