export interface PersonalProject {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  stack: string[];
  links: {
    github: string;
    live?: string;
    docs?: string;
  };
  sections: Array<{
    heading: string;
    body: string;
  }>;
  outcomes: string[];
  status: "active" | "stable" | "archived";
}

export const personalProjects: PersonalProject[] = [
  {
    id: "rbxts-region",
    title: "@rbxts/region",
    tagline: "Fast geometric region detection for roblox-ts games",
    summary:
      "A performant API for detecting parts entering complex 2D and 3D regions in Roblox projects built with roblox-ts.",
    role: "Library author and maintainer",
    stack: ["TypeScript", "roblox-ts", "Luau", "npm"],
    links: {
      github: "https://github.com/jheinem1/region",
    },
    sections: [
      {
        heading: "Problem",
        body: "Region checks were often verbose and hard to scale across many gameplay systems.",
      },
      {
        heading: "Approach",
        body: "Created a strongly typed API for region composition and point/part detection with efficient internals.",
      },
      {
        heading: "Notes",
        body: "The package is designed for extension so custom shapes can be added without rewriting core logic.",
      },
    ],
    outcomes: [
      "Reusable geometry primitives",
      "Simpler game-side collision checks",
      "Improved maintainability for region-heavy features",
    ],
    status: "active",
  },
  {
    id: "rbxts-markdown-ast",
    title: "@rbxts/markdown-ast",
    tagline: "Markdown to AST parser without regex-heavy pipelines",
    summary:
      "Parses markdown into a traversable AST, enabling custom transformations and renderers.",
    role: "Library author",
    stack: ["TypeScript", "Parser design", "AST", "npm"],
    links: {
      github: "https://github.com/jheinem1/markdown-ast",
    },
    sections: [
      {
        heading: "Problem",
        body: "Regex-only parsers become brittle when syntax extensions are introduced.",
      },
      {
        heading: "Approach",
        body: "Implemented deterministic tokenization and node construction for easier debugging and extension.",
      },
      {
        heading: "Notes",
        body: "The output model is intentionally explicit so consumers can walk nodes predictably.",
      },
    ],
    outcomes: [
      "Extensible parsing architecture",
      "Cleaner plugin opportunities",
      "Safer handling of nested syntax",
    ],
    status: "stable",
  },
  {
    id: "lua-serializer",
    title: "Lua-Serializer",
    tagline: "Serialize runtime values back into readable Lua source",
    summary:
      "A Lua API that converts values into Lua syntax for debugging, introspection, and visualization.",
    role: "Maintainer",
    stack: ["Lua", "Serialization", "Debug tooling"],
    links: {
      github: "https://github.com/jheinem1/Lua-Serializer",
    },
    sections: [
      {
        heading: "Problem",
        body: "Debug output often loses structure when complex tables are inspected.",
      },
      {
        heading: "Approach",
        body: "Built serializers for value types with attention to readability and deterministic output.",
      },
      {
        heading: "Notes",
        body: "Updates focus on balancing runtime cost with useful diagnostics.",
      },
    ],
    outcomes: [
      "Readable state snapshots",
      "Faster debugging cycles",
      "Consistent output across environments",
    ],
    status: "stable",
  },
  {
    id: "rbxts-better-binding",
    title: "@rbxts/better-binding",
    tagline: "Object-oriented state bindings for Roact ecosystems",
    summary:
      "Extends Roact-style bindings with patterns that feel more object-oriented and composable.",
    role: "Library author",
    stack: ["TypeScript", "Roact", "State management"],
    links: {
      github: "https://github.com/jheinem1/better-binding",
    },
    sections: [
      {
        heading: "Problem",
        body: "Complex UI state can become hard to coordinate with primitive binding patterns.",
      },
      {
        heading: "Approach",
        body: "Introduced abstractions that bundle state behavior and reduce boilerplate in component trees.",
      },
      {
        heading: "Notes",
        body: "Aims to preserve compatibility while making larger UI modules easier to reason about.",
      },
    ],
    outcomes: [
      "Less repetitive UI state code",
      "Higher-level binding composition",
      "Clearer interfaces for shared modules",
    ],
    status: "archived",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-me", label: "About" },
  { to: "/personal-projects", label: "Personal Projects" },
  { to: "/academic-projects", label: "Academic Projects" },
  { to: "/contact", label: "Contact" },
];

export const academicProjects = [
  {
    title: "Capstone iOS App",
    summary:
      "Delivered a client-facing mobile app using React Native, Redux, and TypeScript in a team of five.",
    detail: "Ran Agile ceremonies, owned feature implementation, and coordinated integration across teammates.",
  },
  {
    title: "Workout Wizard",
    summary:
      "Reframed a Java app into a gym class management tool with SCRUM, Swing UI, and Gradle builds.",
    detail: "Focused on workflow redesign and usability improvements for scheduling and class tracking.",
  },
  {
    title: "FIRST Robotics Team 1212",
    summary:
      "Lead programmer for three seasons, collaborating tightly with hardware and drive teams.",
    detail: "Built reliable control software and validated integration in fast competition cycles.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:jheinem01@icloud.com",
    value: "jheinem01@icloud.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/james-heinemann-5756b01b8/",
    value: "linkedin.com/in/james-heinemann",
  },
  {
    label: "GitHub",
    href: "https://github.com/jheinem1",
    value: "github.com/jheinem1",
  },
];
