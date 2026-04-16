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
        <section className="py-12 md:py-20 bg-accent/10">
          <div className="container px-4 max-w-3xl mx-auto mt-20 sm:mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Boutique Creative Agency: Operational Scaling
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Building the operating system for a growing video production agency — from tribal knowledge to scalable infrastructure.
            </p>

            <dl className="grid grid-cols-1 gap-y-4 text-base">
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Role</dt>
                <dd className="mt-1">Fractional COO / Operations Lead</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Engagement</dt>
                <dd className="mt-1">~5 months</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Focus</dt>
                <dd className="mt-1">Systems Design · Change Management · Infrastructure · Knowledge Management</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Artifacts</dt>
                <dd className="mt-1">Process Documentation · Smartsheet Workflows · Notion Knowledge Center · Loom Training Videos</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto py-12 md:py-20 space-y-16">
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
              <li><strong>Full operational audit</strong> — from file storage to network infrastructure to team structure</li>
              <li><strong>Shared drive architecture</strong> — designed and implemented for full team access</li>
              <li><strong>Complete SOP library</strong> — built from scratch across all core functions</li>
              <li><strong>Production process documentation</strong> — extracted, structured, and published as a standalone production bible</li>
              <li><strong>Complete technology infrastructure</strong> — a suite of integrated tools configured to match how the agency actually worked</li>
              <li><strong>Network infrastructure overhaul</strong> — researched providers, presented options, managed installation of new secure fiber network</li>
              <li><strong>Notion knowledge center</strong> — built and organized as the central operational reference for the entire agency</li>
              <li><strong>Training program</strong> — original Loom video tutorials for custom workflows, curated resources for industry-standard tools, hosted in the knowledge center</li>
              <li><strong>Strategic recommendation</strong> — identified opportunity to bring video finishing inhouse to reduce vendor dependency and reclaim margin</li>
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
