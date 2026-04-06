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
              A 10-person creative agency was producing quality video work for a major enterprise client and generating real revenue — but its operational knowledge was fragmented and inaccessible. Files lived on the creative director's laptop, documentation existed in pockets, project planning was happening in spreadsheets, and knowledge was siloed. The entire video production process — a complex, multi-stage pipeline from brief to delivery — lived in one person's head. The owner had the ambition to grow but lacked the infrastructure to support it.
            </p>
          </section>

          {/* What I Owned */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Owned</h2>
            <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <li><strong>Stakeholder interviews</strong> — across nearly every team member — mapping roles, responsibilities, daily workflows, and communication patterns</li>
              <li><strong>Full operational audit</strong> — from file storage to network infrastructure to team structure</li>
              <li><strong>Shared drive architecture</strong> — designed and implemented for full team access</li>
              <li><strong>Complete SOP library</strong> — built from scratch across all core functions</li>
              <li><strong>Production process documentation</strong> — extracted, structured, and published as a standalone production bible</li>
              <li><strong>Complete technology infrastructure</strong> — designed and implemented a suite of integrated tools and platforms, each selected with purpose, configured to match how the agency actually worked</li>
              <li><strong>Network infrastructure overhaul</strong> — researched providers, presented options, managed installation of new secure fiber network</li>
              <li><strong>Notion knowledge center</strong> — built and organized as the central operational reference for the entire agency</li>
              <li><strong>Training program</strong> — original Loom video tutorials for custom workflows, curated resources for industry-standard tools, hosted in the knowledge center for ongoing team reference</li>
              <li><strong>Strategic recommendation</strong> — identified opportunity to bring video finishing inhouse to reduce vendor dependency and reclaim margin on core product</li>
            </ul>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I started where I always start: interviewing nearly everyone on the team to map real workflow paths before recommending a single change. What that surfaced was a fragile setup — the creative director's laptop acting as the server, documentation scattered and inaccessible, and project plans trapped in spreadsheets that couldn't handle agency complexity.
              </p>
              <p>
                Most critically, the entire video production process — storyboarding, director sourcing, pre-bid meetings, talent estimates, music rights, production scheduling — existed nowhere in writing. It was one person's institutional memory. For an agency whose bread and butter was video, that was an existential risk.
              </p>
              <p>
                I designed and implemented a complete technology infrastructure — a suite of integrated tools and platforms covering project planning, file management, communication, production, and knowledge sharing — configured to match how the agency actually worked, not how a generic template said it should. Every tool had a purpose, every workflow had an SOP, and every core process had a Loom walkthrough built into the Notion knowledge center so the system remained usable after I left. The production process was complex enough to warrant its own dedicated section — a full production bible any team member could navigate from brief to delivery.
              </p>
              <p>
                I also uncovered something the owner didn't know: they were overpaying for their existing network setup. I researched network service providers, compared costs and installation requirements, and presented options to the owner. He signed off, a crew came in and rewired the building with a new secure fiber network — and it reduced their monthly costs immediately.
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
                I came into a one-client agency running on habit and proximity and left them with the infrastructure of a scalable business.
              </p>
              <p>
                Files were accessible. Processes were written. The production pipeline was documented end-to-end for the first time. Projects had visibility. The owner had a network that was secure, right-sized, and cheaper to run.
              </p>
              <p>
                They had the foundations of a real knowledge base — a centralized repository housing project artifacts, SOPs, the full production process, tech stack documentation, Loom training videos, an onboarding framework, a team directory, and a resource directory with potential to be monetized. New team members could ramp quickly. Existing staff had a shared reference. The owner had visibility into operations — including costs he didn't know he was carrying.
              </p>
              <p>
                I also identified an opportunity to bring video finishing inhouse — reducing dependency on outside vendors and reclaiming margin on their core product. The recommendation was made; execution was theirs to own.
              </p>
              <p className="font-medium text-foreground">
                They came in producing great work for one client. They left with the operating system to do it for many.
              </p>
            </div>
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
