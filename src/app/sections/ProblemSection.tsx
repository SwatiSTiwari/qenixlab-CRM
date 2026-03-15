"use client";

import { motion } from "framer-motion";
import { AlertCircle, Database, Users, TrendingDown, EyeOff } from "lucide-react";

const problems = [
  {
    icon: Database,
    title: "Scattered Data",
    description: "Customer data is scattered across apps, making it impossible to get a unified view.",
  },
  {
    icon: Users,
    title: "Manual Follow-ups",
    description: "Teams waste hours manually following up with customers instead of focusing on growth.",
  },
  {
    icon: TrendingDown,
    title: "Missed Opportunities",
    description: "Businesses miss revenue opportunities because they can't identify customer needs in time.",
  },
  {
    icon: EyeOff,
    title: "Hidden Insights",
    description: "Valuable insights remain buried in dashboards, never turning into actionable decisions.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            <AlertCircle className="w-4 h-4" />
            <span>The Problem</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Why Current CRMs Are{" "}
            <span className="text-destructive">Broken</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Traditional CRMs store data but do not understand customers or take action.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-[#0052FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0052FF]/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-destructive/10 text-destructive group-hover:bg-[#0052FF]/10 group-hover:text-[#0052FF] transition-colors">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground italic">
            &ldquo;The average sales rep spends only 36% of their time actually selling.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            — Salesforce Research
          </p>
        </motion.div>
      </div>
    </section>
  );
}
