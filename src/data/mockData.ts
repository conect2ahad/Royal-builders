export interface Project {
  id: string;
  slug: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Villa' | 'Apartment' | 'Township' | 'Industrial' | 'Renovation';
  status: 'Completed' | 'Under Construction' | 'Final Stages' | 'Upcoming';
  progress: number; // 0 to 100
  location: string;
  city: string;
  coordinates: string;
  siteArea: string;
  builtUpArea: string;
  totalUnits: string;
  completionDate: string;
  reraNumber: string;
  heroImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  videoUrl?: string;
  videoTitle?: string;
  description: string;
  architecturalStyle: string;
  structureType: string;
  amenities: string[];
  materialsUsed: string[];
  masterPlanHotspots: {
    id: string;
    label: string;
    type: string;
    description: string;
    x: number; // percentage
    y: number; // percentage
  }[];
  timeline: {
    stage: string;
    date: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    description: string;
  }[];
  planImage?: string;
  commercialOffering?: {
    shopSize: string;
    price: string;
    rentalIncome: string;
    superBuiltUpArea: string;
  };
  featured: boolean;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  grade: string;
  specification: string;
  image: string;
  qualityStandard: string;
  testingProcess: string;
  certificates: string[];
  applications: string;
  projectsUsedIn: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
  qualityGate: string;
  image: string;
}

export interface VideoReel {
  id: string;
  title: string;
  project: string;
  location: string;
  duration: string;
  category: string;
  thumbnail: string;
  youtubeId?: string;
  videoUrl?: string;
  date: string;
  milestone: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  project: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  videoUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  coverImage: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: 'Approvals & RERA' | 'Materials & Quality' | 'Timelines & Progress' | 'Pricing & Payment' | 'Warranty & Aftercare';
  question: string;
  answer: string;
}

export interface InteriorItem {
  id: string;
  title: string;
  category: 'Living & Salons' | 'Master Suites' | 'Modular Kitchens' | 'Ceilings & Lighting' | 'Commercial & Office';
  image: string;
  scope: string;
  materials: string[];
  dimensions: string;
  highlight: string;
}

/* ==========================================================================
   PROJECTS REPOSITORY
   ========================================================================== */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    slug: 'pallavaram-project',
    name: 'Pallavaram Landmark Complex',
    category: 'Commercial',
    status: 'Completed',
    progress: 100,
    location: 'GST Road, Pallavaram',
    city: 'Chennai',
    coordinates: '12.9675° N, 80.1491° E',
    siteArea: '15,000 Sq. Ft.',
    builtUpArea: '15,000 Sq. Ft.',
    totalUnits: 'Multi-Storey Commercial & Retail Suites',
    completionDate: 'Completed 2024',
    reraNumber: 'TN/01/Building/0192/2022',
    heroImage: '/projects/Completed/Pallavaram,15,000 sqft/outside.jpg',
    gallery: [
      '/projects/Completed/Pallavaram,15,000 sqft/outside.jpg',
      '/projects/Completed/Pallavaram,15,000 sqft/IMG-20221207-WA0008.jpg',
      '/projects/Completed/Pallavaram,15,000 sqft/IMG-20221207-WA0011.jpg',
      '/projects/Completed/Pallavaram,15,000 sqft/IMG-20221207-WA0012.jpg',
      '/projects/Completed/Pallavaram,15,000 sqft/IMG-20260624-WA0096.jpg',
      '/projects/Completed/Pallavaram,15,000 sqft/IMG-20260624-WA0098.jpg'
    ],
    beforeImage: '/projects/Completed/Pallavaram,15,000 sqft/IMG-20221207-WA0008.jpg',
    afterImage: '/projects/Completed/Pallavaram,15,000 sqft/outside.jpg',
    description: 'A premier 15,000 sq.ft mixed-use commercial and residential landmark strategically positioned on the high-traffic Pallavaram GST Road corridor. Engineered with high-strength Grade M35 ready-mix concrete and Fe 550D TMT reinforcement, featuring high-visibility architectural glazing, expansive column-free floor plates, and certified seismic resilience.',
    architecturalStyle: 'Contemporary Commercial Monolith',
    structureType: 'High-Tolerance RCC Framed Structure with Porotherm Block Masonry',
    amenities: [
      'High-Speed Commercial Elevator Systems',
      '100% DG Redundant Power Backup',
      'Dedicated Underground Rainwater Harvesting',
      'Advanced Fire Detection & Sprinkler Network',
      'Covered Multi-Vehicle Basement Parking',
      '60-Month Comprehensive Structural Warranty'
    ],
    materialsUsed: [
      'UltraTech Super OPC 53 Ready Mix Concrete',
      'Tata Tiscon 550D High-Strength Rebar',
      'Saint-Gobain Acoustic Facade Glazing',
      'Kajaria Heavy-Duty Vitrified Anti-Skid Tiles'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Ground Floor Commercial Arcade', type: 'Retail', description: 'Wide-frontage retail showrooms with double-height display glazing and pedestrian access.', x: 30, y: 40 },
      { id: 'spot-2', label: 'Corporate Office Suites', type: 'Commercial', description: 'Column-free open work plates with high daylight index and integrated fiber MEP shafts.', x: 60, y: 35 },
      { id: 'spot-3', label: 'Rooftop Utility & Solar Deck', type: 'Infrastructure', description: 'Structural slab engineered for solar PV array and dual-circuit HVAC chillers.', x: 50, y: 70 }
    ],
    timeline: [
      { stage: 'Substructure & Deep Foundation', date: 'Dec 2022', status: 'completed', description: 'Excavation, pile testing, and isolated footing foundation casting completed.' },
      { stage: 'Superstructure Column & Slab Casting', date: 'Jul 2023', status: 'completed', description: 'Monolithic floor slabs cast with laser leveling and cube compressive test certification.' },
      { stage: 'Masonry, MEP & Facade Erection', date: 'Jan 2024', status: 'completed', description: 'External plastering, facade glazing, and concealed electrical/plumbing testing.' },
      { stage: 'Final QA Audit & Client Handover', date: 'Jun 2024', status: 'completed', description: '240-point structural inspection passed; final handover and 60-month warranty dossier delivered.' }
    ],
    featured: true
  },
  {
    id: 'proj-02',
    slug: 'jafrabad-project',
    name: 'Jafrabad Modern Residence',
    category: 'Villa',
    status: 'Under Construction',
    progress: 68,
    location: 'Jafrabad',
    city: 'Vaniyambadi',
    coordinates: '12.6845° N, 78.6189° E',
    siteArea: '1,000 Sq. Ft.',
    builtUpArea: '1,000 Sq. Ft.',
    totalUnits: 'Independent Luxury Villa',
    completionDate: 'Q4 2026',
    reraNumber: 'TN/01/Building/0541/2024',
    heroImage: '/projects/Ongoing/Jafrabad 1000Sqft/completed.png',
    videoUrl: '/projects/Ongoing/Jafrabad 1000Sqft/VID20260627060911.mp4',
    videoTitle: 'Jafrabad Site Progress & Slab Casting Reel',
    beforeImage: '/projects/Ongoing/Jafrabad 1000Sqft/ongoing.jpg',
    afterImage: '/projects/Ongoing/Jafrabad 1000Sqft/completed.png',
    gallery: [
      '/projects/Ongoing/Jafrabad 1000Sqft/completed.png',
      '/projects/Ongoing/Jafrabad 1000Sqft/ongoing.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260621071539.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260621071614.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260621163308.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260621163349.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260621163650.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG_20260630_180228.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260630090319.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260702095946.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260704084728.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260704094520.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260704135258.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260708150041.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260708152817.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260710181925.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260711124401.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260715104955.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260715105022.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260725103436.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260728081930.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260805153921.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260807140354.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260907122425.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260909162720.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260915180514.jpg',
      '/projects/Ongoing/Jafrabad 1000Sqft/IMG20260916174846.jpg'
    ],
    description: 'A bespoke 1,000 sq.ft contemporary residence in Jafrabad, executed with precision structural engineering. Incorporates earthquake-resistant RCC column grid, anti-termite subterranean soil treatment, waterproofing with polymer membranes, and high-efficiency spatial planning.',
    architecturalStyle: 'Modern Minimalist Residence',
    structureType: 'Reinforced Cement Concrete (RCC) Framed Superstructure',
    amenities: [
      'Custom Architectural Facade Design',
      'Private Rooftop Terrace & Open Deck',
      'Concealed Modular Electrical Conduits',
      'Dedicated Sump & Overhead Storage',
      'Vastu-Compliant Space Layout',
      '60-Month Structural Warranty Guarantee'
    ],
    materialsUsed: [
      'Dalmia Supreme Cement Grade 53',
      'JSW Neosteel Fe 550D TMT Rebar',
      'Dr. Fixit Fastflex Water Barrier Treatment',
      'Finolex FRLS Fire-Resistant Copper Conduits'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Living & Dining Pavilion', type: 'Residential', description: 'Double-ventilated expansive living hall with porcelain vitrified slabs.', x: 35, y: 45 },
      { id: 'spot-2', label: 'Master Suite & Balcony', type: 'Residential', description: 'First-floor master suite featuring cantilever balcony and acoustic glass.', x: 65, y: 35 },
      { id: 'spot-3', label: 'Terrace Garden & Headroom', type: 'Landscape', description: 'Thermal-insulated rooftop slab with water drainage slopes.', x: 50, y: 75 }
    ],
    timeline: [
      { stage: 'Subterranean Foundation & Plinth Beam', date: 'Jun 2026', status: 'completed', description: 'PCC bed, column footings, and plinth beam casting completed.' },
      { stage: 'Column Rising & Slab Shuttering', date: 'Jul 2026', status: 'completed', description: 'Centering, rebar binding inspection, and ceiling slab casting.' },
      { stage: 'Brick Masonry & Lintels', date: 'Aug 2026', status: 'completed', description: 'Precision brick laying, electrical chase-cutting, and door/window frame fitting.' },
      { stage: 'Internal & External Plastering', date: 'Sep 2026', status: 'in-progress', description: '1:4 cement sand plastering with waterproof additive and curing cycles.' },
      { stage: 'Tiling, Fixtures & Handover', date: 'Nov 2026', status: 'upcoming', description: 'Tile laying, sanitary fittings, premium emulsion painting, and final QA inspection.' }
    ],
    planImage: '/projects/Plans/jafrabad.jpeg',
    featured: true
  },
  {
    id: 'proj-03',
    slug: 'choolaimedu-project',
    name: 'Choolaimedu Premium Residences',
    category: 'Apartment',
    status: 'Upcoming',
    progress: 12,
    location: 'Choolaimedu High Road',
    city: 'Chennai',
    coordinates: '13.0612° N, 80.2224° E',
    siteArea: '9,000 Sq. Ft.',
    builtUpArea: '9,000 Sq. Ft.',
    totalUnits: 'Boutique Luxury Apartments',
    completionDate: 'Q3 2027',
    reraNumber: 'TN/01/Building/0812/2026',
    heroImage: '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/completed.jpg',
    gallery: [
      '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/completed.jpg',
      '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/IMG-20260915-WA0000.jpg',
      '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/IMG-20260915-WA0003.jpg'
    ],
    beforeImage: '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/IMG-20260915-WA0000.jpg',
    afterImage: '/projects/Upcoming/Choolai medu, Chennai,9000 Sqft/completed.jpg',
    description: 'An exclusive 9,000 sq.ft residential development in prime Choolaimedu, Chennai. Crafted with modern architectural aesthetics, optimized natural ventilation, high-speed lift access, and acoustic partition walls, designed to deliver high-end urban living with utmost privacy.',
    architecturalStyle: 'Contemporary Urban Residential',
    structureType: 'RCC Framed Shear Structure with Solid Blockwork',
    amenities: [
      'Automated Stilt Parking',
      '8-Passenger Automatic Elevator',
      'Solar Power for Common Areas',
      'Video Door Phone & 3-Tier Security',
      'Rooftop Gazebo & Children Play Zone',
      '5-Year Structural Warranty Certificate'
    ],
    materialsUsed: [
      'UltraTech Super OPC 53 Grade Concrete',
      'Tata Tiscon 550D TMT Reinforcement',
      'Legrand Modular Wiring & Switches',
      'Kohler Sanitary Ware & CP Fittings'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Stilt Level Parking & Lobby', type: 'Infrastructure', description: 'Double-height access foyer with automated vehicle sensor gates.', x: 25, y: 40 },
      { id: 'spot-2', label: 'Luxury 3BHK Residences', type: 'Residential', description: 'East-facing apartments with premium cross-ventilation balconies.', x: 60, y: 35 },
      { id: 'spot-3', label: 'Sky Recreation Deck', type: 'Amenity', description: 'Landscaped rooftop lounge with yoga terrace and shaded pergola.', x: 50, y: 70 }
    ],
    timeline: [
      { stage: 'Soil Testing & Architectural Approval', date: 'Aug 2026', status: 'completed', description: 'Geotechnical soil report complete; CMDA planning approval in final sanctions.' },
      { stage: 'Site Clearing & Demolition', date: 'Sep 2026', status: 'in-progress', description: 'Perimeter barricading, site clearance, and borehole survey validation.' },
      { stage: 'Excavation & Piling Foundation', date: 'Nov 2026', status: 'upcoming', description: 'End-bearing RCC piles with reinforced pile cap grid.' },
      { stage: 'Superstructure Execution', date: 'May 2027', status: 'upcoming', description: 'Rapid floor cycle casting with shuttering quality control gates.' },
      { stage: 'Handover & Warranties', date: 'Nov 2027', status: 'upcoming', description: '240-point snagging and handover to resident owners.' }
    ],
    featured: true
  },
  {
    id: 'proj-04',
    slug: 'vnb-bus-stand-project',
    name: 'Vnb Bus Stand Commercial Project Zain Plaza',
    category: 'Commercial',
    status: 'Upcoming',
    progress: 15,
    location: 'Opposite Bus Stand',
    city: 'Vaniyambadi',
    coordinates: '12.6820° N, 78.6110° E',
    siteArea: '22,000 Sq. Ft.',
    builtUpArea: '22,000 Sq. Ft.',
    totalUnits: 'Each Shop 200 Sq. Ft. (For Sale ₹62 Lakhs | Rental Income ₹40k)',
    completionDate: 'Q4 2027',
    reraNumber: 'TN/01/Commercial/0934/2026',
    heroImage: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/completed.jpg',
    videoUrl: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/VID-20210913-WA0001.mp4',
    videoTitle: 'Vnb Bus Stand Commercial Project Zain Plaza Site Footage',
    beforeImage: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/IMG-20260907-WA0003.jpg',
    afterImage: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/completed.jpg',
    gallery: [
      '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/completed.jpg',
      '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/IMG-20260907-WA0003.jpg'
    ],
    description: 'A landmark 22,000 sq.ft commercial plaza situated at the prime transit hub opposite Vaniyambadi Bus Stand (Zain Plaza). Featuring exclusive prime commercial shops of 200 sq.ft super built-up area for sale at ₹62 Lakhs with high assured rental income of ₹40,000/month. Dual frontage access from CNA Road (Bus Stand) and Oosi Street, with post-tensioned framing, high footfall corridors, and dedicated lift and parking.',
    architecturalStyle: 'Commercial High-Transit Architecture',
    structureType: 'Post-Tensioned RCC Heavy-Duty Commercial Structure',
    amenities: [
      'Each Shop 200 Sq. Ft. Super Built-Up Area For Sale',
      'High Rental Income: ₹40,000 / Month (₹40k)',
      'Prime Bus Stand Frontage & Dual Road Access (CNA Road & Oosi St)',
      'Commercial Heavy-Duty Passenger Elevators',
      'Basement & Surface Multi-Level Parking',
      '100% Redundant Generator Power Backup',
      'Advanced Fire Detection & Sprinkler Network',
      '60-Month Comprehensive Structural Warranty'
    ],
    materialsUsed: [
      'Ready Mix Concrete Grade M40 with Micro-Silica',
      'SAIL / Tata Fe 550D Corrosion Resistant Steel',
      'Unitized Double-Glazed Commercial Facade',
      'Heavy-Traffic Commercial Granito Flooring'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Ground Retail Anchor Shops (200 Sq. Ft. Units)', type: 'Commercial', description: 'Each shop 200 sq.ft super built-up area for sale @ ₹62 Lakhs with ₹40k monthly rental income.', x: 30, y: 35 },
      { id: 'spot-2', label: 'Mezzanine & Multi-Tenant Floor', type: 'Commercial', description: 'Flexible commercial modular spaces with centralized air-conditioning shafts.', x: 60, y: 45 },
      { id: 'spot-3', label: 'Basement Parking & Logistics Bay', type: 'Infrastructure', description: 'Two-way vehicle ramp with dedicated delivery unloading docks.', x: 45, y: 75 }
    ],
    timeline: [
      { stage: 'Topographical Survey & Geotechnical Soil Boring', date: 'Aug 2026', status: 'completed', description: 'Soil strata verified for end-bearing heavy commercial foundations.' },
      { stage: 'Site Excavation & Retaining Wall', date: 'Sep 2026', status: 'in-progress', description: 'Basement shoring, excavation, and retaining diaphragm wall reinforcement.' },
      { stage: 'Raft Foundation Concrete Pour', date: 'Dec 2026', status: 'upcoming', description: 'Mass concrete pour with thermocouple heat monitoring.' },
      { stage: 'Multi-Floor Superstructure Erection', date: 'Jun 2027', status: 'upcoming', description: 'Post-tensioned beam casting for maximum column-free floor spaces.' },
      { stage: 'Facade & Handover', date: 'Dec 2027', status: 'upcoming', description: 'Glass curtain facade unitization and tenant handover.' }
    ],
    planImage: '/projects/Plans/bus stand.jpeg',
    commercialOffering: {
      shopSize: '200 Sq. Ft.',
      superBuiltUpArea: '200 Sq. Ft. Super Built-up Area',
      price: '₹62 Lakhs',
      rentalIncome: '₹40,000 / Month (₹40k)'
    },
    featured: true
  },
  {
    id: 'proj-05',
    slug: 'egmore-gimlcp-project',
    name: 'Egmore GiMlcp Project',
    category: 'Commercial',
    status: 'Completed',
    progress: 100,
    location: 'Gandhi Irwin Road, Egmore',
    city: 'Chennai',
    coordinates: '13.0827° N, 80.2612° E',
    siteArea: '35,000 Sq. Ft.',
    builtUpArea: '35,000 Sq. Ft.',
    totalUnits: 'Multi-Level Commercial & Infrastructure Hub',
    completionDate: 'Completed 2025',
    reraNumber: 'TN/01/Commercial/0342/2023',
    heroImage: '/projects/Completed/Egmore GiMlcp Project/completed.jpg',
    beforeImage: '/projects/Completed/Egmore GiMlcp Project/before.jpg',
    afterImage: '/projects/Completed/Egmore GiMlcp Project/completed.jpg',
    gallery: [
      '/projects/Completed/Egmore GiMlcp Project/completed.jpg',
      '/projects/Completed/Egmore GiMlcp Project/before.jpg',
      '/projects/Completed/Egmore GiMlcp Project/IMG-20250826-WA0019.jpg',
      '/projects/Completed/Egmore GiMlcp Project/IMG-20250828-WA0009.jpg',
      '/projects/Completed/Egmore GiMlcp Project/IMG-20250829-WA0011.jpg',
      '/projects/Completed/Egmore GiMlcp Project/IMG-20250901-WA0004.jpg',
      '/projects/Completed/Egmore GiMlcp Project/IMG-20251119-WA0001.jpg',
      '/projects/Completed/Egmore GiMlcp Project/IMG-20251121-WA0006.jpg'
    ],
    description: 'A 35,000 sq.ft state-of-the-art multi-level commercial infrastructure project in prime Egmore, Chennai. Designed for extreme daily load cycles with post-tensioned RCC framing, high-capacity vehicle circulation, heavy-duty floor hardeners, and integrated BMS security.',
    architecturalStyle: 'Contemporary Civic Commercial Infrastructure',
    structureType: 'Post-Tensioned Monolithic RCC Framing with Seismic Transfer Diaphragm',
    amenities: [
      'Multi-Level Automated Vehicle Deck',
      'High-Speed Commercial Passenger Lifts',
      'Heavy Freight Elevator Logistics',
      '100% Redundant Generator Power Backup',
      'Advanced Smoke Extraction & Fire Sprinklers',
      '60-Month Comprehensive Structural Warranty'
    ],
    materialsUsed: [
      'UltraTech Super OPC 53 Ready Mix Concrete',
      'Tata Tiscon 550D High-Yield Rebar',
      'Monolithic Non-Metallic Floor Hardener',
      'Saint-Gobain Acoustic Facade Glazing'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Commercial Retail Concourse', type: 'Commercial', description: 'Wide frontage ground-level retail arcade with high footfall accessibility.', x: 25, y: 35 },
      { id: 'spot-2', label: 'Multi-Deck Vehicle Transit Bays', type: 'Infrastructure', description: 'Engineered two-way ramps with non-slip quartz aggregate surfaces.', x: 60, y: 40 },
      { id: 'spot-3', label: 'Rooftop Utility & Solar Deck', type: 'Infrastructure', description: 'Reinforced utility slab housing commercial HVAC chillers and rooftop solar arrays.', x: 50, y: 75 }
    ],
    timeline: [
      { stage: 'Deep Piling & Raft Foundation', date: 'Jan 2024', status: 'completed', description: 'Deep end-bearing piles cast with sonic integrity testing.' },
      { stage: 'Multi-Level Post-Tensioned Slabs', date: 'Aug 2024', status: 'completed', description: 'High-speed monolithic floor cycles using modular formwork systems.' },
      { stage: 'MEP, Elevators & Facade Cladding', date: 'Jan 2025', status: 'completed', description: 'Commercial elevator commissioning and external architectural cladding.' },
      { stage: 'Client Audit & Certified Handover', date: 'May 2025', status: 'completed', description: 'Final compliance clearance, load testing, and comprehensive dossier handover.' }
    ],
    featured: true
  },
  {
    id: 'proj-06',
    slug: 'yelagiri-project',
    name: 'Yelagiri Hillside Retreat Villa',
    category: 'Villa',
    status: 'Completed',
    progress: 100,
    location: 'Athanavoor, Yelagiri Hills',
    city: 'Yelagiri',
    coordinates: '12.5789° N, 78.6389° E',
    siteArea: '6,500 Sq. Ft.',
    builtUpArea: '4,200 Sq. Ft.',
    totalUnits: 'Exclusive Mountain Villa',
    completionDate: 'Completed 2024',
    reraNumber: 'TN/01/Building/0215/2023',
    heroImage: '/projects/Completed/Yelagiri/completed.jpg',
    beforeImage: '/projects/Completed/Yelagiri/completed.jpg',
    afterImage: '/projects/Completed/Yelagiri/completed.jpg',
    gallery: [
      '/projects/Completed/Yelagiri/completed.jpg'
    ],
    description: 'An architectural hillside sanctuary tucked into the serene slopes of Yelagiri Hills. Engineered with stepped mountain foundation piers, reinforced local stone masonry, panoramic cantilever decks, and high thermal insulation for year-round mountain comfort.',
    architecturalStyle: 'Contoured Alpine Modern Architecture',
    structureType: 'Stepped Mountain RCC Foundation with Seismic Anchors',
    amenities: [
      'Panoramic Mountain Viewing Cantilever Decks',
      'Thermal Insulated Stone Living Pavilion',
      'Private Rainwater Harvesting Catchment',
      'Solar Thermal Clean Energy Integration',
      'Bespoke Teak Timber Finishings',
      '60-Month Structural Warranty Certificate'
    ],
    materialsUsed: [
      'ACC Coastal / Hill Durability Concrete',
      'Fe 550D Corrosion-Resistant Rebar',
      'Natural Makrana & Mountain Granite Slabs',
      'Weather-Treated Hardwood Timber'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Panoramic Valley Lounge', type: 'Residential', description: 'Floor-to-ceiling double glazed salon overlooking the mist-clad valley.', x: 35, y: 40 },
      { id: 'spot-2', label: 'Stepped Mountain Deck', type: 'Landscape', description: 'Cantilevered open-air wooden viewing terrace.', x: 65, y: 35 },
      { id: 'spot-3', label: 'Private Guest Suites', type: 'Residential', description: 'Acoustically isolated suites with mountain vistas.', x: 50, y: 70 }
    ],
    timeline: [
      { stage: 'Geotechnical Slope Stability & Stepped Footing', date: 'Mar 2023', status: 'completed', description: 'Rock anchoring and stepped foundation casting completed.' },
      { stage: 'RCC Cantilever Framing & Stone Masonry', date: 'Oct 2023', status: 'completed', description: 'Engineered cantilever beams and weather-resistant envelope.' },
      { stage: 'Timber Joinery, Glazing & Handover', date: 'May 2024', status: 'completed', description: 'Interior fit-out, panoramic glass installation, and final handover.' }
    ],
    featured: true
  },
  {
    id: 'proj-07',
    slug: 'lt-project',
    name: 'L&T transit house project',
    category: 'Industrial',
    status: 'Under Construction',
    progress: 75,
    location: 'Katupalli',
    city: 'Chennai',
    coordinates: '12.9863° N, 79.9482° E',
    siteArea: '45,000 Sq. Ft.',
    builtUpArea: '45,000 Sq. Ft.',
    totalUnits: 'Heavy Industrial & Engineering Facility',
    completionDate: 'Q1 2027',
    reraNumber: 'TN/01/Industrial/0491/2024',
    heroImage: '/projects/Ongoing/L&T Project/img.jpg',
    beforeImage: '/projects/Ongoing/L&T Project/before.jpg',
    afterImage: '/projects/Ongoing/L&T Project/img.jpg',
    videoUrl: '/projects/Ongoing/L&T Project/VID20260522163241.mp4',
    videoTitle: 'L&T Transit House Project: Structural Steel & Concrete Pour',
    gallery: [
      '/projects/Ongoing/L&T Project/img.jpg',
      '/projects/Ongoing/L&T Project/before.jpg',
      '/projects/Ongoing/L&T Project/IMG20260509104646.jpg',
      '/projects/Ongoing/L&T Project/IMG20260514121628.jpg',
      '/projects/Ongoing/L&T Project/IMG20260603124220.jpg',
      '/projects/Ongoing/L&T Project/IMG20260605162951.jpg',
      '/projects/Ongoing/L&T Project/IMG20260609111708.jpg',
      '/projects/Ongoing/L&T Project/IMG-20260504-WA0054.jpg',
      '/projects/Ongoing/L&T Project/IMG-20260504-WA0065.jpg',
      '/projects/Ongoing/L&T Project/IMG-20260509-WA0017.jpg',
      '/projects/Ongoing/L&T Project/IMG-20260513-WA0004.jpg',
      '/projects/Ongoing/L&T Project/IMG-20260522-WA0018.jpg',
      '/projects/Ongoing/L&T Project/IMG-20260917-WA0018.jpg'
    ],
    description: 'A 45,000 sq.ft heavy engineering and manufacturing transit house facility built to extreme civil tolerances. Engineered with IS 800 certified structural steel framing, heavy crane gantries, M40 high-early strength slabs, and seamless industrial drainage.',
    architecturalStyle: 'High-Tolerance Industrial Heavy Engineering',
    structureType: 'Hybrid Heavy Structural Steel (IS 800) & Heavy-Duty RCC Framing (IS 456)',
    amenities: [
      'Heavy Overhead Crane Gantry Support Slabs',
      'Laser-Leveled Floor Plates with Non-Dusting Hardeners',
      'High-Bay LED Industrial Illumination Systems',
      'Heavy Freight Multi-Bay Loading Docks',
      'Automated High-Expansion Foam Fire Suppression',
      '60-Month Comprehensive Structural Warranty'
    ],
    materialsUsed: [
      'UltraTech OPC 53 Grade High-Early Strength Concrete',
      'SAIL IS 800 Structural Steel Sections',
      'Tata Tiscon 550D Heavy TMT Rebar',
      'Abrasion-Resistant Industrial Floor Hardener'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Heavy Manufacturing Floor', type: 'Industrial', description: 'Monolithic reinforced slab capable of carrying 12-tonne point loads.', x: 30, y: 40 },
      { id: 'spot-2', label: 'Crane Gantry Runway', type: 'Industrial', description: 'Heavy structural steel runway designed for 25-tonne overhead gantry cranes.', x: 60, y: 35 },
      { id: 'spot-3', label: 'Logistics Dock & Turnaround Bay', type: 'Infrastructure', description: 'Heavy freight container access with reinforced turning apron.', x: 50, y: 75 }
    ],
    timeline: [
      { stage: 'Mass Excavation & Foundation Pours', date: 'May 2026', status: 'completed', description: 'Heavy isolated footings with high-load reinforcement grids cast.' },
      { stage: 'Structural Steel Erection & Crane Girders', date: 'Aug 2026', status: 'completed', description: 'IS 800 certified columns, roof trusses, and crane runways erected.' },
      { stage: 'Monolithic Heavy Slab Casting', date: 'Oct 2026', status: 'in-progress', description: 'M40 laser-screed concrete pouring and surface hardener application.' },
      { stage: 'Cladding, MEP & Commissioning', date: 'Jan 2027', status: 'upcoming', description: 'Industrial insulated wall sheeting and electrical substation hookup.' }
    ],
    planImage: '/projects/Plans/L&T.jpeg',
    featured: true
  },
  {
    id: 'proj-08',
    slug: 'kodambakkam-project',
    name: 'Kodambakkam Modern Residence',
    category: 'Residential',
    status: 'Upcoming',
    progress: 10,
    location: 'Kodambakkam',
    city: 'Chennai',
    coordinates: '13.0524° N, 80.2255° E',
    siteArea: '1,800 Sq. Ft.',
    builtUpArea: '1,800 Sq. Ft.',
    totalUnits: 'Independent Luxury Residence',
    completionDate: 'Q4 2027',
    reraNumber: 'TN/01/Building/1042/2026',
    heroImage: '/projects/Upcoming/1800 sqft land area Location Kodambakkam Chennai/completed.jpeg',
    gallery: [
      '/projects/Upcoming/1800 sqft land area Location Kodambakkam Chennai/completed.jpeg',
      '/projects/Upcoming/1800 sqft land area Location Kodambakkam Chennai/site.jpeg'
    ],
    beforeImage: '/projects/Upcoming/1800 sqft land area Location Kodambakkam Chennai/site.jpeg',
    afterImage: '/projects/Upcoming/1800 sqft land area Location Kodambakkam Chennai/completed.jpeg',
    description: 'A bespoke 1,800 sq.ft luxury residential project situated in the prime central residential enclave of Kodambakkam, Chennai. Engineered with high-strength RCC framed superstructure, optimized cross-ventilation, expansive terrace deck, and premium brand-locked finishes with 60-month structural warranty.',
    architecturalStyle: 'Modern Urban Villa Architecture',
    structureType: 'Seismic Resistant RCC Framed Structure with Chamber Brick Infill',
    amenities: [
      'Covered Multi-Vehicle Stilt Parking',
      'Architectural Skylight & Double-Height Living',
      'Automated Rainwater Catchment Network',
      'Smart Video Door Intercom & Automated Gates',
      'Solar Rooftop Infrastructure Provision',
      '60-Month Comprehensive Structural Warranty'
    ],
    materialsUsed: [
      'UltraTech Super OPC 53 Grade Concrete',
      'Tata Tiscon 550D TMT Reinforcement',
      'First-Class Chamber Red Bricks',
      'Italian Statuario Marble Living Flooring'
    ],
    masterPlanHotspots: [
      { id: 'spot-1', label: 'Ground Floor Foyer & Parking', type: 'Infrastructure', description: 'Wide-span column-free parking bay and grand entry lobby.', x: 30, y: 40 },
      { id: 'spot-2', label: 'Double-Height Living Salon', type: 'Residential', description: 'Expansive family lounge with floor-to-ceiling daylight glazing.', x: 60, y: 35 },
      { id: 'spot-3', label: 'Sky Pergola & Terrace Garden', type: 'Amenity', description: 'Private landscaped rooftop deck with weather-proof pergola.', x: 50, y: 70 }
    ],
    timeline: [
      { stage: 'Soil Testing & Architectural Approval', date: 'Oct 2026', status: 'completed', description: 'Geotechnical soil report complete; CMDA planning approval sanctioned.' },
      { stage: 'Site Barricading & Deep Excavation', date: 'Dec 2026', status: 'in-progress', description: 'Perimeter shoring, ground clearance, and borehole survey validation.' },
      { stage: 'Isolated Footings & Raft Foundation', date: 'Feb 2027', status: 'upcoming', description: 'High-early strength M35 concrete pour with rebar inspection gates.' },
      { stage: 'Superstructure Column & Slab Casting', date: 'Jul 2027', status: 'upcoming', description: 'Monolithic floor casting with laser level verification.' },
      { stage: 'Finishing & Client Handover', date: 'Dec 2027', status: 'upcoming', description: '240-point snagging and final handover with 60-month structural warranty.' }
    ],
    planImage: '/projects/Plans/Kodambakkam Chennai.jpeg',
    featured: true
  }
];

/* ==========================================================================
   MATERIALS & SPECIFICATIONS LIBRARY (Cement, Bricks & Marble)
   ========================================================================== */
export const MATERIALS_DATA: MaterialItem[] = [
  // CEMENT
  {
    id: 'mat-cement-1',
    name: 'UltraTech Cement',
    category: 'Cement',
    brand: 'UltraTech Super',
    grade: 'High Durability / OPC 53 Grade',
    specification: 'Engineered for exceptional 28-day compressive strength (>58 MPa), micro-pore sealing, and long-term durability in high-load foundations.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 12269:2013 & IS 456 Code',
    testingProcess: 'Compressive strength testing at 7 and 28 days via calibrated UTM; slump cone consistency test on every transit batch.',
    certificates: ['Manufacturer Mill Test Certificate (MTC)', 'NABL Accredited Strength Verification'],
    applications: 'Raft foundations, load-bearing columns, monolithic shear walls, and post-tensioned slabs',
    projectsUsedIn: ['Pallavaram Landmark Complex', 'Jafrabad Modern Residence', 'Vnb Bus Stand Commercial Project Zain Plaza']
  },
  {
    id: 'mat-cement-2',
    name: 'OPC 53 Grade',
    category: 'Cement',
    brand: 'Ordinary Portland Cement',
    grade: 'OPC 53 High Early Strength',
    specification: 'Premium grade high-strength cement delivering rapid compressive strength development (>53 MPa), optimizing curing and floor turnover cycles.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 12269:2013 Code',
    testingProcess: 'Standard consistency test, Le-Chatelier soundness test, and autoclave expansion verification.',
    certificates: ['BIS 12269 License', 'Batch Compressive Test Records'],
    applications: 'RCC structures, monolithic columns, pre-stressed members, heavy commercial buildings',
    projectsUsedIn: ['Choolaimedu Premium Residences', 'Pallavaram Landmark Complex']
  },
  {
    id: 'mat-cement-3',
    name: 'ACC Coastal',
    category: 'Cement',
    brand: 'ACC Coastal+ / Marine Defense',
    grade: 'Anti-Saline Micro-Pozzolan Formula',
    specification: 'Specially engineered for coastal environments, offering extreme resistance against marine airborne salts, sulfates, and groundwater chloride attack.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 455 / Coastal Corrosion Mitigation Standard',
    testingProcess: 'Rapid Chloride Permeability Test (RCPT) and water permeability under 5-bar hydrostatic head.',
    certificates: ['Marine Environment Durability Sign-off', 'NABL Test Certificate'],
    applications: 'Subterranean retaining structures, basement rafts, and exterior building envelopes',
    projectsUsedIn: ['All Chennai & Coastal Landmark Projects']
  },

  // BRICKS
  {
    id: 'mat-brick-1',
    name: 'AAC Blocks',
    category: 'Bricks',
    brand: 'Autoclaved Aerated Concrete Blocks',
    grade: 'Class 4 Lightweight Structural Blocks',
    specification: 'High thermal and acoustic insulation, lightweight construction reducing structural dead-load by up to 40%, and fire-rated up to 4 hours.',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 2185 (Part 3): 1984',
    testingProcess: 'Dry density measurement, compressive strength audit (>4.0 N/mm²), and thermal conductivity rating.',
    certificates: ['Green Building Product Certified', 'NABL Lab Testing Dossier'],
    applications: 'Internal dividing partition walls, multi-storey envelope masonry',
    projectsUsedIn: ['Jafrabad Modern Residence', 'Choolaimedu Premium Residences']
  },
  {
    id: 'mat-brick-2',
    name: 'Red Bricks',
    category: 'Bricks',
    brand: 'Kiln-Burned Chamber Red Bricks',
    grade: 'First-Class Wire-Cut Red Clay Bricks',
    specification: 'High-density burnt clay bricks with low water absorption (<12%), uniform copper-red coloration, and high crushing resistance.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 1077:1992 First Class Bricks',
    testingProcess: 'Efflorescence immersion testing, water absorption 24-hour boil test, and compressive crushing test.',
    certificates: ['Certified Kiln Batch Quality Logs'],
    applications: 'External boundary walls, architectural exposed masonry, heavy partition walls',
    projectsUsedIn: ['Jafrabad Modern Residence', 'Pallavaram Landmark Complex']
  },
  {
    id: 'mat-brick-3',
    name: 'Hollow Bricks',
    category: 'Bricks',
    brand: 'Engineered Concrete Hollow Blocks',
    grade: 'Heavy-Duty Cellular Concrete',
    specification: 'Cellular air cavity design providing superior natural cooling, acoustic dampening, and streamlined concealed conduit runs.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 2185 (Part 1): 2005',
    testingProcess: 'Block density test, hollow void ratio measurement, and compressive load testing.',
    certificates: ['Bureau of Indian Standards Compliant'],
    applications: 'Perimeter compound walls, acoustic utility shafts, warehouse and commercial masonry',
    projectsUsedIn: ['Vnb Bus Stand Commercial Project Zain Plaza']
  },

  // MARBLE
  {
    id: 'mat-marble-1',
    name: 'Makrana Marble',
    category: 'Marble',
    brand: 'Pure Makrana White Stone',
    grade: 'First Quality Albeta / Dungri White',
    specification: 'Pristine calcite marble renowned for 98% calcium carbonate purity, crystalline luster polish that never yellows, and generational longevity.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 1122 & IS 1124 Marble Stone Testing',
    testingProcess: 'Mohs scratch hardness test, flexural strength test, and water absorption percentage.',
    certificates: ['Direct Makrana Rajasthan Origin Certificate'],
    applications: 'Formal living halls, prayer rooms, grand staircases, master suite flooring',
    projectsUsedIn: ['Jafrabad Modern Residence', 'Choolaimedu Premium Residences']
  },
  {
    id: 'mat-marble-2',
    name: 'Italian Marble',
    category: 'Marble',
    brand: 'Imported Statuario & Botticino',
    grade: 'Book-Matched 20mm Calibrated Slabs',
    specification: 'Luxurious imported Italian marble with dramatic natural veining, epoxy mesh backing, and mirror-grade diamond polish finish.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'European Standard EN 12057 / IS 1130',
    testingProcess: 'Sounding hammer density audit, slab calibration thickness check, stain-resistance coating test.',
    certificates: ['Italian Quarry Certificate of Authenticity'],
    applications: 'Living lobbies, luxury master bathrooms, feature foyer accent walls, dining spaces',
    projectsUsedIn: ['Pallavaram Landmark Complex', 'Jafrabad Modern Residence']
  },
  {
    id: 'mat-marble-3',
    name: 'Sang-e-Marmar',
    category: 'Marble',
    brand: 'Sang-e-Marmar Natural Stone',
    grade: 'High-Density Architectural Grade',
    specification: 'Classic architectural white and translucent stone celebrated in royal palaces for cooling properties, silky surface texture, and everlasting luster.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    qualityStandard: 'IS 1122 Natural Dimension Stone Standard',
    testingProcess: 'Acid resistance inspection, compressive load test, and water absorption index.',
    certificates: ['Authentic Stone Selection Audit'],
    applications: 'Courtyards, verandas, artistic archways, monumental entryways',
    projectsUsedIn: ['Jafrabad Modern Residence', 'Vnb Bus Stand Commercial Project Zain Plaza']
  }
];

/* ==========================================================================
   METHODOLOGY / 8-STAGE ENGINEERING LIFECYCLE
   ========================================================================== */
export const METHODOLOGY_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Approval',
    subtitle: 'Statutory clearances, planning sanctions & RERA registrations.',
    duration: '4–8 Weeks',
    description: 'Complete regulatory liaison handling municipal planning approvals, DTCP / CMDA sanction orders, Fire Department NOCs, and State RERA registrations before site work commences.',
    deliverables: [
      'Approved Building Sanction Plans & Order',
      'State RERA Registration Compliance',
      'Structural Stability & Fire Department NOC',
      'Pollution Control & Environmental Clearances'
    ],
    qualityGate: '100% legal verification and publication of official approval credentials.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '02',
    title: 'Soil Testing',
    subtitle: 'Scientific geotechnical investigation & strata analysis.',
    duration: '2–3 Weeks',
    description: 'Comprehensive geotechnical borehole drilling, standard penetration testing (SPT), electrical resistivity analysis, and groundwater chemistry mapping to determine safe bearing capacity.',
    deliverables: [
      'Comprehensive Soil Geotechnical Investigation Report',
      'Safe Bearing Capacity (SBC) Calculations',
      'Groundwater Chemistry & Salinity Analysis',
      'Seismic Microzonation Assessment'
    ],
    qualityGate: 'Geotechnical consultant certified soil profile with load recommendations.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '03',
    title: 'Excavation',
    subtitle: 'Precision earthwork, shoring & perimeter retention.',
    duration: '3–6 Weeks',
    description: 'Laser-guided subterranean excavation, rock breaking, soldier piling, and perimeter retention walls ensuring zero lateral ground settlement to adjoining structures.',
    deliverables: [
      'Precision Leveling & Laser Trench Verification',
      'Perimeter Shoring & Soil Retention System',
      'Anti-Termite Chemical Sub-Grade Barrier Injection',
      'Dewatering & Site Drainage Channeling'
    ],
    qualityGate: 'Zero subsidence of peripheral boundary with verified bed levels.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '04',
    title: 'Architectural',
    subtitle: 'BIM 3D modeling, spatial optimization & structural design.',
    duration: '4–6 Weeks',
    description: 'Comprehensive architectural layouts, structural design modeling per IS codes, 3D BIM clash-detection, and detailed bar-bending schedules tailored to functional lifestyle aesthetics.',
    deliverables: [
      '3D Architectural Visualization & BIM Model',
      'Structural Analysis & Bar Bending Schedules (BBS)',
      'Cross-Disciplinary MEP Integration Plans',
      'Comprehensive Bill of Quantities (BOQ)'
    ],
    qualityGate: 'Structural engineering drawings certified by senior university consultants.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '05',
    title: 'Raft Foundation',
    subtitle: 'Monolithic reinforced concrete footing engineered for centuries.',
    duration: '4–8 Weeks',
    description: 'Heavy-duty monolithic raft casting utilizing certified high-early-strength concrete, Fe 550D rebar grid matrices, and subterranean crystalline waterproofing admixtures.',
    deliverables: [
      'Raft Rebar Placement & Clear Cover Verification',
      'Mass Concrete Continuous Pour Management Log',
      '7-Day & 28-Day Concrete Cube Compression Reports',
      'Subterranean Crystalline Membrane Waterproofing'
    ],
    qualityGate: 'Core concrete temperature differential <20°C and ultrasonic testing sign-off.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '06',
    title: 'Superstructure',
    subtitle: 'Columns, shear walls, beams & disciplined floor cycles.',
    duration: '7–10 Days / Floor',
    description: 'Erection of the structural skeleton using engineered monolithic formwork, strict plumb and level verification, vibration compaction, and certified 28-day water curing protocols.',
    deliverables: [
      'Laser Plumb & Verticality Survey Records',
      'Pre-Pour Steel Binding & Spacer Block Verification',
      'Batch-Wise Concrete Slump & Compressive Test Logs',
      'De-Shuttering Strength Verification Sign-Offs'
    ],
    qualityGate: 'Laser-guided deviation tolerance within ±3mm over a 3-meter straight edge.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '07',
    title: 'Finishing',
    subtitle: 'MEP services, masonry, premium surfaces & joinery.',
    duration: '12–16 Weeks',
    description: 'High-grade brickwork / AAC blocks, Makrana and Italian marble laying, concealed MEP piping with 24-hr 15-bar pressure tests, 72-hr waterproofing ponding, and architectural paint systems.',
    deliverables: [
      'Plumbing Hydrostatic Pressure Test Sign-Off (15 bar)',
      'Electrical Megger Insulation Resistance Logs',
      '72-Hour Waterproofing Flood Test Verification',
      'Precision Tile & Marble Alignment Inspection'
    ],
    qualityGate: 'Zero pressure gauge drop and hollow-sound hammer audit across all tiled floors.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80'
  },
  {
    number: '08',
    title: 'Handover',
    subtitle: 'Defect-free commissioning, asset dossier & 60-Mo warranty.',
    duration: '2–4 Weeks + 60 Mo',
    description: 'Comprehensive 240-point quality audit, key handover ceremony, provision of as-built electrical and plumbing manuals, and activation of our legally binding 60-month structural warranty.',
    deliverables: [
      'Unit-by-Unit 240-Point Quality Handover Dossier',
      'Signed 60-Month Structural Warranty Legal Certificate',
      'Complete As-Built MEP Drawings & Equipment Manuals',
      '1-Year Complimentary Proactive Engineering Maintenance'
    ],
    qualityGate: 'Zero pending snag items on digital audit tablet before keys are released.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  }
];

/* ==========================================================================
   LIVE SITE REELS
   ========================================================================== */
export const LIVE_REELS: VideoReel[] = [
  {
    id: 'reel-lt',
    title: 'L&T Transit House Project: Heavy Steel & Concrete Pour',
    project: 'L&T transit house project',
    location: 'Katupalli',
    duration: '0:50',
    category: 'Heavy Industrial Superstructure',
    thumbnail: '/projects/Ongoing/L&T Project/img.jpg',
    videoUrl: '/projects/Ongoing/L&T Project/VID20260522163241.mp4',
    date: 'Active Construction 2026',
    milestone: 'Stage 04 / Heavy Concrete Pour'
  },
  {
    id: 'reel-01',
    title: 'Jafrabad Residence: Live Site Construction & Slab Work',
    project: 'Jafrabad Modern Residence',
    location: 'Jafrabad, Vaniyambadi',
    duration: '0:45',
    category: 'Superstructure & Masonry',
    thumbnail: '/projects/Ongoing/Jafrabad 1000Sqft/completed.png',
    videoUrl: '/projects/Ongoing/Jafrabad 1000Sqft/VID20260627060911.mp4',
    date: 'Active Construction 2026',
    milestone: 'Stage 04 / Real Site Progress Reel'
  },
  {
    id: 'reel-02',
    title: 'Vnb Bus Stand Commercial Project Zain Plaza: Site Survey & Ground Footage',
    project: 'Vnb Bus Stand Commercial Project Zain Plaza',
    location: 'Opposite Bus Stand, Vaniyambadi',
    duration: '0:38',
    category: 'Site Survey & Transit Access',
    thumbnail: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/completed.jpg',
    videoUrl: '/projects/Upcoming/Vnb Bus stand Project 22,000 sqft/VID-20210913-WA0001.mp4',
    date: 'Site Survey 2026',
    milestone: 'Stage 01 / Transit Location Survey'
  },
  {
    id: 'reel-03',
    title: 'Pallavaram Landmark: 15,000 Sq. Ft. Completed Structure',
    project: 'Pallavaram Landmark Complex',
    location: 'GST Road, Pallavaram, Chennai',
    duration: '1:00',
    category: 'Delivered Commercial Project',
    thumbnail: '/projects/Completed/Pallavaram,15,000 sqft/outside.jpg',
    youtubeId: '33cHvevte_o',
    date: 'Completed 2024',
    milestone: 'Stage 07 / Delivered Landmark'
  }
];

/* ==========================================================================
   STATISTICS & METRICS
   ========================================================================== */
export const COMPANY_STATS = [
  { value: 20, suffix: '+', label: 'Years of Structural Mastery', description: 'Continuous engineering execution since 2003' },
  { value: 60, suffix: '+', label: 'Delivered Projects', description: 'Zero structural failures across 60+ handovers' },
  { value: 3.8, suffix: 'M', label: 'Sq. Ft. Built & Delivered', description: 'Residential, commercial, and township developments' },
  { value: 54, suffix: 'M', label: 'Safe Man-Hours Logged', description: 'Zero Lost Time Incidents (LTI) in the last 24 months' },
  { value: 60, suffix: '-mo', label: 'Structural Warranty', description: 'Backed by legal indemnity and bank guarantee' },
  { value: 96, suffix: '%', label: 'On-Time Project Handover', description: 'Disciplined milestone tracking with live client dashboards' }
];

/* ==========================================================================
   QUALITY & SAFETY (240-POINT QA AUDIT BREAKDOWN)
   ========================================================================== */
export const QA_CHECKLIST_DOMAINS = [
  {
    title: 'Sub-Structure & Geotech (35 Points)',
    items: [
      'Soil bearing capacity confirmation via standard penetration test (SPT)',
      'Pile load and sonic integrity testing (ASTM D5882)',
      'Raft foundation rebar spacing and cover block placement verification',
      'Anti-termite chemical soil barrier pressure injection',
      'Continuous hydration thermocouple temperature monitoring'
    ]
  },
  {
    title: 'RCC Superstructure & Formwork (45 Points)',
    items: [
      'Laser-guided vertical alignment of shear walls (tolerance ±3mm)',
      'Bar bending schedule compliance and rebar tie knot tightness',
      'Concrete slump cone test on 100% of incoming transit mixers',
      'Concrete cube compression sampling: 3 cubes at 7 days, 3 cubes at 28 days',
      'Slab de-shuttering propping verification per IS 456'
    ]
  },
  {
    title: 'Waterproofing & Envelope (30 Points)',
    items: [
      'Basement diaphragm wall crystalline injection slurry verification',
      'Podium and terrace 72-hour ponding test with zero gauge drop',
      'Toilet sunken slab dual-coat polyurethane membrane adhesion test',
      'Window frame perimeter silicon sealant structural adhesion check'
    ]
  },
  {
    title: 'MEP & Building Services (60 Points)',
    items: [
      'Plumbing line hydrostatic pressure test at 15 bar for 24 continuous hours',
      'Electrical Megger insulation resistance testing at 500V DC (>50 Mega-ohms)',
      'Earthing pit resistance verification (<1 Ohm per pit)',
      'Smoke extraction and fire sprinkler head pressure audit'
    ]
  },
  {
    title: 'Architectural Joinery & Finishes (70 Points)',
    items: [
      'Vitrified tile and marble hollow sound inspection via sounding hammer',
      'Wall plaster plumb and straight-edge flatness check (±2mm)',
      'Door frame squareness and acoustic perimeter seal compression',
      'Glass curtain wall water infiltration test per AAMA 501.2'
    ]
  }
];

export const CERTIFICATIONS = [
  {
    name: 'IS 456 Code',
    label: 'Certified by for concrete',
    authority: 'Bureau of Indian Standards · Plain & Reinforced Concrete Code of Practice'
  },
  {
    name: 'IS 800 Code',
    label: 'Certified for steel',
    authority: 'Bureau of Indian Standards · General Construction In Steel Code of Practice'
  }
];

/* ==========================================================================
   TESTIMONIALS
   ========================================================================== */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    clientName: 'Dr. Arvind Swaminathan',
    designation: 'Senior Cardiologist & Villa Owner',
    project: 'Sovereign Estate Villas',
    location: 'Injambakkam, ECR Chennai',
    quote: 'As a surgeon, I operate with zero margin for error — and that is precisely what I found in Royal Builders. During the 16 months of constructing our beachfront residence, the weekly engineering logs, slump test certificates, and laser-straight finishes exceeded every expectation. Their 60-month structural warranty is not marketing; it is backed by genuine civil engineering pedigree.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-02',
    clientName: 'Rajesh & Malini Kulkarni',
    designation: 'VP of Technology & Homeowners',
    project: 'The Royal Crest Residences',
    location: 'OMR Navalur, Chennai',
    quote: 'We have bought apartments from reputable builders before, but Royal Builders operates on an entirely different plane. The sheer acoustic insulation between units — zero ambient noise from the busy OMR highway — and the flawless alignment of bathroom piping proves their internal QA discipline.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'test-03',
    clientName: 'K. S. Narayanan',
    designation: 'Managing Director, Horizon Retail Group',
    project: 'Apex One Technology Park',
    location: 'Guindy, Chennai',
    quote: 'Delivering an 850,000 sq.ft LEED Platinum commercial facility within 22 months in the heart of Guindy seemed improbable. Royal Builders achieved it with zero lost-time incidents and handed over floor plates with laser-flat tolerances that our international anchor tenants praised without reservation.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
  }
];

/* ==========================================================================
   BLOG / ENGINEERING INSIGHTS
   ========================================================================== */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    slug: 'mivan-formwork-vs-conventional-construction',
    title: 'Monolithic Aluminium Formwork (Mivan) vs. Conventional Shuttering: The Structural Longevity Verdict',
    excerpt: 'An engineering comparison of structural shear-wall concrete against traditional red-brick columns, examining seismic resistance, crack mitigation, and 100-year lifespans.',
    category: 'Structural Engineering',
    date: 'February 18, 2026',
    readTime: '6 min read',
    author: 'Er. Sundararaman Ramanathan',
    authorRole: 'Chief Structural Consultant',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    content: [
      'In modern urban development, the traditional method of erecting reinforced concrete skeleton frames with non-structural masonry infills is increasingly being phased out in favor of monolithic shear-wall systems cast with aluminium formwork.',
      'Unlike conventional brick masonry walls which frequently develop shear micro-cracks at plaster interfaces due to thermal expansion differentials, monolithic concrete structures act as single continuous three-dimensional shells.',
      'From a seismic standpoint, monolithic buildings distribute horizontal seismic wave energy uniformly across shear walls rather than concentrating stresses on beam-column junctions, drastically lowering collapse vulnerability.',
      'Furthermore, the high-density surface finish obtained from engineered aluminium formwork eliminates thick sand-cement plastering, mitigating water seepage channels and reducing structural maintenance costs over a 60-year horizon.'
    ],
    tags: ['Mivan Technology', 'Structural Engineering', 'Seismic Resilience']
  },
  {
    id: 'blog-02',
    slug: 'coastal-corrosion-mitigation-in-rcc',
    title: 'Defeating Marine Corrosion: Chemistry & Metallurgy in Coastal Construction',
    excerpt: 'How epoxy coatings, silica-fume pozzolans, and sacrificial anode systems prevent chloride ion penetration in high-salinity coastal environments.',
    category: 'Material Science',
    date: 'January 29, 2026',
    readTime: '8 min read',
    author: 'Er. V. Meenakshisundaram',
    authorRole: 'VP Quality & Materials',
    coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Constructing luxury coastal properties along coastal corridors requires specialized civil engineering protocols to resist airborne sea salt and groundwater chloride intrusion.',
      'When chloride ions reach the rebar through concrete capillaries, they depassivate the protective oxide film, causing steel expansion and catastrophic concrete spalling.',
      'At Royal Builders, coastal developments utilize ternary concrete blends incorporating 25% micro-silica and slag, dropping water-permeability coefficients below 1x10^-12 m/s.',
      'Combined with Fe 550D rebar and dual-layer crystalline waterproofing admixtures, this delivers century-long structural stability without structural degradation.'
    ],
    tags: ['Marine Concrete', 'Corrosion Prevention', 'Coastal Engineering']
  },
  {
    id: 'blog-03',
    slug: 'geotechnical-soil-investigation-guide',
    title: 'What Lies Beneath: Why Comprehensive Geotechnical Borehole Testing Precedes Every Foundation Pour',
    excerpt: 'Understanding Standard Penetration Tests (SPT), skin friction in end-bearing piles, and differential settlement prevention in varied soil strata.',
    category: 'Geotechnical Engineering',
    date: 'December 12, 2025',
    readTime: '5 min read',
    author: 'Er. K. Venkataraghavan',
    authorRole: 'Head of Geotechnical Division',
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    content: [
      'The most expensive structural errors in construction are almost universally subterranean. Skipping thorough soil testing can lead to catastrophic differential settlement, wall shearing, and foundation tilting.',
      'We conduct standard penetration tests at 1.5m vertical intervals up to refusal depth (N > 50), mapping clay lenses, water table fluctuations, and bedrock profiles.',
      'This data directly governs whether an economical raft slab or deep friction piles are required, ensuring structural safety while preventing foundation over-engineering.'
    ],
    tags: ['Geotech', 'Soil Mechanics', 'Piling Foundations']
  }
];

/* ==========================================================================
   FREQUENTLY ASKED QUESTIONS
   ========================================================================== */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Approvals & RERA',
    question: 'Are all Royal Builders projects fully sanctioned by RERA and local planning bodies?',
    answer: 'Yes. Every project undertaken by Royal Builders and Developers possesses an active State RERA registration number, local planning authority sanctions (CMDA / DTCP), environmental clearances, and Fire Department NOCs before ground is broken. We publish all sanction orders and escrow bank account details in full transparency.'
  },
  {
    id: 'faq-02',
    category: 'Warranty & Aftercare',
    question: 'What does your 60-Month Structural Warranty cover in writing?',
    answer: 'Our 5-year (60-month) structural warranty covers all load-bearing structural elements including foundations, columns, beams, shear walls, and post-tensioned slabs against deflection, cracking, or settlement defects. We also provide a dedicated 12-month defect liability guarantee for MEP services, waterproofing, and architectural joinery.'
  },
  {
    id: 'faq-03',
    category: 'Materials & Quality',
    question: 'Can clients inspect the material test certificates and batch logs during construction?',
    answer: 'Absolutely. We maintain a digital client portal where mill test certificates for steel, 7-day and 28-day concrete cube compressive strength reports, waterproofing flood-test video recordings, and plumbing pressure gauge sign-offs are uploaded in real time. Clients may also visit our on-site QA laboratory anytime.'
  },
  {
    id: 'faq-04',
    category: 'Timelines & Progress',
    question: 'How do you guarantee on-time project completion without structural shortcuts?',
    answer: 'We utilize advanced Primavera P6 milestone scheduling and modular aluminium formwork systems that establish disciplined 7-day floor cycles. By ordering brand-locked materials months in advance and maintaining dual vendor contracts, we eliminate supply-chain bottlenecks and maintain a 96% on-time delivery record across 20+ years.'
  },
  {
    id: 'faq-05',
    category: 'Pricing & Payment',
    question: 'What is your construction cost structure per square foot?',
    answer: 'Our bespoke construction packages range from ₹2,650/sq.ft for Structural Essential packages to ₹3,850/sq.ft for Executive Luxury and ₹5,500+/sq.ft for Royal Bespoke architectural villas. Every estimate is itemized with brand locks and zero hidden escalation clauses. Use our interactive Quotation Calculator for instant custom estimates.'
  },
  {
    id: 'faq-06',
    category: 'Materials & Quality',
    question: 'What concrete and steel grades are standard in your construction?',
    answer: 'We use exclusively Fe 550D high-ductility TMT rebar from Tata Tiscon or ARS Steel, and high-strength OPC 53 Grade / Ready Mix Concrete from UltraTech or ACC (grades M25, M30, M35, and M40 depending on the structural calculation). We never use secondary re-rolled steel or uncertified sand.'
  }
];

/* ==========================================================================
   COMPANY LEADERSHIP & MILESTONES
   ========================================================================== */
export const LEADERSHIP_TEAM = [
  {
    name: 'Trichy Mohamed Waheedullah',
    role: 'Founder & Managing Director',
    qualification: 'B.Com',
    experience: '30+ Years Experience in this field',
    bio: 'Over 30 years of seasoned entrepreneurial leadership in the construction and real estate sector. Steers land acquisition, regulatory compliance, client trust, and long-term generational value.'
  },
  {
    name: 'Trichy Mohamed Abdul Ahad',
    role: 'Co-Founder & Chief Civil Engineer',
    qualification: 'B.E Civil Engineering',
    experience: 'Completed multi Storey Projects',
    bio: 'Directs civil engineering design and monolithic multi-storey execution across commercial and luxury residential developments with zero-compromise structural standards.'
  },
  {
    name: 'Trichy Mohamed Abdul Samad',
    role: 'Architect & 3D Planner',
    qualification: 'B.Arch',
    experience: 'Skilled in Planning & 3D Design',
    bio: 'Specialized in architectural master-planning, high-precision spatial layouts, photorealistic 3D visualization, and structural aesthetics across residential and commercial landmarks.'
  }
];

export const COMPANY_MILESTONES = [
  { year: '2003', title: 'Company Inception', description: 'Founded with a core focus on high-precision civil engineering contracting and structural integrity.' },
  { year: '2012', title: '50th Villa Delivered', description: 'Completed signature boutique coastal estates along East Coast Road (ECR), setting new benchmarks for anti-saline durability.' },
  { year: '2016', title: 'Aluminium Formwork Adoption', description: 'Invested in Mivan modular formwork, cutting high-rise floor cycles to 7 days with zero plastering defects.' },
  { year: '2020', title: 'ISO 9001 / 14001 / 45001 Certification', description: 'Achieved triple ISO certification and crossed 30 million safe man-hours without lost-time incidents.' },
  { year: '2023', title: 'LEED Platinum Commercial Delivery', description: 'Broke ground on 850,000 sq.ft Apex One Tech Park, introducing BIM Level-3 coordination.' },
  { year: '2026', title: '60+ Projects & Smart Township Launch', description: 'Over 3.8 million square feet delivered across South India and commencement of the 38-acre Royal Palm Township.' }
];

/* ==========================================================================
   INTERIOR ARCHITECTURE & BESPOKE FIT-OUTS
   ========================================================================== */
export const INTERIORS_DATA: InteriorItem[] = [
  {
    id: 'int-01',
    title: 'Grand Living Hall & Architectural Accent Lighting',
    category: 'Living & Salons',
    image: '/projects/Interior Projects/IMG20260606214111.jpg',
    scope: 'Turnkey Living Salon & Entertainment Zone',
    materials: ['Italian Statuario Marble', 'Fluted Teak Paneling', 'Concealed LED Coves', 'Acoustic Wall Cladding'],
    dimensions: '650 Sq. Ft. Double-Height Living',
    highlight: 'Integrated warm ambient illumination with magnetic track architectural spotlighting.'
  },
  {
    id: 'int-02',
    title: 'Modular Kitchen',
    category: 'Modular Kitchens',
    image: '/projects/Interior Projects/IMG-20220224-WA0031.jpg',
    scope: 'Bespoke German Hardware Modular Kitchen Fit-Out',
    materials: ['Natural Oak Veneer', 'Anti-Scratch Acrylic Shutters', 'Blum Servo-Drive Drawers', 'Quartz Countertops'],
    dimensions: '420 Sq. Ft. Luxury Kitchen',
    highlight: 'Ergonomic modular cabinetry with seamless soft-close German hardware and concealed lighting.'
  },
  {
    id: 'int-03',
    title: 'Walk-In Wardrobe & Vanity Precision Joinery',
    category: 'Master Suites',
    image: '/projects/Interior Projects/IMG-20220224-WA0037.jpg',
    scope: 'Custom Modular Wardrobe & Dressing Studio',
    materials: ['Tinted Fluted Glass', 'Anodized Charcoal Aluminium', 'Sensor Wardrobe Lighting', 'Soft-Close German Hinges'],
    dimensions: '180 Sq. Ft. Dressing Suite',
    highlight: 'Full-height walk-in wardrobe with automated interior drawer lighting and jewelry organizers.'
  },
  {
    id: 'int-07',
    title: 'Bedroom Sets',
    category: 'Master Suites',
    image: '/projects/Interior Projects/IMG-20230529-WA0007.jpg',
    scope: 'Complete Master Suite Bedroom Set Architecture',
    materials: ['Engineered Teak Wood', 'Plush Upholstered Headboard', 'Integrated Bedside Consoles', 'Concealed Sconces'],
    dimensions: '380 Sq. Ft. Luxury Bedroom Set',
    highlight: 'Custom tailored monolithic bed frame with floating nightstands and integrated climate controls.'
  },
  {
    id: 'int-08',
    title: 'Executive Study & Library Joinery',
    category: 'Commercial & Office',
    image: '/projects/Interior Projects/IMG-20240113-WA0001.jpg',
    scope: 'Home Office & Executive Suite',
    materials: ['Smoked Walnut Veneer', 'Tempered Glass Shelving', 'Leather Finish Desk', 'Acoustic Door Seals'],
    dimensions: '260 Sq. Ft. Private Study',
    highlight: 'Custom floor-to-ceiling book gallery with integrated cable management and display warmth.'
  },
  {
    id: 'int-09',
    title: 'Minimalist Suite with Concealed Storage Walls',
    category: 'Master Suites',
    image: '/projects/Interior Projects/IMG-20240113-WA0002.jpg',
    scope: 'Guest Suite Fit-Out',
    materials: ['Matte Polyurethane Finish', 'Touch-Latch Hidden Panels', 'Laminate Flooring', 'Linear AC Diffusers'],
    dimensions: '340 Sq. Ft. Minimalist Bedroom',
    highlight: 'Flush-to-wall seamless cabinetry providing expansive storage without visual clutter.'
  },
  {
    id: 'int-10',
    title: 'False Ceiling Multi-Tier Indirect LED Cove System',
    category: 'Ceilings & Lighting',
    image: '/projects/Interior Projects/IMG-20240113-WA0003.jpg',
    scope: 'Architectural Ceiling Engineering',
    materials: ['Saint-Gobain Gyproc Moisture-Shield Board', 'Galvanized GI Framing', 'Philips 3000K Warm LED Strip', 'Slim Downlights'],
    dimensions: 'Full Floor Ceiling Layout',
    highlight: 'Shadowline perimeter reveal preventing ceiling hairline cracks with glare-free indirect glow.'
  },
  {
    id: 'int-11',
    title: 'Custom Fluted Timber Partition & Entry Foyer',
    category: 'Living & Salons',
    image: '/projects/Interior Projects/IMG-20240113-WA0004.jpg',
    scope: 'Entrance Foyer Separation Screen',
    materials: ['Solid Burma Teak Rafters', 'Brushed Champagne Gold Posts', 'Shoe Console with Marble Top'],
    dimensions: '12 ft Wide Foyer Divider',
    highlight: 'Maintains open spatial light transmission while creating discrete privacy between foyer and salon.'
  },
  {
    id: 'int-12',
    title: 'Contemporary Kitchen Island & Overhead Glass Racks',
    category: 'Modular Kitchens',
    image: '/projects/Interior Projects/IMG-20241011-WA0107.jpg',
    scope: 'Open Concept Kitchen & Bar Island',
    materials: ['Calacatta Gold Quartz', 'Textured Slate Gray Laminates', 'Ceiling Suspended Stemware Rack'],
    dimensions: '10 ft Island Counter',
    highlight: 'Under-counter concealed LED strip providing floating perimeter illumination.'
  },
  {
    id: 'int-13',
    title: 'Luxury Ensuite Bathroom Vanity & Backlit Mirror Inlay',
    category: 'Master Suites',
    image: '/projects/Interior Projects/IMG-20241011-WA0108.jpg',
    scope: 'High-End Master Bath Architecture',
    materials: ['Imported Grey Marble Counter', 'Solid Teak Marine-Grade Vanity', 'Defogger Smart LED Mirror', 'Kohler Black Fixtures'],
    dimensions: '140 Sq. Ft. Spa Ensuite',
    highlight: 'Marine-grade waterproof cabinetry with seamless undermount basin and brass shadow trims.'
  },
  {
    id: 'int-14',
    title: 'Ambient Bedroom Atmosphere with Wall Paneling',
    category: 'Master Suites',
    image: '/projects/Interior Projects/IMG-20241011-WA0109.jpg',
    scope: 'Luxury Bedroom Architecture',
    materials: ['Fabric Wrapped Acoustic Tiles', 'Warm Walnut Battens', 'Custom Nightstand Joinery'],
    dimensions: '380 Sq. Ft. Suite',
    highlight: 'Integrated master bedside automation controls for curtains, lighting scenes, and climate.'
  },
  {
    id: 'int-15',
    title: 'Fall Ceiling or Pop Work',
    category: 'Ceilings & Lighting',
    image: '/projects/Interior Projects/IMG-20260708-WA0010.jpg',
    scope: 'Precision Plaster of Paris (POP) & Gypsum False Ceiling',
    materials: ['High-Strength POP Plaster', 'Moisture Resistant Gypsum Boards', 'Concealed Channel Grid', 'Architectural Coves'],
    dimensions: 'Full Hall False Ceiling',
    highlight: 'Seamless level POP finish with hidden LED illumination profiles and zero-deflection framing.'
  },
  {
    id: 'int-16',
    title: 'Double-Height Architectural Chandelier Atrium',
    category: 'Ceilings & Lighting',
    image: '/projects/Interior Projects/IMG-20260708-WA0011.jpg',
    scope: 'Vertical Stairwell & Atrium Illumination',
    materials: ['Cascading Glass Baubles', 'Polished Chrome Canopy', 'Motorized Chandelier Lift'],
    dimensions: '24 ft Vertical Height',
    highlight: 'Custom cascading chandelier with remote-controlled motorized lowering gear for maintenance.'
  },
  {
    id: 'int-17',
    title: 'High Rise Ceiling Work in Cera Board',
    category: 'Ceilings & Lighting',
    image: '/projects/Interior Projects/IMG-20260708-WA0013.jpg',
    scope: 'High-Rise Fire & Moisture-Proof Cera Board Ceiling',
    materials: ['High-Density Cera Board', 'Corrosion-Proof Heavy Gauge Furring', 'Thermal Acoustic Dampeners'],
    dimensions: 'High-Rise Ceiling Plate',
    highlight: 'Engineered Cera board installation providing extreme fire resistance, zero sag, and crisp geometric lines.'
  },
  {
    id: 'int-18',
    title: 'Modern Dining Space with Fluted Timber Accents',
    category: 'Living & Salons',
    image: '/projects/Interior Projects/IMG-20260708-WA0015.jpg',
    scope: 'Family Dining & Handover Area',
    materials: ['Smoked Ash Wood', 'Vitrified Large Format Tile', 'Dimmable Ring Pendant', 'Concealed Bar'],
    dimensions: '360 Sq. Ft. Dining Zone',
    highlight: 'Fluted wood detailing that conceals a private wine cellar and glassware display.'
  },
  {
    id: 'int-19',
    title: 'Office Conference Hall',
    category: 'Commercial & Office',
    image: '/projects/Interior Projects/IMG-20260918-WA0000.jpg',
    scope: 'Corporate Conference Hall & Executive Boardroom Fit-Out',
    materials: ['Acoustic Micro-Perforated Wood Panels', 'Modular Conference Table with Cable Wells', 'Smart Screen Integration', 'Ergonomic Mesh Seating'],
    dimensions: '520 Sq. Ft. Conference Hall',
    highlight: 'State-of-the-art boardroom acoustics with integrated presentation connectivity and uniform ambient lighting.'
  }
];
