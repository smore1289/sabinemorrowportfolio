import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DiagramLightbox from "@/components/DiagramLightbox";
import WorkArtifacts from "@/components/WorkArtifacts";

const CaseStudyBoutiqueAgency = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="container px-4 max-w-3xl mx-auto mt-24 sm:mt-20 mb-0">
          <Link to="/#selected-projects" className="text-primary hover:underline text-lg">
            ← Back to Projects
          </Link>
        </div>
        {/* Hero Block */}
        <section className="pt-12 md:pt-20 pb-6 md:pb-9 bg-accent/10">
          <div className="container px-4 max-w-3xl mx-auto mt-20 sm:mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Boutique Creative Agency: Operational Scaling
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Building the operating system for a growing video production agency — from tribal knowledge to scalable infrastructure.
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</dt>
                <dd className="text-base">Fractional COO / Operations Lead</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Engagement</dt>
                <dd className="text-base">~5 months</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Focus</dt>
                <dd className="text-base">Systems Design · Change Management · Infrastructure · Knowledge Management</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Artifacts</dt>
                <dd className="text-base">Process Documentation · Smartsheet Workflows · Notion Knowledge Center · Loom Training Videos</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto pt-6 md:pt-11 pb-12 md:pb-20 space-y-16">
          {/* The Challenge */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A 10-person creative agency was generating real revenue for a major enterprise client, but its operational knowledge was entirely fragmented — files on the creative director's laptop, processes in people's heads, and the entire video production pipeline undocumented. The owner had ambition to grow but lacked the infrastructure to support it.
            </p>
          </section>

          {/* What I Owned */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Owned</h2>
            <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
              <li><strong>Stakeholder interviews</strong> — across nearly every team member, mapping roles, workflows, and communication patterns</li>
              <li><strong>Complete SOP library</strong> — built from scratch across all core functions</li>
              <li><strong>Production process documentation</strong> — extracted, structured, and published as a standalone production bible</li>
              <li><strong>Complete technology infrastructure</strong> — a suite of integrated tools configured to match how the agency actually worked (including a strategic recommendation to bring video finishing inhouse to reduce vendor dependency and reclaim margin)</li>
              <li><strong>Notion knowledge center</strong> — built and organized as the central operational reference for the entire agency</li>
              <li><strong>Network infrastructure overhaul</strong> — researched providers, presented options, managed installation of new secure fiber network, reducing monthly operating costs immediately</li>
            </ul>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I started by interviewing nearly everyone on the team to map real workflow paths before recommending a single change. What surfaced was a fragile setup: the creative director's laptop acting as the server, documentation scattered and inaccessible, and the entire video production process — storyboarding, director sourcing, talent estimates, music rights, scheduling — existing nowhere in writing. For an agency whose core product was video, that was an existential risk.
              </p>
              <p>
                I designed and implemented a complete technology infrastructure — integrated tools covering project planning, file management, communication, and knowledge sharing — configured to match how the agency actually worked. Every tool had a purpose, every workflow had an SOP, and every core process had a Loom walkthrough in the Notion knowledge center. I also uncovered an overpayment on their network setup: after researching providers and presenting options, a new secure fiber network was installed — reducing their monthly costs immediately.
              </p>

              {/* Diagram Lightbox Placeholder */}
              <DiagramLightbox />
            </div>
          </section>

          {/* The Outcome */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Outcome</h2>
            <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
              <li>End-to-end video production pipeline documented for the first time — any team member could navigate from brief to delivery</li>
              <li>Centralized knowledge base housing SOPs, project artifacts, tech stack docs, Loom training videos, onboarding framework, team directory, and resource directory</li>
              <li>New secure fiber network reduced monthly operating costs immediately</li>
              <li>Strategic recommendation to bring video finishing inhouse — reducing vendor dependency and reclaiming margin on their core product</li>
              <li>Owner gained full visibility into operations, costs, and a scalable onboarding path for new team members</li>
            </ul>
            <p className="mt-6 text-lg font-medium text-foreground leading-relaxed">
              They came in producing great work for one client. They left with the operating system to do it for many.
            </p>
          </section>

          <WorkArtifacts projectSlug="boutique-agency" />

          {/* Back Link */}
          <div className="pt-4">
            <Link
              to="/"
              className="text-primary hover:underline text-lg"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyBoutiqueAgency;
