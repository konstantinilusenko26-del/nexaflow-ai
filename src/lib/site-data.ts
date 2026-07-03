import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Headphones,
  Workflow,
  Sparkles,
  FileInput,
  Clock,
  Unplug,
  Repeat2,
  Zap,
  ListChecks,
  TrendingUp,
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_TRUST = [
  "Custom AI solutions",
  "Fast implementation",
  "Built for your workflow",
] as const;

export const HERO_FLOW = [
  "Lead Captured",
  "AI Processing",
  "CRM Updated",
  "Customer Reply",
] as const;

export const HERO_EVENTS = [
  "New lead received",
  "Response generated",
  "CRM updated",
  "Task completed",
] as const;

export const INTEGRATIONS = [
  "HubSpot",
  "Slack",
  "Telegram",
  "Gmail",
  "Notion",
  "Google Sheets",
  "Shopify",
  "Zapier",
] as const;

export interface Problem {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export const PROBLEMS: Problem[] = [
  {
    icon: FileInput,
    title: "Manual lead processing",
    desc: "New enquiries sit in an inbox while your team copies data between tools by hand.",
  },
  {
    icon: Clock,
    title: "Slow customer responses",
    desc: "Delayed replies cost you deals. Prospects expect answers in minutes, not days.",
  },
  {
    icon: Unplug,
    title: "Disconnected business tools",
    desc: "Your CRM, email and messengers don't talk to each other, so nothing stays in sync.",
  },
  {
    icon: Repeat2,
    title: "Repetitive administrative tasks",
    desc: "Skilled people spend hours on data entry and follow-ups a system should handle.",
  },
];

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
}
export const SERVICES: Service[] = [
  {
    icon: Bot,
    title: "AI Sales Agents",
    desc: "AI agents that identify, qualify and communicate with potential customers.",
    features: ["Lead qualification", "Personalized outreach", "Meeting booking"],
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    desc: "Automated responses, ticket classification and smart customer assistance.",
    features: ["Instant replies", "Ticket routing", "Human handoff"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connect your forms, CRM, email, messengers and internal tools.",
    features: ["Multi-tool sync", "Trigger-based flows", "Error monitoring"],
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    desc: "AI systems designed specifically for your company's processes.",
    features: ["Tailored architecture", "Private data handling", "Ongoing support"],
  },
];

export interface WorkflowTab {
  key: string;
  label: string;
  steps: string[];
}
export const WORKFLOW_TABS: WorkflowTab[] = [
  {
    key: "sales",
    label: "Sales",
    steps: [
      "New Lead",
      "AI Qualification",
      "Personalized Outreach",
      "CRM Update",
      "Sales Call",
    ],
  },
  {
    key: "support",
    label: "Support",
    steps: [
      "Customer Question",
      "AI Analysis",
      "Knowledge Base",
      "Instant Reply",
      "Human Handoff",
    ],
  },
  {
    key: "operations",
    label: "Operations",
    steps: [
      "New Request",
      "Data Processing",
      "Task Creation",
      "Team Notification",
      "Completed",
    ],
  },
];

export interface ProcessStep {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}
export const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", icon: Search, title: "Discovery", desc: "We analyze your workflow, goals and repetitive tasks." },
  { num: "02", icon: PencilRuler, title: "Strategy", desc: "We design an automation architecture tailored to your business." },
  { num: "03", icon: Code2, title: "Development", desc: "We build, integrate and test the system." },
  { num: "04", icon: Rocket, title: "Launch & Optimization", desc: "We deploy the solution and improve its performance." },
];

export interface Result {
  icon: LucideIcon;
  title: string;
  desc: string;
}
export const RESULTS: Result[] = [
  { icon: Zap, title: "Faster response times", desc: "Automated replies engage customers the moment they reach out." },
  { icon: Repeat2, title: "Less repetitive work", desc: "Your team stops doing tasks a system can handle on its own." },
  { icon: ListChecks, title: "Better lead organization", desc: "Every lead is captured, enriched and routed automatically." },
  { icon: TrendingUp, title: "Scalable business processes", desc: "Workflows grow with you without adding manual overhead." },
];

/* ---------- Demo dashboard (visual only) ---------- */
export const DASH_STATS = [
  { label: "Active automations", value: "12", trend: "+3 this week" },
  { label: "Leads processed", value: "1,204", trend: "+18% MoM" },
  { label: "Tasks completed", value: "8,930", trend: "+240 today" },
] as const;

export const DASH_AUTOMATIONS = [
  { name: "Lead intake & routing", status: "Running", load: 82 },
  { name: "Support ticket triage", status: "Running", load: 64 },
  { name: "Weekly report generator", status: "Scheduled", load: 30 },
  { name: "Abandoned cart follow-up", status: "Running", load: 47 },
] as const;

export const DASH_ACTIVITY = [
  { text: "New lead qualified from website form", time: "just now" },
  { text: "Auto-reply sent to support ticket #4821", time: "2m ago" },
  { text: "Contact synced to HubSpot", time: "6m ago" },
  { text: "Follow-up task created for sales", time: "11m ago" },
] as const;

export const DASH_INTEGRATIONS = ["HubSpot", "Slack", "Gmail", "Telegram", "Sheets"] as const;

export interface Faq {
  q: string;
  a: string;
}
export const FAQS: Faq[] = [
  {
    q: "What business processes can be automated?",
    a: "Lead intake, customer support replies, data entry, CRM updates, reporting, follow-ups and any repetitive task that connects your existing tools.",
  },
  {
    q: "How long does implementation take?",
    a: "Most focused automations are live within one to two weeks. Larger multi-step systems are delivered in clear milestones so you see progress early.",
  },
  {
    q: "Can you integrate with our current tools?",
    a: "Yes. We work with popular platforms like HubSpot, Slack, Gmail, Telegram, Notion, Google Sheets and Shopify, plus any service with an API or webhook.",
  },
  {
    q: "Do we need technical knowledge?",
    a: "No. We handle the design, build and setup. You get clear documentation and a walkthrough so your team can run everything with confidence.",
  },
  {
    q: "Can the system be expanded later?",
    a: "Absolutely. Automations are built modularly, so new steps, tools and use cases can be added as your business grows.",
  },
];

export const FOOTER_SERVICES = [
  "AI Sales Agents",
  "Support Automation",
  "Workflow Automation",
  "Custom AI Solutions",
] as const;

export const BRAND = {
  name: "NexaFlow AI",
  tagline: "AI Automation for Modern Businesses",
  email: "hello@nexaflow.ai",
  linkedin: "https://www.linkedin.com/",
  upwork: "https://www.upwork.com/",
} as const;
