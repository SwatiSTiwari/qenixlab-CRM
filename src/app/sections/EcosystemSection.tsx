"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  Database,
  MessageCircle,
  Mail,
  Phone,
  Megaphone,
  Layers,
  Sparkles,
} from "lucide-react";

const integrations = [
  { icon: CreditCard, label: "POS Systems", color: "#10B981" },
  { icon: Database, label: "CRM Platforms", color: "#8B5CF6" },
  { icon: MessageCircle, label: "WhatsApp", color: "#22C55E" },
  { icon: Mail, label: "Email", color: "#EF4444" },
  { icon: Phone, label: "Telephony", color: "#F59E0B" },
  { icon: Megaphone, label: "Marketing Tools", color: "#EC4899" },
];

export function EcosystemSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            <Layers className="w-4 h-4" />
            <span>Integrations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Your Entire Customer{" "}
            <span className="gradient-text">Ecosystem</span> in One Place
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            All customer data flows into one AI system that understands the entire customer journey.
          </p>
        </motion.div>

        {/* Ecosystem visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl bg-card border border-border p-8 md:p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Central AI Hub */}
              <div className="flex justify-center mb-12">
                <motion.div
                  className="relative"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-32 h-32 rounded-2xl gradient-bg flex items-center justify-center glow-blue">
                    <div className="text-center text-white">
                      <Sparkles className="w-8 h-8 mx-auto mb-1" />
                      <span className="font-display text-sm">
                        AI Engine
                      </span>
                    </div>
                  </div>
                  {/* Pulse rings */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#0052FF]"
                    animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#0052FF]"
                    animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
              </div>

              {/* Integration nodes */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative"
                  >
                    {/* Connection line */}
                    <div
                      className="hidden lg:block absolute top-0 left-1/2 w-px h-8 -translate-y-full"
                      style={{
                        background: `linear-gradient(to top, ${integration.color}40, transparent)`,
                      }}
                    />
                    <div
                      className="hidden lg:block absolute top-0 left-1/2 w-1 h-1 rounded-full -translate-y-full"
                      style={{ backgroundColor: integration.color }}
                    />

                    <div className="p-4 rounded-xl bg-background border border-border hover:border-[#0052FF]/30 transition-all text-center group">
                      <div
                        className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${integration.color}15` }}
                      >
                        <integration.icon
                          className="w-6 h-6 transition-colors"
                          style={{ color: integration.color }}
                        />
                      </div>
                      <span className="text-sm font-medium">{integration.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data flow animation */}
              <div className="mt-12 text-center">
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0052FF]/5 border border-[#0052FF]/20"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full gradient-bg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-sm text-muted-foreground">
                    Real-time data synchronization across all channels
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
