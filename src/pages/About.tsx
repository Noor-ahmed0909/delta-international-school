import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Sparkles, Globe, Lightbulb } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import directorImg from "@/assets/director.jpg";

const values = [
  {
    icon: Sparkles,
    title: "Joyful Learning",
    desc: "We believe learning should be a happy, exciting adventure every single day.",
  },
  {
    icon: Globe,
    title: "Global Community",
    desc: "We celebrate diversity and foster friendships between children from all over the world.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity & Creativity",
    desc: "We encourage children to ask questions, explore ideas, and express themselves.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About DILS"
        subtitle="We are a passionate team of educators dedicated to making language learning a joyful and natural part of childhood."
      />

      {/* Director */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={directorImg}
              alt="Dr. Galal El-Far, General Director"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4] max-w-md mx-auto"
            />
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                School Director
              </span>
              <h2 className="section-title">Dr. Galal El-Far</h2>
              <p className="text-lg text-primary font-medium mb-4">General Director of Delta International Language Schools</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. Galal El-Far is a distinguished educator with over 25 years of experience in the field of international education. He holds a Doctorate in Educational Leadership from Cairo University and has dedicated his career to advancing multilingual education in Egypt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before founding DILS, Dr. El-Far served as a senior educational consultant for the Ministry of Education and held leadership positions at several prestigious international schools in the Delta region. His vision of creating a school where children could master multiple languages through immersive, play-based learning led to the establishment of DILS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under his leadership, DILS has grown into one of the most respected language schools in Dakahlia, known for its innovative curriculum, outstanding faculty, and commitment to nurturing well-rounded, globally-minded students. Dr. El-Far continues to inspire both students and staff with his passion for excellence in education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={classroomImg}
              alt="Students in classroom"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="section-title">DILS Mission Statement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Developing a citizen who:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Is committed to the principles and noble values of our society.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Is a team player who respects others and communicates with them.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Is aware of his/her rights, duties and responsibilities.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Is a self-directed learner who thinks creatively.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Manages in an ever-changing world and absorbs the technology progress.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="section-title">DILS Vision Statement</h2>
          <p className="section-subtitle max-w-3xl">
            Our schools aspire to occupy a prominent status among other private schools through implementing quality performance standards in different stages and communicating actively with parents and civil society organizations.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="feature-card text-center">
                <div className="icon-circle mx-auto">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
