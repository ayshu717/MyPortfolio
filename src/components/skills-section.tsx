import { portfolioData } from '@/lib/portfolio-data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <section id="skills" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills Showcase</h2>
        <p className="mt-2 text-lg text-muted-foreground">My technical expertise and toolset.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.skills.map((skillCategory) => (
          <Card key={skillCategory.category} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <skillCategory.icon className="w-6 h-6 text-primary" />
                <span>{skillCategory.category}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {skillCategory.list.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
