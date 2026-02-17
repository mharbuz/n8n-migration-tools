import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Search, Cog, TestTube, Rocket, MessageCircle, ClipboardList, Server, CheckCircle, HeartHandshake,
} from "lucide-react";

const shared = {
  icon: Search,
  title: "Discovery Call",
  desc: "We analyze your current store, data volume, customizations, and migration goals. We recommend the best path forward.",
};

const pathA = [
  { icon: ClipboardList, title: "Receive Our N8N Workflows", desc: "Pre-configured workflows tailored to your source → target pair, including your specific data mapping." },
  { icon: Cog, title: "Setup & Configuration", desc: "Install workflows in your own N8N instance (cloud or self-hosted). Step-by-step documentation provided." },
  { icon: TestTube, title: "Test Migration", desc: "Run on staging at your own pace, verify the data, iterate as needed." },
  { icon: Rocket, title: "Go Live", desc: "Run the final migration yourself and switch over with confidence." },
  { icon: MessageCircle, title: "Community Support", desc: "Access our Discord community and knowledge base. Optional ad-hoc support hours available." },
];

const pathB = [
  { icon: ClipboardList, title: "Migration Plan", desc: "We design a custom N8N workflow architecture for your data structure, custom fields, and edge cases." },
  { icon: Server, title: "Staging Setup", desc: "We set up a staging environment and run a complete test migration for your review." },
  { icon: Rocket, title: "Go Live", desc: "Final migration with coordinated timing, minimal downtime, data validation, and full 301 redirect map." },
  { icon: HeartHandshake, title: "Post-Migration Support", desc: "30 days of dedicated support to catch edge cases, verify data integrity, and fine-tune." },
];

const StepCard = ({ step, index }: { step: typeof pathA[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex gap-4"
  >
    <div className="flex flex-col items-center">
      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
        <step.icon className="h-5 w-5 text-primary" />
      </div>
      {index < 4 && <div className="w-px flex-1 bg-border mt-2" />}
    </div>
    <div className="pb-8">
      <h4 className="font-semibold mb-1">{step.title}</h4>
      <p className="text-sm text-muted-foreground">{step.desc}</p>
    </div>
  </motion.div>
);

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works — Choose Your Path</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            After an initial Discovery Call, you choose the path that fits your team and budget.
          </p>
        </motion.div>

        {/* Shared step 0 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="p-6 rounded-2xl bg-card border shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <shared.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-1">Step 0 — Shared</p>
              <h3 className="font-bold text-lg mb-1">{shared.title}</h3>
              <p className="text-sm text-muted-foreground">{shared.desc}</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs for paths */}
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="self-service">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="self-service" className="text-sm">🟢 Self-Service</TabsTrigger>
              <TabsTrigger value="managed" className="text-sm">🔵 Fully Managed</TabsTrigger>
            </TabsList>

            <TabsContent value="self-service">
              <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-medium italic">"You drive. We give you the engine."</p>
                <p className="text-xs text-muted-foreground mt-1">Best for: Technical teams comfortable with N8N who want full control and lower cost.</p>
              </div>
              {pathA.map((s, i) => (
                <StepCard key={s.title} step={s} index={i} />
              ))}
            </TabsContent>

            <TabsContent value="managed">
              <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-medium italic">"Sit back. We handle everything."</p>
                <p className="text-xs text-muted-foreground mt-1">Best for: Businesses that want zero hassle, maximum confidence, and expert hands on the wheel.</p>
              </div>
              {pathB.map((s, i) => (
                <StepCard key={s.title} step={s} index={i} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
