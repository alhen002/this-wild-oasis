import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://spusrzqyujbedpkzalwn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwdXNyenF5dWpiZWRwa3phbHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2Njg0MzYsImV4cCI6MjAxNjI0NDQzNn0.vyK0JarYBwjOfW34s6MURkXcYlBp9oMEQlQHBijJzdk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
