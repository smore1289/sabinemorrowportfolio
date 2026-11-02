import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TldrCallout from "@/components/TldrCallout";

const meta = [
  { label: "Role", value: "Product Lead / Designer / Builder" },
  { label: "Build", value: "Lovable · Database-backed forms · Bilingual content" },
  { label: "Focus", value: "Bilingual UX · Civic Engagement · Content Systems" },
  { label: "Status", value: "Live at TeaneckFirst.com" },
];

const CaseStudyTeaneckFirst = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 pt-32 pb-20 max-w-5xl">
      <div className="mb-8">
        <Link to="/#selected-projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Projects</Link>
      </div>
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">TeaneckFirst: Bilingual Civic Engagement Platform</h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          A bilingual public-information and supporter-engagement platform for a township council candidate slate, in English and Spanish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meta.map((m) => (
            <div key={m.label} className="border-l-2 border-primary pl-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">{m.label}</h3>
              <p className="text-base">{m.value}</p>
            </div>
          ))}
        </div>
      </header>
      <div className="space-y-16">
        <TldrCallout>
          Copy coming soon. A live bilingual client platform with English and Spanish paths, database-backed forms, email capture, a donation platform, and a bilingual blog.
        </TldrCallout>
        {["The Challenge", "What I Built", "Impact"].map((t) => (
          <section key={t}>
            <h2 className="text-3xl font-bold mb-6">{t}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">Copy coming soon.</p>
          </section>
        ))}
        <div><Link to="/#selected-projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Projects</Link></div>
      </div>
    </div>
  </div>
);

export default CaseStudyTeaneckFirst;
