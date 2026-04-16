import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const CaseStudyAftercallIQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20 max-w-5xl">
        <div className="mb-8">
          <Link to="/#selected-projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Projects
          </Link>
        </div>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Aftercall IQ: AI Lead Qualifier for Founders
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Dump your post-call notes. Get a verdict in 30 seconds — Qualified, Borderline, or Walk Away — scored against your criteria, not generic AI benchmarks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</h3>
              <p className="text-base">Founder / Product Lead / Designer / Builder</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Build</h3>
              <p className="text-base">Fastshot · Adapty · AI — hackathon build for #UltimateAppSprint</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Focus</h3>
              <p className="text-base">Product Strategy · AI Integration · Mobile UX · Sales Workflow Design</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Status</h3>
              <p className="text-base">Early access — aftercalliq.com · Coming to App Store and Google Play</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">Pricing</h3>
              <p className="text-base">$14.99 one-time, no subscription</p>
            </div>
          </div>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>Founders waste enormous amounts of time on leads that were never going to close. After every sales call, the mental math is the same: was that person serious? Do they have the budget? Do they fit my ICP? Do I follow up or move on?</p>
              <p>Generic AI tools give generic answers. They don't know your pricing, your ideal client, your red flags, or what "good fit" actually means for your business. The result: bad leads get followed up, good leads get dropped, and nobody has a clear pipeline.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>Aftercall IQ is an AI lead qualifier built specifically for founders and solo service providers. You set up your ICP once — your service type, price range, ideal client description, and good-fit signals. Then after every call, you dump your notes and hit Analyse.</p>
              <p>In 30 seconds, the app returns a verdict: Qualified, Borderline, or Walk Away — scored against your criteria. It flags red flags, identifies follow-up priority, and drafts a personalized follow-up message you can edit and send directly from the app.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { step: "1", title: "Set up your ICP", body: "Define your service, price range, ideal client profile, and good-fit signals. One-time setup, always editable." },
                { step: "2", title: "Log your call notes", body: "After a call, enter the prospect name, company, and your raw post-call notes — however you naturally write them." },
                { step: "3", title: "Get your verdict", body: "AI scores the lead against your ICP and returns Qualified, Borderline, or Walk Away with reasoning and red flags." },
                { step: "4", title: "Act immediately", body: "Review the AI-drafted follow-up, edit it in the app, and send — or archive the lead and move on." },
              ].map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {[
                "Instant AI lead scoring — Qualified, Borderline, or Walk Away in 30 seconds",
                "Scored against YOUR criteria, not generic AI benchmarks",
                "Pipeline dashboard — track all leads, statuses, and follow-up priority",
                "AI Insights — focus your energy on the leads most likely to close",
                "Auto-drafted follow-up copy — editable, ready to send via email, SMS, or copy",
                "Red flag detection — surface deal-breakers before you waste more time",
                "$14.99 one-time, no subscription — no recurring cost to use your own tool",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-lg">
                  <span className="text-primary mt-1.5 flex-shrink-0">●</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">The Build</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>Aftercall IQ was built for the #UltimateAppSprint hackathon, run by the NoCode Founders team. The entire product — concept, design, build, monetization, and submission — was completed in hackathon timeframe by a solo founder.</p>
              <p>Built on Fastshot (no-code mobile), monetized with Adapty (one-time purchase, no subscription). The AI scoring layer uses a custom prompt architecture trained against the user's own ICP data — not a generic model applied to generic inputs.</p>
              <p>This is the same AI-accelerated, solo-build methodology behind Day41 and Study Buddy — ship a working product fast, validate with real users, iterate.</p>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Try Aftercall IQ</h2>
            <p className="text-lg text-muted-foreground mb-8">Early access is live. Sign up to get notified when the app hits the App Store and Google Play.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://aftercalliq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                Get Early Access →
              </a>
              <a
                href="https://aftercalliq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border font-medium rounded-md hover:bg-muted transition-colors"
              >
                Try the Demo
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAftercallIQ;
