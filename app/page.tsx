"use client";

import { useRouter } from "next/navigation";
import TextPressure from "@/components/TextPressure";
import ScrollFloat from "@/components/ScrollFloat";
import ProfileCard from "@/components/ProfileCard";
import LogoLoop from "@/components/LogoLoop";
import GlassSurface from "@/components/GlassSurface";
import TextType from "@/components/TextType";
import RotatingText from "@/components/RotatingText";
import ScrambledText from "@/components/ScrambledText";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb
} from "react-icons/si";

const techLogos = [
  { node: <SiReact className="text-cyan-400" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-blue-500" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-cyan-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-green-500" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-yellow-400" />, title: "Python", href: "https://python.org" },
  { node: <SiDocker className="text-blue-400" />, title: "Docker", href: "https://docker.com" },
  { node: <SiGit className="text-orange-500" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiPostgresql className="text-blue-300" />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiMongodb className="text-green-400" />, title: "MongoDB", href: "https://mongodb.com" }
];

export default function Home() {
  const router = useRouter();

  // tiny bump to nudge the hero slightly up (reduces top empty space)
  const NAV_HEIGHT_PX = 1;

  return (
    <div className="min-h-[300vh] pt-0">
      {/* Hero Section with TextPressure — centered within viewport minus nav height */}
      <section
        className="relative z-10 flex flex-col items-center justify-center w-full"
        style={{ minHeight: `calc(100vh - ${NAV_HEIGHT_PX}px)` }}
      >
        <main className="flex flex-col items-center justify-center w-full max-w-5xl px-6">
          {/* Welcome Text - removed fixed height so flex centering is exact */}
          <div className="relative w-full">
            <TextPressure
              text="Greetings"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#FF9FFC"
              minFontSize={12}
            />
            <TextPressure
              text="Everyone!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#FF9FFC"
              minFontSize={36}
            />
          </div>
        </main>
      </section>

      {/* ScrollFloat Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] w-full px-6">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-white font-bold"
        >
          Welcome to my portfolio
        </ScrollFloat>
      </section>

      {/* Profile Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen w-full px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl w-full">
          {/* Profile Card */}
          <div className="flex-shrink-0">
            <ProfileCard
              avatarUrl="/profile.webp"
              name="I am Subham Bose"
              title="Software Engineer || Web Developer"
              handle="SubhamBose"
              status="Available for work"
              contactText="Contact Me"
              showUserInfo={true}
              enableMobileTilt={true}
              behindGlowColor="hsla(179, 100%, 70%, 0.50)"
              innerGradient="linear-gradient(145deg, hsla(302, 40%, 45%, 0.55) 0%, hsla(73, 60%, 70%, 0.27) 100%)"
              onContactClick={() => router.push("/contact")}
            />
          </div>

          {/* Bio Text */}
          <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              <TextType
                text={["Aspiring Software Engineer with hands-on experience in"]}
                typingSpeed={50}
                pauseDuration={3000}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                loop={true}
                className="inline"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-3xl md:text-4xl lg:text-5xl font-bold">
              <RotatingText
                texts={['Web Development', 'Backend Systems', 'System Design', 'MERN Stack']}
                mainClassName="px-3 md:px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white overflow-hidden py-1 md:py-2 justify-center rounded-xl"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
              <GlassSurface
                width="auto"
                height={40}
                borderRadius={20}
                className="px-4 text-sm text-zinc-300 hover:scale-105 transition-transform"
              >
                React
              </GlassSurface>
              <GlassSurface
                width="auto"
                height={40}
                borderRadius={20}
                className="px-4 text-sm text-zinc-300 hover:scale-105 transition-transform"
              >
                Node.js
              </GlassSurface>
              <GlassSurface
                width="auto"
                height={40}
                borderRadius={20}
                className="px-4 text-sm text-zinc-300 hover:scale-105 transition-transform"
              >
                TypeScript
              </GlassSurface>
              <GlassSurface
                width="auto"
                height={40}
                borderRadius={20}
                className="px-4 text-sm text-zinc-300 hover:scale-105 transition-transform"
              >
                Next.js
              </GlassSurface>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Logo Loop */}
      <section className="relative z-10 w-full py-16">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <ScrambledText
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
            className="text-center text-zinc-400 text-sm uppercase tracking-widest"
          >
            Technologies I Work With
          </ScrambledText>
        </div>
        <div className="h-[80px] relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={60}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology stack"
          />
        </div>
      </section>
    </div>
  );
}
