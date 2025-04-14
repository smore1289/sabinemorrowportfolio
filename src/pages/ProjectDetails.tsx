
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
        image: "/lovable-uploads/0ff60780-0a26-4b3d-81f1-02cf47e97462.png",
        alt: "A detailed specification of data query and validation rules for a third-party platform, showing business rules, data validation APIs, and data flow to Adobe Analytics",
        miroLink: "https://miro.com/app/board/uXjVOsjl4IY=/"
      },
      quote: "This work ensured that platform personalization was powered by logic, privacy, and precision—turning complexity into clarity for both users and stakeholders."
    },
    "ebook-design": {
      title: "📘 Case Study: Turning Community FAQs into a Downloadable eBook",
      client: "Local Environmental Campaign (Volunteer Project)",
      role: "Editorial Designer, Content Formatter",
      focusAreas: ["Layout design", "Visual formatting", "Public communications"],
      challenge: "Transform a 2,500-word Word document of Q&As—sourced from Facebook discussions and answered by environmental experts—into a professionally formatted, downloadable PDF eBook to educate voters about Community Choice Aggregation (CCA) referendum.",
      approach: [
        "Received raw copy from community leaders and environmental nonprofits",
        "Edited for readability and flow without altering original meaning",
        "Designed an 11-page layout in Adobe InDesign, styled as a clean, digestible digital magazine",
        "Output the file as a PDF, optimized for desktop and mobile download",
        "Shared widely among residents in advance of the referendum"
      ],
      keyDeliverables: [
        "Professional PDF eBook design",
        "Simplified policy explanations",
        "Mobile and desktop-optimized formatting",
        "Community-friendly Q&A layout"
      ],
      impact: [
        "Helped simplify a dense policy topic into a shareable format",
        "Supported a successful ballot initiative, passing in November 2021",
        "Increased community understanding and engagement through accessible design"
      ],
      visualSample: {
        description: "View the PDF eBook Design Sample",
        note: "Featuring Q&A layout and professional typography",
        image: "/lovable-uploads/3a27cc19-b90e-4388-8500-437e96f05d99.png",
        alt: "Sample page from the Community Choice Aggregation FAQ eBook showing Q&A layout with 'Fact not fear mongering' header and magnifying glass on financial data",
        miroLink: "https://drive.google.com/file/d/15mgLcCvWiQ2RgsGnsTsGdgqTHLDVazLc/view"
      },
      quote: "Good design can empower informed decision-making. This project helped voters see the value of local energy choice—clearly and confidently."
    },
    "artist-brand": {
      title: "🎭 Case Study: Brand Identity & Website Refresh for Performing Artist",
      client: "Independent Performing Artist",
      role: "Brand Designer, Web Developer, UX Strategist",
      focusAreas: ["Visual identity", "responsive website", "storytelling", "interactive UI"],
      challenge: "This project was a complete brand and website refresh for a performing artist who needed a stronger digital presence to showcase their work, sell tickets, and attract new audiences. The original site lacked clarity, personality, and functionality — and there was no existing logo or cohesive visual identity.",
      approach: [
        "Designed a new visual brand from the ground up, including a bold, memorable logo",
        "Refreshed the entire website with a focus on showcasing performances, sharing an updated biography, and enabling ticket sales",
        "Built the site in Framer, using scroll-triggered animations to reflect the artist's energy and bring moments of delight to the user experience",
        "Optimized layout for mobile and made content easily maintainable for future updates"
      ],
      keyDeliverables: [
        "Complete visual brand identity system",
        "Responsive, animated Framer website",
        "Integrated e-commerce functionality for ticket sales",
        "Mobile-optimized user experience"
      ],
      impact: [
        "Improved brand recognition and professional polish",
        "Enabled direct ticket sales through the website",
        "Delivered a site experience that matched the artist's vibrant personality",
        "Created a scalable, engaging platform for future performances"
      ],
      visualSample: {
        description: "View Complete Website Transformation",
        note: "Brand identity system and responsive website redesign, including homepage, about section, events calendar, and residency shows",
        image: "/lovable-uploads/fbc70cbe-b4ea-4191-81f3-5181d58cd526.png",
        alt: "Before and after screenshots showing a comprehensive transformation of the artist's website, featuring homepage, about section, events page, and logo design",
        miroLink: "https://www.dnewalloexperience.com/"
      },
      quote: "From invisible to unforgettable — the artist now has a brand and digital presence as bold and dynamic as their stage work."
    },
    "campaign-site": {
      title: "🗳️ Case Study: Campaign Website for Local Candidate Slate",
      client: "\"For The People\" Council Candidate Slate",
      role: "Web Designer, Content Strategist, UX Builder",
      focusAreas: ["Political communications", "Voter engagement", "Event promotion"],
      challenge: "I designed and built a campaign website for a local candidate slate running for Town Council. The goal was to introduce voters to the candidates and their platforms, share key dates and events, and drive donations and volunteer sign-ups leading up to the November 5, 2024 election.",
      approach: [
        "Built the site in Framer, incorporating smooth scrolling and modular content for fast updates",
        "Created a clear information hierarchy to introduce each candidate and their platform",
        "Integrated a live campaign calendar, donation links, and volunteer sign-up forms",
        "Developed a dynamic photo gallery and event feed to build momentum and community presence",
        "Wrote and organized all site copy, ensuring consistent tone and accessible messaging"
      ],
      keyDeliverables: [
        "Campaign hub that supported outreach and fundraising",
        "Easy voter-candidate connection interface",
        "Flexible, update-friendly CMS",
        "Polished, professional design for slate's digital presence"
      ],
      impact: [
        "Delivered a campaign hub that supported outreach and fundraising",
        "Made it easy for voters to connect with candidates and take action",
        "Provided the campaign team with a flexible, update-friendly CMS",
        "Elevated the slate's digital presence with a polished, professional design"
      ],
      visualSample: {
        description: "View Complete Campaign Website Design",
        note: "Including homepage, candidate profiles, platform details, and community engagement sections",
        image: "/lovable-uploads/07f10108-3052-4c11-b947-74ecc857939c.png",
        alt: "Multiple screenshots of the For The People campaign website showing homepage with candidate photos, individual candidate profiles, platform details, and community engagement sections",
        miroLink: "https://framer.com/projects/For-The-People-Campaign-Site--wFAW2ng09SqT50uFaanT-8HoIB?node=ffAz3T580"
      },
      quote: "Designing for democracy means making it easy for voters to learn, engage, and act."
    },
    "femhealth-demo": {
      title: "💖 Case Study: AI-Enhanced Demo Site for Women's Healthcare",
      client: "Concept Project – FemHealth Solutions",
      role: "Web Designer, Content Strategist, Creative Technologist",
      focusAreas: ["Healthcare UX", "AI-generated visuals", "Motion design"],
      challenge: "I created a fictional women's healthcare facility website to explore the intersection of design, storytelling, and emerging technology. The goal was to demonstrate how a digital experience can feel both clinical and compassionate, while using AI to enhance visuals and engagement.",
      approach: [
        "Used AI image tools to generate custom visual assets tailored to a women's health theme",
        "Created a hero section animation from a still image to add subtle, engaging motion",
        "Wrote and structured all website content, including service descriptions and messaging",
        "Built the full demo site in Framer, incorporating scroll animations and a calming aesthetic",
        "Designed for trust, clarity, and modern accessibility standards common in healthcare UX"
      ],
      keyDeliverables: [
        "AI-enhanced visual design system",
        "Animated hero section and scroll interactions",
        "Complete demo site built in Framer",
        "Healthcare-focused UX patterns and content"
      ],
      impact: [
        "Demonstrated creative use of AI in real-world web scenarios",
        "Showcased visual storytelling for a sensitive, high-trust service sector",
        "Delivered a smooth, animated user experience that balances clarity with care",
        "Serves as a portfolio example of innovation in both content and interface"
      ],
      visualSample: {
        description: "View Demo Site in Framer",
        note: "An AI-enhanced healthcare website design demonstrating the intersection of technology and compassionate UX",
        image: "/lovable-uploads/4d697ee0-72f2-4f27-9530-f50e62d588d0.png",
        alt: "Screenshots of the FemHealth Solutions website showing a hero section with AI-generated artwork, service descriptions, and animated testimonials",
        miroLink: "https://perfect-guest-096268.framer.app/"
      },
      quote: "A calm, clear, and compassionate user experience—powered by smart design and emerging tech."
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
