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
        <section className="py-12 md:py-20 bg-accent/10">
          <div className="container px-4 max-w-3xl mx-auto mt-20 sm:mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Global Investment Bank: Data Architecture &amp; Platform Strategy
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Mapping the undocumented data architecture of a wealth management platform — and rescuing a product that was about to be scrapped.
            </p>

            <dl className="grid grid-cols-1 gap-y-4 text-base">
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Role</dt>
                <dd className="mt-1">Senior Business Analyst / Product Manager</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Engagement</dt>
                <dd className="mt-1">1 year</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Focus</dt>
                <dd className="mt-1">Data Architecture · Workflow Mapping · Compliance · Stakeholder Management · Product Strategy</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Artifacts</dt>
                <dd className="mt-1">Miro Data Flow Diagrams · Process Documentation · Workflow Maps</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto py-12 md:py-20 space-y-16">
          {/* The Challenge */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A global investment bank managing wealth and investment plans for institutional and individual investors needed to do two things simultaneously: rescue a newly built automated investment tool that was failing in beta, and build a rules-based personalization system capable of segmenting investors and surfacing the right products to the right accounts — all within one of the most heavily regulated environments in financial services.
              </p>
              <p>
                The compliance framework alone was formidable — AML rules, Rule 144, tax filing requirements, PII protection, and cross-border restrictions governing every data decision. And before any of the personalization work could begin, a more fundamental problem had to be solved: nobody knew where all the data lived.
              </p>
            </div>
          </section>

          {/* What I Owned */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Owned</h2>
            <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <li><strong>End-to-end UX mapping of the automated self-service investment tool</strong> — documented the existing flow, timed every stage, identified the friction points that were pushing the team toward scrapping it entirely</li>
              <li><strong>Optimized flow design</strong> — reworked the user journey to address the core usability failures, giving the product a viable path to launch</li>
              <li><strong>Data archaeology</strong> — weeks of research tracking down where investor data actually lived across multiple legacy databases and a mainframe accumulated through decades of mergers and acquisitions</li>
              <li><strong>Data architecture mapping</strong> — working with a technical team member to extract database schemas, translate SQL into visual diagrams, and document the complete data landscape for the first time</li>
              <li><strong>Personalization and segmentation flow documentation</strong> — mapping how investor data would be ingested, segmented by compliance rules, and used to serve the right product experience to the right account</li>
              <li><strong>External system integration documentation</strong> — documenting the data handoff to external platforms, ensuring PII protection and compliance at every transfer point</li>
              <li><strong>Stakeholder management</strong> — conducted boardroom walkthroughs with directors and managing directors across multiple organizations, facilitating a long list of sign-offs required to move the project forward</li>
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
                The automated investment tool had been built and was in beta — and the user experience was so slow and cumbersome that serious voices were calling for it to be scrapped. Before that decision was made, I mapped the entire flow end to end and timed it. Timing mattered because the problem wasn't just complexity, it was duration. With the friction points documented, the team had something actionable. Improvements were made. The tool survived.
              </p>

              <p className="font-semibold text-foreground">The personalization system</p>
              <p>
                The personalization system required ingesting investor data across the entire platform, applying layered compliance rules, protecting PII at every stage, and feeding sanitized data into external systems — all within one of the most regulated environments in financial services. Before any of that could be architected, I had to find the data. That meant weeks of research hunting down where investor records actually lived across a platform built through decades of mergers and acquisitions — multiple legacy databases and a mainframe, each holding pieces of the picture. Working with a technical team member to extract database schemas, I translated that complexity into visual data flow diagrams for the first time.
              </p>

              <p>
                Those diagrams became the foundation for everything that followed — and the subject of intense scrutiny. Every data flow touching external systems required sign-off from a long list of directors and managing directors. I presented in boardrooms, conducted one-on-one walkthroughs to accommodate schedules, and did whatever it took to bring stakeholders to confidence and sign-off.
              </p>

              {/* Diagram Lightbox Placeholder */}
              <DiagramLightbox />
            </div>
          </section>

          {/* The Outcome */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Outcome</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Two workstreams. Two distinct outcomes.
              </p>
              <p>
                The automated investment tool went from a product the team wanted to abandon to a viable, launchable experience. Mapping the flow, timing the friction, and redesigning the user journey gave it a path forward it didn't have before.
              </p>
              <p>
                The personalization and segmentation architecture was documented end to end — for the first time — across a platform that had never had a complete picture of its own data landscape. Every data flow was mapped, every compliance requirement was accounted for, and every external integration was documented to the standard required by one of the most heavily regulated environments in financial services.
              </p>
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
