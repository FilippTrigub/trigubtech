import { NavigationItem, ServiceSection, ProjectData } from '@/types';

export const WEBSITE_TITLE = 'Trigub Tech';
export const WEBSITE_SUBTITLE = 'AI & Software Solutions';

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
    color: "#f59e0b", // amber
    statements: [
      "I consult you on what LLM's can do for you",
      "Together we create the architecture fitting your use case",
      "The initial consultation is always free so just reach out!"
    ]
  },
  {
    title: "Make it Fit", 
    icon: "settings",
    color: "#3b82f6", // blue
    statements: [
      "Choose the right LLM for your use case based on costs and performance",
      "Give your bot the ability to do tasks outside of the chat",
      "Your use case is unique and so is the solution!"
    ]
  },
  {
    title: "Make the Bots Work",
    icon: "cpu",
    color: "#10b981", // green
    statements: [
      "Together we will create a holistic solution for your system and needs",
      "I'll write you clean code that you can use, extend, and modify with little effort",
      "The task is only done, when you are reaping its benefits"
    ]
  }
];

export const SERVICES_DATA = [
  {
    title: "Optimized Retrieval-Augmented Generation (RAG) System",
    imagePath: "/images/services_RAG.jpg",
    content: `Retrieval-Augmented Generation is a powerful and flexible approach for the deployment of LLM systems. It allows precise results based on your in-house data at low cost and quick development.

Behind the simplicity of the RAG system lies a sophisticated architecture that can be tailored to your specific needs.

I can help answer the following questions and more:
— Which embeddings work best? OpenAI, Cohere, Jinna or others?
— Which vector database to use? Weaviate, Milvus, or others?
— How to chunk you data? Overlapping or non-overlapping?
— How to format table data? Is a special LLM required?
— Do you need a Reranker?
— How to estimate the running costs?

Understanding this architecture in depth allows for optimal performance and cost-effectiveness.`
  },
  {
    title: "LLM System Evaluation",
    imagePath: "/images/services_evaluation.jpg",
    content: `Evaluating and deploying LLM systems can be a daunting task.

Originally human evaluators are used to assess the quality of the LLM system. However, this is time-consuming and expensive.

I can help you with the following:
— How to evaluate the LLM system using tools like Ragas or AutoRAG?
— How to evaluate the LLM system using other LLM systems?
— How to optimize the performance of system components other than the LLM cost-effectively?
— How to make use of user feedback to further improve the system?

The field of LLM evaluation is still developing and new tools are published frequently. It is my profession to stay on top of that.`
  },
  {
    title: "Security and Privacy",
    imagePath: "/images/services_security.jpg",
    content: `Prompt injection is probably the most common security issue in LLM systems. It is a form of attack where the attacker coerces the system to give up private data the LLM has been given.

Solutions to this novel concern are still developing, but rule-engines, LLM guard systems or prompt engineering can provide some relief.

Together we can find answer to the following questions:
— How sensitive is your data?
— How much protection is required?
— Which effects will its implementation have on the performance?
— How much will it increase the running costs?

I can help you to find the right balance between security and performance.`
  },
  {
    title: "Integration and Deployment",
    imagePath: "/images/services_deployment.jpg",
    content: `Even a well-designed LLM system is useless if it is not integrated into your existing infrastructure. You want it to be connected to your databases, your UI and your CI/CD pipeline.

Tools for Integration are plentiful, but their adoption for LLM systems is still in progress.

One must consider:
— How to connect your LLM system to your databases to feed your LLM system?
— How to stream the outcomes to your UI?
— How to assure consistent up-times?

My job is done when your system is running smoothly and you are happy with the results.`
  }
];

export const PROJECTS_DATA: ProjectData[] = [
  {
    title: "Multi-chain LLM copilot for academic teaching and studying",
    client: "Universities",
    duration: "6 month (10.2023-03.2024)",
    goal: "Build a sophisticated AI copilot to augment the students' learning experience and provide AI-derived insights to professors.",
    solution: "Build a multi-chain LLM system adapting to user needs at its own accord with a Weaviate vector DB based RAG system and evaluated it. Build responsive react frontend, and backend systems handling auth, data management and auxiliary services as a RESTful API. Deployed and managed the app to the cloud in a production environment including the CICD via multi-stage deployment.",
    imagePath: "/images/success2.jpg",
    isImageOnRight: true
  },
  {
    title: "GPT-powered service staff assistant",
    client: "International hosting services provider",
    duration: "2 month (04.2023-06.2023)",
    goal: "Provide a GPT-powered chatbot using internal documents to support service staff and interact with customers directly.",
    solution: "Led the design and development of a lightweight GPT-powered chatbot for service-staff support for an international client. Contributed significantly to the initial design, technology selection, and architecture. Implemented a haystack pipeline with OpenAI embeddings to optimize GPT usage and integrated CI/CD and DevOps for rapid, collaborative development. Spearheaded technical development and introduced agile development practices, setting guidelines and conventions for the team.",
    imagePath: "/images/arrows.jpg",
    isImageOnRight: true
  },
  {
    title: "Full-stack application design and development",
    client: "International central bank",
    duration: "24 month (01.2021-12.2022)",
    goal: "Design and develop an application for statistical data analysis holistically and support users on-demand.",
    solution: "Designed and developed architectural extensions based on client demands and limitations. Successfully implemented over 500 stories in a 300k+ LoC codebase, which included a dockerized Python backend hosted in AWS with PostgreSQL and Oracle DB, as well as a dockerized JS frontend, both delivered via CI/CD. Ensured continuous stability through extensive unit and end-to-end testing. Served as Scrum Master for a team of 7 developers for over a year.",
    imagePath: "/images/computer2.jpg",
    isImageOnRight: true
  },
  {
    title: "Complex legacy software augmentation",
    client: "Major German bank", 
    duration: "2 month (02-03.2023)",
    goal: "Augment an existing legacy Python codebase to deliver previously unforeseen functionality.",
    solution: "Restructured the existing testing framework to assert the existing functionality using Python pytest and end-to-end testing. Analyzed the complex data processing pipelines and the theoretical proposal to accommodate additional extra-dimensional inputs. Delivered the additional functionality and additional tests.",
    imagePath: "/images/confluence1.jpg",
    isImageOnRight: true
  }
];

export const POC_PROJECTS = [
  {
    title: "AI Sommelier",
    duration: "1 month (06.2023)",
    goal: "Build a sales bot for a wine store with consistent identification and memorization of customer preferences to provide the customer with a sommelier-like experience.",
    solution: "Build an LLM agent with a recommendation tool based on a general haystack agent pattern design with a Streamlit UI. Implemented a specified meta-prompt to correctly and consistently identify customer preferences and remember them. Extracted these preferences programmatically to force usage of tool after a set number of preferences has been identified. Dockerized and deployed to Azure with Terraform.",
    imagePath: "/images/cartoon_bot.jpg"
  },
  {
    title: "Audio-Summarizer",
    duration: "1 month (02-03.2023)",
    goal: "Summarize audio recordings, specifically books, into concise bullet-point style summaries.",
    solution: "Engineered a meta-prompt and summarization loop subdividing the recording in user designated parts (chapters) and then token-limit enforced chunks to extract a sensible and concise summary for each part as well as the entire recording. Build a Flutter based UI allowing users to summarize their recordings and receive the summary by mail. Dockerized and deployed to Vercel and Azure with Terraform and CI/CD.",
    imagePath: "/images/sound.jpg"
  },
  {
    title: "Telegram Search&Chat",
    duration: "1 month (03-04.2023)",
    goal: "Make Telegram searchable. Allow the automated exploration of a multitude of telegram channels via a GPT-bot fed by vectorized documents found by a search mechanism.",
    solution: "Retrieved chat contents from Telegram with Telethon and loaded these to a FAISS DB with OpenAI embeddings hosted in a FastAPI backend. Implemented question-answer pipeline with Haystack, using Dense Passage Retrieval and OpenAI generation. Provided a light-weight UI with user authentication to Telegram and subsequent chat window. Deployed the bot to Azure with Docker.",
    imagePath: "/images/confluence2.jpg"
  }
];

export const ABOUT_DATA = [
  {
    title: "Humboldt University of Berlin",
    imagePath: "/images/Huberlin-logo.jpg",
    content: `M.Sc. in theoretical Physics GPA 3.6 (GER scale 1.4)
Humboldt university of Berlin 10.2013 – 03.2019

Thesis:
— "Markovian and Non-Markovian Dissipation Mechanisms in Nonequilibrium Dispersion Forces."
— Modelled stochastic processes with memory effects mathematically. Validated the model numerically using an implementation in C.

Relevant coursework
— Statistical Data Analysis: Mathematical foundation and practical application of data processing and machine learning on real world data in python notebooks.
— Statistical Mechanics: Theoretical Statistics at an advanced level with coding exercises.
— Fluctuation Induced Phenomena: Deep understanding of complex processes driven by randomness fostered by advanced mathematical and numerical exercises`
  },
  {
    title: "Strategic Advisor, Vitsche",
    imagePath: "/images/eng1.jpg",
    content: `Born in Dnipro, the city of Sputnik, I have been continuously engaged in volunteering with the Ukrainian diaspora of Berlin. I am particularly proud to have advised Vitsche, one of the most prolific and well-known Ukrainian organizations in Germany, on their organizational structure. I am forever grateful for the work these young activists are doing.

Vitsche's organizational challenges grew out of its rapid development following the 2022 full-scale Russian invasion of Ukraine. The initially flat hierarchy of the organization was quickly insufficient to handle the sheer number of contributors leading to a crystallization of structure around key individuals. The resulting opaqueness led to friction within the organization and inhibited smooth operations.`
  },
  {
    title: "President, AEGEE",
    imagePath: "/images/eng2.jpg",
    content: `With just 20 years old I was thrown into management at the head of a small association in Berlin.

No doubt: leading a small NGO is not the most prestigious experience. However, it is a challenging one as I was
— motivating and organising groups of young, individualistic adults.
— dealing with a disastrous financial situation left behind by the previous board.
— organising international events with 50 participants.
— convincing new members to join us instead of doing anything else in Berlin.
Over my 2 year long tenure, I learned to lead, to persuade, to sell and to plan and my team and me were successful leaving the association richer and bigger than we found it.

Afterwards I continued to serve among others in the leadership of the Eastern Partnership Project, managing a remote team across 3 time zones long before Covid.

I am grateful to the people I've met on this path and for the experiences I've made.`
  }
];