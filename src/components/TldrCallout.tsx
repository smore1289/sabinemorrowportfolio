import { ReactNode } from "react";

interface TldrCalloutProps {
  children: ReactNode;
}

const TldrCallout = ({ children }: TldrCalloutProps) => {
  return (
    <section
      className="rounded-lg p-6 md:p-8"
      style={{
        backgroundColor: "rgba(26, 33, 255, 0.03)",
        border: "1px solid rgba(26, 33, 255, 0.14)",
      }}
    >
      <p className="text-lg text-muted-foreground" style={{ lineHeight: 1.5 }}>
        <strong className="font-bold text-muted-foreground">TL;DR:</strong>{" "}
        {children}
      </p>
    </section>
  );
};

export default TldrCallout;
