import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import imageSources from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const headshot = imageSources.placeholderImages.find(img => img.id === 'ayush-headshot');

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
            <Button asChild size="lg">
              <Link href={portfolioData.resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#contact">Contact Me</Link>
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
            <Image
              src={headshot.imageUrl}
              alt={headshot.description}
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
              priority
              data-ai-hint={headshot.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
