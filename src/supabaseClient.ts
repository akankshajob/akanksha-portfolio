import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yvsaevbrsnfrllhulzvb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2c2FldmJyc25mcmxsaHVsenZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMzg3NjgsImV4cCI6MjA2NzcxNDc2OH0.vZBN8Rj4dIGeKg5dFn2tBIZgz1e60tPYF3rEIxDIaE4';
export const supabase = createClient(supabaseUrl, supabaseKey); 