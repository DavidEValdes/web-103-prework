import { createClient } from '@supabase/supabase-js';

const URL = 'https://gahkfffertzsmzqohisw.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaGtmZmZlcnR6c216cW9oaXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwOTYzNjQsImV4cCI6MjAzOTY3MjM2NH0.rpYinx2_NIKRGuR7mJMV-3DoG7j1pHFEWpQ9mcF0fa4';

export const supabase = createClient(URL, API_KEY);