import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", detail: "35211 Delta Language Schools – Talkha – Dakhlia – Egypt" },
  { icon: Phone, title: "Call Us", detail: "+20(050) 2529808" },
  { icon: Mail, title: "Email Us", detail: "IT@Delta-schools.com" },
  { icon: Clock, title: "Office Hours", detail: "Sunday – Thursday 8:00 AM to 3:00 PM" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll respond within 24 hours." });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to learn more about our schools."
      />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((c) => (
              <div key={c.title} className="feature-card">
                <div className="icon-circle">
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="section-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div>
                  <label className="text-sm font-medium mb-1 block">Full Name *</label>
                  <Input required placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address *</label>
                  <Input required type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number</label>
                  <Input placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Subject *</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                      <SelectItem value="tour">Campus Tour Request</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <Textarea required placeholder="How can we help you?" rows={4} />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Map + Tour CTA */}
            <div>
              <h2 className="section-title">Find Us</h2>
              <div className="mt-6 rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                <iframe
                  title="School location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=31.35%2C31.04%2C31.45%2C31.10&layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="feature-card mt-6">
                <h3 className="font-semibold text-lg mb-2">Schedule a Visit</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience our campus firsthand! Schedule a personalized tour to meet our faculty, explore our facilities, and see why DILS is the right choice for your family.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  Book a Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
