INSERT INTO storage.buckets (id, name, public) VALUES ('videos', 'videos', true);

CREATE POLICY "Allow public read access on videos" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'videos');

CREATE POLICY "Allow authenticated upload to videos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'videos');