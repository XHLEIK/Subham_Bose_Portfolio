"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

interface ProfileSidebarProps {
  isCollapsed?: boolean;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ isCollapsed = true }) => {
  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        duration: 0.6 
      }}
      className="fixed left-0 top-0 h-screen w-[280px] bg-black/40 backdrop-blur-xl border-r border-white/10 z-40 pt-20 px-4 hidden lg:flex flex-col"
    >
      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative mx-auto mb-6"
      >
        <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-purple-500/20">
          <Image
            src="/profile.webp"
            alt="Subham Bose"
            width={180}
            height={180}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        {/* Status indicator */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
          <span className="text-green-400 text-xs font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available
          </span>
        </div>
      </motion.div>

      {/* Name & Title */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-xl font-bold text-white mb-1">Subham Bose</h2>
        <p className="text-sm text-zinc-400">Software Engineer</p>
        <p className="text-xs text-zinc-500 mt-1">@SubhamBose</p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex justify-center gap-6 mb-6 pb-6 border-b border-white/10"
      >
        <div className="text-center">
          <p className="text-lg font-bold text-white">10+</p>
          <p className="text-xs text-zinc-500">Projects</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-white">2+</p>
          <p className="text-xs text-zinc-500">Years Exp</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-white">5+</p>
          <p className="text-xs text-zinc-500">Tech Stack</p>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center gap-3"
      >
        <a 
          href="https://github.com/XHLEIK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
        >
          <FaGithub className="text-lg" />
        </a>
        <a 
          href="https://www.linkedin.com/in/subham-bose-ba4130350/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
        >
          <FaLinkedin className="text-lg" />
        </a>
        <a 
          href="https://www.facebook.com/suvam.bose629" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
        >
          <FaFacebook className="text-lg" />
        </a>
        <a 
          href="mailto:subhooo224@gmail.com"
          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300"
        >
          <FaEnvelope className="text-lg" />
        </a>
      </motion.div>

      {/* Bottom decoration */}
      <div className="mt-auto pb-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </motion.aside>
  );
};

export default ProfileSidebar;
