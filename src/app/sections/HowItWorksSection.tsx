"use client";

import { motion } from "framer-motion";
import { Plug, Brain, Send, ChevronRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Apps",
    description:
      "Integrate your existing tools in minutes. Connect POS, CRM, WhatsApp, email, and more with one-click integrations.",
    items: ["POS Systems", "CRM Platforms", "WhatsApp Business", "Email Services"],
    color: "#10B981",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI Understands Behavior",
    description:
      "Our AI analyzes customer interactions across all channels to build comprehensive behavioral profiles.",
    items: ["Purchase History", "Conversation Analysis", "Engagement Patterns"],
    color: "#8B5CF6",
  },
  {
    number: "03",
    icon: Send,
    title: "AI Takes Action",
    description:
      "The system automatically executes personalized campaigns, sends messages, and recommends offers.",
    items: ["Send Messages", "Recommend Offers", "Automate Campaigns"],
    color: "#0052FF",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            <span>How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Simple Setup, <span className="gradient-text">Powerful Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Get started in three easy steps and let AI transform your customer operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-[#0052FF]/30 transition-all duration-300 h-full group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full gradient-bg text-white text-sm font-bold">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mt-2 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon
                      className="w-7 h-7"
                      style={{ color: step.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>

                  {/* Items list */}
                  <div className="space-y-2">
                    {step.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <ChevronRight
                          className="w-4 h-4 shrink-0"
                          style={{ color: step.color }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 items-center justify-center z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-6 h-6 text-[#0052FF]" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="flex items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
                {index < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-border mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
