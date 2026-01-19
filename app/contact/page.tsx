"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaQuestionCircle,
  FaChevronDown,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";
import SpotlightCard from "@/components/SpotlightCard";
import PixelCard from "@/components/PixelCard";
import TextPressure from "@/components/TextPressure";

// Social links data
const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/XHLEIK",
    label: "GitHub",
    color: "#333",
    hoverColor: "#6e5494",
    description: "Check out my code",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/subham-bose-ba4130350/",
    label: "LinkedIn",
    color: "#0077B5",
    hoverColor: "#00a0dc",
    description: "Let's connect professionally",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/suvam.bose629",
    label: "Facebook",
    color: "#1877F2",
    hoverColor: "#4299e1",
    description: "Follow my journey",
  },
  {
    icon: FaEnvelope,
    href: "mailto:subhooo224@gmail.com",
    label: "Email",
    color: "#EA4335",
    hoverColor: "#f56565",
    description: "subhooo224@gmail.com",
  },
];

// FAQ data
const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, TypeScript, and Tailwind CSS. I also have experience with Node.js, Python, and various database systems.",
  },
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes! I'm open to freelance opportunities. Whether it's a full website build, a specific feature, or consulting, feel free to reach out and we can discuss your project.",
  },
  {
    question: "What's your typical response time?",
    answer:
      "I usually respond to messages within 24-48 hours. For urgent matters, reaching out via LinkedIn or Discord tends to get faster responses.",
  },
  {
    question: "Do you offer mentorship or code reviews?",
    answer:
      "Absolutely! I love helping fellow developers grow. I offer code reviews, pair programming sessions, and mentorship for those looking to level up their skills.",
  },
  {
    question: "Can you work with clients in different time zones?",
    answer:
      "Yes, I have experience working with clients across different time zones. I'm flexible with meeting times and use asynchronous communication effectively.",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

// FAQ Item Component
const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({
  question,
  answer,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={cardVariant}
      className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white text-sm font-bold">
            {index + 1}
          </span>
          <span className="text-white font-medium">{question}</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-zinc-400" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen text-white pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 md:px-12 lg:px-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Decorative elements */}
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="h-24 md:h-40 mb-10">
            <TextPressure
              text="Get In Touch"
              fontFamily="Poppins"
              weight={true}
              textColor="#ffffff"
              width={true}
              minFontSize={36}
            />
          </div>
          

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            Drop me a message and let&apos;s create something amazing together!
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/Subham Bose CV.pdf"
            download="Subham_Bose_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <FaDownload className="text-sm" />
            Download My CV
          </motion.a>
        </motion.div>
      </section>

      {/* Social Links Section */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Find Me <span className="text-violet-400">Online</span>
          </h2>
          <p className="text-zinc-500">Connect with me on your preferred platform</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <SpotlightCard
                className="flex flex-col items-center justify-center p-6 h-full min-h-[140px] text-center transition-all duration-300 group-hover:border-violet-500/50"
                spotlightColor={`rgba(139, 92, 246, 0.2)`}
              >
                <social.icon
                  className="text-3xl mb-3 transition-all duration-300"
                  style={{ color: social.color }}
                />
                <span className="text-white font-medium text-sm mb-1">
                  {social.label}
                </span>
                <span className="text-zinc-500 text-xs hidden md:block">
                  {social.description}
                </span>
              </SpotlightCard>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Main Content: Contact Form & FAQ */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <FaPaperPlane className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                <p className="text-zinc-500 text-sm">I&apos;ll get back to you soon!</p>
              </div>
            </div>

            <PixelCard variant="blue" className="relative w-full">
              <form onSubmit={handleSubmit} className="relative z-10 p-6 md:p-8 space-y-6 w-full">
                {/* Name Field */}
                <div className="space-y-2 w-full">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <FaUser className="text-violet-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-base"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2 w-full">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <FaEnvelope className="text-violet-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-base"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2 w-full">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <FaPaperPlane className="text-violet-400" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-5 py-4 rounded-xl bg-zinc-800/80 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none text-base"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg ${
                    isSubmitting
                      ? "bg-zinc-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl py-3"
                    >
                      <FaCheckCircle />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </PixelCard>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <FaQuestionCircle className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">FAQ</h2>
                <p className="text-zinc-500 text-sm">Frequently Asked Questions</p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
