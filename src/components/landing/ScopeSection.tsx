import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShoppingCart, Users, FileText, Settings, Star, Tag, Globe,
} from "lucide-react";

const scopes = [
  {
    icon: ShoppingCart,
    title: "Product Catalog",
    items: "Products, variants, SKUs, descriptions, images, categories, tags, attributes, pricing (including tier/group pricing), stock & inventory levels",
  },
  {
    icon: Users,
    title: "Customer Data",
    items: "Customer accounts, addresses, customer groups",
  },
  {
    icon: FileText,
    title: "Order History",
    items: "Orders, order statuses, invoices, credit memos, shipments, tracking numbers",
  },
  {
    icon: Globe,
    title: "Content & SEO",
    items: "CMS pages, blog posts, URL redirects (301 mapping), meta titles/descriptions, URL slugs",
  },
  {
    icon: Settings,
    title: "Configuration & Settings",
    items: "Tax rules, shipping methods/zones, payment method mapping, store views / multi-language setups, currency configurations",
  },
  {
    icon: Star,
    title: "Reviews & Ratings",
    items: "Product reviews, customer ratings",
  },
  {
    icon: Tag,
    title: "Promotions",
    items: "Discount codes, cart rules, catalog rules, coupon codes",
  },
];

const ScopeSection = () => (
  <section id="scope" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Data Gets Moved</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We migrate everything that matters — from products to promotions, nothing is left behind.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="multiple" className="space-y-3">
          {scopes.map((s) => (
            <AccordionItem
              key={s.title}
              value={s.title}
              className="border border-olive-dark-border rounded-xl px-4 bg-olive-dark shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-semibold text-white">{s.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-zinc-400">
                {s.items}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default ScopeSection;
