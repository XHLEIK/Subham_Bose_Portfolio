"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import LanyardSidebar from "@/components/LanyardSidebar";

const AnimatedProfileCard: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // LanyardSidebar for non-home pages (tablet and desktop only)
  // The sidebar is hidden on mobile (below md breakpoint) via CSS
  if (!isHome) {
    return <LanyardSidebar />;
  }

  // Return null for home page - ProfileCard is rendered in page.tsx
  return null;
};

export default AnimatedProfileCard;
