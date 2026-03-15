"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTASection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Sparkles className="w-16 h-16 text-[#0052FF]" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Be the First to Experience{" "}
            <span className="gradient-text">Autonomous CRM</span>
          </h2>

          {/* Subheadline */}
          <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            Join the waitlist today and shape the future of customer relationship management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="gradient-btn text-white px-8 py-6 text-base rounded-full group"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base rounded-full border-2 hover:bg-muted transition-colors"
              onClick={scrollToWaitlist}
            >
              Get MVP Access
            </Button>
          </div>

          {/* Trust text */}
          <p className="text-sm text-muted-foreground">
            Join 500+ businesses already on the waitlist
          </p>
        </motion.div>
      </div>
    </section>
  );
}
