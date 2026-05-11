/**
 * Centralized data file for QuantCraft
 * Contains team members, tracks, and FAQ data
 * Improves maintainability and enables code splitting
 */

// ============ FAQ DATA ============
export const faqData = [
  {
    q: "Who can participate?",
    a: "Any student enrolled in a college or university across India. All skill levels welcome — beginners to advanced.",
  },
  {
    q: "What is the team size?",
    a: "Teams of 1–3 members.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. QuantCraft is completely free to participate in.",
  },
  {
    q: "What do I need to submit?",
    a: "A PPT by May 15, followed by the final project by May 20.",
  },
  {
    q: "Will accommodation be provided?",
    a: "Details will be shared with shortlisted teams. Stay tuned.",
  },
  {
    q: "What tracks can I build for?",
    a: "AI/ML, Cybersecurity, Blockchain, Game Dev.",
  },
];

// ============ TRACK DATA ============
export const tracksData = [
  {
    id: "aiml",
    name: "AI/ML",
    description: "Build intelligent systems with machine learning",
    icon: "/assets/tracks/AIML.png",
    platform: "/assets/tracks/AIML platform.png",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Develop decentralized applications",
    icon: "/assets/tracks/Blockchain.png",
    platform: "/assets/tracks/Block Chain platform.png",
  },
  {
    id: "cybersecurity",
    name: "Cyber Security",
    description: "Secure systems and networks",
    icon: "/assets/tracks/Cyber security.png",
    platform: "/assets/tracks/Cyber platform.png",
  },
  {
    id: "gamedev",
    name: "Game Development",
    description: "Create immersive gaming experiences",
    icon: "/assets/tracks/Game Development.png",
    platform: "/assets/tracks/GameDevelopment platform.png",
  },
];

// ============ TEAM DATA ============
export const teamData = [
  {
    id: 1,
    name: "Team Member 1",
    role: "Organizer",
    image: "/team/1.webp",
    bio: "Passionate about tech",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Organizer",
    image: "/team/2.jpeg",
    bio: "Building the future",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Organizer",
    image: "/team/3.jpeg",
    bio: "Innovation enthusiast",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Organizer",
    image: "/team/4.jpeg",
    bio: "Tech visionary",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Organizer",
    image: "/team/5.png",
    bio: "Community builder",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "Organizer",
    image: "/team/6.png",
    bio: "Creative thinker",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 7,
    name: "Team Member 7",
    role: "Organizer",
    image: "/team/7.jpg",
    bio: "Problem solver",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 8,
    name: "Team Member 8",
    role: "Organizer",
    image: "/team/8.jpg",
    bio: "Innovation leader",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 9,
    name: "Team Member 9",
    role: "Organizer",
    image: "/team/9.jpg",
    bio: "Tech enthusiast",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 10,
    name: "Team Member 10",
    role: "Organizer",
    image: "/team/10.jpeg",
    bio: "Future builder",
    socials: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

// ============ SOCIAL LINKS ============
export const socialLinks = {
  nexido: {
    instagram: "https://www.instagram.com/nexido_official?igsh=MXFsNndtdDZzMTM2dQ==",
    x: "https://x.com/nexido_official",
    linkedin: "https://www.linkedin.com/company/nexido/",
  },
  builderbase: {
    instagram: "https://www.instagram.com/the.builderbase?igsh=MWljNWU2YnFwdDBoeA==",
  },
};

// ============ CONTACT INFO ============
export const contactInfo = {
  email: "eren.techfest@gmail.com",
  phone: "+91 9306576649",
  address: "GALGOTIAS UNIVERSITY, PLOT NO. 2, YAMUNA EXPY, GREATER NOIDA, UP 203201",
  mapsUrl: "http://google.com/maps/place/Galgotias+University/@28.3668904,77.5387649,730m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390cc7365a740e65:0xd0d60a62e55ab171!8m2!3d28.3668904!4d77.5413398!16s%2Fm%2F0gff9fz?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
};

// ============ QUICK LINKS ============
export const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQs", href: "#faq" },
];
