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
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

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

// Hero Section - Split layout design
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#01503c]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4a7a6c]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4a7a6c]/30 bg-[#01503c]/10 text-sm mb-8"
            >
              <Handshake className="w-4 h-4 text-[#4a7a6c]" />
              <span className="text-[#4a7a6c]">Strategic Partnerships</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              We Don&apos;t Just
              <br />
              Close Loans.
              <br />
              <span className="gradient-text">We Build Ecosystems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-zinc-400 mb-10 max-w-lg"
            >
              We work alongside top-tier real estate and financial professionals 
              to deliver seamless transactions, protect client relationships, 
              and create long-term value for everyone involved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://calendly.com/chriscrockermortgage/mwm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary px-6 py-3.5 rounded-xl font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Partner Call
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="mailto:chris@chrislending.com"
                className="inline-flex items-center gap-2 btn-secondary px-6 py-3.5 rounded-xl font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Email Us
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Stats/Value props in bento style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-2 feature-card rounded-2xl p-6 border border-[#4a7a6c]/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Reputation First</h3>
                  <p className="text-zinc-400 text-sm">When you refer a client, you&apos;re putting your name on the line. We treat that seriously.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="feature-card rounded-2xl p-5 border border-[#4a7a6c]/20"
            >
              <Target className="w-8 h-8 text-[#4a7a6c] mb-3" />
              <h3 className="font-semibold mb-1">Private Advisory</h3>
              <p className="text-zinc-500 text-sm">Not a call center</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="feature-card rounded-2xl p-5 border border-[#4a7a6c]/20"
            >
              <Zap className="w-8 h-8 text-[#4a7a6c] mb-3" />
              <h3 className="font-semibold mb-1">Fast Structuring</h3>
              <p className="text-zinc-500 text-sm">No last-minute surprises</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="feature-card rounded-2xl p-5 border border-[#4a7a6c]/20"
            >
              <MessageSquare className="w-8 h-8 text-[#4a7a6c] mb-3" />
              <h3 className="font-semibold mb-1">Clear Updates</h3>
              <p className="text-zinc-500 text-sm">Every milestone</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="feature-card rounded-2xl p-5 border border-[#4a7a6c]/20"
            >
              <TrendingUp className="w-8 h-8 text-[#4a7a6c] mb-3" />
              <h3 className="font-semibold mb-1">Make You Shine</h3>
              <p className="text-zinc-500 text-sm">Be the hero</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Partners Section - Tabbed interface
function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const partners = [
    {
      title: "Real Estate Agents",
      icon: HomeIcon,
      color: "from-emerald-500 to-teal-600",
      benefits: [
        "Pre-approve buyers properly (not pre-qualify loosely)",
        "Structure offers strategically",
        "Win competitive deals",
        "Close on time without drama",
      ],
      tagline: "You focus on negotiating and finding the property. We handle the capital.",
    },
    {
      title: "Contractors & Renovation",
      icon: Hammer,
      color: "from-amber-500 to-orange-600",
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
      color: "from-blue-500 to-indigo-600",
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
      color: "from-purple-500 to-violet-600",
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
      color: "from-rose-500 to-pink-600",
      benefits: [
        "Strategic refinancing analysis",
        "Equity leverage planning",
        "Cash-flow structuring",
        "Tax-efficient loan structuring",
      ],
      tagline: "We don't replace advisors. We complement them.",
    },
  ];

  const currentPartner = partners[activeTab];
  const IconComponent = currentPartner.icon;

  return (
    <section ref={ref} id="who-we-partner" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6">
            Who We Partner With
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Built for Professionals Who{" "}
            <span className="gradient-text">Expect Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tab buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-2"
          >
            {partners.map((partner, index) => (
              <motion.button
                key={partner.title}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                  activeTab === index
                    ? "bg-[#01503c]/30 border border-[#4a7a6c]/40"
                    : "hover:bg-zinc-800/50 border border-transparent"
                }`}
                whileHover={{ x: activeTab === index ? 0 : 5 }}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center shrink-0`}>
                  <partner.icon className="w-5 h-5 text-white" />
                </div>
                <span className={`font-medium ${activeTab === index ? "text-white" : "text-zinc-400"}`}>
                  {partner.title}
                </span>
                {activeTab === index && (
                  <ChevronRight className="w-5 h-5 text-[#4a7a6c] ml-auto" />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Content area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="feature-card rounded-2xl p-8 md:p-10 border border-[#4a7a6c]/20 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentPartner.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{currentPartner.title}</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {currentPartner.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 bg-zinc-800/30 rounded-lg p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#4a7a6c] shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-zinc-800 pt-6">
                  <p className="text-lg text-[#4a7a6c] italic">
                    &ldquo;{currentPartner.tagline}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Us - Horizontal layout
function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    { icon: MessageSquare, text: "Transparent communication at every stage", highlight: "Transparent" },
    { icon: Zap, text: "Fast response times", highlight: "Fast" },
    { icon: Sparkles, text: "Creative structuring when others say \"no\"", highlight: "Creative" },
    { icon: Clock, text: "In-house systems to track and update deals", highlight: "Organized" },
    { icon: Users, text: "Respect for your client relationships", highlight: "Respectful" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#01503c]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6">
            Why Work With Us
          </span>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Why Professionals Choose Us
            </h2>
            <p className="text-zinc-400 text-lg">
              We are not here to &ldquo;cross-sell&rdquo; your book of business. 
              <span className="text-[#4a7a6c] font-medium"> We are here to protect it.</span>
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="feature-card rounded-2xl p-6 border border-[#4a7a6c]/20 flex-1 min-w-[200px] max-w-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4a7a6c] mb-2">{reason.highlight}</h3>
              <p className="text-zinc-400 text-sm">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section - Timeline style
function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { 
      number: "01", 
      title: "Introduce Us", 
      description: "Send an email or text introducing us to your client",
      icon: Mail
    },
    { 
      number: "02", 
      title: "Strategy Call", 
      description: "We schedule a strategy call with your client",
      icon: Phone
    },
    { 
      number: "03", 
      title: "Stay Updated", 
      description: "You're updated at every milestone",
      icon: MessageSquare
    },
    { 
      number: "04", 
      title: "Clean Close", 
      description: "We close cleanly and follow up long term",
      icon: CheckCircle2
    },
  ];

  return (
    <section ref={ref} id="process" className="py-24 relative overflow-hidden bg-zinc-900/50">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#01503c]/20 text-[#4a7a6c] text-xs uppercase tracking-wider font-medium mb-6">
            Referral Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple. Professional. <span className="gradient-text">Predictable.</span>
          </h2>
        </motion.div>

        {/* Desktop Steps */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="feature-card rounded-2xl p-6 border border-[#4a7a6c]/20 h-full text-center transition-all duration-300 group-hover:border-[#4a7a6c]/50 group-hover:shadow-lg group-hover:shadow-[#01503c]/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-5xl font-bold text-[#4a7a6c]/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </div>
              
              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden lg:block">
                  <ChevronRight className="w-6 h-6 text-[#4a7a6c]/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-[#4a7a6c]/30 my-2" />
                )}
              </div>
              <div className="feature-card rounded-xl p-5 border border-[#4a7a6c]/20 flex-1">
                <span className="text-2xl font-bold text-[#4a7a6c]/30">{step.number}</span>
                <h3 className="text-lg font-semibold mt-1 mb-1">{step.title}</h3>
                <p className="text-zinc-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section - Centered minimal
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#01503c]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4a7a6c]/15 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#01503c] to-[#4a7a6c] flex items-center justify-center mx-auto mb-8"
          >
            <Handshake className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            If you&apos;re a professional who values strong communication, clean execution, 
            and long-term relationships — we should connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">Chris </span>
                <span className="text-[#4a7a6c] font-semibold">Crocker</span>
                <span className="text-zinc-600 mx-1">|</span>
                <a href="tel:+19802324269" className="text-zinc-400 hover:text-[#4a7a6c] transition-colors text-sm">
                  (980) 232-4269
                </a>
              </div>
              <div className="text-xs text-zinc-500">Mortgage Advisor</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors">
              Home
            </Link>
            <Link href="/partners" className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors">
              Partners
            </Link>
            <a
              href="https://www.nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-[#4a7a6c] text-sm transition-colors"
            >
              NMLS Consumer Access
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-600 text-sm">
            NMLS 2264202 | Real Consultants Mortgage | Equal Housing Lender
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            © 2026 Real Consultants Mortgage
          </p>
        </div>
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
      <PartnersSection />
      <div className="section-divider" />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
