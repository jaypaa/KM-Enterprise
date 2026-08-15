import { ServiceItem } from '../types';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'import-export-trading',
    title: 'Import & Export Trading',
    shortDesc: 'Professional sourcing, commercial negotiation, and international trading support connecting quality global buyers and manufacturers.',
    fullDesc: 'End-to-end international trade management for raw materials, industrial machinery, precision components, and processed goods across Asia, Europe, Middle East, and the Americas.',
    iconName: 'Globe',
    benefitsOrScope: [
      'International buyer and supplier matchmaking',
      'Contract negotiation and trade term structuring (Incoterms 2020)',
      'Cross-border commercial agreement execution',
      'Quality assurance and risk management'
    ]
  },
  {
    id: 'global-sourcing',
    title: 'Global Sourcing',
    shortDesc: 'Identifying verified manufacturers and certified products matching exact technical specifications and budget targets.',
    fullDesc: 'We bridge the gap between industrial buyers and reliable manufacturers in India and abroad, managing factory audits, price benchmarking, and supplier capability verification.',
    iconName: 'Search',
    benefitsOrScope: [
      'Qualified supplier audits and credential verification',
      'Cost optimization and volume purchasing benefits',
      'Custom product sourcing according to technical drawings',
      'Sample testing and prototype validation'
    ]
  },
  {
    id: 'b2b-supply',
    title: 'B2B Supply',
    shortDesc: 'Reliable business-to-business product supply, recurring inventory fulfillment, and industrial stock distribution.',
    fullDesc: 'Providing dependable recurring supply of industrial fasteners, valves, lubricants, cutting tools, and measuring instruments with consistent quality and competitive pricing.',
    iconName: 'Truck',
    benefitsOrScope: [
      'Just-in-Time (JIT) stock availability for industrial plants',
      'Bulk wholesale order fulfillment with batch traceability',
      'Consignment and scheduled delivery options',
      'Comprehensive product test reports (MTC / Mill Test Certificates)'
    ]
  },
  {
    id: 'supplier-coordination',
    title: 'Supplier Coordination',
    shortDesc: 'Dedicated supplier communication, production tracking, commercial alignment, and quality monitoring.',
    fullDesc: 'Serving as your local eyes and ears on the ground to monitor factory production timelines, resolve technical bottlenecks, and ensure strict adherence to order deadlines.',
    iconName: 'Users',
    benefitsOrScope: [
      'Pre-production alignment on material grades and tolerances',
      'In-process production monitoring and milestone updates',
      'Pre-shipment batch inspection and packaging check',
      'Commercial documentation and billing coordination'
    ]
  },
  {
    id: 'export-documentation',
    title: 'Export Documentation Support',
    shortDesc: 'Full assistance with commercial invoices, packing lists, Certificates of Origin, bill of lading, and trade compliance.',
    fullDesc: 'Precision handling of international trade documentation to eliminate customs delays, ensure duty optimization, and comply with origin and inspection regulations.',
    iconName: 'FileCheck',
    benefitsOrScope: [
      'Commercial Invoice & Export Packing List preparation',
      'Certificate of Origin (CoO) & GSP documentation',
      'Bill of Lading (B/L) & Airway Bill (AWB) coordination',
      'Customs clearance compliance and HS code classification'
    ]
  },
  {
    id: 'logistics-coordination',
    title: 'Logistics Coordination',
    shortDesc: 'Coordination with leading sea freight, air cargo, container lines, and inland transport partners for safe global movement.',
    fullDesc: 'Managing container stuffing, palletization, port handovers, maritime freight booking, and door-to-door shipment tracking for full container loads (FCL) and consolidated cargo (LCL).',
    iconName: 'Ship',
    benefitsOrScope: [
      'FCL (Full Container Load) & LCL (Less than Container Load) shipping',
      'Export palletization, shrink wrapping & container stuffing supervision',
      'Port-to-port and door-to-door freight management',
      'Transit insurance and shipment location tracking'
    ]
  }
];

export const CONSULTING_INSPECTION_SERVICES = [
  {
    id: 'water-wastewater-consulting',
    title: 'Water & Wastewater Treatment Consulting',
    shortDesc: 'Comprehensive design & engineering services for ETP / STP / WTP, Reverse Osmosis (RO), ZLD systems, membrane selection, and mass balance.',
    details: [
      'ETP / STP / WTP process design & engineering',
      'RO system engineering: membrane selection, recovery optimization, CIP & troubleshooting',
      'Pretreatment design: UF / NF / MBR / DM / EDI systems',
      'Water balance and mass balance calculations (RO recovery, permeate quality, reject & TDS)',
      'ZLD system design & feasibility studies (MEE / ATFD salt recovery)',
      'Conventional RO vs. ZLD comparative economic studies',
      'Industry-specific engineering for Textile, Pharma, Chemical, Food, & Power sectors'
    ]
  },
  {
    id: 'consulting-expedition-inspection',
    title: 'Consulting, Expedition & Field Services',
    shortDesc: 'On-site field inspections, technical advisory, engineering consultation, quality assessments, documentation reporting, and client representation.',
    details: [
      'Consulting & Technical Advisory (Technical consulting, engineering consultation, process evaluation)',
      'Site Visits & Field Services (Site visits, project & equipment inspections, survey & verification)',
      'Quality & Compliance (Quality & compliance assessments, inspection & risk condition assessment)',
      'Documentation & Reporting (Inspection reports, technical documentation, survey & condition reports)',
      'Client Representation (Representation during inspections, vendor support & technical verification)'
    ]
  },
  {
    id: 'third-party-pipes',
    title: 'Third-Party Inspection – Tubes, Pipes & Fasteners',
    shortDesc: 'Independent QA/QC verification for stainless steel tubes, pipes, fasteners, valves, and pressure vessels during fabrication.',
    details: [
      'Raw material verification & Mill Test Certificate (MTC) audit',
      'Dimensional inspection & wall thickness measurement (SS Tubes 6–50.80mm OD, Pipes 13.72–168.30mm OD)',
      'Fastener quality & size audit (M4 to M30 bolts, nuts, washers)',
      'Welding inspection (NDT / Radiography / UT supervision)',
      'Coating & paint thickness verification',
      'Hydrostatic & pneumatic pressure testing verification',
      'Export container loading supervision & final certification'
    ]
  }
];
