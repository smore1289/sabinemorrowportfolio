import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

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

const isImageUrl = (url: string) => /\.(png|jpe?g|gif|webp|svg)$/i.test(url);

const WorkArtifacts = ({ projectSlug }: WorkArtifactsProps) => {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

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
      <div className={`grid grid-cols-1 gap-6 ${artifacts.length === 3 || artifacts.length >= 5 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {artifacts.map((artifact) => (
          <button
            key={artifact.id}
            onClick={() => {
              if (isImageUrl(artifact.pdf_url)) {
                setLightboxImage({ url: artifact.pdf_url, title: artifact.artifact_title });
              } else {
                setSelectedArtifact(artifact);
              }
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
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full p-0 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-card">
            <DialogTitle className="text-sm font-medium truncate mr-4">{selectedArtifact?.artifact_title}</DialogTitle>
            <a
              href={selectedArtifact?.pdf_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline shrink-0 mr-6"
            ></a>
          </div>

          <iframe
            key={selectedArtifact?.id}
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(selectedArtifact?.pdf_url || "")}&embedded=true`}
            title={selectedArtifact?.artifact_title}
            className="w-full border-0"
            style={{ height: "80vh" }}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!lightboxImage}
        onOpenChange={(open) => {
          if (!open) setLightboxImage(null);
        }}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full p-0 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-card">
            <DialogTitle className="text-sm font-medium truncate mr-4">{lightboxImage?.title}</DialogTitle>
          </div>
          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <img
              src={lightboxImage?.url}
              alt={lightboxImage?.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkArtifacts;
