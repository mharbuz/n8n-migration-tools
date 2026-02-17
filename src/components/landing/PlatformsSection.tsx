import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

const platforms = [
  { name: "Magento", sub: "Adobe Commerce" },
  { name: "PrestaShop", sub: "" },
  { name: "Shopify", sub: "" },
  { name: "WooCommerce", sub: "" },
];

const PlatformsSection = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(2);

  return (
    <section id="platforms" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We support the most popular e-commerce platforms out of the box. Need a custom pair? Just ask.
          </p>
        </motion.div>

        {/* Platform logos grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-card border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <Package className="h-8 w-8 text-primary mb-1" />
              <span className="font-semibold text-sm">{p.name}</span>
              {p.sub && <span className="text-xs text-muted-foreground">{p.sub}</span>}
            </div>
          ))}
        </motion.div>

        {/* Interactive migration selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-card border shadow-sm">
            <h3 className="text-lg font-semibold mb-6 text-center">Migration Path Selector</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <label className="text-xs text-muted-foreground mb-2 block">Migrating FROM</label>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => { setFrom(i); if (i === to) setTo((i + 1) % platforms.length); }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all ${
                        from === i ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:border-primary/40"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              <ArrowRight className="h-6 w-6 text-primary shrink-0 rotate-90 sm:rotate-0" />

              <div className="flex-1 w-full">
                <label className="text-xs text-muted-foreground mb-2 block">Migrating TO</label>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map((p, i) => (
                    <button
                      key={p.name}
                      onClick={() => { if (i !== from) setTo(i); }}
                      disabled={i === from}
                      className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all ${
                        to === i ? "bg-primary text-primary-foreground border-primary" : i === from ? "opacity-30 cursor-not-allowed" : "bg-background hover:border-primary/40"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
              <p className="text-sm font-medium">
                {platforms[from].name} → {platforms[to].name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Full migration path available ✓</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
