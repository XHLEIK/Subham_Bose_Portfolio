"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaHome, FaUser, FaProjectDiagram, FaGamepad, FaEnvelope, FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Dock, { type DockItemData } from "@/components/Dock";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/XHLEIK",
    label: "GitHub",
    color: "hover:text-white hover:border-zinc-400",
    bgHover: "hover:bg-zinc-600/50"
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/subham-bose-ba4130350/",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-400",
    bgHover: "hover:bg-blue-500/20"
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/suvam.bose629",
    label: "Facebook",
    color: "hover:text-blue-500 hover:border-blue-500",
    bgHover: "hover:bg-blue-400/20"
  },
  {
    icon: HiMail,
    href: "mailto:subhooo224@gmail.com",
    label: "Email",
    color: "hover:text-pink-400 hover:border-pink-400",
    bgHover: "hover:bg-pink-400/20"
  }
];

const MobileNav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Prefetch all routes on mount for instant navigation
  useEffect(() => {
    const routes = ["/", "/about", "/projects", "/beyond", "/contact"];
    routes.forEach(route => router.prefetch(route));
  }, [router]);

  // Navigation items for the Dock
  const navItems: DockItemData[] = [
    {
      icon: <FaHome size={20} className={pathname === "/" ? "text-purple-400" : "text-zinc-300"} />,
      label: "Home",
      onClick: () => router.push("/"),
      className: pathname === "/" ? "!border-purple-500" : ""
    },
    {
      icon: <FaUser size={18} className={pathname === "/about" ? "text-purple-400" : "text-zinc-300"} />,
      label: "About",
      onClick: () => router.push("/about"),
      className: pathname === "/about" ? "!border-purple-500" : ""
    },
    {
      icon: <FaProjectDiagram size={18} className={pathname === "/projects" ? "text-purple-400" : "text-zinc-300"} />,
      label: "Projects",
      onClick: () => router.push("/projects"),
      className: pathname === "/projects" ? "!border-purple-500" : ""
    },
    {
      icon: <FaGamepad size={18} className={pathname === "/beyond" ? "text-purple-400" : "text-zinc-300"} />,
      label: "Beyond",
      onClick: () => router.push("/beyond"),
      className: pathname === "/beyond" ? "!border-purple-500" : ""
    },
    {
      icon: <FaEnvelope size={18} className={pathname === "/contact" ? "text-purple-400" : "text-zinc-300"} />,
      label: "Contact",
      onClick: () => router.push("/contact"),
      className: pathname === "/contact" ? "!border-purple-500" : ""
    }
  ];

  return (
    <>
      {/* Hamburger Menu Button - Fixed top left */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-[60] p-3 rounded-xl bg-zinc-900/90 border border-zinc-700 backdrop-blur-md md:hidden"
        aria-label="Open menu"
      >
        <FaBars size={20} className="text-white" />
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full w-[300px] bg-zinc-900/95 border-r border-zinc-700 backdrop-blur-xl z-[80] md:hidden overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-colors"
                aria-label="Close menu"
              >
                <FaTimes size={18} className="text-white" />
              </button>

              {/* Profile Section - ID Card Style */}
              <div className="pt-16 px-6">
                {/* Year badge */}
                <div className="text-right text-[10px] font-mono text-zinc-500 tracking-widest mb-2">
                  DEV • 2026
                </div>

                {/* Profile Photo */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 rounded-xl" />
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-zinc-500 bg-zinc-800">
                      <Image
                        src="/profile.webp"
                        alt="Subham Bose"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    {/* Status badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-emerald-500/30 border border-emerald-400/60 rounded-full backdrop-blur-sm">
                      <span className="text-emerald-400 text-[9px] font-bold flex items-center gap-1.5 tracking-wide">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-white tracking-wider">SUBHAM BOSE</h2>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400" />
                    <p className="text-xs text-purple-400 font-semibold tracking-widest uppercase">Software Engineer</p>
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400" />
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-1 font-mono">ID: SE-2024-001</p>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
                </div>

                {/* Stats Section */}
                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700/50 shadow-inner mb-5">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">10+</p>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Projects</p>
                    </div>
                    <div className="text-center border-x border-zinc-700">
                      <p className="text-lg font-bold text-white">2+</p>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Years</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">5+</p>
                      <p className="text-[9px] text-zinc-500 uppercase tracking-wider">Stack</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className={`w-10 h-10 rounded-lg bg-zinc-800/90 border border-zinc-600/50 flex items-center justify-center text-zinc-400 transition-all duration-200 shadow-md hover:scale-110 ${social.color} ${social.bgHover}`}
                      title={social.label}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Navigation</p>
                  {[
                    { label: "Home", href: "/", icon: FaHome },
                    { label: "About", href: "/about", icon: FaUser },
                    { label: "Projects", href: "/projects", icon: FaProjectDiagram },
                    { label: "Beyond Code", href: "/beyond", icon: FaGamepad },
                    { label: "Contact", href: "/contact", icon: FaEnvelope }
                  ].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        router.push(item.href);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-purple-500/20 border border-purple-500/50 text-purple-400"
                          : "bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-700/50"
                      }`}
                    >
                      <item.icon size={16} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Barcode section */}
                <div className="mt-8 pb-6">
                  <div className="flex items-center justify-center gap-[2px] opacity-40">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-zinc-400"
                        style={{ 
                          width: `${i % 2 === 0 ? 2 : 1}px`, 
                          height: `${12 + (i % 5) * 2}px` 
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-center text-[8px] text-zinc-600 mt-2 font-mono tracking-widest">
                    PORTFOLIO • 2024
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Dock Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-[55] md:hidden flex justify-center pb-safe">
        <Dock
          items={navItems}
          panelHeight={68}
          baseItemSize={48}
          magnification={65}
          distance={120}
          className="bg-zinc-900/90 backdrop-blur-xl"
        />
      </div>
    </>
  );
};

export default MobileNav;
