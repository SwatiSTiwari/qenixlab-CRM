"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg">
                AI CRM
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#waitlist"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#0052FF]/10 hover:text-[#0052FF] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#0052FF]/10 hover:text-[#0052FF] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@aicrm.io"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#0052FF]/10 hover:text-[#0052FF] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Autonomous AI CRM. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
