import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const platforms = ["Magento (Adobe Commerce)", "PrestaShop", "Shopify", "WooCommerce", "Other"];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Move? Let's Talk.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tell us about your migration needs and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5 p-8 rounded-2xl bg-card border shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Current Platform</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select platform" /></SelectTrigger>
                  <SelectContent>
                    {platforms.map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Target Platform</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select platform" /></SelectTrigger>
                  <SelectContent>
                    {platforms.map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your migration needs, store size, timeline..." rows={4} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-olive-dark border border-olive-dark-border shadow-sm">
              <h3 className="font-semibold mb-4 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:hello@migrateflow.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  hello@migrateflow.com
                </a>
                <a href="tel:+31201234567" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  +31 20 123 4567
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border shadow-sm">
              <h3 className="font-semibold mb-2">Prefer a Call?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free 30-minute discovery call to discuss your migration needs.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
