"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Cpu, Globe } from "lucide-react";

export function VisionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-95" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Our Vision</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            The Future of CRM
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-white/80">
            CRM will evolve from data storage tools into autonomous AI systems that manage customer engagement automatically.
          </p>
        </motion.div>

        {/* Vision cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-xl text-white mb-2">Proactive</h3>
            <p className="text-white/70 text-sm">
              AI anticipates customer needs before they arise, taking action without waiting for manual input.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-xl text-white mb-2">Intelligent</h3>
            <p className="text-white/70 text-sm">
              Continuously learning from every interaction to improve recommendations and outcomes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-xl text-white mb-2">Unified</h3>
            <p className="text-white/70 text-sm">
              A single source of truth across all customer touchpoints and communication channels.
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-display text-white italic">
            &ldquo;The best CRM is one that works while you sleep.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
