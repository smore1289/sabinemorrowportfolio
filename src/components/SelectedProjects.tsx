
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Global Wellness Brand",
    description: "Complete brand refresh and operational systems implementation for a wellness company expanding to international markets.",
    categories: ["Brand Strategy", "Visual Identity", "Operations"],
    color: "bg-blue-50 dark:bg-blue-950",
  },
  {
    title: "Tech Startup Incubator",
    description: "Developed cohesive branding for a tech incubator supporting early-stage founders, including visual identity and marketing templates.",
    categories: ["Branding", "Design System", "Marketing Strategy"],
    color: "bg-rose-50 dark:bg-rose-950",
  },
  {
    title: "Sustainable Product Launch",
    description: "Guided an eco-friendly product company through launch with comprehensive branding, packaging design, and operational workflows.",
    categories: ["Product Branding", "Launch Strategy", "Systems Design"],
    color: "bg-emerald-50 dark:bg-emerald-950",
  },
];

const SelectedProjects = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">Selected Projects</h2>
        
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <Card key={index} className={`border-none shadow-lg overflow-hidden ${project.color}`}>
              <CardContent className="p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">{project.title}</h3>
                <p className="text-lg mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, catIndex) => (
                    <Badge key={catIndex} variant="secondary" className="text-sm px-3 py-1">{category}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
