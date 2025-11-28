import Link from 'next/link';
import { Code, Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Footer() {
  const latestProjects = [
    { title: "StillMe Clothing", url: "#" },
    { title: "Flora Flicks", url: "https://www.instagram.com/floraflicks_/" },
    { title: "Quiz Master", url: "https://quiz-master-sandy.vercel.app/" },
    { title: "Portfolio Website", url: "#" }
  ];
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand and Socials Column */}
          <div className="md:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-4">
                <Code className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">{portfolioData.name}</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Latest Projects Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">LATEST PROJECTS</h3>
            <ul className="space-y-2">
              {latestProjects.map((project) => (
                <li key={project.title}>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {portfolioData.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Have a Question Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">HAVE A QUESTION?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{portfolioData.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {portfolioData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {portfolioData.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
