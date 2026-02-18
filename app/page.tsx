"use client";

import { useState, useEffect, useRef } from "react";

// Declare Calendly global type
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
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
  Phone,
  Plus,
  Minus,
  Menu,
  X,
  Target,
  TrendingUp,
  Lightbulb,
  Sparkles,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
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
    transition: { duration: 0.5 },
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
            opacity: 0,
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
        <div className="flex items-center gap-3">
          <motion.a
            href="/"
            className="flex flex-col items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <span className="font-semibold text-lg sm:text-xl">Chris </span>
              <span className="text-[#4a7a6c] font-semibold text-lg sm:text-xl">Crocker</span>
            </div>
            <div className="text-xs text-zinc-500">Mortgage Advisor</div>
          </motion.a>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <a
            href="tel:+19802324269"
            className="text-zinc-400 hover:text-[#4a7a6c] transition-colors text-sm sm:text-base hidden sm:inline"
          >
            (980) 232-4269
          </a>
        </div>

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
            href="https://calendly.com/chriscrockermortgage/mwm"
            target="_blank"
            rel="noopener noreferrer"
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
              <a
                href="#how-it-works"
                className="text-zinc-400 hover:text-white py-2"
              >
                How It Works
              </a>
              <a
                href="https://calendly.com/chriscrockermortgage/mwm"
                target="_blank"
                rel="noopener noreferrer"
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

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-6"
      >
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
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-[#4a7a6c]" />
              <span className="text-[#4a7a6c]">
                Nationwide Mortgage Strategist
              </span>
            </motion.span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            A Clear Mortgage Strategy — So You Can{" "}
            <span className="gradient-text">Move Forward With Confidence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto"
          >
            I&apos;m Chris Crocker — a nationwide mortgage strategist helping
            homebuyers and homeowners eliminate unnecessary costs, lower their
            payments, and build long-term wealth through smarter loan
            strategies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://homequityreport.com/chriscrocker"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://calendly.com/chriscrockermortgage/mwm"
              target="_blank"
              rel="noopener noreferrer"
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
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
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
    "Comparing rates without understanding long-term cost",
    "Getting pre-approved without knowing your real comfort range",
    "Hearing different answers from different lenders",
    "Discovering issues late in the process",
    "Feeling locked in instead of confident",
  ];

  const betterWayPoints = [
    "Loan options tailored to your situation",
    "A clear plan before any commitments",
    "Fewer surprises as you move forward",
    "Guidance from a lender who actually advises",
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
            className="text-zinc-400 max-w-3xl mx-auto text-lg"
          >
            Most buyers and homeowners don&apos;t feel overwhelmed because
            mortgages are complicated. They feel overwhelmed because
            they&apos;re forced to make big decisions{" "}
            <span className="text-white font-medium">without context</span>.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-500 max-w-2xl mx-auto mt-4"
          >
            Rates get quoted without tradeoffs. Pre-approvals happen before real
            planning. My approach is different — it&apos;s designed to give you{" "}
            <span className="text-[#4a7a6c]">clarity first</span>.
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
              Most mortgage stress comes from being rushed into decisions
              without understanding the consequences. The result isn&apos;t
              speed — it&apos;s anxiety, second-guessing, and avoidable
              surprises.
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
                A Strategy-First Mortgage Process
              </h3>
              <p className="text-zinc-400 mb-6">
                Instead of starting with paperwork or rate quotes, this process
                starts with understanding. You&apos;ll see real loan options,
                real numbers, and real tradeoffs — explained clearly — before
                you choose a direction.
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
  const [activeTab, setActiveTab] = useState<"buying" | "refinancing">(
    "buying"
  );

  const buyingSteps = [
    {
      icon: Target,
      title: "Understand Your Buying Power",
      description:
        "We start by looking at income, credit, cash on hand, and your comfort level — not just what a lender says you technically qualify for.",
    },
    {
      icon: Lightbulb,
      title: "Explore Loan Options",
      description:
        "Conventional, FHA, VA, Jumbo — explained in plain language so you understand the tradeoffs, not just the rate.",
    },
    {
      icon: FileText,
      title: "Build a Smart Purchase Strategy",
      description:
        "Monthly payment, cash to close, long-term flexibility, and how today's decision affects you years from now.",
    },
    {
      icon: CheckCircle2,
      title: "Move Forward Confidently",
      description: "With a plan you understand and numbers you trust.",
    },
  ];

  const refinancingSteps = [
    {
      icon: Target,
      title: "Review Your Current Situation",
      description:
        "We look at your existing loan, equity, future plans, and timing — not just today's payment.",
    },
    {
      icon: TrendingUp,
      title: "Compare Real Scenarios",
      description:
        "Side-by-side options that show total cost, monthly impact, and long-term outcomes.",
    },
    {
      icon: FileText,
      title: "Streamline the Process",
      description:
        "Clear steps, proactive communication, and no last-minute confusion.",
    },
    {
      icon: CheckCircle2,
      title: "Close With Confidence",
      description: "Knowing exactly why you chose this option.",
    },
  ];

  const steps = activeTab === "buying" ? buyingSteps : refinancingSteps;

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="py-24 relative overflow-hidden"
    >
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
            Choose Your Path
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Choose Where You&apos;re Starting
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 max-w-3xl mx-auto"
          >
            People come into the mortgage process at different points. Some are
            buying their first home. Others already own and want to improve what
            they have. This page is designed to meet you where you are.
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
            Buying a Home
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
            Access Cash or Lower Payment
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
                  ? "Buying With Confidence — Buying a home shouldn't feel like jumping blind into numbers you don't understand. This process gives you clarity before you make an offer."
                  : "Restructuring with Purpose — Restructuring isn't about chasing the lowest rate. It's about making sure your mortgage still fits your goals, your timeline, and your financial reality."}
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
              href="https://homequityreport.com/chriscrocker"
              target="_blank"
              rel="noopener noreferrer"
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
            <p className="text-zinc-500 text-sm">
              Both paths lead to the same thing
            </p>
            <motion.p
              className="text-[#4a7a6c] font-semibold text-lg"
              animate={{
                textShadow: [
                  "0 0 0 rgba(74, 122, 108, 0)",
                  "0 0 20px rgba(74, 122, 108, 0.5)",
                  "0 0 0 rgba(74, 122, 108, 0)",
                ],
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

// Complete Experience Section - 6 Step Process
function CompleteExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
    {
      number: 1,
      title: "Strategy & Goal Alignment",
      description:
        "We start by understanding your goals, timeline, and financial picture to determine the right approach before choosing a loan.",
    },
    {
      number: 2,
      title: "Loan Readiness & Options Review",
      description:
        "Your credit, income, and assets are reviewed to confirm eligibility and outline the best loan structures available.",
    },
    {
      number: 3,
      title: "Rate & Structure Planning",
      description:
        "We align the loan structure and locking strategy with your timeline, risk tolerance, and objectives.",
    },
    {
      number: 4,
      title: "Documentation & Submission",
      description:
        "Required documents are collected, reviewed, and strategically submitted to the lender best suited for your scenario.",
    },
    {
      number: 5,
      title: "Processing, Appraisal & Approval",
      description:
        "The loan moves through processing and underwriting, including appraisal when required, until conditional and final approval are achieved.",
    },
    {
      number: 6,
      title: "Closing, Funding & Ongoing Support",
      description:
        "Final documents are signed, funds are disbursed, and support continues beyond closing for future planning or changes.",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#01503c]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a7a6c]/10 rounded-full blur-[120px] pointer-events-none" />

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
            A Clear Process From Start to Finish
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Here&apos;s exactly what to expect when we work together — no
            surprises, no confusion.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#01503c] via-[#4a7a6c] to-[#01503c] opacity-30 hidden md:block" />

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="feature-card rounded-2xl p-6 md:p-8 md:ml-20">
                    {/* Step Number - Desktop */}
                    <motion.div
                      className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#01503c] to-[#4a7a6c] items-center justify-center text-2xl font-bold text-white z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Step Number - Mobile */}
                    <div className="md:hidden flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center text-lg font-bold text-white">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="hidden md:block text-xl font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Loan Types Section - 9 Cards
function LoanTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const loanTypes = [
    {
      title: "Conventional Loans",
      description:
        "Flexible financing for strong credit and stable income borrowers. Ideal for primary homes, second homes, and long-term ownership with competitive rates and low overall cost.",
      icon: HomeIcon,
    },
    {
      title: "FHA Loans",
      description:
        "Low down payment financing with more flexible credit requirements. Designed to help first-time buyers and borrowers rebuilding credit get into homeownership sooner.",
      icon: Shield,
    },
    {
      title: "VA Loans",
      description:
        "Zero down financing for eligible veterans and active-duty service members. No mortgage insurance, competitive rates, and powerful long-term savings.",
      icon: Award,
    },
    {
      title: "Bank Statement Loans",
      description:
        "Alternative income verification for self-employed borrowers. Qualify using 12–24 months of bank statements instead of traditional tax returns.",
      icon: FileText,
    },
    {
      title: "DSCR & Investment Property Loans",
      description:
        "Cash-flow-based financing for real estate investors. Approval driven by rental income, not personal income, making scaling portfolios simpler.",
      icon: TrendingUp,
    },
    {
      title: "Hard Money & Private Capital",
      description:
        "Fast, asset-based financing for time-sensitive deals. Ideal for flips, bridge loans, and unconventional scenarios where speed matters most.",
      icon: Zap,
    },
    {
      title: "No-Income / No-Doc Options",
      description:
        "Strategic lending solutions that rely on assets or property value rather than traditional income documentation. Built for unique financial situations.",
      icon: Lock,
    },
    {
      title: "Asset Depletion Loans",
      description:
        "Turn liquid assets into qualifying income. Designed for high-net-worth borrowers, retirees, and clients with substantial reserves but limited cash flow.",
      icon: DollarSign,
    },
    {
      title: "Construction & Renovation Loans",
      description:
        "Finance land purchase, new construction, or major renovations under one streamlined loan structure — from ground-up builds to full rehabs.",
      icon: Building2,
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#01503c]/5 rounded-full blur-[150px] pointer-events-none" />

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
            Loan Solutions
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Expert Mortgage Solutions for{" "}
            <span className="gradient-text">Every Borrower Profile</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 max-w-3xl mx-auto text-lg"
          >
            Purpose-built loan strategies tailored to your income, assets, and
            long-term goals — not one-size-fits-all rates.
          </motion.p>
        </motion.div>

        {/* Loan Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className="feature-card rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01503c] to-[#4a7a6c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#01503c]/30 to-[#4a7a6c]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <loan.icon className="w-7 h-7 text-[#4a7a6c]" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#4a7a6c] transition-colors duration-300">
                {loan.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {loan.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
            >
              100+
            </motion.div>
            <p className="text-zinc-400">Families Served</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring" }}
            >
              19
            </motion.div>
            <p className="text-zinc-400">Avg. Days to Close</p>
          </div>
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold gradient-text mb-2"
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
            >
              50+
            </motion.div>
            <p className="text-zinc-400">5-Star Reviews</p>
          </div>
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
            Who Is Guiding You
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Mortgage Guidance From a Real Person
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
              className="w-32 h-32 rounded-full mx-auto mb-6 relative overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(74, 122, 108, 0.4)",
                  "0 0 0 20px rgba(74, 122, 108, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Image
                src="/Chris.png"
                alt="Chris Crocker"
                fill
                className="object-cover"
                priority
              />
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
              <span className="text-zinc-300 text-sm font-medium">
                Real Consultants Mortgage
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      name: "Ritchy V",
      source: "Experience.com",
      rating: 5,
      text: "Working with Chris Crocker during the process of closing on our home was truly exceptional. From start to finish, Chris made what could have been a stressful experience feel smooth, organized, and completely manageable. He was always available to answer our questions. His professionalism and genuine dedication to his clients really stand out.",
    },
    {
      name: "Margaret D",
      source: "Experience.com",
      rating: 5,
      text: "Chris Crocker was a very knowledgeable person. He was a pleasure to meet and very happy he was our loan officer. He was very professional and explained our documents completely. He answered every question we had in a timely manner. I never give 5 stars, but he deserves every one of them.",
    },
    {
      name: "Jeffery H",
      source: "Zillow",
      rating: 5,
      text: "I recently had the pleasure of working with Chris Crocker to secure a mortgage for my dream home in Santa Monica. Chris was professional, knowledgeable, and a pleasure to work with throughout the entire process. He made the mortgage process so easy and straightforward. I highly recommend Chris Crocker as a lender - he is truly exceptional.",
    },
    {
      name: "Mark E",
      source: "Experience.com",
      rating: 5,
      text: "We actually maintained active applications with 3 different mortgage firms until we had written offers from 2 of the 3. Not only did Active Link smoke the competition, Mr. Crocker distinguished himself with his honesty, diligence, and professionalism. What a pleasure!",
    },
    {
      name: "Rodney K",
      source: "Zillow",
      rating: 5,
      text: "What impressed me the most about Chris was his genuine commitment to my success. He went above and beyond to navigate any challenges that arose, demonstrating a deep understanding of the industry and a determination to find solutions. His positive attitude made the entire loan process smooth and stress-free.",
    },
    {
      name: "Lily",
      source: "Zillow",
      rating: 5,
      text: "Very professional and was always available for any questions I had! Working with him was easy, and his whole team was a pleasure. Honestly was very scared as it was my first time getting a home loan but Chris really made me comfortable.",
    },
    {
      name: "Stefanie K",
      source: "Experience.com",
      rating: 5,
      text: "Chris Crocker was very helpful during the refi process. He is very knowledgeable and personable. He always went above and beyond to make sure everything went smoothly. A big thank you to Chris! I will refer and recommend him in the future!",
    },
    {
      name: "Sarah Montoya",
      source: "Zillow",
      rating: 5,
      text: "Chris was extremely knowledgeable about the mortgage process and helped my wife and I save hundreds of dollars a month! We closed on time and the rate ended up cheaper than he originally quoted.",
    },
    {
      name: "James M",
      source: "Experience.com",
      rating: 5,
      text: "Best experience I have ever had, fast easy kept informed. Chris and Oscar were great and honest throughout the whole process thank you for having people like that.",
    },
    {
      name: "Modesto G",
      source: "Experience.com",
      rating: 5,
      text: "Chris was so knowledgeable and friendly, he explained to me the whole process of my loan and answered all my questions. He was with me throughout the whole process until my closing date. Nice guy, thank you again.",
    },
    {
      name: "Dale M",
      source: "Experience.com",
      rating: 5,
      text: "I found Mr. Crocker to be professional, informative, and attentive. The next time I have a financial need, I will be contacting him.",
    },
    {
      name: "Rebecca H",
      source: "Zillow",
      rating: 5,
      text: "Chris was great to deal with, helped me get lower rate on my FHA loan for my home I purchased at the beginning of 2023. Overall I would recommend for anybody who purchased last year to refinance if they have an FHA loan.",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[(currentIndex - 1 + reviews.length) % reviews.length],
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#01503c]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4a7a6c]/10 rounded-full blur-[120px] pointer-events-none" />

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
            Client Reviews
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            What Clients Are Saying
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Real experiences from real homebuyers and homeowners.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#4a7a6c] text-[#4a7a6c]"
                  />
                ))}
              </div>
              <p className="text-zinc-400 text-sm">5.0 Average Rating</p>
            </div>
            <div className="w-px h-10 bg-zinc-700" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[#4a7a6c]">50+</p>
              <p className="text-zinc-400 text-sm">5-Star Reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#4a7a6c] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#4a7a6c] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-6 px-16">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={`${review.name}-${currentIndex}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                  }}
                  animate={{
                    opacity: index === 1 ? 1 : 0.5,
                    scale: index === 1 ? 1 : 0.85,
                    x: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`feature-card rounded-2xl p-8 ${
                    index === 1 ? "w-full max-w-2xl" : "hidden lg:block w-80"
                  } ${index === 1 ? "z-10" : "z-0"}`}
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-[#4a7a6c]/30 mb-4" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-[#4a7a6c] text-[#4a7a6c]" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-zinc-300 leading-relaxed mb-6 ${
                      index === 1 ? "text-lg" : "text-sm line-clamp-4"
                    }`}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-zinc-500">{review.source}</p>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#01503c]/20 border border-[#4a7a6c]/30">
                      <Star className="w-4 h-4 fill-[#4a7a6c] text-[#4a7a6c]" />
                      <span className="text-[#4a7a6c] text-sm font-medium">
                        5.0
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#4a7a6c]"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
            <span className="text-zinc-400 text-sm">Reviews from</span>
            <span className="font-semibold text-white">Experience.com</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
            <span className="text-zinc-400 text-sm">Reviews from</span>
            <span className="font-semibold text-white">Zillow</span>
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
        "Initial conversations are informational. We'll explain everything before pulling credit.",
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
          <motion.p variants={fadeInUp} className="text-zinc-400">
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
                  href="https://homequityreport.com/chriscrocker"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="https://calendly.com/chriscrockermortgage/mwm"
                  target="_blank"
                  rel="noopener noreferrer"
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

// Embeds Section (Preview)
function EmbedsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Initialize Calendly badge widget after script loads
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/chriscrockermortgage/mwm",
          text: "Loan Strategy Chat",
          color: "#01503c",
          textColor: "#ffffff",
          branding: true,
        });
      }
    };

    return () => {
      // Cleanup
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-zinc-900/50"
    >
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
            Quick Tools
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Get Started Now
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Use these tools to check your home equity or get pre-qualified as a
            buyer.
          </motion.p>
        </motion.div>

        {/* Embeds Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Home Owners Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="feature-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#01503c]/20 flex items-center justify-center">
                <HomeIcon className="w-5 h-5 text-[#4a7a6c]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Home Equity Report</h3>
                <p className="text-zinc-500 text-sm">For Current Homeowners</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white">
              <iframe
                src="https://homequityreport.com/widget?user=chriscrocker&hex=01503c"
                style={{ border: "none" }}
                name="homeequity"
                scrolling="no"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                height="400px"
                width="100%"
                allowFullScreen
              />
            </div>
            <a
              href="https://homequityreport.com/chriscrocker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4a7a6c] hover:text-[#6b9a8c] mt-4 text-sm font-medium transition-colors"
            >
              Open Full Page <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Buyers Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="feature-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#01503c]/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#4a7a6c]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Buyer Pre-Qualification
                </h3>
                <p className="text-zinc-500 text-sm">For Home Buyers</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white">
              <iframe
                src="https://buyerprequalify.com/widget/?user=chriscrocker&hex=01503c&text=Get%20Started"
                style={{ border: "none" }}
                name="buyerprequal"
                scrolling="no"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                height="400px"
                width="100%"
                allowFullScreen
              />
            </div>
            <a
              href="https://buyerprequalify.com/chriscrocker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4a7a6c] hover:text-[#6b9a8c] mt-4 text-sm font-medium transition-colors"
            >
              Open Full Page <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* Calendly Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-zinc-500 text-sm">
            The &ldquo;Loan Strategy Chat&rdquo; button in the bottom-right
            corner opens Calendly scheduling.
          </p>
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
                <span className="text-[#4a7a6c] font-medium ml-1">
                  Mortgage
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm mb-4">
              Chris Crocker | NMLS 2264202
            </p>
            <p className="text-zinc-500 text-sm">Equal Housing Lender</p>
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
            <a
              href="#"
              className="hover:text-[#4a7a6c] transition-colors animated-underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#4a7a6c] transition-colors animated-underline"
            >
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
      <LoanTypesSection />
      <div className="section-divider" />
      <TrustSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <FAQSection />
      <CTASection />
      <EmbedsSection />
      <Footer />
    </main>
  );
}
