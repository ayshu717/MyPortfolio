import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import imageSources from '@/lib/placeholder-images.json';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { AutoPlayCarousel } from '@/components/ui/auto-play-carousel';
import Image from 'next/image';

export function CoCurricularSection() {
  return (
    <section id="cocurricular" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Co-curricular Activities</h2>
        <p className="mt-2 text-lg text-muted-foreground">Exploring passions beyond the code.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.cocurricular.map((activity) => {
          const activityImages = activity.imageIds
            .map(id => imageSources.placeholderImages.find(img => img.id === id))
            .filter(Boolean) as (typeof imageSources.placeholderImages);

          return (
            <Card key={activity.title} className="flex flex-col overflow-hidden">
              {activityImages.length > 1 ? (
                <AutoPlayCarousel images={activityImages} />
              ) : activityImages[0] && (
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={activityImages[0].imageUrl}
                    alt={activityImages[0].description}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={activityImages[0].imageHint}
                  />
                </div>
              )}
               <CardContent className="p-6 flex flex-col flex-grow gap-y-4">
                <h3 className="text-2xl font-bold">{activity.title}</h3>
                <p className="text-muted-foreground flex-grow">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="pt-4 flex gap-4">
                  {activity.sourceCodeUrl && (
                    <Button asChild variant="outline">
                      <Link href={activity.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Source
                      </Link>
                    </Button>
                  )}
                  {activity.liveUrl && (
                    <Button asChild>
                      <Link href={activity.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live
                      </Link>
                    </Button>
                  )}
                   {activity.instagramUrl && (
                    <Button asChild>
                      <Link href={activity.instagramUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Page
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
