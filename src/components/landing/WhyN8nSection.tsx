import { motion } from "framer-motion";
import { Eye, Shield, Wrench, GitBranch } from "lucide-react";

const reasons = [
  { icon: GitBranch, title: "Open Source", desc: "Transparent, auditable workflows. No proprietary lock-in." },
  { icon: Shield, title: "Self-Hostable", desc: "Full data privacy and GDPR compliance. Your data stays on your servers." },
  { icon: Wrench, title: "Highly Customizable", desc: "No black-box magic. Every workflow can be tailored to your exact needs." },
  { icon: Eye, title: "Visual Editor", desc: "See exactly what happens to your data with n8n's visual workflow builder." },
];

const WhyN8nSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why n8n?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We chose n8n as our backbone for a reason — actually, four reasons.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center"
          >
            <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyN8nSection;
