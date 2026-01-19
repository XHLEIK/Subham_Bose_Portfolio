"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import LaserFlow from "./LaserFlow";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/XHLEIK",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/subham-bose-ba4130350/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/suvam.bose629",
    label: "Facebook",
  },
  {
    icon: FaEnvelope,
    href: "mailto:subhooo224@gmail.com",
    label: "Email",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const techStack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* LaserFlow Background */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          color="#a855f7"
          horizontalBeamOffset={0.0}
          verticalBeamOffset={-0.3}
          verticalSizing={1.5}
          horizontalSizing={0.8}
          wispDensity={0.8}
          wispSpeed={10}
          wispIntensity={3}
          flowSpeed={0.25}
          flowStrength={0.2}
          fogIntensity={0.35}
          fogScale={0.25}
          fogFallSpeed={0.4}
          decay={1.0}
          falloffStart={1.0}
        />
      </div>

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Footer Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Subham Bose
              </span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Software Engineer passionate about building reliable backend systems and crafting exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Howrah, West Bengal, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:subhooo224@gmail.com"
                  className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  <FaEnvelope className="text-purple-400" />
                  subhooo224@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/XHLEIK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  <FaGithub className="text-purple-400" />
                  github.com/XHLEIK
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/subham-bose-ba4130350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  <FaLinkedin className="text-purple-400" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Built With
            </h4>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-zinc-400 text-xs hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200"
                >
                  <tech.icon className="text-sm" />
                  {tech.name}
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-xs mt-4">
              Crafted with care and attention to detail
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                title={social.label}
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-zinc-500 text-sm">
              © {currentYear} Subham Bose. All rights reserved.
            </p>
            <p className="text-zinc-600 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
              Made with <FaHeart className="text-pink-500 text-[10px]" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
