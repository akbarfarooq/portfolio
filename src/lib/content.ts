export type Project = {
  number: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Loop Engineering",
    category: "Agentic AI / Research",
    problem: "Agent loops can keep calling tools long after the useful work is done, turning autonomy into cost and reliability risk.",
    approach: "A practical framework for governing ReAct-style loops with explicit stopping conditions, observation budgets, and human checkpoints.",
    stack: ["ReAct", "LLM APIs", "Guardrails"],
    outcome: "A clearer production mental model for agents that stay useful, observable, and bounded.",
  },
  {
    number: "02",
    title: "Token Budget Lab",
    category: "Automation / Architecture",
    problem: "LLM features become difficult to operate when every request uses the same model, context window, and retrieval path.",
    approach: "Mapped a cost-aware request architecture using RAG, caching, rate limits, and model tiering as deliberate control points.",
    stack: ["RAG", "Redis", "Model routing"],
    outcome: "A repeatable blueprint for balancing answer quality, latency, and spend before production traffic arrives.",
  },
  {
    number: "03",
    title: "Identity Protocol",
    category: "Web Development / Security",
    problem: "Authentication failures are often caused by treating tokens, sessions, browser threats, and revocation as separate problems.",
    approach: "Compared JWT and sessions, designed two-token refresh flows, and documented Redis blacklisting with XSS, CSRF, and bcrypt controls.",
    stack: ["JWT", "Redis", "bcrypt"],
    outcome: "A security-first reference architecture for web products that need a clear auth boundary.",
  },
  {
    number: "04",
    title: "Agent Factory Notes",
    category: "Systems / Delivery",
    problem: "New agent systems need more than prompts: they need conventions, tools, skills, and a client-facing delivery loop.",
    approach: "Studied the Antigravity CLI ecosystem, MCP configuration patterns, and the Forward Deployed Engineer model through the GIAIC/Panaversity journey.",
    stack: ["MCP", "CLI systems", "FDE"],
    outcome: "A grounded approach to taking an agent from experiment to a useful workflow inside a real team.",
  },
];

export const services = [
  { title: "Web Development", code: "WEB", description: "Interfaces and product surfaces that make complex systems feel clear.", items: ["Responsive Next.js builds", "Authentication and secure flows", "API-connected product UI", "Performance-minded frontend"] },
  { title: "Automation", code: "AUTO", description: "Practical workflows that remove repetitive work without removing judgment.", items: ["Process mapping and workflow design", "API and webhook orchestration", "Data enrichment pipelines", "CLI and MCP integrations"] },
  { title: "Agentic AI Workflows", code: "AGENT", description: "Bounded, observable agents and multi-agent systems built for useful autonomy.", items: ["ReAct and tool-use design", "Multi-agent orchestration research", "RAG and model routing", "Guardrails, budgets, and handoffs"] },
];

export const notes = [
  { date: "Field note / 01", title: "Loop Engineering", excerpt: "Why an agent that can loop is not automatically an agent that should loop." },
  { date: "Architecture / 02", title: "The cost-aware LLM request", excerpt: "A simple way to think about retrieval, caching, limits, and model tiers before shipping." },
  { date: "Security / 03", title: "Tokens are not a session", excerpt: "The trade-offs behind JWTs, refresh rotation, blacklists, and browser threat models." },
];
