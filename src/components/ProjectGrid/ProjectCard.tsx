
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "./ProjectGrid";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const iconBox = (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-lg border group-hover:scale-110 transition-transform [&_svg]:[stroke-width:0.65] shrink-0"
      style={{
        backgroundColor: 'rgba(26, 33, 255, 0.05)',
        borderColor: 'rgba(26, 33, 255, 0.02)',
        borderWidth: '1px',
        color: '#12169F',
      }}
    >
      {project.icon}
    </div>
  );

  const tagsList = (
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
  );

  const ctaLink = (
    <Button
      variant="link"
      size="sm"
      className="group/button underline hover:opacity-80 px-0"
      style={{ color: '#12169F' }}
      asChild
    >
      <Link to={`/projects/${project.id}`}>
        View Case Study
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
      </Link>
    </Button>
  );

  return (
    <>
      {/* Desktop / tablet row */}
      <tr
        className="group border-b transition-colors hover:bg-accent cursor-pointer hidden md:table-row"
        onClick={() => window.location.href = `/projects/${project.id}`}
      >
        <td className="py-6 pr-4">{iconBox}</td>
        <td className="py-6 pr-4">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
        </td>
        <td className="py-6 pr-4">
          <p className="text-muted-foreground">{project.summary}</p>
        </td>
        <td className="py-6 pr-4">{tagsList}</td>
        <td className="py-6">{ctaLink}</td>
      </tr>

      {/* Mobile card */}
      <tr className="md:hidden">
        <td colSpan={5} className="block border-b py-6">
          <div
            className="group flex flex-col gap-4 cursor-pointer"
            onClick={() => window.location.href = `/projects/${project.id}`}
          >
            <div className="flex items-center gap-3">
              {iconBox}
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
            </div>
            <p className="text-muted-foreground">{project.summary}</p>
            {tagsList}
            <div>{ctaLink}</div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProjectCard;
