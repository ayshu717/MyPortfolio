"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type ImageItem = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

interface AutoPlayCarouselProps {
  images: ImageItem[];
  className?: string;
}

export function AutoPlayCarousel({ images, className }: AutoPlayCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  React.useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext()
        } else {
            emblaApi.scrollTo(0)
        }
    }, 1500);

    return () => clearInterval(interval);
  }, [emblaApi])


  return (
    <Carousel
      ref={emblaRef}
      className={className}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint={image.imageHint}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
