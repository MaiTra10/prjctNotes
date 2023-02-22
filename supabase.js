import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supaURL = "https://kfxallqojyfwpxnkvjis.supabase.co";
const supaKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmeGFsbHFvanlmd3B4bmt2amlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNjY3NDcsImV4cCI6MTk5MjY0Mjc0N30.hCKVhxFNwb2iwOWF7b5L6e0tUCsx1UOWjMeK9XSCxrs";
const supabase = createClient(supaURL, supaKey);

export default supabase;