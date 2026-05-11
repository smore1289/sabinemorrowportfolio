import { ReactNode } from "react";

interface TldrCalloutProps {
  children: ReactNode;
}

const TldrCallout = ({ children }: TldrCalloutProps) => {
  return (
    <section className="rounded-lg bg-muted/60 p-6 md:p-8">
      <p className="text-lg text-muted-foreground" style={{ lineHeight: 1.5 }}>
        <strong className="font-bold text-muted-foreground">TL;DR:</strong>{" "}
        {children}
      </p>
    </section>
  );
};

export default TldrCallout;
