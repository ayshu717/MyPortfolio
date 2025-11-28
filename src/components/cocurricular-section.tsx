import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import imageSources from '@/lib/placeholder-images.json';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { AutoPlayCarousel } from '@/components/ui/auto-play-carousel';

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
            .filter(Boolean);

          return (
            <Card key={activity.title} className="flex flex-col">
              <AutoPlayCarousel images={activityImages} />
              <CardHeader>
                <CardTitle>{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {activity.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {activity.instagramUrl && (
                  <Button asChild>
                    <Link href={activity.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4" /> View on Instagram
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
