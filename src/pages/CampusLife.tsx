import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Music, Palette, Globe, Cpu, HeartHandshake, Dumbbell, BookOpen, Camera, Leaf } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import sportsImg from "@/assets/sports.jpg";
import performanceImg from "@/assets/performance.jpg";
import scienceImg from "@/assets/science-lab.jpg";
import gardenImg from "@/assets/garden.jpg";
import heroImg from "@/assets/hero-school.jpg";
import artClass from "@/assets/gallery/art-class.jpg";
import robotics from "@/assets/gallery/robotics.jpg";
import swimming from "@/assets/gallery/swimming.jpg";

const albums = [
  { title: "School Day", photos: 19, img: classroomImg },
  { title: "Academic Excellence", photos: 12, img: scienceImg },
  { title: "Creative Arts", photos: 11, img: performanceImg },
  { title: "Sports & Athletics", photos: 25, img: sportsImg },
  { title: "Community Events", photos: 23, img: gardenImg },
  { title: "Campus Views", photos: 15, img: heroImg },
  { title: "Art & Creativity", photos: 18, img: artClass },
  { title: "STEM & Innovation", photos: 14, img: robotics },
  { title: "Aquatics Program", photos: 10, img: swimming },
];

const activities = [
  { icon: Music, title: "Performing Arts", desc: "Orchestra, choir, drama, and dance programs with regular performances and competitions." },
  { icon: Palette, title: "Visual Arts", desc: "Painting, sculpture, photography, and digital arts in state-of-the-art studios." },
  { icon: Globe, title: "Cultural Clubs", desc: "Celebrate diversity through cultural events, language clubs, and international festivals." },
  { icon: Cpu, title: "STEM Clubs", desc: "Robotics, coding, science olympiad, and innovation challenges for future leaders." },
  { icon: HeartHandshake, title: "Community Service", desc: "Make a difference through volunteer programs and social responsibility initiatives." },
  { icon: Dumbbell, title: "Sports & Athletics", desc: "Comprehensive sports program including soccer, basketball, swimming, and track & field." },
  { icon: BookOpen, title: "Reading Club", desc: "Fostering a love for reading through book discussions, storytelling sessions, and author visits." },
  { icon: Camera, title: "Media & Journalism", desc: "Student-run newspaper, photography club, and video production for school events and projects." },
  { icon: Leaf, title: "Environmental Club", desc: "Gardening projects, recycling initiatives, and nature exploration to build eco-conscious citizens." },
];

const CampusLife = () => {
  return (
    <Layout>
      <PageHeader
        title="Campus Life"
        subtitle="A vibrant community where students grow, explore passions, and create lifelong memories."
      />

      {/* Photo Album */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Photo Album</h2>
            <p className="section-subtitle">Explore our campus moments.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((a) => (
              <div key={a.title} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-primary-foreground/70 text-sm">{a.photos} Photos</p>
                  <h3 className="text-primary-foreground font-semibold text-lg">{a.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm mb-2">100+ Activities & Clubs</p>
            <h2 className="section-title">Extracurricular Activities</h2>
            <p className="section-subtitle">Discover your passions and develop new skills through our diverse range of activities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.title} className="feature-card">
                <div className="icon-circle">
                  <a.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampusLife;
