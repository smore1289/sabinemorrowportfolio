
-- Create public storage bucket for case study assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('case-study-assets', 'case-study-assets', true);

-- Allow public read access to the bucket
CREATE POLICY "Public read access" ON storage.objects
FOR SELECT USING (bucket_id = 'case-study-assets');

-- Create case_study_artifacts table
CREATE TABLE public.case_study_artifacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_slug TEXT NOT NULL,
  artifact_title TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  pdf_url TEXT NOT NULL,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.case_study_artifacts ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Anyone can view artifacts" ON public.case_study_artifacts
FOR SELECT USING (true);
