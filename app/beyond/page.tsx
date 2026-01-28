"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaCamera, FaHeart, FaMusic, FaGamepad, FaMobileAlt, FaDesktop, FaUtensils } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import DomeGallery from "@/components/DomeGallery";
import TiltedCard from "@/components/TiltedCard";
import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid";
import Carousel, { CarouselItem } from "@/components/Carousel";
import GradientText from "@/components/GradientText";
import TrueFocus from "@/components/TrueFocus";
import ShinyText from "@/components/ShinyText";
import Shuffle from "@/components/Shuffle";
import VariableProximity from "@/components/VariableProximity";
import BlurText from "@/components/BlurText";

// Cooking dishes data
const cookingDishes: CarouselItem[] = [
  {
    id: 1,
    title: "Biriyani",
    description: "Aromatic basmati rice layered with spiced meat, saffron & fried onions. A royal feast!",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80"
  },
  {
    id: 2,
    title: "Fried Rice & Chilli Chicken",
    description: "Indo-Chinese combo of wok-tossed rice with crispy, spicy chicken chunks.",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "/cooking/friedRice_Chillichicken.jpg"
  },
  {
    id: 3,
    title: "Chingri Machher Malaikari",
    description: "Classic Bengali prawn curry cooked in a rich, creamy coconut milk gravy with aromatic spices.",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "/cooking/chigri macher malai kari.jpg"
  },
  {
    id: 4,
    title: "Mutton Kosha",
    description: "Slow-cooked, tender goat meat in a thick, dark, and spicy gravy. A Bengali celebration staple!",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "/cooking/kasha.mangsho.jpg"
  },
  {
    id: 5,
    title: "Katla Machher Kaliya",
    description: "Traditional Bengali fish curry made with Katla fish in a rich, spicy, and slightly sweet onion-ginger-garlic gravy.",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "/cooking/katla-maccher-kaalia-1.jpg"
  }
];

// Mobile Games data with images and IDs
const mobileGames: ChromaItem[] = [
  {
    image: "/games/fcmobile.png",
    title: "FC Mobile",
    subtitle: "ID: 601506791866990592",
    borderColor: "#22c55e",
    gradient: "linear-gradient(145deg, #22c55e, #000)"
  },
  {
    image: "/games/coc.png",
    title: "Clash of Clans",
    subtitle: "ID: #QCCJ9J28L",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg, #f59e0b, #000)"
  },
  {
    image: "/games/codm.jpg",
    title: "COD Mobile",
    subtitle: "ID: 6983767693468368897",
    borderColor: "#6366f1",
    gradient: "linear-gradient(145deg, #6366f1, #000)"
  },
  {
    image: "/games/bgmi.jpg",
    title: "BGMI",
    subtitle: "ID: 51324081415",
    borderColor: "#ef4444",
    gradient: "linear-gradient(145deg, #ef4444, #000)"
  }
];

// PC Games data with images and IDs
const pcGames: ChromaItem[] = [
  {
    image: "/games/valorant.jpg",
    title: "Valorant",
    subtitle: "ID: Coming Soon",
    borderColor: "#ef4444",
    gradient: "linear-gradient(145deg, #ef4444, #000)"
  },
  {
    image: "/games/call-of-duty-warzone.jpg",
    title: "Call of Duty Warzone",
    subtitle: "ID: Coming Soon",
    borderColor: "#22c55e",
    gradient: "linear-gradient(145deg, #22c55e, #000)"
  },
  {
    image: "/games/CS2_Cover_Art.jpg",
    title: "Counter Strike 2",
    subtitle: "ID: Coming Soon",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg, #f59e0b, #000)"
  },
  {
    image: "/games/Grand_Theft_Auto_V.png",
    title: "GTA V",
    subtitle: "ID: Coming Soon",
    borderColor: "#06b6d4",
    gradient: "linear-gradient(145deg, #06b6d4, #000)"
  }
];

// Favorite artists data - 16 artists in 4 rows of 4
const allArtists = [
  // Row 1
  { name: "The Weeknd", image: "/artist/The Weekend.jpeg" },
  { name: "Eminem", image: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" },
  { name: "Imagine Dragons", image: "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e" },
  { name: "Ed Sheeran", image: "https://i.scdn.co/image/ab6761610000e5eb3bcef85e105dfc42399ef0ba" },
  // Row 2
  { name: "Badshah", image: "/artist/Badshah.jpeg" },
  { name: "Yo Yo Honey Singh", image: "/artist/yoyo honey singh.jpeg" },
  { name: "KR$NA", image: "/artist/Kr$na.jpg" },
  { name: "Bali", image: "/artist/Bali.jpg" },
  // Row 3
  { name: "Talwiinder", image: "/artist/Talwiinder.jpeg" },
  { name: "Faheem Abdullah", image: "/artist/Faheem Abdullah.jpg" },
  { name: "Atif Aslam", image: "/artist/Atif Aslam.jpg" },
  { name: "Mohit Chauhan", image: "/artist/Mohit Chauhan.jpeg" },
  // Row 4
  { name: "KK", image: "/artist/kk.jpg" },
  { name: "Arijit Singh", image: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3" },
  { name: "Kailash Kher", image: "/artist/kailash kher.jpg" },
  { name: "Rahat Fateh Ali Khan", image: "/artist/rahat fateh ali khan.jpeg" },
];

// Photography images from public/photography folder
const photographyImages = [
  { src: "/photography/163025525_268620661476452_8612938761617736087_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/202206031_323598629311988_4835169527549927179_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/475535004_1139746814363828_4166412896968888147_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/480518770_1151953673143142_6536150404051757247_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/483715819_1170308617974314_5226750917278619189_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/596510498_1383832506621923_553426877351864499_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/615704317_1412896130382227_6927682581758009481_n.jpg", alt: "Photography by Subham" },
  { src: "/photography/DSC_0011e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0022e (2).JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0023e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0028e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0030e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0039e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0043e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0045e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0046e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0049e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0054e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0055e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0056e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0057e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0057e1.1.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0058e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0061e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0062e.JPG", alt: "Photography by Subham" },
  { src: "/photography/DSC_0067e.JPG", alt: "Photography by Subham" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function BeyondCodePage() {
  const cookingContainerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen pt-24 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText
              colors={["#a855f7", "#ec4899", "#a855f7"]}
              animationSpeed={4}
              className="font-bold"
            >
              Beyond Code
            </GradientText>
          </h1>
          <div className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            <BlurText
              text="Coding is what I do. Creativity is how I live. Here's a small peek into the things that keep me inspired beyond the screen."
              delay={50}
              animateBy="words"
              className="leading-relaxed"
            />
          </div>
        </motion.div>
      </section>

      {/* Photography Section */}
      <section className="mb-20">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="px-6 md:px-12 lg:px-20 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <FaCamera className="text-xl text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                <TrueFocus
                  sentence="Photography Moments"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#a855f7"
                  glowColor="rgba(168, 85, 247, 0.6)"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />
              </h2>
              <p className="text-zinc-500 text-sm">Capturing moments through my lens</p>
            </div>
          </div>
          <div className="text-zinc-400 max-w-2xl leading-relaxed">
            <BlurText
              text="I like freezing moments before they disappear. Mostly random streets, good light, and accidentally good shots."
              delay={50}
              animateBy="words"
              className="leading-relaxed"
            />
          </div>
        </motion.div>

        {/* DomeGallery Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[70vh] min-h-[500px] max-h-[800px]"
        >
          {/* DomeGallery */}
          <DomeGallery
            images={photographyImages}
            fit={0.8}
            minRadius={500}
            maxVerticalRotationDeg={6}
            segments={34}
            dragDampening={2}
            grayscale={false}
            overlayBlurColor="transparent"
            imageBorderRadius="16px"
            openedImageBorderRadius="20px"
            openedImageWidth="500px"
            openedImageHeight="500px"
          />
        </motion.div>

        {/* Photography Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="px-6 md:px-12 lg:px-20 mt-8 text-center"
        >
          <p className="text-zinc-500 italic text-sm flex items-center justify-center gap-2">
            <FaHeart className="text-pink-400 text-xs" />
            <span>Drag to explore • Click to enlarge</span>
            <FaHeart className="text-pink-400 text-xs" />
          </p>
        </motion.div>
      </section>

      {/* Music Section */}
      <section className="mb-20 px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
              <FaMusic className="text-xl text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                <ShinyText
                  text="Music & Artists"
                  speed={3}
                  color="#ffffff"
                  shineColor="#22c55e"
                  className="font-bold"
                />
              </h2>
              <p className="text-zinc-500 text-sm">The soundtrack to my coding sessions</p>
            </div>
          </div>
          <div className="text-zinc-400 max-w-2xl leading-relaxed">
            <BlurText
              text="My debugging soundtrack. Bollywood when I'm emotional, hip-hop when the code refuses to work."
              delay={50}
              animateBy="words"
              className="leading-relaxed"
            />
          </div>
        </motion.div>

        {/* 4x4 Grid for Desktop, 2x8 for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {allArtists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="flex flex-col items-center"
            >
              <TiltedCard
                imageSrc={artist.image}
                altText={artist.name}
                captionText={artist.name}
                containerHeight="160px"
                containerWidth="160px"
                imageHeight="160px"
                imageWidth="160px"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip
              />
              <p className="mt-2 text-sm text-zinc-400 text-center font-medium w-[160px] truncate">
                {artist.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Games Section */}
      <section className="mb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-left px-6 md:px-12 lg:px-20 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
  <FaGamepad className="text-3xl text-green-400" />
</div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <Shuffle
                text="Gaming Zone"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                tag="span"
                textAlign="left"
                className="text-3xl md:text-4xl font-bold text-green-400"
              />
            </h2>
          </div>
          <div className="text-zinc-400 max-w-2xl">
            <BlurText
              text="Stress relief, reflex training, and occasional rage therapy. Mobile or PC — if it's competitive, I'm in."
              delay={50}
              animateBy="words"
              className="leading-relaxed"
            />
          </div>
        </motion.div>

        {/* Mobile Games */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaMobileAlt className="text-xl text-emerald-400" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Mobile <span className="text-emerald-400">Games</span>
            </h3>
          </div>
          <div className="max-w-3xl mx-auto px-4">
            <ChromaGrid
              items={mobileGames}
              radius={250}
              damping={0.4}
              fadeOut={0.5}
              ease="power3.out"
              gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
              cardClassName="w-full max-w-[300px]"
            />
          </div>
        </motion.div>

        {/* PC Games */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaDesktop className="text-xl text-purple-400" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              PC <span className="text-purple-400">Games</span>
            </h3>
          </div>
          <div className="max-w-3xl mx-auto px-4">
            <ChromaGrid
              items={pcGames}
              radius={250}
              damping={0.4}
              fadeOut={0.5}
              ease="power3.out"
              gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
              cardClassName="w-full max-w-[300px]"
            />
          </div>
        </motion.div>
      </section>

      {/* Cooking Section */}
      <section className="mb-20 px-6 md:px-12 lg:px-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-left mb-12 relative"
          ref={cookingContainerRef}
          style={{ position: 'relative' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center">
  <FaUtensils className="text-3xl text-orange-400" />
</div>

            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10" style={{ position: 'relative' }}>
              <VariableProximity
                label="Cooking Corner"
                className="text-3xl md:text-4xl font-bold text-orange-400"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={cookingContainerRef}
                radius={150}
                falloff="linear"
              />
            </h2>
            {/* <GiCookingPot className="text-3xl text-orange-400" /> */}
          </div>
          <div className="text-zinc-400 max-w-2xl">
            <BlurText
              text="I don't just compile code, I cook food too. Experiments happen. Some succeed. Some… don't get repeated."
              delay={50}
              animateBy="words"
              className="leading-relaxed"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center w-full"
        >
          <div className="w-full max-w-4xl">
            <Carousel
              items={cookingDishes}
              baseWidth={700}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
