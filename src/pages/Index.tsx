import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Languages,
  Gamepad2,
  Heart,
  BookOpen,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  Camera,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-school.jpg";

const stats = [
  { value: "3", label: "Core Languages" },
  { value: "10+", label: "Nationalities" },
  { value: "1:6", label: "Teacher-Student Ratio" },
  { value: "100%", label: "Fun Guaranteed!" },
];

const features = [
  {
    icon: Languages,
    title: "Multilingual Environment",
    desc: "Full immersion in English, French, and German with native-speaking teachers.",
  },
  {
    icon: Gamepad2,
    title: "Play-Based Learning",
    desc: "Our curriculum is built on fun, engaging activities that kids love.",
  },
  {
    icon: Heart,
    title: "Nurturing Educators",
    desc: "Passionate, experienced teachers dedicated to your child's growth and happiness.",
  },
  {
    icon: BookOpen,
    title: "Early Literacy Focus",
    desc: "Developing strong reading and writing skills in multiple languages from day one.",
  },
];

const testimonials = [
  {
    name: "Fatma El-Sayed",
    grade: "KG2 Parent",
    text: "My daughter's confidence in speaking English and French has grown tremendously. The teachers are incredibly nurturing and professional.",
  },
  {
    name: "Ahmed Hassan",
    grade: "Primary 3 Parent",
    text: "Delta Schools provided the perfect balance of academics and fun. My son looks forward to going to school every single day!",
  },
  {
    name: "Mona Khalil",
    grade: "Preparatory 1 Parent",
    text: "The multilingual environment and the small class sizes make a real difference. We've seen remarkable progress in all three languages.",
  },
  {
    name: "Heba Mostafa",
    grade: "KG1 Parent",
    text: "From the very first day, my child felt at home. The warm and welcoming atmosphere, combined with the structured language immersion, exceeded all our expectations.",
  },
  {
    name: "Omar Farouk",
    grade: "Primary 5 Parent",
    text: "The dedication of the teachers is outstanding. My son has developed a genuine love for learning languages, and his German skills have impressed the whole family!",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerView =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 3
      : window.innerWidth >= 640
        ? 2
        : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = useCallback(
    () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)),
    [maxIndex],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)),
    [maxIndex],
  );

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">
            Hear from the families who trust us with their children's education.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${current * (100 / itemsPerView + (6 * 4) / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  className="border-border/60 shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 24) / itemsPerView}px)`,
                  }}
                >
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.grade}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/parent-resources">
              FAQs & Interview Guide <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                ✨ Where Little Linguists Grow
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Unlock a World of <span className="text-accent">Languages</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                Give your child the gift of language. Our play-based KG and
                Primary programs make learning English, French, and German an
                exciting adventure!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <Link to="/enroll">
                    Enroll Today <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-secondary-text font-semibold hover:bg-primary-foreground/10"
                >
                  <Link to="/programs">Our Programs</Link>
                </Button>
              </div>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src={heroImg}
                alt="Delta International Language Schools campus"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DILS */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why DILS</h2>
            <p className="section-subtitle">
              We create a joyful and supportive space where children naturally
              develop their language skills while playing and exploring.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="feature-card text-center">
                <div className="icon-circle mx-auto">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Explore More */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore More</h2>
            <p className="section-subtitle">
              Discover more about life at DILS.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link to="/gallery" className="feature-card text-center group">
              <div className="icon-circle mx-auto">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                Photo Gallery
              </h3>
              <p className="text-sm text-muted-foreground">
                Browse 25+ photos of our students in action.
              </p>
            </Link>
            <Link to="/alumni" className="feature-card text-center group">
              <div className="icon-circle mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                Alumni & Outstanding Students
              </h3>
              <p className="text-sm text-muted-foreground">
                Meet our proud graduates and star achievers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24"
        style={{ background: "var(--page-header-gradient)" }}
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Start Your Child's Language Adventure!
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            See our vibrant classrooms in action and meet our amazing teachers.
            Schedule a tour or enroll today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <Link to="/enroll">Enroll Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-secondary-text font-semibold hover:bg-primary-foreground/10"
            >
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
