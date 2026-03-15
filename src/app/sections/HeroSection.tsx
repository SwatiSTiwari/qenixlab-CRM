"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Users, TrendingUp } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useRef, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Stats data
const stats = [
  { value: 500, suffix: "+", label: "Waitlist Members" },
  { value: 99, suffix: "%", label: "Satisfaction" },
  { value: 50, suffix: "K+", label: "AI Interactions" },
  { value: 3, suffix: "x", label: "ROI Average" },
];

// Floating badges
const floatingBadges = [
  { icon: Zap, label: "AI Powered", color: "#0052FF", delay: 0 },
  { icon: Shield, label: "Secure", color: "#10B981", delay: 0.5 },
  { icon: Users, label: "Collaborative", color: "#8B5CF6", delay: 1 },
  { icon: TrendingUp, label: "Growing", color: "#F59E0B", delay: 1.5 },
];

export function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("hero-section")?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 md:pt-28"
    >
      {/* Mouse Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-50"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 82, 255, 0.06), transparent 40%)`
          ),
        }}
      />

      {/* Magic UI Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        staticity={30}
        color="#0052FF"
        ease={80}
        size={0.5}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-muted/20 z-[1]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#0052FF]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-[#4D7CFF]/10 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#0052FF]/5 blur-[80px]"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Badges */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block">
        {floatingBadges.map((badge, i) => (
          <motion.div
            key={badge.label}
            className="absolute pointer-events-auto"
            style={{
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? "5%" : "85%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: badge.delay + 1, duration: 0.5 },
              scale: { delay: badge.delay + 1, duration: 0.5 },
              y: {
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              },
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg cursor-pointer hover:scale-110 transition-transform"
              style={{ borderColor: `${badge.color}30` }}
            >
              <badge.icon className="w-4 h-4" style={{ color: badge.color }} />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          {/* Section Label */}
          <BlurFade delay={0.1} inView>
            <div className="flex justify-center">
              <motion.div
                className="section-label"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Customer Management</span>
              </motion.div>
            </div>
          </BlurFade>

          {/* Main Headline with TextAnimate */}
          <BlurFade delay={0.2} inView>
            <div className="space-y-1">
              <TextAnimate
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight block"
                animation="blurInUp"
                by="word"
              >
                The Autonomous AI CRM for
              </TextAnimate>
              <TextAnimate
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight gradient-text block"
                animation="blurInUp"
                by="word"
                delay={0.4}
              >
                Modern Businesses
              </TextAnimate>
            </div>
          </BlurFade>

          {/* Subheadline */}
          <BlurFade delay={0.5} inView>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Connect your CRM, POS, WhatsApp, and email in one ecosystem. Let AI
              understand customers, automate communication, and run campaigns for
              you.
            </p>
          </BlurFade>

          {/* CTA Buttons with ShimmerButton */}
          <BlurFade delay={0.6} inView>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <ShimmerButton
                className="px-8 py-4 text-base rounded-full group"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="linear-gradient(135deg, #0052FF 0%, #4D7CFF 100%)"
                onClick={scrollToWaitlist}
              >
                <span className="flex items-center gap-2 text-white font-medium">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </ShimmerButton>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base rounded-full border-2 hover:bg-muted transition-colors group"
                onClick={scrollToWaitlist}
              >
                Get Early MVP Access
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </div>
          </BlurFade>

          {/* Stats Row */}
          <BlurFade delay={0.7} inView>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-baseline justify-center gap-0.5">
                    <NumberTicker
                      value={stat.value}
                      className="text-3xl md:text-4xl font-display gradient-text"
                    />
                    <span className="text-2xl md:text-3xl font-display gradient-text">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </BlurFade>

          {/* Visual Flow Diagram with AnimatedBeams */}
          <motion.div
            variants={fadeInUp}
            className="pt-12 lg:pt-16"
            ref={containerRef}
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Flow visualization */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Input Sources */}
                <motion.div
                  ref={inputRef}
                  className="space-y-4 relative z-20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {[
                    { icon: "💳", label: "POS Systems" },
                    { icon: "📧", label: "Email" },
                    { icon: "💬", label: "CRM Data" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      id={`input-${i}`}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-sm relative z-20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(255,255,255,0.95)" }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* AI Engine Center */}
                <motion.div
                  ref={aiRef}
                  className="relative flex justify-center z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <motion.div
                    className="relative w-44 h-44 rounded-2xl gradient-bg flex items-center justify-center glow-blue cursor-pointer group"
                    animate={{
                      boxShadow: [
                        "0 0 40px -10px rgba(0, 82, 255, 0.3)",
                        "0 0 80px -10px rgba(0, 82, 255, 0.5)",
                        "0 0 40px -10px rgba(0, 82, 255, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                  >
                    {/* Border Beam Effect */}
                    <BorderBeam
                      size={180}
                      duration={6}
                      borderWidth={3}
                      colorFrom="#0052FF"
                      colorTo="#4D7CFF"
                      delay={0}
                      className="rounded-2xl"
                    />

                    <div className="text-center text-white relative z-10">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="mb-2"
                      >
                        <Sparkles className="w-10 h-10 mx-auto" />
                      </motion.div>
                      <span className="font-display text-xl block">AI CRM</span>
                      <motion.span
                        className="text-xs text-white/80 block mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      >
                        Processing...
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Magic UI AnimatedBeams */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none">
                    <AnimatedBeam
                      containerRef={containerRef}
                      fromRef={inputRef}
                      toRef={aiRef}
                      curvature={30}
                      pathColor="#0052FF"
                      pathWidth={3}
                      gradientStartColor="#0052FF"
                      gradientStopColor="#4D7CFF"
                      delay={0.5}
                    />
                    <AnimatedBeam
                      containerRef={containerRef}
                      fromRef={aiRef}
                      toRef={outputRef}
                      curvature={-30}
                      pathColor="#0052FF"
                      pathWidth={3}
                      gradientStartColor="#0052FF"
                      gradientStopColor="#4D7CFF"
                      delay={0.8}
                    />
                  </div>

                  {/* Orbiting dots */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[0, 90, 180, 270].map((angle, i) => (
                      <motion.div
                        key={angle}
                        className="absolute w-2 h-2 rounded-full bg-[#0052FF]"
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                        animate={{
                          x: [
                            Math.cos((angle * Math.PI) / 180) * 100 - 4,
                            Math.cos(((angle + 360) * Math.PI) / 180) * 100 - 4,
                          ],
                          y: [
                            Math.sin((angle * Math.PI) / 180) * 100 - 4,
                            Math.sin(((angle + 360) * Math.PI) / 180) * 100 - 4,
                          ],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Outputs */}
                <motion.div
                  ref={outputRef}
                  className="space-y-4 relative z-20"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {[
                    { icon: "📱", label: "WhatsApp" },
                    { icon: "📊", label: "Insights" },
                    { icon: "🎯", label: "Campaigns" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border shadow-sm relative z-20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      whileHover={{ scale: 1.02, x: -5, backgroundColor: "rgba(255,255,255,0.95)" }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
