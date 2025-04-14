
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// This would typically come from an API or data store
const getProjectDetails = (id: string) => {
  return {
    title: "Simplifying Complexity in a Global HR Platform",
    client: "Global HRIS Company (Tel Aviv-based)",
    role: "UX Content Strategist & Workflow Mapper",
    focusAreas: ["Website microcopy", "user flows", "terminology clarity"],
    challenge: "As the company expands into new regions, their platform is increasingly complex. Users faced confusion due to high-impact features, heavy product terminology, and complicated UX patterns. The result? A surge in support tickets and user drop-offs, especially in high-impact modules like task automation and permissioning.",
    approach: [
      "Conducted a comprehensive UX audit of the platform",
      "Researched global HR terminology and compliance needs",
      "Analyzed support tickets to identify key friction drivers",
      "Mapped the current user journey in Miro, layered with insights, friction points, and ideal state improvements",
      "Prioritized high-impact fix task modules, which automated critical HR flows and generated the highest volume of support tickets"
    ],
    impact: [
      "75% reduction in task-module-related support tickets",
      "90% increase in successful task completions within 90 days",
      "Reduced friction across multiple stages of the employee lifecycle flow",
      "Empowered product and CX teams to implement scalable UX updates"
    ],
    visualSample: "Full journey map in Miro (annotated with CX goals, friction points, and ideal state overlay)"
  };
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectDetails(id || "");
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b">
          <div className="container px-4 py-4 max-w-7xl mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-accent/10">
          <div className="container px-4 max-w-7xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6"
              asChild
            >
              <Link to="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
                <dl className="grid gap-4">
                  <div>
                    <dt className="font-medium text-muted-foreground">Client</dt>
                    <dd className="text-lg">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Role</dt>
                    <dd className="text-lg">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">Focus Areas</dt>
                    <dd className="text-lg">{project.focusAreas.join(", ")}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container px-4 max-w-7xl mx-auto py-12 md:py-20">
          <div className="max-w-3xl">
            {/* Challenge */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              <p className="text-lg text-muted-foreground">{project.challenge}</p>
            </section>

            {/* Approach */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                {project.approach.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Impact */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Impact</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                {project.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Visual Sample */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Visual Sample</h2>
              <p className="text-lg text-muted-foreground">{project.visualSample}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
