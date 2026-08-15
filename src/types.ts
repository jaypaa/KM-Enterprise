export interface CompanyContact {
  name: string;
  tagline: string;
  purchaseEmail: string;
  salesEmail: string;
  mobile1: {
    number: string;
    person: string;
    raw: string;
  };
  mobile2: {
    number: string;
    person: string;
    raw: string;
  };
  whatsapp: {
    number: string;
    raw: string;
    link: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  web3formsAccessKey?: string;
}

export interface MajorCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  itemCount: number;
  highlightItems: string[];
}

export interface SubCategoryItem {
  name: string;
  useOrSize?: string;
}

export interface SubCategory {
  id: string;
  title: string;
  items: string[];
  detailedItems?: SubCategoryItem[];
}

export interface InfographicCategory {
  id: string;
  number: number;
  title: string;
  badge: string;
  color: string;
  subcategories: SubCategory[];
  image: string;
}

export interface DetailedProduct {
  id: string;
  name: string;
  categoryNumber: string;
  categoryTitle: string;
  infographicCategoryId: string;
  subCategoryTitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  applications: string[];
  specifications: Record<string, string>;
  packaging: string;
  supplyCapability: string;
  featured?: boolean;
  typicalUse?: string;
  sizeRange?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefitsOrScope?: string[];
}

export interface RfqItem {
  product: DetailedProduct;
  quantity: string;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productRequirement: string;
  quantity: string;
  message: string;
  inquiryType: 'sales' | 'purchase' | 'general';
}
