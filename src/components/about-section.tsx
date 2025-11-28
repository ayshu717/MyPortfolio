import { portfolioData } from '@/lib/portfolio-data';

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-12 duration-500 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {portfolioData.about.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {portfolioData.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
