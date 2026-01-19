"use client";

import React from "react";
import { GridScan } from "@/components/GridScan";
import ClickSpark from "@/components/ClickSpark";
import GooeyNav from "@/components/GooeyNav";
import ProfileSidebar from "@/components/ProfileSidebar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Beyond Code", href: "/beyond" },
  { label: "Contact", href: "/contact" },
];

interface PageLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  activeNavIndex?: number;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showSidebar = true,
  activeNavIndex = 0 
}) => {
  return (
    <ClickSpark
      sparkColor="#FF9FFC"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative min-h-screen bg-black font-sans">
        {/* Sticky Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
          <GooeyNav
            items={navItems}
            particleCount={20}
            timeVariance={300}
            particleR={150}
            initialActiveIndex={activeNavIndex}
          />
        </header>
        
        {/* GridScan Background */}
        <div className="fixed inset-0 w-full h-full">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>
        
        {/* Profile Sidebar (shown on non-home pages) */}
        {showSidebar && <ProfileSidebar />}
        
        {/* Main Content */}
        <main className={`relative z-10 pt-20 min-h-screen ${showSidebar ? 'lg:ml-[280px]' : ''}`}>
          {children}
        </main>
      </div>
    </ClickSpark>
  );
};

export default PageLayout;
