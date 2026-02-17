import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Self-Service",
    emoji: "🟢",
    price: "Starting at €299",
    desc: "You drive. We give you the engine.",
    features: [
      "Pre-built n8n migration workflow templates",
      "Step-by-step documentation & guides",
      "Community support (Discord)",
      "Run migrations at your own pace",
    ],
    cta: "Get Started",
    href: "#contact",
    external: false,
    highlight: false,
  },
  {
    name: "Full-Service",
    emoji: "🟣",
    price: "Custom Pricing",
    desc: "Sit back. We handle everything.",
    features: [
      "Complete end-to-end migration setup",
      "Dedicated project manager",
      "Custom data mapping & transformation",
      "Test migration + validation report",
      "Go-live support + 30-day post-migration",
    ],
    cta: "Book a Call",
    href: "https://migrateflow.youcanbook.me",
    external: true,
    highlight: true,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose the level of support that matches your team's capabilities and timeline.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative p-8 rounded-2xl border shadow-sm transition-all hover:shadow-lg ${
              t.highlight ? "bg-olive-dark border-primary/40 shadow-primary/5" : "bg-olive-dark border-olive-dark-border"
            }`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                Most Popular
              </span>
            )}
            <div className="text-2xl mb-2">{t.emoji}</div>
            <h3 className="text-xl font-bold mb-1 text-white">{t.name}</h3>
            <p className="text-sm text-zinc-400 mb-4">{t.desc}</p>
            <p className="text-2xl font-bold mb-6 text-white">{t.price}</p>
            <ul className="space-y-3 mb-8">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="w-full"
              variant={t.highlight ? "default" : "outline"}
            >
              <a href={t.href} {...(t.external && { target: "_blank", rel: "noopener noreferrer" })}>{t.cta}</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
