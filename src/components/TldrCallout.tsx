import { ReactNode } from "react";

interface TldrCalloutProps {
  children: ReactNode;
}

const TldrCallout = ({ children }: TldrCalloutProps) => {
  return (
    <section className="rounded-lg bg-muted/60 p-6 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        TL;DR
      </p>
      <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default TldrCallout;
