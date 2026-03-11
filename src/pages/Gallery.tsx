import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { X } from "lucide-react";

import artClass from "@/assets/gallery/art-class.jpg";
import soccer from "@/assets/gallery/soccer.jpg";
import scienceExperiment from "@/assets/gallery/science-experiment.jpg";
import musicClass from "@/assets/gallery/music-class.jpg";
import library from "@/assets/gallery/library.jpg";
import theater from "@/assets/gallery/theater.jpg";
import computerLab from "@/assets/gallery/computer-lab.jpg";
import gardening from "@/assets/gallery/gardening.jpg";
import swimming from "@/assets/gallery/swimming.jpg";
import graduation from "@/assets/gallery/graduation.jpg";
import robotics from "@/assets/gallery/robotics.jpg";
import basketball from "@/assets/gallery/basketball.jpg";
import fieldTrip from "@/assets/gallery/field-trip.jpg";
import frenchClass from "@/assets/gallery/french-class.jpg";
import crafts from "@/assets/gallery/crafts.jpg";
import assembly from "@/assets/gallery/assembly.jpg";
import cafeteria from "@/assets/gallery/cafeteria.jpg";
import sportsDay from "@/assets/gallery/sports-day.jpg";
import culturalDay from "@/assets/gallery/cultural-day.jpg";
import mathClass from "@/assets/gallery/math-class.jpg";
import classroomImg from "@/assets/classroom.jpg";
import sportsImg from "@/assets/sports.jpg";
import performanceImg from "@/assets/performance.jpg";
import scienceLabImg from "@/assets/science-lab.jpg";
import gardenImg from "@/assets/garden.jpg";

const photos = [
  { src: artClass, title: "Art Class", category: "Arts" },
  { src: soccer, title: "Soccer Practice", category: "Sports" },
  { src: scienceExperiment, title: "Science Experiment", category: "Academics" },
  { src: musicClass, title: "Music Class", category: "Arts" },
  { src: library, title: "Library Time", category: "Academics" },
  { src: theater, title: "Theater Performance", category: "Arts" },
  { src: computerLab, title: "Computer Lab", category: "Technology" },
  { src: gardening, title: "School Garden", category: "Activities" },
  { src: swimming, title: "Swimming Lessons", category: "Sports" },
  { src: graduation, title: "Graduation Day", category: "Events" },
  { src: robotics, title: "Robotics Club", category: "Technology" },
  { src: basketball, title: "Basketball Game", category: "Sports" },
  { src: fieldTrip, title: "Museum Field Trip", category: "Activities" },
  { src: frenchClass, title: "French Language Class", category: "Academics" },
  { src: crafts, title: "Arts & Crafts", category: "Arts" },
  { src: assembly, title: "Morning Assembly", category: "Events" },
  { src: cafeteria, title: "Lunch Time", category: "Activities" },
  { src: sportsDay, title: "Annual Sports Day", category: "Sports" },
  { src: culturalDay, title: "Cultural Day Celebration", category: "Events" },
  { src: mathClass, title: "Math Activities", category: "Academics" },
  { src: classroomImg, title: "Classroom Learning", category: "Academics" },
  { src: sportsImg, title: "Sports Activities", category: "Sports" },
  { src: performanceImg, title: "Stage Performance", category: "Arts" },
  { src: scienceLabImg, title: "Science Lab", category: "Academics" },
  { src: gardenImg, title: "Community Garden", category: "Activities" },
];

const categories = ["All", ...Array.from(new Set(photos.map((p) => p.category)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Explore moments of joy, learning, and discovery at DILS."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.title}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary-foreground text-sm font-medium">{photo.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{photo.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].title}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 text-center">
            <p className="text-primary-foreground font-semibold">{filtered[lightbox].title}</p>
            <p className="text-primary-foreground/70 text-sm">{filtered[lightbox].category}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
