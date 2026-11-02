import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Enterprise Discipline, Founder Speed",
    description: "I've done structured delivery inside global financial, pharma, and insurance companies, and I build and ship my own AI products."
  },
  {
    title: "AI With Guardrails",
    description: "I design AI workflows with human review, safety rules, and clear decision logic, so the product behaves predictably."
  },
  {
    title: "From Unclear to Launched",
    description: "I take on messy problems, such as undocumented systems, stalled programs, and new ideas, and turn them into requirements, workflows, and working products."
  },
  {
    title: "Hands-On, Start to Finish",
    description: "I work as part of your team, covering discovery and requirements through build, QA, and launch."
  }
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(26, 33, 255, 0.03)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">Why Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
