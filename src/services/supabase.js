import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jqjsjnbbxmysbndbspeb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxanNqbmJieG15c2JuZGJzcGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzODg2ODMsImV4cCI6MjAxOTk2NDY4M30.EKS-5JONYazQM1xeunlUF9Ou6bjtTdsOmmQ61068vzY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
