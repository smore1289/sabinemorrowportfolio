import { useParams, Link } from "react-router-dom";
import { ChevronLeft, FileText, MapPin } from "lucide-react";
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

const getProjectDetails = (id: string) => {
  const projects = {
    "hr-platform": {
      title: "Simplifying Complexity in a Global HR Platform",
      client: "HRIS Company (Tel Aviv-based)",
      role: "UX Content Strategist & Workflow Mapper",
      focusAreas: ["Website microcopy", "User flows", "Terminology clarity"],
      challenge: "As the company expanded across regions, their platform became increasingly complex. Users faced confusion due to legal differences, language-specific terminology, and inconsistent UX patterns. The result? A surge in support tickets and user drop-off, especially in high-impact modules like task automation and permissioning.",
      approach: [
        "Conducted a comprehensive UX audit of the platform",
        "Researched global HR terminology and compliance needs",
        "Analyzed competitor experiences and support volume drivers",
        "Mapped the current user journey in Miro, layered with insights, friction points, and ideal state improvements",
        "Focused on simplifying the task module, which automated critical HR flows and generated the highest volume of support tickets",
        "Proposed clear, consistent microcopy, actionable tooltips, error messages, and simplified decision trees"
      ],
      keyDeliverables: [
        "Fully annotated user journey map (current vs. ideal state)",
        "Revised microcopy and interface logic",
        "Iconography and color-coded logic key",
        "UX framework for broader content strategy across the platform"
      ],
      impact: [
        "25% reduction in task-module-related support tickets",
        "30% increase in successful task completions within 60 days",
        "Reduced friction across multiple stages of the employee lifecycle flow",
        "Empowered product and CX teams to implement scalable UX updates"
      ],
      visualSample: {
        description: "Click to view the full user journey map in Miro",
        note: "Annotated with UX goals, decision points, and ideal-state overlays",
        image: "/lovable-uploads/4c413fe9-11bd-4bfc-a66d-6b2c72dedcf5.png",
        alt: "User Journey Map showing task categories and tasks flow"
      },
      quote: "A clearer interface led to faster onboarding, fewer support calls, and a better experience for global users navigating complex workflows."
    }
  };

  return projects[id as keyof typeof projects] || null;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectDetails(id || "");
  
  if (!project) {
    return <div>Project not found</div>;
  }
  
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
                  <BreadcrumbLink asChild>
                    <Link to="/#projects">Projects</Link>
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
              <Link to="/#projects">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
                <dl className="grid gap-4">
                  <div>
                    <dt className="font-medium text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Client
                    </dt>
                    <dd className="text-lg">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Role
                    </dt>
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

            {/* Key Deliverables */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Key Deliverables</h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                {project.keyDeliverables.map((item, index) => (
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
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  {project.visualSample.description}
                </p>
                <div className="border rounded-lg overflow-hidden">
                  <img 
                    src={project.visualSample.image} 
                    alt={project.visualSample.alt}
                    className="w-full h-auto"
                  />
                </div>
                <p className="italic text-muted-foreground">
                  {project.visualSample.note}
                </p>
              </div>
            </section>

            {/* Quote */}
            {project.quote && (
              <section className="mb-16 p-6 bg-accent/10 rounded-lg">
                <blockquote className="text-xl italic text-muted-foreground">
                  "{project.quote}"
                </blockquote>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
