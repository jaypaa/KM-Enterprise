import { MajorCategory, InfographicCategory, DetailedProduct } from '../types';

export const MAJOR_PRODUCT_CATEGORIES: MajorCategory[] = [
  {
    id: 'inspection-instruments',
    number: '01',
    title: 'Inspection Instruments',
    shortDesc: 'Comprehensive QA/QC measuring tools, gauges, borescopes, NDT equipment, CMM, and optical inspection meters.',
    fullDesc: 'We supply 41+ precision measuring instruments, dimensional reference standards, optical comparators, NDT flaw detectors, coating meters, and electrical inspection tools for rigorous industrial quality assurance.',
    image: '/product-inspection.jpg',
    itemCount: 41,
    highlightItems: ['Vernier Calipers & Micrometers', 'Video Scope & Borescope', 'Ultrasonic Thickness Gauges', 'Coordinate Measuring Machine (CMM)']
  },
  {
    id: 'industrial-lubricants',
    number: '02',
    title: 'Industrial Lubricants',
    shortDesc: 'Specialized Pilger oils, hydraulic fluids, gear oils, metalworking fluids, EP greases, and synthetic lubricants.',
    fullDesc: 'High-performance lubricants engineered for cold tube drawing, Pilger rolling, CNC metalworking, heavy-duty gearboxes, high-temperature hydraulic systems, and food-grade machinery.',
    image: '/product-lubricants.jpg',
    itemCount: 18,
    highlightItems: ['Pilger Tube Rolling Oil', 'Heavy-Duty Gear Oil', 'Water-Miscible Cutting Oil', 'Extreme Pressure (EP) Greases']
  },
  {
    id: 'mechanical-metal',
    number: '03',
    title: 'Mechanical & Metal Products',
    shortDesc: 'Stainless steel seamless & welded tubes, pipes (6mm–168.30mm OD), industrial fasteners (M4–M30 bolts/nuts/washers), and piping flanges.',
    fullDesc: 'ASTM, DIN, and ISO certified stainless steel bright annealed/solution annealed tubes, seamless/welded pipes, high-tensile hex bolts, nyloc nuts, spring washers, flanges, fittings, ferrules, and pipe bends.',
    image: '/product-fasteners.jpg',
    itemCount: 65,
    highlightItems: ['SS Tubes (6mm to 50.80mm OD)', 'SS Seamless Pipes (13.72 to 168.30mm OD)', 'Hex & Socket Bolts (M4-M24)', 'Nyloc & Lock Nuts (M4-M24)']
  },
  {
    id: 'industrial-products',
    number: '04',
    title: 'Industrial Products & Tools',
    shortDesc: 'CNC turning/milling inserts, VMC cutting end mills, abrasive & polishing wheels, industrial gears, and motors.',
    fullDesc: 'Precision carbide inserts for CNC operations, high-speed VMC end mills & taps, abrasive cutting & buffing wheels, industrial gearboxes, and motors.',
    image: '/product-industrial.jpg',
    itemCount: 48,
    highlightItems: ['CNC Carbide Inserts', 'VMC Solid Carbide End Mills', 'Buffing & Flap Wheels', 'Industrial Gearboxes & Motors']
  },
  {
    id: 'water-solutions',
    number: '05',
    title: 'Water & Wastewater Treatment Consulting',
    shortDesc: 'Turnkey ETP / STP / WTP design, Reverse Osmosis (RO), Zero Liquid Discharge (ZLD) feasibility, and membrane system engineering.',
    fullDesc: 'Expert design, engineering, mass balance calculation, RO recovery optimization, ZLD system feasibility studies, and troubleshooting for textile, pharma, chemical, food, and power industries.',
    image: '/product-water.jpg',
    itemCount: 22,
    highlightItems: ['ETP / STP / ZLD System Design', 'RO Permeate & Mass Balance Calc', 'UF / MBR / EDI Engineering', 'Industrial Plant Troubleshooting']
  },
  {
    id: 'export-inspection-services',
    number: '06',
    title: 'Consulting, Expedition & Field Services',
    shortDesc: 'Technical advisory, field inspection, vendor audit, third-party quality compliance, and export documentation representation.',
    fullDesc: 'On-site technical consultation, equipment inspection, vendor expediting, risk assessment, quality verification, client representation, and comprehensive reporting.',
    image: '/product-export.jpg',
    itemCount: 25,
    highlightItems: ['Site Visits & Field Services', 'Technical Advisory & Audit', 'Vendor Quality Expediting', 'Client Technical Representation']
  },
  {
    id: 'packaging-solutions',
    number: '07',
    title: 'Packaging Solutions',
    shortDesc: 'Air Cushion Rolls, Air Column Bags & Rolls, 3D Honeycomb Boxes, Dunnage Bags, Gap Filler Pouches, Grip Sheets, and Kraft Tapes.',
    fullDesc: 'Comprehensive protective air & eco-friendly packaging solutions including 3D Honeycomb Wrap Boxes, Air Column Bags/Rolls, Air Cushion Rolls, Container Dunnage Bags, Gap Filler Pouches, Grip Sheets, and ISPM-15 Export Palletization.',
    image: '/product-export.jpg',
    itemCount: 20,
    highlightItems: ['Air Column Bags & Rolls', '3D Honeycomb Wrapping Box', 'Container Dunnage Bags', 'Grip Sheet Anti-Slip Sheets']
  }
];

export const INFOGRAPHIC_CATEGORIES: InfographicCategory[] = [
  {
    id: 'cat-1-inspection',
    number: 1,
    title: 'INSPECTION INSTRUMENTS LIST (41 ITEMS)',
    badge: 'Category 01',
    color: 'border-emerald-600 text-emerald-900 bg-emerald-50',
    image: '/product-inspection.jpg',
    subcategories: [
      {
        id: 'sub-1-1',
        title: '1. Calipers, Micrometers & Height Gauges',
        items: [
          'Vernier Caliper', 'Micrometer / Outside Micrometer', 'Inside Micrometer', 
          'Depth Micrometer', 'Height Gauge', 'Bore Micrometer'
        ],
        detailedItems: [
          { name: 'Vernier Caliper', useOrSize: 'Measuring external/internal dimensions & depth' },
          { name: 'Micrometer / Outside Micrometer', useOrSize: 'Accurate outside diameter & thickness measurement' },
          { name: 'Inside Micrometer', useOrSize: 'Measuring internal dimensions' },
          { name: 'Depth Micrometer', useOrSize: 'Measuring depth of holes, slots & recesses' },
          { name: 'Height Gauge', useOrSize: 'Height & dimensional measurement from a datum' },
          { name: 'Bore Micrometer', useOrSize: 'Precision internal diameter measurement' }
        ]
      },
      {
        id: 'sub-1-2',
        title: '2. Dial Indicators & Bore Gauges',
        items: ['Dial Indicator', 'Dial Test Indicator (DTI)', 'Bore Gauge'],
        detailedItems: [
          { name: 'Dial Indicator', useOrSize: 'Checking runout, alignment, flatness & movement' },
          { name: 'Dial Test Indicator (DTI)', useOrSize: 'Precision alignment & comparative inspection' },
          { name: 'Bore Gauge', useOrSize: 'Measuring internal bore diameter' }
        ]
      },
      {
        id: 'sub-1-3',
        title: '3. Plug, Ring & Thread Gauges',
        items: ['Plug Gauge', 'Ring Gauge', 'Thread Plug Gauge', 'Thread Ring Gauge'],
        detailedItems: [
          { name: 'Plug Gauge', useOrSize: 'Checking hole size' },
          { name: 'Ring Gauge', useOrSize: 'Checking external diameter' },
          { name: 'Thread Plug Gauge', useOrSize: 'Checking internal threads' },
          { name: 'Thread Ring Gauge', useOrSize: 'Checking external threads' }
        ]
      },
      {
        id: 'sub-1-4',
        title: '4. Precision Reference & Radius Gauges',
        items: [
          'Feeler Gauge', 'Slip Gauges / Gauge Blocks', 'Radius Gauge', 
          'Fillet Gauge', 'Thread Pitch Gauge'
        ],
        detailedItems: [
          { name: 'Feeler Gauge', useOrSize: 'Measuring small gaps & clearances' },
          { name: 'Slip Gauges / Gauge Blocks', useOrSize: 'Precision dimensional reference' },
          { name: 'Radius Gauge', useOrSize: 'Checking internal & external radii' },
          { name: 'Fillet Gauge', useOrSize: 'Checking fillet radius' },
          { name: 'Thread Pitch Gauge', useOrSize: 'Identifying & checking thread pitch' }
        ]
      },
      {
        id: 'sub-1-5',
        title: '5. Angle, Alignment & Surface Standards',
        items: [
          'Bevel Protractor', 'Combination Set', 'Surface Roughness Tester', 
          'Surface Plate', 'Straight Edge', 'Try Square', 'Spirit Level'
        ],
        detailedItems: [
          { name: 'Bevel Protractor', useOrSize: 'Measuring angles' },
          { name: 'Combination Set', useOrSize: 'Checking angles, depth & squareness' },
          { name: 'Surface Roughness Tester', useOrSize: 'Measuring surface finish & roughness' },
          { name: 'Surface Plate', useOrSize: 'Precision reference surface for inspection' },
          { name: 'Straight Edge', useOrSize: 'Checking straightness' },
          { name: 'Try Square', useOrSize: 'Checking 90° squareness' },
          { name: 'Spirit Level', useOrSize: 'Checking level & alignment' }
        ]
      },
      {
        id: 'sub-1-6',
        title: '6. NDT, Optical & Advanced Metrology',
        items: [
          'Video Scope', 'Coating Thickness Gauge', 'Hardness Tester', 
          'Ultrasonic Thickness Gauge', 'CMM (Coordinate Measuring Machine)', 
          'Profile Projector / Optical Comparator', 'Measuring Microscope', 
          'Welding Inspection Gauge', 'Fillet Weld Gauge', 'Paint Thickness Gauge'
        ],
        detailedItems: [
          { name: 'Video Scope', useOrSize: 'Visual inspection of internal & inaccessible areas' },
          { name: 'Coating Thickness Gauge', useOrSize: 'Measuring paint, plating & coating thickness' },
          { name: 'Hardness Tester', useOrSize: 'Measuring material hardness' },
          { name: 'Ultrasonic Thickness Gauge', useOrSize: 'Measuring material wall thickness' },
          { name: 'CMM (Coordinate Measuring Machine)', useOrSize: '3D dimensional inspection' },
          { name: 'Profile Projector / Optical Comparator', useOrSize: 'Checking profiles, contours & dimensions' },
          { name: 'Measuring Microscope', useOrSize: 'Precision visual & dimensional inspection' },
          { name: 'Welding Inspection Gauge', useOrSize: 'Checking weld size, angle & reinforcement' },
          { name: 'Fillet Weld Gauge', useOrSize: 'Checking fillet weld dimensions' },
          { name: 'Paint Thickness Gauge', useOrSize: 'Measuring paint-film thickness' }
        ]
      },
      {
        id: 'sub-1-7',
        title: '7. Electrical & Pressure Meters',
        items: [
          'Digital Multimeter', 'Clamp Meter', 'Insulation Resistance Tester (Megger)', 
          'Pressure Gauge', 'Vacuum Gauge', 'Torque Wrench'
        ],
        detailedItems: [
          { name: 'Digital Multimeter', useOrSize: 'Electrical measurement during inspection' },
          { name: 'Clamp Meter', useOrSize: 'Measuring electrical current' },
          { name: 'Insulation Resistance Tester (Megger)', useOrSize: 'Checking electrical insulation' },
          { name: 'Pressure Gauge', useOrSize: 'Checking pressure' },
          { name: 'Vacuum Gauge', useOrSize: 'Checking vacuum pressure' },
          { name: 'Torque Wrench', useOrSize: 'Checking & controlling tightening torque' }
        ]
      }
    ]
  },
  {
    id: 'cat-2-lubricants',
    number: 2,
    title: 'INDUSTRIAL LUBRICANTS & SPECIALTY OILS',
    badge: 'Category 02',
    color: 'border-amber-600 text-amber-900 bg-amber-50',
    image: '/product-lubricants.jpg',
    subcategories: [
      {
        id: 'sub-2-1',
        title: '1. Specialty Tube & Metalworking Oils',
        items: [
          'Pilger Oil', 'Cutting Oil', 'Metalworking Fluid', 
          'Quenching Oil', 'Drawing Oil', 'Rust & Corrosion Preventive Oil'
        ],
        detailedItems: [
          { name: 'Pilger Oil', useOrSize: 'Specialized lubricant for Pilger tube rolling & cold-drawn seamless pipe applications' },
          { name: 'Cutting Oil', useOrSize: 'Metal cutting & machining operations' },
          { name: 'Metalworking Fluid', useOrSize: 'Grinding, milling, drilling & turning' },
          { name: 'Quenching Oil', useOrSize: 'Heat treatment of metals' },
          { name: 'Drawing Oil', useOrSize: 'Wire drawing & metal forming' },
          { name: 'Rust & Corrosion Preventive Oil', useOrSize: 'Metal protection during storage & transport' }
        ]
      },
      {
        id: 'sub-2-2',
        title: '2. Hydraulic, Gear & Machinery Oils',
        items: [
          'Hydraulic Oil', 'Gear Oil', 'Compressor Oil', 
          'Turbine Oil', 'Circulating Oil', 'Machine Tool Oil', 
          'Slideway Oil', 'Heat Transfer Oil', 'Transformer Oil'
        ],
        detailedItems: [
          { name: 'Hydraulic Oil', useOrSize: 'Hydraulic presses, excavators, injection molding' },
          { name: 'Gear Oil', useOrSize: 'Gearboxes, reducers & industrial drives' },
          { name: 'Compressor Oil', useOrSize: 'Air compressors & gas compressors' },
          { name: 'Turbine Oil', useOrSize: 'Steam & gas turbines' },
          { name: 'Circulating Oil', useOrSize: 'Bearings & circulation lubrication systems' },
          { name: 'Machine Tool Oil', useOrSize: 'Lathes, milling machines & machine tools' },
          { name: 'Slideway Oil', useOrSize: 'Machine-tool guideways & slides' },
          { name: 'Heat Transfer Oil', useOrSize: 'Heat-transfer systems' },
          { name: 'Transformer Oil', useOrSize: 'Electrical transformers & switchgear' }
        ]
      },
      {
        id: 'sub-2-3',
        title: '3. Greases & Specialty Lubricants',
        items: ['EP Grease', 'Food-Grade Lubricant', 'Biodegradable Lubricant'],
        detailedItems: [
          { name: 'EP Grease', useOrSize: 'Heavy-load bearings & gears' },
          { name: 'Food-Grade Lubricant', useOrSize: 'Food & beverage processing equipment' },
          { name: 'Biodegradable Lubricant', useOrSize: 'Environmentally sensitive applications' }
        ]
      }
    ]
  },
  {
    id: 'cat-3-mechanical',
    number: 3,
    title: 'MECHANICAL & METAL PRODUCTS (TUBES, PIPES & FASTENERS)',
    badge: 'Category 03',
    color: 'border-blue-600 text-blue-900 bg-blue-50',
    image: '/product-fasteners.jpg',
    subcategories: [
      {
        id: 'sub-3-1',
        title: '1. Stainless Steel Tubes & Pipes',
        items: [
          'Stainless Steel Tubes (6 mm to 50.80 mm OD - BA & Solution Annealed)',
          'Stainless Steel Pipes – Seamless (13.72 mm to 168.30 mm OD)',
          'Stainless Steel Pipes – Welded (13.72 mm to 168.30 mm OD)',
          'Bright Annealed (BA) Tubes', 'Solution Annealed Tubes'
        ],
        detailedItems: [
          { name: 'Stainless Steel Tubes', useOrSize: '6 mm to 50.80 mm OD (BA & Solution Annealed)' },
          { name: 'Seamless SS Pipes', useOrSize: '13.72 mm to 168.30 mm OD' },
          { name: 'Welded SS Pipes', useOrSize: '13.72 mm to 168.30 mm OD' }
        ]
      },
      {
        id: 'sub-3-2',
        title: '2. Bolts',
        items: [
          'Hex Head Bolt (M5 - M24)', 'Full Thread Bolt (M6 - M24)', 'Half Thread Bolt (M8 - M24)',
          'Allen / Socket Head Bolt (M4 - M16)', 'Carriage Bolt (M6 - M16)', 'Flange Bolt (M6 - M16)',
          'U-Bolt (M6 - M24)', 'Eye Bolt (M6 - M20)', 'Anchor Bolt (M8 - M24)'
        ],
        detailedItems: [
          { name: 'Hex Head Bolt', useOrSize: 'Sizes: M5, M6, M8, M10, M12, M14, M16, M20, M24' },
          { name: 'Full Thread Bolt', useOrSize: 'Sizes: M6 – M24' },
          { name: 'Half Thread Bolt', useOrSize: 'Sizes: M8 – M24' },
          { name: 'Allen / Socket Head Bolt', useOrSize: 'Sizes: M4, M5, M6, M8, M10, M12, M16' },
          { name: 'Carriage Bolt', useOrSize: 'Sizes: M6, M8, M10, M12, M16' },
          { name: 'Flange Bolt', useOrSize: 'Sizes: M6, M8, M10, M12, M16' },
          { name: 'U-Bolt', useOrSize: 'Sizes: M6 – M24' },
          { name: 'Eye Bolt', useOrSize: 'Sizes: M6 – M20' },
          { name: 'Anchor Bolt', useOrSize: 'Sizes: M8, M10, M12, M16, M20, M24' }
        ]
      },
      {
        id: 'sub-3-3',
        title: '3. Nuts',
        items: [
          'Hex Nut (M5 - M24)', 'Nyloc Nut (M4 - M24)', 'Lock Nut (M6 - M24)',
          'Flange Nut (M6 - M20)', 'Dome / Cap Nut (M6 - M20)', 'Wing Nut (M4 - M12)',
          'T-Nut (M4 - M12)', 'Coupling Nut (M6 - M24)', 'Castle Nut (M6 - M24)'
        ],
        detailedItems: [
          { name: 'Hex Nut', useOrSize: 'Sizes: M5, M6, M8, M10, M12, M14, M16, M20, M24' },
          { name: 'Nyloc Nut', useOrSize: 'Sizes: M4 – M24' },
          { name: 'Lock Nut', useOrSize: 'Sizes: M6 – M24' },
          { name: 'Flange Nut', useOrSize: 'Sizes: M6 – M20' },
          { name: 'Dome / Cap Nut', useOrSize: 'Sizes: M6 – M20' },
          { name: 'Wing Nut', useOrSize: 'Sizes: M4 – M12' },
          { name: 'T-Nut', useOrSize: 'Sizes: M4 – M12' },
          { name: 'Coupling Nut', useOrSize: 'Sizes: M6 – M24' },
          { name: 'Castle Nut', useOrSize: 'Sizes: M6 – M24' }
        ]
      },
      {
        id: 'sub-3-4',
        title: '4. Washers',
        items: [
          'Plain Washer (M4 - M30)', 'Spring Washer (M4 - M24)', 'Star / Tooth Washer (M4 - M16)',
          'Fender Washer (M4 - M20)', 'Penny Washer (M6 - M20)', 'Square Washer (M6 - M24)',
          'Sealing Washer (M6 - M24)'
        ],
        detailedItems: [
          { name: 'Plain Washer', useOrSize: 'Sizes: M4 – M30' },
          { name: 'Spring Washer', useOrSize: 'Sizes: M4 – M24' },
          { name: 'Star / Tooth Washer', useOrSize: 'Sizes: M4 – M16' },
          { name: 'Fender Washer', useOrSize: 'Sizes: M4 – M20' },
          { name: 'Penny Washer', useOrSize: 'Sizes: M6 – M20' },
          { name: 'Square Washer', useOrSize: 'Sizes: M6 – M24' },
          { name: 'Sealing Washer', useOrSize: 'Sizes: M6 – M24' }
        ]
      },
      {
        id: 'sub-3-5',
        title: '5. Screws',
        items: [
          'Machine Screw (M2 - M12)', 'Self-Tapping Screw (2.9 - 6.3 mm)', 'Self-Drilling Screw (3.5 - 6.3 mm)',
          'Wood Screw (3 - 10 mm)', 'Countersunk Screw (M3 - M12)', 'Pan Head Screw (M3 - M10)',
          'Set / Grub Screw (M3 - M16)', 'Drywall Screw (3.5 - 6.0 mm)'
        ],
        detailedItems: [
          { name: 'Machine Screw', useOrSize: 'Sizes: M2 – M12' },
          { name: 'Self-Tapping Screw', useOrSize: 'Sizes: 2.9 – 6.3 mm' },
          { name: 'Self-Drilling Screw', useOrSize: 'Sizes: 3.5 – 6.3 mm' },
          { name: 'Wood Screw', useOrSize: 'Sizes: 3 – 10 mm' },
          { name: 'Countersunk Screw', useOrSize: 'Sizes: M3 – M12' },
          { name: 'Pan Head Screw', useOrSize: 'Sizes: M3 – M10' },
          { name: 'Set / Grub Screw', useOrSize: 'Sizes: M3 – M16' },
          { name: 'Drywall Screw', useOrSize: 'Sizes: 3.5 – 6.0 mm' }
        ]
      },
      {
        id: 'sub-3-6',
        title: '6. Flanges, Piping Fittings & Ferrules',
        items: [
          'Piping Flanges', 'Elbows', 'Tees', 'Reducers', 'Couplings', 
          'Unions', 'Precision Ferrules', 'Short Bends', 'Long Bends'
        ],
        detailedItems: [
          { name: 'Piping Flanges', useOrSize: 'Connecting pipes, valves, pumps across pressure ratings & materials' },
          { name: 'Piping Fittings', useOrSize: 'Elbows, Tees, Reducers, Couplings, Unions' },
          { name: 'Precision Ferrules', useOrSize: 'Sleeves/rings for compression fittings & instrumentation' },
          { name: 'Short Bend', useOrSize: 'Smaller radius bend for compact space layouts' },
          { name: 'Long Bend', useOrSize: 'Larger radius bend for smooth flow & low pressure drop' }
        ]
      }
    ]
  },
  {
    id: 'cat-4-tools-machinery',
    number: 4,
    title: 'INDUSTRIAL PRODUCTS & TOOLS',
    badge: 'Category 04',
    color: 'border-indigo-600 text-indigo-900 bg-indigo-50',
    image: '/product-industrial.jpg',
    subcategories: [
      {
        id: 'sub-4-1',
        title: '1. Abrasive & Polishing Wheels',
        items: [
          'Abrasive Cutting Wheel', 'Buffing Wheel', 'Felt Wheel', 
          'Cotton Wheel', 'Non-Woven Wheel', 'Flap Wheel', 'Wire Wheel'
        ],
        detailedItems: [
          { name: 'Abrasive Cutting Wheel', useOrSize: 'Cutting metal & suitable materials' },
          { name: 'Buffing Wheel', useOrSize: 'High-gloss mirror polishing' },
          { name: 'Felt Wheel', useOrSize: 'Fine polishing with polishing compound' },
          { name: 'Cotton Wheel', useOrSize: 'General metal polishing' },
          { name: 'Non-Woven Wheel', useOrSize: 'Satin/brushed finish & surface cleaning' },
          { name: 'Flap Wheel', useOrSize: 'Smoothing & light material removal' },
          { name: 'Wire Wheel', useOrSize: 'Rust, paint & scale removal' }
        ]
      },
      {
        id: 'sub-4-2',
        title: '2. CNC Cutting Inserts',
        items: [
          'Turning Inserts', 'Milling Inserts', 'Drilling Inserts', 
          'Threading Inserts', 'Grooving / Parting Inserts', 'Carbide Inserts'
        ],
        detailedItems: [
          { name: 'Turning Inserts', useOrSize: 'CNC lathe facing, OD/ID turning, grooving, threading' },
          { name: 'Milling Inserts', useOrSize: 'Face mills, shoulder mills, indexable end mills' },
          { name: 'Drilling Inserts', useOrSize: 'Replaceable inserts for indexable drills' },
          { name: 'Threading Inserts', useOrSize: 'External & internal threading' },
          { name: 'Grooving / Parting Inserts', useOrSize: 'Grooving & cutoff operations' },
          { name: 'Carbide Inserts', useOrSize: 'Machining steel, stainless steel, cast iron & aluminum' }
        ]
      },
      {
        id: 'sub-4-3',
        title: '3. VMC Cutting Tools',
        items: [
          'End Mill', 'Face Mill', 'Ball Nose End Mill', 'Drill', 
          'Center Drill / Spot Drill', 'Reamer', 'Tapping Tool', 
          'Chamfer Mill', 'Boring Tool', 'Slot Drill', 'Indexable Milling Cutter'
        ],
        detailedItems: [
          { name: 'End Mill', useOrSize: 'Slotting, profiling & pocketing' },
          { name: 'Face Mill', useOrSize: 'Facing large surfaces' },
          { name: 'Ball Nose End Mill', useOrSize: '3D & contour machining' },
          { name: 'Drill', useOrSize: 'Precision hole making' },
          { name: 'Center Drill / Spot Drill', useOrSize: 'Starting & spotting holes' },
          { name: 'Reamer', useOrSize: 'Accurate finishing of holes' },
          { name: 'Tapping Tool', useOrSize: 'Internal thread cutting' },
          { name: 'Chamfer Mill', useOrSize: 'Chamfering edges' },
          { name: 'Boring Tool', useOrSize: 'Precision hole enlargement' },
          { name: 'Slot Drill', useOrSize: 'Keyway slots & pockets' },
          { name: 'Indexable Milling Cutter', useOrSize: 'High-volume material removal' }
        ]
      },
      {
        id: 'sub-4-4',
        title: '4. Gears, Motors & Drive Systems',
        items: ['Industrial Gears', 'Gearboxes', 'Geared Motors', 'Electric Motors', 'Drive Components'],
        detailedItems: [
          { name: 'Gearboxes & Gears', useOrSize: 'Industrial gearboxes & speed reducers' },
          { name: 'Electric Motors', useOrSize: 'AC/DC motors & geared motor drives' }
        ]
      }
    ]
  },
  {
    id: 'cat-5-consulting-services',
    number: 5,
    title: 'WATER TREATMENT & TECHNICAL CONSULTING SERVICES',
    badge: 'Category 05',
    color: 'border-slate-700 text-slate-900 bg-slate-100',
    image: '/product-water.jpg',
    subcategories: [
      {
        id: 'sub-5-1',
        title: '1. Water & Wastewater Treatment Consulting',
        items: [
          'ETP / STP / WTP System Design', 'RO System Design & Engineering', 
          'Pretreatment & Membrane Selection', 'RO Recovery Optimization', 
          'ZLD System Design & Feasibility', 'UF / NF / MBR / DM / EDI Engineering', 
          'Water Balance & Mass Balance Calculations', 'RO Permeate Quality & TDS Calculations', 
          'Plant Troubleshooting & Optimization', 'Conventional RO vs. ZLD Comparison'
        ],
        detailedItems: [
          { name: 'RO System Engineering', useOrSize: 'Membrane selection, permeate quality & recovery optimization' },
          { name: 'ZLD Feasibility & Design', useOrSize: 'Zero Liquid Discharge design, UF/NF/MBR/EDI integration' },
          { name: 'Mass Balance & TDS Calculations', useOrSize: 'Water balance, reject flow & TDS load calculations' },
          { name: 'Plant Optimization', useOrSize: 'Troubleshooting across Textile, Pharma, Chemical, Food & Power plants' }
        ]
      }
    ]
  },
  {
    id: 'cat-6-expedition-services',
    number: 6,
    title: 'CONSULTING, EXPEDITION & FIELD SERVICES',
    badge: 'Category 06',
    color: 'border-emerald-600 text-emerald-900 bg-emerald-50',
    image: '/product-export.jpg',
    subcategories: [
      {
        id: 'sub-6-1',
        title: '1. Consulting & Technical Advisory',
        items: [
          'Technical consulting and advisory services',
          'Engineering consultation',
          'Equipment and process evaluation'
        ],
        detailedItems: [
          { name: 'Technical Consulting', useOrSize: 'Technical consulting and advisory services' },
          { name: 'Engineering Consultation', useOrSize: 'Engineering consultation' },
          { name: 'Process Evaluation', useOrSize: 'Equipment and process evaluation' }
        ]
      },
      {
        id: 'sub-6-2',
        title: '2. Site Visits & Field Services',
        items: [
          'Site visits and field inspections',
          'Project and equipment inspections',
          'Survey and verification services'
        ],
        detailedItems: [
          { name: 'Site Visits', useOrSize: 'Site visits and field inspections' },
          { name: 'Equipment Inspections', useOrSize: 'Project and equipment inspections' },
          { name: 'Field Survey', useOrSize: 'Survey and verification services' }
        ]
      },
      {
        id: 'sub-6-3',
        title: '3. Quality & Compliance',
        items: [
          'Quality assessments',
          'Compliance assessments',
          'Inspection and verification',
          'Risk and condition assessment'
        ],
        detailedItems: [
          { name: 'Quality Assessments', useOrSize: 'Quality assessments' },
          { name: 'Compliance Assessments', useOrSize: 'Compliance assessments' },
          { name: 'Inspection & Verification', useOrSize: 'Inspection and verification' },
          { name: 'Risk Assessment', useOrSize: 'Risk and condition assessment' }
        ]
      },
      {
        id: 'sub-6-4',
        title: '4. Documentation & Reporting',
        items: [
          'Inspection reports',
          'Technical documentation',
          'Survey reports',
          'Equipment condition reports'
        ],
        detailedItems: [
          { name: 'Inspection Reports', useOrSize: 'Inspection reports' },
          { name: 'Technical Documentation', useOrSize: 'Technical documentation' },
          { name: 'Survey Reports', useOrSize: 'Survey reports' },
          { name: 'Condition Reports', useOrSize: 'Equipment condition reports' }
        ]
      },
      {
        id: 'sub-6-5',
        title: '5. Client Representation',
        items: [
          'Client representation during inspections',
          'Vendor and equipment inspection support',
          'Technical coordination and verification'
        ],
        detailedItems: [
          { name: 'Client Representation', useOrSize: 'Client representation during inspections' },
          { name: 'Vendor Inspection Support', useOrSize: 'Vendor and equipment inspection support' },
          { name: 'Technical Verification', useOrSize: 'Technical coordination and verification' }
        ]
      }
    ]
  },
  {
    id: 'cat-7-packaging',
    number: 7,
    title: 'PACKAGING SOLUTIONS & PROTECTIVE AIR PACKAGING',
    badge: 'Category 07',
    color: 'border-amber-600 text-amber-900 bg-amber-50',
    image: '/product-export.jpg',
    subcategories: [
      {
        id: 'sub-7-1',
        title: '1. Air Cushioning & Inflatable Packaging',
        items: ['Inflatable Air Column Bag', 'Inflatable Air Column Roll', 'Air Cushion Roll', 'Gap Filler Pouch'],
        detailedItems: [
          { name: 'Air Column Bag', useOrSize: '360° protective cushioning for wine bottles, electronics, ceramics & pharma' },
          { name: 'Air Column Roll', useOrSize: 'Multi-chamber air-filled rolls for custom shock & impact absorption' },
          { name: 'Air Cushion Roll', useOrSize: 'Lightweight void filling, wrapping & footwear shape retention' },
          { name: 'Gap Filler Pouch', useOrSize: 'Inflatable void-fill pouches for handbags, purses & fashion accessories' }
        ]
      },
      {
        id: 'sub-7-2',
        title: '2. Cargo Securing & Load Stabilization',
        items: ['Container Dunnage Bag', 'Grip Sheet (Anti-Slip Sheet)', 'Container Lashing & Strapping'],
        detailedItems: [
          { name: 'Container Dunnage Bag', useOrSize: 'Inflatable load-securing bags to fill void spaces in shipping containers' },
          { name: 'Grip Sheet', useOrSize: 'High-friction anti-slip sheets to prevent pallet load movement & product shifting' },
          { name: 'Cargo Lashing', useOrSize: 'Ratchet tie-down lashing belts & PET/steel strapping' }
        ]
      },
      {
        id: 'sub-7-3',
        title: '3. Eco-Friendly Honeycomb & Paper Packaging',
        items: ['3D Honeycomb Wrapping Box', 'Honeycomb Sleeve', 'Kraft Paper Tape'],
        detailedItems: [
          { name: '3D Honeycomb Wrapping Box', useOrSize: '5mm thick honeycomb cushioning structure for fragile glassware & gift boxes' },
          { name: 'Honeycomb Sleeve', useOrSize: 'Eco-friendly paper sleeves for auto parts, ceramics & luxury packaging' },
          { name: 'Kraft Paper Tape', useOrSize: 'Water-activated & self-adhesive reinforced eco-friendly paper tape' }
        ]
      },
      {
        id: 'sub-7-4',
        title: '4. Industrial Export Packaging & Palletization',
        items: ['ISPM-15 Heat-Treated Pallets', 'VCI Anti-Rust Films & Bags', 'Heavy-Duty Stretch Wrapping', 'Container Desiccants'],
        detailedItems: [
          { name: 'ISPM-15 Pallets', useOrSize: 'Certified heat-treated wooden pallets & crates for export compliance' },
          { name: 'VCI Anti-Rust Films', useOrSize: 'Corrosion preventive VCI films & bags for metal component protection' },
          { name: 'Stretch Wrapping', useOrSize: 'High-tensile cast & blown stretch film for pallet load unitization' },
          { name: 'Container Desiccants', useOrSize: 'Calcium chloride moisture absorbers for ocean freight transit' }
        ]
      }
    ]
  }
];

export const FEATURED_PRODUCTS: DetailedProduct[] = [
  {
    id: 'prod-pilger-oil',
    name: 'Pilger Oil (Specialized Tube Drawing Lubricant)',
    categoryNumber: '02',
    categoryTitle: 'Industrial Lubricants',
    infographicCategoryId: 'cat-2-lubricants',
    subCategoryTitle: 'Specialty Tube & Metalworking Oils',
    shortDesc: 'Premium specialized lubricant specifically formulated for cold-drawn seamless stainless steel and alloy tube Pilger rolling.',
    fullDesc: 'Pilger Oil provides superior extreme-pressure (EP) boundary lubrication during cold pilgering and tube drawing. Reduces tool wear, prevents mandrel seizure, ensures flawless inner surface finish, and cleans effortlessly post-processing.',
    image: '/product-lubricants.jpg',
    applications: [
      'Cold pilgering of seamless stainless steel tubes',
      'Cold drawing of high-nickel alloy pipes',
      'Precision mandrel lubrication',
      'Heavy-wall tube diameter reduction'
    ],
    specifications: {
      'Viscosity Index': '> 110',
      'Flash Point': '> 230 °C',
      'Copper Corrosion': 'Class 1a',
      'Additive System': 'Chlorine-Free / Low-Smoke EP Formula',
      'Compatibility': 'Stainless Steel 304/316/321, Duplex, Inconel'
    },
    packaging: '210L Steel Drums / 1000L IBC Totes / Export Bulk Drums',
    supplyCapability: '50,000 Liters / Month',
    featured: true,
    typicalUse: 'Pilger tube rolling & cold-drawn seamless pipe manufacturing'
  },
  {
    id: 'prod-ss-tubes-pipes',
    name: 'Stainless Steel Tubes & Seamless Pipes',
    categoryNumber: '03',
    categoryTitle: 'Mechanical & Metal Products',
    infographicCategoryId: 'cat-3-mechanical',
    subCategoryTitle: 'Stainless Steel Tubes & Pipes',
    shortDesc: 'Bright Annealed (BA) & Solution Annealed SS tubes (6mm–50.80mm OD) and Seamless/Welded SS pipes (13.72mm–168.30mm OD).',
    fullDesc: 'Precision engineered ASTM A213 / A269 / A312 stainless steel tubes and seamless pipes for heat exchangers, hydraulic lines, instrumentation, boilers, and chemical process piping.',
    image: '/product-fasteners.jpg',
    applications: [
      'Heat exchangers & condensers',
      'Hydraulic & instrumentation lines',
      'Chemical & petrochemical process piping',
      'High-pressure steam lines'
    ],
    specifications: {
      'Tubes Size Range': '6 mm to 50.80 mm Outer Diameter (OD)',
      'Pipes Size Range': '13.72 mm to 168.30 mm Outer Diameter (OD)',
      'Surface Finish': 'Bright Annealed (BA) / Solution Annealed',
      'Grades': 'SS 304, 304L, 316, 316L, 321, 310S, Duplex 2205',
      'Standards': 'ASTM A213 / ASTM A269 / ASTM A312 / DIN 17458'
    },
    packaging: 'Plastic end caps, seaworthy wooden box packing or bundle wrapping with protective plastic film.',
    supplyCapability: '300 Metric Tons / Month',
    featured: true,
    sizeRange: '6 mm to 168.30 mm OD'
  },
  {
    id: 'prod-fasteners-bolts-nuts',
    name: 'Industrial Bolts, Nuts & Washers (M4 to M30)',
    categoryNumber: '03',
    categoryTitle: 'Mechanical & Metal Products',
    infographicCategoryId: 'cat-3-mechanical',
    subCategoryTitle: 'Bolts & Nuts',
    shortDesc: 'Full range of Hex, Socket/Allen, Carriage, Flange & Anchor Bolts (M4–M24), Nyloc/Lock Nuts, and Plain/Spring Washers (M4–M30).',
    fullDesc: 'High-tensile Grade 8.8, 10.9, 12.9 carbon steel and SS 304/316 fasteners manufactured in accordance with DIN 933, DIN 931, ISO 4014, and ASTM standards.',
    image: '/product-fasteners.jpg',
    applications: [
      'Structural steel erection',
      'Heavy machinery & motor assembly',
      'Pipeline flange bolting',
      'Automotive & industrial equipment'
    ],
    specifications: {
      'Bolt Sizes': 'M4 to M24 (Hex, Allen, Carriage, Flange, U-Bolt, Anchor)',
      'Nut Sizes': 'M4 to M24 (Hex, Nyloc, Lock, Flange, Wing, Coupling)',
      'Washer Sizes': 'M4 to M30 (Plain, Spring, Star, Fender, Penny, Sealing)',
      'Materials': 'Stainless Steel 304/316, Carbon Steel Grade 8.8/10.9/12.9',
      'Coating': 'Zinc Plated, Hot-Dip Galvanized, Black Oxide, Passivated'
    },
    packaging: 'Export cardboard boxes (25kg net) palletized on wooden pallets with stretch wrap.',
    supplyCapability: '500 Tons / Month',
    featured: true,
    sizeRange: 'M4 to M30 Common Sizes'
  },
  {
    id: 'prod-vernier-micrometer',
    name: 'Vernier Calipers & Precision Micrometers',
    categoryNumber: '01',
    categoryTitle: 'Inspection Instruments',
    infographicCategoryId: 'cat-1-inspection',
    subCategoryTitle: 'Calipers, Micrometers & Height Gauges',
    shortDesc: 'Digital & analog Vernier calipers, outside/inside micrometers, depth gauges, and height gauges for workshop QA/QC.',
    fullDesc: 'Stainless steel precision calipers and micrometers with carbide measuring faces, high-contrast digital displays, IP67 water/coolant resistance, and calibration certificates.',
    image: '/product-inspection.jpg',
    applications: [
      'Precision machined component inspection',
      'Quality control & QA/QC laboratories',
      'Toolroom & CNC shop floor measurement',
      'Incoming material verification'
    ],
    specifications: {
      'Caliper Range': '0 - 150mm / 0 - 300mm / 0 - 600mm',
      'Micrometer Range': '0 - 25mm / 25 - 50mm / 50 - 75mm / 75 - 100mm',
      'Resolution': '0.01mm / 0.0005 inch (Digital)',
      'Accuracy': '± 0.02 mm',
      'Standard': 'DIN 862 / ISO 13385-1'
    },
    packaging: 'Individual foam-lined protective wooden or hard plastic case.',
    supplyCapability: '1,000 Units / Month',
    featured: true,
    typicalUse: 'Measuring external/internal dimensions, depth & bore diameters'
  },
  {
    id: 'prod-cnc-vmc-tools',
    name: 'CNC Carbide Inserts & VMC Solid End Mills',
    categoryNumber: '04',
    categoryTitle: 'Industrial Products & Tools',
    infographicCategoryId: 'cat-4-tools-machinery',
    subCategoryTitle: 'CNC Cutting Inserts & VMC Tools',
    shortDesc: 'Turning/milling/drilling indexable carbide inserts and solid carbide VMC end mills, drills, taps, and chamfer cutters.',
    fullDesc: 'Engineered for high-speed machining (HSM) of steel, stainless steel, cast iron, and superalloys. PVD/CVD nano-coated for maximum tool life and high material removal rates.',
    image: '/product-industrial.jpg',
    applications: [
      'CNC lathe turning, facing & threading',
      'VMC 3D contouring & pocket milling',
      'Die & mold precision machining',
      'Automotive & aerospace component manufacturing'
    ],
    specifications: {
      'Insert Types': 'Turning (CNMG, TNMG, WNMG), Milling (APMT, SEKT), Threading, Grooving',
      'VMC End Mill Sizes': '1mm to 20mm Diameter (2-Flute, 4-Flute)',
      'Coating': 'TiAlN / AlTiN / DLC Nano-Coating',
      'Hardness Capability': 'Up to HRC 65 machining',
      'Material': 'Micrograin Tungsten Carbide'
    },
    packaging: '10-piece plastic insert boxes / individual protective tubes for end mills.',
    supplyCapability: '10,000 Inserts / Month',
    featured: true,
    typicalUse: 'CNC & VMC precision metal cutting and machining'
  },
  {
    id: 'prod-zld-water-consulting',
    name: 'Water & Wastewater Treatment Consulting (RO / ZLD)',
    categoryNumber: '05',
    categoryTitle: 'Water & Wastewater Treatment Consulting',
    infographicCategoryId: 'cat-5-consulting-services',
    subCategoryTitle: 'Water & Wastewater Treatment Consulting',
    shortDesc: 'Turnkey engineering, RO system design, mass balance, ZLD feasibility studies, and troubleshooting for industrial plants.',
    fullDesc: 'Comprehensive water treatment engineering including ETP/STP design, RO flux & recovery optimization, MEE/ATFD thermal evaporator calculations, and ZLD compliance advisory.',
    image: '/product-water.jpg',
    applications: [
      'Textile & dyeing effluent treatment',
      'Pharmaceutical & chemical plant wastewater',
      'Food & beverage process water recovery',
      'Power plant cooling tower blowdown ZLD'
    ],
    specifications: {
      'Scope': 'Engineering, Design, Pretreatment, Membrane Selection, Recovery Optimization',
      'System Types': 'RO, UF, NF, MBR, DM, EDI, MEE, ATFD, Conventional vs ZLD',
      'Calculations': 'Mass Balance, Permeate Quality, Reject TDS & Flow Rate',
      'Compliance': 'CPCB / GPCB Zero Liquid Discharge standards'
    },
    packaging: 'Detailed Technical Reports, CAD Drawings, Mass Balance Sheets & On-Site Audits',
    supplyCapability: 'Worldwide Consulting & Turnkey Support',
    featured: true,
    typicalUse: 'Industrial ETP / STP / RO / ZLD plant design and troubleshooting'
  }
];
