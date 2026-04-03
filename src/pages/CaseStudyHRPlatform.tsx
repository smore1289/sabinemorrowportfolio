import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DiagramLightbox from "@/components/DiagramLightbox";

const CaseStudyHRPlatform = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Block */}
        <section className="py-12 md:py-20 bg-accent/10">
          <div className="container px-4 max-w-3xl mx-auto mt-20 sm:mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HR Platform: UX Research &amp; Workflow Redesign
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Diagnosing a fast-growing global HR platform's most complex section — from stakeholder pain points to actionable UX recommendations.
            </p>

            <dl className="grid grid-cols-1 gap-y-4 text-base">
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Role</dt>
                <dd className="mt-1">UX Analyst / Workflow Strategist</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Focus</dt>
                <dd className="mt-1">Stakeholder Research · Workflow Mapping · UX Analysis · Platform Optimization</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Artifacts</dt>
                <dd className="mt-1">Miro Workflow Diagrams · Annotated UX Recommendations · Research Notes</dd>
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
                A fast-growing global HR platform had scaled faster than its UX could keep up with. Rapid growth had left the platform patched together in places — functional, but unwieldy for the teams maintaining it and the users navigating it. The organization recognized this was unsustainable and commissioned a structured UX audit to surface what wasn't working and define what needed to change — both immediately and over the longer term.
              </p>
              <p>
                My assignment was the task and task categories section of the platform. It sounds like a contained scope. It wasn't. Tasks touch everything — onboarding flows, lifecycle events, scheduling, permissions, employee assignments. Getting this section right had downstream implications across the entire platform.
              </p>
            </div>
          </section>

          {/* What I Owned */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Owned</h2>
            <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <li><strong>Stakeholder interviews</strong> — across multiple internal teams — product, customer service, and user experience — capturing pain points, operational frustrations, and wish lists for improvement</li>
              <li><strong>Screen-by-screen walkthrough</strong> — of the assigned platform section — mapping exactly how it worked, where it broke down, and where unnecessary complexity had accumulated</li>
              <li><strong>Detailed Miro workflow diagrams</strong> — visualizing the existing user journey, decision points, bottlenecks, and error states across the full task and task categories flow</li>
              <li><strong>Annotated UX recommendations</strong> — specific, actionable proposed changes to UI, flow logic, and interaction design, constrained by real technical bandwidth</li>
              <li><strong>Contribution to the collective team handoff</strong> — workflows, research notes, and recommendations compiled into a comprehensive package delivered to the platform team</li>
            </ul>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Before forming any opinions about what should change, I needed to understand exactly what existed and why it worked the way it did. That meant interviewing stakeholders across product, customer service, and UX — not just to capture complaints, but to understand the full operational picture from the people living inside it every day.
              </p>
              <p>
                What emerged was a familiar pattern in fast-scaling platforms: decisions made quickly during growth that made sense in the moment but accumulated into complexity nobody had fully mapped. The task section alone branched into dozens of conditional paths — general tasks, email tasks, employee feedback, calendar events, scheduling logic, lifecycle conditions, permission structures. Each had its own modal, its own rules, its own edge cases. None of it had been visualized end to end.
              </p>
              <p>
                I mapped all of it. The Miro diagrams I produced captured the complete existing user journey — every decision point, every branch, every error state and dead end. That visualization surfaced what screen-by-screen navigation never could: redundant steps, inconsistent logic, points where users were dropped without clear recovery paths.
              </p>
              <p>
                From there I developed specific UX recommendations — proposed UI changes, flow simplifications, and interaction improvements — always filtered through the constraint that mattered most: the tech team was managing ongoing platform growth simultaneously. Recommendations had to be actionable within real bandwidth, not theoretical ideals. Near term fixes were separated from longer term improvements so the team had a clear prioritization path.
              </p>
              <p>
                The full package — Miro workflows, research notes, annotated recommendations — was compiled with the broader team and handed off to the platform's internal teams. Their response confirmed the work landed.
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
                A section of the platform that touched nearly every user workflow had been fully mapped, analyzed, and translated into a prioritized set of actionable recommendations for the first time. The platform team received a clear picture of what existed, what was broken, and what could be fixed — sequenced by what was achievable now versus what required longer term planning.
              </p>
              <p className="font-medium text-foreground">
                The diagnostic work I produced — the workflow diagrams and annotated recommendations — gave the internal team something they hadn't had before: a visual record of their own complexity. That's often the most valuable output. Not the fixes themselves, but the clarity that makes fixing possible.
              </p>
            </div>
          </section>

          {/* Artifacts */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Artifacts</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <p className="text-lg font-semibold mb-1">🗂️ Miro Workflow Diagrams</p>
                <p className="text-muted-foreground italic">
                  Complete end-to-end user journey maps for the task and task categories section — visualizing existing flows, decision points, bottlenecks, and error states across a highly complex, interconnected platform section.
                </p>
                <p className="text-sm text-muted-foreground mt-2">(Diagrams available — company name redacted to protect client confidentiality)</p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <p className="text-lg font-semibold mb-1">📋 Annotated UX Recommendations</p>
                <p className="text-muted-foreground italic">
                  Screen-level proposed changes to UI, flow logic, and interaction design — each recommendation constrained by real technical bandwidth and prioritized for near and long term implementation.
                </p>
                <p className="text-sm text-muted-foreground mt-2">(Available on request)</p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground italic">All artifacts available on request.</p>
          </section>

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

export default CaseStudyHRPlatform;
