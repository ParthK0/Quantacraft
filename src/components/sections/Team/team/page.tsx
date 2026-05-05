"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

interface Squad {
  name: string;
  tag: string;
  accent: string;
  accentBg: string;
  members: TeamMember[];
}

const squads: Squad[] = [
  {
    name: "AI-Tech Force",
    tag: "💻",
    accent: "#1cd3e7ff",
    accentBg: "rgba(0,229,255,0.95)",
    members: [
      {
        name: "Ansh Vashisth",
        role: "President",
        bio: "Steering the AI-Tech vision and driving innovation across all technical initiatives.",
        image: "/team-members/2-ansh-vashisth.jpeg",
        github: "https://github.com/AnshVashisth0",
        linkedin: "https://www.linkedin.com/in/ansh-vashisth00/",
      },
      {
        name: "Deepankar Patel",
        role: "Vice President",
        bio: "Deepankar: builds apps, breaks them, fixes them then redesigns the UI for no reason. Running on deadlines, ideas, and just enough sleep to debug life.",
        image: "/team-members/5-deepankar.png",
        github: "https://github.com/dpp0007",
        linkedin: "https://www.linkedin.com/in/dpp07/",
      },
      {
        name: "Parth Khowal",
        role: "Technical Lead",
        bio: "Runs on snacks, sarcasm, and chaotic energy—somehow still functioning like a masterpiece ",
        image: "/team-members/3-parth-khowal.jpeg",
        github: "https://github.com/ParthK0",
        linkedin: "https://www.linkedin.com/in/parth-khowal-a37903294/",
      },
      {
        name: "Akarsh",
        role: "Creative Content Strategist",
        bio: "Crafting compelling narratives and visual storytelling for the tech brand.",
        image: "/team-members/10-akarsh.jpeg",

      },
      {
        name: "Vaishnavi",
        role: "Creative Content Strategist",
        bio: " I combine creativity and technical skills to create impactful content and support innovative projects at Quanta Club.",
        image: "/team-members/9-vaishnavi.jpg",
        linkedin: "https://www.linkedin.com/in/vaishnavi-gupta-747baa384I",
        instagram: "https://www.instagram.com/2288_vaishnavi?igsh=eDk2ZGtoazgwZWN5",
      },
      {
        name: "Vanshika",
        role: "Social Media Head",
        bio: "Building digital presence and community engagement across all platforms.",
        image: "/team-members/11-vanshika.jpeg",
        github: "https://github.com/vanshika-2105",
        linkedin: "https://www.linkedin.com/in/vanshika-prajapati-a4849933a?utm_source=share_via&utm_content=profile&utm_medium=member_android301/",
        
      },
    ],
  },
  {
    name: "Operations Squad",
    tag: "⚙️",
    accent: "#A78BFA",
    accentBg: "rgba(196, 139, 250, 0.95)",
    members: [
      {
        name: "Manjeet",
        role: "President",
        bio: "building on-chain agents & vibing with web3 samaj",
        image: "/team-members/1-manjeet.webp",
        linkedin: "https://www.linkedin.com/in/eren-570b3b30a/",
        instagram: "https://www.instagram.com/errren.dev/",
      },
      {
        name: "Divya Sharma",
        role: "Vice President",
        bio: "Coordinating cross-functional teams and pushing boundaries in project pipelines.",
        image: "/team-members/4-divya-sharma.jpeg",
        linkedin: "https://www.linkedin.com/in/divya-sharma-747a93342/",
        instagram: "https://www.instagram.com/its._divya__sharma?hl=en",
      },
      {
        name: "Bhavit",
        role: "Technical Lead",
        bio: "Leading technical infrastructure and ensuring high availability across all systems.",
        image: "/team-members/6-bhavit.png",
        instagram: "https://www.instagram.com/bhvt.jsx/",
        linkedin: "https://www.linkedin.com/in/bhavit-rajput-10653b389/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Adarsh",
        role: "Event Manager",
        bio: "MERN & PHP-SQL developer with IIT Guwahati Data Science certification, building scalable full-stack and AI-powered solutions while learning TypeScript.",
        image: "/team-members/7-adarsh.jpg",
        instagram: "https://www.instagram.com/adarsh___9777?igsh=MTBzMGp0bGV4aWxxYQ==",
        linkedin: "https://www.linkedin.com/in/adarsh-kumar-srivastava-8198b3387/",
      },
      {
        name: "Akarshit",
        role: "Outreach Head",
        bio: ". Filled with paranoia for developing something which is completely useless. Rest is good. ",
        image: "/team-members/8-akarshit.jpg",
        linkedin: "https://www.linkedin.com/in/akarshit-yadav-7249a7345?utm_source=share&utm_campaign=sha re_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Ram",
        role: "PR Head",
        bio: "Shaping external communications and strengthening the club's public profile.",
        image: null,

      },
    ],
  },
];

function isValidUrl(url?: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  return trimmed.startsWith("http://") || trimmed.startsWith("https://");
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/* ─── SVG Icons ─── */
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/>
    </svg>
  );
}

/* ─── Desktop Card (portrait hover-reveal) ─── */
function DesktopCard({
  member,
  index,
  accentColor,
  accentBg,
}: {
  member: TeamMember;
  index: number;
  accentColor: string;
  accentBg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
      className="group relative w-full aspect-[3/4] overflow-hidden border border-white/10 bg-[#050A14] hover:border-white/30 transition-colors duration-300"
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1120] to-[#131A2E]">
          <span
            className="text-6xl font-black font-syne tracking-tighter opacity-60"
            style={{ color: accentColor }}
          >
            {getInitials(member.name)}
          </span>
          <div className="absolute inset-0 bg-grid-white opacity-30 pointer-events-none" />
        </div>
      )}

      {/* Role badge */}
      <div
        className="absolute top-3 right-3 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold border z-10"
        style={{
          color: accentColor,
          borderColor: accentColor,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
        }}
      >
        {member.role}
      </div>

      {/* Bottom name strip */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl font-bold font-syne text-white uppercase tracking-tight">
          {member.name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-6 border-t-4 border-black"
        style={{ backgroundColor: accentBg }}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          <h3 className="text-2xl md:text-3xl font-black font-syne text-black uppercase tracking-tighter leading-none mb-2">
            {member.name}
          </h3>

          <p className="text-black font-mono font-bold text-sm tracking-widest uppercase mb-3">
            {member.role}
          </p>
          <p className="text-black/80 font-mono text-xs mb-6 leading-relaxed">
            {member.bio}
          </p>
          <SocialLinks member={member} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mobile Card (horizontal layout, always visible info) ─── */
function MobileCard({
  member,
  index,
  accentColor,
}: {
  member: TeamMember;
  index: number;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex gap-4 p-4 border border-white/10 bg-[#050A14]/80 backdrop-blur-sm"
    >
      {/* Avatar */}
      <div
        className="relative w-20 h-20 flex-shrink-0 overflow-hidden border"
        style={{ borderColor: accentColor + "40" }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1120] to-[#131A2E]">
            <span
              className="text-2xl font-black font-syne tracking-tighter opacity-70"
              style={{ color: accentColor }}
            >
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h3 className="text-base font-bold font-syne text-white uppercase tracking-tight truncate">
          {member.name}
        </h3>
        <p
          className="font-mono text-[10px] tracking-widest uppercase font-bold mt-0.5 mb-1.5"
          style={{ color: accentColor }}
        >
          {member.role}
        </p>
        <p className="text-white/50 font-mono text-[11px] leading-relaxed line-clamp-2">
          {member.bio}
        </p>
        <div className="flex gap-2 mt-2">
          <SocialLinksMobile member={member} accentColor={accentColor} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Social Links (Desktop hover overlay) ─── */
function SocialLinks({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-3">
      {isValidUrl(member.github) && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white transition-all duration-200 bg-black/10 p-2 border border-black/20 hover:bg-black hover:scale-110"
        >
          <GitHubIcon className="w-5 h-5" />
        </a>
      )}
      {isValidUrl(member.linkedin) && (
        <a
          href={member.linkedin!.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white transition-all duration-200 bg-black/10 p-2 border border-black/20 hover:bg-black hover:scale-110"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>
      )}
      {isValidUrl(member.instagram) && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white transition-all duration-200 bg-black/10 p-2 border border-black/20 hover:bg-black hover:scale-110"
        >
          <InstagramIcon className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

/* ─── Social Links (Mobile, accent-colored) ─── */
function SocialLinksMobile({
  member,
  accentColor,
}: {
  member: TeamMember;
  accentColor: string;
}) {
  return (
    <>
      {isValidUrl(member.github) && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 border transition-all duration-200 hover:bg-white/10 hover:scale-110"
          style={{ color: accentColor, borderColor: accentColor + "40" }}
        >
          <GitHubIcon className="w-4 h-4" />
        </a>
      )}
      {isValidUrl(member.linkedin) && (
        <a
          href={member.linkedin!.trim()}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 border transition-all duration-200 hover:bg-white/10 hover:scale-110"
          style={{ color: accentColor, borderColor: accentColor + "40" }}
        >
          <LinkedInIcon className="w-4 h-4" />
        </a>
      )}
      {isValidUrl(member.instagram) && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 border transition-all duration-200 hover:bg-white/10 hover:scale-110"
          style={{ color: accentColor, borderColor: accentColor + "40" }}
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
      )}
    </>
  );
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black">
      {/* Banner */}
      <section className="relative w-full h-[45vh] md:h-[65vh] min-h-[320px] md:min-h-[500px] overflow-hidden mt-16">
        <img
          src="/p2.jpeg"
          alt="Quanta Team Background"
          className="w-full h-full object-cover object-[center_30%] opacity-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay pointer-events-none" />

        <div className="absolute bottom-0 left-0 p-5 md:p-12 lg:px-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[#00E5FF]/80 mb-2 md:mb-3"
          >
            {"// Two Squads. One Mission."}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[8rem] font-bold font-syne text-white uppercase tracking-tighter leading-none"
          >
            OUR TEAM<span className="text-[#00E5FF] animate-pulse">_</span>
          </motion.h1>
        </div>
      </section>

      {/* Squads */}
      {squads.map((squad, squadIdx) => (
        <section
          key={squad.name}
          className="w-full py-12 md:py-20 px-4 md:px-12 lg:px-24"
        >
          {/* Squad Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-4"
          >
            <div>
              <span
                className="inline-block font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 md:mb-3 px-2 md:px-3 py-1 border"
                style={{
                  color: squad.accent,
                  borderColor: squad.accent + "40",
                  backgroundColor: squad.accent + "10",
                }}
              >
                Squad {String(squadIdx + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl md:text-5xl font-black font-syne uppercase tracking-tighter text-white/90 flex items-center gap-2 md:gap-4">
                <span>{squad.tag}</span>
                {squad.name}
              </h2>
            </div>
            <span
              className="font-mono tracking-widest uppercase text-xs md:text-sm"
              style={{ color: squad.accent }}
            >
              {`// ${squad.members.length} Members`}
            </span>
          </motion.div>

          {/* Desktop Grid (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {squad.members.map((member, i) => (
              <DesktopCard
                key={member.name}
                member={member}
                index={i}
                accentColor={squad.accent}
                accentBg={squad.accentBg}
              />
            ))}
          </div>

          {/* Mobile List (hidden on desktop) */}
          <div className="flex flex-col gap-3 md:hidden">
            {squad.members.map((member, i) => (
              <MobileCard
                key={member.name}
                member={member}
                index={i}
                accentColor={squad.accent}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
