
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "./ProjectGrid";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <tr 
      className="group border-b transition-colors hover:bg-accent cursor-pointer"
      onClick={() => window.location.href = `/projects/${project.id}`}
    >
      <td className="py-6 pr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
          {project.icon}
        </div>
      </td>
      <td className="py-6 pr-4">
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
      </td>
      <td className="py-6 pr-4">
        <p className="text-muted-foreground">{project.summary}</p>
      </td>
      <td className="py-6 pr-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm font-normal border"
              style={{ backgroundColor: 'rgba(26, 33, 255, 0.06)', color: '#12169F', borderColor: 'rgba(26, 33, 255, 0.02)', borderWidth: '1px' }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </td>
      <td className="py-6">
        <Button
          variant="link"
          size="sm"
          className="group/button underline hover:opacity-80"
          style={{ color: '#12169F' }}
          asChild
        >
          <Link to={`/projects/${project.id}`}>
            View Case Study
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </Button>
      </td>
    </tr>
  );
};

export default ProjectCard;
