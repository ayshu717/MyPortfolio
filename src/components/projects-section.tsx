import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import imageSources from '@/lib/placeholder-images.json';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { AutoPlayCarousel } from '@/components/ui/auto-play-carousel';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-12 duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">A selection of projects I'm proud of.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => {
            const projectImages = project.imageIds
              .map(id => imageSources.placeholderImages.find(img => img.id === id))
              .filter(Boolean) as (typeof imageSources.placeholderImages);
            
            const hasSource = !!project.sourceCodeUrl;
            const hasLive = !!project.liveUrl;
            const buttonCount = [hasSource, hasLive].filter(Boolean).length;

            return (
              <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-12 ease-out" style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="relative aspect-[16/9] w-full">
                    {projectImages.length > 1 ? (
                      <AutoPlayCarousel images={projectImages} />
                    ) : projectImages.length === 1 ? (
                      <Image
                        src={projectImages[0].imageUrl}
                        alt={projectImages[0].description}
                        fill
                        className="object-cover"
                        data-ai-hint={projectImages[0].imageHint}
                      />
                    ) : (
                      <div className="bg-muted w-full h-full"></div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className={cn("flex gap-4 mt-auto", buttonCount === 1 && "justify-center")}>
                      {project.sourceCodeUrl && (
                        <Button asChild>
                          <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> View Source
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild variant="outline">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" /> View Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
