"use client";

import { motion } from "framer-motion";
import { Utensils, Building2, ShoppingBag, Package, Wrench, Users, Sparkles } from "lucide-react";

const industries = [
  {
    icon: Utensils,
    title: "Restaurants",
    description: "Track diner preferences, automate reservation follow-ups, and send personalized offers to increase repeat visits.",
  },
  {
    icon: Building2,
    title: "Hotels",
    description: "Understand guest preferences, predict booking patterns, and automate personalized communication throughout the stay journey.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Connect online and offline purchase data to create unified customer profiles and targeted campaigns.",
  },
  {
    icon: Package,
    title: "D2C Brands",
    description: "Build direct relationships with customers through AI-powered personalization across all touchpoints.",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "Automate appointment reminders, follow-ups, and maintenance schedules to improve customer retention.",
  },
];

export function UsersSection() {
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
            <Users className="w-4 h-4" />
            <span>Ideal For</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Built for{" "}
            <span className="gradient-text">Customer-Focused</span> Businesses
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            This product helps businesses understand and automate customer relationships across industries.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-[#0052FF]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 rounded-2xl gradient-bg text-white flex flex-col justify-center items-center text-center"
          >
            <Sparkles className="w-10 h-10 mb-4" />
            <h3 className="font-display text-xl mb-2">
              Your Industry?
            </h3>
            <p className="text-white/80 text-sm mb-4">
              We&apos;re expanding to more verticals. Let us know what you need.
            </p>
            <button
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2 bg-white text-[#0052FF] rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
