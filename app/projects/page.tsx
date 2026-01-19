"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaUser, FaUsers, FaRobot, FaServer, FaFilter, FaRocket } from "react-icons/fa";
import { SiPython, SiNodedotjs, SiMongodb, SiExpress, SiReact, SiSupabase, SiTypescript, SiJavascript, SiOpenai } from "react-icons/si";
import SpotlightCard from "@/components/SpotlightCard";
import ElectricBorder from "@/components/ElectricBorder";
import GlassSurface from "@/components/GlassSurface";

type ProjectType = "solo" | "group";
type ProjectCategory = "ai" | "backend" | "fullstack";

interface Project {
  id: string;
  title: string;
  type: ProjectType;
  tagline: string;
  description: string;
  impact: string;
  impactMetric: string;
  github: string;
  techStack: string[];
  categories: ProjectCategory[];
  spotlightColor: `rgba(${number}, ${number}, ${number}, ${number})`;
  borderColor: string;
}

const projects: Project[] = [
  {
    id: "arise-ai",
    title: "A.R.I.S.E AI",
    type: "solo",
    tagline: "A modular AI assistant for real-time execution",
    description: "Built an intelligent assistant capable of handling real-time tasks, automation, and user queries with natural language processing.",
    impact: "Improved task efficiency and decision-making accuracy",
    impactMetric: "40%",
    github: "https://github.com/XHLEIK/arise-ai",
    techStack: ["Python", "OpenAI", "JavaScript"],
    categories: ["ai"],
    spotlightColor: "rgba(139, 92, 246, 0.25)",
    borderColor: "#8b5cf6"
  },
  {
    id: "cash-mate",
    title: "Cash-Mate",
    type: "group",
    tagline: "Secure, scalable expense management backend",
    description: "Built a secure expense-splitting backend using Node.js, Express, MongoDB, and JWT authentication for seamless transactions.",
    impact: "Improved backend performance & data accuracy",
    impactMetric: "30%",
    github: "https://github.com/Cash-Mate",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    categories: ["backend"],
    spotlightColor: "rgba(34, 197, 94, 0.25)",
    borderColor: "#22c55e"
  },
  {
    id: "calc-ai",
    title: "Cal_c.Ai",
    type: "solo",
    tagline: "Smart calculations with AI reasoning",
    description: "Created an AI-assisted calculator with Supabase authentication and interactive problem-solving capabilities.",
    impact: "Improved calculation speed and user experience",
    impactMetric: "40%",
    github: "https://github.com/XHLEIK/Cal_c.Ai",
    techStack: ["React", "Supabase", "TypeScript", "OpenAI"],
    categories: ["ai", "fullstack"],
    spotlightColor: "rgba(6, 182, 212, 0.25)",
    borderColor: "#06b6d4"
  },
  {
    id: "nezto",
    title: "Nezto",
    type: "group",
    tagline: "Fast, user-friendly service booking platform",
    description: "Built a responsive online booking system for laundry services with optimized frontend UI/UX and seamless user flow.",
    impact: "Reduced booking time & improved interface responsiveness",
    impactMetric: "35%",
    github: "https://github.com/Nezto",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    categories: ["fullstack"],
    spotlightColor: "rgba(236, 72, 153, 0.25)",
    borderColor: "#ec4899"
  },
  {
    id: "face-recognition",
    title: "Face Recognition System",
    type: "solo",
    tagline: "Automated attendance using real-time face recognition",
    description: "Developed a real-time facial recognition system for automated attendance tracking with database integration.",
    impact: "Reduced manual errors & improved real-time updates",
    impactMetric: "90%",
    github: "https://github.com/XHLEIK/face-recognition-with-real-time-data-base",
    techStack: ["Python", "OpenCV", "Firebase"],
    categories: ["ai", "backend"],
    spotlightColor: "rgba(249, 115, 22, 0.25)",
    borderColor: "#f97316"
  }
];

const techIcons: Record<string, React.ReactNode> = {
  "Python": <SiPython className="text-yellow-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "Express": <SiExpress className="text-white" />,
  "React": <SiReact className="text-cyan-400" />,
  "Supabase": <SiSupabase className="text-emerald-400" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "OpenAI": <SiOpenai className="text-white" />,
  "JWT": <FaServer className="text-purple-400" />,
  "OpenCV": <FaRobot className="text-blue-400" />,
  "Firebase": <SiMongodb className="text-orange-400" />
};

type FilterType = "all" | "solo" | "group" | "ai" | "backend";

const filterOptions: { value: FilterType; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All", icon: <FaFilter /> },
  { value: "solo", label: "Solo", icon: <FaUser /> },
  { value: "group", label: "Group", icon: <FaUsers /> },
  { value: "ai", label: "AI", icon: <FaRobot /> },
  { value: "backend", label: "Backend", icon: <FaServer /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "solo") return projects.filter(p => p.type === "solo");
    if (activeFilter === "group") return projects.filter(p => p.type === "group");
    return projects.filter(p => p.categories.includes(activeFilter as ProjectCategory));
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-12 pb-24 overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Page Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects & Case Studies
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Real-world systems I&apos;ve built and improved
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((filter) => (
            <motion.div
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlassSurface
                width="auto"
                height={40}
                borderRadius={20}
                className={`px-4 cursor-pointer transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-black"
                    : ""
                }`}
                style={{
                  background: activeFilter === filter.value 
                    ? "linear-gradient(to right, #a855f7, #ec4899)" 
                    : undefined
                }}
                onClick={() => setActiveFilter(filter.value)}
              >
                <div className={`flex items-center gap-2 text-sm font-medium ${
                  activeFilter === filter.value ? "text-white" : "text-zinc-400"
                }`}>
                  {filter.icon}
                  {filter.label}
                </div>
              </GlassSurface>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              className="h-full"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-3xl"
                tabIndex={0}
              >
                <ElectricBorder
                  color={project.borderColor}
                  speed={hoveredCard === project.id ? 1.5 : 0.5}
                  chaos={hoveredCard === project.id ? 0.15 : 0.08}
                  borderRadius={24}
                  className={`h-full transition-all duration-300 ${
                    hoveredCard === project.id ? "scale-[1.02]" : ""
                  }`}
                >
                  <SpotlightCard
                    spotlightColor={project.spotlightColor}
                    className="h-full min-h-[380px] flex flex-col cursor-pointer"
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm text-zinc-400 italic">
                          {project.tagline}
                        </p>
                      </div>
                      <span
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-3 ${
                          project.type === "solo"
                            ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                            : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        }`}
                      >
                        {project.type === "solo" ? <FaUser className="text-[10px]" /> : <FaUsers className="text-[10px]" />}
                        {project.type === "solo" ? "Solo" : "Group"}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Impact Section */}
                    <div className="bg-white/5 rounded-xl p-4 mb-5 border border-white/10">
                      <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Impact</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {project.impactMetric}
                        </span>
                        <span className="text-sm text-zinc-400">
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-lg text-xs text-zinc-300 border border-white/10"
                        >
                          {techIcons[tech] || null}
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                          <FaGithub />
                          View on GitHub
                          <FaExternalLinkAlt className="text-xs opacity-60" />
                        </span>
                        <motion.div
                          animate={{ x: hoveredCard === project.id ? 5 : 0 }}
                          className="text-purple-400"
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </SpotlightCard>
                </ElectricBorder>
              </a>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            layout
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="h-full"
            onMouseEnter={() => setHoveredCard("coming-soon")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ElectricBorder
              color="#a855f7"
              speed={hoveredCard === "coming-soon" ? 1.5 : 0.5}
              chaos={hoveredCard === "coming-soon" ? 0.15 : 0.08}
              borderRadius={24}
              className={`h-full transition-all duration-300 ${
                hoveredCard === "coming-soon" ? "scale-[1.02]" : ""
              }`}
            >
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.25)"
                className="h-full min-h-[380px] flex flex-col items-center justify-center cursor-default"
              >
                {/* Main Content - Centered */}
                <div className="flex flex-col items-center justify-center">
                  {/* Animated Rocket Icon */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                      <FaRocket className="text-3xl text-purple-400" />
                    </div>
                  </motion.div>

                  {/* Coming Soon Text */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Coming Soon
                  </h3>
                  <p className="text-zinc-400 text-center max-w-[220px] mb-4">
                    More exciting projects are currently in development
                  </p>

                  {/* Animated Dots */}
                  <div className="flex items-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
              </SpotlightCard>
            </ElectricBorder>
          </motion.div>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-zinc-500 text-lg">No projects found for this filter.</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 mb-4">Want to see more or collaborate?</p>
          <a
            href="https://github.com/XHLEIK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            View All Repositories
            <FaExternalLinkAlt className="text-xs opacity-60" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
