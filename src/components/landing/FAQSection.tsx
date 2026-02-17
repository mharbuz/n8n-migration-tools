import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does a typical migration take?", a: "It depends on the size and complexity of your store. A small catalog (~1,000 products) can be migrated in a day. Larger stores with complex data structures (50k+ products, custom attributes, multi-language) typically take 1–3 weeks including testing and validation." },
  { q: "Will my store experience downtime?", a: "We design migrations to minimize downtime. Most data is migrated while your store runs normally. Only a brief maintenance window (typically 1–4 hours) is needed for the final cutover to ensure order data is fully synced." },
  { q: "Can you migrate custom/proprietary data?", a: "Yes. During the Discovery Call, we map your custom fields, attributes, and data structures. Our n8n workflows are highly flexible and can be extended to handle any custom data format." },
  { q: "What happens if something goes wrong?", a: "Every migration includes a test run on a staging environment. We validate data before going live. In the rare event of issues, we have rollback procedures and your original store remains untouched until you confirm the migration is successful." },
  { q: "Do you support multi-language / multi-store setups?", a: "Absolutely. We handle multi-language content, multiple store views, and multi-currency configurations. This is one of the most common migration scenarios we support." },
  { q: "Can I sync only specific data (e.g., just products and inventory)?", a: "Yes. Our workflows are modular — you can choose to migrate or sync only the data types you need. This is common for businesses running parallel stores." },
];

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Got questions? We've got answers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border rounded-xl px-4 bg-card shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold text-sm sm:text-base">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground text-sm">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
