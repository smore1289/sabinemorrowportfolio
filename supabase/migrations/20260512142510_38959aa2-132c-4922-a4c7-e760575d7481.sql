-- Restrict writes to case-study-assets bucket: deny INSERT/UPDATE/DELETE for anon and authenticated roles.
-- Service role bypasses RLS so backend uploads still work.

DROP POLICY IF EXISTS "Deny client inserts on case-study-assets" ON storage.objects;
DROP POLICY IF EXISTS "Deny client updates on case-study-assets" ON storage.objects;
DROP POLICY IF EXISTS "Deny client deletes on case-study-assets" ON storage.objects;

CREATE POLICY "Deny client inserts on case-study-assets"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id <> 'case-study-assets');

CREATE POLICY "Deny client updates on case-study-assets"
ON storage.objects
FOR UPDATE
TO anon, authenticated
USING (bucket_id <> 'case-study-assets');

CREATE POLICY "Deny client deletes on case-study-assets"
ON storage.objects
FOR DELETE
TO anon, authenticated
USING (bucket_id <> 'case-study-assets');