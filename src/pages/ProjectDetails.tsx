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
        alt: "User Journey Map showing task categories and tasks flow",
        miroLink: "https://miro.com/app/board/o9J_lwwHxIA=/?moveToWidget=3458764527513209494&cot=14"
      },
      quote: "A clearer interface led to faster onboarding, fewer support calls, and a better experience for global users navigating complex workflows."
    },
    "green-homes": {
      title: "🛠️ Green Homes Marketplace: Simplifying Sustainable Upgrades",
      client: "Sustainability-focused startup (Canada)",
      role: "UX Designer, Product Strategist, Systems Architect",
      focusAreas: ["Wireframing", "Workflow Design", "No-Code Prototyping", "Content Strategy"],
      challenge: "Navigate the complex Green Homes Grant Program by creating a user-friendly platform that connects homeowners with pre-screened, government-approved contractors.",
      approach: [
        "Mapped user personas, workflows, and pain points",
        "Conducted card sorting, content audits, and journey mapping in Miro",
        "Identified the challenge: balancing complex regulatory info with a simple user experience",
        "Created low- and high-fidelity wireframes in Figma",
        "Built a clickable prototype for testing and iteration",
        "Prioritized intuitive flows, clear language, and visual simplicity",
        "Developed the front-end in Webflow",
        "Structured a no-code backend with Airtable",
        "Integrated Typeform for gated intake and lead qualification"
      ],
      keyDeliverables: [
        "Two-sided marketplace platform prototype",
        "Simplified user flow for Green Homes Grant Program",
        "No-code backend with Airtable and Typeform integration",
        "Modular prototype guiding full platform development"
      ],
      impact: [
        "Simplified a complex government process into clear, user-friendly steps",
        "Created a modular prototype that's guiding MVP development",
        "Enabled testing and validation before engineering investment"
      ],
      visualSample: {
        description: "Click to view the Miro board for this project",
        note: "Includes personas, content maps, and user flows",
        image: "/lovable-uploads/b0ba0691-0dc7-46d6-a4e1-f45a7e9b2c73.png",
        alt: "Green Homes Marketplace Miro board showing project architecture and user flows",
        miroLink: "https://miro.com/app/board/o9J_l1qRsIg=/"
      },
      quote: "Transforming a complex government program into an intuitive, user-friendly experience that empowers homeowners to make sustainable upgrades."
    },
    "investment-bank": {
      title: "🧠 Case Study: Data Mapping & API Design for Personalized Finance Experience",
      client: "Global Investment Bank (confidential)",
      role: "Data Workflow Strategist, UX Systems Analyst",
      focusAreas: ["Data architecture", "API specs", "User segmentation", "Cloud compliance"],
      challenge: "Support a multi-track initiative aimed at transforming the digital experience for stock plan clients, integrating Salesforce and Adobe Experience Platform, launching a new robo-advisor, and delivering personalized site content—all while respecting strict data privacy rules.",
      approach: [
        "Identified critical data points and business rules",
        "Audited enterprise data sources and their ownership",
        "Visualized the full data journey from source to display using swim lane diagrams",
        "Designed workflows to govern what data could be shared or flagged for personalization",
        "Collaborated with developers to write and validate API specs",
        "Used Boolean flags, obfuscation, and secure transformations to meet PII compliance",
        "Ensured that only segmented users saw alerts, banners, or robo-advisor features",
        "Tracked all workflows from user authentication to Adobe Analytics dashboards",
        "Conducted QA and A/B testing to validate rule logic and performance"
      ],
      keyDeliverables: [
        "Compliant personalization system for stock plan users",
        "Site efficiency improvements and reduced unnecessary banner exposure",
        "Clear data roadmap used across product, legal, and engineering teams",
        "Platform enhancements and successful robo-advisor experience rollout"
      ],
      impact: [
        "Enabled compliant personalization for stock plan users",
        "Improved site efficiency and reduced unnecessary banner exposure",
        "Provided a clear data roadmap used across product, legal, and engineering teams",
        "Supported successful platform enhancements and rollout of robo-advisor experience"
      ],
      visualSample: {
        description: "View Swim Lane Data Map & User Flow in Miro",
        note: "Including API diagrams and data flow visualization",
        image: "/lovable-uploads/c5c04340-1234-5678-90ab-cdef12345678.png",
        alt: "Data workflow and API architecture diagrams",
        miroLink: "https://miro.com/app/board/uXjVOsjl4IY=/"
      },
      quote: "This work ensured that platform personalization was powered by logic, privacy, and precision—turning complexity into clarity for both users and stakeholders."
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
                  <a 
                    href={project.visualSample.miroLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    {project.visualSample.description}
                  </a>
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
