// ---------------------------------------------------------------------------
// agic.dev — site content
// Edit this file to update the site. You should rarely need to touch App.tsx.
// ---------------------------------------------------------------------------

export interface Identity {
  name: string;
  subtitle: string;
  docNo: string;
  rev: string;
  date: string;
  status: string;
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  status: string;
  body: string;
  stack: string;
  note: string | null;
  link: ProjectLink | null;
}

export interface SpecTableData {
  caption: string;
  columns: [string, string];
  rows: [string, string][];
}

export interface Qualification {
  when: string;
  role: string;
  org: string;
  desc: string;
}

export interface ContactRow {
  label: string;
  href: string;
  text: string;
  external?: boolean;
  download?: boolean;
}

export interface Section {
  id: string;
  no: string;
  nav: string;
  title: string;
  aka: string;
}

// ---------------------------------------------------------------------------

export const identity: Identity = {
  name: "Almedin Agic",
  subtitle: "Cybersecurity student · Hardware security · Metro Detroit, MI",
  docNo: "AGIC-DEV",
  rev: "2.0",
  date: "JUL 2026",
  status: "ACTIVE",
};

export const generalDescription: string[] = [
  "Cybersecurity student at Oakland University focused on hardware security"
];

export const featureList: string[] = [
  "Hands-on hardware: Bus Pirate 5, UART / SPI / JTAG, RTL-SDR",
  "Operates a virtualized homelab — Proxmox, Docker, 10 GbE",
  "Ships tools with real users and public releases",
  "IT support background: AD, endpoints, 50+ workstations",
  "CompTIA A+ in progress",
];

// Figure numbers auto-generate from array order (Fig. 1.1, 1.2, ...).
// Add, remove, or reorder freely.
export const projects: Project[] = [
  {
    title: "Hardware Interface Toolkit",
    status: "In progress",
    body: "Bus Pirate 5–centered bench for probing embedded targets over UART, SPI, and JTAG — firmware extraction and protocol analysis reps on real hardware.",
    stack: "Bus Pirate 5 · UART · SPI · JTAG · Logic analysis",
    note: "Bench log coming",
    link: null,
  },
  {
    title: "Pass-Manage",
    status: "Shipped",
    body: "Password manager built in Python — master-password architecture with bcrypt hashing and AES encryption over a local MySQL store.",
    stack: "Python · bcrypt · AES · MySQL · CustomTkinter",
    note: null,
    link: { href: "https://github.com/Zyorby/Pass-Manage", label: "GitHub ↗" },
  },
  {
    title: "Zyorby Cleaner",
    status: "Shipped",
    body: "Windows GUI that manages, cleans, and reinstalls FiveM / GTA V mods safely. Packaged and released as an .exe with real downloads.",
    stack: "Python · GUI · Windows · Public releases",
    note: null,
    link: { href: "https://github.com/Zyorby", label: "GitHub ↗" },
  },
];

export const hardwareTable: SpecTableData = {
  caption: "Table 2.1 — Hardware",
  columns: ["Parameter", "Value"],
  rows: [
    ["Hypervisor", "Proxmox VE"],
    ["Compute", "AMD Ryzen 7 7700X"],
    ["Memory", "64 GB DDR5"],
    ["Storage", "12 TB NAS + 1 TB NVMe cache"],
    ["Network", "10 GbE ready"],
    ["Chassis", "NZXT H500 — rack-mount planned"],
  ],
};

export const servicesTable: SpecTableData = {
  caption: "Table 2.2 — Services",
  columns: ["Service", "Role"],
  rows: [
    ["Docker stack", "Application hosting"],
    ["Pi-hole", "Network-wide DNS filtering"],
    ["Reverse proxy", "Ingress + TLS"],
    ["WireGuard", "Remote access"],
    ["NAS / media", "Storage + streaming"],
    ["Game servers", "Hosting + testing"],
  ],
};

export const homelabNote: string =
  "Every project on this page deploys here first — production habits practiced on home hardware.";

export const qualifications: Qualification[] = [
  {
    when: "2026 — Onward",
    role: "Information Technology Coop",
    org: "Nexteer Automotive · Metro Detroit",
    desc: "",
  },
  {
    when: "2023 — 2024",
    role: "IT Intern",
    org: "Roosen Varchetti & Olivier",
    desc: "Tier-1 support across 50+ workstations, Active Directory administration, Windows patching, endpoint monitoring, and phishing-report triage — plus the documentation so the next person didn’t have to guess.",
  },
  {
    when: "2024 — 2028",
    role: "B.S. Cybersecurity",
    org: "Oakland University · School of Engineering and Computer Science",
    desc: "Coursework in C/Unix systems programming, networking, and security fundamentals. CompTIA A+ in progress.",
  },
];

export const contactRows: ContactRow[] = [
  { label: "Email", href: "mailto:almedinagic@outlook.com", text: "almedinagic@outlook.com" },
  { label: "GitHub", href: "https://github.com/Zyorby", text: "github.com/Zyorby", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/almedinagic", text: "linkedin.com/in/almedinagic", external: true },
  { label: "Résumé", href: "/Resume.pdf", text: "Download PDF ↓", download: true },
];

export const contactLine: string =
  "Open to internships and conversations about hardware security";

export const sections: Section[] = [
  { id: "s1", no: "1", nav: "Projects", title: "Typical applications", aka: "projects" },
  { id: "s2", no: "2", nav: "Homelab", title: "Operating conditions", aka: "homelab" },
  { id: "s3", no: "3", nav: "Experience", title: "Qualification history", aka: "experience & education" },
  { id: "s4", no: "4", nav: "Contact", title: "Ordering information", aka: "contact" },
];

export const colophon: string = "IBM Plex Sans · IBM Plex Mono";
