import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { FileText, CalendarDays, Building, CheckCircle2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { icon: FileText, num: 1, title: "Submit Application", desc: "Complete our online application form with required documents." },
  { icon: CalendarDays, num: 2, title: "Schedule Assessment", desc: "Book an assessment date convenient for your family." },
  { icon: Building, num: 3, title: "Campus Visit", desc: "Tour our facilities and meet with our admissions team." },
  { icon: CheckCircle2, num: 4, title: "Receive Decision", desc: "Get your admission decision within 2 weeks." },
];

const documents = [
  "Completed application form",
  "Birth certificate copy",
  "Previous school reports (last 2 years)",
  "Passport-size photographs",
  "Medical records and immunization certificate",
  "Parent/Guardian identification",
];

const Admissions = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Inquiry Submitted!", description: "We'll get back to you within 48 hours." });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <PageHeader
        title="Admissions"
        subtitle="Begin your journey with Delta International Language Schools. We welcome students from all backgrounds and nationalities."
      />

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">Our streamlined admission process makes it easy for families to join our community.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="feature-card relative">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {s.num}
                </span>
                <div className="icon-circle">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Required Documents</h2>
              <p className="text-muted-foreground mb-6">Please prepare the following documents for your application:</p>
              <ul className="space-y-3">
                {documents.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="feature-card">
                  <h4 className="font-semibold text-sm mb-1">Rolling Admissions</h4>
                  <p className="text-xs text-muted-foreground">Applications accepted year-round</p>
                </div>
                <div className="feature-card">
                  <h4 className="font-semibold text-sm mb-1">Financial Aid</h4>
                  <p className="text-xs text-muted-foreground">Scholarships available</p>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-semibold mb-6">Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Parent/Guardian Name *</label>
                  <Input required placeholder="Full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email Address *</label>
                  <Input required type="email" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                  <Input required placeholder="+20 xxx xxxx xxx" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Student Name *</label>
                  <Input required placeholder="Student full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Grade Level *</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primary">Primary School (Ages 5-11)</SelectItem>
                      <SelectItem value="middle">Middle School (Ages 11-14)</SelectItem>
                      <SelectItem value="high">High School (Ages 14-16)</SelectItem>
                      <SelectItem value="ib">IB Diploma (Ages 16-18)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea placeholder="Any questions or additional information..." rows={3} />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
