"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Rocket, Network, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Customer Memory",
    description:
      "AI remembers every purchase, conversation, and preference. Build rich customer profiles that evolve with every interaction.",
    highlight: "Never forget a customer detail again",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description:
      "Identify churn risk before it happens. Predict purchase likelihood and customer lifetime value with AI-powered analytics.",
    highlight: "85% prediction accuracy",
  },
  {
    icon: Rocket,
    title: "Campaign Autopilot",
    description:
      "Set triggers and let AI run campaigns automatically. Send the right message at the right time without manual intervention.",
    highlight: "24/7 automated execution",
  },
  {
    icon: Network,
    title: "Unified Customer Graph",
    description:
      "Combines data from POS, CRM, email, and messaging into one intelligent system that sees the complete customer journey.",
    highlight: "360° customer view",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
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
            <span>Features</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Powered by{" "}
            <span className="gradient-text">Intelligent AI</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Advanced capabilities that transform how you manage customer relationships.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group h-full border-border hover:border-[#0052FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0052FF]/5 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl gradient-bg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                      <div className="pt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#0052FF]/10 text-[#0052FF]">
                          {feature.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative rounded-2xl overflow-hidden gradient-bg p-8 md:p-12 text-white">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-2">
                  Ready to experience the future?
                </h3>
                <p className="text-white/80">
                  Join hundreds of businesses waiting to transform their customer operations.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-white text-[#0052FF] rounded-full font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Get Early Access
              </motion.button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
