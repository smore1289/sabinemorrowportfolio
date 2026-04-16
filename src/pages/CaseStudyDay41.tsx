import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkArtifacts from "@/components/WorkArtifacts";

const CaseStudyDay41 = () => {
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
              Day41: Founder-Built Product
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              A postpartum health advocacy app — designed, built, and launched solo — to help Black mothers track their recovery, understand their bodies, and walk into every appointment impossible to dismiss.
            </p>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</dt>
                <dd className="text-base">Founder / Product Lead / Designer / Builder</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Build</dt>
                <dd className="text-base">Figma → Replit — designed and launched in approximately 2 weeks</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Focus</dt>
                <dd className="text-base">Product Strategy · UX Design · Content Architecture · No-Code Build · Mission-Driven Product</dd>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Status</dt>
                <dd className="text-base">Live at Day41App.com — seeking 100 beta testers</dd>
              </div>
            </dl>
          </div>
        </section>


        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto py-12 md:py-20 space-y-16">
          {/* The Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Mission</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Black women in America are more than three times more likely to die from pregnancy-related complications than white women — and 65% of those deaths happen after delivery, in the weeks when mothers have been sent home, told they're fine, and left without support. Symptoms go unnoticed. Warning signs never reach the people who could act on them.
              </p>
              <p>
                Day41 was built for those days. The postpartum period is generally understood as 40 days — Day 41 is the aspiration, the day a woman feels fully herself again. This app was designed for the woman who needs to advocate for herself: to understand what's normal and what isn't, and walk into a doctor's office with the evidence and the words to demand the care she deserves.
              </p>
            </div>
          </section>

          {/* What I Built */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Built</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Day41 is a fully authenticated web application with seven core features working together as a single, coherent product:
              </p>
              <p>
                <strong>Symptom & Mood Tracking</strong> — daily check-ins logging physical symptoms, mood, sleep, and mental state. Fast, private, no journals required.
              </p>
              <p>
                <strong>Trend Analysis</strong> — the app tracks patterns across entries over time, surfacing what's changing and what needs attention before the next appointment.
              </p>
              <p>
                <strong>Personalized Recommendations</strong> — based on what a user logs, the app responds. Breathing exercises for anxiety. Guided meditation for stress. Psychoeducation articles explaining what's happening in her body and what's considered normal versus concerning.
              </p>
              <p>
                <strong>Health Summary Report</strong> — exportable across 7, 14, or 30-day windows. Designed to be brought to a medical appointment as documented evidence of her experience.
              </p>
              <p>
                <strong>Provider Guide — "Your Voice Matters"</strong> — scripted language to describe symptoms clearly, a personal question checklist to bring to appointments, and a dedicated section for if she feels dismissed. Exact words to use. Exact questions to ask. Because having data isn't enough if the system doesn't listen.
              </p>
              <p>
                <strong>Wellness Resources</strong> — a curated library of crisis lines, maternal mental health resources, sleep guidance, anxiety support, daily affirmations, and recommended reading — sourced specifically for Black women and their communities.
              </p>
              <p>
                <strong>SOS Button</strong> — persistent across every screen. One tap opens the user's personal emergency contacts. Always there. Never more than a moment away.
              </p>
            </div>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Day41 went through multiple design iterations before a single line of code was written. The concept lived first in Figma — shaping flows, dashboard architecture, content hierarchy, and, most importantly, how the app should feel: warm, private, empowering; clinical enough to be trusted, human enough to feel safe.
              </p>
              <p>
                When it was finally time to build in Replit, that upfront design work meant every prompt had intention. If the UI drifted from the vision — wrong palette, wrong emotional tone — I went back to Figma, fixed it, and brought the corrected direction back into the build, shipping a fully QA'd, end-to-end authenticated app in about two weeks.
              </p>
              <p>
                The content architecture was just as intentional. The wellness plan is organized into DO NOW, LEARN, and REACH OUT, because what someone needs at 2am in a panic is different from what they need at a planned appointment. The Provider Guide exists because the gap wasn't only medical — it was communicative. Women were being dismissed not just by bias, but by a lack of language and documentation strong enough to make dismissal impossible.
              </p>
              <p>
                Day41 doesn't replace a doctor — it says so clearly and often. What it does is make sure that when a woman walks into that room, she is prepared, documented, and impossible to ignore.
              </p>
            </div>
          </section>

          {/* The Outcome */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Outcome</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A live, fully authenticated web application — designed in Figma, built in Replit, QA'd end to end, and available now at Day41App.com.
              </p>
              <p>
                This is a passion project and an ongoing one. The next step is 100 beta testers — real postpartum women whose feedback will validate the experience, surface what needs to change, and shape the next iteration. From there, the goal is to put Day41 in the hands of the people who can use it most: doulas, nurses, and women's health centers. Not as a product to sell. As a tool to give away to the women who need it.
              </p>
              <p>
                The most dangerous days don't happen in the delivery room. Day41 was built for the days after.
              </p>
            </div>
          </section>

          {/* Artifacts */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Artifacts</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border bg-card">
                <p className="text-lg font-semibold mb-1">📱 Live Product</p>
                <p className="text-muted-foreground italic">
                  Day41 is live and fully accessible. Create a free account to experience the full authenticated user flow — symptom tracking, trend analysis, health report generation, provider guide, and wellness resources.
                </p>
                <img
                  src="https://tcgvblopiwevmrifsbxw.supabase.co/storage/v1/object/public/case-study-assets/day-41-app/day-41-app-thumb-3.png"
                  alt="Day41 App Preview"
                  className="w-full rounded-md mt-4"
                />
                <p className="text-sm mt-2">
                  <a
                    href="https://day41app.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Day41App.com →
                  </a>
                </p>
              </div>
            </div>
          </section>

          <WorkArtifacts projectSlug="day-41-app" />

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

export default CaseStudyDay41;
