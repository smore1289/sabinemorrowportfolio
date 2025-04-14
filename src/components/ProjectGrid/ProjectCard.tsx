
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "./ProjectGrid";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <tr className="group border-b transition-colors hover:bg-accent">
      <td className="py-6 pr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
          {project.icon}
        </div>
      </td>
      <td className="py-6 pr-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
      </td>
      <td className="py-6 pr-4">
        <p className="text-muted-foreground">{project.summary}</p>
      </td>
      <td className="py-6 pr-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </td>
      <td className="py-6">
        <Button
          variant="ghost"
          size="sm"
          className="group/button"
          asChild
        >
          <a href={`/projects/${project.id}`}>
            View Case Study
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
          </a>
        </Button>
      </td>
    </tr>
  );
};

export default ProjectCard;
