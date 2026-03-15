"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, CheckCircle, Loader2 } from "lucide-react";

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Early Access</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            Get Early Access to the <span className="gradient-text">MVP</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            The product is currently in development. Join our waitlist to be among the first to experience the future of customer relationship management.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="industry" className="text-sm font-medium">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF]"
                      >
                        <option value="">Select your industry</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="hotel">Hotel</option>
                        <option value="retail">Retail</option>
                        <option value="d2c">D2C Brand</option>
                        <option value="service">Service Business</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 gradient-btn text-white text-lg rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Joining Waitlist...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    No spam, ever. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-display text-2xl mb-4">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you for your interest. We&apos;ll notify you as soon as early access is available.
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0052FF]" />
            <span>Free early access</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0052FF]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0052FF]" />
            <span>Priority support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
