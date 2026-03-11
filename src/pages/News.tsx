import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import performanceImg from "@/assets/performance.jpg";
import gardenImg from "@/assets/garden.jpg";
import classroomImg from "@/assets/classroom.jpg";
import sportsImg from "@/assets/sports.jpg";
import scienceImg from "@/assets/science-lab.jpg";
import heroImg from "@/assets/hero-school.jpg";
import artClass from "@/assets/gallery/art-class.jpg";
import graduation from "@/assets/gallery/graduation.jpg";
import culturalDay from "@/assets/gallery/cultural-day.jpg";

const articles = [
  {
    category: "Campus Events",
    date: "October 25, 2025",
    title: "Show and Tell Event",
    desc: "Under the patronage of Dr. Galal El-Far, the General Director of the Schools, the Grade 1 students of the English Department presented a Show and Tell event, where students confidently shared their items and expressed their ideas in English.",
    img: classroomImg,
    color: "bg-accent",
  },
  {
    category: "School News",
    date: "October 15, 2025",
    title: "New Community Garden for our Little Sprouts",
    desc: "Our KG classes have started a new community garden project! They will be learning about plants, nature, and responsibility while growing their own vegetables.",
    img: gardenImg,
    color: "bg-primary",
  },
  {
    category: "Performances",
    date: "September 28, 2025",
    title: 'Primary Students Shine in "The Little Polyglot"',
    desc: 'Our primary school students put on a fantastic performance of their original play, "The Little Polyglot." The show was performed in three different languages!',
    img: performanceImg,
    color: "bg-accent",
  },
  {
    category: "Sports",
    date: "September 10, 2025",
    title: "Annual Inter-School Sports Championship",
    desc: "DILS students competed in the regional inter-school sports championship, bringing home medals in soccer, basketball, and track & field events.",
    img: sportsImg,
    color: "bg-primary",
  },
  {
    category: "Academics",
    date: "August 30, 2025",
    title: "Science Fair Winners Announced",
    desc: "Students from Preparatory 2 and 3 showcased innovative science projects at the annual science fair. Three projects were selected to represent DILS at the national level.",
    img: scienceImg,
    color: "bg-accent",
  },
  {
    category: "Campus Events",
    date: "August 15, 2025",
    title: "Welcome Back to School Celebration",
    desc: "DILS welcomed students back with a fun-filled orientation day featuring games, activities, and meet-your-teacher sessions for all grade levels.",
    img: heroImg,
    color: "bg-primary",
  },
  {
    category: "Arts & Culture",
    date: "July 20, 2025",
    title: "Art Exhibition: Colors of Our World",
    desc: "Students displayed their artwork in a stunning exhibition that celebrated cultural diversity and creative expression through painting, sculpture, and mixed media.",
    img: artClass,
    color: "bg-accent",
  },
  {
    category: "Graduation",
    date: "June 30, 2025",
    title: "Class of 2025 Graduation Ceremony",
    desc: "A heartfelt ceremony honoring the graduating class of 2025. Students, parents, and teachers celebrated years of hard work and achievement together.",
    img: graduation,
    color: "bg-primary",
  },
  {
    category: "Cultural Events",
    date: "June 15, 2025",
    title: "International Day Celebrations",
    desc: "Students representing over 10 nationalities dressed in traditional attire, performed cultural dances, and shared food from their home countries in a vibrant celebration of diversity.",
    img: culturalDay,
    color: "bg-accent",
  },
];

const News = () => {
  return (
    <Layout>
      <PageHeader
        title="News & Events"
        subtitle="What's happening at DILS? Check out our latest stories and adventures."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.title} className="feature-card overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-primary-foreground ${a.color}`}>
                    {a.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{a.date}</p>
                  <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{a.desc}</p>
                  <button className="text-sm font-semibold text-primary hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
