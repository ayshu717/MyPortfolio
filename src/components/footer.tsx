import Link from 'next/link';
import { Code, Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="flex flex-col gap-4">
             <Link href="#home" className="flex items-center gap-2">
                <Code className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">{portfolioData.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{portfolioData.bio}</p>
          </div>

          {/* Latest Projects Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Latest Projects</h3>
            <ul className="space-y-2">
              {portfolioData.projects.map((project) => (
                <li key={project.title}>
                  <Link href={project.liveUrl || project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
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

          {/* Contact Info Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
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

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
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
      </div>
    </footer>
  );
}
