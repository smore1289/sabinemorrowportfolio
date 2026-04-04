import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProjectCard from "./ProjectCard";
import { Archive, Home, BarChart, Building2, Layers } from "lucide-react";
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
    id: "investment-bank",
    icon: <Building2 className="h-6 w-6" />,
    title: "Investment Bank: Data Workflow Design",
    summary:
      "Mapped the complete end-to-end data architecture of a stock plan platform for a Fortune 500 financial institution — the first time anyone had documented how the system worked across product, marketing, legal, engineering, and compliance.",
    tags: ["Data Strategy", "Enterprise", "Fintech", "UX Strategy"],
  },
  {
    id: "hibob",
    icon: <Archive className="h-6 w-6" />,
    title: "HR Platform: UX & Workflow Redesign",
    summary:
      "Redesigned microcopy and mapped high-impact workflows for a fast-growing global HR platform, producing annotated UX recommendations approved in full by the HiBob product team.",
    tags: ["UX Strategy", "Enterprise", "HR Tech"],
  },
  {
    id: "elite-media",
    icon: <BarChart className="h-6 w-6" />,
    title: "Elite Media: Operational Scaling",
    summary:
      "Designed and delivered the operational foundation for a scalable agency — replacing a founder-dependent model with centralized systems, Smartsheet workflows, and change management that any team member could build on.",
    tags: ["Operations", "Systems Design", "Enterprise"],
  },
  {
    id: "green-homes",
    icon: <Home className="h-6 w-6" />,
    title: "Green Homes Canada: UX Research to Prototype",
    summary:
      "Translated complex federal green building policy into a marketplace connecting homeowners and contractors — from persona development and journey mapping through IA, wireframes, and a Figma prototype.",
    tags: ["UX Design", "UX Research", "Marketplace"],
  },
  {
    id: "day41",
    icon: <Layers className="h-6 w-6" />,
    title: "Day41: Founder-Built Product",
    summary:
      "Owned every UX, content, operations, and product decision for a live web application — from authenticated user workflows and dashboard architecture to launch execution.",
    tags: ["Product Strategy", "UX Design", "Founder"],
  },
];

// Get unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

const ProjectGrid = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects =
    selectedTags.length > 0
      ? projects.filter((project) => project.tags.some((tag) => selectedTags.includes(tag)))
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
        <div className="mb-4 text-center">
          <p className="text-sm text-muted-foreground italic">Click on tags to filter projects by skill or industry</p>
        </div>
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
                  "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
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
