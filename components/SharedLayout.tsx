"use client";

import React, { createContext, useState, useEffect, useRef, memo } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import GooeyNav from "@/components/GooeyNav";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ClickSpark from "@/components/ClickSpark";
import AnimatedProfileCard from "@/components/AnimatedProfileCard";

// Dynamically import heavy background components with no SSR
const LiquidEther = dynamic(() => import("@/components/LiquidEther"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

const GridScan = dynamic(() => import("@/components/GridScan").then(mod => ({ default: mod.GridScan })), {
  ssr: false,
  loading: () => null
});

// Context to share footer visibility state with sidebar
export const FooterContext = createContext<{ isFooterVisible: boolean }>({ isFooterVisible: false });

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Beyond Code", href: "/beyond" },
  { label: "Contact", href: "/contact" },
];

// Memoized background component to prevent re-renders on navigation
const BackgroundEffects = memo(function BackgroundEffects() {
  return (
    <>
      {/* LiquidEther Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* GridScan Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[1]">
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
    </>
  );
});

interface SharedLayoutProps {
  children: React.ReactNode;
}

const SharedLayout: React.FC<SharedLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  
  // Determine active nav index
  const activeNavIndex = navItems.findIndex(item => item.href === pathname);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Observe footer visibility for sidebar behavior
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <ClickSpark
      sparkColor="#FF9FFC"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative min-h-screen bg-black font-sans overflow-x-hidden overflow-y-auto">
        {/* Sticky Navigation - Hidden on mobile */}
        <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-4 bg-black/50 backdrop-blur-md border-b border-white/5">
          <GooeyNav
            items={navItems}
            particleCount={20}
            timeVariance={300}
            particleR={150}
            initialActiveIndex={activeNavIndex >= 0 ? activeNavIndex : 0}
          />
        </header>

        {/* Mobile Navigation - Hamburger + Dock */}
        <MobileNav />

        {/* Memoized Background Effects */}
        <BackgroundEffects />

        {/* Animated Profile Sidebar (for non-home pages) */}
        <FooterContext.Provider value={{ isFooterVisible }}>
          <AnimatedProfileCard />
        </FooterContext.Provider>

        {/* Main Content with margin adjustment for sidebar */}
        <main
          className={`relative z-10 pb-24 md:pb-0 ${!isHome ? "md:ml-[320px]" : ""}`}
        >
          {children}
        </main>

        {/* Footer - Full width, above sidebar */}
        <div ref={footerRef} className="relative z-50 w-full">
          <Footer />
        </div>
      </div>
    </ClickSpark>
  );
};

export default SharedLayout;
