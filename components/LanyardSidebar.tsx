"use client";

import React, { useRef, useEffect, useState, useCallback, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FooterContext } from "@/components/SharedLayout";

interface LanyardSidebarProps {
  className?: string;
}

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
    icon: FaEnvelope,
    href: "mailto:subhooo224@gmail.com",
    label: "Email",
    color: "hover:text-pink-400 hover:border-pink-400",
    bgHover: "hover:bg-pink-400/20"
  }
];

// Fixed barcode pattern to avoid hydration mismatch
const barcodePattern = [
  { w: 2, h: 14 }, { w: 1, h: 18 }, { w: 2, h: 12 }, { w: 1, h: 16 },
  { w: 2, h: 19 }, { w: 1, h: 13 }, { w: 2, h: 17 }, { w: 1, h: 14 },
  { w: 2, h: 15 }, { w: 1, h: 18 }, { w: 2, h: 12 }, { w: 1, h: 16 },
  { w: 2, h: 19 }, { w: 1, h: 13 }, { w: 2, h: 15 }, { w: 1, h: 17 },
  { w: 2, h: 14 }, { w: 1, h: 18 }, { w: 2, h: 12 }, { w: 1, h: 15 },
  { w: 2, h: 17 }, { w: 1, h: 14 }, { w: 2, h: 19 }, { w: 1, h: 13 },
  { w: 2, h: 16 }, { w: 1, h: 18 }, { w: 2, h: 14 }, { w: 1, h: 15 },
  { w: 2, h: 17 }, { w: 1, h: 13 }
];

// Physics constants
const GRAVITY = 0.5;
const DAMPING = 0.92;
const SPRING_STIFFNESS = 0.08;
const STRING_REST_LENGTH = 160;
const STRING_MAX_STRETCH = 1.4;
const BOUNCE_FACTOR = 0.3;

interface PhysicsState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  angularVelocity: number;
}

const LanyardSidebar: React.FC<LanyardSidebarProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  
  // Anchor point (fixed at top center of sidebar)
  const anchorPoint = { x: 160, y: 64 }; // Center of 320px width, 64px from top
  
  // Resting position (where card naturally hangs)
  const restingPosition = { x: 160, y: anchorPoint.y + STRING_REST_LENGTH };
  
  // Physics state stored in ref to avoid re-renders during animation
  const physicsRef = useRef<PhysicsState>({
    x: restingPosition.x,
    y: restingPosition.y,
    vx: 0,
    vy: 0,
    rotation: 0,
    angularVelocity: 0
  });
  
  // Track if physics is at rest
  const isAtRest = useRef(true);
  
  // Calculate string path with sag and stretch
  const calculateStringPath = useCallback((cardX: number, cardY: number) => {
    const dx = cardX - anchorPoint.x;
    const dy = cardY - anchorPoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Calculate sag based on horizontal offset and tension
    const tension = Math.min(distance / STRING_REST_LENGTH, STRING_MAX_STRETCH);
    const sagAmount = Math.max(0, 30 * (1 - tension * 0.5)) * (1 - Math.abs(dx) / 150);
    
    // Control point for quadratic bezier (creates sag)
    const midX = (anchorPoint.x + cardX) / 2;
    const midY = (anchorPoint.y + cardY) / 2 + sagAmount;
    
    // Add slight curve based on horizontal movement
    const curveOffset = dx * 0.15;
    
    return `M ${anchorPoint.x} ${anchorPoint.y} Q ${midX + curveOffset} ${midY}, ${cardX} ${cardY - 12}`;
  }, [anchorPoint.x, anchorPoint.y]);
  
  // Refs for DOM elements to update directly without state
  const stringRef = useRef<SVGPathElement>(null);
  const stringHighlightRef = useRef<SVGPathElement>(null);
  
  // Physics simulation using requestAnimationFrame
  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (isDragging.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      const prev = physicsRef.current;
      let { x, y, vx, vy, rotation, angularVelocity } = prev;
      
      // Check if at rest - skip update if velocities are negligible
      const atRest = 
        Math.abs(vx) < 0.01 && 
        Math.abs(vy) < 0.01 && 
        Math.abs(angularVelocity) < 0.01 &&
        Math.abs(x - restingPosition.x) < 0.5 &&
        Math.abs(y - restingPosition.y) < 0.5;
      
      if (atRest) {
        if (!isAtRest.current) {
          // Snap to rest position
          physicsRef.current = {
            x: restingPosition.x,
            y: restingPosition.y,
            vx: 0,
            vy: 0,
            rotation: 0,
            angularVelocity: 0
          };
          isAtRest.current = true;
          
          // Update string path directly via DOM
          const path = calculateStringPath(restingPosition.x, restingPosition.y);
          if (stringRef.current) stringRef.current.setAttribute('d', path);
          if (stringHighlightRef.current) stringHighlightRef.current.setAttribute('d', path);
          
          // Update card position via DOM
          if (cardRef.current) {
            cardRef.current.style.transform = `translate(-50%, 0) rotate(0deg)`;
            cardRef.current.style.left = `${restingPosition.x}px`;
            cardRef.current.style.top = `${restingPosition.y}px`;
          }
        }
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      isAtRest.current = false;
      
      // Calculate distance from anchor
      const dx = x - anchorPoint.x;
      const dy = y - anchorPoint.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Spring force towards resting position
      const restDx = restingPosition.x - x;
      const restDy = restingPosition.y - y;
      
      // Apply spring force
      const springForceX = restDx * SPRING_STIFFNESS;
      const springForceY = restDy * SPRING_STIFFNESS;
      
      // Apply gravity
      const gravityForce = GRAVITY;
      
      // Elastic constraint - if stretched beyond max, apply strong pull back
      const maxDistance = STRING_REST_LENGTH * STRING_MAX_STRETCH;
      if (distance > maxDistance) {
        const pullBack = (distance - maxDistance) * 0.3;
        const angle = Math.atan2(dy, dx);
        vx -= Math.cos(angle) * pullBack;
        vy -= Math.sin(angle) * pullBack;
      }
      
      // Update velocities
      vx += springForceX;
      vy += springForceY + gravityForce;
      
      // Apply damping
      vx *= DAMPING;
      vy *= DAMPING;
      
      // Update position
      x += vx;
      y += vy;
      
      // Calculate rotation based on horizontal velocity and position
      const targetRotation = (dx / 100) * 15 + (vx * 2);
      angularVelocity += (targetRotation - rotation) * 0.1;
      angularVelocity *= 0.85;
      rotation += angularVelocity;
      
      // Clamp rotation
      rotation = Math.max(-25, Math.min(25, rotation));
      
      // Clamp position to prevent going above anchor
      if (y < anchorPoint.y + 50) {
        y = anchorPoint.y + 50;
        vy = Math.abs(vy) * BOUNCE_FACTOR;
      }
      
      // Horizontal bounds
      const maxX = 280;
      const minX = 40;
      if (x > maxX) {
        x = maxX;
        vx = -vx * BOUNCE_FACTOR;
      }
      if (x < minX) {
        x = minX;
        vx = -vx * BOUNCE_FACTOR;
      }
      
      // Vertical bounds
      const maxY = anchorPoint.y + maxDistance;
      if (y > maxY) {
        y = maxY;
        vy = -vy * BOUNCE_FACTOR;
      }
      
      // Update ref (no re-render)
      physicsRef.current = { x, y, vx, vy, rotation, angularVelocity };
      
      // Update string path directly via DOM (no state update)
      const path = calculateStringPath(x, y);
      if (stringRef.current) stringRef.current.setAttribute('d', path);
      if (stringHighlightRef.current) stringHighlightRef.current.setAttribute('d', path);
      
      // Update card position directly via DOM
      if (cardRef.current) {
        cardRef.current.style.transform = `translate(-50%, 0) rotate(${rotation}deg)`;
        cardRef.current.style.left = `${x}px`;
        cardRef.current.style.top = `${y}px`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [anchorPoint.x, anchorPoint.y, restingPosition.x, restingPosition.y, calculateStringPath]);
  
  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!cardRef.current) return;
    
    isDragging.current = true;
    const rect = cardRef.current.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    
    if (containerRect) {
      dragOffset.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top
      };
    }
    
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - dragOffset.current.x;
    const newY = e.clientY - containerRect.top - dragOffset.current.y;
    
    // Calculate distance from anchor
    const dx = newX - anchorPoint.x;
    const dy = newY - anchorPoint.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Apply elastic constraint during drag
    const maxDragDistance = STRING_REST_LENGTH * STRING_MAX_STRETCH;
    let constrainedX = newX;
    let constrainedY = newY;
    
    if (distance > maxDragDistance) {
      const angle = Math.atan2(dy, dx);
      constrainedX = anchorPoint.x + Math.cos(angle) * maxDragDistance;
      constrainedY = anchorPoint.y + Math.sin(angle) * maxDragDistance;
    }
    
    // Calculate rotation based on drag position
    const rotation = ((constrainedX - anchorPoint.x) / 100) * 15;
    const clampedRotation = Math.max(-25, Math.min(25, rotation));
    const clampedY = Math.max(anchorPoint.y + 50, constrainedY);
    
    const prev = physicsRef.current;
    physicsRef.current = {
      ...prev,
      x: constrainedX,
      y: clampedY,
      vx: (constrainedX - prev.x) * 0.5,
      vy: (constrainedY - prev.y) * 0.5,
      rotation: clampedRotation
    };
    isAtRest.current = false;
    
    // Update DOM directly during drag
    const path = calculateStringPath(constrainedX, clampedY);
    if (stringRef.current) stringRef.current.setAttribute('d', path);
    if (stringHighlightRef.current) stringHighlightRef.current.setAttribute('d', path);
    
    if (cardRef.current) {
      cardRef.current.style.transform = `translate(-50%, 0) rotate(${clampedRotation}deg)`;
      cardRef.current.style.left = `${constrainedX}px`;
      cardRef.current.style.top = `${clampedY}px`;
    }
  };
  
  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    
    // Give initial velocity for bounce effect - just update refs, animation loop handles the rest
    const prev = physicsRef.current;
    physicsRef.current = {
      ...prev,
      vx: prev.vx * 1.5,
      vy: prev.vy * 1.5
    };
    isAtRest.current = false;
  };
  
  // Calculate initial string path
  const initialStringPath = calculateStringPath(restingPosition.x, restingPosition.y);

  // Get footer visibility from context
  const { isFooterVisible } = useContext(FooterContext);

  return (
    <motion.aside
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ 
        x: isFooterVisible ? -350 : 0, 
        opacity: isFooterVisible ? 0 : 1 
      }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.2 },
        x: {
          type: "spring",
          stiffness: 70,
          damping: 18,
        }
      }}
      className={`fixed left-0 top-0 h-screen w-[320px] z-40 pt-16 px-4 hidden md:flex flex-col items-center ${className}`}
    >
      {/* Lanyard String - Always attached, with elastic behavior */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="stringGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <filter id="stringShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.5"/>
          </filter>
        </defs>
        
        {/* Main string */}
        <path
          ref={stringRef}
          d={initialStringPath}
          stroke="url(#stringGradient)"
          strokeWidth={4}
          strokeLinecap="round"
          fill="none"
          filter="url(#stringShadow)"
        />
        
        {/* String highlight */}
        <path
          ref={stringHighlightRef}
          d={initialStringPath}
          stroke="rgba(255,255,255,0.25)"
          strokeWidth={1}
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Anchor point visual */}
        <circle
          cx={anchorPoint.x}
          cy={anchorPoint.y}
          r="8"
          fill="url(#stringGradient)"
          filter="url(#stringShadow)"
        />
        <circle
          cx={anchorPoint.x}
          cy={anchorPoint.y}
          r="4"
          fill="#1f1f23"
        />
      </svg>

      {/* ID Card with Physics */}
      <div
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          position: 'absolute',
          left: restingPosition.x,
          top: restingPosition.y,
          transform: `translate(-50%, 0) rotate(0deg)`,
          transformOrigin: 'top center',
          cursor: 'grab',
          touchAction: 'none',
          userSelect: 'none',
          zIndex: 30
        }}
      >
        {/* Card hole for string attachment */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-900 border-[3px] border-zinc-600 shadow-inner z-10">
          <div className="absolute inset-1 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900" />
        </div>

        {/* Main Metallic ID Card */}
        <div className="relative w-[250px] overflow-hidden rounded-xl shadow-2xl shadow-black/60">
          {/* Metallic base layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900" />
          
          {/* Metallic shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15),_transparent_50%)]" />
          
          {/* Card border with metallic effect */}
          <div className="absolute inset-0 border border-zinc-500/30 rounded-xl" />
          <div className="absolute inset-[1px] border border-zinc-800/50 rounded-xl" />

          {/* Content wrapper */}
          <div className="relative">
            {/* Top accent bar */}
            <div className="h-2 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" />

            {/* Year badge */}
            <div className="absolute top-4 right-3 text-[8px] font-mono text-zinc-500 tracking-widest">
              DEV • 2026
            </div>
            
            {/* Profile Section */}
            <div className="relative pt-5 pb-3 flex justify-center">
              <div className="relative">
                {/* Photo with metallic frame */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-700 rounded-lg" />
                  <div className="relative w-[90px] h-[90px] rounded-lg overflow-hidden border-2 border-zinc-500 bg-zinc-800">
                    <Image
                      src="/profile.webp"
                      alt="Subham Bose"
                      width={90}
                      height={90}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-emerald-500/30 border border-emerald-400/60 rounded-full backdrop-blur-sm">
                  <span className="text-emerald-400 text-[8px] font-bold flex items-center gap-1 tracking-wide">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    ACTIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="text-center px-4 pb-2">
              <h2 className="text-lg font-bold text-white tracking-wider drop-shadow-lg">SUBHAM BOSE</h2>
              <div className="flex items-center justify-center gap-2 mt-0.5">
                <div className="h-px w-5 bg-gradient-to-r from-transparent to-purple-400" />
                <p className="text-[10px] text-purple-400 font-semibold tracking-widest uppercase">Software Engineer</p>
                <div className="h-px w-5 bg-gradient-to-l from-transparent to-purple-400" />
              </div>
              <p className="text-[9px] text-zinc-500 mt-0.5 font-mono">ID: SE-2024-001</p>
            </div>

            {/* Metallic divider */}
            <div className="mx-4 flex items-center gap-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
              <div className="w-1 h-1 rounded-full bg-zinc-500" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
            </div>

            {/* Stats Section with metallic inset */}
            <div className="mx-3 my-2 p-2 bg-zinc-900/80 rounded-lg border border-zinc-700/50 shadow-inner">
              <div className="grid grid-cols-3 gap-1">
                <div className="text-center">
                  <p className="text-sm font-bold text-white">10+</p>
                  <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Projects</p>
                </div>
                <div className="text-center border-x border-zinc-700">
                  <p className="text-sm font-bold text-white">2+</p>
                  <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-white">5+</p>
                  <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Stack</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-2 py-2 px-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  onClick={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                  className={`w-8 h-8 rounded-md bg-zinc-800/90 border border-zinc-600/50 flex items-center justify-center text-zinc-400 transition-all duration-200 shadow-md hover:scale-110 ${social.color} ${social.bgHover}`}
                  title={social.label}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* Barcode section */}
            <div className="px-4 pb-2">
              <div className="flex items-center justify-center gap-[2px] opacity-50">
                {barcodePattern.map((bar, i) => (
                  <div
                    key={i}
                    className="bg-zinc-400"
                    style={{ width: `${bar.w}px`, height: `${bar.h}px` }}
                  />
                ))}
              </div>
              <p className="text-center text-[7px] text-zinc-600 mt-1 font-mono tracking-widest">
                PORTFOLIO • 2024
              </p>
            </div>

            {/* Bottom metallic accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" />
          </div>
        </div>
      </div>

      {/* Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] text-zinc-600 text-center flex items-center gap-1.5"
      >
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        Drag card to interact
      </motion.p>
    </motion.aside>
  );
};

export default LanyardSidebar;
