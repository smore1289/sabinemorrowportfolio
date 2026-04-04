import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Document, Page, pdfjs } from "react-pdf";
import { ZoomIn, ZoomOut, X } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Artifact {
  id: string;
  artifact_title: string;
  thumbnail_url: string;
  pdf_url: string;
  display_order: number;
}

interface WorkArtifactsProps {
  projectSlug: string;
}

const WorkArtifacts = ({ projectSlug }: WorkArtifactsProps) => {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState(1.0);

  useEffect(() => {
    const fetchArtifacts = async () => {
      const { data, error } = await supabase
        .from("case_study_artifacts")
        .select("*")
        .eq("project_slug", projectSlug)
        .order("display_order", { ascending: true });

      if (!error && data) {
        setArtifacts(data);
      }
      setLoading(false);
    };
    fetchArtifacts();
  }, [projectSlug]);

  if (loading || artifacts.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Work Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <button
            key={artifact.id}
            onClick={() => {
              setSelectedArtifact(artifact);
              setScale(1.0);
            }}
            className="group rounded-lg border bg-card overflow-hidden text-left transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={artifact.thumbnail_url}
                alt={artifact.artifact_title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="font-medium text-sm">{artifact.artifact_title}</p>
              <p className="text-xs text-primary mt-1">View Diagram →</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={!!selectedArtifact}
        onOpenChange={(open) => {
          if (!open) setSelectedArtifact(null);
        }}
      >
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-0 overflow-hidden bg-background border-none">
          <VisuallyHidden>
            <DialogTitle>{selectedArtifact?.artifact_title}</DialogTitle>
          </VisuallyHidden>

          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-2 border-b bg-card">
            <p className="text-sm font-medium truncate mr-4">
              {selectedArtifact?.artifact_title}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
                className="p-1.5 rounded hover:bg-muted"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="text-xs w-12 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale((s) => Math.min(3, s + 0.25))}
                className="p-1.5 rounded hover:bg-muted"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="overflow-auto max-h-[calc(95vh-3rem)] p-4 flex justify-center">
            {selectedArtifact && (
              <Document
                file={selectedArtifact.pdf_url}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={
                  <div className="flex items-center justify-center h-64">
                    <p className="text-muted-foreground">Loading PDF…</p>
                  </div>
                }
              >
                <div className="space-y-4">
                  {Array.from({ length: numPages }, (_, i) => (
                    <Page
                      key={i + 1}
                      pageNumber={i + 1}
                      scale={scale}
                      className="shadow-md"
                    />
                  ))}
                </div>
              </Document>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkArtifacts;
