import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DiagramLightbox from "@/components/DiagramLightbox";
import WorkArtifacts from "@/components/WorkArtifacts";
import TldrCallout from "@/components/TldrCallout";

const CaseStudyGreenHomes = () => {
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
              Green Homes Canada: UX Research to Prototype
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Translating complex federal green renovation policy into a two-sided marketplace — from primary research and persona development through to a working no-code prototype.
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</dt>
                <dd className="text-base">UX Lead / Product Designer</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Focus</dt>
                <dd className="text-base">UX Research · Persona Development · Journey Mapping · IA · Interaction Design · No-Code Build</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Artifacts</dt>
                <dd className="text-base">Miro Research & Workflow Boards · UX Design Mockups · Figma Prototype</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto pt-6 md:pt-11 pb-12 md:pb-20 space-y-16">
          {/* TL;DR */}
          <TldrCallout>
            Federal green building policy was too complex for homeowners and contractors to navigate, creating a clear marketplace gap. Translated the policy into a working marketplace concept through persona development, journey mapping, IA, wireframes, and a Figma prototype. Delivered a complete research-to-prototype workflow connecting policy intent to user-facing design.
          </TldrCallout>

          {/* The Challenge */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Canada Greener Homes Grant program offered homeowners up to $5,000 in federal grants for energy-efficient home renovations — but navigating the program was genuinely complex. Eligibility rules, provincial variations, EnerGuide assessment requirements, contractor vetting, and reimbursement processes made it inaccessible for most homeowners without expert guidance.
              </p>
              <p>
                The opportunity was to build a two-sided marketplace that simplified both sides of the equation: helping homeowners understand what they qualified for and connecting them with vetted contractors who could do the work. The challenge was that both sides had completely different needs, different onboarding paths, and different decision logic — and the matching between them had to be intelligent, not random.
              </p>
            </div>
          </section>

          {/* What I Owned */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Owned</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I led end-to-end research and UX for the platform — translating complex federal and provincial grant policy into clear platform logic and mapping contractor needs through live discovery calls.
              </p>
              <p>
                I defined seven core personas, mapped full journeys across homeowner, admin, and provider experiences, and wrote detailed user stories to lock MVP scope and priorities.
              </p>
              <p>
                I designed the full information architecture, including navigation, content hierarchy, and flows, plus a dual onboarding system with branched, conditional forms for homeowners and contractors that powered the matching engine.
              </p>
              <p>
                I also built the no-code prototype — from landing page and content pages to dashboards and provider profiles — and delivered multiple desktop and mobile iterations of the platform's UX.
              </p>
            </div>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Before designing screens, I had to make the policy usable. I dug through federal documentation, mapped grant rules, reimbursements, and provincial variations, then turned that into a working mind map that quietly powered every content and logic decision I made.
              </p>
              <p>
                At the same time, I went to the other side of the marketplace. Sitting in on contractor discovery calls let me see how they actually sell, what they need to qualify, and what "a fair bidding system" means in their world — essential context when you're designing for two sides that have to trust each other.
              </p>
              <p>
                With that foundation, the process moved in a deliberate sequence: personas first, then journeys, then user stories to pin down MVP, then IA and flows. Seven tightly scoped personas — homeowners, contractors, admin, and energy assessor — each got their own entry point, path, and success criteria.
              </p>
              <p>
                The gnarliest problem was dual onboarding: two long, branched forms with conditional logic that had to collect just enough detail to make matching intelligent without overwhelming anyone. I owned the workflow architecture and branching logic, while a technical collaborator handled the database-side matching algorithm so the system behaved like a single, coherent product.
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
                A working two-sided marketplace prototype — research-grounded, policy-accurate, and designed for both sides of a genuinely complex transaction.
              </p>
              <p>
                The platform translated federal grant complexity into a navigable homeowner experience, surfaced qualified contractors through a structured vetting and bidding process, and connected the two through a matching system built on carefully designed form logic. Seven personas, two distinct onboarding flows, a complete IA, and a fully designed desktop and mobile prototype — all built from primary research up.
              </p>
              <p>
                The Green Homes Canada federal program is still active. The problem this platform was designed to solve still exists.
              </p>
            </div>
          </section>

          {/* Artifacts */}
          <WorkArtifacts projectSlug="green-homes-canada" />

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

export default CaseStudyGreenHomes;
