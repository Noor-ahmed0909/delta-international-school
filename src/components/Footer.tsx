import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Delta International Language Schools</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Where Little Linguists Grow. Providing world-class multilingual education since day one.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Programs", path: "/programs" },
                { label: "Admissions", path: "/admissions" },
                { label: "Campus Life", path: "/campus-life" },
                { label: "News & Events", path: "/news" },
                { label: "Contact", path: "/contact" },
                { label: "Parent Resources", path: "/parent-resources" },
                { label: "Gallery", path: "/gallery" },
                { label: "Alumni & Outstanding Students", path: "/alumni" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Primary School</li>
              <li>Middle School</li>
              <li>High School</li>
              <li>IB Diploma</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                35211 Delta Language Schools – Talkha – Dakhlia – Egypt
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                +20(050) 2529808
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                IT@Delta-schools.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                Sun – Thu: 8:00 AM – 3:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Delta International Language Schools. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
