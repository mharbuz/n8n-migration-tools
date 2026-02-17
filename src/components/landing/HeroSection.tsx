import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const platforms = ["Magento", "PrestaShop", "Shopify", "WooCommerce"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Animated bg elements */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium text-foreground border border-primary/20">
            <Zap className="h-3.5 w-3.5 text-primary" />
            Powered by n8n Workflows
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Switch E-Commerce Platforms{" "}
          <span className="text-gradient">Without Losing a Single Order</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Seamlessly migrate between Magento, PrestaShop, Shopify & WooCommerce with
          automated, auditable n8n workflows. Zero data loss. Minimal downtime.
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" asChild className="text-base px-8 h-12">
            <a href="#scope">
              Explore Migrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8 h-12">
            <a href="#contact">Book a Free Consultation</a>
          </Button>
        </motion.div>

        {/* Platform flow visualization */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {platforms.map((p, i) => (
            <div key={p} className="flex items-center gap-3 sm:gap-4">
              <div className="px-4 py-2 rounded-lg bg-card border text-sm font-medium shadow-sm">
                {p}
              </div>
              {i < platforms.length - 1 && (
                <ArrowRight className="h-4 w-4 text-primary shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
