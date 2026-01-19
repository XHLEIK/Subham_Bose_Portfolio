"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaCode, FaServer, FaPython, FaRocket, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaLightbulb, FaComments, FaUsers, FaCheckCircle, FaDownload, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import FlowingMenu from "@/components/FlowingMenu";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import PixelCard from "@/components/PixelCard";
import GlassSurface from "@/components/GlassSurface";

const fullTimeExperience = [
  {
    role: "Technical Support Engineer",
    company: "Maxbridge Solutions LLP",
    duration: "Jan 04, 2026 – Present",
    location: "Arunachal Pradesh",
    locationType: "On-Site",
    isCurrent: true,
    responsibilities: [
      "System troubleshooting and issue resolution across software and hardware environments",
      "User support, incident handling, and escalation management",
      "Monitoring system performance and maintaining operational stability",
      "Assisting in documentation and internal knowledge base updates"
    ],
    documentLink: "https://www.canva.com/design/DAG-tONseRY/10-a4iTLJxZvfBTdxKWVkw/view?utm_content=DAG-tONseRY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc43c1c442a",
    documentLabel: "Offer Letter",
    variant: "pink" as const
  },
  {
    role: "US IT Recruiter",
    company: "Norlox Solutions Pvt. Ltd.",
    duration: "Oct 2025 – Nov 2025",
    location: "Kolkata",
    locationType: "On-Site",
    isCurrent: false,
    responsibilities: [
      "Coordinated technical hiring processes across US IT roles",
      "Improved understanding of IT skills, tools, and job requirements",
      "Managed end-to-end recruitment lifecycle",
      "Enhanced candidate pipeline efficiency and client satisfaction"
    ],
    documentLink: "https://www.canva.com/design/DAG3K59X0Jc/w-eNVW4u4ZbhiNqXIp3Rpw/view?utlId=h074186c3c4",
    documentLabel: "Offer Letter",
    variant: "blue" as const
  }
];

const internships = [
  {
    role: "Web Developer Intern",
    company: "InternPe",
    duration: "Aug 2025 – Oct 2025",
    location: "Howrah",
    locationType: "Online",
    responsibilities: [
      "Completed 5+ real-world web projects",
      "Built responsive interfaces using HTML, CSS, and JavaScript",
      "Improved frontend structure and code quality"
    ],
    documentLink: "https://www.canva.com/design/DAG3KZEWkLE/_m_6lJMwY-OFKI4MoNN-Sw/view?utlId=hcf8f144ce5",
    documentLabel: "Certificate",
    variant: "yellow" as const
  },
  {
    role: "Backend Developer Intern",
    company: "Gameonix Esports & Gaming",
    duration: "Jun 2025 – Sep 2025",
    location: "Kolkata",
    locationType: "Hybrid",
    responsibilities: [
      "Developed and optimized backend systems using PHP and MySQL",
      "Improved backend performance by approximately 30%",
      "Worked on database queries and API logic"
    ],
    documentLink: "https://www.canva.com/design/DAG3KZEWkLE/_m_6lJMwY-OFKI4MoNN-Sw/view?utlId=hcf8f144ce5",
    documentLabel: "Certificate",
    variant: "default" as const
  }
];

const educationData = [
  {
    year: "2023 – 2026",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Brainware University",
    score: "SGPA: 9.25",
    isCurrent: true
  },
  {
    year: "2021 – 2023",
    degree: "Higher Secondary Examination (Class 12)",
    institution: "Uttarpara Govt. High School",
    board: "WBCHSE",
    field: "Commerce",
    score: "89%",
    isCurrent: false
  },
  {
    year: "2015 – 2021",
    degree: "Secondary Examination (Class 10)",
    institution: "Ramakrishna Vivekananda Mission, Barrackpore",
    board: "WBBSE",
    field: "General",
    score: "77%",
    isCurrent: false
  }
];

const flowingMenuItems = [
  { link: "#backend", text: "Backend Developer", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" },
  { link: "#mern", text: "MERN Stack", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop" },
  { link: "#languages", text: "Python & JavaScript", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop" },
  { link: "#learning", text: "Quick Learner", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" }
];

const socialLinks = [
  {
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    href: "https://github.com/XHLEIK",
    color: "hover:bg-zinc-700 hover:border-zinc-500"
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/subham-bose-ba4130350/",
    color: "hover:bg-blue-600/20 hover:border-blue-500"
  },
  {
    icon: <FaFacebook className="text-xl" />,
    label: "Facebook",
    href: "https://www.facebook.com/suvam.bose629",
    color: "hover:bg-blue-500/20 hover:border-blue-400"
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    label: "Email",
    href: "mailto:subhooo224@gmail.com",
    color: "hover:bg-pink-500/20 hover:border-pink-500"
  }
];

const techStack = [
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
  { icon: <SiReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <SiExpress />, name: "Express", color: "text-white" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-300" },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen pt-20 px-6 py-12 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* About Me Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </motion.div>

          {/* Professional Bio */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-4">
                Hi there! I'm <span className="text-white font-semibold">Subham Bose</span>, an aspiring 
                <span className="text-purple-400 font-medium"> Software Engineer</span> with a passion for 
                building scalable web applications and backend systems.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                With hands-on experience in the MERN stack and a strong foundation in system design, 
                I love turning complex problems into elegant, efficient solutions. My journey in tech 
                has been driven by curiosity and a commitment to continuous learning.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or diving deep into the latest trends in web development and software architecture.
              </p>
              
              {/* Personal Info & Download CV */}
              <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-zinc-400">
                  <FaCalendarAlt className="text-purple-400" />
                  <span className="text-sm">Born: <span className="text-white">29th November 2004</span></span>
                </div>
                <div className="flex-1" />
                <a
                  href="/Subham Bose CV.pdf"
                  download="Subham_Bose_CV.pdf"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <FaDownload className="text-sm" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* What I Do - FlowingMenu */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              What I Do
            </h2>
            <div className="h-[400px] md:h-[450px] relative">
              <FlowingMenu
                items={flowingMenuItems}
                speed={12}
                textColor="#ffffff"
                bgColor="transparent"
                marqueeBgColor="#a855f7"
                marqueeTextColor="#ffffff"
                borderColor="rgba(255,255,255,0.1)"
              />
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <GlassSurface
                    width="auto"
                    height={44}
                    borderRadius={12}
                    className="px-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
                      <span className="text-sm text-zinc-300">{tech.name}</span>
                    </div>
                  </GlassSurface>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Goals Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FaRocket className="text-cyan-400" />
              What I&apos;m Looking For
            </h2>
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Seeking Backend & Technical Support Roles that Build Reliable Systems
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                I&apos;m pursuing <span className="text-cyan-400 font-medium">Backend Developer</span> or <span className="text-cyan-400 font-medium">Technical Support Engineer</span> positions where I can troubleshoot complex issues, optimize backend performance, and build scalable APIs. Open to on-site or hybrid opportunities; aiming to grow into systems architecture and DevOps within 12–18 months.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Backend Development', 'Technical Support', 'Node.js', 'System Troubleshooting', 'API Development', 'MongoDB'].map((keyword, i) => (
                  <GlassSurface 
                    key={i}
                    width="auto" 
                    height={32} 
                    borderRadius={16}
                    className="px-3"
                  >
                    <span className="text-cyan-300 text-xs font-medium">{keyword}</span>
                  </GlassSurface>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FaUsers className="text-pink-400" />
              Soft Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Problem Solving</h4>
                    <p className="text-zinc-400 text-sm">Debugged backend bottleneck, improving system performance by 30%.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <FaComments className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Communication</h4>
                    <p className="text-zinc-400 text-sm">Documented troubleshooting guides and led knowledge-sharing sessions.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Team Collaboration</h4>
                    <p className="text-zinc-400 text-sm">Coordinated with cross-functional teams to deliver releases on schedule.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ownership</h4>
                    <p className="text-zinc-400 text-sm">Maintained production backend systems independently for 3+ months.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-500 italic">
              <span className="text-purple-400 font-medium">How I apply them:</span> Quick debugging, clear documentation, proactive follow-ups.
            </p>
          </motion.div>

          {/* Education Section */}
          <div className="mb-12">
            <ScrollStack
              cardHeight={220}
              title={
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <FaGraduationCap className="text-purple-400" />
                  Education
                </h2>
              }
            >
              {educationData.map((edu, index) => (
                <ScrollStackItem
                  key={index}
                  itemClassName={`bg-gradient-to-br ${
                    edu.isCurrent 
                      ? 'from-purple-900/50 to-pink-900/50 border-2 border-purple-500/60' 
                      : 'from-zinc-900/80 to-zinc-800/80 border border-white/15'
                  } backdrop-blur-md h-full`}
                >
                  <div className="flex flex-col h-full justify-center">
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                        edu.isCurrent 
                          ? 'bg-purple-500/30 text-purple-300 border border-purple-400/50' 
                          : 'bg-white/10 text-zinc-300 border border-white/20'
                      }`}>
                        {edu.year}
                      </span>
                      {edu.isCurrent && (
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-medium animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    
                    {/* Degree */}
                    <h3 className={`text-lg md:text-xl font-bold mb-2 ${
                      edu.isCurrent ? 'text-white' : 'text-zinc-200'
                    }`}>
                      {edu.degree}
                    </h3>
                    
                    {/* Institution */}
                    <p className="text-zinc-400 text-sm md:text-base mb-3">
                      {edu.institution}
                    </p>
                    
                    {/* Details Row */}
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      {edu.board && (
                        <span className="px-3 py-1 bg-white/5 rounded-lg text-zinc-400">
                          {edu.board}
                        </span>
                      )}
                      {edu.field && (
                        <span className="px-3 py-1 bg-white/5 rounded-lg text-zinc-400">
                          {edu.field}
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-lg font-semibold ${
                        edu.isCurrent 
                          ? 'bg-purple-500/20 text-purple-300' 
                          : 'bg-cyan-500/10 text-cyan-400'
                      }`}>
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

          {/* Work Experience Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <FaBriefcase className="text-pink-400" />
              Work Experience
            </h2>

            {/* Full-Time Experience */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-zinc-300 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                Full-Time Experience
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {fullTimeExperience.map((exp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <PixelCard
                      variant={exp.variant}
                      className="w-full"
                    >
                      <div className="relative z-10 p-5 flex flex-col h-full">
                        {/* Header Row */}
                        <div className="flex items-center gap-2 mb-3">
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 bg-green-500/30 border border-green-500/50 rounded-full text-green-400 text-[10px] font-bold uppercase tracking-wide animate-pulse">
                              Current
                            </span>
                          )}
                          <span className="px-2 py-0.5 bg-white/10 rounded-full text-zinc-400 text-[10px] uppercase tracking-wide">
                            {exp.locationType}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <h4 className="text-lg font-bold text-white mb-1 leading-tight">{exp.role}</h4>
                        <p className="text-purple-300 font-medium text-sm mb-3">{exp.company}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 mb-3 text-xs text-zinc-400">
                          <span className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded">
                            <FaCalendarAlt className="text-[10px]" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded">
                            <FaMapMarkerAlt className="text-[10px]" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Responsibilities - Compact */}
                        <ul className="space-y-1.5 text-xs text-zinc-300 mb-4">
                          {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span className="line-clamp-1">{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Document Link */}
                        <a
                          href={exp.documentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-lg text-purple-300 text-xs font-medium hover:border-purple-400 hover:text-white transition-all duration-300 w-fit"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          {exp.documentLabel}
                        </a>
                      </div>
                    </PixelCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-300 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                Internships
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {internships.map((exp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <PixelCard
                      variant={exp.variant}
                      className="w-full"
                    >
                      <div className="relative z-10 p-5 flex flex-col h-full">
                        {/* Header */}
                        <span className="px-2 py-0.5 bg-white/10 rounded-full text-zinc-400 text-[10px] uppercase tracking-wide w-fit mb-3">
                          {exp.locationType}
                        </span>

                        {/* Role & Company */}
                        <h4 className="text-lg font-bold text-white mb-1 leading-tight">{exp.role}</h4>
                        <p className="text-cyan-300 font-medium text-sm mb-3">{exp.company}</p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 mb-3 text-xs text-zinc-400">
                          <span className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded">
                            <FaCalendarAlt className="text-[10px]" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded">
                            <FaMapMarkerAlt className="text-[10px]" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Responsibilities - Compact */}
                        <ul className="space-y-1.5 text-xs text-zinc-300 mb-4">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              <span className="line-clamp-1">{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Document Link */}
                        <a
                          href={exp.documentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-lg text-cyan-300 text-xs font-medium hover:border-cyan-400 hover:text-white transition-all duration-300 w-fit"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          {exp.documentLabel}
                        </a>
                      </div>
                    </PixelCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Let&apos;s build something reliable together.
              </h2>
              <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
                I&apos;m open to full-time backend or support roles that solve real technical challenges. Quick replies; available for interviews.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href="mailto:subhooo224@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  <FaEnvelope />
                  Contact Me
                </a>
                <a
                  href="/Subham Bose CV.pdf"
                  download="Subham_Bose_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>
              <p className="text-sm text-zinc-500">
                Or connect via{' '}
                <a href="https://www.linkedin.com/in/subham-bose-ba4130350/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  LinkedIn
                </a>
                {' '}·{' '}
                <a href="mailto:subhooo224@gmail.com" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  subhooo224@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500" />
              My Location
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Map Container */}
              <div className="relative w-full h-[300px] md:h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5!2d88.3367!3d22.6544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7c3b1c5b1b%3A0x1234567890abcdef!2sRamachandrapur%2C%20Bally%2C%20Howrah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1705574400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="grayscale"
                />
                {/* Map Overlay for dark theme */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Address Details */}
              <div className="p-6 bg-zinc-900/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      135 Ashutosh Sarnai,<br />
                      Bally, Ramachandrapure,<br />
                      Howrah, West Bengal<br />
                      <span className="text-purple-400 font-medium">PIN CODE - 711205</span>
                    </p>
                  </div>
                </div>
                
                {/* Quick Action */}
                <motion.a
                  href="https://www.google.com/maps/search/135+Ashutosh+Sarnai+Bally+Ramachandrapure+Howrah+West+Bengal+711205"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-purple-300 hover:text-white hover:border-purple-400 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="font-medium text-sm">Open in Google Maps</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Spacing */}
          <div className="h-20"></div>
        </motion.div>
      </div>

      {/* Mobile Profile Section (shown only on mobile when sidebar is hidden) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-t border-white/10 p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
              <img src="/profile.webp" alt="Subham Bose" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Subham Bose</p>
              <p className="text-xs text-zinc-500">Software Engineer</p>
            </div>
          </div>
          <a 
            href="mailto:subhooo224@gmail.com"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
