"use client";

import { motion } from "framer-motion";
import { Zap, Lightbulb, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Connects Business Apps",
    description: "Integrates POS, CRM, WhatsApp, email, and more into a unified system.",
  },
  {
    icon: Lightbulb,
    title: "Understands Behavior",
    description: "AI analyzes customer interactions to identify patterns and intent.",
  },
  {
    icon: Sparkles,
    title: "Predicts Actions",
    description: "Forecasts churn risk and purchase likelihood before they happen.",
  },
  {
    icon: Zap,
    title: "Automates Campaigns",
    description: "Automatically triggers personalized campaigns based on customer activity.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Meet the{" "}
            <span className="gradient-text">Autonomous AI CRM</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Turn your CRM into an AI assistant that runs customer operations automatically.
          </p>
        </motion.div>

        {/* Main visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden gradient-border bg-card p-8 md:p-12">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-4">
                  From Data Storage to{" "}
                  <span className="gradient-text">Intelligent Action</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Traditional CRMs are passive databases. Our AI CRM actively
                  monitors, analyzes, and acts on your customer data 24/7.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time customer behavior analysis",
                    "Automated multi-channel communication",
                    "Predictive revenue optimization",
                    "Self-improving campaign performance",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#0052FF]/10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full gradient-bg" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right visual - AI Brain */}
              <motion.div
                className="relative flex justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative w-64 h-64">
                  {/* Outer ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-[#0052FF]/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Middle ring */}
                  <motion.div
                    className="absolute inset-4 rounded-full border border-[#0052FF]/30"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Center */}
                  <div className="absolute inset-8 rounded-2xl gradient-bg flex items-center justify-center glow-blue">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  {/* Orbiting dots */}
                  {[0, 90, 180, 270].map((angle, i) => (
                    <motion.div
                      key={angle}
                      className="absolute w-3 h-3 rounded-full gradient-bg"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        x: [
                          Math.cos((angle * Math.PI) / 180) * 120 - 6,
                          Math.cos(((angle + 360) * Math.PI) / 180) * 120 - 6,
                        ],
                        y: [
                          Math.sin((angle * Math.PI) / 180) * 120 - 6,
                          Math.sin(((angle + 360) * Math.PI) / 180) * 120 - 6,
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-[#0052FF]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
