
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ProjectDetails = () => {
  const { id } = useParams();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Project Details: {id}</h1>
          <p className="text-muted-foreground">Full case study content coming soon...</p>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
