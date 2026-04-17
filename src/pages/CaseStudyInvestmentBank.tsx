import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DiagramLightbox from "@/components/DiagramLightbox";
import WorkArtifacts from "@/components/WorkArtifacts";

const CaseStudyInvestmentBank = () => {
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
              Global Investment Bank: Data Architecture &amp; Platform Strategy
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Mapping the undocumented data architecture of a wealth management platform — and rescuing a product that was about to be scrapped.
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</dt>
                <dd className="text-base">Senior Business Analyst / Product Manager</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Engagement</dt>
                <dd className="text-base">1 year</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Focus</dt>
                <dd className="text-base">Data Architecture · Workflow Mapping · Compliance · Stakeholder Management · Product Strategy</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Artifacts</dt>
                <dd className="text-base">Miro Data Flow Diagrams · Process Documentation · Workflow Maps</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto pt-6 md:pt-11 pb-12 md:pb-20 space-y-16">
          {/* The Challenge */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A global investment bank needed to simultaneously rescue a failing automated investment tool in beta and build a rules-based personalization system to surface the right products to the right accounts — all within one of the most heavily regulated environments in financial services.
              </p>
              <p>
                Before any personalization work could begin, a more fundamental problem had to be solved: the compliance framework was formidable (AML rules, Rule 144, tax filing, PII protection, cross-border restrictions), and nobody knew where all the data lived.
              </p>
            </div>
          </section>

          {/* What I Owned */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Owned</h2>
            <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
              <li><strong>End-to-end UX mapping of the automated self-service investment tool</strong> — documented the existing flow, timed every stage, identified the friction points driving the team toward scrapping it, and reworked the journey to give the product a viable path to launch</li>
              <li><strong>Data archaeology</strong> — weeks of research tracking investor data across multiple legacy databases and a mainframe accumulated through decades of mergers and acquisitions</li>
              <li><strong>Data architecture mapping</strong> — extracted database schemas with a technical team member, translated SQL into visual diagrams, and documented the complete data landscape for the first time</li>
              <li><strong>Personalization and segmentation flow documentation</strong> — mapped how investor data would be ingested, segmented by compliance rules, and used to serve the right product to the right account, including data handoffs to external platforms with PII protection at every transfer point</li>
              <li><strong>Stakeholder management</strong> — conducted boardroom walkthroughs with directors and managing directors across multiple organizations to secure the required sign-offs</li>
            </ul>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                There were two parallel workstreams and both required the same foundational discipline: map what exists before prescribing anything.
              </p>

              <p className="font-semibold text-foreground">The automated investment tool</p>
              <p>
                I mapped the entire flow end to end and timed every stage — because the problem wasn't just complexity, it was duration. That gave the team documented friction points and an optimized journey that saved the product from being scrapped.
              </p>

              <p className="font-semibold text-foreground">The personalization system</p>
              <p>
                Building the personalization system required first finding the data — weeks of archaeology across legacy databases and a mainframe built through decades of mergers and acquisitions. Working with a technical team member, I extracted database schemas, translated them into visual data flow diagrams for the first time, and then shepherded that documentation through intensive boardroom scrutiny to secure sign-off from directors and managing directors across multiple organizations.
              </p>

              {/* Diagram Lightbox Placeholder */}
              <DiagramLightbox />
            </div>
          </section>

          {/* The Outcome */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Outcome</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <ul className="space-y-4 list-disc pl-6">
                <li>The automated investment tool went from a product the team wanted to abandon to a viable, launchable experience</li>
                <li>The personalization and segmentation architecture was documented end to end — for the first time — across a platform that had never had a complete picture of its own data landscape</li>
                <li>Every data flow was mapped, every compliance requirement accounted for, and every external integration documented to the standard required by one of the most heavily regulated environments in financial services</li>
              </ul>
              <p className="font-medium text-foreground">
                A long list of stakeholders across multiple organizations signed off. The project moved forward.
              </p>
            </div>
          </section>

          {/* Artifacts */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Artifacts</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <p className="text-lg font-semibold mb-1">🗂️ Miro Data Flow Diagrams</p>
                <p className="text-muted-foreground italic">
                  Complete data architecture maps documenting existing flows, segmentation logic, compliance checkpoints, and external system integrations across a complex, multi-database wealth management platform.
                </p>
                <p className="text-sm text-muted-foreground mt-2">(Sanitized versions available on request — full versions NDA protected)</p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <p className="text-lg font-semibold mb-1">📋 Process &amp; Workflow Documentation</p>
                <p className="text-muted-foreground italic">
                  End-to-end UX flow maps for the automated investment tool — including existing state, timing analysis, friction point identification, and optimized flow design.
                </p>
                <p className="text-sm text-muted-foreground mt-2">(Available on request)</p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground italic">All artifacts available on request.</p>
          </section>

          {/* Work Artifacts */}
          <WorkArtifacts projectSlug="investment-bank" />

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

export default CaseStudyInvestmentBank;
