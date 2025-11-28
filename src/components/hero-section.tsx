"use client";

import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import imageSources from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, FileText, Mail } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import * as React from 'react';

export function HeroSection() {
  const headshot = imageSources.placeholderImages.find(img => img.id === 'ayush-headshot');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <section id="home" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-12 duration-500 ease-out">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            {portfolioData.name}
          </h1>
          <p className="text-lg md:text-xl text-primary">
            {portfolioData.title}
          </p>
          <p className="text-base text-muted-foreground max-w-xl">
            {portfolioData.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <FileText />
                  View Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90vw] max-w-[90vw] h-[90vh] md:w-[80vw] md:max-w-[1200px] p-0">
                  <div className="elfsight-app-08975646-328d-4e28-871b-6b7e5947cc4e" data-elfsight-app-lazy></div>
              </DialogContent>
            </Dialog>

            <Button asChild variant="secondary" size="lg" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link href="#contact" onClick={handleLinkClick}>
                <Mail />
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <p className="text-sm font-medium">Connect with me:</p>
            <div className="flex items-center gap-4">
              <Link href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-500 ease-out delay-150">
          {headshot && (
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image
                  src={headshot.imageUrl}
                  alt={headshot.description}
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint={headshot.imageHint}
                />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
