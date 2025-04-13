
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Design Expertise & Business Strategy",
    description: "I bridge the gap between beautiful design and business objectives, ensuring your brand not only looks good but performs effectively."
  },
  {
    title: "End-to-End Implementation",
    description: "From visual design to operational systems, I provide comprehensive solutions that transform both how you look and how you work."
  },
  {
    title: "Streamlined Process",
    description: "My methodical approach ensures projects stay on track, within scope, and deliver meaningful results without unnecessary complexity."
  },
  {
    title: "Client Partnership",
    description: "I work as an extension of your team, bringing expertise while respecting your vision and collaborating to achieve your goals."
  }
];

const WhyMe = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
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
