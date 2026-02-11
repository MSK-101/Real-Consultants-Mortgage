"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Home as HomeIcon,
  DollarSign,
  FileText,
  MessageSquare,
  Clock,
  BookOpen,
  Lock,
  CheckCircle2,
  XCircle,
  User,
  Phone,
  Plus,
  Minus,
  Menu,
  X,
  Target,
  TrendingUp,
  Lightbulb,
  Sparkles,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7 } 
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7 } 
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7 } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7 } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6 } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#4a7a6c]/30"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "100%",
            opacity: 0 
          }}
          animate={{ 
            y: "-100%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

// Header Component
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="/" 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center glow-pulse">
            <HomeIcon className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="font-semibold text-lg">Real Consultants</span>
            <span className="text-[#4a7a6c] font-medium ml-1">Mortgage</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <motion.a
            href="#how-it-works"
            className="text-zinc-400 hover:text-white transition-colors text-sm px-4 py-2 animated-underline"
            whileHover={{ y: -2 }}
          >
            How It Works
          </motion.a>
          <motion.a
            href="#demo"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </motion.a>
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-3">
              <a href="#how-it-works" className="text-zinc-400 hover:text-white py-2">
                How It Works
              </a>
              <a
                href="#demo"
                className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium text-center"
              >
                Book a Call
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-32 pb-20 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 radial-gradient" />
      <FloatingParticles />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Sparkle badge */}
          <motion.div 
            variants={fadeInDown}
            className="mb-8 inline-flex items-center gap-2"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4a7a6c]/30 bg-[#01503c]/10 text-sm"
              animate={{ 
                boxShadow: [
                  "0 0 0 rgba(74, 122, 108, 0)",
                  "0 0 20px rgba(74, 122, 108, 0.3)",
                  "0 0 0 rgba(74, 122, 108, 0)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-[#4a7a6c]" />
              <span className="text-[#4a7a6c]">Clarity-First Mortgage Process</span>
            </motion.span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            The Mortgage System That Helps You{" "}
            <span className="gradient-text">Buy Smarter</span> — Without Confusion or Pressure
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-zinc-400 mb-4 max-w-2xl mx-auto"
          >
            Buying or refinancing a home shouldn&apos;t feel overwhelming.
            Get a clear mortgage plan, honest guidance, and a process that actually makes sense — before you commit.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base text-zinc-500 mb-10 max-w-xl mx-auto"
          >
            Talk with a real expert. Make confident decisions. Close with clarity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#demo"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg font-medium"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Here
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#demo"
              className="inline-flex items-center gap-2 btn-secondary px-8 py-4 rounded-xl text-lg font-medium"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Book a Call
            </motion.a>
          </motion.div>

          {/* How It Works Link */}
          <motion.div variants={fadeInUp} className="mt-12">
            <motion.a
              href="#how-it-works"
              className="inline-flex flex-col items-center gap-2 text-[#4a7a6c] hover:text-[#6b9a8c] transition-colors"
              whileHover={{ y: 5 }}
            >
              <span className="text-sm">How It Works</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Why This Approach Section
function WhyThisApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const oldWayPoints = [
    "Comparing rates without understanding the tradeoffs",
    "Getting pre-approved but not truly prepared",
    "Conflicting advice from Google, friends, and lenders",
    "Surprises late in the process",
    "Stress instead of confidence",
  ];

  const betterWayPoints = [
    "Clear loan options tailored to you",
    "A plan before paperwork",
    "Fewer surprises, smoother closings",
    "A lender who actually advises you",
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6"
          >
            Why This Approach
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Stop guessing. Stop Googling. Stop stressing.
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            You don&apos;t need 100 loan options.<br />
            You need the <span className="text-white font-medium">right loan</span> — explained clearly — for your situation.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            className="text-zinc-500 max-w-2xl mx-auto mt-4"
          >
            Most people don&apos;t struggle because mortgages are &quot;too complicated.&quot;
            They struggle because no one slows down and explains them properly.
          </motion.p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            whileHover={{ y: -8 }}
            className="old-way-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span 
                className="text-red-400 text-sm font-medium uppercase tracking-wider"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                The Old Way
              </motion.span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">
              The Mortgage Confusion Trap
            </h3>
            <p className="text-zinc-400 mb-6">
              Buyers scrolling rate sites, comparing lenders they don&apos;t trust, and getting different answers from everyone. Pre-approvals feel rushed. Decisions feel unclear.
            </p>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              {oldWayPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  variants={staggerItem}
                  className="flex items-start gap-3 text-zinc-400"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  </motion.div>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Better Way */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            whileHover={{ y: -8 }}
            className="better-way-card rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer pointer-events-none" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <motion.span 
                  className="text-[#4a7a6c] text-sm font-medium uppercase tracking-wider"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  A Better Way
                </motion.span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a7a6c]">
                A Clear, Guided Mortgage Strategy
              </h3>
              <p className="text-zinc-400 mb-6">
                This is a strategy-first mortgage process designed to help you understand your options before you choose one — so you move forward with confidence.
              </p>
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-3"
              >
                {betterWayPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    variants={staggerItem}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#4a7a6c] shrink-0 mt-0.5" />
                    </motion.div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Roadmap Section
function RoadmapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"buying" | "refinancing">("buying");

  const buyingSteps = [
    {
      icon: Target,
      title: "Understand Your Buying Power",
      description: "Income, credit, cash, and comfort level",
    },
    {
      icon: Lightbulb,
      title: "Explore Loan Options",
      description: "FHA, Conventional, VA, Jumbo — explained simply",
    },
    {
      icon: FileText,
      title: "Build a Smart Purchase Strategy",
      description: "Monthly payment, cash to close, long-term impact",
    },
    {
      icon: CheckCircle2,
      title: "Move Forward Confidently",
      description: "With a real plan, not assumptions",
    },
  ];

  const refinancingSteps = [
    {
      icon: Target,
      title: "Review Your Current Situation",
      description: "Loan, equity, goals, and timing",
    },
    {
      icon: TrendingUp,
      title: "Compare Real Scenarios",
      description: "Not just rate — total cost and outcome",
    },
    {
      icon: FileText,
      title: "Streamline the Process",
      description: "Clear steps, proactive communication",
    },
    {
      icon: CheckCircle2,
      title: "Close with Confidence",
      description: "No last-minute surprises",
    },
  ];

  const steps = activeTab === "buying" ? buyingSteps : refinancingSteps;

  return (
    <section ref={ref} id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#01503c]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6"
          >
            Roadmap
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            What Does the Process Look Like?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Choose where you&apos;re starting:
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveTab("buying")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "buying"
                ? "bg-gradient-to-r from-[#01503c]/30 to-[#4a7a6c]/20 text-[#4a7a6c] border border-[#4a7a6c]/40 glow-pulse"
                : "bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:border-zinc-600"
            }`}
          >
            <HomeIcon className="inline-block w-4 h-4 mr-2" />
            Buying a property
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("refinancing")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "refinancing"
                ? "bg-gradient-to-r from-[#01503c]/30 to-[#4a7a6c]/20 text-[#4a7a6c] border border-[#4a7a6c]/40 glow-pulse"
                : "bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:border-zinc-600"
            }`}
          >
            <DollarSign className="inline-block w-4 h-4 mr-2" />
            Refinancing
          </motion.button>
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <p className="text-center text-zinc-400 text-lg mb-8">
                {activeTab === "buying"
                  ? "Start with clarity, not guesswork"
                  : "Access Cash or Lower Payment — Optimize what you already have"}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Steps */}
          <div className="space-y-4 relative">
            {/* Connecting line */}
            <div className="absolute left-11 top-8 bottom-8 w-px bg-gradient-to-b from-[#01503c] via-[#4a7a6c] to-[#01503c] opacity-30" />
            
            <AnimatePresence mode="wait">
              {steps.map((step, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="feature-card rounded-xl p-6 flex items-start gap-4 relative"
                >
                  <div className="flex items-center gap-4">
                    <motion.span 
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#01503c] to-[#4a7a6c] text-white flex items-center justify-center text-sm font-bold relative z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {index + 1}
                    </motion.span>
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-[#01503c]/20 flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <step.icon className="w-6 h-6 text-[#4a7a6c]" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-10"
          >
            <motion.a
              href="#demo"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "buying" ? "Get Started" : "Review My Options"}
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-zinc-500 text-sm">Both paths lead to the same thing</p>
            <motion.p 
              className="text-[#4a7a6c] font-semibold text-lg"
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(74, 122, 108, 0)",
                  "0 0 20px rgba(74, 122, 108, 0.5)",
                  "0 0 0 rgba(74, 122, 108, 0)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              A confident closing
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Complete Experience Section
function CompleteExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Personalized Mortgage Planning",
      description: "Understand what you qualify for and what actually makes sense.",
    },
    {
      icon: MessageSquare,
      title: "Clear, Human Communication",
      description: "No jargon, no pressure — just honest answers.",
    },
    {
      icon: FileText,
      title: "Organized, Simple Process",
      description: "From first call to closing — everything explained step by step.",
    },
    {
      icon: Clock,
      title: "Proactive Updates",
      description: "You're never wondering \"what's next?\"",
    },
    {
      icon: BookOpen,
      title: "Education-First Approach",
      description: "So you're not signing paperwork you don't understand.",
    },
    {
      icon: Lock,
      title: "Secure, Modern Systems",
      description: "Your information stays organized and protected.",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6"
          >
            The Complete Experience
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Everything You Need — Nothing You Don&apos;t
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            It&apos;s a guided mortgage experience built around education and trust.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="feature-card rounded-2xl p-6 card-hover group"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01503c]/30 to-[#4a7a6c]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <feature.icon className="w-6 h-6 text-[#4a7a6c]" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Trust & Expertise Section
function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6"
          >
            Trust & Expertise
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Guided by Experience — Not Guesswork
          </motion.h2>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          whileHover={{ y: -5 }}
          className="feature-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden gradient-border"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#01503c]/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative">
            {/* Avatar */}
            <motion.div 
              className="w-28 h-28 rounded-full bg-gradient-to-br from-[#01503c] to-[#4a7a6c] mx-auto mb-6 flex items-center justify-center relative"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(74, 122, 108, 0.4)",
                  "0 0 0 20px rgba(74, 122, 108, 0)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <User className="w-14 h-14 text-white" />
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#4a7a6c]"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Chris Crocker
            </motion.h3>
            <motion.p 
              className="text-[#4a7a6c] font-medium mb-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Mortgage Loan Officer
            </motion.p>
            <motion.p 
              className="text-zinc-500 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              NMLS 2264202
            </motion.p>

            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-[#4a7a6c]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <HomeIcon className="w-4 h-4 text-[#4a7a6c]" />
              <span className="text-zinc-300 text-sm font-medium">Real Consultants Mortgage</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I don't know which loan is best for me?",
      answer:
        "That's exactly what the first conversation is for — clarity comes before commitment.",
    },
    {
      question: "How early should I talk to a lender?",
      answer:
        "Earlier than most people think. Good planning saves stress and money.",
    },
    {
      question: "Do I need perfect credit?",
      answer:
        "No. There are options — and strategies to improve your position.",
    },
    {
      question: "Will this hurt my credit?",
      answer:
        "Initial conversations are informational. We'll explain before pulling credit.",
    },
    {
      question: "Are you just going to push the lowest rate?",
      answer:
        "No. We focus on the right structure for your goals, not just today's number.",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6"
          >
            Common Questions
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Answers Homebuyers Actually Ask
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-zinc-400"
          >
            Still unsure? That&apos;s normal. Let&apos;s talk it through.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="feature-card rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                whileHover={{ backgroundColor: "rgba(74, 122, 108, 0.05)" }}
              >
                <span className="font-medium group-hover:text-[#4a7a6c] transition-colors">
                  {faq.question}
                </span>
                <motion.span 
                  className="ml-4 shrink-0"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#4a7a6c]" />
                  ) : (
                    <Plus className="w-5 h-5 text-zinc-400 group-hover:text-[#4a7a6c] transition-colors" />
                  )}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-zinc-400 leading-relaxed border-t border-[#4a7a6c]/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="demo" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center"
        >
          <div className="feature-card rounded-3xl p-12 md:p-16 relative overflow-hidden gradient-border">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#01503c]/20 via-transparent to-[#4a7a6c]/10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4a7a6c]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#01503c]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                Ready to Feel Confident About Your Mortgage?
              </motion.h2>
              <motion.p 
                className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Let&apos;s replace uncertainty with clarity.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Here
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 btn-secondary px-8 py-4 rounded-xl text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  Book a Call
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 border-t border-[#4a7a6c]/20 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#01503c]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-lg">Real Consultants</span>
                <span className="text-[#4a7a6c] font-medium ml-1">Mortgage</span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm mb-4">
              Chris Crocker | NMLS 2264202
            </p>
            <p className="text-zinc-500 text-sm">
              Equal Housing Lender
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-zinc-400 mb-4">
              Mortgage guidance built on clarity, education, and trust.
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-zinc-500">
            © 2026 Real Consultants Mortgage
          </p>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-[#4a7a6c] transition-colors animated-underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#4a7a6c] transition-colors animated-underline">
              NMLS Consumer Access
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <WhyThisApproachSection />
      <div className="section-divider" />
      <RoadmapSection />
      <div className="section-divider" />
      <CompleteExperienceSection />
      <div className="section-divider" />
      <TrustSection />
      <div className="section-divider" />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
