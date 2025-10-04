import { Icons } from "@/components/icons";
import { HomeIcon, BriefcaseIcon } from "lucide-react";

export const DATA = {
  name: "Suyank Saraswat",
  initials: "SS",
  url: "https://suyanksaraswat.dev",
  location: "Bengaluru, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Frontend Lead with 6+ years of experience building impactful, innovative products using modern technologies.",
  summary:
    "Looking to grow in responsibility and work with modern technologies. With 6+ years of experience, I'm passionate about building impactful, innovative products using [**Next.js**](https://nextjs.org), [**React**](https://reactjs.org), [**TypeScript**](https://www.typescriptlang.org), [**Node.js**](https://nodejs.org), and [**AI/LLMs**](https://openrouter.ai) (OpenRouter, OpenAI, Gemini). I've worked across various industries including consumer goods, analytics, legal tech, fin-tech and ed-tech, delivering impactful contributions to companies like [**BusinessOnBot (YC21)**](https://businessonbot.com), [**Segwise.ai**](https://segwise.ai), [**CodeRabbit**](https://coderabbit.ai), [**PepsiCo**](https://pepsico.com), [**AB InBev**](https://www.ab-inbev.com), and many others.",
  avatarUrl: "/me.png",
  skills: [
    "ReactJS",
    "React Native",
    "NextJS",
    "AI/LLMs",
    "TypeScript",
    "NodeJS",
    "ElectronJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "AWS",
    "Vercel",
    "Redis",
    "Firebase",
    "GraphQL",
    "Solidity",
    "Tailwind CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/contributions", icon: BriefcaseIcon, label: "Contributions" },
  ],
  contact: {
    email: "suyank.saraswat@gmail.com",
    tel: "+91-9252039666",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/suyanksaraswat",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/suyanksaraswat",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/suyanks",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:suyank.saraswat@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CodeRabbit",
      href: "https://coderabbit.ai",
      badges: [],
      location: "Remote",
      title: "Product Architect (Design System) - Consultant",
      logoUrl: "/coderabbit.png",
      start: "November 2024",
      end: "Present",
      description:
        "Building comprehensive design system packages and component libraries used organization-wide as the standard. Architecting scalable frontend solutions for AI-powered code review and development tools, ensuring consistent UI/UX across all products and improving developer productivity through intelligent automation.",
    },
    {
      company: "Accolade",
      href: "https://accolade.com",
      badges: [],
      location: "New York, NY",
      title: "Frontend Architect - Consultant",
      logoUrl: "/accolade.png",
      start: "October 2023",
      end: "October 2024",
      description:
        "Designed and implemented a robust monorepo architecture to handle multiple client templates and content management systems. Built comprehensive real estate platform features including property renting/selling workflows, gate entry notifications, and tenant management systems. Utilized Next.js, Turborepo, Tailwind CSS, Shadcn, and Sanity for scalable content management.",
    },
    {
      company: "HeyLabs",
      badges: [],
      href: "https://www.linkedin.com/company/heynft-club",
      location: "Singapore",
      title: "Engineering Lead",
      logoUrl: "/heylabs.png",
      start: "August 2021",
      end: "October 2023",
      description:
        "Spearheaded the development of a groundbreaking shout-out platform, resulting in over 100% growth impact. Directed the successful global launch of 10+ NFT collections for diverse talent, facilitating onboarding of 300+ individuals onto HeyLabs; increased platform engagement by 45% and generated $500k in revenue within the first month. Demonstrated expertise in web3 technologies through the creation of full-stack applications utilizing Next, NodeJS, Polygon, Solidity and TypeScript.",
    },
    {
      company: "Blitz",
      href: "https://blitz.gg",
      badges: [],
      location: "Los Angeles, CA",
      title: "Full Stack Developer",
      logoUrl: "/blitz.png",
      start: "April 2021",
      end: "August 2021",
      description:
        "Led development of Blitz's game analytics desktop app using Electron and React, supporting major titles like Valorant and League of Legends. Integrated Riot Games APIs for real-time insights and implemented Snowflake-based data capture to boost user engagement and regional growth.",
    },
    {
      company: "Winuall",
      href: "https://edify.club",
      badges: [],
      location: "Bengaluru, IN",
      title: "Software Engineer",
      logoUrl: "/winuall.png",
      start: "January 2020",
      end: "April 2021",
      description:
        "Pioneered the development of the product - Winuall, from its inception, contributing to its evolution from ground zero to serving over 10,000 brands. Built scalable frontend with React, Next, and TypeScript, and backend services using Node, MongoDB, and Redis. Led key development initiatives and closely supported the ops team in resolving issues and translating client needs into scalable product features.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in",
      degree: "Bachelor's in Electronics and Communications",
      logoUrl: "/vit.png",
      start: "2016",
      end: "2020",
    },
  ],
  contributions: [
    {
      title: "Segwise Analytics",
      href: "https://www.segwise.ai",
      dates: "2023 - Present",
      active: true,
      description:
        "Developed the initial version of a growth analytics platform that helped secure funding. Built using Next.js, GoLang, TypeScript, AWS, and Mixpanel, the platform provides onboarding, retention, and CAC insights for marketing teams.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GoLang",
        "AWS",
        "Mixpanel",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.segwise.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Madverse",
      href: "https://madverse.com",
      dates: "2023 - Present",
      active: true,
      description:
        "Developed a music distribution platform from scratch with T3 Stack, gaining 1,000+ users in its first month.",
      technologies: [
        "Next.js",
        "TypeScript",
        "T3 Stack",
        "Prisma",
        "TailwindCSS",
        "tRPC",
      ],
      links: [
        {
          type: "Website",
          href: "https://madverse.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Geekster",
      href: "https://geekster.in",
      dates: "2022 - 2023",
      active: false,
      description:
        "Contributed to an ed-tech platform for students and mentors, built with Next, React, Node, and MongoDB, supporting web dev courses and placements.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://geekster.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "MyCase (formerly Woodpecker)",
      href: "https://mycase.com",
      dates: "2021 - 2022",
      active: false,
      description:
        "Built a legal tech dashboard and Word add-in enabling document templating, using React, TypeScript, Node, and AWS Lambda.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS Lambda",
        "Word Add-in",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mycase.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "FindScan",
      href: "https://findscan.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Built a comprehensive trading platform similar to TradingView, supporting multiple features including KLINE charts, technical indicators, overlays, and real-time data for crypto and stocks. Features live and historical data support with advanced charting capabilities.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "React Query",
        "Zustand",
        "KLINE Charts",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://findscan.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Poocho",
      href: "https://participant.poocho.co",
      dates: "2023 - 2024",
      active: true,
      description:
        "As Frontend Lead, built 3 core products - Recruit, Participant, and Studio platforms. The platform enables companies to conduct sessions with participants, featuring session recording, AI-powered transcript analysis, and intelligent note generation. Studio platform provides advanced recording analysis capabilities.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Ant Design",
        "Whereby",
        "Screener",
        "Gemini AI",
        "Python",
        "FastAPI",
        "Node.js",
        "MongoDB",
        "Redis",
        "Firebase",
        "React Query",
        "Retool",
        "NextAuth",
      ],
      links: [
        {
          type: "Recruit",
          href: "https://recruit.poocho.co",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Participant",
          href: "https://participant.poocho.co",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Studio",
          href: "https://studio.poocho.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Flirtbate",
      href: "https://flirtbate.com",
      dates: "2023 - 2024",
      active: false,
      description:
        "⚠️ 18+ Platform: Helped ship a video calling platform that the company had been unable to complete for 2 years. Built a credit-based wallet system for premium video calls, featuring real-time video communication and payment processing.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn",
        "Zustand",
        "React Query",
        "Zego Cloud",
        "Stripe",
        "WebSockets",
        "NextAuth",
      ],
      links: [
        {
          type: "Website",
          href: "https://flirtbate.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "BusinessOnBot (YC21)",
      href: "https://www.businessonbot.com",
      dates: "2021 - 2022",
      active: false,
      description:
        "Built a Visual Campaign Builder using React Flow with triggers, actions, and scheduling capabilities. Developed a comprehensive system allowing partners to create and track tickets, streamlining business operations and customer support workflows.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "React Flow",
        "React Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.businessonbot.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Flowpad (Langware)",
      href: "https://flowpad.ai",
      dates: "2023 - 2024",
      active: true,
      description:
        "AI integration platform for organizations with agentic capabilities for workspace management. Managed frontend development and built custom monorepo architecture with shared design system and utilities for scalable application development.",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Shadcn",
        "TailwindCSS",
        "Monorepo",
        "React Query",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://flowpad.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "TechNext",
      href: "https://www.technext.ai",
      dates: "2023 - 2024",
      active: true,
      description:
        "Built an AI-based search engine to compare keywords and show analytics related to delta between them. The platform provides intelligent keyword analysis and comparative insights for digital marketing and SEO optimization.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Shadcn",
        "TailwindCSS",
        "React Query",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.technext.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Supercoder- 20min (Closed)",
      href: "#",
      dates: "2022 - 2023",
      active: false,
      description:
        "Built two platforms: 20min - a booking platform for 20-minute video meetings with artists, and a meme download platform that scraped content from Instagram, Facebook, Twitter and other platforms at scale for meme distribution.",
      technologies: [
        "Turbo",
        "Next.js",
        "React",
        "TypeScript",
        "Shadcn",
        "TailwindCSS",
        "React Query",
        "Zustand",
        "Whereby",
        "Stripe",
        "Node.js",
        "Prisma",
        "Drizzle",
        "Supabase",
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "PepsiCo",
      href: "https://pepsico.com",
      dates: "2022 - 2023",
      active: false,
      description:
        "Built two platforms for PepsiCo: Computer vision analytics platform that analyzes product images from stores to provide sales analytics and product placement insights, and TrapSort management system for KPI tracking and live monitoring of trucks across US and Canada.",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Material-UI",
        "Redux",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://pepsico.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "AB InBev",
      href: "https://www.ab-inbev.com",
      dates: "2022 - 2023",
      active: false,
      description:
        "Built an analytics platform for KPIs and running processes with AI analysis and prediction analytics. The platform focused on sales analytics for drinks distribution across Africa, providing intelligent insights and forecasting for business operations.",
      technologies: [
        "React",
        "Vite",
        "TypeScript",
        "Material-UI",
        "Charts",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ab-inbev.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Tryangle42",
      href: "https://chnops42.web.app",
      dates: "2021 - 2022",
      active: false,
      description:
        "Built multiple products and POCs related to AI and blockchain/web3 technologies. Successfully launched and sold out NFT collections, demonstrating expertise in Web3 development and smart contract deployment.",
      technologies: [
        "React",
        "TypeScript",
        "Solidity",
        "Ethereum",
        "Polygon",
        "Smart Contracts",
        "Web3",
        "Ethers.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://chnops42.web.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Betswap.gg",
      href: "#",
      dates: "2022 - 2023",
      active: false,
      description:
        "Built a gaming platform that enables users to make token payments across various games. Integrated blockchain technology to facilitate seamless cryptocurrency transactions within gaming ecosystems.",
      technologies: [
        "React",
        "TypeScript",
        "Solidity",
        "Ethereum",
        "Polygon",
        "Smart Contracts",
        "Web3",
        "Ethers.js",
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Begig",
      href: "https://begig.io",
      dates: "2023 - 2024",
      active: true,
      description:
        "Built a freelancer marketplace platform to onboard freelancers and handle payments based on work assigned by whitelisted clients. Created a secure and efficient system for managing freelance work and payments.",
      technologies: [
        "Next.js",
        "NextAuth",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Shadcn",
        "React Query",
        "Zustand",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://begig.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [],
} as const;
