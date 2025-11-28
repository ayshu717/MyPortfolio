import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import imageSources from '@/lib/placeholder-images.json';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { AutoPlayCarousel } from '@/components/ui/auto-play-carousel';

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">A selection of projects I'm proud of.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => {
            const projectImages = project.imageIds
              .map(id => imageSources.placeholderImages.find(img => img.id === id))
              .filter(Boolean) as (typeof imageSources.placeholderImages);

            return (
              <Card key={project.title} className="flex flex-col overflow-hidden">
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
                    <div className="flex-grow"></div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.sourceCodeUrl && (
                        <Button asChild variant="outline">
                          <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> View Source
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild>
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
