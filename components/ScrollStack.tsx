"use client";

import React, { useRef, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full p-6 md:p-10 rounded-[20px] md:rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] box-border ${itemClassName}`.trim()}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  title?: ReactNode;
  cardHeight?: number;
  onStackComplete?: () => void;
}

interface CardState {
  progress: number;
  isActive: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  title,
  cardHeight = 240,
  onStackComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childArray = React.Children.toArray(children);
  const cardCount = childArray.length;
  
  // Initialize with first card visible to prevent flash on mount
  const [cardStates, setCardStates] = useState<CardState[]>(() => 
    childArray.map((_, i) => ({ progress: i === 0 ? 1 : 0, isActive: i === 0 }))
  );
  const [isComplete, setIsComplete] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(-1);
  
  // Scroll distance per card animation
  const scrollPerCard = 300;
  const totalScrollDistance = scrollPerCard * cardCount + 200;
  
  const updateCards = useCallback(() => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // How far we've scrolled into the container
    const scrolled = -containerRect.top;
    const clampedScroll = Math.max(0, Math.min(scrolled, totalScrollDistance));
    
    // Skip if unchanged
    if (Math.abs(clampedScroll - lastScrollRef.current) < 1) return;
    lastScrollRef.current = clampedScroll;
    
    const newCardStates: CardState[] = [];
    
    for (let i = 0; i < cardCount; i++) {
      const cardScrollStart = i * scrollPerCard;
      const cardScrollEnd = cardScrollStart + scrollPerCard;
      
      let progress = 0;
      if (clampedScroll >= cardScrollStart) {
        progress = Math.min(1, (clampedScroll - cardScrollStart) / scrollPerCard);
      }
      
      // Card is "active" (primary focus) when it's animating in or is the topmost complete card
      const isActive = progress > 0 && progress < 1;
      
      newCardStates.push({ progress, isActive });
    }
    
    setCardStates(newCardStates);
    
    // Check if all cards are stacked
    const allComplete = newCardStates.every(s => s.progress >= 1);
    if (allComplete && !isComplete) {
      setIsComplete(true);
      onStackComplete?.();
    } else if (!allComplete && isComplete) {
      setIsComplete(false);
    }
  }, [cardCount, scrollPerCard, totalScrollDistance, isComplete, onStackComplete]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        updateCards();
        rafRef.current = null;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateCards();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCards]);
  
  const getCardStyle = (index: number): React.CSSProperties => {
    const state = cardStates[index];
    
    // Initial state - first card should always be visible, others hidden
    if (!state || state.progress === 0) {
      // Show first card by default if no state yet
      if (index === 0 && (!cardStates.length || cardStates.every(s => s.progress === 0))) {
        return {
          opacity: 1,
          transform: 'translateY(0px) scale(1)',
          zIndex: cardCount - index,
          pointerEvents: 'auto',
          visibility: 'visible'
        };
      }
      return {
        opacity: 0,
        transform: 'translateY(60px) scale(0.98)',
        zIndex: cardCount - index,
        pointerEvents: 'none',
        visibility: 'hidden'
      };
    }
    
    const { progress } = state;
    
    // Find the highest index card that is currently animating in
    const animatingIndex = cardStates.findLastIndex(s => s.progress > 0 && s.progress < 1);
    
    // The "top" fully visible card is the one just before the animating card,
    // or the last completed card if nothing is animating
    const lastCompletedIndex = cardStates.findLastIndex(s => s.progress >= 1);
    
    // Determine what's visible:
    // - If a card is animating in, show it AND the card directly below it (the previous top card)
    // - If no card is animating, show only the top completed card
    
    const isAnimatingIn = progress > 0 && progress < 1;
    
    // This card is currently animating in
    if (isAnimatingIn) {
      const currentY = 60 * (1 - easeOutQuart(progress));
      const currentScale = 0.98 + (0.02 * easeOutQuart(progress));
      const opacity = Math.min(1, progress * 2);
      
      return {
        opacity,
        transform: `translateY(${currentY}px) scale(${currentScale})`,
        zIndex: cardCount - index,
        pointerEvents: progress > 0.8 ? 'auto' : 'none',
        visibility: 'visible'
      };
    }
    
    // This card is fully stacked (progress >= 1)
    if (progress >= 1) {
      // If a newer card is animating in on top of this one
      if (animatingIndex > index) {
        const newerCardProgress = cardStates[animatingIndex]?.progress || 0;
        
        // This card is directly below the animating card - it should fade out
        if (index === animatingIndex - 1) {
          const fadeOutOpacity = Math.max(0, 1 - newerCardProgress * 1.2);
          const scale = 1 - newerCardProgress * 0.03;
          return {
            opacity: fadeOutOpacity,
            transform: `translateY(0px) scale(${scale})`,
            zIndex: cardCount - index,
            pointerEvents: 'none',
            visibility: fadeOutOpacity > 0.1 ? 'visible' : 'hidden'
          };
        }
        
        // This card is further down the stack - hide it
        return {
          opacity: 0,
          transform: 'translateY(0px) scale(0.95)',
          zIndex: cardCount - index,
          pointerEvents: 'none',
          visibility: 'hidden'
        };
      }
      
      // No card is animating - this is the top card if it's the last completed one
      if (index === lastCompletedIndex) {
        return {
          opacity: 1,
          transform: 'translateY(0px) scale(1)',
          zIndex: cardCount - index,
          pointerEvents: 'auto',
          visibility: 'visible'
        };
      }
      
      // Fully stacked but not the top card - hide it
      return {
        opacity: 0,
        transform: 'translateY(0px) scale(0.95)',
        zIndex: cardCount - index,
        pointerEvents: 'none',
        visibility: 'hidden'
      };
    }
    
    // Default fallback
    return {
      opacity: 1,
      transform: 'translateY(0px) scale(1)',
      zIndex: cardCount - index,
      pointerEvents: 'auto',
      visibility: 'visible'
    };
  };
  
  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        height: `calc(100vh + ${totalScrollDistance}px)`,
        contain: 'layout style',
      }}
    >
      {/* Sticky container - stays fixed during scroll */}
      <div
        className="sticky top-0 min-h-screen flex flex-col overflow-visible"
        style={{
          paddingTop: '100px',
          paddingBottom: '60px',
        }}
      >
        {/* Title stays with the sticky section */}
        {title && (
          <div className="mb-8 flex-shrink-0">
            {title}
          </div>
        )}
        
        {/* Cards container - single card visible at a time */}
        <div 
          className="relative w-full max-w-4xl mx-auto flex-1"
          style={{
            height: `${cardHeight}px`,
            minHeight: `${cardHeight}px`,
          }}
        >
          {childArray.map((child, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 right-0 transition-none"
              style={{
                ...getCardStyle(index),
                height: `${cardHeight}px`,
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                transformOrigin: 'top center',
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Smoother easing for card animations
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export default ScrollStack;
