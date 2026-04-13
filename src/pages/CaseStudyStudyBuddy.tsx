import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkArtifacts from "@/components/WorkArtifacts";

const CaseStudyStudyBuddy = () => {
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
              Study Buddy — AI-Powered Study Assistant for Real-World Kids
            </h1>
            <p className="text-lg md:text-xl italic text-muted-foreground mb-8">
              Smarter notes, better grades — turning handwritten notes into personalized study guidance for students who don't always have access to tutors or quiet study spaces.
            </p>

            <dl className="grid grid-cols-1 gap-y-4 text-base">
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Role</dt>
                <dd className="mt-1">Founder / Product Lead / Designer / Builder</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Build</dt>
                <dd className="mt-1">Figma → Replit → Fastshot — designed and launched in a 48-hour sprint</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Focus</dt>
                <dd className="mt-1">Product Strategy · UX Design · Content Architecture · Launch Execution · No-Code Build · Mission-Driven Product</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Status</dt>
                <dd className="mt-1">
                  Web app live at{" "}
                  <a href="https://study-buddy.academy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    study-buddy.academy
                  </a>
                  {" "}— iOS app in review. Marketing site:{" "}
                  <a href="https://about.study-buddy.academy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    about.study-buddy.academy
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Content */}
        <div className="container px-4 max-w-3xl mx-auto py-12 md:py-20 space-y-16">

          {/* Inspiration & Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Inspiration &amp; Mission</h2>
            <h3 className="text-lg font-medium text-muted-foreground mb-4">From I Believe Academy to Study Buddy</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I Believe Academy was created to interrupt the school-to-prison pipeline by giving kids structure, skills, and a different vision for their futures — through martial arts, success coaching, and STEAM storytelling.
              </p>
              <p>
                Study Buddy extends that mission into their everyday schoolwork, turning the phone in their pocket into a coach that helps them feel prepared, capable, and seen.
              </p>
            </div>
          </section>

          {/* What I Built */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">What I Built</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Study Buddy lets students upload or snap a photo of their handwritten notes, then uses AI to decipher the handwriting, identify the subject, and analyze the content for accuracy and completeness. Within seconds, it returns an easy-to-skim summary, highlights any gaps or misunderstandings, and offers tailored study tips aligned to the topic, along with positive reinforcement to keep them motivated.
              </p>

              <h3 className="text-lg font-medium text-foreground">Simple flows for complex lives</h3>
              <p>
                The experience is intentionally simple: no accounts required for first use, minimal taps, and a clear, linear workflow from "snap your notes" to "study plan." The tone of the UI and copy mirrors the ethos of I Believe Academy — firm, optimistic, and focused on building self-belief, not just better test scores.
              </p>

              <p>
                <strong>Upload Your Notes</strong> — Students snap or upload photos of their handwritten notes from class.
              </p>
              <p>
                <strong>AI Reads &amp; Deciphers</strong> — Study Buddy transcribes handwriting, detects the subject and structures the content.
              </p>
              <p>
                <strong>Accuracy Check</strong> — The system compares the notes against core concepts for that topic and flags gaps or misconceptions.
              </p>
              <p>
                <strong>Personalized Study Tips</strong> — Students receive concrete suggestions on what to review, what to look up, and how to remember key concepts.
              </p>
              <p>
                <strong>Encouragement &amp; Next Steps</strong> — Friendly, strengths-based feedback helps students feel seen and capable, not judged.
              </p>
            </div>
          </section>

          {/* The Approach */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Approach</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                This project started as a weekend experiment: could I design, build and launch an AI-powered study assistant that reflects the realities of kids I served through I Believe Academy?
              </p>
            </div>
          </section>

          {/* The Outcome */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The Outcome</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In 48 hours, I shipped the web app, a marketing landing page, a promo video, and prepared the mobile app for App Store submission — creating a fully testable product that students can use immediately.
              </p>
              <p>
                The visual language — soft greens, rounded cards, and clear hierarchy — is intentionally calming and non-intimidating for learners who may already feel behind. Microcopy reinforces small wins ("Nice work capturing the main idea" vs. "You missed this"), a pattern borrowed directly from martial arts belt progression and success coaching at I Believe Academy.
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
                  Study Buddy is live and fully accessible. Try the full experience — snap or upload handwritten notes and receive AI-powered study guidance instantly.
                </p>
                <div className="w-full rounded-md mt-4 bg-muted flex items-center justify-center h-48 text-muted-foreground text-sm">
                  Screenshot placeholder — add image later
                </div>
                <p className="text-sm mt-2">
                  <a
                    href="https://study-buddy.academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit study-buddy.academy →
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Work Artifacts */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Work Artifacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group rounded-lg border bg-card overflow-hidden text-left">
                <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center text-muted-foreground text-sm">
                  UX Workflow — placeholder
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm">UX Workflow</p>
                  <p className="text-xs text-primary mt-1">View Diagram →</p>
                </div>
              </div>
              <div className="group rounded-lg border bg-card overflow-hidden text-left">
                <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center text-muted-foreground text-sm">
                  Figma UI — placeholder
                </div>
                <div className="p-4">
                  <p className="font-medium text-sm">Figma UI</p>
                  <p className="text-xs text-primary mt-1">View Diagram →</p>
                </div>
              </div>
            </div>
          </section>

          <WorkArtifacts projectSlug="study-buddy" />

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

export default CaseStudyStudyBuddy;
