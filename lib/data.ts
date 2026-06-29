import type { Project, Experience, Achievement, TechCategory, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "healthcare-assistant",
    title: "Doctor's Personal Healthcare Assistant",
    description:
      "AI-powered healthcare assistant using locally hosted LLMs for patient triage, symptom analysis, and clinical decision support.",
    longDescription:
      "Final Year Project built in collaboration with NICH Karachi. A Flutter mobile app leveraging Ollama and DeepSeek LLMs running locally for privacy-preserving healthcare assistance. Features include symptom assessment, patient history management, and real-time clinical decision support.",
    tags: ["Flutter", "Ollama", "DeepSeek", "LLM", "Healthcare AI", "Python"],
    featured: true,
    status: "completed",
  },
  {
    id: "insurance-automation",
    title: "Insurance Automation Platform",
    description:
      "End-to-end intelligent automation pipeline for insurance document processing, OCR extraction, and workflow orchestration.",
    longDescription:
      "Built at Jaffer Business Systems — an enterprise-grade automation pipeline handling insurance document ingestion, OCR-powered data extraction, validation rules, and automated downstream workflow triggers. Reduced manual processing time significantly.",
    tags: ["Python", "OCR", "NestJS", "Azure", "Make.com", "AI/ML"],
    featured: true,
    status: "completed",
  },
  {
    id: "rag-system",
    title: "Enterprise RAG System",
    description:
      "Production RAG pipeline with semantic search, hybrid retrieval, and multi-turn conversational memory for enterprise knowledge bases.",
    longDescription:
      "Designed and deployed a Retrieval-Augmented Generation system enabling natural-language querying over large enterprise document corpora. Implemented hybrid BM25 + vector search, re-ranking, and streaming responses.",
    tags: ["LangChain", "Python", "Vector DB", "LLM", "NestJS", "Azure"],
    featured: true,
    status: "completed",
  },
  {
    id: "ai-agent-platform",
    title: "Intelligent AI Agent Platform",
    description:
      "Multi-agent orchestration platform with tool-calling, memory, and automated task delegation across business workflows.",
    longDescription:
      "Built a multi-agent system where specialized AI agents collaborate to complete complex multi-step business workflows. Includes tool use, persistent memory, and n8n-based orchestration.",
    tags: ["AI Agents", "n8n", "Python", "LangGraph", "NestJS", "React"],
    featured: true,
    status: "completed",
  },
  {
    id: "workflow-automation",
    title: "No-Code Workflow Automation Suite",
    description:
      "Integrated automation suite connecting CRMs, calendars, spreadsheets, and communication tools with intelligent triggers.",
    longDescription:
      "Built comprehensive workflow automation integrating Calendly, Google Sheets, Slack, and custom APIs using Make.com, Zapier, and n8n. Automated lead nurturing, reporting pipelines, and team notifications.",
    tags: ["Make.com", "Zapier", "n8n", "Google Sheets", "Calendly", "APIs"],
    featured: false,
    status: "completed",
  },
  {
    id: "bubble-app",
    title: "Full-Stack Bubble.io Application",
    description:
      "Enterprise no-code application with complex data models, custom API integrations, and role-based access control.",
    longDescription:
      "Designed and built a full-featured business application on Bubble.io with complex relational data models, third-party API integrations, and a polished responsive UI.",
    tags: ["Bubble.io", "No-Code", "REST APIs", "UI/UX", "Automation"],
    featured: false,
    status: "completed",
  },
];

export const experiences: Experience[] = [
  {
    id: "jbs",
    company: "Jaffer Business Systems",
    role: "AI/ML Engineer I",
    period: "2024 – Present",
    location: "Karachi, Pakistan",
    description: [
      "Built and maintained automation pipelines using Make.com, n8n, and Zapier to streamline business processes, improve efficiency, and reduce manual workload.",
      "Built a desktop resume scoring app using Azure OCR for document parsing, OpenAI for intelligent evaluation, and PyQt for GUI-based results presentation.",
      "Integrated LLMs and OpenAI agents with automation tools to build intelligent data processing, evaluation, and RAG-based pipelines.",
      "Developed a complete auto-booking platform integrating Google Sheets, Calendly, and email automation for expert-client scheduling.",
      "Implemented a NestJS-based AI system for an insurance company that extracts carrier codes from Gmail, analyzes insurance documents, and syncs summaries to Salesforce.",
      "Built an AI-powered insurance platform using Django that processes policy documents, analyzes renewal premiums, and sends automated renewal alerts.",
      "Developed responsive UIs and backend workflows on Bubble.io for rapid no-code application delivery.",
      "Collaborated directly with clients for requirements gathering, demo presentations, and automation planning.",
    ],
    technologies: ["Python", "LLMs", "RAG", "NestJS", "Django", "Azure OCR", "OpenAI", "Make.com", "n8n", "Zapier", "Bubble.io", "Salesforce"],
    current: true,
  },
  {
    id: "asani",
    company: "Asani.io",
    role: "Software Integration Developer",
    period: "2023 – 2024",
    location: "Karachi, Pakistan",
    description: [
      "Excelled in providing automated solutions across enterprise integration projects.",
      "Built ClickUp dashboarding solutions for real-time project visibility and team productivity tracking.",
      "Delivered Zong VPBAX integration connecting telecom infrastructure with business communication workflows.",
    ],
    technologies: ["ClickUp API", "Zapier", "REST APIs", "Workflow Automation"],
    current: false,
  },
  {
    id: "aeroglobe",
    company: "AeroGlobe",
    role: "Software Developer Intern",
    period: "2022 – 2023",
    location: "Karachi, Pakistan",
    description: [
      "Worked on the Sasta Ticket B2B platform frontend using React.js and Vue.js, integrating RESTful APIs and building data visualization dashboards.",
      "Followed Agile methodology for sprint-based development, daily stand-ups, and iterative feature delivery.",
      "Collaborated with a Django backend team to implement responsive UI components for a production-level travel booking application.",
    ],
    technologies: ["React.js", "Vue.js", "Django", "REST APIs", "Agile"],
    current: false,
  },
];

export const achievements: Achievement[] = [
  {
    id: "fyp",
    title: "Final Year Project — NICH Collaboration",
    description:
      "Delivered a production-ready AI healthcare assistant in collaboration with the National Institute of Child Health (NICH), Karachi.",
    icon: "🏥",
    year: "2024",
  },
  {
    id: "llm-local",
    title: "Privacy-First Local LLM Deployment",
    description:
      "Successfully deployed Ollama and DeepSeek LLMs fully locally for a healthcare use-case, achieving zero data-leakage architecture.",
    icon: "🔒",
    year: "2024",
  },
  {
    id: "automation",
    title: "Enterprise Automation at Scale",
    description:
      "Automated end-to-end insurance workflows reducing processing time by 80% and eliminating manual data entry errors.",
    icon: "⚡",
    year: "2024",
  },
  {
    id: "fullstack",
    title: "Multi-Stack Engineer",
    description:
      "Shipped production applications across 5+ tech stacks: NestJS, Django, React, Flutter, and Bubble.io within a single year.",
    icon: "🚀",
    year: "2024",
  },
  {
    id: "cloud",
    title: "Azure Cloud Architecture",
    description:
      "Designed and maintained scalable cloud infrastructure on Azure with automated CI/CD pipelines via GitHub Actions.",
    icon: "☁️",
    year: "2024",
  },
  {
    id: "rag",
    title: "Production RAG Systems",
    description:
      "Delivered multiple enterprise-grade RAG systems with hybrid retrieval, re-ranking, and streaming — serving real users in production.",
    icon: "🤖",
    year: "2024",
  },
];

export const techCategories: TechCategory[] = [
  {
    name: "AI / ML",
    items: [
      { name: "LLMs & Prompt Engineering", level: "expert" },
      { name: "RAG Systems", level: "expert" },
      { name: "AI Agents", level: "expert" },
      { name: "LangChain / LangGraph", level: "proficient" },
      { name: "Ollama / DeepSeek", level: "proficient" },
      { name: "OCR Pipelines", level: "proficient" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "NestJS", level: "expert" },
      { name: "Python / Django", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Redis", level: "familiar" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React / Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Flutter", level: "proficient" },
      { name: "Framer Motion", level: "proficient" },
    ],
  },
  {
    name: "Automation",
    items: [
      { name: "Make.com", level: "expert" },
      { name: "n8n", level: "expert" },
      { name: "Zapier", level: "expert" },
      { name: "Google Sheets API", level: "proficient" },
      { name: "Calendly", level: "proficient" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "Microsoft Azure", level: "proficient" },
      { name: "GitHub Actions", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "CI/CD Pipelines", level: "proficient" },
    ],
  },
  {
    name: "No-Code",
    items: [
      { name: "Bubble.io", level: "expert" },
      { name: "Workflow Design", level: "expert" },
    ],
  },
];
