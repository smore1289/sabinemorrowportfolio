import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, BarChart3, GanttChart, Briefcase } from "lucide-react";

const services = [
  {
    title: "Design & Branding",
    description: "Creating visual identities that connect with your audience through strategic design, typography, and color systems.",
    icon: <Paintbrush className="h-8 w-8" />,
  },
  {
    title: "Brand Strategy",
    description: "Developing comprehensive brand strategies that position your business effectively in the market and resonate with your ideal clients.",
    icon: <BarChart3 className="h-8 w-8" />,
  },
  {
    title: "Operations Management",
    description: "Streamlining your business processes, implementing systems, and creating workflows that save time and increase efficiency.",
    icon: <GanttChart className="h-8 w-8" />,
  },
  {
    title: "Fractional Leadership",
    description: "Providing expert guidance and support as your fractional marketing director or operations leader when you need strategic direction without a full-time hire.",
    icon: <Briefcase className="h-8 w-8" />,
  },
];

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">What I Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-background">
              <CardContent className="p-8">
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
