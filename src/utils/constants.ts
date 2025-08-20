import { NavigationItem, ServiceSection, ProjectData, ServiceData, AboutData } from '@/types';

export const WEBSITE_TITLE = 'Trigub Tech';
export const WEBSITE_SUBTITLE = 'AI & Software Solutions';

// FONT CONFIGURATION - Configure fonts for different text types
export const FONT_CONFIG = {
  // Main titles and headings (like "I Turn Your Ideas into Bots")
  TITLE_FONT: 'font-vcr-osd',     // Options: font-medodica, font-ithaca, font-vcr-osd
  
  // Body text and descriptions
  BODY_FONT: 'font-medodica',       // Options: font-vcr-osd, font-medodica, font-ithaca
  
  // Accent text and special elements  
  ACCENT_FONT: 'font-ithaca',      // Options: font-ithaca, font-medodica, font-vcr-osd
};

// Available font classes and descriptions
export const FONT_OPTIONS = {
  'font-vcr-osd': { name: 'VCR OSD Mono', style: 'monospace', description: 'Retro tech/gaming font' },
  'font-medodica': { name: 'Medodica', style: 'sans-serif', description: 'Modern clean font' },
  'font-ithaca': { name: 'Ithaca', style: 'serif', description: 'Classical elegant font' },
};

// Legacy - kept for backward compatibility
export const CURRENT_FONT = 'Medodica';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Services', href: '/services', icon: 'briefcase' },
  { label: 'Projects', href: '/projects', icon: 'folder' },
  { label: 'About Me', href: '/about', icon: 'user' },
  { label: 'Contact', href: '/contact', icon: 'mail' },
];

export const PERSONAL_INFO = {
  name: 'Filipp Trigub',
  email: 'filipp@trigub.tech',
  linkedin: 'https://www.linkedin.com/in/filipp-trigub/',
  calendly: 'https://my.meetergo.com/filipp-trigub/get-to-know-meeting',
  address: 'Berlin, Germany',
};

export const INTRO_STATEMENTS = [
  "From strategy to architecture and implementation - My goal is to get you results!",
  "More than a software developer, I am your personal consultant with M.Sc. in theoretical physics and 9+ years full-stack experience",
  "My word counts! Decades long engagements in my communities are the proof."
];

export const PROFESSIONAL_CREDENTIALS = [
  "M.Sc. in theoretical physics",
  "9+ years experience as a full-stack dev",
  "Hands on experience with LLM development"
];

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    title: "Make it Clear",
    icon: "lightbulb",
    color: "#F2C94C", // secondary (gold)
    statements: [
      "I consult you on what LLM's can do for you",
      "Together we create the architecture fitting your use case",
      "The initial consultation is always free so just reach out!"
    ]
  },
  {
    title: "Make it Fit", 
    icon: "settings",
    color: "#8D1B3D", // primary (burgundy)
    statements: [
      "Choose the right LLM for your use case based on costs and performance",
      "Give your bot the ability to do tasks outside of the chat",
      "Your use case is unique and so is the solution!"
    ]
  },
  {
    title: "Make the Bots Work",
    icon: "cpu",
    color: "#A9A9A9", // accent (grey)
    statements: [
      "Together we will create a holistic solution for your system and needs",
      "I'll write you clean code that you can use, extend, and modify with little effort",
      "The task is only done, when you are reaping its benefits"
    ]
  }
];

export const SERVICES_DATA: ServiceData[] = [
  {
    title: "Optimized Retrieval-Augmented Generation (RAG) System",
    imagePath: "/images/services_RAG.jpg",
    shortDescription: "Unlock the power of your in-house data with a custom-built RAG system that delivers precise, cost-effective results.",
    content: `Retrieval-Augmented Generation is a powerful and flexible approach for the deployment of LLM systems. It allows precise results based on your in-house data at low cost and quick development. Behind the simplicity of the RAG system lies a sophisticated architecture that can be tailored to your specific needs.`,
    keyBenefits: [
      "Leverage your own data for accurate, context-aware AI responses.",
      "Optimize performance and cost-effectiveness with a tailored architecture.",
      "Get expert guidance on choosing the right embeddings, vector databases, and chunking strategies."
    ],
    keyTech: ["RAG", "LLM", "Vector DB", "Embeddings"]
  },
  {
    title: "LLM System Evaluation",
    imagePath: "/images/services_evaluation.jpg",
    shortDescription: "Ensure your LLM system is performing at its best with a comprehensive evaluation framework.",
    content: `Evaluating and deploying LLM systems can be a daunting task. Originally human evaluators are used to assess the quality of the LLM system. However, this is time-consuming and expensive.`,
    keyBenefits: [
      "Objectively measure the quality and performance of your LLM system.",
      "Optimize system components for cost-effectiveness.",
      "Incorporate user feedback to continuously improve your system."
    ],
    keyTech: ["Ragas", "AutoRAG", "LLM-based evaluation"]
  },
  {
    title: "Security and Privacy",
    imagePath: "/images/services_security.jpg",
    shortDescription: "Protect your sensitive data and prevent prompt injection attacks with a robust security strategy.",
    content: `Prompt injection is probably the most common security issue in LLM systems. It is a form of attack where the attacker coerces the system to give up private data the LLM has been given. Solutions to this novel concern are still developing, but rule-engines, LLM guard systems or prompt engineering can provide some relief.`,
    keyBenefits: [
      "Assess the sensitivity of your data and implement the right level of protection.",
      "Balance security with performance to create a system that is both safe and efficient.",
      "Stay ahead of emerging security threats with expert guidance."
    ],
    keyTech: ["Prompt Injection", "LLM Guard", "Rule Engines"]
  },
  {
    title: "Integration and Deployment",
    imagePath: "/images/services_deployment.jpg",
    shortDescription: "Seamlessly integrate your LLM system into your existing infrastructure and deploy it with confidence.",
    content: `Even a well-designed LLM system is useless if it is not integrated into your existing infrastructure. You want it to be connected to your databases, your UI and your CI/CD pipeline. Tools for Integration are plentiful, but their adoption for LLM systems is still in progress.`,
    keyBenefits: [
      "Connect your LLM system to your databases and UI for a seamless user experience.",
      "Ensure consistent up-time and reliability with a robust deployment strategy.",
      "Get a holistic solution that is tailored to your specific needs and infrastructure."
    ],
    keyTech: ["CI/CD", "Docker", "Vercel", "Azure"]
  }
];

export const PROJECTS_DATA: ProjectData[] = [
  {
    title: "Multi-chain LLM copilot for academic teaching and studying",
    client: "Universities",
    duration: "6 month (10.2023-03.2024)",
    shortDescription: "A sophisticated AI copilot to augment the students’ learning experience and provide AI-derived insights to professors.",
    goal: "Build a sophisticated AI copilot to augment the students’ learning experience and provide AI-derived insights to professors.",
    solution: "Build a multi-chain LLM system adapting to user needs at its own accord with a Weaviate vector DB based RAG system and evaluated it. Build responsive react frontend, and backend systems handling auth, data management and auxiliary services as a RESTful API. Deployed and managed the app to the cloud in a production environment including the CICD via multi-stage deployment.",
    imagePath: "/images/success2.jpg",
    keyTechnologies: ["React", "Python", "Weaviate", "RESTful API", "Docker", "CI/CD"],
    isImageOnRight: true
  },
  {
    title: "GPT-powered service staff assistant",
    client: "International hosting services provider",
    duration: "2 month (04.2023-06.2023)",
    shortDescription: "A GPT-powered chatbot using internal documents to support service staff and interact with customers directly.",
    goal: "Provide a GPT-powered chatbot using internal documents to support service staff and interact with customers directly.",
    solution: "Led the design and development of a lightweight GPT-powered chatbot for service-staff support for an international client. Contributed significantly to the initial design, technology selection, and architecture. Implemented a haystack pipeline with OpenAI embeddings to optimize GPT usage and integrated CI/CD and DevOps for rapid, collaborative development. Spearheaded technical development and introduced agile development practices, setting guidelines and conventions for the team.",
    imagePath: "/images/arrows.jpg",
    keyTechnologies: ["GPT", "Haystack", "OpenAI Embeddings", "CI/CD", "DevOps"],
    isImageOnRight: true
  },
  {
    title: "Full-stack application design and development",
    client: "International central bank",
    duration: "24 month (01.2021-12.2022)",
    shortDescription: "A holistic application for statistical data analysis, designed and developed to support users on-demand.",
    goal: "Design and develop an application for statistical data analysis holistically and support users on-demand.",
    solution: "Designed and developed architectural extensions based on client demands and limitations. Successfully implemented over 500 stories in a 300k+ LoC codebase, which included a dockerized Python backend hosted in AWS with PostgreSQL and Oracle DB, as well as a dockerized JS frontend, both delivered via CI/CD. Ensured continuous stability through extensive unit and end-to-end testing. Served as Scrum Master for a team of 7 developers for over a year.",
    imagePath: "/images/computer2.jpg",
    keyTechnologies: ["Python", "JavaScript", "Docker", "AWS", "PostgreSQL", "Oracle DB", "CI/CD"],
    isImageOnRight: true
  },
  {
    title: "Complex legacy software augmentation",
    client: "Major German bank", 
    duration: "2 month (02-03.2023)",
    shortDescription: "Augmenting an existing legacy Python codebase to deliver previously unforeseen functionality.",
    goal: "Augment an existing legacy Python codebase to deliver previously unforeseen functionality.",
    solution: "Restructured the existing testing framework to assert the existing functionality using Python pytest and end-to-end testing. Analyzed the complex data processing pipelines and the theoretical proposal to accommodate additional extra-dimensional inputs. Delivered the additional functionality and additional tests.",
    imagePath: "/images/confluence1.jpg",
    keyTechnologies: ["Python", "Pytest", "End-to-end testing"],
    isImageOnRight: true
  }
];

export const POC_PROJECTS = [
  {
    title: "AI Sommelier",
    duration: "1 month (06.2023)",
    shortDescription: "A sales bot for a wine store with consistent identification and memorization of customer preferences.",
    goal: "Build a sales bot for a wine store with consistent identification and memorization of customer preferences to provide the customer with a sommelier-like experience.",
    solution: "Build an LLM agent with a recommendation tool based on a general haystack agent pattern design with a Streamlit UI. Implemented a specified meta-prompt to correctly and consistently identify customer preferences and remember them. Extracted these preferences programmatically to force usage of tool after a set number of preferences has been identified. Dockerized and deployed to Azure with Terraform.",
    imagePath: "/images/cartoon_bot.jpg",
    keyTechnologies: ["LLM Agent", "Haystack", "Streamlit", "Azure", "Terraform"]
  },
  {
    title: "Audio-Summarizer",
    duration: "1 month (02-03.2023)",
    shortDescription: "Summarize audio recordings, specifically books, into concise bullet-point style summaries.",
    goal: "Summarize audio recordings, specifically books, into concise bullet-point style summaries.",
    solution: "Engineered a meta-prompt and summarization loop subdividing the recording in user designated parts (chapters) and then token-limit enforced chunks to extract a sensible and concise summary for each part as well as the entire recoding. Build a Flutter based UI allowing users to summarize their recordings and receive the summary by mail. Dockerized and deployed to Vercel and Azure with Terraform and CI/CD.",
    imagePath: "/images/sound.jpg",
    keyTechnologies: ["Flutter", "Vercel", "Azure", "Terraform", "CI/CD"]
  },
  {
    title: "Telegram Search&Chat",
    duration: "1 month (03-04.2023)",
    shortDescription: "Make Telegram searchable and allow the automated exploration of a multitude of telegram channels.",
    goal: "Make Telegram searchable. Allow the automated exploration of a multitude of telegram channels via a GPT-bot fed by vectorized documents found by a search mechanism.",
    solution: "Retrieved chat contents from Telegram with Telethon and loaded these to a FAISS DB with OpenAI embeddings hosted in a FastAPI backend. Implemented question-answer pipeline with Haystack, using Dense Passage Retrieval and OpenAI generation. Provided a light-weight UI with user authentication to Telegram and subsequent chat window. Deployed the bot to Azure with Docker.",
    imagePath: "/images/confluence2.jpg",
    keyTechnologies: ["Telegram", "Telethon", "FAISS", "OpenAI", "FastAPI", "Haystack", "Docker", "Azure"]
  }
];

export const ABOUT_DATA: AboutData[] = [
  {
    title: "Humboldt University of Berlin",
    imagePath: "/images/Huberlin-logo.jpg",
    shortDescription: "M.Sc. in theoretical Physics with a focus on stochastic processes and data analysis.",
    content: `M.Sc. in theoretical Physics GPA 3.6 (GER scale 1.4)
Humboldt university of Berlin 10.2013 – 03.2019

Thesis:
— "Markovian and Non-Markovian Dissipation Mechanisms in Nonequilibrium Dispersion Forces."
— Modelled stochastic processes with memory effects mathematically. Validated the model numerically using an implementation in C.

Relevant coursework
— Statistical Data Analysis: Mathematical foundation and practical application of data processing and machine learning on real world data in python notebooks.
— Statistical Mechanics: Theoretical Statistics at an advanced level with coding exercises.
— Fluctuation Induced Phenomena: Deep understanding of complex processes driven by randomness fostered by advanced mathematical and numerical exercises`,
    tags: ["Physics", "Data Analysis", "C++", "Python"]
  },
  {
    title: "Strategic Advisor, Vitsche",
    imagePath: "/images/eng1.jpg",
    shortDescription: "Advised one of the most prolific Ukrainian organizations in Germany on their organizational structure.",
    content: `Born in Dnipro, the city of Sputnik, I have been continuously engaged in volunteering with the Ukrainian diaspora of Berlin. I am particularly proud to have advised Vitsche, one of the most prolific and well-known Ukrainian organizations in Germany, on their organizational structure. I am forever grateful for the work these young activists are doing.

Vitsche's organizational challenges grew out of its rapid development following the 2022 full-scale Russian invasion of Ukraine. The initially flat hierarchy of the organization was quickly insufficient to handle the sheer number of contributors leading to a crystallization of structure around key individuals. The resulting opaqueness led to friction within the organization and inhibited smooth operations.`,
    tags: ["Consulting", "Organizational Structure", "NGO"]
  },
  {
    title: "President, AEGEE",
    imagePath: "/images/eng2.jpg",
    shortDescription: "Led a small NGO in Berlin, where I learned to lead, persuade, sell, and plan.",
    content: `With just 20 years old I was thrown into management at the head of a small association in Berlin.

No doubt: leading a small NGO is not the most prestigious experience. However, it is a challenging one as I was
— motivating and organising groups of young, individualistic adults.
— dealing with a disastrous financial situation left behind by the previous board.
— organising international events with 50 participants.
— convincing new members to join us instead of doing anything else in Berlin.
Over my 2 year long tenure, I learned to lead, to persuade, to sell and to plan and my team and me were successful leaving the association richer and bigger than we found it.

Afterwards I continued to serve among others in the leadership of the Eastern Partnership Project, managing a remote team across 3 time zones long before Covid.

I am grateful to the people I've met on this path and for the experiences I've made.`,
    tags: ["Leadership", "Management", "NGO"]
  }
];

