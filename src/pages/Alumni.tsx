import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import {
  Award,
  GraduationCap,
  Star,
  Trophy,
  Medal,
  Lightbulb,
  Globe,
  Music,
  Cpu,
  BookOpen,
  Heart,
  Palette,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import alumni1 from "@/assets/alumni1.jpg";
import alumni2 from "@/assets/alumni2.jpg";
import alumni3 from "@/assets/alumni3.jpg";
import alumni4 from "@/assets/alumni4.jpg";
import alumni5 from "@/assets/alumni5.png";
import alumni6 from "@/assets/alumni6.png";
import alumni7 from "@/assets/alumni7.png";
import alumni8 from "@/assets/alumni8.png";
import alumni9 from "@/assets/alumni9.png";
import alumni10 from "@/assets/alumni10.png";
import alumni11 from "@/assets/alumni11.png";
import alumni12 from "@/assets/alumni12.png";
import graduationImg from "@/assets/gallery/graduation.jpg";
import assemblyImg from "@/assets/gallery/assembly.jpg";

const alumni = [
  {
    name: "Youssef El-Masry",
    img: alumni1,
    graduation: "Class of 2018",
    current: "Computer Science, Cairo University",
    quote:
      "DILS gave me the confidence to pursue my dreams. The multilingual environment opened doors I never imagined possible.",
  },
  {
    name: "Nour Abdel-Rahman",
    img: alumni2,
    graduation: "Class of 2017",
    current: "Business Administration, AUC",
    quote:
      "The values and discipline I learned at DILS shaped who I am today. I'm forever grateful for the exceptional teachers.",
  },
  {
    name: "Karim Mostafa",
    img: alumni3,
    graduation: "Class of 2019",
    current: "Engineering, Ain Shams University",
    quote:
      "Winning the national science competition was a turning point. DILS believed in me before I believed in myself.",
  },
  {
    name: "Sara El-Sayed",
    img: alumni4,
    graduation: "Class of 2016",
    current: "Medicine, Mansoura University",
    quote:
      "The strong academic foundation at DILS prepared me for the rigor of medical school. I owe my success to this school.",
  },
  {
    name: "Amira Soliman",
    img: alumni5,
    graduation: "Class of 2015",
    current: "Pharmacy, Alexandria University",
    quote:
      "The trilingual education at DILS gave me an edge in my career. I can now communicate with patients and colleagues in three languages.",
  },
  {
    name: "Hassan El-Din",
    img: alumni6,
    graduation: "Class of 2020",
    current: "Architecture, MSA University",
    quote:
      "The creative environment at DILS nurtured my passion for design. My teachers encouraged me to think outside the box every day.",
  },
  {
    name: "Dina Mahmoud",
    img: alumni7,
    graduation: "Class of 2014",
    current: "Law, Cairo University",
    quote:
      "DILS taught me the importance of communication and critical thinking. These skills have been invaluable in my legal career.",
  },
  {
    name: "Mayar Abou-Zeid",
    img: alumni8,
    graduation: "Class of 2019",
    current: "Dentistry, Mansoura University",
    quote:
      "The discipline and work ethic I developed at DILS carried me through the challenges of dental school with confidence.",
  },
  {
    name: "Amr Farid",
    img: alumni9,
    graduation: "Class of 2021",
    current: "Media & Communication, GUC",
    quote:
      "From school plays to journalism club, DILS helped me discover my passion for storytelling and media production.",
  },
  {
    name: "Rania Ashraf",
    img: alumni10,
    graduation: "Class of 2016",
    current: "Mechanical Engineering, Ain Shams University",
    quote:
      "The STEM clubs at DILS sparked my love for engineering. I still remember building my first robot in the school lab.",
  },
  {
    name: "Layla Hussein",
    img: alumni11,
    graduation: "Class of 2018",
    current: "Translation Studies, Al-Alsun, Ain Shams",
    quote:
      "Being fluent in three languages thanks to DILS made translation studies a natural choice. I now work with international organizations.",
  },
  {
    name: "Ali Mansour",
    img: alumni12,
    graduation: "Class of 2020",
    current: "Computer Engineering, Helwan University",
    quote:
      "The technology programs at DILS were ahead of their time. They prepared me for a career in tech before I even knew it.",
  },
];
const outstanding = [
  {
    icon: Trophy,
    name: "Ahmed Tarek",
    grade: "Preparatory 3",
    achievement: "1st Place – National Mathematics Olympiad 2025",
    desc: "Ahmed demonstrated exceptional problem-solving skills, competing against over 5,000 students nationwide.",
  },
  {
    icon: Star,
    name: "Malak Ibrahim",
    grade: "Primary 6",
    achievement: "Best Young Author Award – Delta Region 2025",
    desc: "Malak's trilingual short story collection was recognized for its creativity and linguistic excellence.",
  },
  {
    icon: Award,
    name: "Omar Fathy",
    grade: "Preparatory 2",
    achievement: "Gold Medal – Regional Science Fair 2025",
    desc: "Omar's innovative water purification project earned the top prize at the Dakahlia Science Fair.",
  },
  {
    icon: GraduationCap,
    name: "Hana Khaled",
    grade: "Primary 5",
    achievement: "DELF A2 Certification – Youngest Achiever",
    desc: "Hana became the youngest student in the school's history to achieve the DELF A2 French language certification.",
  },
  {
    icon: Medal,
    name: "Yassin Adel",
    grade: "Preparatory 3",
    achievement: "National Swimming Championship – Silver Medal",
    desc: "Yassin represented DILS at the national level, earning silver in the 100m freestyle for his age group.",
  },
  {
    icon: Lightbulb,
    name: "Farida Nabil",
    grade: "Primary 4",
    achievement: "Innovation Award – Young Inventors Competition 2025",
    desc: "Farida designed a solar-powered classroom fan prototype that impressed judges with its practicality and creativity.",
  },
  {
    icon: Globe,
    name: "Ziad El-Sharkawy",
    grade: "Preparatory 1",
    achievement: "1st Place – Regional German Language Contest",
    desc: "Ziad's fluency and presentation skills earned him the top spot among 300 students from across the Delta region.",
  },
  {
    icon: Music,
    name: "Salma Mostafa",
    grade: "Primary 6",
    achievement: "Best Young Performer – National Arts Festival",
    desc: "Salma's piano recital captivated audiences and judges at the annual National Arts Festival in Cairo.",
  },
  {
    icon: Cpu,
    name: "Adham Samy",
    grade: "Preparatory 2",
    achievement: "1st Place – National Robotics Challenge 2025",
    desc: "Adham led his team to victory by designing an autonomous robot that completed all challenge tasks in record time.",
  },
  {
    icon: BookOpen,
    name: "Nada Hassan",
    grade: "Primary 5",
    achievement: "Top Reader – National Reading Marathon 2025",
    desc: "Nada read and reviewed over 45 books in three languages during the academic year, earning the national top reader title.",
  },
  {
    icon: Heart,
    name: "Kareem Wael",
    grade: "Preparatory 3",
    achievement: "Community Hero Award – Dakahlia Governorate",
    desc: "Kareem organized a charity drive that collected over 2,000 school supplies for underprivileged students in the region.",
  },
  {
    icon: Palette,
    name: "Lina Amr",
    grade: "Primary 4",
    achievement: "Gold Medal – National Art Competition 2025",
    desc: "Lina's painting 'My Delta' was selected as the best artwork among 1,500 entries from schools across Egypt.",
  },
];

const Alumni = () => {
  return (
    <Layout>
      <PageHeader
        title="Alumni & Outstanding Students"
        subtitle="Celebrating the achievements of our students past and present."
      />

      {/* Alumni Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Proud Alumni</h2>
            <p className="section-subtitle">
              DILS graduates go on to excel in top universities and careers
              around the world.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((a) => (
              <Card key={a.name} className="overflow-hidden border-border/60">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg text-foreground">
                    {a.name}
                  </h3>
                  <p className="text-xs text-primary font-medium mb-1">
                    {a.graduation}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {a.current}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "{a.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={graduationImg}
          alt="Graduation ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-primary-foreground text-4xl md:text-5xl font-display font-bold">
              500+
            </p>
            <p className="text-primary-foreground/80 text-lg">
              Graduates Since Founding
            </p>
          </div>
        </div>
      </section>

      {/* Outstanding Students */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Outstanding Students</h2>
            <p className="section-subtitle">
              Recognizing exceptional talent and achievement across academics,
              arts, and athletics.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {outstanding.map((s) => (
              <div key={s.name} className="feature-card flex gap-4">
                <div className="icon-circle shrink-0">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {s.name}
                  </h3>
                  <p className="text-xs text-primary font-medium">{s.grade}</p>
                  <p className="text-sm font-medium text-foreground mt-1">
                    {s.achievement}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={assemblyImg}
              alt="School community"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div>
              <h2 className="section-title">Join Our Alumni Network</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our alumni community stays connected through annual reunions,
                mentorship programs, and collaborative events. We believe that
                once a DILS student, always a DILS family member.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alumni are invited to participate in career talks, share their
                experiences with current students, and contribute to the growth
                of our school community. Together, we continue to inspire the
                next generation of leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Alumni;
