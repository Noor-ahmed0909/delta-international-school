import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { BookOpen, GraduationCap, Award, Trophy, Languages, Calculator, FlaskConical, Palette, Music, Globe } from "lucide-react";
import scienceImg from "@/assets/science-lab.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: BookOpen,
    age: "Ages 5-11",
    title: "Primary School",
    desc: "Foundation years focusing on literacy, numeracy, and social development through inquiry-based learning.",
    features: ["Cambridge Primary", "Bilingual Education", "STEAM Integration", "Character Development"],
  },
  {
    icon: GraduationCap,
    age: "Ages 11-14",
    title: "Middle School",
    desc: "Comprehensive curriculum preparing students for advanced studies with emphasis on critical thinking.",
    features: ["Cambridge Lower Secondary", "Project-Based Learning", "Leadership Programs", "Global Perspectives"],
  },
  {
    icon: Award,
    age: "Ages 14-16",
    title: "High School",
    desc: "Rigorous academic program with diverse subject choices and university preparation focus.",
    features: ["IGCSE Curriculum", "Advanced Sciences", "Humanities & Arts", "Career Counseling"],
  },
  {
    icon: Trophy,
    age: "Ages 16-18",
    title: "IB Diploma",
    desc: "Internationally recognized program developing well-rounded students ready for top universities.",
    features: ["6 Subject Groups", "Extended Essay", "Theory of Knowledge", "CAS Activities"],
  },
];

const subjects = [
  { icon: Languages, label: "Languages", stat: "8 Languages" },
  { icon: Calculator, label: "Mathematics", stat: "All Levels" },
  { icon: FlaskConical, label: "Sciences", stat: "Lab-Based" },
  { icon: Palette, label: "Arts", stat: "Visual & Performing" },
  { icon: Music, label: "Music", stat: "Individual & Group" },
  { icon: Globe, label: "Social Studies", stat: "Global Focus" },
];

const Programs = () => {
  return (
    <Layout>
      <PageHeader
        title="Scholastic"
        subtitle="World-class education from K.G through Secondary, preparing students for success in a global society."
      />

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="feature-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-circle">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground">
                    {p.age}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Subject Areas</h2>
            <p className="section-subtitle">
              Comprehensive curriculum covering all essential disciplines with expert instruction and modern facilities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((s) => (
              <div key={s.label} className="feature-card text-center py-6">
                <div className="icon-circle mx-auto mb-3">
                  <s.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{s.label}</h4>
                <p className="text-xs text-muted-foreground">{s.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={scienceImg}
              alt="Students in science laboratory"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div>
              <h2 className="section-title">State-of-the-Art Facilities</h2>
              <p className="text-muted-foreground mb-6">
                Our campus features cutting-edge facilities designed to enhance learning across all disciplines.
              </p>
              <ul className="space-y-3">
                {[
                  "Modern science and computer laboratories",
                  "Extensive library and research center",
                  "Professional arts and music studios",
                  "Olympic-standard sports facilities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6">
                <Link to="/campus-life">Campus Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
