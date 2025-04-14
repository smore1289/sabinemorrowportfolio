
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProjectCard from "./ProjectCard";
import { Archive, Home, BarChart, BookOpen, Brush, Flag, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export type Project = {
  id: string;
  icon: JSX.Element;
  title: string;
  summary: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "hr-platform",
    icon: <Archive className="h-6 w-6" />,
    title: "HR Platform: Simplifying Complexity",
    summary: "Redesigned microcopy and mapped high-impact workflows for a global HR platform to reduce friction and support volume.",
    tags: ["UX Strategy", "Enterprise", "HR Tech"],
  },
  {
    id: "green-homes",
    icon: <Home className="h-6 w-6" />,
    title: "Green Homes Marketplace",
    summary: "Built a no-code prototype connecting Canadian homeowners to vetted contractors for green upgrades.",
    tags: ["UX Design", "No-Code", "Marketplace"],
  },
  {
    id: "investment-bank",
    icon: <BarChart className="h-6 w-6" />,
    title: "Investment Bank: Data Workflow Design",
    summary: "Mapped enterprise data and authored API specs to enable compliant personalization using Salesforce and Adobe.",
    tags: ["Data Strategy", "Fintech", "API Design"],
  },
  {
    id: "ebook-design",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Community eBook Design",
    summary: "Transformed dense Word content into a clean, downloadable PDF to support a local energy referendum campaign.",
    tags: ["Editorial Design", "Communications", "InDesign"],
  },
  {
    id: "artist-brand",
    icon: <Brush className="h-6 w-6" />,
    title: "Artist Brand & Website Refresh",
    summary: "Designed a new logo and rebuilt a vibrant, animated Framer website to showcase performances and sell tickets.",
    tags: ["Branding", "Web Design", "Framer"],
  },
  {
    id: "campaign-site",
    icon: <Flag className="h-6 w-6" />,
    title: "Candidate Campaign Site",
    summary: "Built a Framer site for a local political slate with event listings, bios, donation links, and signup forms.",
    tags: ["Campaigns", "Web Design", "Content Strategy"],
  },
  {
    id: "femhealth-demo",
    icon: <Heart className="h-6 w-6" />,
    title: "AI-Powered FemHealth Demo",
    summary: "Created a fictional healthcare site using AI-generated imagery, hero animations, and Framer for a calming, modern experience.",
    tags: ["Healthcare UX", "AI Tools", "Motion Design"],
  },
];

// Get unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort();

const ProjectGrid = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = selectedTags.length > 0
    ? projects.filter(project => 
        project.tags.some(tag => selectedTags.includes(tag))
      )
    : projects;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Selected Projects</h2>
          <p className="text-xl text-muted-foreground">
            A snapshot of how I blend design, strategy, and systems thinking to build meaningful digital experiences.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-12 overflow-x-auto">
          <ToggleGroup 
            type="multiple" 
            value={selectedTags}
            onValueChange={setSelectedTags}
            className="justify-start gap-2 flex-wrap"
          >
            {allTags.map((tag) => (
              <ToggleGroupItem
                key={tag}
                value={tag}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-colors",
                  "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                )}
              >
                {tag}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="text-left border-b">
              <tr>
                <th className="py-4 pr-4 w-16">Icon</th>
                <th className="py-4 pr-4 w-1/4">Project Title</th>
                <th className="py-4 pr-4 w-1/3">Summary</th>
                <th className="py-4 pr-4 w-1/4">Tags</th>
                <th className="py-4 w-24">CTA</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
