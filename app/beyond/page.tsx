"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaHeart, FaMusic, FaGamepad, FaMobileAlt, FaDesktop, FaUtensils } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import DomeGallery from "@/components/DomeGallery";
import TiltedCard from "@/components/TiltedCard";
import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid";
import Carousel, { CarouselItem } from "@/components/Carousel";

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
    image: "/cooking/friedRice_Chillichicken.jpeg"
  },
  {
    id: 3,
    title: "Luchi & Aloodum",
    description: "Fluffy deep-fried Bengali bread served with spiced potato curry. Pure comfort!",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "/cooking/luchi_aloo_dum.jpeg"
  },
  {
    id: 4,
    title: "Pav Bhaji",
    description: "Spiced mashed vegetable curry with buttery toasted bread rolls. Mumbai street food classic!",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80"
  },
  {
    id: 5,
    title: "White Sauce Pasta",
    description: "Creamy bechamel pasta with herbs, garlic & parmesan. Italian comfort in every bite!",
    icon: <GiCookingPot className="h-4 w-4 text-white" />,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80"
  }
];

// Mobile Games data with images
const mobileGames: ChromaItem[] = [
  {
    image: "/games/fcmobile.png",
    title: "FC Mobile",
    subtitle: "⚽ Sports",
    borderColor: "#22c55e",
    gradient: "linear-gradient(145deg, #22c55e, #000)"
  },
  {
    image: "/games/coc.png",
    title: "Clash of Clans",
    subtitle: "🏰 Strategy",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg, #f59e0b, #000)"
  },
  {
    image: "/games/bgmi.jpg",
    title: "BGMI",
    subtitle: "🔫 Battle Royale",
    borderColor: "#ef4444",
    gradient: "linear-gradient(145deg, #ef4444, #000)"
  },
  {
    image: "/games/efootball.jpg",
    title: "eFootball",
    subtitle: "⚽ Sports",
    borderColor: "#3b82f6",
    gradient: "linear-gradient(145deg, #3b82f6, #000)"
  },
  {
    image: "/games/codm.jpg",
    title: "COD Mobile",
    subtitle: "🎯 FPS",
    borderColor: "#6366f1",
    gradient: "linear-gradient(145deg, #6366f1, #000)"
  }
];

// PC Games data with images
const pcGames: ChromaItem[] = [
  {
    image: "/games/valorant.jpg",
    title: "Valorant",
    subtitle: "🎯 Tactical FPS",
    borderColor: "#ef4444",
    gradient: "linear-gradient(145deg, #ef4444, #000)"
  },
  {
    image: "/games/Grand_Theft_Auto_V.png",
    title: "GTA V",
    subtitle: "🚗 Open World",
    borderColor: "#22c55e",
    gradient: "linear-gradient(145deg, #22c55e, #000)"
  },
  {
    image: "/games/CS2_Cover_Art.jpg",
    title: "Counter Strike 2",
    subtitle: "🔫 Competitive FPS",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg, #f59e0b, #000)"
  },
  {
    image: "/games/CoD_Black_Ops_cover.png",
    title: "Call of Duty: Black Ops",
    subtitle: "💥 FPS",
    borderColor: "#f97316",
    gradient: "linear-gradient(145deg, #f97316, #000)"
  },
  {
    image: "/games/halo.jpg",
    title: "Halo Infinite",
    subtitle: "🚀 Sci-Fi FPS",
    borderColor: "#06b6d4",
    gradient: "linear-gradient(145deg, #06b6d4, #000)"
  }
];

// Favorite artists data - 15 artists in 3 rows of 5
const artistsRow1 = [
  { name: "The Weeknd", image: "/artist/The Weekend.jpeg" },
  { name: "Eminem", image: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" },
  { name: "Pritam", image: "/artist/Pritam.jpg" },
  { name: "KK", image: "/artist/kk.jpg" },
  { name: "Kailash Kher", image: "/artist/kailash kher.jpg" },
];

const artistsRow2 = [
  { name: "Rahat Fateh Ali Khan", image: "/artist/rahat fateh ali khan.jpeg" },
  { name: "Yo Yo Honey Singh", image: "/artist/yoyo honey singh.jpeg" },
  { name: "Arijit Singh", image: "https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3" },
  { name: "Rupam Islam", image: "/artist/rupam islam.jpeg" },
  { name: "Imagine Dragons", image: "https://i.scdn.co/image/ab6761610000e5eb920dc1f617550de8388f368e" },
];

const artistsRow3 = [
  { name: "Badshah", image: "/artist/Badshah.jpeg" },
  { name: "Atif Aslam", image: "/artist/Atif Aslam.jpg" },
  { name: "Ed Sheeran", image: "https://i.scdn.co/image/ab6761610000e5eb3bcef85e105dfc42399ef0ba" },
  { name: "Talwiinder", image: "/artist/Talwiinder.jpeg" },
  { name: "Faheem Abdullah", image: "/artist/Faheem Abdullah.jpg" },
];

const allArtists = [...artistsRow1, ...artistsRow2, ...artistsRow3];

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Beyond{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Code
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Life isn&apos;t just about writing code. Here&apos;s a glimpse into the things that 
            inspire me, keep me creative, and make me who I am beyond the keyboard.
          </p>
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
                Photography
              </h2>
              <p className="text-zinc-500 text-sm">Capturing moments through my lens</p>
            </div>
          </div>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Photography is my way of seeing the world differently. Every frame tells a story, 
            and I love capturing the beauty in everyday moments. Here are some of my favorite shots.
          </p>
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
                Music & Artists
              </h2>
              <p className="text-zinc-500 text-sm">The soundtrack to my coding sessions</p>
            </div>
          </div>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            Music fuels my creativity and keeps me in the zone. From soulful Bollywood melodies 
            to hard-hitting hip-hop beats, here are the artists I can&apos;t stop listening to.
          </p>
        </motion.div>

        {/* 3 Rows of 5 Artists */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaGamepad className="text-3xl text-green-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Gaming <span className="text-green-400">Zone</span>
            </h2>
            <FaGamepad className="text-3xl text-green-400" />
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Gaming is my go-to escape. Whether it&apos;s quick matches on mobile or intense 
            sessions on PC, here are the games that keep me entertained.
          </p>
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
          <div className="flex flex-wrap justify-center gap-4">
            <ChromaGrid
              items={mobileGames}
              radius={250}
              damping={0.4}
              fadeOut={0.5}
              ease="power3.out"
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
          <div className="flex flex-wrap justify-center gap-4">
            <ChromaGrid
              items={pcGames}
              radius={250}
              damping={0.4}
              fadeOut={0.5}
              ease="power3.out"
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaUtensils className="text-3xl text-orange-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Cooking <span className="text-orange-400">Corner</span>
            </h2>
            <GiCookingPot className="text-3xl text-orange-400" />
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            When I&apos;m not coding, you&apos;ll find me in the kitchen experimenting with flavors. 
            Here are some of my favorite dishes to cook!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Carousel
            items={cookingDishes}
            baseWidth={500}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </motion.div>
      </section>
    </div>
  );
}
