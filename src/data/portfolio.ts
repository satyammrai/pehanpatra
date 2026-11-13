import medicalLlmImg from '../assets/images/project_medical_llm_eval_1794583340672.jpg';
import pdfCleanImg from '../assets/images/project_pdf_clean_app_1794583340348.jpg';
import fgmAnnImg from '../assets/images/project_fgm_ann_model_1794583341257.jpg';
import cattleBreedImg from '../assets/images/project_cattle_breed_app_1794583342789.jpg';
import clientWebsitesImg from '../assets/images/project_client_websites_1794583342084.jpg';

export type ProjectCategory = 'All' | 'ML & AI' | 'Full-Stack Apps' | 'Websites';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  client: string;
  role: string;
  recognition?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  deliverables: string[];
  liveUrl: string;
  liveLabel: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  recognition?: string;
  summary: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const PROFILE = {
  name: 'Satyam Rai',
  fullName: 'Satyam Rai',
  title: 'Machine Learning & Full-Stack Engineer',
  location: 'Gurugram, India',
  email: 'satya.dcee@gmail.com',
  linkedin: 'https://www.linkedin.com/in/satyam-raii/',
  github: 'https://github.com/satyammrai',
  resumePdfUrl: './assets/aistudio/resume__29___2__b0abe18c.pdf',
  availability: 'Open to Internships & Select Projects',
  heroHeadline: 'Building practical ML systems and fast, reliable web products.',
  heroLead:
    'I build, evaluate, and deploy machine learning pipelines alongside clean full-stack web applications—shipping tested, working software rather than notebooks.',
  recognitionNote:
    'Received a Letter of Recommendation from BITS Pilani (Dept. of CSIS) and Research Certificate at IIITDM Kurnool.',
  heroImage: './assets/aistudio/1788631276634_e8ae2864.jpg',
  heroImageAlt: 'Portrait of Satyam Rai against a warm studio backdrop',
  stats: [
    { value: '12+', label: 'Production Websites Built' },
    { value: '2', label: 'Full-Stack Apps Shipped' },
    { value: 'BITS Pilani', label: 'Letter of Recommendation' },
    { value: 'Up to 80%', label: 'Faster Time-to-Interactive' },
  ],
  education: {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Dronacharya College of Engineering (Gurugram University)',
    period: '2024 – 2028',
    location: 'Gurugram, India',
    cgpa: '7.6 / 10.0',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/satyammrai' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/satyam-raii/' },
    { label: 'Email', href: 'mailto:satya.dcee@gmail.com' },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'medical-llm-evaluation',
    title: 'Medical LLM Robustness Evaluator',
    subtitle: 'Full-stack benchmarking dashboard for clinical language models',
    category: 'ML & AI',
    year: '2026',
    client: 'BITS Pilani · Dept. of CSIS',
    role: 'Research & SDE Intern',
    recognition: 'Received Letter of Recommendation (LOR)',
    image: medicalLlmImg,
    imageAlt: 'Desktop monitor displaying the clinical LLM robustness evaluation dashboard and accuracy charts',
    featured: true,
    summary:
      'Built and shipped an end-to-end evaluation platform to stress-test clinical LLM outputs against structured medical benchmarks—earning a formal Letter of Recommendation from BITS Pilani faculty.',
    challenge:
      'Researchers previously ran fragmented scripts and manually compared spreadsheet outputs to test clinical LLM edge cases, delaying failure analysis across large prompt suites.',
    approach:
      'Designed and integrated the complete full-stack dashboard solo: test-case management, live LLM API runners, multi-category accuracy visualizations, and automated result aggregation.',
    outcome:
      'Replaced manual aggregation with a repeatable benchmark pipeline, cut researcher turnaround time, surfaced key model failure modes, and received a Letter of Recommendation from Prof. Neha Vinayak & Prof. Rani.',
    deliverables: [
      'Full-Stack Evaluation UI',
      'LLM API Test Pipeline',
      'Failure Mode Analytics',
      'Letter of Recommendation (BITS Pilani)',
    ],
    liveUrl: 'https://github.com/satyammrai',
    liveLabel: 'View GitHub',
  },
  {
    id: 'pdf-clean',
    title: 'PDF Clean — Print & Layout Optimizer',
    subtitle: '100% browser-based document imposition and study PDF cleaner',
    category: 'Full-Stack Apps',
    year: '2025',
    client: 'Live Web Product',
    role: 'Creator & Full-Stack Engineer',
    recognition: 'Live at pdfcleann.netlify.app',
    image: pdfCleanImg,
    imageAlt: 'Laptop showing a 4-up PDF document layout optimizer alongside printed study notes',
    summary:
      'A fast, privacy-first web app built with React, TypeScript, pdf-lib, and Canvas API that converts multi-page study and coaching PDFs into crisp, print-ready multi-up sheets—100% client-side with zero uploads.',
    challenge:
      'Students and educators printing dense lecture notes wasted paper and ink because standard converters compressed text, broke margins, or required uploading private files to slow servers.',
    approach:
      'Engineered a single-source-of-truth layout engine supporting 1/2/4/6/8-up and custom grids, smart auto-crop, non-destructive manual crop, auto-centering, and vector-preserving PDF export with pre-flight checks.',
    outcome:
      'Live in production at pdfcleann.netlify.app—delivering crisp vector prints in seconds with total device privacy and zero server latency.',
    deliverables: [
      'React & TypeScript Engine',
      '1/2/4/6/8-Up Grid Imposition',
      'Smart Auto-Crop & Margins',
      'Vector-Preserving Export',
    ],
    liveUrl: 'https://pdfcleann.netlify.app/',
    liveLabel: 'Open Live App',
  },
  {
    id: 'fgm-surrogate-predictor',
    title: 'FGM Structural Frequency Predictor (ANN)',
    subtitle: 'Feed-forward neural network surrogate deployed for real-time engineering inference',
    category: 'ML & AI',
    year: '2026',
    client: 'IIITDM Kurnool · ARCHIMEDES Lab',
    role: 'Research Intern',
    recognition: 'Research Certificate Awarded',
    image: fgmAnnImg,
    imageAlt: 'Workstation and tablet displaying a layered composite plate simulation and neural network prediction curve',
    summary:
      'Built an Artificial Neural Network (9 → 16 → 32 → 16 → 1) surrogate model predicting non-dimensional frequencies of Functionally Graded Material plates—deployed live with FastAPI and React.',
    challenge:
      'Traditional finite-element and numerical simulations for structural material plates required heavy compute time whenever engineers adjusted input parameters.',
    approach:
      'Owned the entire ML workflow end-to-end: synthetic dataset generation, feature scaling across six physical parameters, ANN training & validation, and deployment via a FastAPI inference API + React/Tailwind UI.',
    outcome:
      'Achieved R² = 0.977 and RMSE = 0.0201 on held-out test data, giving researchers instant browser-based predictions in milliseconds.',
    deliverables: [
      'Feed-Forward ANN Architecture',
      'FastAPI Inference Backend',
      'React & Tailwind Predictor UI',
      'Held-Out Validation (R² 0.977)',
    ],
    liveUrl: 'https://github.com/satyammrai',
    liveLabel: 'View GitHub',
  },
  {
    id: 'cattle-breed-vision-app',
    title: 'Cattle Breed ID Application',
    subtitle: 'Field-ready computer vision app classifying 200+ breeds in real time',
    category: 'Full-Stack Apps',
    year: '2025',
    client: 'Applied Computer Vision App',
    role: 'Front-End & UI Engineer',
    image: cattleBreedImg,
    imageAlt: 'Smartphone held outdoors on a green pasture displaying the cattle breed identification app',
    summary:
      'Built the responsive React front-end for a real-time cattle breed identification app spanning 200+ breeds, powered by a FastAPI computer vision pipeline.',
    challenge:
      'Agricultural field workers needed an accurate mobile interface they could operate quickly outdoors without reading dense instructions or complex menus.',
    approach:
      'Crafted an accessible, low-literacy-friendly UI featuring large tap targets, icon-first navigation, instant camera capture, and clear confidence readouts.',
    outcome:
      'Achieved 80% accuracy in live field testing across 200+ breeds while staying immediately usable for first-time mobile users.',
    deliverables: [
      'Icon-First Mobile Interface',
      'React & FastAPI Integration',
      'Real-Time Camera Flow',
      '200+ Breed Classification UI',
    ],
    liveUrl: 'https://github.com/satyammrai',
    liveLabel: 'View GitHub',
  },
  {
    id: 'client-web-platforms',
    title: '12+ Production Client Websites',
    subtitle: 'High-speed agency, SaaS, and business websites engineered for conversion',
    category: 'Websites',
    year: '2025 – 2026',
    client: 'Asccentify Studio & Freelance',
    role: 'Full-Stack Web Developer',
    image: clientWebsitesImg,
    imageAlt: 'Laptop and tablet on a stone desk showcasing modern responsive web designs',
    summary:
      'Designed, developed, and launched 12+ responsive production websites for startups and studio clients using Next.js, React, TypeScript, Tailwind CSS, GSAP, and Framer Motion.',
    challenge:
      'Client websites frequently suffered from heavy unoptimized media, slow mobile Time-to-Interactive, and rigid templates that hurt user engagement.',
    approach:
      'Applied strict code-splitting, modern asset compression, clean responsive grid architecture, and smooth GSAP/Framer Motion choreography backed by Git-reviewed Agile sprints.',
    outcome:
      'Improved Time-to-Interactive by up to 80% across delivered sites, boosting engagement and Core Web Vitals on every launch.',
    deliverables: [
      'Next.js & TypeScript Builds',
      'GSAP & Framer Motion UI',
      'Core Web Vitals Optimization',
      '12+ Live Deployments',
    ],
    liveUrl: 'https://github.com/satyammrai',
    liveLabel: 'View GitHub',
  },
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01.',
    title: 'Shipped Systems Over Notebooks',
    description:
      'Models only create value when people can use them. I pair Python ML & ANN pipelines with FastAPI backends and clean React interfaces so ideas run reliably in production.',
  },
  {
    number: '02.',
    title: 'Speed & Technical Discipline',
    description:
      'Across 12+ production websites and 2 full-stack apps, I prioritize lean bundles, code-splitting, and accessible markup—cutting Time-to-Interactive by up to 80%.',
  },
  {
    number: '03.',
    title: 'Clear, Human-Centered UI',
    description:
      'Whether building a clinical LLM evaluation dashboard at BITS Pilani or a browser PDF optimizer, every layout stays simple, fast, and effortless to use.',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: 'Jun 2026 – Aug 2026',
    role: 'Research Intern · Dept. of Mechanical Engineering',
    company: 'IIITDM Kurnool (ARCHIMEDES Lab)',
    location: 'Kurnool',
    recognition: 'Research Certificate Awarded',
    summary:
      'Built and deployed a feed-forward ANN surrogate model (R² = 0.977, RMSE = 0.0201) with a FastAPI inference backend and React/Tailwind prediction interface.',
  },
  {
    period: 'Jun 2026 – Jul 2026',
    role: 'Research & SDE Intern · Dept. of CSIS',
    company: 'BITS Pilani',
    location: 'Pilani',
    recognition: 'Received Letter of Recommendation (LOR)',
    summary:
      'Built the medical LLM robustness evaluation web platform end-to-end, integrated clinical LLM benchmarks, led failure analysis, and received a Letter of Recommendation from Prof. Neha Vinayak & Prof. Rani.',
  },
  {
    period: 'Dec 2025 – Feb 2026',
    role: 'Junior Web Developer',
    company: 'Asccentify Studio',
    location: 'Gurugram, India',
    summary:
      'Built client-facing web applications in Next.js and TypeScript with GSAP animations, shipping features through Agile sprints and Git-based peer review.',
  },
  {
    period: 'Jul 2025 – Nov 2025',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent Consulting',
    location: 'Remote',
    summary:
      'Delivered 12+ production client websites and 2 full-stack web apps, cutting Time-to-Interactive by up to 80% through code-splitting and asset optimization.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'C', 'TypeScript', 'JavaScript (ES6+)', 'SQL'],
  },
  {
    category: 'ML & LLM',
    items: [
      'ANN (Artificial Neural Networks)',
      'LLM Evaluation & Robustness',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'LLM API Integration',
    ],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    category: 'Backend & Tools',
    items: ['FastAPI', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'Git/GitHub', 'Vercel'],
  },
];
