"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Home as HomeIcon,
  Phone,
  Menu,
  X,
  Users,
  Building2,
  Hammer,
  Scale,
  Calculator,
  CheckCircle2,
  MessageSquare,
  Zap,
  Shield,
  Clock,
  Handshake,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
};

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
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col">
            <div className="flex items-center">
              <span className="font-semibold text-lg sm:text-xl">Chris </span>
              <span className="text-[#4a7a6c] font-semibold text-lg sm:text-xl">Crocker</span>
            </div>
            <div className="text-xs text-zinc-500">Mortgage Advisor</div>
          </Link>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <a
            href="tel:+19802324269"
            className="text-zinc-400 hover:text-[#4a7a6c] transition-colors text-sm sm:text-base hidden sm:inline"
          >
            (980) 232-4269
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="text-zinc-400 hover:text-white transition-colors text-sm px-3 py-2"
          >
            Home
          </Link>
          <Link
            href="/partners"
            className="text-[#4a7a6c] text-sm px-3 py-2"
          >
            Partners
          </Link>
          <a
            href="#who-we-partner"
            className="text-zinc-400 hover:text-white transition-colors text-sm px-3 py-2"
          >
            Who We Work With
          </a>
          <a
            href="#process"
            className="text-zinc-400 hover:text-white transition-colors text-sm px-3 py-2"
          >
            Process
          </a>
          <motion.a
            href="https://calendly.com/chriscrockermortgage/mwm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium ml-2"
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
            <nav className="p-4 flex flex-col gap-2">
              <Link
                href="/"
                className="text-zinc-400 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/partners"
                className="text-[#4a7a6c] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
              <a
                href="#who-we-partner"
                className="text-zinc-400 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Work With
              </a>
              <a
                href="#process"
                className="text-zinc-400 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="https://calendly.com/chriscrockermortgage/mwm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5 rounded-lg text-sm font-medium text-center mt-2"
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

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] pt-32 pb-20 overflow-hidden flex items-center"
    >
      {/* Animated background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 radial-gradient" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
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
              <Handshake className="w-4 h-4 text-[#4a7a6c]" />
              <span className="text-[#4a7a6c]">Strategic Partnerships</span>
            </motion.span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            We Don&apos;t Just Close Loans.{" "}
            <span className="gradient-text">We Build Ecosystems.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto"
          >
            We work alongside top-tier real estate and financial professionals to deliver seamless transactions, 
            protect client relationships, and create long-term value for everyone involved.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://calendly.com/chriscrockermortgage/mwm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg font-medium"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Partner Call
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.a>
            <motion.a
              href="mailto:chris@chrislending.com"
              className="inline-flex items-center gap-2 btn-secondary px-8 py-4 rounded-xl text-lg font-medium"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Become a Strategic Partner
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Philosophy Section
function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    "When you refer a client, you're putting your name on the line. We treat that seriously.",
    "Our role isn't to \"take over\" your client. It's to enhance your relationship and make you look like the hero.",
    "Clear communication. Fast structuring. No last-minute surprises.",
    "We operate like a private advisory desk — not a call center.",
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#01503c]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            variants={scaleIn}
            className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6"
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            In this business, <span className="gradient-text">reputation is everything.</span>
          </motion.h2>

          <div className="space-y-4 mt-10">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 feature-card rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#01503c]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#4a7a6c]" />
                </div>
                <p className="text-zinc-300 text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Partners Section
function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    {
      title: "Real Estate Agents",
      icon: HomeIcon,
      description: "We help agents close deals with confidence.",
      benefits: [
        "Pre-approve buyers properly (not pre-qualify loosely)",
        "Structure offers strategically",
        "Win competitive deals",
        "Close on time without drama",
      ],
      tagline: "You focus on negotiating and finding the property. We handle the capital.",
    },
    {
      title: "Contractors & Renovation Companies",
      icon: Hammer,
      description: "Funding solutions for renovation projects.",
      benefits: [
        "Renovation financing",
        "Construction-to-permanent loans",
        "Investor rehab financing",
        "Fix & flip capital",
      ],
      tagline: "When your clients need funding to move forward, we provide the strategy to make it possible.",
    },
    {
      title: "Construction Companies",
      icon: Building2,
      description: "For builders and developers.",
      benefits: [
        "Ground-up construction financing",
        "Spec build funding",
        "Investor capital structuring",
        "Bridge financing",
      ],
      tagline: "We understand timelines, draws, and risk. We don't slow projects down — we accelerate them.",
    },
    {
      title: "Attorneys",
      icon: Scale,
      description: "Real Estate & Estate Planning collaboration.",
      benefits: [
        "Probate property sales",
        "Trust transfers",
        "Divorce buyouts",
        "Strategic refinancing solutions",
      ],
      tagline: "Our job is to simplify complex financial pieces so you can focus on legal execution.",
    },
    {
      title: "CPAs & Financial Advisors",
      icon: Calculator,
      description: "Support for wealth-building conversations.",
      benefits: [
        "Strategic refinancing analysis",
        "Equity leverage planning",
        "Cash-flow structuring",
        "Tax-efficient loan structuring",
      ],
      tagline: "We don't replace advisors. We complement them.",
    },
  ];

  return (
    <section ref={ref} id="who-we-partner" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
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
            Who We Partner With
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Built for Professionals Who{" "}
            <span className="gradient-text">Expect Excellence</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="feature-card rounded-2xl p-8 border border-[#4a7a6c]/20"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center">
                      <partner.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{partner.title}</h3>
                      <p className="text-zinc-500">{partner.description}</p>
                    </div>
                  </div>
                  <p className="text-[#4a7a6c] font-medium mt-4 italic">
                    &ldquo;{partner.tagline}&rdquo;
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-zinc-400 text-sm uppercase tracking-wider mb-3">We help with:</p>
                  {partner.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-[#4a7a6c] shrink-0" />
                      <span className="text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    { icon: MessageSquare, text: "Transparent communication at every stage" },
    { icon: Zap, text: "Fast response times" },
    { icon: Shield, text: "Creative structuring when others say \"no\"" },
    { icon: Clock, text: "In-house systems to track and update deals" },
    { icon: Users, text: "Respect for your client relationships" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#01503c]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
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
            Why Work With Us
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Why Professionals Choose to Work With Us
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="feature-card rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#01503c]/20 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-6 h-6 text-[#4a7a6c]" />
              </div>
              <p className="text-zinc-300">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-zinc-400">
            We are not here to &ldquo;cross-sell&rdquo; your book of business.
          </p>
          <p className="text-2xl font-semibold text-[#4a7a6c] mt-2">
            We are here to protect it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { number: 1, title: "Introduce Us", description: "Send an email or text introducing us to your client" },
    { number: 2, title: "Strategy Call", description: "We schedule a strategy call with your client" },
    { number: 3, title: "Stay Updated", description: "You're updated at every milestone" },
    { number: 4, title: "Clean Close", description: "We close cleanly and follow up long term" },
  ];

  return (
    <section ref={ref} id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
            Referral Process
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Simple. Professional. Predictable.
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="feature-card rounded-2xl p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-[#4a7a6c]/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center"
        >
          <div className="feature-card rounded-3xl p-12 md:p-16 relative overflow-hidden gradient-border">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01503c]/20 via-transparent to-[#4a7a6c]/10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4a7a6c]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                Let&apos;s Build Together
              </motion.h2>
              <motion.p 
                className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                If you&apos;re a professional who values strong communication, clean execution, 
                and long-term relationships — we should connect.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.a
                  href="mailto:chris@chrislending.com"
                  className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Become a Strategic Partner
                  <ArrowRight size={20} />
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
                  Schedule a Partner Call
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#01503c]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-xl">Chris </span>
                <span className="text-[#4a7a6c] font-semibold text-xl">Crocker</span>
                <span className="text-zinc-500 mx-1">|</span>
                <a 
                  href="tel:+19802324269" 
                  className="text-zinc-400 hover:text-[#4a7a6c] transition-colors"
                >
                  (980) 232-4269
                </a>
              </div>
              <div className="text-sm text-zinc-500">Mortgage Advisor</div>
            </div>

            <p className="text-zinc-400 text-sm mb-2">
              NMLS 2264202 | Real Consultants Mortgage
            </p>
            <p className="text-zinc-500 text-sm">Equal Housing Lender</p>
          </motion.div>

          <motion.div
            className="md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-zinc-400 mb-4">
              Strategic partnerships built on clarity, execution, and trust.
            </p>
            <div className="flex gap-4 md:justify-end">
              <Link href="/" className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors">
                Home
              </Link>
              <Link href="/partners" className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors">
                Partners
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-zinc-500 text-sm">
            © 2026 Real Consultants Mortgage
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors">
              Privacy Policy
            </a>
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors"
            >
              NMLS Consumer Access
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function PartnersPage() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <PhilosophySection />
      <div className="section-divider" />
      <PartnersSection />
      <div className="section-divider" />
      <WhyChooseUsSection />
      <div className="section-divider" />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
